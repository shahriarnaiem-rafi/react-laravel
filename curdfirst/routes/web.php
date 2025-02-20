<?php

use App\Http\Controllers\CurdController;
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

Route::get('/', function () {
    return view('welcome');
});
Route::get('/view',[CurdController::class,'vieww']);

Route::delete('delete{curd_id}',CurdController::class.'@deleteData')->name('delete');
// insert
Route::get('/inserted',[CurdController::class,'inserted2'])->name('create');

// Route::post('posted',[CurdController::class,'posted'])->name('posted2');
Route::get('edit/{id}', [CurdController::class,'update'])->name('update');
Route::post('edit-store', [CurdController::class,'editStore'])->name('editStore');


// Route::get('edit/{student_id}', [DemoController::class,'update'])->name('edit');

// Route::post('edit-store', [DemoController::class,'editStore'])->name('editStore');