import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import { usePage } from '@inertiajs/react'
import React from 'react'

export default function Profile(props) {
  const {candidate, canDetails,application,user } = usePage().props;
  console.log();
  return (
    <>
<Header></Header>
<main className="main mt-80">
  <section className="section-box mt-50">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-12">
          <div className="box-nav-tabs nav-tavs-profile mb-5">
            <ul className="nav" role="tablist">
              <li><a className="btn btn-border aboutus-icon mb-20 active" href="#tab-my-profile" data-bs-toggle="tab" role="tab" aria-controls="tab-my-profile" aria-selected="true">My Profile</a></li>
              <li><a className="btn btn-border recruitment-icon mb-20" href="#tab-my-jobs" data-bs-toggle="tab" role="tab" aria-controls="tab-my-jobs" aria-selected="false">My Jobs</a></li>
              <li><a className="btn btn-border people-icon mb-20" href="#tab-saved-jobs" data-bs-toggle="tab" role="tab" aria-controls="tab-saved-jobs" aria-selected="false">Saved Jobs</a></li>
            </ul>
            <div className="border-bottom pt-10 pb-10" />
            <div className="mt-20 mb-20"><a className="link-red" href="#">Delete Account</a></div>
          </div>
        </div>
        <div className="col-lg-9 col-md-8 col-sm-12 col-12 mb-50">
          <div className="content-single">
            <div className="tab-content">
              <div className="tab-pane fade show active" id="tab-my-profile" role="tabpanel" aria-labelledby="tab-my-profile">
                <h3 className="mt-0 mb-15 color-brand-1 text-center">My Account</h3>
                
                <div className="row">
                  {/* <div className='col-lg-5 col-md-5 col-sm-5'></div> */}
                  <div className="mt-35 mb-40 box-info-profie text-center">
                    <img src={'../uploads/' + canDetails.image } alt="Image" width="120px" height="120px" className="rounded-circle" />
                  </div>
                  {/* <div className='col-lg-5 col-md-5 col-sm-5'></div> */}
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="lastName">Name</label>
                      <input type="text" value={candidate.name} className="form-control aria-disabled" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="lastName">Email</label>
                      <input type="text" value={candidate.email} className="form-control aria-disabled" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="lastName">Contact</label>
                      <input type="text" value={canDetails.contact} className="form-control aria-disabled"/>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="lastName">Address</label>
                      <input type="text" value={canDetails.address} className="form-control aria-disabled" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="lastName">Bio</label>
                      <textarea className="form-control aria-disabled" value={canDetails.bio}/>
                    </div>
                  </div>
                </div>
                <div className="mt-20 text-center">
                  <a href={route('candidate.edit.profile')} className="btn btn-apply-big font-md font-bold bg-primary" type="submit">Edit Profile</a>
                </div>
              
              </div>

            {application?
              <div className="tab-pane fade" id="tab-my-jobs" role="tabpanel" aria-labelledby="tab-my-jobs">
                <h3 className="mt-0 color-brand-1 mb-50">My Jobs</h3>
                <div className="row display-list">
                {application.map(({id}) => (
                  <div className="col-xl-12 col-12">
                    <div className="card-grid-2 hover-up"><span className="flash" />
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="card-grid-2-image-left">
                            <div className="image-box"><img src="../frontend/imgs/brands/brand-5.png" alt="jobBox" /></div>
                            <div className="right-info"><a className="name-job" href>{id}company-&gt;name</a></div>
                          </div>
                        </div>
                      </div>
                      <div className="card-block-info">
                        <h4><a href="{{route('job.details',$item->id)}}">$item-&gt;job-&gt;title</a></h4>
                        <div className="mt-5"><span className="card-briefcase">$item-&gt;job-&gt;category-&gt;name</span><span className="card-time"><span>$item-&gt;job-&gt;created_at</span></span></div>
                        <p className="font-sm color-text-paragraph mt-10"> Str::words($item-&gt;job-&gt;description, $words = 20, $end = '...') </p>
                        <div className="card-2-bottom mt-20">
                          <div className="row">
                            <div className="col-lg-7 col-7"><span className="card-text-price">$item-&gt;job-&gt;salary</span><span className="text-muted"> TK /Month</span></div>
                            <div className="col-lg-5 col-5 text-end">
                              {user?
                              <button className="btn btn-success">Approved</button>
                              :
                              <button className="btn btn-warning">Pending</button>
                              }
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                </div>
                <div className="paginations">
                  
                </div>
              </div>
            :
            <div>There is no Application</div>
            }
              
              
              <div className="tab-pane fade" id="tab-saved-jobs" role="tabpanel" aria-labelledby="tab-saved-jobs">
                <h3 className="mt-0 color-brand-1 mb-50">Saved Jobs</h3>
                <div className="row"> 
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="card-grid-2 hover-up">
                      <div className="card-grid-2-image-left"><span className="flash" />
                        <div className="image-box"><img src="../frontend/imgs/brands/brand-1.png" alt="jobBox" /></div>
                        <div className="right-info"><a className="name-job" href="company-details.html">LinkedIn</a><span className="location-small">New York, US</span></div>
                      </div>
                      <div className="card-block-info">
                        <h6><a href="job-details.html">UI / UX Designer fulltime</a></h6>
                        <div className="mt-5"><span className="card-briefcase">Fulltime</span><span className="card-time">4<span> minutes ago</span></span></div>
                        <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                        <div className="mt-30"><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Adobe XD</a><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Figma</a><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Photoshop</a>
                        </div>
                        <div className="card-2-bottom mt-30">
                          <div className="row">
                            <div className="col-lg-7 col-7"><span className="card-text-price">$500</span><span className="text-muted">/Hour</span></div>
                            <div className="col-lg-5 col-5 text-end">
                              <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="card-grid-2 hover-up">
                      <div className="card-grid-2-image-left"><span className="flash" />
                        <div className="image-box"><img src="../frontend/imgs/brands/brand-2.png" alt="jobBox" /></div>
                        <div className="right-info"><a className="name-job" href="company-details.html">Adobe Ilustrator</a><span className="location-small">New York, US</span></div>
                      </div>
                      <div className="card-block-info">
                        <h6><a href="job-details.html">Full Stack Engineer</a></h6>
                        <div className="mt-5"><span className="card-briefcase">Part time</span><span className="card-time">5<span> minutes ago</span></span></div>
                        <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                        <div className="mt-30"><a className="btn btn-grey-small mr-5" href="jobs-grid.html">React</a><a className="btn btn-grey-small mr-5" href="jobs-grid.html">NodeJS</a>
                        </div>
                        <div className="card-2-bottom mt-30">
                          <div className="row">
                            <div className="col-lg-7 col-7"><span className="card-text-price">$800</span><span className="text-muted">/Hour</span></div>
                            <div className="col-lg-5 col-5 text-end">
                              <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="card-grid-2 hover-up">
                      <div className="card-grid-2-image-left"><span className="flash" />
                        <div className="image-box"><img src="../frontend/imgs/brands/brand-3.png" alt="jobBox" /></div>
                        <div className="right-info"><a className="name-job" href="company-details.html">Bing Search</a><span className="location-small">New York, US</span></div>
                      </div>
                      <div className="card-block-info">
                        <h6><a href="job-details.html">Java Software Engineer</a></h6>
                        <div className="mt-5"><span className="card-briefcase">Full time</span><span className="card-time">6<span> minutes ago</span></span></div>
                        <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                        <div className="mt-30"><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Python</a><a className="btn btn-grey-small mr-5" href="jobs-grid.html">AWS</a><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Photoshop</a>
                        </div>
                        <div className="card-2-bottom mt-30">
                          <div className="row">
                            <div className="col-lg-7 col-7"><span className="card-text-price">$250</span><span className="text-muted">/Hour</span></div>
                            <div className="col-lg-5 col-5 text-end">
                              <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="card-grid-2 hover-up">
                      <div className="card-grid-2-image-left"><span className="flash" />
                        <div className="image-box"><img src="../frontend/imgs/brands/brand-4.png" alt="jobBox" /></div>
                        <div className="right-info"><a className="name-job" href="company-details.html">Dailymotion</a><span className="location-small">New York, US</span></div>
                      </div>
                      <div className="card-block-info">
                        <h6><a href="job-details.html">Frontend Developer</a></h6>
                        <div className="mt-5"><span className="card-briefcase">Full time</span><span className="card-time">6<span> minutes ago</span></span></div>
                        <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                        <div className="mt-30"><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Typescript</a><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Java</a>
                        </div>
                        <div className="card-2-bottom mt-30">
                          <div className="row">
                            <div className="col-lg-7 col-7"><span className="card-text-price">$250</span><span className="text-muted">/Hour</span></div>
                            <div className="col-lg-5 col-5 text-end">
                              <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="card-grid-2 hover-up">
                      <div className="card-grid-2-image-left"><span className="flash" />
                        <div className="image-box"><img src="../frontend/imgs/brands/brand-5.png" alt="jobBox" /></div>
                        <div className="right-info"><a className="name-job" href="company-details.html">Linkedin</a><span className="location-small">New York, US</span></div>
                      </div>
                      <div className="card-block-info">
                        <h6><a href="job-details.html">React Native Web Developer</a></h6>
                        <div className="mt-5"><span className="card-briefcase">Fulltime</span><span className="card-time">4<span> minutes ago</span></span></div>
                        <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                        <div className="mt-30"><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Angular</a>
                        </div>
                        <div className="card-2-bottom mt-30">
                          <div className="row">
                            <div className="col-lg-7 col-7"><span className="card-text-price">$500</span><span className="text-muted">/Hour</span></div>
                            <div className="col-lg-5 col-5 text-end">
                              <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="card-grid-2 hover-up">
                      <div className="card-grid-2-image-left"><span className="flash" />
                        <div className="image-box"><img src="../frontend/imgs/brands/brand-6.png" alt="jobBox" /></div>
                        <div className="right-info"><a className="name-job" href="company-details.html">Quora JSC</a><span className="location-small">New York, US</span></div>
                      </div>
                      <div className="card-block-info">
                        <h6><a href="job-details.html">Senior System Engineer</a></h6>
                        <div className="mt-5"><span className="card-briefcase">Part time</span><span className="card-time">5<span> minutes ago</span></span></div>
                        <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                        <div className="mt-30"><a className="btn btn-grey-small mr-5" href="job-details.html">PHP</a><a className="btn btn-grey-small mr-5" href="job-details.html">Android</a>
                        </div>
                        <div className="card-2-bottom mt-30">
                          <div className="row">
                            <div className="col-lg-7 col-7"><span className="card-text-price">$800</span><span className="text-muted">/Hour</span></div>
                            <div className="col-lg-5 col-5 text-end">
                              <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="card-grid-2 hover-up">
                      <div className="card-grid-2-image-left"><span className="flash" />
                        <div className="image-box"><img src="../frontend/imgs/brands/brand-7.png" alt="jobBox" /></div>
                        <div className="right-info"><a className="name-job" href="company-details.html">Nintendo</a><span className="location-small">New York, US</span></div>
                      </div>
                      <div className="card-block-info">
                        <h6><a href="job-details.html">Products Manager</a></h6>
                        <div className="mt-5"><span className="card-briefcase">Full time</span><span className="card-time">6<span> minutes ago</span></span></div>
                        <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                        <div className="mt-30"><a className="btn btn-grey-small mr-5" href="job-details.html">ASP .Net</a><a className="btn btn-grey-small mr-5" href="job-details.html">Figma</a>
                        </div>
                        <div className="card-2-bottom mt-30">
                          <div className="row">
                            <div className="col-lg-7 col-7"><span className="card-text-price">$250</span><span className="text-muted">/Hour</span></div>
                            <div className="col-lg-5 col-5 text-end">
                              <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="card-grid-2 hover-up">
                      <div className="card-grid-2-image-left"><span className="flash" />
                        <div className="image-box"><img src="../frontend/imgs/brands/brand-8.png" alt="jobBox" /></div>
                        <div className="right-info"><a className="name-job" href="company-details.html">Periscope</a><span className="location-small">New York, US</span></div>
                      </div>
                      <div className="card-block-info">
                        <h6><a href="job-details.html">Lead Quality Control QA</a></h6>
                        <div className="mt-5"><span className="card-briefcase">Full time</span><span className="card-time">6<span> minutes ago</span></span></div>
                        <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                        <div className="mt-30"><a className="btn btn-grey-small mr-5" href="job-details.html">iOS</a><a className="btn btn-grey-small mr-5" href="job-details.html">Laravel</a><a className="btn btn-grey-small mr-5" href="job-details.html">Golang</a>
                        </div>
                        <div className="card-2-bottom mt-30">
                          <div className="row">
                            <div className="col-lg-7 col-7"><span className="card-text-price">$250</span><span className="text-muted">/Hour</span></div>
                            <div className="col-lg-5 col-5 text-end">
                              <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="card-grid-2 hover-up">
                      <div className="card-grid-2-image-left"><span className="flash" />
                        <div className="image-box"><img src="../frontend/imgs/brands/brand-8.png" alt="jobBox" /></div>
                        <div className="right-info"><a className="name-job" href="company-details.html">Periscope</a><span className="location-small">New York, US</span></div>
                      </div>
                      <div className="card-block-info">
                        <h6><a href="job-details.html">Lead Quality Control QA</a></h6>
                        <div className="mt-5"><span className="card-briefcase">Full time</span><span className="card-time">6<span> minutes ago</span></span></div>
                        <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                        <div className="mt-30"><a className="btn btn-grey-small mr-5" href="job-details.html">iOS</a><a className="btn btn-grey-small mr-5" href="job-details.html">Laravel</a><a className="btn btn-grey-small mr-5" href="job-details.html">Golang</a>
                        </div>
                        <div className="card-2-bottom mt-30">
                          <div className="row">
                            <div className="col-lg-7 col-7"><span className="card-text-price">$250</span><span className="text-muted">/Hour</span></div>
                            <div className="col-lg-5 col-5 text-end">
                              <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="paginations">
                  <ul className="pager">
                    <li><a className="pager-prev" href="#" /></li>
                    <li><a className="pager-number" href="#">1</a></li>
                    <li><a className="pager-number" href="#">2</a></li>
                    <li><a className="pager-number" href="#">3</a></li>
                    <li><a className="pager-number" href="#">4</a></li>
                    <li><a className="pager-number" href="#">5</a></li>
                    <li><a className="pager-number active" href="#">6</a></li>
                    <li><a className="pager-number" href="#">7</a></li>
                    <li><a className="pager-next" href="#" /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
<Footer></Footer>

    </>
  )
}
