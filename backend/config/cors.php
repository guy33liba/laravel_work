<?php
return [
    'paths' => ['*'], // Allow all paths
    'allowed_methods' => ['*'],
    'allowed_origins' => ['*'], // Allow all origins for development
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],
    'exposed_headers' => ['Authorization', 'Content-Type'],
    'max_age' => 0,
    'supports_credentials' => true,
];