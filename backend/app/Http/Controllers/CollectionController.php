<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCollectionRequest;
use App\Models\Collection;
use Illuminate\Support\Facades\Auth;

class CollectionController extends Controller
{
    public function store (StoreCollectionRequest $request)
    {
        $validated = $request->validated();

        $auth = Auth::user();

        $validated["user_id"] = $auth->id;

        $collection = Collection::create($validated);

        return response()->json([
            "message" => "success",
            "collectionId" => $collection->id,
            "request" => $request->all()
        ]);
    }
}