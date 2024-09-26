<?php

use App\Http\Controllers\CollectionController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/collections/{collection}/get', [CollectionController::class, 'getDetail']);
    Route::post('/collections/create', [CollectionController::class, 'store']);
});
