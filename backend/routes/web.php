<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return response()->json(['message' => 'Hello from Laravel message new']);
});

Route::get('/message', function () {
    return response()->json(['message' => 'message new']);
});

