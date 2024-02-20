<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <link rel="shortcut icon" type="image/x-icon" href="{{asset('frontend/imgs/template/favicon.svg')}}">
        <link href="{{asset('frontend/css/style.css?version=4.1')}}" rel="stylesheet">
        <title>@yield('title')</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <!-- Include jQuery -->
        <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia


        <script src="{{asset('frontend/js/vendor/modernizr-3.6.0.min.js')}}"></script>
        @yield('scripts')
        @yield('script')
        <script src="{{asset('frontend/js/vendor/jquery-3.6.0.min.js')}}"></script>
        <script src="{{asset('frontend/js/vendor/jquery-migrate-3.3.0.min.js')}}"></script>
        <script src="{{asset('frontend/js/vendor/bootstrap.bundle.min.js')}}"></script>
        <script src="{{asset('frontend/js/plugins/waypoints.js')}}"></script>
        <script src="{{asset('frontend/js/plugins/wow.js')}}"></script>
        <script src="{{asset('frontend/js/plugins/magnific-popup.js')}}"></script>
        <script src="{{asset('frontend/js/plugins/perfect-scrollbar.min.js')}}"></script>
        <script src="{{asset('frontend/js/plugins/select2.min.js')}}"></script>
        <script src="{{asset('frontend/js/plugins/isotope.js')}}"></script>
        <script src="{{asset('frontend/js/plugins/scrollup.js')}}"></script>
        <script src="{{asset('frontend/js/plugins/swiper-bundle.min.js')}}"></script>
        <script src="{{asset('frontend/js/plugins/counterup.js')}}"></script>
        <script src="{{asset('frontend/js/main.js?v=4.1')}}"></script>
        {{-- <script>
            $(document).ready(function () {
                $('form').submit(function (e) {
                    // e.preventDefault();

                    var formData = $(this).serialize();

                    $.ajax({
                        type: 'GET',
                        url: '{{ route('search') }}',
                        data: formData,
                        success: function (data) {
                            $('#search-results').html(data);
                        },
                        error: function (xhr, status, error) {
                            console.error(xhr.responseText);
                        }
                    });
                });
            });
        </script> --}}
    </body>
</html>
