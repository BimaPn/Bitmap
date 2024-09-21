<?php

use App\Http\Controllers\CategoryController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/categories/all', [CategoryController::class, 'index']);
    Route::get('/categories/popular', [CategoryController::class, 'getMostPopular']);
    Route::get('/posts/trending', [PostController::class, 'getTrendingPosts']);
    Route::get('/posts/{post}/get', [PostController::class, 'getPost']);
    Route::post('/posts/create', [PostController::class, 'store']);
    Route::get('/posts/auth', [PostController::class, 'getAuthPosts']);
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
