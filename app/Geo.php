<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Geo extends Model
{
    protected $fillable = ['address_id', 'lat', 'lng'];

    public function geo()
    {
        return $this->hasOne('App\Address');
    }
}

