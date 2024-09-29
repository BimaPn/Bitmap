<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\PostLike;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostLikeController extends Controller
{

    public function like (Post $post)
    {
        $auth = Auth::user();

        $isLiked = $post->isAuthLiked();

        if(!$isLiked) {
            PostLike::create([
                "user_id" => $auth->id,
                "post_id" => $post->id
            ]);

            return response()->json([
                "success" => true
            ]);
        }

        return response()->json([
            "success" => false
        ]);
    }

    public function unlike (Post $post)
    {
        $auth = Auth::user();

        $liked = PostLike::where("user_id",$auth->id)
            ->where("post_id", $post->id)->first();

        if($liked) {
            $liked->delete();

            return response()->json([
                "success" => true
            ]);
        }

        return response()->json([
            "success" => false
        ]);
    }

}
