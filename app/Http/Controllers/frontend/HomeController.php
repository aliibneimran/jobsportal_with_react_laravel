<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use App\Models\backend\Category;
use App\Models\backend\Industry;
use App\Models\backend\Job;
use App\Models\backend\Location;
use App\Models\Candidate;
use App\Models\Company;
use App\Models\CompanyDetails;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(Request $request){
        // $locations = Location::all();
        // $industries= Industry::all();
        // $categories = Category::all();
        // if($request->filled('search')){
        //     $jobs = Job::
        //      join('categories', 'jobs.category_id', '=', 'categories.id')
        //     ->join('locations', 'jobs.location_id', '=', 'locations.id')
        //     ->join('industries', 'jobs.industry_id', '=', 'industries.id')
        //     ->where('categories.name', 'like', '%' . $request->search . '%')
        //     ->orWhere('locations.name', 'like', '%' . $request->search . '%')
        //     ->orWhere('industries.name', 'like', '%' . $request->search . '%')
        //     ->orWhere('title', 'like', '%' . $request->search . '%')
        //     ->orWhere('description', 'like', '%' . $request->search . '%')
        //     ->orWhere('salary', 'like', '%' . $request->search . '%')
        //     ->orWhere('tag', 'like', '%' . $request->search . '%')
        //     ->get();
        // }else{
        //     $jobs = Job::all();
        // }
        // return view('frontend/home', compact('jobs','locations','industries','categories'));

        $startDate = now()->subMonth();  // Start date one month ago
        $endDate = now();                // Current date
        // $data['jobs'] = Job::whereBetween('created_at', [$startDate, $endDate])->paginate(3);
        $data['totalJobsOneMonth'] = Job::whereBetween('created_at', [$startDate, $endDate])->count();

        $data['locations'] = Location::with('job')->get();
        $data['jobs'] = Job::get();
        $data['locations'] = Location::get();
        $data['industries'] = Industry::all();
        $data['categories'] = Category::all(); 

        $data['company'] = Company::all();
        $data['comDetails'] = CompanyDetails::all();
        $data['details'] = $data['company']->merge($data['comDetails']);

        $data['total_company'] = Company::count(); 
        $data['total_candidate'] = Candidate::count(); 
        // return view('frontend/home',$data);
        return Inertia::render('Home',$data);
    }

}
