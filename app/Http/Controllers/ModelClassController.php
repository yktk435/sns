<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Article;
use App\Comment;
use App\Member;
use App\Message;
use App\Notification;
use App\Photo;

class ModelClassController extends Controller
{
    function __invoke()
    {
        $items[] = Article::all()->toArray();
        $items[] = Comment::all()->toArray();
        $items[] = Member::all()->toArray();
        $items[] = Message::all()->toArray();
        $items[] = Notification::all()->toArray();
        $items[] = Photo::all()->toArray();

        // return view('article.index', ['items' => $items);
        // dd($items);
        print_r($items);
    }
    function test(){
        $items=Member::all();
        dd(Member::find(10)->article);
        
        // dd($items);
        // return $items;
    }
}
