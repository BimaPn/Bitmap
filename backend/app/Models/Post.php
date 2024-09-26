<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;


class Post extends Model
{
    use HasFactory, HasUuids;


    protected $guarded = ["id"];

    protected static function boot()
    {
        parent::boot();
    }



    // public function comments()
    // {
    //     return $this->hasMany(Comment::class);
    // }

    // public function likes()
    // {
    //     return $this->belongsToMany(User::class, 'likes', 'post_id', 'user_id');
    // }
    //
    // public function saves()
    // {
    //     return $this->belongsToMany(User::class, 'saves', 'post_id', 'user_id');
    // }

    public function creator()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function collections()
    {
        return $this->belongsToMany(Collection::class, "post_collections");
    }


}
