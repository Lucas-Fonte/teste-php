<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $fillable = ['user_id', 'name', 'catchPhrase', 'bs'];

    public function company()
    {
        return $this->hasOne('App\User');
    }

}
