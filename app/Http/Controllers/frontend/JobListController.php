<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use App\Models\backend\Category;
use App\Models\backend\Industry;
use App\Models\backend\Job;
use App\Models\backend\Location;
use App\Models\Company;
use App\Models\CompanyDetails;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class JobListController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data['user'] = Auth::guard('candidate')->check();
        $data['jobs'] = Job::all();
        $data['industries'] = Industry::all();
        // $data['industries'] = Industry::withCount('jobs')->get();
        $data['locations'] = Location::all();
        $data['categories'] = Category::all();
        $data['companies'] = Company::all();
        $data['comDetails'] = CompanyDetails::all();
        $data['totalJobs'] = Job::count(); 
        return Inertia::render('Job',$data);
    }

}
