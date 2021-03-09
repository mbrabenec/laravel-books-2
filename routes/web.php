<?php

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

Route::get('/', 'IndexController@index');

Route::get('/books', 'BookController@index');

Route::get('/home', 'IndexController@home');

Route::view('/book/{book_id}/{path?}', 'book/detail')->where(['book_id' => '^\d+$', 'path' => '.*']);