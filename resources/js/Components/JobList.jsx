import { Link, usePage } from '@inertiajs/react'
import { format } from 'date-fns';
import React from 'react'
import parse from 'html-react-parser'
// import ReactPaginate from 'react-paginate';
import { Pagination } from 'flowbite-react';
import { useState } from 'react';
import AdSearch from './AdSearch';


export default function JobList(props) {
    const{jobs,categories,locations,industries,companies,comDetails,user} = usePage().props

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const totalPages = Math.ceil(jobs.length / itemsPerPage);
    const onPageChange = (page) => setCurrentPage(page);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const job = jobs.slice(startIndex, endIndex);
    
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
                    
                    <div className="row">
                    {job.map(({id, title,salary,category_id,location_id,company_id,description,created_at }) => (
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="card-grid-2 hover-up">
                        <div className="card-grid-2-image-left"><span className="flash" />
                            <div className="image-box">
                            <img src={'uploads/'+ CompanyImage(company_id)} alt="Image" width="50px" height="50px" />
                            </div>
                            <div className="right-info"><a className="name-job" href="company-details.html">{CompanyName(company_id)}</a><span className="location-small">{LocationName(location_id)}</span></div>
                        </div>
                        <div className="card-block-info">
                            {user?
                                <h6><Link href={route('job.details',id)}>{title}</Link></h6>
                            : 
                                <h6><Link href={'job-details/'+ id}>{title}</Link></h6>
                            }
                            <div className="mt-5"><span className="card-briefcase">{CategoryName(category_id)}</span><span className="card-time"> {myDate(created_at)}</span></div>
                            <div className="font-sm color-text-paragraph mt-15">{parse(shortText(description,30))}</div>
                            <div className="row">
                            </div>
                            <div className="card-2-bottom mt-30">
                            <div className="col-lg-12 col-12"><span className="card-text-price">{salary} TK/ Month</span></div>
                           
                            </div>
                        </div>
                        </div>
                    </div>
                    ))}
                    </div>
                </div>
                <div className="paginations">
                
                    <div className="flex overflow-x-auto sm:justify-center">
                    <Pagination layout="table" currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} showIcons />
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                <AdSearch></AdSearch>
                </div>
            </div>
            </div>
        </section>  
    </>
  )
}
