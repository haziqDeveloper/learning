<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Auth;
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


Route::get('/', [HomeController::class, 'index'])->name('home');

Route::middleware('auth.validate')->group(function () {
    Route::get('/subscription', [HomeController::class, 'subscription'])->name('subscription');
    Route::post('/payments',[HomeController::class,'payment'])->name('payments');
    Route::any('/payments/response',[HomeController::class,'paymentresponse'])->name('payments.response');
    Route::get('/success', [HomeController::class, 'successPayPalPayment']);
    Route::get('error', [HomeController::class, 'error']);
});



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Auth::routes();

//Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
