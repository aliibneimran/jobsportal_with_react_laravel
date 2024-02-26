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

use function Termwind\render;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        $keyword = $request->input('keyword');

        $data['jobs'] = Job::where('title', 'like', "%$keyword%")
            ->orWhere('description', 'like', "%$keyword%")
            ->get();

        $data['locations'] = Location::all();
        $data['industries'] = Industry::all();
        $data['categories'] = Category::all();
        $data['companies'] = Company::all();
        $data['comDetails'] = CompanyDetails::all();

        return Inertia::render('Search', $data);
    }
    public function result()
    {
        $data['user'] = Auth::guard('candidate')->check();
        $data['jobs'] = Job::all();
        $data['industries'] = Industry::all();
        $data['locations'] = Location::all();
        $data['categories'] = Category::all();
        $data['companies'] = Company::all();
        $data['comDetails'] = CompanyDetails::all();
        $data['totalJobs'] = Job::count(); 
        return Inertia::render('SearchResult',$data);
    }
}
