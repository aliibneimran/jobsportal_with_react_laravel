import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import HomeJob from '@/Components/HomeJob'
import Search from '@/Components/Search'
import React from 'react'

export default function Home() {
  return (
    <>
        <Header></Header>
        <main className="main mt-80">
            <section className="section-box">
                <div className="banner-hero hero-2">
                <div className="banner-inner">
                    <div className="block-banner">
                    <h1 className="text-42 color-white wow animate__animated animate__fadeInUp">The #1 <span className="color-green">Job Board for</span><br className="d-none d-lg-block" />Hiring or Find your next job</h1>
                    <div className="font-lg font-regular color-white mt-20 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">Each month, more than 3 million job seekers turn to website in their search for work, making over 140,000 applications every single day</div>
                    <div className="form-find mt-40 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                        <Search></Search>
                    </div>
                    <div className="list-tags-banner mt-20 wow animate__animated animate__fadeInUp" data-wow-delay=".3s"><strong>Popular Searches:</strong><a href="#">Designer</a>, <a href="#">Web</a>, <a href="#">IOS</a>, <a href="#">Developer</a>, <a href="#">PHP</a>, <a href="#">Senior</a>, <a href="#">Engineer</a></div>
                    </div>
                    <div className="mt-60">
                    <div className="row">
                        <div className="col-lg-3 col-sm-3 col-6 text-center mb-20">
                        <div className="d-inline-block text-start">
                            <h4 className="color-white"> <span className="count">265</span><span> K+</span></h4>
                            <p className="font-sm color-text-mutted">Daily Jobs Posted</p>
                        </div>
                        </div>
                        <div className="col-lg-3 col-sm-3 col-6 text-center mb-20">
                        <div className="d-inline-block text-start">
                            <h4 className="color-white"><span className="count">17</span><span>  K+</span></h4>
                            <p className="font-sm color-text-mutted">Recruiters</p>
                        </div>
                        </div>
                        <div className="col-lg-3 col-sm-3 col-6 text-center mb-20">
                        <div className="d-inline-block text-start">
                            <h4 className="color-white"> <span className="count">15</span><span>  K+</span></h4>
                            <p className="font-sm color-text-mutted">Freelancers</p>
                        </div>
                        </div>
                        <div className="col-lg-3 col-sm-3 col-6 text-center mb-20">
                        <div className="d-inline-block text-start">
                            <h4 className="color-white"> <span className="count">28</span><span> K+</span></h4>
                            <p className="font-sm color-text-mutted">Blog Tips</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="container">
                <div className="list-brands mt-40 mb-30">
                    <div className="box-swiper">
                    <div className="swiper-container swiper-group-9 swiper">
                        <div className="swiper-wrapper">
                        <div className="swiper-slide"><a href="#"><img src="frontend/imgs/slider/logo/microsoft.svg" alt="jobBox" /></a></div>
                        <div className="swiper-slide"><a href="#"><img src="frontend/imgs/slider/logo/sony.svg" alt="jobBox" /></a></div>
                        <div className="swiper-slide"><a href="#"><img src="frontend/imgs/slider/logo/acer.svg" alt="jobBox" /></a></div>
                        <div className="swiper-slide"><a href="#"><img src="frontend/imgs/slider/logo/nokia.svg" alt="jobBox" /></a></div>
                        <div className="swiper-slide"><a href="#"><img src="frontend/imgs/slider/logo/assus.svg" alt="jobBox" /></a></div>
                        <div className="swiper-slide"><a href="#"><img src="frontend/imgs/slider/logo/casio.svg" alt="jobBox" /></a></div>
                        <div className="swiper-slide"><a href="#"><img src="frontend/imgs/slider/logo/dell.svg" alt="jobBox" /></a></div>
                        <div className="swiper-slide"><a href="#"><img src="frontend/imgs/slider/logo/panasonic.svg" alt="jobBox" /></a></div>
                        <div className="swiper-slide"><a href="#"><img src="frontend/imgs/slider/logo/vaio.svg" alt="jobBox" /></a></div>
                        <div className="swiper-slide"><a href="#"><img src="frontend/imgs/slider/logo/sharp.svg" alt="jobBox" /></a></div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <HomeJob></HomeJob>
            <section className="section-box mt-50">
                <div className="section-box wow animate__animated animate__fadeIn">
                <div className="container">
                    <div className="text-start">
                    <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Popular category</h2>
                    <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Search and connect with the right candidates faster.</p>
                    </div>
                    <div className="box-swiper mt-50">
                    <div className="swiper-container swiper-group-6 mh-none swiper">
                        <div className="swiper-wrapper pb-70 pt-5">
                        <div className="swiper-slide hover-up">
                            <div className="card-grid-5 card-category hover-up" style={{backgroundImage: 'url("frontend/imgs/page/homepage2/img-big1.png")'}}><a href="jobs-grid.html">
                                <div className="box-cover-img">
                                <div className="content-bottom">
                                    <h6 className="color-white mb-5">Marketing &amp; Sales</h6>
                                    <p className="color-white font-xs"><span>123</span><span>  Jobs Available</span></p>
                                </div>
                                </div></a></div>
                        </div>
                        <div className="swiper-slide hover-up">
                            <div className="card-grid-5 card-category hover-up" style={{backgroundImage: 'url("frontend/imgs/page/homepage2/img-big2.png")'}}><a href="jobs-grid.html">
                                <div className="box-cover-img">
                                <div className="content-bottom">
                                    <h6 className="color-white mb-5">Human resource</h6>
                                    <p className="color-white font-xs"><span>154</span><span>  Jobs Available</span></p>
                                </div>
                                </div></a></div>
                        </div>
                        <div className="swiper-slide hover-up">
                            <div className="card-grid-5 card-category hover-up" style={{backgroundImage: 'url("frontend/imgs/page/homepage2/img-big3.png")'}}><a href="jobs-grid.html">
                                <div className="box-cover-img">
                                <div className="content-bottom">
                                    <h6 className="color-white mb-5">Finance</h6>
                                    <p className="color-white font-xs"><span>546</span><span>  Jobs Available</span></p>
                                </div>
                                </div></a></div>
                        </div>
                        <div className="swiper-slide hover-up">
                            <div className="card-grid-5 card-category hover-up" style={{backgroundImage: 'url("frontend/imgs/page/homepage2/img-big1.png")'}}><a href="jobs-grid.html">
                                <div className="box-cover-img">
                                <div className="content-bottom">
                                    <h6 className="color-white mb-5">Market Research</h6>
                                    <p className="color-white font-xs"><span>24</span><span>  Jobs Available</span></p>
                                </div>
                                </div></a></div>
                        </div>
                        <div className="swiper-slide hover-up">
                            <div className="card-grid-5 card-category hover-up" style={{backgroundImage: 'url("frontend/imgs/page/homepage2/img-big2.png")'}}><a href="jobs-grid.html">
                                <div className="box-cover-img">
                                <div className="content-bottom">
                                    <h6 className="color-white mb-5">Furniture design</h6>
                                    <p className="color-white font-xs"><span>54</span><span>  Jobs Available</span></p>
                                </div>
                                </div></a></div>
                        </div>
                        <div className="swiper-slide hover-up">
                            <div className="card-grid-5 card-category hover-up" style={{backgroundImage: 'url("frontend/imgs/page/homepage2/img-big3.png")'}}><a href="jobs-grid.html">
                                <div className="box-cover-img">
                                <div className="content-bottom">
                                    <h6 className="color-white mb-5">Content writer</h6>
                                    <p className="color-white font-xs"><span>87</span><span>  Jobs Available</span></p>
                                </div>
                                </div></a></div>
                        </div>
                        </div>
                    </div>
                    <div className="swiper-button-next swiper-button-next-1" />
                    <div className="swiper-button-prev swiper-button-prev-1" />
                    </div>
                </div>
                </div>
            </section>
            <section className="section-box mt-50">
                <div className="container">
                <div className="text-start">
                    <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Jobs by Location</h2>
                    <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Find your favourite jobs and get the benefits of yourself</p>
                </div>
                <div className="container">
                    <div className="row mt-50">
                    <div className="col-xl-3 col-lg-3 col-md-5 col-sm-12 col-12">
                        <div className="card-image-top hover-up"><a href="jobs-grid.html">
                            <div className="image" style={{backgroundImage: 'url(frontend/imgs/page/homepage1/location1.png)'}}><span className="lbl-hot">Hot</span></div></a>
                        <div className="informations"><a href="jobs-grid.html">
                            <h5>Paris, France</h5></a>
                            <div className="row">
                            <div className="col-lg-6 col-6"><span className="text-14 color-text-paragraph-2">5 Vacancy</span></div>
                            <div className="col-lg-6 col-6 text-end"><span className="color-text-paragraph-2 text-14">120 companies</span></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-7 col-sm-12 col-12">
                        <div className="card-image-top hover-up"><a href="jobs-grid.html">
                            <div className="image" style={{backgroundImage: 'url(frontend/imgs/page/homepage1/location2.png)'}}><span className="lbl-hot">Trending</span></div></a>
                        <div className="informations"><a href="jobs-grid.html">
                            <h5>London, England</h5></a>
                            <div className="row">
                            <div className="col-lg-6 col-6"><span className="text-14 color-text-paragraph-2">7 Vacancy</span></div>
                            <div className="col-lg-6 col-6 text-end"><span className="color-text-paragraph-2 text-14">68 companies</span></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-7 col-sm-12 col-12">
                        <div className="card-image-top hover-up"><a href="jobs-grid.html">
                            <div className="image" style={{backgroundImage: 'url(frontend/imgs/page/homepage1/location3.png)'}}><span className="lbl-hot">Hot</span></div></a>
                        <div className="informations"><a href="jobs-grid.html">
                            <h5>New York, USA</h5></a>
                            <div className="row">
                            <div className="col-lg-6 col-6"><span className="text-14 color-text-paragraph-2">9 Vacancy</span></div>
                            <div className="col-lg-6 col-6 text-end"><span className="color-text-paragraph-2 text-14">80 companies</span></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 col-12">
                        <div className="card-image-top hover-up"><a href="jobs-grid.html">
                            <div className="image" style={{backgroundImage: 'url(frontend/imgs/page/homepage1/location4.png)'}} /></a>
                        <div className="informations"><a href="jobs-grid.html">
                            <h5>Amsterdam, Holland</h5></a>
                            <div className="row">
                            <div className="col-lg-6 col-6"><span className="text-14 color-text-paragraph-2">16 Vacancy</span></div>
                            <div className="col-lg-6 col-6 text-end"><span className="color-text-paragraph-2 text-14">86 companies</span></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-7 col-sm-12 col-12">
                        <div className="card-image-top hover-up"><a href="jobs-grid.html">
                            <div className="image" style={{backgroundImage: 'url(frontend/imgs/page/homepage1/location5.png)'}} /></a>
                        <div className="informations"><a href="jobs-grid.html">
                            <h5>Copenhagen, Denmark</h5></a>
                            <div className="row">
                            <div className="col-lg-6 col-6"><span className="text-14 color-text-paragraph-2">39 Vacancy</span></div>
                            <div className="col-lg-6 col-6 text-end"><span className="color-text-paragraph-2 text-14">186 companies</span></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-5 col-sm-12 col-12">
                        <div className="card-image-top hover-up"><a href="jobs-grid.html">
                            <div className="image" style={{backgroundImage: 'url(frontend/imgs/page/homepage1/location6.png)'}} /></a>
                        <div className="informations"><a href="jobs-grid.html">
                            <h5>Berlin, Germany</h5></a>
                            <div className="row">
                            <div className="col-lg-6 col-6"><span className="text-14 color-text-paragraph-2">15 Vacancy</span></div>
                            <div className="col-lg-6 col-6 text-end"><span className="color-text-paragraph-2 text-14">632 companies</span></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section className="section-box overflow-visible mt-50 mb-50">
                <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="text-center">
                        <h1 className="color-brand-2"><span className="count">25</span><span> K+</span></h1>
                        <h5>Completed Cases</h5>
                        <p className="font-sm color-text-paragraph mt-10">We always provide people a <br className="d-none d-lg-block" />complete solution upon focused of<br className="d-none d-lg-block" /> any business</p>
                    </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="text-center">
                        <h1 className="color-brand-2"><span className="count">17</span><span> +</span></h1>
                        <h5>Our Office</h5>
                        <p className="font-sm color-text-paragraph mt-10">We always provide people a <br className="d-none d-lg-block" />complete solution upon focused of <br className="d-none d-lg-block" />any business</p>
                    </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="text-center">
                        <h1 className="color-brand-2"><span className="count">86</span><span> +</span></h1>
                        <h5>Skilled People</h5>
                        <p className="font-sm color-text-paragraph mt-10">We always provide people a <br className="d-none d-lg-block" />complete solution upon focused of <br className="d-none d-lg-block" />any business</p>
                    </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="text-center">
                        <h1 className="color-brand-2"><span className="count">28</span><span> +</span></h1>
                        <h5>CHappy Clients</h5>
                        <p className="font-sm color-text-paragraph mt-10">We always provide people a <br className="d-none d-lg-block" />complete solution upon focused of <br className="d-none d-lg-block" />any business</p>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section className="section-box mt-50">
                <div className="container">
                <div className="text-start">
                    <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Top Recruiters</h2>
                    <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Discover your next career move, freelance gig, or internship</p>
                </div>
                </div>
                <div className="container">
                <div className="box-swiper mt-50">
                    <div className="swiper-container swiper-group-1 swiper-style-2 swiper">
                    <div className="swiper-wrapper pt-5">
                        <div className="swiper-slide">
                        <div className="item-5 hover-up wow animate__animated animate__fadeIn"><a href="#">
                            <div className="item-logo">
                                <div className="image-left"><img alt="jobBox" src="frontend/imgs/brands/brand-1.png" /></div>
                                <div className="text-info-right">
                                <h4>Linkedin</h4><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><span className="font-xs color-text-mutted ml-10"><span>(</span><span>68</span><span>)</span></span>
                                </div>
                                <div className="text-info-bottom mt-5"><span className="font-xs color-text-mutted icon-location">New York, US</span><span className="font-xs color-text-mutted float-end mt-5">25<span> Open Jobs</span></span></div>
                            </div></a></div>
                        <div className="item-5 hover-up wow animate__animated animate__fadeIn"><a href="#">
                            <div className="item-logo">
                                <div className="image-left"><img alt="jobBox" src="frontend/imgs/brands/brand-2.png" /></div>
                                <div className="text-info-right">
                                <h4>Adobe</h4><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><span className="font-xs color-text-mutted ml-10"><span>(</span><span>42</span><span>)</span></span>
                                </div>
                                <div className="text-info-bottom mt-5"><span className="font-xs color-text-mutted icon-location">New York, US</span><span className="font-xs color-text-mutted float-end mt-5">17<span> Open Jobs</span></span></div>
                            </div></a></div>
                        <div className="item-5 hover-up wow animate__animated animate__fadeIn"><a href="#">
                            <div className="item-logo">
                                <div className="image-left"><img alt="jobBox" src="frontend/imgs/brands/brand-3.png" /></div>
                                <div className="text-info-right">
                                <h4>Dailymotion</h4><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><span className="font-xs color-text-mutted ml-10"><span>(</span><span>46</span><span>)</span></span>
                                </div>
                                <div className="text-info-bottom mt-5"><span className="font-xs color-text-mutted icon-location">New York, US</span><span className="font-xs color-text-mutted float-end mt-5">65<span> Open Jobs</span></span></div>
                            </div></a></div>
                        <div className="item-5 hover-up wow animate__animated animate__fadeIn"><a href="#">
                            <div className="item-logo">
                                <div className="image-left"><img alt="jobBox" src="frontend/imgs/brands/brand-4.png" /></div>
                                <div className="text-info-right">
                                <h4>NewSum</h4><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><span className="font-xs color-text-mutted ml-10"><span>(</span><span>68</span><span>)</span></span>
                                </div>
                                <div className="text-info-bottom mt-5"><span className="font-xs color-text-mutted icon-location">New York, US</span><span className="font-xs color-text-mutted float-end mt-5">25<span> Open Jobs</span></span></div>
                            </div></a></div>
                        <div className="item-5 hover-up wow animate__animated animate__fadeIn"><a href="#">
                            <div className="item-logo">
                                <div className="image-left"><img alt="jobBox" src="frontend/imgs/brands/brand-5.png" /></div>
                                <div className="text-info-right">
                                <h4>PowerHome</h4><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><span className="font-xs color-text-mutted ml-10"><span>(</span><span>87</span><span>)</span></span>
                                </div>
                                <div className="text-info-bottom mt-5"><span className="font-xs color-text-mutted icon-location">New York, US</span><span className="font-xs color-text-mutted float-end mt-5">34<span> Open Jobs</span></span></div>
                            </div></a></div>
                        <div className="item-5 hover-up wow animate__animated animate__fadeIn"><a href="#">
                            <div className="item-logo">
                                <div className="image-left"><img alt="jobBox" src="frontend/imgs/brands/brand-6.png" /></div>
                                <div className="text-info-right">
                                <h4>Whop.com</h4><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><span className="font-xs color-text-mutted ml-10"><span>(</span><span>34</span><span>)</span></span>
                                </div>
                                <div className="text-info-bottom mt-5"><span className="font-xs color-text-mutted icon-location">New York, US</span><span className="font-xs color-text-mutted float-end mt-5">56<span> Open Jobs</span></span></div>
                            </div></a></div>
                        <div className="item-5 hover-up wow animate__animated animate__fadeIn"><a href="#">
                            <div className="item-logo">
                                <div className="image-left"><img alt="jobBox" src="frontend/imgs/brands/brand-7.png" /></div>
                                <div className="text-info-right">
                                <h4>Greewood</h4><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><span className="font-xs color-text-mutted ml-10"><span>(</span><span>124</span><span>)</span></span>
                                </div>
                                <div className="text-info-bottom mt-5"><span className="font-xs color-text-mutted icon-location">New York, US</span><span className="font-xs color-text-mutted float-end mt-5">78<span> Open Jobs</span></span></div>
                            </div></a></div>
                        <div className="item-5 hover-up wow animate__animated animate__fadeIn"><a href="#">
                            <div className="item-logo">
                                <div className="image-left"><img alt="jobBox" src="frontend/imgs/brands/brand-8.png" /></div>
                                <div className="text-info-right">
                                <h4>Kentucky</h4><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><span className="font-xs color-text-mutted ml-10"><span>(</span><span>54</span><span>)</span></span>
                                </div>
                                <div className="text-info-bottom mt-5"><span className="font-xs color-text-mutted icon-location">New York, US</span><span className="font-xs color-text-mutted float-end mt-5">98<span> Open Jobs</span></span></div>
                            </div></a></div>
                        <div className="item-5 hover-up wow animate__animated animate__fadeIn"><a href="#">
                            <div className="item-logo">
                                <div className="image-left"><img alt="jobBox" src="frontend/imgs/brands/brand-9.png" /></div>
                                <div className="text-info-right">
                                <h4>Qeuity</h4><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><span className="font-xs color-text-mutted ml-10"><span>(</span><span>76</span><span>)</span></span>
                                </div>
                                <div className="text-info-bottom mt-5"><span className="font-xs color-text-mutted icon-location">New York, US</span><span className="font-xs color-text-mutted float-end mt-5">90<span> Open Jobs</span></span></div>
                            </div></a></div>
                        <div className="item-5 hover-up wow animate__animated animate__fadeIn"><a href="#">
                            <div className="item-logo">
                                <div className="image-left"><img alt="jobBox" src="frontend/imgs/brands/brand-10.png" /></div>
                                <div className="text-info-right">
                                <h4>Honda</h4><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><span className="font-xs color-text-mutted ml-10"><span>(</span><span>89</span><span>)</span></span>
                                </div>
                                <div className="text-info-bottom mt-5"><span className="font-xs color-text-mutted icon-location">New York, US</span><span className="font-xs color-text-mutted float-end mt-5">34<span> Open Jobs</span></span></div>
                            </div></a></div>
                        <div className="item-5 hover-up wow animate__animated animate__fadeIn"><a href="#">
                            <div className="item-logo">
                                <div className="image-left"><img alt="jobBox" src="frontend/imgs/brands/brand-5.png" /></div>
                                <div className="text-info-right">
                                <h4>Toyota</h4><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><span className="font-xs color-text-mutted ml-10"><span>(</span><span>34</span><span>)</span></span>
                                </div>
                                <div className="text-info-bottom mt-5"><span className="font-xs color-text-mutted icon-location">New York, US</span><span className="font-xs color-text-mutted float-end mt-5">26<span> Open Jobs</span></span></div>
                            </div></a></div>
                        <div className="item-5 hover-up wow animate__animated animate__fadeIn"><a href="#">
                            <div className="item-logo">
                                <div className="image-left"><img alt="jobBox" src="frontend/imgs/brands/brand-3.png" /></div>
                                <div className="text-info-right">
                                <h4>Lexuxs</h4><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><span className="font-xs color-text-mutted ml-10"><span>(</span><span>27</span><span>)</span></span>
                                </div>
                                <div className="text-info-bottom mt-5"><span className="font-xs color-text-mutted icon-location">New York, US</span><span className="font-xs color-text-mutted float-end mt-5">54<span> Open Jobs</span></span></div>
                            </div></a></div>
                        <div className="item-5 hover-up wow animate__animated animate__fadeIn"><a href="#">
                            <div className="item-logo">
                                <div className="image-left"><img alt="jobBox" src="frontend/imgs/brands/brand-6.png" /></div>
                                <div className="text-info-right">
                                <h4>Ondo</h4><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><span className="font-xs color-text-mutted ml-10"><span>(</span><span>54</span><span>)</span></span>
                                </div>
                                <div className="text-info-bottom mt-5"><span className="font-xs color-text-mutted icon-location">New York, US</span><span className="font-xs color-text-mutted float-end mt-5">58<span> Open Jobs</span></span></div>
                            </div></a></div>
                        <div className="item-5 hover-up wow animate__animated animate__fadeIn"><a href="#">
                            <div className="item-logo">
                                <div className="image-left"><img alt="jobBox" src="frontend/imgs/brands/brand-2.png" /></div>
                                <div className="text-info-right">
                                <h4>Square</h4><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><span className="font-xs color-text-mutted ml-10"><span>(</span><span>16</span><span>)</span></span>
                                </div>
                                <div className="text-info-bottom mt-5"><span className="font-xs color-text-mutted icon-location">New York, US</span><span className="font-xs color-text-mutted float-end mt-5">37<span> Open Jobs</span></span></div>
                            </div></a></div>
                        <div className="item-5 hover-up wow animate__animated animate__fadeIn"><a href="#">
                            <div className="item-logo">
                                <div className="image-left"><img alt="jobBox" src="frontend/imgs/brands/brand-8.png" /></div>
                                <div className="text-info-right">
                                <h4>Vista</h4><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><img alt="jobBox" src="frontend/imgs/template/icons/star.svg" /><span className="font-xs color-text-mutted ml-10"><span>(</span><span>97</span><span>)</span></span>
                                </div>
                                <div className="text-info-bottom mt-5"><span className="font-xs color-text-mutted icon-location">New York, US</span><span className="font-xs color-text-mutted float-end mt-5">43<span> Open Jobs</span></span></div>
                            </div></a></div>
                        </div>
                    </div>
                    </div>
                    <div className="swiper-button-next swiper-button-next-1" />
                    <div className="swiper-button-prev swiper-button-prev-1" />
                </div>
                </div>
            </section>
            <section className="section-box mt-50">
                <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-15 mb-lg-0">
                    <div className="box-radius-8 bg-urgent hover-up">
                        <div className="image">
                        <figure><img src="frontend/imgs/page/homepage2/job-tools.png" alt="jobBox" /></figure>
                        </div>
                        <div className="text-info">
                        <h3>Job Tools Services</h3>
                        <p className="font-sm color-text-paragraph-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet rutrum quam, id faucibus erat interdum a. Curabitur eget tortor a nulla interdum semper.</p>
                        <div className="mt-15"><a className="btn btn-arrow-right" href="#">Find Out More</a></div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                    <div className="box-radius-8 bg-9 hover-up">
                        <div className="image">
                        <figure><img src="frontend/imgs/page/homepage2/planning-job.png" alt="jobBox" /></figure>
                        </div>
                        <div className="text-info">
                        <h3>Planning a Job?</h3>
                        <p className="font-sm color-text-paragraph-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet rutrum quam, id faucibus erat interdum a. Curabitur eget tortor a nulla interdum semper.</p>
                        <div className="mt-15"><a className="btn btn-arrow-right" href="#">Find Out More</a></div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section className="section-box mt-50 mb-50">
                <div className="container">
                <div className="text-start">
                    <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">News and Blog</h2>
                    <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Get the latest news, updates and tips</p>
                </div>
                </div>
                <div className="container">
                <div className="mt-50">
                    <div className="box-swiper style-nav-top">
                    <div className="swiper-container swiper-group-3 swiper">
                        <div className="swiper-wrapper pb-70 pt-5">
                        <div className="swiper-slide">
                            <div className="card-grid-3 hover-up wow animate__animated animate__fadeIn">
                            <div className="text-center card-grid-3-image"><a href="#">
                                <figure><img alt="jobBox" src="frontend/imgs/page/homepage1/img-news1.png" /></figure></a></div>
                            <div className="card-block-info">
                                <div className="tags mb-15"><a className="btn btn-tag" href="blog-grid.html">News</a></div>
                                <h5><a href="blog-details.html">21 Job Interview Tips: How To Make a Great Impression</a></h5>
                                <p className="mt-10 color-text-paragraph font-sm">Our mission is to create the world&amp;rsquo;s most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.</p>
                                <div className="card-2-bottom mt-20">
                                <div className="row">
                                    <div className="col-lg-6 col-6">
                                    <div className="d-flex"><img className="img-rounded" src="frontend/imgs/page/homepage1/user1.png" alt="jobBox" />
                                        <div className="info-right-img"><span className="font-sm font-bold color-brand-1 op-70">Sarah Harding</span><br /><span className="font-xs color-text-paragraph-2">06 September</span></div>
                                    </div>
                                    </div>
                                    <div className="col-lg-6 text-end col-6 pt-15"><span className="color-text-paragraph-2 font-xs">8 mins to read</span></div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="card-grid-3 hover-up wow animate__animated animate__fadeIn">
                            <div className="text-center card-grid-3-image"><a href="#">
                                <figure><img alt="jobBox" src="frontend/imgs/page/homepage1/img-news2.png" /></figure></a></div>
                            <div className="card-block-info">
                                <div className="tags mb-15"><a className="btn btn-tag" href="blog-grid.html">Events</a></div>
                                <h5><a href="blog-details.html">39 Strengths and Weaknesses To Discuss in a Job Interview</a></h5>
                                <p className="mt-10 color-text-paragraph font-sm">Our mission is to create the world&amp;rsquo;s most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.</p>
                                <div className="card-2-bottom mt-20">
                                <div className="row">
                                    <div className="col-lg-6 col-6">
                                    <div className="d-flex"><img className="img-rounded" src="frontend/imgs/page/homepage1/user2.png" alt="jobBox" />
                                        <div className="info-right-img"><span className="font-sm font-bold color-brand-1 op-70">Steven Jobs</span><br /><span className="font-xs color-text-paragraph-2">06 September</span></div>
                                    </div>
                                    </div>
                                    <div className="col-lg-6 text-end col-6 pt-15"><span className="color-text-paragraph-2 font-xs">6 mins to read</span></div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="card-grid-3 hover-up wow animate__animated animate__fadeIn">
                            <div className="text-center card-grid-3-image"><a href="#">
                                <figure><img alt="jobBox" src="frontend/imgs/page/homepage1/img-news3.png" /></figure></a></div>
                            <div className="card-block-info">
                                <div className="tags mb-15"><a className="btn btn-tag" href="blog-grid.html">News</a></div>
                                <h5><a href="blog-details.html">Interview Question: Why Dont You Have a Degree?</a></h5>
                                <p className="mt-10 color-text-paragraph font-sm">Learn how to respond if an interviewer asks you why you dont have a degree, and read example answers that can help you craft</p>
                                <div className="card-2-bottom mt-20">
                                <div className="row">
                                    <div className="col-lg-6 col-6">
                                    <div className="d-flex"><img className="img-rounded" src="frontend/imgs/page/homepage1/user3.png" alt="jobBox" />
                                        <div className="info-right-img"><span className="font-sm font-bold color-brand-1 op-70">Wiliam Kend</span><br /><span className="font-xs color-text-paragraph-2">06 September</span></div>
                                    </div>
                                    </div>
                                    <div className="col-lg-6 text-end col-6 pt-15"><span className="color-text-paragraph-2 font-xs">9 mins to read</span></div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="swiper-button-next" />
                    <div className="swiper-button-prev" />
                    </div>
                    <div className="text-center"><a className="btn btn-brand-1 btn-icon-load mt--30 hover-up" href="blog-grid.html">Load More Posts</a></div>
                </div>
                </div>
            </section>
            <section className="section-box mt-50 mb-20">
                <div className="container">
                <div className="box-newsletter">
                    <div className="row">
                    <div className="col-xl-3 col-12 text-center d-none d-xl-block"><img src="frontend/imgs/template/newsletter-left.png" alt="joxBox" /></div>
                    <div className="col-lg-12 col-xl-6 col-12">
                        <h2 className="text-md-newsletter text-center">New Things Will Always<br /> Update Regularly</h2>
                        <div className="box-form-newsletter mt-40">
                        <form className="form-newsletter">
                            <input className="input-newsletter" type="text" defaultValue placeholder="Enter your email here" />
                            <button className="btn btn-default font-heading icon-send-letter">Subscribe</button>
                        </form>
                        </div>
                    </div>
                    <div className="col-xl-3 col-12 text-center d-none d-xl-block"><img src="frontend/imgs/template/newsletter-right.png" alt="joxBox" /></div>
                    </div>
                </div>
                </div>
            </section>
        </main>
        <Footer></Footer>
    </>
  )
}
