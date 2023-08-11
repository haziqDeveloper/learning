@extends('layouts.site')
@section('content')
    <!-- Header Close -->

    <div class="sub-bg">

        <div class="boxes">
            <div class="subscription-container">
                <div class="main-box" id="main-box">
                        <div id="one-box" class="box-content first-price-lslider">
                            <div id="first_price" class="price brown">
                                <h3>KELDERKLASSE</h3>
                                <h4>€19,99 per maand</h4>
                            </div>
                            <ul>
                                <li>
                                    <!-- <img src="assest/images/Alpha.svg"> -->
                                    minuten aan bets per dan (1 AlphaToken)
                                </li>
                                <li>Tips and Tricks voor inzet strategie</li>
                                <li>Log Systeem</li>
                            </ul>
                            <div class="brown-button">
                                <button href="">Selecteer</button>
                            </div>
                        </div>
                        <div id="second-box" class="box-content">
                            <div id="second_price" class="price grey">
                                <h3>SEMI-PROF</h3>
                                <h4>€49,99 per maand</h4>
                            </div>
                            <ul>
                                <li>20 minuten aan bets per dag (4 AlphaTokens)</li>
                                <li>Premium Log Systeem</li>
                                <li>Tips and Tricks voor inzet strategie</li>
                                <li>Exclusieve Discord Server</li>
                                <li>Volgende maand gratis bij geen winst*</li>
                            </ul>
                            <div class="grey-button">
                                <button href="">Huidige Selectie</button>
                            </div>
                        </div>
                        <div id="third-box" class="box-content">
                            <div id="third_price" class="price yellow">
                                <h3>PRO</h3>
                                <h4>€79,99 per maand</h4>
                            </div>
                            <ul>
                                <li> Oneindig minuten </li>
                                <li> Alphabetting Pet </li>
                                <li>Premium Log Systeem</li>
                                <li>Tips and Tricks voor inzet strategie</li>
                                <li>Exclusieve Discord Server</li>
                                <li>Volgende maand gratis bij geen wins t*</li>
                            </ul>
                            <div class="yellow-button">
                                <button href="">Selecteer</button>
                            </div>
                        </div>
                        <section id="pay-form" class="pay-form">
                            <div class="pay-form-main">
                                {!! Form::open(['url' => route('payments'), 'id' => 'payment-form','onsubmit'=>'return false;']) !!}
                                <div id="show_error_pay_form" style="color: red"></div>
                                <div class="row-dflex">
                                    <div class="col-xl">
                                        <div class="form-group ds-blk">
                                            {!! Form::label('email', 'Wat is jouw e-mail?') !!}
                                            {!! Form::text('email', auth()->user()->email, ['class' => 'form-control', 'placeholder' => 'Voer uw e-mailadres in', 'readonly']) !!}
                                        </div>
                                        <div class="form-group dob_birth">
                                            {!! Form::label('birthday', 'Wat is je geboortedatum?') !!}
                                            {!! Form::date('birthday', null, ['class' => 'form-control', 'id' => 'birthday']) !!}
                                        </div>
                                        {!! Form::hidden('package_id', null, ['id' => 'package_id']) !!}
                                    </div>
                                    <div class="col-lg">
                                        <div class="form-group ds-blk">
                                            {!! Form::label('profile_name', 'Hoe moeten we je noemen?') !!}
                                            {!! Form::text('profile_name', auth()->user()->first_name. ' ' . auth()->user()->last_name, ['class' => 'form-control', 'placeholder' => 'Voer een profielnaam in']) !!}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="form-group gender-form">
                                        <div>
                                            {!! Form::label('geslacht', 'Wat is je geslacht?') !!}<br />
                                            {!! Form::radio('gender', 'Mannelijk') !!}
                                            {!! Form::label('Mannelijk', 'Mannelijk') !!}
                                            {!! Form::radio('gender', 'Vrouwelijk') !!}
                                            {!! Form::label('Vrouwelijk', 'Vrouwelijk') !!}
                                            {!! Form::radio('gender', 'binair') !!}
                                            {!! Form::label('binair', 'Niet-binair') !!}
                                            {!! Form::radio('gender', 'ander') !!}
                                            {!! Form::label('ander', 'ander') !!}
                                            {!! Form::radio('gender', 'Zeg') !!}
                                            {!! Form::label('Zeg', 'Zeg ik liever niet') !!}
                                        </div>
                                    </div>
                                </div>
                                <div>

                                    <div class="form-group">
                                        <label for="payment">Betaalmethode</label>
                                        <!-- HTML Dropdown list -->
                                        <select name="payment_gateway" id="paymentSelect">
                                            <option value="">Selecteer betaalmethode </option>
                                            <option value="stripe" data-image="{{asset('images/stripe.png')}}">Stripe</option>
                                            <option value="paypal" data-image="{{asset('images/PayPal.png')}}">PayPal</option>
                                            <option value="iDeal" data-image="{{asset('images/ideal.png')}}">iDeal</option>
                                        </select>
                                    </div>

                                </div>

                                <div class="dflex-sub">
                                    <div class="sub-back-buton">
                                        <a href="javascript:void(0)" id="fBack" class="btn btn-back">Rug</a>
                                    </div>
                                    <div class="submit-section">
                                        <button type="submit" class="btn-betaal" onclick="doStripePayment('payment-form')">Betaal nu</button>
                                    </div>
                                </div>
                                {!! Form::close() !!}
                            </div>
                        </section>
                    </div>
            </div>
        </div>
    </div>

    <!-- Include Select2 JavaScript -->

@endsection
@push('page-level-scrips')
    <script>

        $(document).on("click", "#fBack", function () {
            window.location.reload();
        });
            $(document).on("click", "#first_price", function () {
            $('.first-price-lslider').addClass('lfSlider');
            $('#second-box').addClass('bottomSliders');
            $('#third-box').addClass('rightBottom');
            $('#pay-form').css('display', 'block');
            $('#package_id').val(1);
            setTimeout(function () {
                $('#second-box').css('display', 'none');
                $('#third-box').css('display', 'none');
            }, 2000); // 2000 milliseconds = 2 seconds
        });
        $(document).on("click", "#second_price", function () {
            $('#second-box').addClass('secondRight');
            $('#third-box').addClass('rightBottom');
            $('#one-box').addClass('firstRight');
            $('#package_id').val(2);
            setTimeout(function () {
                $('#pay-form').css('display', 'block');
                $('#one-box').css('visibility', 'hidden');
                $('#third-box').css('display', 'none');
            }, 1000);
        });
        $(document).on("click", "#third_price", function () {
            $('#third-box').addClass('thirdRightThird');
            $('#second-box').addClass('thirdRight');
            $('#one-box').addClass('firstRightlast');
            $('#package_id').val(3);
            setTimeout(function () {
                $('#pay-form').css('display', 'block');
                $('#one-box').css('visibility', 'hidden');
                $('#second-box').css('visibility', 'hidden');
            }, 2000);
        })
        // Select 2
        $(document).ready(function () {
            $('#paymentSelect').select2({
                templateResult: formatOption,
                minimumResultsForSearch: Infinity

            });
        });

        function formatOption(option) {
            if (!option.id) return option.text; // Return the default option

            var imagePath = $(option.element).data('image');
            if (!imagePath) return option.text; // Return the option without image

            var $option = $(
                '<span><img src="' + imagePath + '" />' + option.text + '</span>'
            );
            return $option;
        }

        function doStripePayment(FormId)
        {
            var formObj = $('#'+FormId)
            var errorsShow = $('#show_error_pay_form');
            if(formObj.is('[disabled=disabled]')){
                return false;
            }else {
                formObj.attr('disabled','disabled');
                $.ajax({
                    url:  formObj.attr('action'),
                    type: "POST",
                    data: formObj.serialize(),
                    success: function(response){
                        formObj.removeAttr('disabled');
                        errorsShow.empty();
                        try {
                            response = JSON.parse(response);
                        }catch(err){}
                        // debugger;
                        if(response.success == 'true'){
                            //Show user login successfully
                            // alert(response.message);
                            window.location.href = response.url;
                        }
                        if(response.success == 'false'){
                            $.each(response.message, function(k, v) {
                                errorsShow.append(v + '<br>');
                            });
                        }
                    },
                    error(request, status, error){
                        formObj.removeAttr('disabled');
                        errorsShow.append(error);
                    }
                })
            }
        }
    </script>
@endpush
