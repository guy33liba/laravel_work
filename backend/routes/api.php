<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
  return $request->user();
});

Route::post('/newUser', function (Request $request) {
  try {
    $validated = $request->validate([
      'name' => 'required|string|max:255',
      'email' => 'required|email|unique:users,email',
      'password' => 'required|string|min:6',
    ]);
    $validated['password'] = bcrypt($validated['password']);
    $user = User::create($validated);
    return response()->json($user, 201);
  } catch (\Illuminate\Validation\ValidationException $e) {
    return response()->json([
      'message' => 'Validation failed',
      'errors' => $e->errors(),
    ], 422);
  } catch (\Exception $e) {
    return response()->json([
      'message' => 'Server error',
      'error' => $e->getMessage(),
    ], 500);
  }
});