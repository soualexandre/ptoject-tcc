<?php

namespace App\Http\Controllers\Api\Product;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\api\CreateProductFormRequest;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Log;
use App\Models\Product;

class ProductController extends Controller
{
    public function createProduct(CreateProductFormRequest $request, Product $product){
        $this->response = [];
        $this->message = [];
        $this->statusCode = Response::HTTP_OK;

        $product->company_id = $request->company_id;
        $product->category_id = $request->category_id;
        $product->product_name = $request->product_name;
        $product->product_title = $request->product_title;
        $product->product_description = $request->product_description;
        $product->product_photo = $request->product_photo;
        $product->save();
        dd($product);
        try{
            return response()->json($this->response , 200);

        } catch(\Throwable $e){
            Log::error('LoginController, login() ' . $e->getMessage());
            $this->message = [
                'message' => 'Erro ao salvar os dados'
            ];
            $this->statusCode = Response::HTTP_BAD_REQUEST;
            return response()->json($this->message , 200);
    }
    }
}
