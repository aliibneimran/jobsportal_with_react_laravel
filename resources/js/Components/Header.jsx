import { Link, usePage } from '@inertiajs/react'
import React from 'react'

export default function Header(props) {
    const { user } = usePage().props;
    // console.log(user); 
    
  return (
    <>
    <header className="header fixed-top bg-light p-3">
            <div className="container">
                {user?
                <div className="main-header">
                    <div className="header-left">
                        <div className="header-logo">
                            <Link className="d-flex" href="/">
                                <img alt="jobBox" src="../../../frontend/imgs/template/jobhub-logo.svg"/>
                            </Link>
                        </div>
                        
                    </div>
                    <div className="header-nav">
                        <nav className="nav-main-menu">
                            <ul className="main-menu">
                                <li><Link className="active" href="/">Home</Link></li>
                                <li><Link href={route('jobs')}>Jobs</Link></li>
                                <li><Link href="about">About Us</Link></li>
                                <li><Link href="contact">Contact Us</Link></li>
                                <li><Link href="profile">Profile</Link></li>
                            </ul>
                        </nav>
                        <div className="burger-icon burger-icon-white">
                            <span className="burger-icon-top" />
                            <span className="burger-icon-mid" />
                            <span className="burger-icon-bottom" />
                        </div>
                    </div>
                    <div className="header-right">
                        <div className="block-signin">
                            <Link className="btn btn-danger hover-up" href={route('candidate_logout')}>Logout</Link>
                        </div>
                    </div>
                </div>
                :
                <div className="main-header">
                    <div className="header-left">
                    <div className="header-logo"><Link className="d-flex" href="/"><img alt="jobBox" src="../frontend/imgs/template/jobhub-logo.svg" /></Link></div>
                    </div>
                    <div className="header-nav">
                        <nav className="nav-main-menu">
                            <ul className="main-menu"> 
                                <li><Link className="active" href="/">Home</Link></li>
                                <li><Link href="jobs">Jobs</Link></li>
                                <li><Link href="about">About Us</Link></li>
                                <li><Link href="contact">Contact Us</Link></li>
                                <li className="has-children"><Link href="#">For Company</Link>
                                    <ul className="sub-menu">
                                        <li><a href={route('company_login_form')}>Sign In</a></li>
                                        <li><a href={route('company_register')}>Sign Up</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                        <div class="burger-icon burger-icon-white">
                            <span class="burger-icon-top"></span>
                            <span class="burger-icon-mid"></span>
                            <span class="burger-icon-bottom"></span>
                        </div>
                    </div>
                    <div className="header-right">
                    <div className="block-signin"><Link className="btn btn-primary btn-shadow hover-up mx-2" href={route('candidate_login_form')}>Sign In</Link><Link className="btn btn-success btn-shadow hover-up" href={route('candidate_register')}>Sign Up</Link>
                    </div>
                    </div>
                </div>
                }       
            </div>
    </header>
    <div className="mobile-header-active mobile-header-wrapper-style perfect-scrollbar">
        <div className="mobile-header-wrapper-inner">
            <div className="mobile-header-content-area">
            <div className="perfect-scroll">
                <div className="mobile-search mobile-header-border mb-30">
                <form action="#">
                    <input type="text" placeholder="Search…" /><i className="fi-rr-search" />
                </form>
                </div>
                <div className="mobile-menu-wrap mobile-header-border">
                {/* mobile menu start*/}
                {user?
                <nav>
                    <ul className="mobile-menu font-heading">
                        <li><Link className="active" href="/">Home</Link></li>
                        <li><Link href={route('jobs')}>Jobs</Link></li>
                        <li><Link href="about">About Us</Link></li>
                        <li><Link href="contact">Contact Us</Link></li>
                        <li><Link href="profile">Profile</Link></li>
                        <li><Link href={route('candidate_logout')}>Logout</Link></li>
                    </ul>
                </nav>
                :
                <nav>
                    <ul className="mobile-menu font-heading">
                        <li><Link className="active" href="/">Home</Link></li>
                        <li><Link href="jobs">Jobs</Link></li>
                        <li><Link href="about">About Us</Link></li>
                        <li><Link href="contact">Contact Us</Link></li>
                        <li><Link href={route('candidate_login_form')}>Sign In</Link></li>
                        <li><Link href={route('candidate_register')}>Sign Up</Link></li>
                        <li className="has-children"><Link href="#">For Company</Link>
                            <ul className="sub-menu">
                                <li><a href={route('company_login_form')}>Sign In</a></li>
                                <li><a href={route('company_register')}>Sign Up</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                } 
                </div>
            </div>
            </div>
        </div>
    </div>

    </>
  );
}

