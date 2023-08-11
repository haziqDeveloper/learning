@unless(Request::is('/'))
    <div class="subscription-top-head">
        <h1>>>>> NIEUW BIJ ALPHABETTING? KRIJG 50% KORTING MET DE CODE WELCOMALPHA <<<<< </h1>
    </div>
@endunless

<header>
    <a href="{{route('home')}}">
        <img src="{{ asset('images/logo.svg') }}" alt="logo" />
    </a>

@auth
        @unless(Request::is('/'))
        <h2>Kies uw lidmaatschap</h2>
        @endunless
        <div class="dropdown">
            <img src="{{ asset('images/profile.svg') }}" alt="Logo" class="profile-img">
            <div class="dropdown-content">
                <a href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                    Logout
                </a>
                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                    @csrf
                </form>
            </div>
        </div>

    @else
        <div>
            <ul>
                <li id="signupBtn">Word lid</li>
                <li class="active" id="LoginBtn">leden</li>
            </ul>
        </div>
    @endauth

</header>

