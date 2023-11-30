@extends('layout')
@section('content')
@include('inc.navbar')

<div id="content" class="container mt-5 mb-5 w-50">
        <select class="form-select" name="countySelect" id="countySelect">
            <option value="" disabled selected hidden>Válasszon...</option>
            @foreach ($counties as $county)
                <option value="{{$county->id}}">{{$county->megye}}</option>
            @endforeach
        </select>
</div>

<div id="cities">

</div>

<div class="container" id="addForm">

</div>

@endsection

