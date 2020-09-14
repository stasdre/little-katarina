@extends('layouts.admin') 

@section('content')
<div class="row align-items-center justify-content-center">
    <div class="col-4">
        <h4>Sign In</h4>
        <form method="POST" action="/login">
            {{ csrf_field() }} 
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" name="password" class="form-control" id="exampleInputPassword1">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</div>
@endsection