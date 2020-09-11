@extends('app') 

@section('title', 'Contact us') 

@push('styles') 
<link href="{{ mix('css/contact.css') }}" rel="stylesheet"></head>
@endpush 

@push('scripts') 
<script src="{{ mix('js/manifest.js') }}"></script>
<script src="{{ mix('js/vendors.js') }}"></script>
<script src="{{ mix('js/contacts.js') }}"></script>
@endpush 

@section('content')

<section class="contact">
  <div class="container">
    <div class="contact__header">
        @include('blocks.header')
    </div>
    <div class="contact__wrapper">
      <div class="contact__left">
        <h1 class="contact__title">Contact us:</h1>
        <div class="contact__address">Odessa, Ukraine</div>
        <div class="contact__email contact__email_hide-md"><a href="mailto:thelittlekatarina@gmail.com">thelittlekatarina@gmail.com</a></div>
      </div>
      <div class="contact__right">
        <div class="contact__map">
          <picture>
            <source srcset="/images/map.webp" type="image/webp"/><img class="contact__img" src="/images/map.jpg"/>
          </picture>
        </div>
        <div class="contact__email contact__email_hide-large">
          <p>Email: </p><a href="mailto:thelittlekatarina@gmail.com">thelittlekatarina@gmail.com</a>
        </div>
        <div class="contact__form">
          <div class="contact__form-title">Or write us by using this form:</div>
          <form class="form" action="#" method="post">
            <div class="form__row">
              <div class="form__col">
                <input class="form__input" type="text" placeholder="Name"/>
              </div>
              <div class="form__col">
                <input class="form__input" type="email" placeholder="E-mail"/>
              </div>
            </div>
            <div class="form__row">
              <div class="form__col">
                <textarea class="form__input form__input_text" placeholder="Message"></textarea>
              </div>
            </div>
            <div class="form__rom">
              <div class="form__col">
                <button class="btn-arrow btn-arrow_arrow" type="submit">Send</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
@endsection
