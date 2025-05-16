<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Schema\Blueprint;

class Contact extends Model
{
    protected $fillable = [
        'name',
        'email',
        'phone',
        'notes',
    ];

}
