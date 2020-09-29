<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    function sample(){
        return $this->all();
    }
    
}
