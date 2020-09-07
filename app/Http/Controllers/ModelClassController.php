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
        $items[] = Article::all();
        $items[] = Comment::all();
        $items[] = Member::all();
        $items[] = Message::all();
        $items[] = Notification::all();
        $items[] = Photo::all();

        // return view('article.index', ['items' => $items);
        print_r($items);
    }
}
