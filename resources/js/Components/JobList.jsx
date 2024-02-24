import { Link, usePage } from '@inertiajs/react'
import { format } from 'date-fns';
import React from 'react'
import parse from 'html-react-parser'

export default function JobList(props) {
    const{jobs,categories,locations,industries,companies,comDetails,} = usePage().props
    
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

    const withoutTag = (html) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || "";
    };
    const shortText = (text, wordCount) => {
        const words = text.split(' ');
        const description = words.slice(0, wordCount);
        return description.join(' ');
    };
    // console.log(myDate)
  return (
    <>
       <section className="section-box mt-30">
            <div className="container">
            <div className="row flex-row-reverse">
                <div className="col-lg-9 col-md-12 col-sm-12 col-12 float-right">
                <div className="content-page">
                    <div className="box-filters-job">
                        <div className="row">
                            <div className="col-xl-6 col-lg-5"><span className="text-small text-showing">Showing <strong>41-60 </strong>of <strong>944 </strong>jobs</span></div>
                            <div className="col-xl-6 col-lg-7 text-lg-end mt-sm-15">
                            <div className="display-flex2">
                                <div className="box-border mr-10"><span className="text-sortby">Show:</span>
                                <div className="dropdown dropdown-sort">
                                    <button className="btn dropdown-toggle" id="dropdownSort" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static"><span>12</span><i className="fi-rr-angle-small-down" /></button>
                                    <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownSort">
                                    <li><a className="dropdown-item active" href="#">10</a></li>
                                    <li><a className="dropdown-item" href="#">12</a></li>
                                    <li><a className="dropdown-item" href="#">20</a></li>
                                    </ul>
                                </div>
                                </div>
                                <div className="box-border"><span className="text-sortby">Sort by:</span>
                                <div className="dropdown dropdown-sort">
                                    <button className="btn dropdown-toggle" id="dropdownSort2" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static"><span>Newest Post</span><i className="fi-rr-angle-small-down" /></button>
                                    <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownSort2">
                                    <li><a className="dropdown-item active" href="#">Newest Post</a></li>
                                    <li><a className="dropdown-item" href="#">Oldest Post</a></li>
                                    <li><a className="dropdown-item" href="#">Rating Post</a></li>
                                    </ul>
                                </div>
                                </div>
                                <div className="box-view-type"><a className="view-type" href="jobs-list.html"><img src="assets/imgs/template/icons/icon-list.svg" alt="jobBox" /></a><a className="view-type" href="jobs-grid.html"><img src="assets/imgs/template/icons/icon-grid-hover.svg" alt="jobBox" /></a></div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    {jobs.map(({id, title,salary,category_id,location_id,company_id,description,created_at }) => (
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="card-grid-2 hover-up">
                        <div className="card-grid-2-image-left"><span className="flash" />
                            <div className="image-box">
                            <img src={'uploads/'+ CompanyImage(company_id)} alt="Image" width="50px" height="50px" />
                            </div>
                            <div className="right-info"><a className="name-job" href="company-details.html">{CompanyName(company_id)}</a><span className="location-small">{LocationName(location_id)}</span></div>
                        </div>
                        <div className="card-block-info">
                            <h6><Link href={'job-details/'+ id}>{title}</Link></h6> 
                            <div className="mt-5"><span className="card-briefcase">{CategoryName(category_id)}</span><span className="card-time"> {myDate(created_at)}</span></div>
                            <div className="font-sm color-text-paragraph mt-15">{parse(shortText(description,30))}</div>
                            <div className="row">
                            </div>
                            <div className="card-2-bottom mt-30">
                            <div className="col-lg-12 col-12"><span className="card-text-price">{salary} TK</span></div>
                            <div className="row">
                                <div className="col-lg-6 col-6 btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    ))}
                    </div>
                </div>
                <div className="paginations">
                   
                </div>
                </div>
                <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                <div className="sidebar-shadow none-shadow mb-30">
                    <div className="sidebar-filters">
                    <div className="filter-block head-border mb-30">
                        <h5>Advance Filter <a className="link-reset" href="#">Reset</a></h5>
                    </div>
                    <div className="filter-block mb-30">
                        <div className="form-group select-style select-style-icon">
                        <select className="form-control form-icons select-active">
                            <option>New York, US</option>
                            <option>London</option>
                            <option>Paris</option>
                            <option>Berlin</option>
                        </select><i className="fi-rr-marker" />
                        </div>
                    </div>
                    <div className="filter-block mb-20">
                        <h5 className="medium-heading mb-15">Industry</h5>
                        <div className="form-group">
                        <ul className="list-checkbox">
                            <li>
                            <label className="cb-container">
                                <input type="checkbox" defaultChecked="checked" /><span className="text-small">All</span><span className="checkmark" />
                            </label><span className="number-item">180</span>
                            </li>
                            <li>
                            <label className="cb-container">
                                <input type="checkbox" /><span className="text-small">Software</span><span className="checkmark" />
                            </label><span className="number-item">12</span>
                            </li>
                            <li>
                            <label className="cb-container">
                                <input type="checkbox" /><span className="text-small">Finance</span><span className="checkmark" />
                            </label><span className="number-item">23</span>
                            </li>
                            <li>
                            <label className="cb-container">
                                <input type="checkbox" /><span className="text-small">Recruting</span><span className="checkmark" />
                            </label><span className="number-item">43</span>
                            </li>
                            <li>
                            <label className="cb-container">
                                <input type="checkbox" /><span className="text-small">Management</span><span className="checkmark" />
                            </label><span className="number-item">65</span>
                            </li>
                            <li>
                            <label className="cb-container">
                                <input type="checkbox" /><span className="text-small">Advertising</span><span className="checkmark" />
                            </label><span className="number-item">76</span>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="filter-block mb-20">
                        <h5 className="medium-heading mb-25">Salary Range</h5>
                        <div className="list-checkbox pb-20">
                        <div className="row position-relative mt-10 mb-20">
                            <div className="col-sm-12 box-slider-range">
                            <div id="slider-range" />
                            </div>
                            <div className="box-input-money">
                            <input className="input-disabled form-control min-value-money" type="text" name="min-value-money" disabled="disabled" defaultValue />
                            <input className="form-control min-value" type="hidden" name="min-value" defaultValue />
                            </div>
                        </div>
                        <div className="box-number-money">
                            <div className="row mt-30">
                            <div className="col-sm-6 col-6"><span className="font-sm color-brand-1">$0</span></div>
                            <div className="col-sm-6 col-6 text-end"><span className="font-sm color-brand-1">$500</span></div>
                            </div>
                        </div>
                        </div>
                        <div className="form-group mb-20">
                        <ul className="list-checkbox">
                            <li>
                            <label className="cb-container">
                                <input type="checkbox" defaultChecked="checked" /><span className="text-small">All</span><span className="checkmark" />
                            </label><span className="number-item">145</span>
                            </li>
                            <li>
                            <label className="cb-container">
                                <input type="checkbox" /><span className="text-small">$0k - $20k</span><span className="checkmark" />
                            </label><span className="number-item">56</span>
                            </li>
                            <li>
                            <label className="cb-container">
                                <input type="checkbox" /><span className="text-small">$20k - $40k</span><span className="checkmark" />
                            </label><span className="number-item">37</span>
                            </li>
                            <li>
                            <label className="cb-container">
                                <input type="checkbox" /><span className="text-small">$40k - $60k</span><span className="checkmark" />
                            </label><span className="number-item">75</span>
                            </li>
                            <li>
                            <label className="cb-container">
                                <input type="checkbox" /><span className="text-small">$60k - $80k</span><span className="checkmark" />
                            </label><span className="number-item">98</span>
                            </li>
                            <li>
                            <label className="cb-container">
                                <input type="checkbox" /><span className="text-small">$80k - $100k</span><span className="checkmark" />
                            </label><span className="number-item">14</span>
                            </li>
                            <li>
                            <label className="cb-container">
                                <input type="checkbox" /><span className="text-small">$100k - $200k</span><span className="checkmark" />
                            </label><span className="number-item">25</span>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="filter-block mb-30">
                        <h5 className="medium-heading mb-10">Popular Keyword</h5>
                        <div className="form-group">
                        <ul className="list-checkbox">
                            <li>
                            <label className="cb-container">
                                <input type="checkbox" defaultChecked="checked" /><span className="text-small">Software</span><span className="checkmark" />
                            </label><span className="number-item">24</span>
                            </li>
                            <li>
                            <label className="cb-container">
                                <input type="checkbox" /><span className="text-small">Developer</span><span className="checkmark" />
                            </label><span className="number-item">45</span>
                            </li>
                            <li>
                            <label className="cb-container">
                                <input type="checkbox" /><span className="text-small">Web</span><span className="checkmark" />
                            </label><span className="number-item">57</span>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="filter-block mb-30">
                        <h5 className="medium-heading mb-10">Position</h5>
                        <div className="form-group">
                        <ul className="list-checkbox">
                            <li>
                            <label className="cb-container">
                                <input type="checkbox" /><span className="text-small">Senior</span><span className="checkmark" />
                            </label><span className="number-item">12</span>
                            </li>
                            <li>
                            <label className="cb-container">
                                <input type="checkbox" defaultChecked="checked" /><span className="text-small">Junior</span><span className="checkmark" />
                            </label><span className="number-item">35</span>
                            </li>
                            <li>
                            <label className="cb-container">
                                <input type="checkbox" /><span className="text-small">Fresher</span><span className="checkmark" />
                            </label><span className="number-item">56</span>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="filter-block mb-30">
                        <h5 className="medium-heading mb-10">Experience Level</h5>
                        <div className="form-group">
                        <ul className="list-checkbox">
                            <li>
                            <label className="cb-container">
                                <input type="checkbox" /><span className="text-small">Internship</span><span className="checkmark" />
                            </label><span className="number-item">56</span>
                            </li>
                            <li>
                            <label className="cb-container">
                                <input type="checkbox" /><span className="text-small">Entry Level</span><span className="checkmark" />
                            </label><span className="number-item">87</span>
                            </li>
                            <li>
                            <label className="cb-container">
                                <input type="checkbox" defaultChecked="checked" /><span className="text-small">Associate</span><span className="checkmark" />
                            </label><span className="number-item">24</span>
                            </li>
                            <li>
                            <label className="cb-container">
                                <input type="checkbox" /><span className="text-small">Mid Level</span><span className="checkmark" />
                            </label><span className="number-item">45</span>
                            </li>
                            <li>
                            <label className="cb-container">
                                <input type="checkbox" /><span className="text-small">Director</span><span className="checkmark" />
                            </label><span className="number-item">76</span>
                            </li>
                            <li>
                            <label className="cb-container">
                                <input type="checkbox" /><span className="text-small">Executive</span><span className="checkmark" />
                            </label><span className="number-item">89</span>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="filter-block mb-30">
                        <h5 className="medium-heading mb-10">Onsite/Remote</h5>
                        <div className="form-group">
                        <ul className="list-checkbox">
                            <li>
                            <label className="cb-container">
                                <input type="checkbox" /><span className="text-small">On-site</span><span className="checkmark" />
                            </label><span className="number-item">12</span>
                            </li>
                            <li>
                            <label className="cb-container">
                                <input type="checkbox" defaultChecked="checked" /><span className="text-small">Remote</span><span className="checkmark" />
                            </label><span className="number-item">65</span>
                            </li>
                            <li>
                            <label className="cb-container">
                                <input type="checkbox" /><span className="text-small">Hybrid</span><span className="checkmark" />
                            </label><span className="number-item">58</span>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="filter-block mb-30">
                        <h5 className="medium-heading mb-10">Job Posted</h5>
                        <div className="form-group">
                        <ul className="list-checkbox">
                            <li>
                            <label className="cb-container">
                                <input type="checkbox" defaultChecked="checked" /><span className="text-small">All</span><span className="checkmark" />
                            </label><span className="number-item">78</span>
                            </li>
                            <li>
                            <label className="cb-container">
                                <input type="checkbox" /><span className="text-small">1 day</span><span className="checkmark" />
                            </label><span className="number-item">65</span>
                            </li>
                            <li>
                            <label className="cb-container">
                                <input type="checkbox" /><span className="text-small">7 days</span><span className="checkmark" />
                            </label><span className="number-item">24</span>
                            </li>
                            <li>
                            <label className="cb-container">
                                <input type="checkbox" /><span className="text-small">30 days</span><span className="checkmark" />
                            </label><span className="number-item">56</span>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="filter-block mb-20">
                        <h5 className="medium-heading mb-15">Job type</h5>
                        <div className="form-group">
                        <ul className="list-checkbox">
                            <li>
                            <label className="cb-container">
                                <input type="checkbox" /><span className="text-small">Full Time</span><span className="checkmark" />
                            </label><span className="number-item">25</span>
                            </li>
                            <li>
                            <label className="cb-container">
                                <input type="checkbox" defaultChecked="checked" /><span className="text-small">Part Time</span><span className="checkmark" />
                            </label><span className="number-item">64</span>
                            </li>
                            <li>
                            <label className="cb-container">
                                <input type="checkbox" /><span className="text-small">Remote Jobs</span><span className="checkmark" />
                            </label><span className="number-item">78</span>
                            </li>
                            <li>
                            <label className="cb-container">
                                <input type="checkbox" /><span className="text-small">Freelancer</span><span className="checkmark" />
                            </label><span className="number-item">97</span>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>  
    </>
  )
}
