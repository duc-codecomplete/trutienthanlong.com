<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [HomeController::class, 'home']);


Route::get('/tai-game', [HomeController::class, 'download']);


Route::get('/tin-tuc', [HomeController::class, 'listNews']);
Route::get('/tin-tuc/{slug}', [HomeController::class, 'detailNews']);

Route::get('/vip', [HomeController::class, 'vip']);

