<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;

class PostController extends Controller
{
    public function index($userId)
    {
        return Post::where('userId', '=', $userId)->get();
    }

    public function store(Request $request)
    {
        return Post::create($request->all());
    }

}
