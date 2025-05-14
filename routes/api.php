<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

// ✅ זה הנתיב שאנחנו רוצים לבדוק
Route::get('/hello', function () {
    return response()->json(['message' => 'Hello from Laravel']);
});
