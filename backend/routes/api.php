<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\FollowController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CommentController;


Route::post('/register', [AuthController::class, 'register']);

Route::post('login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->post('logout', [AuthController::class, 'logout']);
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Follow routes
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/follow/{user}', [FollowController::class, 'follow']);
    Route::post('/unfollow/{user}', [FollowController::class, 'unfollow']);
});

// Post routes
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/posts', [PostController::class, 'store']);
    Route::put('/posts/{id}', [PostController::class, 'update']);
    Route::delete('/posts/{id}', [PostController::class, 'destroy']);
    Route::post('/posts/{id}/like', [PostController::class, 'like']);
    Route::post('/posts/{id}/save', [PostController::class, 'savePost']);
    Route::get('/posts/preview', [PostController::class, 'getPreviewPosts']);
    Route::get('/posts/search', [PostController::class, 'search']);
    Route::get('/posts/trending', [PostController::class, 'getTrendingPosts']);
    Route::get('/posts/user/{userId}', [PostController::class, 'getUserPosts']);
    Route::get('/posts/following', [PostController::class, 'getFollowingUserPosts']);
    Route::resource('posts', PostController::class)->except(['create', 'edit']);
    Route::post('/posts/{id}/comments', [CommentController::class, 'store']);
});
