<?php

namespace App\Http\Controllers\Api\Company;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\api\CreateCompanyFormRequest;
use App\Http\Resources\api\RegisterCompanyResource;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Log;

use App\Models\Company;

class RegisterCompanyController extends Controller
{
    public function createCompany(CreateCompanyFormRequest $request, Company $company){
        $this->response = [];
        $this->message = [];
        $this->statusCode = Response::HTTP_OK;
        try{
            $company->user_id = $request->user_id;
            $company->company_name =  $request->company_name;
            $company->company_document = $request->company_document;
            $company->company_latitude = $request->company_latitude;
            $company->company_longitude = $request->company_longitude;
            $company->save();

            $this->response = [
            'succes' => true
            ];
        } catch(\Throwable $e){
            Log::error('LoginController, login() ' . $e->getMessage());
            $this->message = [
                'message' => 'Erro ao salvar os dados'
            ];
            $this->statusCode = Response::HTTP_BAD_REQUEST;
    }
    return (new RegisterCompanyResource($this->response))
    ->additional($this->message)
    ->response()->setStatusCode($this->statusCode);
    }
}
