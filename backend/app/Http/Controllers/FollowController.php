<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class FollowController extends Controller
{
    public function follow(User $user)
    {
        $currentUser = Auth::user();

        if (!$currentUser->following()->where('followed_id', $user->id)->exists()) {
            $currentUser->following()->attach($user->id);
        }

        return response()->json(['message' => 'Followed successfully'], 200);
    }

    public function unfollow(User $user)
    {
        $currentUser = Auth::user();

        if ($currentUser->following()->where('followed_id', $user->id)->exists()) {
            $currentUser->following()->detach($user->id);
        }

        return response()->json(['message' => 'Unfollowed successfully'], 200);
    }
}
