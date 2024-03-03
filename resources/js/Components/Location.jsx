import { usePage } from '@inertiajs/react'
import React from 'react'

export default function Location() {
    const{locations} = usePage().props

  return (
    <>
        <section className="section-box mt-50">
                <div className="container">
                <div className="text-start">
                    <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Jobs by Location</h2>
                    <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Find your favourite jobs and get the benefits of yourself</p>
                </div>
                <div className="container">
                    <div className="row mt-50">
                    {locations.map(({ id,name,}) => (
                    <div className="col-xl-3 col-lg-3 col-md-5 col-sm-12 col-12">
                        <div className="card-image-top hover-up"><a href="jobs-grid.html">
                            <div className="image" style={{backgroundImage: 'url(frontend/imgs/page/homepage1/location1.png)'}}></div></a>
                        <div className="informations"><a href="jobs-grid.html">
                            <h5>{name}</h5></a>
                            <div className="row">
                            <div className="col-lg-6 col-6"><span className="text-14 color-text-paragraph-2">5 Vacancy</span></div>
                            <div className="col-lg-6 col-6 text-end"><span className="color-text-paragraph-2 text-14">120 companies</span></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    ))}
                    </div>
                </div>
                </div>
            </section>
    </>
  )
}
