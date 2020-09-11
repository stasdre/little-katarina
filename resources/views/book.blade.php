@extends('app') 

@section('title', 'Book time') 

@push('styles') 
<link href="{{ mix('css/book.css') }}" rel="stylesheet"></head>
@endpush 

@push('scripts') 
<script src="{{ mix('js/manifest.js') }}"></script>
<script src="{{ mix('js/vendors.js') }}"></script>
<script src="{{ mix('js/react_vendors.js') }}"></script>
<script src="{{ mix('js/moment.js') }}"></script>
<script src="{{ mix('js/book.js') }}"></script>
@endpush 

@section('content')

<section class="booking">
  <div class="booking__wrapper">
    <div class="container">
      <div class="booking__header">
          @include('blocks.header')
      </div>
    </div>
    <div class="booking__calendar">
        <div id="app" class="container"></div>
    </div>
  </div>
</section>
@endsection
