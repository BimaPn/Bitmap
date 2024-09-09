<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\PostController;

Route::middleware('auth:sanctum')->group(function () {

    Route::get('/posts/trending', [PostController::class, 'getTrendingPosts']);
    Route::get('/posts/{post}/get', [PostController::class, 'getPost']);
    // Route::put('/posts/{id}', [PostController::class, 'update']);
    // Route::delete('/posts/{id}', [PostController::class, 'destroy']);
    // Route::post('/posts/{id}/like', [PostController::class, 'like']);
    // Route::post('/posts/{id}/save', [PostController::class, 'savePost']);
    // Route::get('/posts/preview', [PostController::class, 'getPreviewPosts']);
    // Route::get('/posts/search', [PostController::class, 'search']);
    // Route::get('/posts/trending', [PostController::class, 'getTrendingPosts']);
    // Route::get('/posts/user/{userId}', [PostController::class, 'getUserPosts']);
    // Route::get('/posts/following', [PostController::class, 'getFollowingUserPosts']);
    // Route::resource('posts', PostController::class)->except(['create', 'edit']);
    // Route::post('/posts/{id}/comments', [CommentController::class, 'store']);
});