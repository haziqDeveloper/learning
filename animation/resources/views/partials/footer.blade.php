<footer>
    <p>Copyright © 2023 Alphabetting B.V. Alle rechten voorbehouden.</p>
    <div>

        <a href="/privacy">Privacy</a> |
        <a href="#">Algemene Voorwaarden</a> |
        <a href="#">Cookies</a>

    </div>


</footer>

<!-- Sign up Model -->
<div id="Signup" class="modal">
    <form method="POST" action="{{ route('register') }}">
        @csrf
        <div class="modal-content">
            <div class="modal-header">
                <span class="close">&times;</span>
                <h2>Sign Up</h2>
            </div>
            <div class="modal-body">
                <div class="field">
                    <input type="name" id="name" placeholder="First Name" required>
                    <input type="name" id="name" placeholder="Last Name" required>
                    <input type="email" id="email" placeholder="E-mail" required>
                    <input type="password" id="password" placeholder="Password" required class="eye-icon">
                    <input type="password" id="c-password" placeholder="Confirm Password" required>
                </div>
            </div>
            <div class="modal-footer">
                <button type="submit" class="sign-up-button">Sign up</button>
            </div>
        </div>
    </form>
</div>

<!-- Login Model -->
<div id="Login" class="modal">
    <div class="modal-content login-model">
        <div>
            <form method="POST" action="{{ route('login') }}">
                @csrf
                <div class="modal-header">
                    <span class="close1">&times;</span>
                    <h2>LogIn</h2>
                </div>
                <div class="modal-body">
                    <div class="field">
                        <input type="email" id="email" placeholder="E-mail" name="email" :value="old('email')" required>
                        <input type="password" id="password" placeholder="Password" name="password" required class="eye-icon">
                    </div>
                </div>
                <div class="modal-footer">
                <button type="submit" class="sign-up-button">LogIn</button>
            </div>
            </form>
        </div>
    </div>

</div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<script src="{{ asset('js/script.js') }}" defer=""></script>
</body>

</html>
