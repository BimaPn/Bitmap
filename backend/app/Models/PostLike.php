<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostLike extends Model
{
    use HasFactory;

    protected $guarded = ["id"];

    // Relationships

    public function users ()
    {
        return $this->hasMany(User::class);
    }

    public function posts ()
    {
        return $this->hasMany(Post::class);
    }
}
