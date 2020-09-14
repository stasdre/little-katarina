@extends('layouts.admin') 


@push('styles') 
<link href="{{ mix('css/book.css') }}" rel="stylesheet"></head>
@endpush 

@push('scripts') 
<script src="{{ mix('js/manifest.js') }}"></script>
<script src="{{ mix('js/react_vendors.js') }}"></script>
<script src="{{ mix('js/moment.js') }}"></script>
<script src="{{ mix('js/admin.js') }}"></script>
@endpush 

@section('content')
<div style="background: rgba(7,6,6,.7);" class="row align-items-center justify-content-center">
<div id="app"></div>
</div>
@endsection