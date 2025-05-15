<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
  // List all contacts
  public function index()
  {
    return response()->json(Contact::paginate(10));
  }

  // Store a new contact
  public function store(Request $request)
  {
    $validated = $request->validate([
      'name' => 'required|string|max:255',
      'email' => 'required|email|unique:contacts,email',
      'phone' => 'nullable|string|max:20',
      'notes' => 'nullable|string',
    ]);
    $contact = Contact::create($validated);
    return response()->json($contact, 201);
  }

  // Update a contact
  public function update(Request $request, $id)
  {
    $contact = Contact::findOrFail($id);
    $validated = $request->validate([
      'name' => 'required|string|max:255',
      'email' => 'required|email|unique:contacts,email,' . $id,
      'phone' => 'nullable|string|max:20',
      'notes' => 'nullable|string',
    ]);
    $contact->update($validated);
    return response()->json($contact);
  }

  // Show a single contact
  public function show($id)
  {
    $contact = Contact::findOrFail($id);
    return response()->json($contact);
  }

  // Delete a contact
  public function destroy($id)
  {
    $contact = Contact::findOrFail($id);
    $contact->delete();
    return response()->json(null, 204);
  }
}