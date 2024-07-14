<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Comment;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, $postId)
    {
        $validatedData = $request->validate([
            'comment' => 'required|string|max:255',
        ]);

        $post = Post::findOrFail($postId);

        // if (!$post) {
        //     return response()->json(['message' => 'Post not found.'], 404);
        // }

        $comment = new Comment();
        $comment->comment = $validatedData['comment'];
        $comment->post_id = $post->id; // Mengaitkan komentar dengan postingan yang sesuai

            foreach ($post as $p) {
                $comment->post_id = $p->id;
            }

        $comment->user_id = auth()->id(); // Mengaitkan komentar dengan pengguna yang sedang masuk

        $comment->save();

        return response()->json(['message' => 'Comment created successfully.'], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Comment $comment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Comment $comment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Comment $comment)
    {
        //
    }
}
