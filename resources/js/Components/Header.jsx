import { Link } from '@inertiajs/react'
import React from 'react'

export default function Header() {
  return (
    <header className="header fixed-top bg-light p-3">
    <div className="container">
        <div className="main-header">
        <div className="header-left">
            <div className="header-logo"><Link className="d-flex" href="index.html"><img alt="jobBox" src="frontend/imgs/template/jobhub-logo.svg" /></Link></div>
        </div>
        <div className="header-nav">
            <nav className="nav-main-menu">
            <ul className="main-menu">
                <li><Link className="active" href="/">Home</Link>
                </li>
                <li><Link href="jobs">Jobs</Link></li>
                <li><Link href="about">About</Link></li>
                <li><Link href="contact">Contact</Link></li>
                <li ><Link href="" >Profile</Link></li>
            </ul>
            </nav>
            <div className="burger-icon burger-icon-white"><span className="burger-icon-top" /><span className="burger-icon-mid" /><span className="burger-icon-bottom" /></div>
        </div>
        <div className="header-right">
            <div className="block-signin">
                <Link className="text-link-bd-btom hover-up" href="singup">Register</Link>
                <Link className="btn btn-default btn-shadow ml-40 hover-up" href="login">Sign in</Link>
            </div>
        </div>
        </div>
    </div>
    </header>

  )
}
