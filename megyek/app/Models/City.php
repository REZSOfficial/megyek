<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    protected $fillable = ['varos', 'megye_id'];
    public $timestamps = false;
}
