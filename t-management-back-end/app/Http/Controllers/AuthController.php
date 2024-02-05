<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class AuthController extends Controller
{
    
    public function index()
    {
        $users = User::all();
        return $users;

        //return all the users from data base
    }


    public function store(Request $request)
    {
        $user = new User;
        $user->name = $request -> name;
        $user->email = $request -> email;
        $user->password = $request -> password;
        $user->save();

        return $user;

        //create a new user (name,email and password) 
    }

}
