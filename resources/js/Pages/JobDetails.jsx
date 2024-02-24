import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import { usePage } from '@inertiajs/react';
import { format } from 'date-fns';
import parse from 'html-react-parser'
import React from 'react'

export default function JobDetails(props) {
    const{jobs,categories,locations,industries,companies,comDetails,application} = usePage().props
    const Auth = () => {};
    const CategoryName = (id) => {
        const category = categories.find(cat => cat.id === id);
        return category ? category.name : 'Unknown Category';
    };
    const LocationName = (id) => {
        const location = locations.find(loc => loc.id === id);
        return location ? location.name : 'Unknown Location';
    };
    const IndustryName = (id) => {
        const industry = industries.find(ind => ind.id === id);
        return industry ? industry.name : 'Unknown Industry';
    };
    const CompanyName = (id) => {
        const company = companies.find(com => com.id === id);
        return company ? company.name : 'Unknown Company';
    };
    const CompanyImage = (id) => {
        const company = comDetails.find(com => com.id === id);
        return company ? company.image : 'Unknown Company';
    };
    const myDate = (createdAt) => {
        const formattedDay = format(new Date(createdAt), 'dd-MM-yyyy');
        return formattedDay;
    };
    console.log(application)
  return (
    <>
    <Header></Header>
    <main className="main mt-80">
        <section className="section-box mt-50">
            <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                <div className="box-border-single">
                    <div className="row mt-10">
                    <div className="col-lg-8 col-md-12">
                        <h3>{jobs.title}</h3>
                        <div className="mt-0 mb-15"><span className="card-briefcase">{CategoryName(jobs.category_id)}</span><span className="card-time">{myDate(jobs.created_at)}</span></div>
                    </div>
                        <div className="col-lg-4 col-md-12 text-lg-end">
                        <a className="btn btn-apply-icon btn-apply btn-apply-big hover-up" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</a>
                    </div>
                    </div>
                    <div className="border-bottom pt-10 pb-10" />
                    <div className="banner-hero banner-image-single mt-10 mb-20"><img src={'../uploads/' + jobs.image} alt="jobBox" height='300' /></div>
                    <div className="job-overview">
                    <h5 className="border-bottom pb-15 mb-30">Overview</h5>
                    <div className="row">
                        <div className="col-md-6 d-flex">
                        <div className="sidebar-icon-item"><img src="../frontend/imgs/page/job-single/industry.svg" alt="jobBox" /></div>
                        <div className="sidebar-text-info ml-10"><span className="text-description industry-icon mb-10">Industry</span><strong className="small-heading">{IndustryName(jobs.industry_id)}</strong></div>
                        </div>
                        <div className="col-md-6 d-flex mt-sm-15">
                        <div className="sidebar-icon-item"><img src="../frontend/imgs/page/job-single/job-level.svg" alt="jobBox" /></div>
                        <div className="sidebar-text-info ml-10"><span className="text-description joblevel-icon mb-10">Job level</span><strong className="small-heading">{jobs.position}</strong></div>
                        </div>
                    </div>
                    <div className="row mt-25">
                        <div className="col-md-6 d-flex mt-sm-15">
                        <div className="sidebar-icon-item"><img src="../frontend/imgs/page/job-single/salary.svg" alt="jobBox" /></div>
                        <div className="sidebar-text-info ml-10"><span className="text-description salary-icon mb-10">Salary</span><strong className="small-heading">{jobs.salary}</strong></div>
                        </div>
                        <div className="col-md-6 d-flex">
                        <div className="sidebar-icon-item"><img src="../frontend/imgs/page/job-single/experience.svg" alt="jobBox" /></div>
                        <div className="sidebar-text-info ml-10"><span className="text-description experience-icon mb-10">Experience</span><strong className="small-heading">1 - 2 years</strong></div>
                        </div>
                    </div>
                    <div className="row mt-25">
                        <div className="col-md-6 d-flex mt-sm-15">
                        <div className="sidebar-icon-item"><img src="../frontend/imgs/page/job-single/job-type.svg" alt="jobBox" /></div>
                        <div className="sidebar-text-info ml-10"><span className="text-description jobtype-icon mb-10">Job type</span><strong className="small-heading">{CategoryName(jobs.category_id)}</strong></div>
                        </div>
                        <div className="col-md-6 d-flex mt-sm-15">
                        <div className="sidebar-icon-item"><img src="../frontend/imgs/page/job-single/deadline.svg" alt="jobBox" /></div>
                        <div className="sidebar-text-info ml-10"><span className="text-description mb-10">Deadline</span><strong className="small-heading">{myDate(jobs.end_date)}</strong></div>
                        </div>
                    </div>
                    <div className="row mt-25">
                        <div className="col-md-6 d-flex mt-sm-15">
                        <div className="sidebar-icon-item"><img src="../frontend/imgs/page/job-single/updated.svg" alt="jobBox" /></div>
                        <div className="sidebar-text-info ml-10"><span className="text-description jobtype-icon mb-10">Updated</span><strong className="small-heading">{myDate(jobs.updated_at)}</strong></div>
                        </div>
                        <div className="col-md-6 d-flex mt-sm-15">
                        <div className="sidebar-icon-item"><img src="../frontend/imgs/page/job-single/location.svg" alt="jobBox" /></div>
                        <div className="sidebar-text-info ml-10"><span className="text-description mb-10">Location</span><strong className="small-heading">{LocationName(jobs.category_id)}</strong></div>
                        </div>
                    </div>
                    </div>
                    <div className="content-single">
                    {parse(jobs.description)}
                    </div>
                    <div className="single-apply-jobs">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                        {/* <button style={{ visibility: Auth() ? 'visible' : 'hidden' }} className="btn btn-danger mr-15">Already Applied</button>

                        <a style={{ visibility: Auth() ? 'visible' : 'hidden' }} className="btn btn-default mr-15" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply Now</a>

                        <a style={{ visibility: Auth() ? 'visible' : 'hidden' }} className="btn btn-border" href="#">Save Job</a>

                        <a style={{ visibility: Auth() ? 'hidden' : 'visible' }} className="btn btn-primary btn-shadow hover-up mx-2" href="{{ route('candidate_login_form') }}">Please Sign in First</a> */}

                        {
                            Auth() ? <div>
                                 <button className="btn btn-danger mr-15">Already Applied</button>
                                <a className="btn btn-default mr-15" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply Now</a>

                                <a className="btn btn-border" href="#">Save Job</a>
                                </div> : <div>
                                <a className="btn btn-primary btn-shadow hover-up mx-2" href="{{ route('candidate_login_form') }}">Please Sign in First</a>
                                </div>
                        }

                        </div>
                        <div className="col-md-6 text-lg-end social-share">
                        <h6 className="color-text-paragraph-2 d-inline-block d-baseline mr-10">Share this</h6><a className="mr-5 d-inline-block d-middle" href="#"><img alt="jobBox" src="../frontend/imgs/template/icons/share-fb.svg" /></a><a className="mr-5 d-inline-block d-middle" href="#"><img alt="jobBox" src="../frontend/imgs/template/icons/share-tw.svg" /></a><a className="mr-5 d-inline-block d-middle" href="#"><img alt="jobBox" src="../frontend/imgs/template/icons/share-red.svg" /></a><a className="d-inline-block d-middle" href="#"><img alt="jobBox" src="../frontend/imgs/template/icons/share-whatsapp.svg" /></a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 col-12 pl-40 pl-lg-15 mt-lg-30">
                <div className="sidebar-border">
                    <div className="sidebar-heading">
                    <div className="avatar-sidebar">
                        <figure><img alt="jobBox" src={'../uploads/'+ CompanyImage(jobs.company_id)} /></figure>
                        <div className="sidebar-info"><span className="sidebar-company">{CompanyName(jobs.company_id)}</span><span className="card-location">New York, US</span><a className="link-underline mt-15" href="#">02 Open Jobs</a></div>
                    </div>
                    </div>
                    <div className="sidebar-list-job">
                    <div className="box-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.3150609575905!2d-87.6235655!3d41.886080899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2ca8b34afe61%3A0x6caeb5f721ca846!2s205%20N%20Michigan%20Ave%20Suit%20810%2C%20Chicago%2C%20IL%2060601%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1658551322537!5m2!1svi!2s" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                    <ul className="ul-disc">
                        <li>205 North Michigan Avenue, Suite 810 Chicago, 60601, USA</li>
                        <li>Phone: (123) 456-7890</li>
                        <li>Email: contact@Evara.com</li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        <section className="section-box mt-50 mb-20">
            <div className="container">
            <div className="box-newsletter">
                <div className="row">
                <div className="col-xl-3 col-12 text-center d-none d-xl-block"><img src="{{asset('frontend/imgs/template/newsletter-left.png')}}" alt="joxBox" /></div>
                <div className="col-lg-12 col-xl-6 col-12">
                    <h2 className="text-md-newsletter text-center">New Things Will Always<br /> Update Regularly</h2>
                    <div className="box-form-newsletter mt-40">
                    <form className="form-newsletter">
                        <input className="input-newsletter" type="text" defaultValue placeholder="Enter your email here" />
                        <button className="btn btn-default font-heading icon-send-letter">Subscribe</button>
                    </form>
                    </div>
                </div>
                <div className="col-xl-3 col-12 text-center d-none d-xl-block"><img src="{{asset('frontend/imgs/template/newsletter-right.png')}}" alt="joxBox" /></div>
                </div>
            </div>
            </div>
        </section>
    </main>
    <Footer></Footer>
    </>
  )
}
