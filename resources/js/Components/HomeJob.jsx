import { usePage } from '@inertiajs/react';
import React from 'react'
import { format } from 'date-fns';
import parse from 'html-react-parser'

export default function HomeJob(props) {
    const{jobs,categories,locations,companies} = usePage().props
    const CategoryName = (id) => {
        const category = categories.find(cat => cat.id === id);
        return category ? category.name : 'Unknown Category';
    };
    const LocationName = (id) => {
        const location = locations.find(loc => loc.id === id);
        return location ? location.name : 'Unknown Location';
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
    const shortText = (text, wordCount) => {
        const words = text.split(' ');
        const description = words.slice(0, wordCount);
        return description.join(' ');
    };
    // console.log(jobs)
  return (
      <section className="section-box mt-30">
          <div className="container">
              <div className="text-start">
                  <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">
                      Jobs of the day
                  </h2>
                  <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
                      Search and connect with the right candidates faster.
                  </p>
                  <div className="list-tabs mt-40">
                      <ul className="nav nav-tabs" role="tablist">
                          <li>
                              <a className="active" id="nav-tab-job-1" href="#tab-job-1" data-bs-toggle="tab" role="tab" aria-controls="tab-job-1" aria-selected="true">
                                  <img src="frontend/imgs/page/homepage1/management.svg"alt="jobBox"/>Management</a>
                          </li>
                          <li>
                              <a
                                  id="nav-tab-job-2"
                                  href="#tab-job-2"
                                  data-bs-toggle="tab"
                                  role="tab" aria-controls="tab-job-2" aria-selected="false">
                                  <img src="frontend/imgs/page/homepage1/marketing.svg" alt="jobBox"/>
                                  Marketing &amp; Sale
                              </a>
                          </li>
                          <li>
                              <a id="nav-tab-job-3" href="#tab-job-3" data-bs-toggle="tab" role="tab" aria-controls="tab-job-3" aria-selected="false">
                                  <img src="frontend/imgs/page/homepage1/finance.svg"alt="jobBox"/>Finance</a>
                          </li>
                          <li>
                              <a id="nav-tab-job-4" href="#tab-job-4" data-bs-toggle="tab" role="tab" aria-controls="tab-job-4" aria-selected="false">
                                  <img src="frontend/imgs/page/homepage1/human.svg"alt="jobBox"/>Human Resource</a>
                          </li>
                          <li>
                              <a id="nav-tab-job-5" href="#tab-job-5" data-bs-toggle="tab" role="tab" aria-controls="tab-job-5" aria-selected="false">
                                  <img src="frontend/imgs/page/homepage1/retail.svg" alt="jobBox"/>Retail &amp; Products</a>
                          </li>
                          <li>
                              <a id="nav-tab-job-6" href="#tab-job-6" data-bs-toggle="tab" role="tab" aria-controls="tab-job-6" aria-selected="false">
                                  <img src="frontend/imgs/page/homepage1/content.svg" alt="jobBox"/>Content Writer</a>
                          </li>
                      </ul>
                  </div>
              </div>
              <div className="mt-50">
                  <div className="tab-content" id="myTabContent-1">
                      <div className="tab-pane fade show active" id="tab-job-1" role="tabpanel" aria-labelledby="tab-job-1">
                          <div className="row">
                            {jobs.map(({ title,salary,image,category_id,location_id,description,created_at }) => (
                              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                  <div className="card-grid-2 grid-bd-16 hover-up">
                                      <div className="card-grid-2-image">
                                          <span className="lbl-hot bg-green">
                                              <span>{CategoryName(category_id)}</span>
                                          </span>
                                          <div className="image-box">
                                              <figure>
                                                  <img src={'uploads/'+image} alt="jobBox" height="200"/>
                                              </figure>
                                          </div>
                                      </div>
                                      <div className="card-block-info">
                                          <h5><a href="job-details.html">{title}</a></h5>
                                          <div className="mt-5">
                                              <span className="card-location mr-15">{LocationName(location_id)}</span>
                                              <span className="card-time">{myDate(created_at)}</span>
                                          </div>
                                          <div className="card-2-bottom mt-20">
                                              <div className="row">
                                                  <div className="col-xl-12 col-md-12 text-lg-start">
                                                      <span className="card-text-price">{salary}</span>
                                                      <span className="text-muted">/Hour</span>
                                                  </div>
                                              </div>
                                          </div>
                                          <p className="font-sm color-text-paragraph mt-20">{parse(shortText(description, 30))}</p>
                                      </div>
                                  </div>
                              </div>
                            ))}
                          </div>
                      </div>
                      
                  </div>
              </div>
          </div>
      </section>
  );
}
// title,position,salary,vacancy,image,availability,start_date,end_date,category_id,location_id,industry_id,company_id,description