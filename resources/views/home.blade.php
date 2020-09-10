@extends('app') 

@section('title', 'Home page') 

@push('styles') 
<%= htmlWebpackPlugin.tags.headTags %>
@endpush 

@push('scripts') 
<script src="{{ mix('js/manifest.js') }}"></script>
<script src="{{ mix('js/vendors.js') }}"></script>
<script src="{{ mix('js/index.js') }}"></script>
@endpush 

@section('content')

<section class="main-screen">
  <div class="main-screen__wrapper">
    <div class="container">
      <div class="main-screen__header">
          <header class="header">
  <div class="header__top">
    <nav class="nav header__nav">
      <ul class="nav__list">
        <li class="nav__item"><a class="nav__link" href="/">Home</a></li>
        <li class="nav__item"><a class="nav__link" href="/booking">Book time</a></li>
        <li class="nav__item"><a class="nav__link" href="/contact-us">Contact us</a></li>
      </ul>
    </nav>
    <div class="langs header__langs">
            <ul class="langs__list">
            <li class="langs__item"><a class="langs__link" href="#">
                <svg class="langs__ikon">
                    {{-- <use xlink:href="<%=require('images/icons/sprite.svg').default%>#English"></use> --}}
                </svg></a></li>
            <li class="langs__item"><a class="langs__link" href="#">
                <svg class="langs__ikon">
                    {{-- <use xlink:href="<%=require('images/icons/sprite.svg').default%>#Dubai"></use> --}}
                </svg></a></li>
            <li class="langs__item"><a class="langs__link" href="#">
                <svg class="langs__ikon">
                    {{-- <use xlink:href="<%=require('images/icons/sprite.svg').default%>#German"></use> --}}
                </svg></a></li>
            <li class="langs__item"><a class="langs__link" href="#">
                <svg class="langs__ikon">
                    {{-- <use xlink:href="<%=require('images/icons/sprite.svg').default%>#Israel"></use> --}}
                </svg></a></li>
            </ul>
    </div>
  </div>
  <div class="header__bottom">
    <object class="header__logo" type="image/svg+xml" data=""></object>
  </div>
</header>
      </div>
      <h1 class="main-screen__title">It is your paradise of pleasures
        {{-- <object class="main-screen__icon" type="image/svg+xml" data="<%=require('images/main-screen.svg').default%>"></object> --}}
      </h1>
    </div>
    <div class="main-screen__fantazi fantazi">
      <div class="fantazi__left">
        <picture class="fantazi__picture">
          {{-- <source srcset="<%=require('images/fantazi.webp').default%> 1x, <%=require('images/fantazi@2x.webp').default%> 2x" type="image/webp"/><img class="fantazi__img" src="<%=require('images/fantazi.jpg').default%>" srcset="<%=require('images/fantazi@2x.jpg').default%> 2x"/> --}}
        </picture>
      </div>
      <div class="fantazi__right"><a class="fantazi__down" href="/booking">Enjoy it</a><a class="fantazi__text" href="#">Check out our photos</a>
        <button class="fantazi__btn"></button>
      </div>
    </div>
  </div>
</section>
@endsection
