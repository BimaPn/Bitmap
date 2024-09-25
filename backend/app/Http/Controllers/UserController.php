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

    public function getUserFollowers (User $user)
    {
        $followers = $user->followers()->select('name', 'username', 'avatar')->latest()->paginate(15);

        $result = $followers->each(function ($user) {
            $user["isFollowing"] = auth()->user()->isFollowing($user);
        });

        return response()->json([
            "users" => $result
        ]);
    }
    public function getUserFollowings (User $user)
    {
        $followings = $user->followings()->with('followable')->get();

        $result = [];

        foreach($followings as $following) {
            $result[] = [
                "name" => $following->followable->name,
                "username" => $following->followable->username,
                "avatar" => $following->followable->avatar,
                "isFollowing" => auth()->user()->isFollowing($following->followable)
            ];
        }

        return response()->json([
            "users" => $result
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
