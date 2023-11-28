<ul class="list-group" id="cityList">
    @if(count($data['cities']) >= 1)
    @foreach ($data['cities'] as $city)
    <div class="container mt-2" id="{{$city->id}}">
        <li onclick="enableInput({{$city}})" id="varos{{$city->id}}" value="{{$city->varos}}" class="list-group-item">{{$city->varos}}</li>
        <button onclick="editCity({{$city}})" class="btn btn-success hidden" id="saveBtn{{$city->id}}">Mentés</button>
        <button onclick="deleteCity({{$city->id}})" class="btn btn-danger hidden" id="deleteBtn{{$city->id}}">Törlés</button>
        <button class="btn btn-warning hidden" id="cancelBtn{{$city->id}}" onclick="cancel({{$city}})">Mégsem</button>
    </div>      
    @endforeach
</ul>
    @else
        <h1 id="noCities">Nincsenek városok</h1>
    @endif
<button id="newCityBtn" class="btn btn-success" onclick="addCity({{$data['county']->id}})">Új Város</button>

