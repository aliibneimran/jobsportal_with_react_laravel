import { usePage } from '@inertiajs/react'
import React from 'react'

export default function Company() {
    const{companies,comDetails,totalJobs} = usePage().props
    const CompanyName = (id) => {
        const company = companies.find(com => com.id === id);
        return company ? company.name : 'Unknown Company';
    };
    const Jobs = (id) => {
        const company = companies.find(com => com.id === id);
        return company ? company.name : 'Unknown Company';
    };
    // console.log(totalJobs)
  return (
    <div>
        <section className="section-box mt-50">
                <div className="container">
                <div className="text-start">
                    <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Top Recruiters</h2>
                    <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Discover your next career move, freelance gig, or internship</p>
                </div>
                </div>
                <div className="container">
                <div className="row mt-50">
                    {comDetails.map(({ company_id,image,address}) => (
                    <div className="col-xl-3 col-lg-3 col-md-5 col-sm-12 col-12">
                        <div className="card-image-top hover-up" >
                            <div className="image"><img alt="jobBox" src={'uploads/'+ image}/></div>
                        <div className="informations">
                            <a href="jobs-grid.html">
                            <h5 className='text-center fw-bold mb-4'>{CompanyName(company_id)}</h5></a>
                            <div className="row">
                            <div className="col-lg-6 col-6"><span className="text-14 color-text-paragraph-2">{address}</span></div>
                            <div className="col-lg-6 col-6 text-end">
                                <span className="color-text-paragraph-2 text-14">120 Vacancy</span></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            </section>
    </div>
  )
}
