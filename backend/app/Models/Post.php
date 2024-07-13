<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;


class Post extends Model
{
    use HasFactory;

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
    protected $fillable = [
        'user_id',
        'title',
        'description',
        'image_path',
        'category_id',
        'uuid'
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($post) {
            $post->uuid = static::generateUuid();
        });
    }

    public static function generateUuid()
    {
    do  {
        $uuid = Str::random(7);
        }
    while (self::where('uuid', $uuid)->exists());

        return $uuid;
    }

}
