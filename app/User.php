<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $fillable = ['name', 'username', 'email', 'phone', 'website'];

    public function address()
    {
        return $this->hasOne('App\Address');
    }


    public function company()
    {
        return $this->hasOne('App\company');
    }
}
