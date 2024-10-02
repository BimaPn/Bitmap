<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Collection extends Model
{
    use HasUuids;

    protected $guarded = ["id"];

    public function creator()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function posts ()
    {
        return $this->belongsToMany(Post::class, "collection_posts");
    }
}
