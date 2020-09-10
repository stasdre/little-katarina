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

            <footer class="footer">
                <div class="container footer__container">
                    <div class="footer__nav">
                    <nav class="nav nav_footer">
                        <ul class="nav__list">
                            <li class="nav__item"><a class="nav__link" href="/">Home</a></li>
                            <li class="nav__item"><a class="nav__link" href="/booking">Book time</a></li>
                            <li class="nav__item"><a class="nav__link" href="/contact-us">Contact us</a></li>
                        </ul>
                    </nav>
                    </div>
                    <div class="footer__langs">
                        <div class="langs">
                            <ul class="langs__list">
                            {{-- <li class="langs__item"><a class="langs__link" href="#">
                                <svg class="langs__ikon">
                                    <use xlink:href="<%=require('images/icons/sprite.svg').default%>#English"></use>
                                </svg></a></li>
                            <li class="langs__item"><a class="langs__link" href="#">
                                <svg class="langs__ikon">
                                    <use xlink:href="<%=require('images/icons/sprite.svg').default%>#Dubai"></use>
                                </svg></a></li>
                            <li class="langs__item"><a class="langs__link" href="#">
                                <svg class="langs__ikon">
                                    <use xlink:href="<%=require('images/icons/sprite.svg').default%>#German"></use>
                                </svg></a></li>
                            <li class="langs__item"><a class="langs__link" href="#">
                                <svg class="langs__ikon">
                                    <use xlink:href="<%=require('images/icons/sprite.svg').default%>#Israel"></use>
                                </svg></a></li> --}}
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
        <button class="burger">
            <span></span>
        </button>
        @stack('scripts')
    </body>
</html>
