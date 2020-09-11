<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
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

Route::get('/', function () {
    return redirect(app()->getLocale());
});


Route::group(['prefix' => '{locale}', 'where' => ['locale' => '[a-zA-Z]{2}']], function($locale) {

    Route::get('/', function () {
        return view('home');
    })->name('home');

    Route::get('/booking', function () {
        return view('book');
    })->name('book');

    Route::get('/contact-us', function () {
        return view('contact-us');
    })->name('contact');

});

