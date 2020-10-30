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
    DB::insert('INSERT INTO bikes (brand, model, owner, maintenance) VALUES (?, ?, ?, ?)', [$request->brand, $request->model, $request->maintenance, $request->owner]);
    $bikes = DB::select('SELECT * FROM bikes ORDER BY id ASC');
    return $bikes;
});

Route::delete('bikes/{id}', function ($id) {
    DB::delete('DELETE FROM bikes WHERE id = ?', [$id]);
    $bikes = DB::select('SELECT * FROM bikes ORDER BY id ASC');
    return $bikes;
});

Route::put('bikes/{id}', function (Request $request, $id) {
    DB::update('UPDATE bikes SET brand=?, model=? owner=? maintenance=? WHERE id = ?', [$request->brand, $request->model, $request->owner, $request->maintenance, $id]);
    $bikes = DB::select('SELECT * FROM bikes ORDER BY id ASC');
    return $bikes;
});
