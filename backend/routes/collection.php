<?php

use App\Http\Controllers\CollectionController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function () {
    // Route::get('/posts/{post}/get', [PostController::class, 'getPost']);
    Route::post('/collections/create', [CollectionController::class, 'store']);
});
