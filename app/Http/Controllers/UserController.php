<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Address;
use App\Geo;
use App\Company;


class UserController extends Controller
{
    public function index()
    {

        return User::all()->load('address', 'address.geo' ,'company');

    }

    public function show($id)
    {
        $user = User::find($id);
        $address = Address::find($id);
        $company = Company::find($id);

        return $user->load('address', 'address.geo' ,'company');
    }

    public function store(Request $request)
    {
        $user = User::create($request->all());

        $addressInfo = $request->address;
        $companyInfo = $request->company;
        $geoInfo = $addressInfo['geo'];

        $address = Address::create([
            'user_id'=>$user->id,
            'street'=>$addressInfo['street'],
            'suite'=>$addressInfo['suite'],
            'city'=>$addressInfo['city'],
            'zipcode'=>$addressInfo['zipcode']
        ]);

        $company = Company::create([
            'user_id'=>$user->id,
            'name'=>$companyInfo['name'],
            'catchPhrase'=>$companyInfo['catchPhrase'],
            'bs'=>$companyInfo['bs']
        ]);

        $geo = Geo::create([
            'address_id'=> $address->id,
            'lat'=>$geoInfo['lat'],
            'lng'=>$geoInfo['lng'],
        ]);

        return $user->load('address', 'address.geo','company');
    }

    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $address = Address::find($id);
        $company = Company::find($id);
        $geo = Geo::find($id);

        $addressInfo = $request->address;
        $companyInfo = $request->company;
        $geoInfo = $addressInfo['geo'];

        $user->update($request->all());

        $address->update([
            'street'=>$addressInfo['street'],
            'suite'=>$addressInfo['suite'],
            'city'=>$addressInfo['city'],
            'zipcode'=>$addressInfo['zipcode']
        ]);

        $company->update([
            'name'=>$companyInfo['name'],
            'catchPhrase'=>$companyInfo['catchPhrase'],
            'bs'=>$companyInfo['bs']
        ]);

        $geo->update([
            'lat'=>$geoInfo['lat'],
            'lng'=>$geoInfo['lng'],
        ]);

        return $user->load('address', 'address.geo' ,'company');
    }

    public function delete(Request $request, $id)
    {
        $User = User::findOrFail($id);
        $User->delete();

        return response()->json(['response' => 'user deleted']);
    }
}
