<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use App\Models\User;
use Dflydev\DotAccessData\Data;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Omnipay\Omnipay;

class HomeController extends Controller
{
    private $gateway;

    public function __construct() {
        $this->gateway = Omnipay::create('PayPal_Rest');
        $this->gateway->setClientId(env('PAYPAL_SANDBOX_CLIENT_ID'));
        $this->gateway->setSecret(env('PAYPAL_SANDBOX_CLIENT_SECRET'));
        $this->gateway->setTestMode(true);
    }
    public function index()
    {
        return view('pages.index');
    }
    public function subscription()
    {
        return view('pages.subscription');
    }
    public function payment(Request $request)
    {

        $rules = [
            'package_id' => ['required', 'integer'],
            'birthday' => ['required', 'date'],
            'profile_name' => ['required', 'string'],
            'gender' => ['required', 'in:Mannelijk,Vrouwelijk,binair,ander,Zeg'],
            'payment_gateway'=>['required'],
        ];

        $customMessages = [
            'birthday.required' => 'Please provide your birthday.',
            'profile_name.required' => 'Please enter your profile name.',
            'gender.required' => 'Please select your gender.',
            'payment_gateway.required'=>'Please select your payment method'
        ];


        $validator = Validator::make($request->all(), $rules,$customMessages);
        if ( $validator->fails() )
        {
            return [
                'success' => 'false',
                'message' => $validator->errors()->toArray()
            ];
        }

        $packageId  = $request->input('package_id');
        $packages[1]= 19.99;
        $packages[2]= 49.99;
        $packages[3]= 79.99;

        if (isset($packages[$packageId])) {
            $user = User::where('email', '=', $request['email'])->first();

            if ($user) {
                $user->dob=$request['birthday'];
                $user->gender=$request['gender'];
                $user->save();
                $payment_url = '';
                if($request['payment_gateway'] == 'stripe'){
                    $responseStripe = $this->generateStripPayment($user->id, $packageId, $packages[$packageId]);
                    $payment_url = $responseStripe['url'];
                }
                if($request['payment_gateway'] == 'paypal'){
                    $responsePaypal = $this->generatePayPalPayment($user->id, $packageId, $packages[$packageId]);
                    $payment_url = $responsePaypal;
                }
                if($request['payment_gateway'] == 'iDeal'){
                    $payment_url = '';
                }
            }
            if(!empty($payment_url)){
                return [
                    'success' => 'true',
                    'url' => $payment_url,
                ];
            }
        } else {
            return [
                'success' => 'false',
                'message' => 'Something went wrong!'
            ];
        }

    }
    private function generateStripPayment($user_id, $packageId, $package_price){
        $product_name = 'Payment-'.$packageId.'-'.$package_price;
        $stripe = new \Stripe\StripeClient(config('stripe.api_keys.secret_key'));
        $all_products = $stripe->products->all()->data;
        $product_price_id = '';

        foreach ($all_products as $stripe_product){
            $stripe_product_name = $stripe_product['name'];
            if($stripe_product_name == $product_name){

                $all_prices = $stripe->prices->all()->data;
                foreach ($all_prices as $stripe_price){
                    if($stripe_price['product'] == $stripe_product['id']){
                        $product_price_id = $stripe_price['id'];
                        break;
                    }
                }
                break;
            }
        }
        if(empty($product_price_id)){
            $product_response = $stripe->products->create([
                'name' => $product_name,
            ]);

            /*Create price*/
            $price_response = $stripe->prices->create([
                'unit_amount' => (int)$package_price,
                'currency' => 'usd',
                'product' => $product_response['id'],
            ]);
            $product_price_id = $price_response['id'];
        }
        \Stripe\Stripe::setApiKey(config('stripe.api_keys.secret_key'));
        $checkout_session = \Stripe\Checkout\Session::create([
            'line_items' => [[
                # Provide the exact Price ID (e.g. pr_1234) of the product you want to sell
                'price' => $product_price_id,
                'quantity' => 1,
                //'description' => 'Reference# '.$user_id,
            ]],
            'client_reference_id'=>$user_id,
            'mode' => 'payment',
            "metadata" => ["user_id" => $user_id,'product_id'=>$packageId],
            'success_url' => route('payments.response').'?session_id={CHECKOUT_SESSION_ID}',
            'cancel_url' => route('payments.response').'?success=false',
        ]);

        return ['url'=>$checkout_session->url];
    }

    function paymentResponse()
    {
        $post = request()->all();

        if (isset($post['session_id']) && !empty($post['session_id'])) {
            $stripe = new \Stripe\StripeClient(config('stripe.api_keys.secret_key'));

            try {
                $session_info = $stripe->checkout->sessions->retrieve($post['session_id'], []);
            } catch (\Exception $e) {
                $session_info = null;
            }

            if ($session_info && $session_info->payment_status === 'paid') {
                $amount_total = floatval(number_format($session_info->amount_total / 100, 2));

                Payment::create([
                    'user_id' => $session_info->metadata->user_id,
                    'product_id' => $session_info->metadata->product_id,
                    'payer_email' => $session_info->customer_details->email,
                    'amount' => $amount_total,
                    'currency' => $session_info->currency,
                    'payment_status' => $session_info->payment_status,
                    'payment_gateway' => "Stripe"
                ]);

                return "Payment is successful.";
            }
        }

        return [
            'success' => 'false',
            'message' => 'Payment canceled or not successful',
        ];
    }

    private function generatePayPalPayment($user_id, $packageId, $package_price)
    {

        $returnUrl = url('success');
        $cancelUrl = url('error');

        $userProductInfo = [
            'user_id' => $user_id,
            'product_id' => $packageId,
        ];
        $response = $this->gateway->purchase([
            'amount' => $package_price,
            'currency' => env('PAYPAL_SANDBOX_CURRENCY'),
            'returnUrl' => $returnUrl,
            'cancelUrl' => $cancelUrl,
            'description' => json_encode($userProductInfo),
        ])->send();

        return $response->getRedirectUrl();
    }


    public function successPayPalPayment(Request $request)
    {
        $paymentId = $request->input('paymentId');
        $payerId = $request->input('PayerID');

        if ($paymentId && $payerId) {
            $transaction = $this->gateway->completePurchase([
                'payer_id' => $payerId,
                'transactionReference' => $paymentId
            ]);

            $response = $transaction->send();

            if ($response->isSuccessful()) {
                $data = $response->getData();
                $description = $data['transactions'][0]['description'];
                $userProductInfo = json_decode($description, true);
                $payment = Payment::create([
                    'user_id' =>$userProductInfo['user_id'],
                    'product_id' => $userProductInfo['product_id'],
                    'payer_email' => $data['payer']['payer_info']['email'],
                    'amount' => $data['transactions'][0]['amount']['total'],
                    'currency' => env('PAYPAL_SANDBOX_CURRENCY'),
                    'payment_status' => $data['state'],
                    'payment_gateway' => 'Paypal'
                ]);

                if($payment)
                {
                    return "Payment is successful. Your Transaction Id is: " . $data['id'];
                }
            } else {
                return $response->getMessage();
            }
        } else {
            return 'Payment declined!';
        }
    }


    public function error()
    {
        return 'User declined the payment!';
    }

}
