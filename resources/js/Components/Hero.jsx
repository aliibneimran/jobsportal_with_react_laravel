import React from 'react'
import Search from '@/Components/Search'
import { usePage } from '@inertiajs/react'

export default function Hero() {
    const{totalJobsOneMonth,total_company,total_candidate} = usePage().props

  return (
    <div>
        <section className="section-box">
                <div className="banner-hero hero-2">
                <div className="banner-inner">
                    <div className="block-banner">
                    <h1 className="text-42 color-white wow animate__animated animate__fadeInUp">The #1 <span className="color-green">Job Board for</span><br className="d-none d-lg-block" />Hiring or Find your next job</h1>
                    <div className="font-lg font-regular color-white mt-20 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">Each month, more than 3 million job seekers turn to website in their search for work, making over 140,000 applications every single day</div>
                    <div className="form-find mt-40 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                        <Search></Search>
                    </div>
                    
                    </div>
                    <div className="mt-60">
                    <div className="row">
                        <div className="col-lg-4 col-sm-3 col-6 text-center mb-20">
                        <div className="d-inline-block text-start">
                            <h4 className="color-white"> <span className="count">{totalJobsOneMonth}</span></h4>
                            <p className="font-sm color-text-mutted">Monthly Jobs Posted</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-sm-3 col-6 text-center mb-20">
                        <div className="d-inline-block text-start">
                            <h4 className="color-white"><span className="count">{total_company}</span></h4>
                            <p className="font-sm color-text-mutted">Recruiters</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-sm-3 col-6 text-center mb-20">
                        <div className="d-inline-block text-start">
                            <h4 className="color-white"> <span className="count">{total_candidate}</span></h4>
                            <p className="font-sm color-text-mutted">Freelancers</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                
            </section>
    </div>
  )
}
