import { usePage } from '@inertiajs/react';
import React, { useEffect } from 'react';
import Swiper from 'swiper';
// import 'swiper/swiper.min.css';

export default function Category() {
    const{categories} = usePage().props
    useEffect(() => {
        const swiper = new Swiper('.swiper-group-6', {
          // Add your Swiper configuration options here
          slidesPerView: 1,
          navigation: {
            nextEl: '.swiper-button-next-1',
            prevEl: '.swiper-button-prev-1',
          },
        });
      }, []);
  return (
      <>
          <section className="section-box mt-50">
              <div className="section-box wow animate__animated animate__fadeIn">
                  <div className="container">
                      <div className="text-start">
                          <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">
                              Popular category
                          </h2>
                          <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
                              Search and connect with the right candidates
                              faster.
                          </p>
                      </div>
                      <div className="container">
                        <div className="row mt-50">
                        {categories.map(({ id,name,}) => (
                        <div className="col-xl-3 col-lg-3 col-md-5 col-sm-12 col-12">
                            <div className="card-image-top hover-up"><a href="jobs-grid.html">
                                <div className="image" style={{backgroundImage:'url("frontend/imgs/page/homepage2/img-big1.png")'}}></div></a>
                            <div className="informations"><a href="jobs-grid.html">
                                <h5>{name}</h5></a>
                                <div className="row">
                                <div className="col-lg-6 col-6"><span className="text-14 color-text-paragraph-2">5 Jobs Available</span></div>
                                {/* <div className="col-lg-6 col-6 text-end"><span className="color-text-paragraph-2 text-14">120 companies</span></div> */}
                                </div>
                            </div>
                            </div>
                        </div>
                        ))}
                        </div>
                        </div>
                  </div>
              </div>
          </section>
      </>
  );
}
