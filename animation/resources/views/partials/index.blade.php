@extends('partials.main')
@section('content')
    <header>
        <img src="{{ asset('images/logo.svg') }}" alt="logo" />
        <div>
            <ul>
                <li id="signupBtn">Word lid</li>
                <li class="active" id="LoginBtn">leden</li>
            </ul>
        </div>
    </header>
    <!-- Header Close -->
    <main>
        <!-- Banner Section Start -->
        <section class="main-section">
            <div class="container">
                <h1>Speel op een hoger niveau</h1>
                <h2>Stop met verliezen, join de alpha’s, beat the system</h2>
                <div class="left-align">
                    <a href="#" class="themeBtn">probeer gratis</a>
                </div>
            </div>
        </section>
        <!-- Banner Section Close -->

        <!-- Feature Section Start -->
        <section class="features">
            <div class="container">
                <div class="feature-main">
                    <div class="feature">
                        <img src="{{ asset('images/Natural.svg') }}" alt="Natural" />
                        <h2>klik en klaar</h2>
                        <p>Met Alphabetting plaats je in een oogwenk weddenschappen.</p>
                    </div>

                    <div class="feature">
                        <img src="{{ asset('images/Banknotes.svg') }}" alt="Banknotes" />
                        <h2>Samen naar succes</h2>
                        <p>Word lid van onze Alphabetting-gemeenschap, waar leden elkaar helpen en samen groeien.</p>
                    </div>

                    <div class="feature">
                        <img src="{{ asset('images/MoneyBox.svg') }}" alt="MoneyBox" />
                        <h2>Voorsprong op wedkantoren</h2>
                        <p>Blijf altijd een stap voor met ons geavanceerde algoritme dat duizenden weddenschappen razendsnel
                            analyseert.</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- Feature Section Close -->

        <!-- OverAll Section Start -->
        <section class="overall">
            <div class="about-inner">
                <img src="{{ asset('images/about-two.svg') }}" alt="about-two" />

                <div class="right-side">
                    <h2>Overal Alphabetten</h2>
                    <p>
                        Of je nu een wedstrijd volgt, door Instagram scrolt of uit een
                        vliegtuig springt, het maakt niet uit wanneer je wilt inzetten.
                    </p>
                    <a href="#" class="themeBtn">MEER INFO OVER ALPHABETS ></a>
                </div>
            </div>
        </section>
        <!-- OverAll Section Close -->

        <!-- profit Section Start -->
        <section class="overall second-overall">
            <div class="about-inner">


                <div class="right-side">
                    <h2>Profiteer van quoteringen</h2>
                    <p>
                        Ons superieure algoritme met ongekende rekenkracht legt de
                        verschillen in quoteringen tussen wedkantoren bloot. Vergelijk en
                        kies de beste opties om je winstkansen te vergroten.
                    </p>
                    <a href="#" class="themeBtn">MEER INFO OVER betrouwbaarheid ALPHABETS ></a>
                </div>
                <img src="{{ asset('images/about-one.svg') }}" alt="about-one" />
            </div>
        </section>
        <!-- profit Section Close -->

        <!-- Graph Section -->
        <section class="graph">
            <h2>Deepdive in alphabets</h2>
            <img src="{{ asset('images/graph.svg') }}" alt="Graph Image">
            <div class="graph-button">
                <a href="#" class="themeBtn">MEER INFO OVER deepdive in ALPHABETS ></a>
            </div>
        </section>

    </main>
@endsection
