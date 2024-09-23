<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePostRequest;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class PostController extends Controller
{

    public function getAuthPosts()
    {
        $user = auth()->user();

        $posts = $user->posts()->paginate(15);

        $result = $posts->each(function ($post) {
            $post["creator"] = [
                "name" => auth()->user()->name,
                "username" => auth()->user()->username,
                "avatar" => auth()->user()->avatar
            ];
        });

        return response()->json([
            "message" => "success",
            "posts" => $result
        ]);
    }

    public function getPost (Post $post)
    {
        $post->load("creator:id,name,username,avatar")->only(["id","title","description","creator"]);
        return response()->json([
            "post" => $post
        ]);
    }

    public function getRecommendationPosts (Post $post)
    {
        $recommendedPosts = Post::where('category_id', $post->category_id)
        ->where('id', '!=', $post->id)
        ->with("creator:id,name,username,avatar")
        ->inRandomOrder()
        ->paginate(15);

        return response()->json([
            "message" => "Success.",
            "posts" => $recommendedPosts->items()
        ]);
    }

    public function store(StorePostRequest $request)
    {
        $validatedData = $request->validated();

        $user = auth()->user();
        if($request->file('media')){
            $validatedData['media'] = url('/storage/'.$request->file('media')->store('/posts'));
        }

        $validatedData["user_id"] = $user->id;

        Post::create($validatedData);

        return response()->json([
            "message" => "successfully created a post."
        ]);
    }

    public function searchPosts (Request $request)
    {
        $query = $request->input("query");

        $posts = Post::latest()
        ->where('title', 'like', '%' . $query . '%')
        ->with("creator:id,name,username,avatar")
        ->inRandomOrder()
        ->paginate(15);

        return response()->json([
            "message" => $query,
            "posts" => $posts->items()
        ]);
    }

    public function getUserPosts($userId)
    {
        $posts = Post::where('user_id', $userId)
        ->simplePaginate(15);

        return response()->json($posts, 200);
    }

    public function getTrendingPosts()
    {
        $posts = Post::with("creator:id,name,username,avatar")
            ->latest()->paginate(15);

        return response()->json([
            "message" => "success",
            "posts" => $posts->items()
        ]);
    }

}
