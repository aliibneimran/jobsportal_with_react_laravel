import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import JobList from '@/Components/JobList'
import Search from '@/Components/Search'
import { usePage } from '@inertiajs/react'
import React from 'react'

export default function Job() {
    const{jobs,categories,locations,industries,companies,comDetails,user,totalJobs} = usePage().props
  return (
    <>
       <Header></Header>
        <main className="main mt-80">
        <section className="section-box-2">
            <div className="container">
            <div className="banner-hero banner-single banner-single-bg">
                <div className="block-banner text-center">
                <h3 className="wow animate__animated animate__fadeInUp"><span className="color-brand-2"> {totalJobs}  Jobs</span> Available Now</h3>
                <div className="font-sm color-text-paragraph-2 mt-10 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, <br className="d-none d-xl-block" />atque delectus molestias quis?</div>
                <div className="form-find text-start mt-40 wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                <Search></Search>
                </div>
                </div>
            </div>
            </div>
        </section>
        <JobList></JobList>
        </main>
        <Footer></Footer> 
    </>
  )
}
