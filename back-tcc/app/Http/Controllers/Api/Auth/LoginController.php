<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\api\auth\LoginFormRequest;
use App\Http\Resources\api\auth\LoginResource;
use App\Http\Resources\api\auth\LogoutResource;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Log;

class LoginController extends Controller
{

     /**
     * @author Alexandre Souza <alexandre.santos3@estudante.ifto.edu.br>
     *
     * Method responsible for logging into the application
     * @return \Illuminate\Http\JsonResponse
     * @param LoginFormRequest $request
     */
    public function login(LoginFormRequest $request){
        $this->response = [];
        $this->message = [];
        $this->statusCode = Response::HTTP_OK;
        try{
            $credentials = $request->only('username', 'password');
            if(!auth()->attempt($credentials))
                abort(400, 'Invalid Credentials');

            $token = auth()->user()->createToken('access-token');
            $user = auth()->user();
            $this->response = [
                'token' => $token->plainTextToken,
                'user' => $user->name,
                'email' => $user->email,
                'logo' => $user->logo,
                'institution_type' => 'individual',
                'user' => [
                    'id' => $user->id,
                    'name' => $user->name
                ],
                'institution' => [
                    'id' => $user->id,
                    'social_reason' => $user->name,
                    'logo' => $user->logo
                ]
            ];
            return response()->json($this->response , 200);
        } catch(\Throwable $e){
            Log::error('LoginController, login() ' . $e->getMessage());
            $this->message = [
                'message' => 'Erro ao validar credenciais de login'
            ];
            $this->statusCode = Response::HTTP_BAD_REQUEST;
            return response()->json($this->response , $this->statusCode);

        }


    }

     /**
     * @author Alexandre Souza <alexandre.santos3@estudante.ifto.edu.br>
     *
     * Method responsible for logout into the application
     * @return \Illuminate\Http\JsonResponse
     * @param LoginFormRequest $request
     */
    public function logout(){
        $this->response = [];
        $this->message = [];
        $this->statusCode = Response::HTTP_OK;
        try{
            // remove todos os tokens do usuário
            auth()->user()->tokens()->delete();
            //remove apenas o token da requisição
        // auth()->user()->currentAccessToken()->delete();
        $this->response = ['success' => true];
       }catch (\Throwable $e){
        Log::error('LoginController, login() ' . $e->getMessage());
        $this->message = [
            'message' => 'Erro ao fazer se deslogar'
        ];
        $this->statusCode = Response::HTTP_BAD_REQUEST;
        }

        return (new LogoutResource($this->response))
            ->additional($this->message)
            ->response()->setStatusCode($this->statusCode);
    }
}
