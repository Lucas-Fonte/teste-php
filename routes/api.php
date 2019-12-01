<?php

use Illuminate\Http\Request;

Route::get('api', 'ApiController@index');

Route::get('users', 'UserController@index');
Route::get('users/{id}', 'UserController@show');
Route::post('users', 'UserController@store');
Route::put('users/{id}', 'UserController@update');
Route::delete('users/{id}', 'UserController@delete');

Route::get('users/{userId}/posts', 'PostController@index');
Route::post('users/{userId}/posts', 'PostController@store');

