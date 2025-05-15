<?php
return [
    'paths' => ['api/*', 'sanctum/csrf-cookie', '/'],
    'allowed_methods' => ['*'],
    'allowed_origins' => [
        'http://localhost:5173',
        'http://127.0.0.1:5173',
    ], // Allow Vite development server
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],
    'exposed_headers' => ['Authorization', 'Content-Type'], // Add specific headers
    'max_age' => 0,
    'supports_credentials' => true, // Ensure credentials support
];