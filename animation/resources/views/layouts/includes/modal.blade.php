<!-- Sign up Model -->
{!! Form::open(['url'=>route('register'),'id' => 'register-form','onsubmit'=>'return false;']) !!}
<div id="Signup" class="modal">
    <div class="modal-content">
        <div class="modal-header">
            <span class="close">&times;</span>
            <h2>Sign Up</h2>
        </div>
        <div id="show_error_register" style="color: red"> </div>
        <div id="show_success_register" style="color: green"> </div>
        <div class="modal-body">
            <div class="field">
                {!! Form::text('first_name', null, ['id' => 'first_name', 'placeholder' => 'First Name']) !!}
                {!! Form::text('last_name', null, ['id' => 'last_name', 'placeholder' => 'Last Name']) !!}
                {!! Form::email('email', null, ['id' => 'email', 'placeholder' => 'E-mail']) !!}
                {!! Form::password('password', ['id' => 'password', 'placeholder' => 'Password', 'class' => 'eye-icon']) !!}
                {!! Form::password('password_confirmation', ['id' => 'c-password', 'placeholder' => 'Confirm Password']) !!}
            </div>
        </div>
        <div class="modal-footer">
            {!! Form::submit('Sign up', ['class' => 'sign-up-button','onclick'=>'doRegister("register-form")']) !!}
        </div>
    </div>
</div>
{!! Form::close() !!}


<!-- Login Model -->

{!! Form::open(['url' => route('login'), 'id' => 'login-form','onsubmit'=>'return false;']) !!}
<div id="Login" class="modal">
    <div class="modal-content login-model">
        <div>
            <div class="modal-header">
                <span class="close1">&times;</span>
                <h2>LogIn</h2>
            </div>
            <div id="show_error" style="color: red"> </div>
            <div id="show_success" style="color: green"> </div>
            <div class="modal-body">
                <div class="field">
                    {!! Form::email('email', old('email'), ['id' => 'email', 'placeholder' => 'E-mail']) !!}
                    {!! Form::password('password', ['id' => 'password', 'placeholder' => 'Password','class' => 'eye-icon']) !!}
                </div>
            </div>
            <div class="modal-footer">
                {!! Form::submit('LogIn', ['class' => 'sign-up-button','onclick'=>'doLogin("login-form")']) !!}
            </div>
        </div>
    </div>
</div>
{!! Form::close() !!}
