import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import { Link, useForm, usePage } from '@inertiajs/react';
import { format } from 'date-fns';
import parse from 'html-react-parser'
import React from 'react'


export default function JobDetails(props) {
    const{jobs,categories,locations,industries,companies,comDetails,application,user,candidate,token} = usePage().props
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
    //Application
    const { data,errors, setData, post} = useForm({});
   
    // console.log(application)
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
                         
                        {user? 
                          <div>
                            { application?
                            <button className="btn btn-danger mr-15">Already Applied</button> 
                            :
                            <Link className="btn btn-default mr-15" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply Now</Link>
                            }
                          </div>:''

                        }
                    </div>
                    </div>
                    <div className="border-bottom pt-10 pb-10" />
                    <div className="banner-hero banner-image-single mt-10 mb-20"><img src={'../../../uploads/' + jobs.image} alt="jobBox" height='300' /></div>
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
                        {user? 
                            <div>
                                { application?
                                    <button className="btn btn-danger mr-15">Already Applied</button> 
                                :
                                <div>
                                <Link className="btn btn-default mr-15" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply Now</Link>
                                <Link className="btn btn-border" href="#">Save Job</Link></div>
                                }
                            </div> 
                        :
                        <div>
                            <Link className="btn btn-primary btn-shadow hover-up mx-2" href={ route('candidate_login_form') }>Please Sign in First</Link>
                        </div>
                        }

                        </div>
                        <div className="col-md-6 text-lg-end social-share">
                        <h6 className="color-text-paragraph-2 d-inline-block d-baseline mr-10">Share this</h6><a className="mr-5 d-inline-block d-middle" href="#"><img alt="jobBox" src="../../../frontend/imgs/template/icons/share-fb.svg" /></a><a className="mr-5 d-inline-block d-middle" href="#"><img alt="jobBox" src="../../../frontend/imgs/template/icons/share-tw.svg" /></a><a className="mr-5 d-inline-block d-middle" href="#"><img alt="jobBox" src="../../../frontend/imgs/template/icons/share-red.svg" /></a><a className="d-inline-block d-middle" href="#"><img alt="jobBox" src="../../../frontend/imgs/template/icons/share-whatsapp.svg" /></a>
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

        <div className="modal fade" id="ModalApplyJobForm" tabIndex={-1} aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content apply-job-form">
                <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" />
                <div className="modal-body pl-30 pr-30 pt-50">
                    <div className="text-center">
                    <p className="font-sm text-brand-2">Job Application </p>
                    <h2 className="mt-10 mb-5 text-brand-1 text-capitalize">Start your career today</h2>
                    <p className="font-sm text-muted mb-30">Please fill in your information and send it to the employer. </p>
                    </div>
                   
                    {user?<form className="login-register text-start mt-20 pb-30" action={route("apply.job")} method="post" encType="multipart/form-data"> 
                        <input type="hidden" name='_token' value={token}/>
                        <input type="hidden" name="job_id"  value={jobs.id}/>
                        <input type="hidden" name="company_id" value={jobs.company_id}/>
                        <input type="hidden" name="candidate_id" value={candidate.id}/>
                    
                        <div className="form-group">
                            <label className="form-label" htmlFor="input-1">Full Name *</label>
                            <input className="form-control" type="text" name="name" value={candidate.name} onChange={(e) => setData("name", e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="input-2">Email *</label>
                            <input className="form-control" type="email" name="email" value={candidate.email} onChange={(e) => setData("email", e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="number">Contact Number *</label>
                            <input className="form-control" type="text" name="contact" value={candidate.contact} onChange={(e) => setData("contact", e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="des">Description</label>
                            <input className="form-control" type="text" name="bio" value={data.bio} onChange={(e) => setData("bio", e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="file">Upload Resume</label>
                            <input className="form-control" type="file" name="cv" onChange={(e) => setData("cv", e.target.files[0])}/>
                        </div>
                        <div className="login_footer form-group d-flex justify-content-between">
                            <label className="cb-container">
                            <input type="checkbox" /><span className="text-small">Agree our terms and policy</span><span className="checkmark" />
                            </label><a className="text-muted" href="contact">Lean more</a>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-default hover-up w-100" type="submit" name="apply">Apply Job</button>
                        </div>
                        <div className="text-muted text-center">Do you need support? <a href="contact">Contact Us</a></div>
                    
                    </form>:''}
                </div>
                </div>
            </div>
        </div>

    </main>
    <Footer></Footer>
    </>
  )
}
