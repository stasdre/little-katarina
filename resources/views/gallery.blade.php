@extends('layouts.app') 

@section('title', 'Contact us') 

@push('styles') 
<link href="{{ mix('css/gallery.css') }}" rel="stylesheet"></head>
@endpush 

@push('scripts') 
<script src="{{ mix('js/manifest.js') }}"></script>
<script src="{{ mix('js/vendors.js') }}"></script>
<script src="{{ mix('js/gallery.js') }}"></script>
@endpush 

@section('content')
<section class="gallery">
    <div class="container">
        <div class="gallery__header">
            @include('blocks.header')
        </div>
    </div>
    <div class="gallery__wrapper">
        <div class="container">
            <div class="glide">
                <div class="glide__track" data-glide-el="track">
                    <ul class="glide__slides">
                    <li class="glide__slide">
                        <picture class="gallery__picture">
                            <img class="gallery__img" src="https://loremflickr.com/1024/768"/>
                        </picture>
                    </li>
                    <li class="glide__slide">
                        <picture class="gallery__picture">
                            <img class="gallery__img" src="https://loremflickr.com/800/2048"/>
                        </picture>
                    </li>
                    <li class="glide__slide">
                        <picture class="gallery__picture">
                            <img class="gallery__img" src="https://loremflickr.com/600/400"/>
                        </picture>
                    </li>
                    <li class="glide__slide">
                        <picture class="gallery__picture">
                            <img class="gallery__img" src="https://loremflickr.com/600/400"/>
                        </picture>
                    </li>
                    <li class="glide__slide">
                        <picture class="gallery__picture">
                            <img class="gallery__img" src="https://loremflickr.com/600/400"/>
                        </picture>
                    </li>
                    <li class="glide__slide">
                        <picture class="gallery__picture">
                            <img class="gallery__img" src="https://loremflickr.com/600/400"/>
                        </picture>
                    </li>
                    <li class="glide__slide">
                        <picture class="gallery__picture">
                            <img class="gallery__img" src="https://loremflickr.com/600/400"/>
                        </picture>
                    </li>
                    </ul>
                </div>
                <div class="glide__arrows" data-glide-el="controls">
                    <button class="gallery__arrow gallery__arrow--prev glide__arrow glide__arrow--left" data-glide-dir="<">
                    </button>
                    <button class="gallery__arrow gallery__arrow--next glide__arrow glide__arrow--right" data-glide-dir=">">
                    </button>
                </div>                
                <div class="glide__bullets" data-glide-el="controls[nav]">
                    <button class="gallery__bullet glide__bullet" data-glide-dir="=0"></button>
                    <button class="gallery__bullet glide__bullet" data-glide-dir="=1"></button>
                    <button class="gallery__bullet glide__bullet" data-glide-dir="=2"></button>
                    <button class="gallery__bullet glide__bullet" data-glide-dir="=3"></button>
                    <button class="gallery__bullet glide__bullet" data-glide-dir="=4"></button>
                    <button class="gallery__bullet glide__bullet" data-glide-dir="=5"></button>
                    <button class="gallery__bullet glide__bullet" data-glide-dir="=6"></button>
                </div>                
            </div>
        </div>
    </div>
</section>
@endsection