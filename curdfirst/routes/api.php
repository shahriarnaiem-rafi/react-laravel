<?php

use App\Http\Controllers\CurdController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/view',[CurdController::class,'vieww']);
Route::post('posted',[CurdController::class,'posted']);
Route::delete('delete/{curd_id}',[CurdController::class,'deleteData']);

Route::get('edit/{id}', [CurdController::class,'update']);
Route::post('edit-store', [CurdController::class,'editStore']);