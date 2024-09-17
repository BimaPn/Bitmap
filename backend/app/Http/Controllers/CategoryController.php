<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    public function index ()
    {
        $categories = Category::select(["id","name","slug"])->get();

        return response()->json([
            "categories" => $categories
        ]);
    }
}
