<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CityController;

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


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/showCities/{county}', [CityController::class, 'show']);

Route::get('/{county}/addCity', [CityController::class, 'create']);

Route::post('/addCity', [CityController::class, 'save']);

Route::post('/edit/{city}', [CityController::class, 'update']);

Route::post('/delete/{city}', [CityController::class, 'delete']);
