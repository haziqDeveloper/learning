<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Validator;
use Auth;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
    public function login(Request $request){
        $rules = array(
            'email' =>    'required|email:filter',
            'password' => 'required',
        );
        $validator = Validator::make( $request->all(), $rules );
        if ( $validator->fails() )
        {
            return [
                'success' => 'false',
                'message' => $validator->errors()->toArray()
            ];
        }
        $user_cred = $request->only('email', 'password');
        if (Auth::attempt($user_cred)) {
            return [
                'success' => 'true',
                'message' => 'User Login Successfully.'
            ];
        }else{

            return [
                'success' => 'false',
                'message' => ['Invalid credentials.']
            ];
        }
    }
}
