<?php

namespace App\Http\Controllers;

use App\Models\City;
use App\Models\County;
use Illuminate\Http\Request;

class CityController extends Controller
{
    public function show(County $county) {
        $cities = City::where('megye_id', $county->id)->get();
        $data = [
            'cities' => $cities,
            'county' => $county
        ];
        
        return view('showcities', compact('data'));
    }

    public function create(County $county) {
        return view('create', compact('county'));
    }

    public function save(Request $request) {
        $create_data = $request->validate([
            'varos' => 'required|alpha|unique:cities',
            'megye_id' => 'required'
        ]);
        $newCity = new City();
        $newCity = City::create($create_data);

        return response()->json(['city' => $newCity]);
    }

    public function update(Request $request, City $city) {
        $request->validate([
            'city' => 'required|alpha|unique:cities,varos,' . $city->id,
        ]);
        $city->varos = $request->city;
        $city->save();
    
        return response()->json(['message' => 'Siker']);
    }

    public function delete(Request $request, City $city) {
        $city->delete();

        return response()->json(['message' => 'Siker']);
    }
}
