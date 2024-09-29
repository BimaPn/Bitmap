<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePostRequest;
use App\Models\Collection;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class PostController extends Controller
{

    public function getUserPosts(User $user)
    {
        $posts = $user->posts()->latest()->paginate(15);

        $result = $posts->each(function ($post) {
            $post["creator"] = [
                "name" => auth()->user()->name,
                "username" => auth()->user()->username,
                "avatar" => auth()->user()->avatar
            ];
            $post["isLiked"] = $post->isAuthLiked();
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

        $result = $recommendedPosts->each(function ($post) {
            $post["isLiked"] = $post->isAuthLiked();
        });

        return response()->json([
            "message" => "Success.",
            "posts" => $result
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

        $result = $posts->each(function ($post) {
            $post["isLiked"] = $post->isAuthLiked();
        });

        return response()->json([
            "message" => $query,
            "posts" => $result
        ]);
    }


    public function getTrendingPosts()
    {
        $posts = Post::with("creator:id,name,username,avatar")
            ->latest()->paginate(15);

        $result = $posts->each(function ($post) {
            $post["isLiked"] = $post->isAuthLiked();
        });

        return response()->json([
            "message" => "success",
            "posts" => $result
        ]);
    }

    public function getCollectionPosts(Collection $collection)
    {
        $posts = $collection->posts()->with("creator:id,name,username,avatar")->latest()->paginate(15);

        $result = $posts->each(function ($post) {
            $post["isLiked"] = $post->isAuthLiked();
        });

        return response()->json([
            "message" => "success",
            "posts" => $result
        ]);

    }

}
