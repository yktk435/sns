<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Article;

class ArticleController extends Controller
{
    function index(Request $request)
    {
        // $items = Article::all();
        $items = (new Article())->sample();
        return view('article.index', ['items' => $items]);
    }
}
