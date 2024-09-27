<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCollectionRequest;
use App\Models\Collection;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

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
    public function getDetail (Collection $collection)
    {
        $collection->load("creator:id,username,name,avatar");
        $postCount = $collection->posts()->count();

        $collection["postCount"] = $postCount;

        return response()->json([
            "collection" => $collection
        ]);
    }

    public function search (Request $request)
    {
        $query = $request->input("query");

        $collections = Collection::where('name', 'like', '%' . $query . '%')
        ->withCount('posts')
        ->with(['posts' => function ($query) {
            $query->limit(3);
        }])
        ->paginate(15);

        return response()->json([
            "message" => "success.",
            "collections" => $collections->items()
        ]);
    }

    public function getUserCollections (User $user)
    {
        $collections = $user->collections()
        ->withCount('posts')
        ->with(['posts' => function ($query) {
            $query->limit(3);
        }])
        ->latest()
        ->paginate(15);


        return response()->json([
            "collections" => $collections->items()
        ]);
    }

    public function getCollectionRecommendations ()
    {
        $collections = Collection::inRandomOrder()
        ->withCount("posts")
        ->with("posts:id,media")
        ->limit(5)
        ->get();

        return response()->json([
            "message" => "success.",
            "collections" => $collections
        ]);
    }

}
