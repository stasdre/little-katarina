@extends('layouts.app') 

@section('title', 'Home page') 

@push('styles') 
<link href="{{ mix('css/home.css') }}" rel="stylesheet"></head>
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
        @include('blocks.header')
      </div>
      <h1 class="main-screen__title">It is your paradise of pleasures
        <object class="main-screen__icon" type="image/svg+xml" data="/images/main-screen.svg"></object>
      </h1>
    </div>
    <div class="main-screen__fantazi fantazi">
      <div class="fantazi__left">
        <picture class="fantazi__picture">
          <source srcset="/images/fantazi.webp 1x, /images/fantazi@2x.webp 2x" type="image/webp"/>
            <img class="fantazi__img" src="/images/fantazi.jpg" srcset="/images/fantazi@2x.jpg 2x"/>
        </picture>
      </div>
      <div class="fantazi__right">
        <a class="fantazi__down" href="/{{app()->getLocale()}}/booking">Enjoy it</a>
        <a class="fantazi__text" href="/{{app()->getLocale()}}/gallery">See our photos</a>
        <a href="/{{app()->getLocale()}}/gallery" class="fantazi__btn"></a>
      </div>
    </div>
  </div>
</section>

<main class="main">

<section class="about">
  <div class="container about__container">
    <div class="about__left">
      <div class="about__header">Have you ever wondered why you have never experienced a fantasy like you imagined in your manly secret biggest dreams?</div>
      <div class="about__galery">
        <picture class="about__picture">
          <source srcset="/images/about/IMG_4933.webp 1x, /images/about/IMG_4933@2x.webp 2x" type="image/webp"/><img class="about__img" src="/images/about/IMG_4933.jpg" srcset="/images/about/IMG_4933@2x.jpg 2x"/>
        </picture>
        <picture class="about__picture">
          <source srcset="/images/about/IMG_4935.webp 1x, /images/about/IMG_4935@2x.webp 2x" type="image/webp"/><img class="about__img" src="/images/about/IMG_4935.jpg" srcset="/images/about/IMG_4935@2x.jpg 2x"/>
        </picture>
        <div class="about__info">
          <div class="about__info-top">Relax</div>
          <div class="about__info-bottom">everything for you</div>
        </div>
      </div>
      <div class="about__text"> 
        <p>Your fantasy can come true if you are a serious man who want to experience your sweetest dream indeed. </p>
        <p>Close your eyes and think that you are going on a journey of senses you would never forget. <br/>Think and feel that you are the king for a day. </p>
        <p>Feel intensely what you have never felt before. The cold finger on your skin that becomes warm and warmer. </p>
        <p>Our pretty angels will touch your senses softly as their wings feathers and will grant you the sweetest resurgence.</p>
      </div>
    </div>
    <div class="about__right">
      <div class="about__galery about__galery_hide-sm">
        <picture class="about__picture">
          <source srcset="/images/about/IMG_4933.webp 1x, /images/about/IMG_4933@2x.webp 2x" type="image/webp"/><img class="about__img" src="/images/about/IMG_4933.jpg" srcset="/images/about/IMG_4933@2x.jpg 2x"/>
        </picture>
        <picture class="about__picture">
          <source srcset="/images/about/IMG_4935.webp 1x, /images/about/IMG_4935@2x.webp 2x" type="image/webp"/><img class="about__img" src="/images/about/IMG_4935.jpg" srcset="/images/about/IMG_4935@2x.jpg 2x"/>
        </picture>
        <div class="about__info">
          <div class="about__info-top">Relax</div>
          <div class="about__info-bottom">everything for you</div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="members">
  <div class="container">
    <div class="baner members__baner">
      <div class="baner__left">
        <svg class="baner__icon">
          <use xlink:href="/images/icons/sprite.svg#Info"></use>
        </svg>
        <div class="baner__text"> <span>Very limited members club, </span>only for classy men who wants to experience heaven on earth.</div>
      </div>
      <div class="baner__right">
        <div class="baner__title">You will receive the best VIP discreet service.</div>
      </div>
    </div>
    <div class="members__wrapper">
      <h3 class="members__title">Our members :</h3>
      <ul class="members__list">
        <li class="members__item">Business men</li>
        <li class="members__item">Politicians</li>
        <li class="members__item">Bankers</li>
        <li class="members__item">The top seniors in the world</li>
      </ul>
      <div class="members__text"> 
        <p>They are long time customers with the taste of successful self-fulfillment. </p>
        <p>We decided to expand our membership club to the highest quality audience and give you our luxury conditions in our exclusive estate.</p>
      </div>
    </div>
  </div>
</section>


<section class="suggestions">
  <div class="container">
    <div class="suggestions__wrapper">
      <div class="suggestions__left">
        <h2 class="suggestions__title">Our suggestions include:</h2>
        <ul class="suggestions__list">
          <li class="suggestions__item"> <span class="suggestions__point"></span>Luxury hosting menus.</li>
          <li class="suggestions__item"> <span class="suggestions__point"></span>Four hours free staying in our estate.</li>
          <li class="suggestions__item"> <span class="suggestions__point"></span>Private high quality rooms and suites.</li>
          <li class="suggestions__item"> <span class="suggestions__point"></span>Bathrobe and spa shoes.</li>
          <li class="suggestions__item"> <span class="suggestions__point"></span>Free barbecue, bar and drinks.</li>
          <li class="suggestions__item"> <span class="suggestions__point"></span>Chocolates and fruits in the room.</li>
          <li class="suggestions__item"> <span class="suggestions__point"></span>Free choice of our sweet ladies who want to get to know you and have an extraordinary experience with you (the rest of the details we leave you to imagine).</li>
          <li class="suggestions__item"> <span class="suggestions__point"></span>Dreamy and delightful massage.</li>
          <li class="suggestions__item"> <span class="suggestions__point"></span>Vip enclosure all included.</li>
          <li class="suggestions__item"> <span class="suggestions__point"></span>You can always choose more of our high quality ladies. </li>
          <li class="suggestions__item"> <span class="suggestions__point"></span>Deluxe cleaning service.</li>
        </ul>
      </div>
      <div class="suggestions__right">
        <div class="suggestions__subtitle">In our included rooms/suites you will find:</div>
        <ul class="suggestions__list">
          <li class="suggestions__item"> <span class="suggestions__point"></span>Big soft bed.</li>
          <li class="suggestions__item"> <span class="suggestions__point"></span>Television.</li>
          <li class="suggestions__item"> <span class="suggestions__point"></span>Air-Conditioner.</li>
          <li class="suggestions__item"> <span class="suggestions__point"></span>Room services by your ladies.</li>
          <li class="suggestions__item"> <span class="suggestions__point"></span>Scented candles.</li>
          <li class="suggestions__item"> <span class="suggestions__point"></span>Shower&Toilet.</li>
          <li class="suggestions__item"> <span class="suggestions__point"></span>New luxury towels.</li>
          <li class="suggestions__item"> <span class="suggestions__point"></span>Body soaps.</li>
          <li class="suggestions__item"> <span class="suggestions__point"></span>Premium mini bar.</li>
          <li class="suggestions__item"> <span class="suggestions__point"></span>Safe box.</li>
        </ul>
      </div>
    </div>
  </div>
</section>


<section class="rooms">
  <div class="container rooms__wrapper">
    <h2 class="rooms__title">Extras rooms/suits:</h2>
    <div class="rooms__baner">
      <div class="rooms__baner-left">
        <h3 class="rooms__subtitle">Katarinas Secret</h3>
        <div class="rooms__text"> 
          <p>Our luxury suite, rich and classic living space design.</p>
          <p>Guests can enjoy the royal Jacuzzi and conditions with the amazing view.</p>
        </div>
      </div>
      <div class="rooms__baner-right">
        <h3 class="rooms__subtitle rooms__subtitle_white">Katarinas Dream</h3>
        <div class="rooms__text rooms__text_white"> 
          <p>The most prestigious suite with magnificent balcony and royal Jacuzzi. </p>
          <p>Our guests can enjoy the spectacula and unique view.</p>
        </div>
        <object class="rooms__img" type="image/svg+xml" data="/images/flower.svg"></object>
      </div>
    </div>
  </div>
</section>


<section class="suggestions suggestions_extra">
  <div class="container suggestions__extra-wrapper">
    <h2 class="suggestions__extra-title">
       Extras suggestions: <span>(Check prices via our email)</span></h2>
    <ul class="suggestions__list suggestions__list_row">
      <li class="suggestions__item"> <span class="suggestions__point"></span>2 hours extra in the estate</li>
      <li class="suggestions__item"> <span class="suggestions__point"></span>”Katarinas Secret” suite</li>
      <li class="suggestions__item"> <span class="suggestions__point"></span>One night in the estate</li>
      <li class="suggestions__item"> <span class="suggestions__point"></span>4 hours extra in the estate</li>
      <li class="suggestions__item"> <span class="suggestions__point"></span>”Katarinas dream” suite</li>
    </ul>
  </div>
</section>


<section class="book">
  <div class="container book__container"><a class="btn" href="/booking">BOOK TIME NOW</a></div>
</section>
</main>
@endsection
