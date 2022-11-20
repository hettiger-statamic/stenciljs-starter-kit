@prepend('styles')
    <style>html{visibility:hidden}</style>
    <link rel="stylesheet" href="{{ asset(mix('css/tailwind.css')) }}">
@endprepend
@stack('styles')
