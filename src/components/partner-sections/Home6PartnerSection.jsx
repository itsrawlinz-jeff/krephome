import React from 'react';

const Home6PartnerSection = () => {
    return (
        <>
            <div className="partner-area six mb-80">
                <div className="container">
                    <div className="partner-title-area wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <h6>Trusted by <span>20,000+</span> Businesses Worldwide</h6>
                        <h6>Customer Satisfaction Score: <span>90%+</span></h6>
                    </div>
                    <div className="partner-wrap">
                        <div className="marquee light">
                            <div className="marquee__group">
                                <a href="#"><img src="/assets/img/home1/partner-01.png" alt="Business Partner Logo 1" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-02.png" alt="Business Partner Logo 2" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-03.png" alt="Business Partner Logo 3" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-04.png" alt="Business Partner Logo 4" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-05.png" alt="Business Partner Logo 5" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-06.png" alt="Business Partner Logo 6" /></a>
                            </div>
                            <div aria-hidden="true" className="marquee__group">
                                <a href="#"><img src="/assets/img/home1/partner-01.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-02.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-03.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-04.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-05.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-06.png" alt="" /></a>
                            </div>
                        </div>

                        <div className="marquee dark">
                            <div className="marquee__group">
                                <a href="#"><img src="/assets/img/home1/partner-light-01.png" alt="Client Logo 1" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-light-02.png" alt="Client Logo 2" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-light-03.png" alt="Client Logo 3" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-light-04.png" alt="Client Logo 4" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-light-05.png" alt="Client Logo 5" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-light-06.png" alt="Client Logo 6" /></a>
                            </div>
                            <div aria-hidden="true" className="marquee__group">
                                <a href="#"><img src="/assets/img/home1/partner-light-01.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-light-02.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-light-03.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-light-04.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-light-05.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-light-06.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home6-review-section mb-130">
                <div className="container">
                    <div className="row justify-content-center wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="col-xl-10">
                            <div className="review-wrapper">
                                <div className="title-area">
                                    <h5>What Our Clients Say</h5>
                                </div>
                                <ul className="review-list">
                                    <li className="single-review">
                                        <a href="https://business.google.com/reviews" target="_blank" rel="noopener noreferrer">
                                            <div className="logo">
                                                <img src="/assets/img/home6/icon/google-logo.svg" alt="Google Reviews" />
                                            </div>
                                            <div className="review-content">
                                                <div className="rating-area">
                                                    <span>4.5</span>
                                                    <ul className="rating">
                                                        {[...Array(5)].map((_, i) => (
                                                            <li key={i}><i className="bi bi-star-fill" /></li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <p>234 verified reviews on Google</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="single-review">
                                        <a href="https://clutch.co/" target="_blank" rel="noopener noreferrer">
                                            <div className="logo">
                                                <img src="/assets/img/home6/icon/clucth-logo.svg" alt="Clutch Reviews" className="light" />
                                                <img src="/assets/img/home6/icon/clucth-logo-light.svg" alt="Clutch Reviews Dark" className="dark" />
                                            </div>
                                            <div className="review-content">
                                                <div className="rating-area">
                                                    <span>4.5</span>
                                                    <ul className="rating">
                                                        {[...Array(5)].map((_, i) => (
                                                            <li key={i}><i className="bi bi-star-fill" /></li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <p>164 customer testimonials on Clutch</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="single-review">
                                        <a href="https://www.capterra.com/" target="_blank" rel="noopener noreferrer">
                                            <div className="logo">
                                                <img src="/assets/img/home6/icon/capterra-logo.svg" alt="Capterra Reviews" />
                                            </div>
                                            <div className="review-content">
                                                <div className="rating-area">
                                                    <span>5.0</span>
                                                    <ul className="rating">
                                                        {[...Array(5)].map((_, i) => (
                                                            <li key={i}><i className="bi bi-star-fill" /></li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <p>458 five-star reviews on Capterra</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <div className="download-area">
                                    <p>
                                        <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                {/* Keep your SVG paths unchanged here */}
                                            </g>
                                        </svg>
                                        Download the KREP Mobile App and manage your business on the go.
                                    </p>
                                    <a href="#">
                                        Download App
                                        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home6PartnerSection;
