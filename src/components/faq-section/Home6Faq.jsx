import Link from 'next/link'
import React from 'react'

const Home6Faq = () => {
    return (
        <div className="home6-faq-section mb-130">
            <div className="container">
                <div className="row justify-content-center mb-65 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="col-xxl-4 col-lg-5 col-md-7">
                        <div className="section-title text-center">
                            <h2>FAQ’s</h2>
                            <p>Common questions about getting started with KREP Software</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center g-lg-4 gy-5 mb-50">
                    <div className="col-xl-8 col-lg-10">
                        <div className="faq-wrap">
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                <div className="accordion-item wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <h5 className="accordion-header" id="flush-headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
                                            What integrations are available with KREP?
                                        </button>
                                    </h5>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            KREP integrates seamlessly with over 15+ platforms to boost productivity and communication:
                                            <ul>
                                                <li><span>Mailchimp –</span> Manage email campaigns easily.</li>
                                                <li><span>Slack –</span> Get instant team notifications.</li>
                                                <li><span>WhatsApp –</span> Direct messaging with your support team.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                                    <h5 className="accordion-header" id="flush-headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            Can I add multiple users or agents to my account?
                                        </button>
                                    </h5>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            Absolutely. KREP allows you to add unlimited users, agents, or staff to your account depending on your plan. You can also assign specific roles and permissions.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <h5 className="accordion-header" id="flush-headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            How does KREP ensure the security of my data?
                                        </button>
                                    </h5>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            KREP is built with security in mind. We use SSL encryption, two-factor authentication, and daily backups to ensure your business data is safe and secure at all times.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                                    <h5 className="accordion-header" id="flush-headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                            How can I control user permissions within my account?
                                        </button>
                                    </h5>
                                    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            KREP lets you define user roles and restrict access to specific modules. Whether it’s admins, HR, or sales agents — you stay in control of who sees what.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow animate fadeInDown" data-wow-delay="900ms" data-wow-duration="1500ms">
                                    <h5 className="accordion-header" id="flush-headingFive">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                            How do I set up third-party integrations?
                                        </button>
                                    </h5>
                                    <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            From your dashboard, navigate to Settings → Integrations. You'll find a list of supported tools and simple connection steps. No coding required.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow animate fadeInDown" data-wow-delay="1000ms" data-wow-duration="1500ms">
                                    <h5 className="accordion-header" id="flush-headingSix">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                            How do I update the mobile app to the latest version?
                                        </button>
                                    </h5>
                                    <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            Simply visit the Google Play Store or Apple App Store, search for "KREP Software", and click “Update.” Make sure auto-updates are enabled for seamless performance.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="button-area text-center wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <Link className="enqiry-btn" href="/contact">
                        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        <span>Need <br />More Info?</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home6Faq
