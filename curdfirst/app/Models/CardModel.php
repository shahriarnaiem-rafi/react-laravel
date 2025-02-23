<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CardModel extends Model
{
    use HasFactory;
    protected $table = 'curd_table';
    protected $fillable = [
        'name',
        'email',
        'phone'
    ];
}
