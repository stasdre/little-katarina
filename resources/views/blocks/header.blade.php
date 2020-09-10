<header class="header">
  <div class="header__top">
    <nav class="nav header__nav">
        @include('blocks.nav')
    </nav>
    <div class="langs header__langs">
        @include('blocks.langs')
    </div>
  </div>
  <div class="header__bottom">
    <object class="header__logo" type="image/svg+xml" data="{{asset('images/logo.svg')}}"></object>
  </div>
</header>
