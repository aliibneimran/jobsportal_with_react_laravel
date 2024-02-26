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

        $startDate = now()->subMonth();  // Start date one month ago
        $endDate = now();                // Current date
        // $data['jobs'] = Job::whereBetween('created_at', [$startDate, $endDate])->paginate(3);
        $data['totalJobsOneMonth'] = Job::whereBetween('created_at', [$startDate, $endDate])->count();

        $data['locations'] = Location::with('job')->get();
        $data['jobs'] = Job::get()->take(1);
        $data['locations'] = Location::get();
        $data['industries'] = Industry::all();
        $data['categories'] = Category::all(); 

        $data['company'] = Company::all();
        $data['comDetails'] = CompanyDetails::all();
        $data['details'] = $data['company']->merge($data['comDetails']);

        $data['total_company'] = Company::count(); 
        $data['total_candidate'] = Candidate::count(); 
        return Inertia::render('Home',$data);
    }
    public function about(){
        return Inertia::render('About');
    }
    public function contact(){
        return Inertia::render('Contact');
    }
}
