<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'message' => 'required|string',
        ]);

        return response()->json([
            'message' => 'Message received',
            'data' => [
                'user_id' => $request->user()->id,
                'message' => $request->message,
            ]
        ]);
    }
}
