<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    protected $fillable = ['user_id', 'street', 'suite', 'city', 'zipcode'];

    public function address()
    {
        return $this->hasOne('App\User');
    }

    public function geo()
    {
        return $this->hasOne('App\Geo');
    }
}

