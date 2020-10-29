<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('bikes', function () {
    $bikes = DB::select('SELECT * FROM bikes ORDER BY id ASC');
    return $bikes;
});

Route::post('bikes', function (Request $request) {
    DB::insert('INSERT INTO bikes (brand, model) VALUES (?, ?)', [$request->brand, $request->model]);
    $bikes = DB::select('SELECT * FROM bikes ORDER BY id ASC');
    return $bikes;
});

Route::delete('bikes/{id}', function ($id) {
    DB::delete('DELETE FROM bikes WHERE id = ?', [$id]);
    $bikes = DB::select('SELECT * FROM bikes ORDER BY id ASC');
    return $bikes;
});

Route::put('bikes/{id}', function (Request $request, $id) {
    DB::update('UPDATE bikes SET brand=?, model=? WHERE id = ?', [$request->brand, $request->model, $id]);
    $bikes = DB::select('SELECT * FROM bikes ORDER BY id ASC');
    return $bikes;
});
