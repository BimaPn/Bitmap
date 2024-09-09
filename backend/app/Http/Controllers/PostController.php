<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Retrieve all posts
        $posts = Post::all();

        // Return posts as JSON response
        return response()->json($posts, 200);
    }

    public function getPost (Post $post)
    {
        $post->load("creator:id,name,username,avatar")->only(["id","title","description","creator"]);
        return response()->json([
            "post" => $post
        ]);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'description' => 'nullable|string|max:255',
            'image_path' => 'required|string|max:255',
            'category_id' => 'required|exists:categories,id',
        ]);

        if ($validator->fails()) {
            return redirect()->back()
                             ->withErrors($validator)
                             ->withInput();
        }

        $post = new Post();
        $post->user_id = Auth::id();
        $post->title = $request->title;
        $post->description = $request->description;
        $post->image_path = $request->image_path;
        $post->category_id = $request->category_id;

        $post->save();

        return redirect()->route('posts.index')->with('success', 'Post created successfully.');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'description' => 'nullable|string|max:255',
            'image_path' => 'required|string|max:255',
            'category_id' => 'required|exists:categories,id',
        ]);

        if ($validator->fails()) {
            return redirect()->back()
                             ->withErrors($validator)
                             ->withInput();
        }

        $post = Post::findOrFail($id);
        $post->title = $request->title;
        $post->description = $request->description;
        $post->image_path = $request->image_path;
        $post->category_id = $request->category_id;

        $post->save();

        return redirect()->route('posts.index')->with('success', 'Post updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $id)
    {
        $post = Post::findOrFail($id);
        $post->delete();

        return redirect()->route('posts.index')->with('success', 'Post deleted successfully.');

    }
    public function like($id)
    {
        $post = Post::findOrFail($id);
        $post->likes()->attach(Auth::id());

        return response()->json(['message' => 'Post liked successfully.'], 200);
    }

    public function savePost($id)
    {
        $post = Post::findOrFail($id);
        $post->saves()->attach(Auth::id());

        return response()->json(['message' => 'Post saved successfully.'], 200);
    }

    public function show($id)
    {
        $post = Post::with('creator')->findOrFail($id);

        return response()->json($post, 200);
    }

    public function getPreviewPosts()
    {
        $posts = Post::select('id as post_id', 'image_path as image', 'user_id')
                    ->with(['creator:id,avatar,name,username'])
                    ->simplePaginate(15);

        return response()->json($posts, 200);
    }
    public function search(Request $request)
    {
        $query = $request->input('query');

        $posts = Post::where('title', 'LIKE', "%{$query}%")
                    ->orWhere('description', 'LIKE', "%{$query}%")
                    ->simplePaginate(15);

        return response()->json($posts, 200);
    }

    public function getUserPosts($userId)
    {
        $posts = Post::where('user_id', $userId)
                    ->simplePaginate(15);

        return response()->json($posts, 200);
    }

    public function getTrendingPosts()
    {
        $posts = Post::latest()->paginate(15);

        return response()->json([
            "message" => "success",
            "posts" => $posts->items()
        ]);
    }
    public function getFollowingUserPosts()
    {
        $followingUserIds = Auth::user()->follows()->pluck('id');
        $posts = Post::whereIn('user_id', $followingUserIds)
                    ->simplePaginate(15);

        return response()->json($posts, 200);
}




}
