import { Link, usePage } from '@inertiajs/react'
import React from 'react'
import { useState } from 'react';

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    
  return ( 
      <header className="header fixed-top bg-light p-3">
          <div className="container">
            {isLoggedIn?
              <div className="main-header">
                  <div className="header-left">
                      <div className="header-logo">
                          <Link className="d-flex" href="/">
                              <img alt="jobBox" src="../frontend/imgs/template/jobhub-logo.svg"/>
                          </Link>
                      </div>
                  </div>
                  <div className="header-nav">
                      <nav className="nav-main-menu">
                          <ul className="main-menu">
                              <li><Link className="active" href="/">Home</Link></li>
                              <li><Link href="jobs">Jobs</Link></li>
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
                    <li><Link href="/jobs">Jobs</Link></li>
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/contact">Contact Us</Link></li>
                    <li><Link href="">Blog</Link></li>
                    </ul>
                </nav>
                <div className="burger-icon burger-icon-white"><span className="burger-icon-top" /><span className="burger-icon-mid" /><span className="burger-icon-bottom" /></div>
                </div>
                <div className="header-right">
                <div className="block-signin"><Link className="btn btn-primary btn-shadow hover-up mx-2" href={ route('candidate_login_form') }>Sign in</Link><Link className="btn btn-success btn-shadow hover-up" href={route('candidate_register')}>Sign Up</Link>
                </div>
                </div>
              </div>
            }       
          </div>
      </header>
  );
}
