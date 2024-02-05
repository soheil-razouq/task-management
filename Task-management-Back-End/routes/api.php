<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TasksController;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

//Api routes for Tasks controller
Route::controller(TasksController::class)->group(function(){
    Route::get('/tasks','index');
    Route::post('/task','store');
    Route::put('/task/{id}','update');
    Route::delete('/task/{id}','destroy');
});

//Api routes for User controller
Route::controller(AuthController::class)->group(function(){
    Route::get('/users', 'index');
    Route::post('/user','store');
});
