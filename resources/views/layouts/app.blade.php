<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="UTF-8" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=no"
        />
        <title>{{ config('app.name') }} - @yield('title')</title>
        @stack('styles')
    </head>
    <body>
        <div class="wrapper">
            @yield('content')

            @include('blocks.footer')
        </div>
        <button class="burger">
            <span></span>
        </button>
        @stack('scripts')
    </body>
</html>
