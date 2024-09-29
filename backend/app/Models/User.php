<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Facades\File;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Overtrue\LaravelFollow\Traits\Followable;
use Overtrue\LaravelFollow\Traits\Follower;

class User extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens, HasUuids, Followable, Follower;


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'username',
        'email',
        "bio",
        "avatar",
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    // Custom methods

    public function getInfo ()
    {
        $statistic = [
            "followers" => $this->followers()->count(),
            "followings" => $this->followings()->count(),
            "posts" => $this->posts()->count()
        ];
        return [
            "id" => $this->id,
            "name" => $this->name,
            "email" => $this->email,
            "username" => $this->username,
            "avatar" => $this->avatar,
            "bio"=> $this->bio,
            "statistic" => $statistic
        ];
    }

    public function deleteAvatar ()
    {
        if($this->avatar != url('/storage/users/default.jpg'))
        {
            $path = parse_url($this->avatar);
            $storagePath = public_path();
            $fullPath = $storagePath . str_replace('\\','/',$path['path']);
            File::delete($fullPath);
            return $fullPath;
        }
        return "empty";
    }

    // Relationships
    public function posts()
    {
        return $this->hasMany(Post::class);
    }
    public function collections()
    {
        return $this->hasMany(Collection::class);
    }

    public function postsLiked ()
    {
        return $this->belongsToMany(Post::class, "post_likes");
    }

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getRouteKeyName()
    {
       return 'username';
    }

}
