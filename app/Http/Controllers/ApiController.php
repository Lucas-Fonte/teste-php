<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Address;
use App\Geo;
use App\Company;


class ApiController extends Controller
{
    public function index()
    {
        $users = file_get_contents('http://jsonplaceholder.typicode.com/users');
        $posts = file_get_contents('http://jsonplaceholder.typicode.com/posts');
        $response = ([
            'users' => json_decode($users),
            'posts' => json_decode($posts)
        ]);


        function fetchUsers($users){
            foreach ($users as $user_request)  {

                $user = User::create($user_request->all());
                $addressInfo = $user_request->address;
                $companyInfo = $user_request->company;
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
            }
        }

        return $response;
    }

}
