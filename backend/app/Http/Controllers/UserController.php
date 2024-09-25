<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function getUser (User $user)
    {
        $auth = Auth::user();

        $result = $user->getInfo();
        $result["isFollowing"] = $auth->isFollowing($user);

        return response()->json([
            "message" => "success",
            "user" => $result
        ]);
    }

    public function follow (User $user)
    {
        $auth = Auth::user();

        if($auth->isFollowing($user)) {
            return response()->json([
                "success"=> false
            ]);
        }

        $auth->follow($user);

        return response()->json([
            "success"=> true
        ]);
    }
    public function unfollow (User $user)
    {
        $auth = Auth::user();

        if($auth->isFollowing($user)) {
            $auth->unfollow($user);

            return response()->json([
                "success"=> true
            ]);
        }

        return response()->json([
            "success"=> false
        ]);
    }
}
