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

Route::middleware('auth:sanctum')->group(function(){
    Route::get('/user', [App\Http\Controllers\Api\UserController::class, 'usersAll']);
    Route::post('/createCompany', [App\Http\Controllers\Api\Company\RegisterCompanyController::class, 'createCompany']);
    Route::get('/getCompanies', [App\Http\Controllers\Api\Company\CompanyController::class, 'getListDashboardCompanies']);
    Route::post('/createProducts', [App\Http\Controllers\Api\Product\ProductController::class, 'createProduct']);
});

Route::prefix('auth')->group(function() {
    Route::post('login',
    [App\Http\Controllers\Api\Auth\LoginController::class, 'login']);

    Route::get('logout',
    [App\Http\Controllers\Api\Auth\LoginController::class, 'logout'])->middleware('auth:sanctum');

    Route::post('register',
    [\App\Http\Controllers\Api\Auth\RegisterController::class, 'register']);
});

