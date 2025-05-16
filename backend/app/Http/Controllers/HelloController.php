<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HelloController extends Controller
{
    public function greet()
    {
        return response()->json(['message' => 'Hello from the 231412431234 controller!']);
    }
}
