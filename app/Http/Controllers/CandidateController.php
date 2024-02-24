<?php

namespace App\Http\Controllers;

use App\Models\Candidate;
use App\Models\CandidateDetails;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Mail\DemoMail;
use App\Models\Applicant;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class CandidateController extends Controller
{
    public function index(){
        return Inertia::render('Signin');
    }
    public function login(Request $request){
        // dd($request->all());
        if(Auth::guard('candidate')->attempt(['email'=> $request->email,'password'=> $request->password])){
            return redirect()->route('candidate_profile');
            // return Inertia::render('profile');
        }else{
            return redirect()->back()->with('msg','Please enter currect email and password');
        }

    }
    public function logout(){
        Auth::guard('candidate')->logout();
        return redirect()->route('candidate_login_form');
    }
    public function register(){
        return Inertia::render('Signup');
    }
    public function registration(Request $request){
        // dd($request->all());
        $candidate = Candidate::create([
            'name'=> $request->name,
            'email'=> $request->email,
            'password'=> Hash::make($request->password),
        ]);

        Auth::guard('candidate')->login($candidate);

        return redirect()->route('candidate_profile');
        
    }
    public function profile(){
        $candidate = Auth::guard('candidate')->user();
        $canDetails = CandidateDetails::all()->where('candidate_id', Auth::guard('candidate')->user()->id)->first();
        $application = Applicant::paginate(3);
        return Inertia::render('Profile',compact('candidate','canDetails','application'));

    }
    public function editProfile(){
        $candidate = Auth::guard('candidate')->user();
        $canDetails = CandidateDetails::all()->where('candidate_id', Auth::guard('candidate')->user()->id)->first();
        return Inertia::render('EditProfile',compact('candidate','canDetails'));
    } 
    
    public function updateProfile(Request $request){
        dd($request->all());
        $request->validate([
            'name' => 'string|max:255|nullable',
            'email' => 'email|max:255|nullable',
            'old_password' => 'string|min:6|nullable', 
            'new_password' => 'string|min:6|nullable',
            'password_confirmation' => 'same:new_password|min:6|nullable',
        ]);               
        
        $candidate = Candidate::findOrFail(Auth::guard('candidate')->user()->id);
        
        if ($request->filled('old_password')) {
            if (!Hash::check($request->old_password, Auth::guard('candidate')->user()->password)) {
                return redirect()->back()->withErrors(['old_password' => 'Incorrect old password']);
            }
        }
        $candidate->update([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->filled('new_password') ? Hash::make($request->new_password) : $candidate->password,
        ]);

        
        $request->validate([
            'photo' => 'nullable|mimes:jpg,jpeg,png'
        ]);
        $details = [
            'contact' => $request->contact,
            'bio' => $request->bio,
            'address' => $request->address,
            'candidate_id' => $request->candidate_id,
        ];
        if ($request->hasFile('profile')) {
            $profile = time() . '.' . $request->file('profile')->extension();
            $details['image'] = $profile;
            $request->file('profile')->move('uploads', $profile);
        }
        $candidateDetails = CandidateDetails::where('candidate_id', Auth::guard('candidate')->user()->id)->first();

        if (!$candidateDetails) {
            CandidateDetails::create($details);
        } else {
            $candidateDetails->update($details);
        }
        return redirect()->route('candidate_profile')->with('msg', 'Profile successfully updated');
    }


}
