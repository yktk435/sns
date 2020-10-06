<?php

use App\Http\Controllers\StudyController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/study', 'StudyController');
/********************************************/
// テスト用
/********************************************/
Route::get('/', 'ModelClassController');
// Route::get('test', 'ModelClassController@test');
Route::resource('test', 'RestTestController');




/********************************************/
// rest
/********************************************/
Route::resource('article', 'RestArticleController');
Route::resource('comment', 'RestCommentController');
Route::resource('member', 'RestMemberController');
Route::resource('message', 'RestMessageController');
Route::resource('notification', 'RestNotificationController');
Route::resource('photo', 'RestPhotoController');
