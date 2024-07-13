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
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        //
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
    public function destroy(Post $post)
    {
        //
    }
}
