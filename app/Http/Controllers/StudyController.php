<?php

namespace App\Http\Controllers;

use Illuminate\Support\Collection;

use Illuminate\Http\Request;


class StudyController extends Controller
{
    public function __invoke()
    {
        $collection = collect(['name' => 'Desk', 'price' => 100]);
        print_r($collection);

        var_dump($collection->contains(100));

        // true

        var_dump($collection->contains('New York'));

        // false
    }
}
