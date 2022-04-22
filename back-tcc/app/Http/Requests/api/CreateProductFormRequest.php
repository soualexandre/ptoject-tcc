<?php

namespace App\Http\Requests\api;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class CreateProductFormRequest extends FormRequest
{
  /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

      /**
     * Get id of authenticated user and merge.
     *
     * @return array
     */
    protected function prepareForValidation()
    {
        // $this->userId = Auth::guard('auth:sanctum');

        $this->userId = Auth::user()->id;

        $this->merge([
            'user_id' => $this->userId
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            //
        ];
    }
}
