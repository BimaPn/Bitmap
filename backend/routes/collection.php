<?php

use App\Http\Controllers\CollectionController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/collections/{collection}/get', [CollectionController::class, 'getDetail']);
    Route::get('/collections/recommendations', [CollectionController::class, 'getCollectionRecommendations']);
    Route::get('/users/{user}/collections', [CollectionController::class, 'getUserCollections']);
    Route::post('/collections/create', [CollectionController::class, 'store']);
});
