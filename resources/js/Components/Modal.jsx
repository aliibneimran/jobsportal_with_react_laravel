import React from 'react'

export default function Modal() {
    
  return (
    <>
    <div className="modal fade" id="ModalApplyJobForm" tabIndex={-1} aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content apply-job-form">
                <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" />
                <div className="modal-body pl-30 pr-30 pt-50">
                    <div className="text-center">
                    <p className="font-sm text-brand-2">Job Application </p>
                    <h2 className="mt-10 mb-5 text-brand-1 text-capitalize">Start your career today</h2>
                    <p className="font-sm text-muted mb-30">Please fill in your information and send it to the employer. </p>
                    </div>
                   
                    <form className="login-register text-start mt-20 pb-30" method="post" encType="multipart/form-data"> 
                    
                    <input type="text" name="job_id" />
                    <input type="text" name="company_id" />
                    <input type="text" name="candidate_id" />
                   
                    <div className="form-group">
                        <label className="form-label" htmlFor="input-1">Full Name *</label>
                        <input className="form-control" id="input-1" type="text" name="name" />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="input-2">Email *</label>
                        <input className="form-control" id="input-2" type="email" name="email" />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="number">Contact Number *</label>
                        <input className="form-control" id="number" type="text" name="contact" />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="des">Description</label>
                        <input className="form-control" id="des" type="text" name="bio" />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="file">Upload Resume</label>
                        <input className="form-control" id="file" name="cv" type="file" v/>
                    </div>
                    <div className="login_footer form-group d-flex justify-content-between">
                        <label className="cb-container">
                        <input type="checkbox" /><span className="text-small">Agree our terms and policy</span><span className="checkmark" />
                        </label><a className="text-muted" href="contact">Lean more</a>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-default hover-up w-100" type="submit" name="apply">Apply Job</button>
                    </div>
                    <div className="text-muted text-center">Do you need support? <a href="contact">Contact Us</a></div>
                    
                    </form>
                </div>
                </div>
            </div>
    </div>    
    </>
  )
}
