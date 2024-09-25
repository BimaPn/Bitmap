<?php
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

// Follow routes
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/users/{user}', [UserController::class, 'getUser']);
    Route::post('/users/{user}/follow', [UserController::class, 'follow']);
    Route::post('/users/{user}/unfollow', [UserController::class, 'unfollow']);
    Route::get('/users/{user}/followers', [UserController::class, 'getUserFollowers']);
    Route::get('/users/{user}/followings', [UserController::class, 'getUserFollowings']);
});
