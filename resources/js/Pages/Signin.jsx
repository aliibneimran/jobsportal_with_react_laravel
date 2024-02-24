import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import { useForm, usePage } from '@inertiajs/react';
import React from 'react'
import { useEffect } from 'react';

export default function Signin(status) {
    const { candidate } = usePage().props;
    const { data,setData,errors, post} = useForm({});
    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);
    const submit = (e) => {
        e.preventDefault();

        post(route('candidate_login'));
    };
  return (
    <>
    <Header></Header>
    <main className="main">
    <section className="pt-100 login-register">
        <div className="container"> 
        <div className="row login-register-cover">
            <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
            <div className="text-center">
                <h2 className="mt-10 mb-5 text-brand-1">User Login</h2>
                <button className="btn social-login hover-up mb-20"><img src="../frontend/imgs/template/icons/icon-google.svg" alt="jobbox" /><strong>Sign in with Google</strong></button>
                <div className="divider-text-center"><span>Or continue with</span></div>
            </div>
            {/* {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>} */}
            <form className="login-register text-start mt-20" onSubmit={submit}>
                <div className="form-group">
                <label className="form-label" htmlFor="input-1">Email address *</label>
                <input className="form-control" id="input-1" type="text" required name="email"  value={data.email} onChange={(e) => setData('email', e.target.value)} /><span className="text-red-600">{errors.email}</span>
                </div>
                <div className="form-group">
                <label className="form-label" htmlFor="input-4">Password *</label>
                <input className="form-control" id="input-4" type="password" required name="password" value={data.password} onChange={(e) => setData('password', e.target.value)} /><span className="text-red-600">{errors.email}</span>
                </div>
                <div className="login_footer form-group d-flex justify-content-between">
                <label className="cb-container">
                    <input type="checkbox"  name="remember" checked={data.remember} onChange={(e) => setData('remember', e.target.checked)}/><span className="text-small">Remenber me</span><span className="checkmark" />
                </label><a className="text-muted" href="page-contact.html">Forgot Password</a>
                </div>
                <div className="form-group">
                <button className="btn btn-brand-1 hover-up w-100 bg-primary" type="submit" name="login">Login</button>
                </div>
                <div className="text-muted text-center">Don't have an Account? <a href={route('candidate_register')}>Sign up</a></div>
            </form>
            </div>
            <div className="img-1 d-none d-lg-block"><img className="shape-1" src="../frontend/imgs/page/login-register/img-4.svg" alt="JobBox" /></div>
            <div className="img-2"><img src="../frontend/imgs/page/login-register/img-3.svg" alt="JobBox" /></div>
        </div>
        </div>
    </section>
    </main>  
    <Footer></Footer>
    </>
  )
}
