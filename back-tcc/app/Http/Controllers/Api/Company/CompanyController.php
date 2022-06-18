<?php

namespace App\Http\Controllers\Api\Company;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\api\CreateProductFormRequest;
use App\Models\Company;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;
use App\Models\Product;
use App\Repositories\DashboardRepository;

class CompanyController extends Controller
{
    public function getListDashboardCompanies(CreateProductFormRequest $request, Company $company) {
        $this->response = [];
        $this->message = [];
        $this->statusCode = Response::HTTP_OK;
        try{
            $companies = DashboardRepository::getCompanies($request->user_id);
            $this->response = $companies;
            return response()->json($this->response , 200);
        } catch(\Throwable $e){
            Log::error('LoginController, login() ' . $e->getMessage());
            $this->message = [
                'message' => 'Erro ao buscar os dados'
            ];
            $this->statusCode = Response::HTTP_BAD_REQUEST;
            return response()->json($this->message , 200);
    }
    }
}
