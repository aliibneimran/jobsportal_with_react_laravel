import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import JobList from '@/Components/JobList'
import React from 'react'

export default function Job() {
  return (
    <>
       <Header></Header>
        <main className="main mt-80">
        <section className="section-box-2">
            <div className="container">
            <div className="banner-hero banner-single banner-single-bg">
                <div className="block-banner text-center">
                <h3 className="wow animate__animated animate__fadeInUp"><span className="color-brand-2"> $totalJobs  Jobs</span> Available Now</h3>
                <div className="font-sm color-text-paragraph-2 mt-10 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, <br className="d-none d-xl-block" />atque delectus molestias quis?</div>
                <div className="form-find text-start mt-40 wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                    <form>
                    <div className="box-industry">
                        <select className="form-input mr-10 select-active input-industry" name="industry">
                        <option value={0}>Industry</option>
                        {/* @foreach($industries as $item)
                        <option value="{{$item->id}}" {{old('industry')="=$item-">id?'selected':''&gt;$item-&gt;name</option>
                        @endforeach */}
                        </select>
                    </div>
                    <select className="form-input mr-10 select-active">
                        <option value>Location</option>
                        {/* @foreach($locations as $item)
                        <option value="{{$item->id}}" {{old('location')="=$item-">id?'selected':''&gt;$item-&gt;name</option>
                        @endforeach */}
                    </select>
                    <input className="form-input input-keysearch mr-10" type="text" placeholder="Your keyword... " />
                    <button className="btn btn-default btn-find font-sm">Search</button>
                    </form>
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
