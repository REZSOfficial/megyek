<ul class="list-group" id="cityList">
    @if(count($data['cities']) >= 1)
    @foreach ($data['cities'] as $city)
    <div class="container mt-2" id="{{$city->id}}">
        <li onclick="enableInput({{$city->id}}, '{{$city->varos}}')" id="varos{{$city->id}}" value="{{$city->varos}}" class="list-group-item">{{$city->varos}}</li>
        <button onclick="editCity({{$city->id}})" class="btn mb-2 mr-2 hidden" id="saveBtn{{$city->id}}">Mentés</button>
        <button onclick="deleteCity({{$city->id}})" class="btn mb-2 mr-2 hidden" id="deleteBtn{{$city->id}}">Törlés</button>
        <button class="btn mb-2 mr-2 hidden" id="cancelBtn{{$city->id}}" onclick="cancel({{$city->id}})">Mégsem</button>
    </div>      
    @endforeach
</ul>
    @else
    <div class="container">
        <h1 id="noCities">Nincsenek városok</h1>
    </div>
    @endif
    <div class="container mt-4">
        <button id="newCityBtn" class="btn container" onclick="addCity({{$data['county']->id}})">Új Város</button>
        <p id="editError" class="text-danger mt-1 hidden"></p>
    </div>


