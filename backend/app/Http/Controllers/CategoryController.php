<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    public function index ()
    {
        $categories = Category::select(["id","name","description", "thumbnail","slug"])->get();

        return response()->json([
            "categories" => $categories
        ]);
    }

    public function getMostPopular ()
    {
        $categories = Category::select(["id","name", "description", "thumbnail","slug"])->limit(4)->get();

        return response()->json([
            "categories" => $categories
        ]);
    }
}
