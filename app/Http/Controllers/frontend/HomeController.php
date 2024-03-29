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
        $data['jobs'] = Job::latest()->take(3)->get();
        $data['locations'] = Location::get();
        $data['industries'] = Industry::all();
        $data['categories'] = Category::all(); 

        $data['companies'] = Company::all();
        $data['comDetails'] = CompanyDetails::all();
        $data['totalJobs'] = Job::whereIn('company_id', $data['companies']->pluck('id'))->count();

        $data['total_company'] = Company::count(); 
        $data['total_candidate'] = Candidate::count(); 
        $data['user'] = Auth::guard('candidate')->check();
        return Inertia::render('Home',$data);
    }
    public function about(){
        $data['user'] = Auth::guard('candidate')->check();
        return Inertia::render('About',$data);
    }
    public function contact(){
        $data['user'] = Auth::guard('candidate')->check();
        return Inertia::render('Contact',$data);
    }
}
