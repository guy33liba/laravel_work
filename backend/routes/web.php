<?php

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HelloController;
use App\Http\Controllers\ContactController;
use App\Models\User;

Route::get('/csrf-token', function () {
    return response()->json(['csrf_token' => csrf_token()]);
});
Route::get('/', function () {
    return response()->json(['message' => 'Hello from Laravel message new']);
});

Route::get('/message', function () {
    return response()->json(['message' => 'message new']);
});

Route::get('/test', function () {
    return response()->json(['message' => 'hello guy guy']);
});
Route::get('/hello', [HelloController::class, 'greet']);


Route::get('/contacts', [ContactController::class, 'index']);
Route::post('/contacts', [ContactController::class, 'store']);
Route::get('/contact/{id}', [ContactController::class, 'show']);
Route::put('/contact/{id}', [ContactController::class, 'update']);
Route::delete('contacts/{id}', [ContactController::class, 'destroy']);

Route::get('/users', function () {
    return response()->json(User::all());
});

Route::post('/newUser', function (Request $request) {
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email|unique:users,email',
        'password' => 'required|string|min:6',
    ]);
    $validated['password'] = bcrypt($validated['password']);
    $user = User::create($validated);
    return response()->json($user, 201);
});