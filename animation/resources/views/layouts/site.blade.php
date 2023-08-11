<!DOCTYPE html>
<html lang="en">

@include('layouts.includes.head')

<body>
@include('layouts.includes.header')
@yield('content')
@include('layouts.includes.footer')

@include('layouts.includes.modal')
<script>
    var subscription_url = '{{route('subscription')}}';
</script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/js/select2.min.js"></script>
<script src="{{ asset('js/script.js') }}" defer=""></script>
<script src="{{ asset('js/login.js') }}"></script>
@stack('page-level-scrips')
</body>

</html>
