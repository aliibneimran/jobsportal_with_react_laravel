import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import { useForm, usePage } from '@inertiajs/react';
import React from 'react'

export default function Signup() {
    const { candidate } = usePage().props;
    const { data,errors, setData, post} = useForm({});
      function handleSubmit(e) {
        e.preventDefault();
    
        post(route("candidate.register.create"));
      }
  return (
    <>
    <Header></Header>
    <main className="main">
        <section className="pt-100 login-register">
            <div className="container"> 
            <div className="row login-register-cover">
                <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
                <div className="text-center">
                    <h2 className="mt-10 mb-5 text-brand-1">User Registration</h2>
                    <button className="btn social-login hover-up mb-20"><img src="../frontend/imgs/template/icons/icon-google.svg" alt="jobbox" /><strong>Sign up with Google</strong></button>
                    <div className="divider-text-center"><span>Or continue with</span></div>
                </div>
                <form className="login-register text-start mt-20" onSubmit={handleSubmit}>
                    
                    <div className="form-group">
                    <label className="form-label" htmlFor="input-1">Full Name *</label>
                    <input className="form-control" id="input-1" type="text" required name="name" value={data.name} onChange={(e) => setData("name", e.target.value)}/><span className="text-red-600">{errors.name}</span>
                    </div>
                    <div className="form-group">
                    <label className="form-label" htmlFor="input-2">Email *</label>
                    <input className="form-control" id="input-2" type="email" required name="email" value={data.email} onChange={(e) => setData("email", e.target.value)}/>
                    </div>
                    <div className="form-group">
                    <label className="form-label" htmlFor="input-4">Password *</label>
                    <input className="form-control" id="input-4" type="password" required name="password" value={data.password} onChange={(e) => setData("password", e.target.value)}/>
                    </div>
                    <div className="form-group">
                    <label className="form-label" htmlFor="input-5">Re-Password *</label>
                    <input className="form-control" id="input-5" type="password" required name="password_confirmation" value={data.password_confirmation} onChange={(e) => setData("password_confirmation", e.target.value)}/>
                    </div>
                    <div className="login_footer form-group d-flex justify-content-between">
                    <label className="cb-container">
                        <input type="checkbox" /><span className="text-small">Agree our terms and policy</span><span className="checkmark" />
                    </label><a className="text-muted" href="page-contact.html">Lean more</a>
                    </div>
                    <div className="form-group">
                    <button className="btn btn-brand-1 hover-up w-100 bg-primary" type="submit" name="login">Register</button>
                    </div>
                    <div className="text-muted text-center">Already have an account? <a href={route('candidate_login_form')}>Sign in</a></div>
                </form>
                </div>
                <div className="img-1 d-none d-lg-block"><img className="shape-1" src="../frontend/imgs/page/login-register/img-1.svg" alt="JobBox" /></div>
                <div className="img-2"><img src="../frontend/imgs/page/login-register/img-2.svg" alt="JobBox" /></div>
            </div>
            </div>
        </section>
    </main>
    <Footer></Footer>
    </>
  )
}
