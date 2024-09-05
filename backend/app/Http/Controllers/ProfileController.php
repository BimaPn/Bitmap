<?php

namespace App\Http\Controllers;

use App\Http\Requests\editProfileRequest;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function editProfile (editProfileRequest $request)
    {
        $data = $request->validated();
        $user = auth()->user();

        if($request->file('avatar')){
            $data['avatar'] = url('/storage/'.$request->file('avatar')->store('/users'));
            $user->deleteAvatar();
        }

        $user->update($data);

        return response()->json([
            "message" => "success",
        ]);

    }
}
