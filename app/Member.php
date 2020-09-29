<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    function article(){
        return $this->hasOne('App\Article');
    }
    function articles(){
        return $this->hasMany('App\Article');
    }
    public function getData()
    {
        return $this->id . ': ' . $this->name . ' (' . $this->age . ')';
    }
}
