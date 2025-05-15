<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Contact;

class ContactControllerTest extends TestCase
{
  use RefreshDatabase;

  /** @test */
  public function it_can_list_contacts()
  {
    Contact::factory()->count(3)->create();
    $response = $this->getJson('/api/contacts');
    $response->assertStatus(200)
      ->assertJsonStructure(['data']);
  }

  /** @test */
  public function it_can_create_a_contact()
  {
    $data = [
      'name' => 'Test User',
      'email' => 'test@example.com',
      'phone' => '1234567890',
      'notes' => 'Test notes',
    ];
    $response = $this->postJson('/api/contacts', $data);
    $response->assertStatus(201)
      ->assertJsonFragment(['email' => 'test@example.com']);
    $this->assertDatabaseHas('contacts', ['email' => 'test@example.com']);
  }

  /** @test */
  public function it_can_update_a_contact()
  {
    $contact = Contact::factory()->create();
    $data = [
      'name' => 'Updated Name',
      'email' => 'updated@example.com',
      'phone' => '9876543210',
      'notes' => 'Updated notes',
    ];
    $response = $this->putJson("/api/contacts/{$contact->id}", $data);
    $response->assertStatus(200)
      ->assertJsonFragment(['name' => 'Updated Name']);
    $this->assertDatabaseHas('contacts', ['email' => 'updated@example.com']);
  }

  /** @test */
  public function it_can_show_a_contact()
  {
    $contact = Contact::factory()->create();
    $response = $this->getJson("/api/contacts/{$contact->id}");
    $response->assertStatus(200)
      ->assertJsonFragment(['email' => $contact->email]);
  }

  /** @test */
  public function it_can_delete_a_contact()
  {
    $contact = Contact::factory()->create();
    $response = $this->deleteJson("/api/contacts/{$contact->id}");
    $response->assertStatus(204);
    $this->assertDatabaseMissing('contacts', ['id' => $contact->id]);
  }
}