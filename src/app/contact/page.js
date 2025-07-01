import Footer7 from '@/components/Footer/Footer7'
import Header6 from '@/components/header/Header6'
import React from 'react'

const ContactPage = () => {
    return (
        <>
            <Header6 />

            {/* Breadcrumb Section Start */}
            <div className="breadcrumb-section mb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="banner-content">
                                <h1>We would Love<br /> To Hear From You!</h1>
                                <ul className="breadcrumb-list">
                                    <li><a href="/">Home</a></li>
                                    <li>
                                        <svg width={25} height={6} viewBox="0 0 25 6" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM20 3.5L25 5.88675V0.113249L20 2.5V3.5ZM4.5 3.5H20.5V2.5H4.5V3.5Z" />
                                        </svg>
                                        Contact Us
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb Section End */}
            {/* Contact Page Start */}
           <div className="contact-page-top mb-80">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-6 col-md-8 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
        <div className="single-contact">
          <h4>Nairobi, Kenya</h4>
          <a href="https://maps.google.com/?q=Mitsumi+Business+Park+6th+Floor+Nairobi+Kenya">Mitsumi Business Park, 6th Floor</a>
          <ul className="contact-list">
            <li>
              <div className="icon">
                <img src="/assets/img/home1/icon/contact-call-icon.svg" alt="Call Icon" />
              </div>
              <div className="content">
                <span>Call Us</span>
                <h6><a href="tel:+254117888890">+254 117 8888 90</a></h6>
                <h6><a href="tel:+254790064458">+254 790 064 458</a></h6>
              </div>
            </li>
            <li>
              <div className="icon">
                <img src="/assets/img/home1/icon/contact-mail-icon.svg" alt="Mail Icon" />
              </div>
              <div className="content">
                <span>Email</span>
                <h6><a href="mailto:info@krepsoftware.co.ke">info@krepsoftware.co.ke</a></h6>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

            <div className="contact-form-area mb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="contact-form-wrap style-2">
                                <div className="section-title three text-center">
                                    <h2>Collaborate with Us!</h2>
                                    <p>We’re excited to hear from you! Whether you have a question about our services, want to discuss a new project.</p>
                                </div>
                                <svg className="divider" height={6} viewBox="0 0 696 6" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM691 3.5L696 5.88675V0.113249L691 2.5V3.5ZM4.5 3.5H691.5V2.5H4.5V3.5Z" />
                                </svg>
                                <form>
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <div className="form-inner">
                                                <label>Full Name</label>
                                                <input type="text" placeholder="Mr. Daniel Karimi" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-inner">
                                                <label>Company</label>
                                                <input type="text" placeholder="Yunovia Group" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-inner">
                                                <label>Company Email</label>
                                                <input type="email" placeholder="info@krepsoftware.co.ke" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-inner">
                                                <label>Phone</label>
                                                <input type="text" placeholder="+254 117 *** ** ***" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
  <div className="form-inner2">
    <label>How Can We Assist You with KREP Software?</label>
    <ul>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" defaultValue id="contactCheck1" />
          <label className="form-check-label" htmlFor="contactCheck1">
            CRM Implementation
          </label>
        </div>
      </li>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" defaultValue id="contactCheck2" />
          <label className="form-check-label" htmlFor="contactCheck2">
            ERP Integration
          </label>
        </div>
      </li>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" defaultValue id="contactCheck3" />
          <label className="form-check-label" htmlFor="contactCheck3">
            Staff Training & Onboarding
          </label>
        </div>
      </li>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" defaultValue id="contactCheck4" />
          <label className="form-check-label" htmlFor="contactCheck4">
            Workflow Automation
          </label>
        </div>
      </li>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" defaultValue id="contactCheck5" />
          <label className="form-check-label" htmlFor="contactCheck5">
            Custom Module Development
          </label>
        </div>
      </li>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" defaultValue id="contactCheck6" />
          <label className="form-check-label" htmlFor="contactCheck6">
            Support & Maintenance
          </label>
        </div>
      </li>
    </ul>
  </div>
</div>

                                        <div className="col-md-12">
                                            <div className="form-inner">
                                                <label>Message</label>
                                                <textarea placeholder="Write your enquiry..." defaultValue={""} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-inner2 two">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="contactCheck22" />
                                            <label className="form-check-label" htmlFor="contactCheck22">
                                                By submitting, you will agree our <span>privacy-policy &amp; terms conditions</span>.
                                            </label>
                                        </div>
                                    </div>
                                    <button type="submit" className="primary-btn3 btn-hover">
                                        Submit Now
                                        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                        <span />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact Page End */}


            <Footer7 />
        </>
    )
}

export default ContactPage
