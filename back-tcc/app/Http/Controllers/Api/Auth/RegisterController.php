<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class RegisterController extends Controller
{
    public function register(Request $request, User $user){
        $userData = $request->only('name', 'logo', 'username', 'type_user', 'password');
        $userData['password'] = bcrypt($userData['password']);

        if(!$user = $user->create($userData))
            abort(500, "Error to create a new user...");

        return response()->json([
            'data' => [
                'user' => $user
            ]
            ]);
    }
}
