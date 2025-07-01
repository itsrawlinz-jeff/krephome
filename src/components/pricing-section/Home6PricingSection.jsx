import Link from 'next/link'
import React from 'react'

const Home6PricingSection = () => {
    return (
        <>
            {/* Pricing Section Start */}
            <div id="pricing" className="home6-pricing-section mb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="section-title text-center">
                                <h2>Choose Your Perfect Plan</h2>
                                <p>Start your digital transformation journey with KREP's flexible pricing plans designed for businesses of all sizes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Pricing Plan Section Start */}
            <div className="pricing-plan-page mb-130">
                <div className="container">
                    <div className="nav-area wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <ul className="nav nav-pills" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="pills-monthly-tab" data-bs-toggle="pill" data-bs-target="#pills-monthly" type="button" role="tab" aria-controls="pills-monthly" aria-selected="true">Monthly</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-yearly-tab" data-bs-toggle="pill" data-bs-target="#pills-yearly" type="button" role="tab" aria-controls="pills-yearly" aria-selected="false">Yearly</button>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content" id="pills-tabContent">
                       <div className="tab-pane fade show active" id="pills-monthly" role="tabpanel" aria-labelledby="pills-monthly-tab">
                            <div className="row gy-5">
                                {/* KREP STARTER PLAN */}
                                <div className="col-lg-4 col-md-6 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="pricing-plan-card magnetic-item">
                                    <div className="pricing-plan-top">
                                    <div className="title-area">
                                        <h4>KREP Starter</h4>
                                        <span>Best for Startups</span>
                                    </div>
                                    <h2>KES 10,000 <sub>/Month</sub></h2>
                                    </div>
                                    <p>The <strong>KREP Starter</strong> plan helps small businesses go digital with CRM, HR, and ERP essentials.</p>
                                    <Link href="https://krepsoftware.co.ke/authentication/" className="primary-btn3 white-bg btn-hover">
                                    Try Free for 7 Days
                                    <svg width={10} height={10}><path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round"/></svg>
                                    <span />
                                    </Link>
                                    <div className="included-feature-area">
                                    <h6>Includes:</h6>
                                    <ul>
                                        <li>✅Unlimited Customers, Contacts, Leads</li>
                                        <li>✅15 Staff</li>
                                        <li>✅1000 Invoices</li>
                                        <li>✅ Deals, Proposals, Invoices, Estimates</li>
                                        <li>✅ HR Payroll + HR Records</li>
                                        <li>✅ Projects + Kanban + Roadmap</li>
                                        <li>✅ Task Filters + Bookmarks</li>
                                        <li>✅ Supplier & Logistics</li>
                                        <li>✅ Spreadsheet Online + Reports</li>
                                        <li>✅ Webhooks,API Access - 3rd Party Apps Integrations</li>
                                        <li>✅ 24/7 Backup & Support</li>
                                        <li>❌ AI Writer & Google Leads Import</li>
                                        <li>❌ MFA + Commission + Branding</li>
                                        <li>❌ Recruitment Module</li>
                                    </ul>
                                    </div>
                                    <svg className="vector" width={141} height={146}><circle cx="95.5" cy="-2.5" r={95} strokeDasharray="4 4" /><circle cx="148.5" cy="50.5" r={95} strokeDasharray="4 4" /></svg>
                                </div>
                                </div>

                                {/* KREP GROWTH PLAN */}
                                <div className="col-lg-4 col-md-6 wow animate fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                                <div className="pricing-plan-card magnetic-item premium">
                                    <div className="pricing-plan-top">
                                    <div className="title-area">
                                        <h4>KREP Growth</h4>
                                        <span>Value for SMEs</span>
                                    </div>
                                    <h2>KES 15,000 <sub>/Month</sub></h2>
                                    </div>
                                    <p>The <strong>KREP Growth</strong> plan boosts productivity and automation for growing SMEs.</p>
                                    <Link href="https://krepsoftware.co.ke/authentication/" className="primary-btn3 btn-hover">
                                    14 Days Free Trial
                                    <svg width={10} height={10}><path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round"/></svg>
                                    <span />
                                    </Link>
                                    <div className="included-feature-area">
                                    <h6>Includes:</h6>
                                    <ul>
                                        <li>✅ Everything in Starter +</li>
                                        <li>✅ Unlimited Invoices</li>
                                        <li>✅ 50 Staff</li>
                                        <li>✅ 1000 Invoices</li>
                                        <li>✅ AI Writer, ImportSync, Google Leads</li>
                                        <li>✅ Sales Agent & Commission Tools</li>
                                        <li>✅ Accounting & Bookkeeping</li>
                                        <li>✅ 24/7 Backup & Support</li>
                                        <li>✅ Multi-Factor Authentication</li>
                                        <li>✅ Marketing Automation</li>
                                        <li>✅ Recruitment Module</li>
                                        <li>✅ Whatsapp Business API integration + AI Bot Reply</li>
                                        <li>✅ Webhooks,API Access - 3rd Party Apps Integrations</li>
                                        <li>✅ M-Pesa,Stripe,Paystack,Inatsend</li>
                                    </ul>
                                    </div>
                                    <svg className="vector" width={141} height={146}><circle cx="95.5" cy="-2.5" r={95} strokeDasharray="4 4" /><circle cx="148.5" cy="50.5" r={95} strokeDasharray="4 4" /></svg>
                                </div>
                                </div>

                                {/* KREP ENTERPRISE PLAN */}
                                <div className="col-lg-4 col-md-6 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="pricing-plan-card magnetic-item enterprise">
                                    <div className="pricing-plan-top">
                                    <div className="title-area">
                                        <h4>KREP Whitelabel</h4>
                                        <span>Custom-Tailored</span>
                                    </div>
                                    <h2>Let's Talk</h2>
                                    </div>
                                    <p><strong>KREP Whitelabel</strong> is for large teams and resellers who need full control, branding, and scalability.</p>
                                    <Link href="https://calendly.com/krepsoftware/krep-demo-meeting" className="primary-btn3 two btn-hover">
                                    Let’s Talk
                                    <svg width={10} height={10}><path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round"/></svg>
                                    <span />
                                    </Link>
                                    <div className="included-feature-area">
                                    <h6>Includes:</h6>
                                    <ul>
                                        <li>✅ All Growth Features +</li>
                                        <li>✅ Full Reseller Branding</li>
                                        <li>✅ Dedicated Onboarding & Support</li>
                                        <li>✅ Enterprise Hosting & Performance</li>
                                        <li>✅ Domain Manager + Access Control</li>
                                        <li>✅ Dedicated Account Manager</li>
                                        <li>✅ Webhooks,API Access - 3rd Party Apps Integrations</li>
                                        <li>✅ 24/7 Backup & Support</li>
                                        <li>✅ Custom Domain </li>
                                    </ul>
                                    </div>
                                    <svg className="vector" width={141} height={146}><circle cx="95.5" cy="-2.5" r={95} strokeDasharray="4 4" /><circle cx="148.5" cy="50.5" r={95} strokeDasharray="4 4" /></svg>
                                </div>
                                </div>
                            </div>
                            </div>

                        <div className="tab-pane fade" id="pills-yearly" role="tabpanel" aria-labelledby="pills-yearly-tab">
                            <div className="row gy-5">
                                <div className="col-lg-4 col-md-6">
                                    <div className="pricing-plan-card magnetic-item">
                                        <div className="pricing-plan-top">
                                            <div className="title-area">
                                                <h4>KREP Starter (Annual)</h4>
                                                <span>Save 20%</span>
                                            </div>
                                            <h2>KES 96,000<sub>/per year</sub></h2>
                                        </div>
                                            <p><strong>KREP Growth Annual</strong> unlocks full automation and team scale for SMEs — now 20% off yearly.</p>
                                        <Link href="https://krepsoftware.co.ke/authentication/" className="primary-btn3 white-bg btn-hover">
                                            14 Days for Free
                                            <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                            <span />
                                        </Link>
                                        <div className="included-feature-area">
                                            <h6>What’s Included of Standard :</h6>
                                             <ul>
                                            <li>✅ Unlimited Customers, Contacts, Leads</li>
                                            <li>✅ 15 Staff</li>
                                            <li>✅ 1000 Invoices</li>
                                            <li>✅ Deals, Proposals, Invoices, Estimates</li>
                                            <li>✅ HR Payroll + HR Records</li>
                                            <li>✅ Projects + Kanban + Roadmap</li>
                                            <li>✅ Task Filters + Bookmarks</li>
                                            <li>✅ Supplier & Logistics</li>
                                            <li>✅ Spreadsheet Online + Reports</li>
                                            <li>✅ Webhooks,API Access - 3rd Party Apps Integrations</li>
                                            <li>✅ 24/7 Backup & Support</li>
                                            <li>❌ AI Writer & Google Leads Import</li>
                                            <li>❌ MFA + Commission + Branding</li>
                                            <li>❌ Recruitment Module</li>
                                            </ul>
                                        </div>
                                        <svg className="vector" width={141} height={146} viewBox="0 0 141 146" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <circle cx="95.5" cy="-2.5" r={95} strokeDasharray="4 4" />
                                                <circle cx="148.5" cy="50.5" r={95} strokeDasharray="4 4" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="pricing-plan-card magnetic-item premium">
                                        <div className="pricing-plan-top">
                                            <div className="title-area">
            <h4>KREP Growth (Annual)</h4>
            <span>Save 20%</span>
          </div>
          <h2>KES 144,000 <sub>/Year</sub></h2>
        </div>
        <p><strong>KREP Growth Annual</strong> unlocks full automation and team scale for SMEs — now 20% off yearly.</p>
        <Link href="https://krepsoftware.co.ke/authentication/" className="primary-btn3 btn-hover">
          Get Started
          <svg width={10} height={10}><path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round"/></svg>
          <span />
        </Link>
        <div className="included-feature-area">
          <h6>Includes:</h6>
          <ul>
            <li>✅ Everything in Starter +</li>
            <li>✅ Unlimited Invoices</li>
            <li>✅ 50 Staff</li>
            <li>✅ AI Writer, ImportSync, Google Leads</li>
            <li>✅ Sales Agent & Commission Tools</li>
            <li>✅ Accounting & Bookkeeping</li>
            <li>✅ 24/7 Backup & Support</li>
            <li>✅ Multi-Factor Authentication</li>
            <li>✅ Marketing Automation</li>
            <li>✅ Recruitment Module</li>
            <li>✅ Whatsapp Business API integration + AI Bot Reply</li>
            <li>✅ Webhooks,API Access - 3rd Party Apps Integrations</li>
            <li>✅ M-Pesa,Stripe,Paystack,Inatsend</li>
          </ul>
                                        </div>
                                        <svg className="vector" width={141} height={146} viewBox="0 0 141 146" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <circle cx="95.5" cy="-2.5" r={95} strokeDasharray="4 4" />
                                                <circle cx="148.5" cy="50.5" r={95} strokeDasharray="4 4" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="pricing-plan-card magnetic-item enterprise">
                                        <div className="pricing-plan-top">
                                            <div className="title-area">
            <h4>KREP Whitelabel (Annual)</h4>
            <span>Save 20%</span>
          </div>
          <h2>Let’s Talk</h2>
        </div>
        <p><strong>KREP Whitelabel Annual</strong> offers all growth features and enterprise-grade capabilities — billed yearly at a discount.</p>
        <Link href="/contact" className="primary-btn3 two btn-hover">
          Let’s Talk
          <svg width={10} height={10}><path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round"/></svg>
          <span />
        </Link>
        <div className="included-feature-area">
                                        <h6>Includes:</h6>
                                        <ul>
                                            <li>✅ All Growth Features +</li>
                                            <li>✅ Full Reseller Branding</li>
                                            <li>✅ Dedicated Onboarding & Support</li>
                                            <li>✅ Enterprise Hosting & Performance</li>
                                            <li>✅ Domain Manager + Access Control</li>
                                            <li>✅ Dedicated Account Manager</li>
                                            <li>✅ Webhooks,API Access - 3rd Party Apps Integrations</li>
                                            <li>✅ 24/7 Backup & Support</li>
                                            <li>✅ Custom Domain</li>
                                        </ul>
                                        </div>
                                        <svg className="vector" width={141} height={146} viewBox="0 0 141 146" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <circle cx="95.5" cy="-2.5" r={95} strokeDasharray="4 4" />
                                                <circle cx="148.5" cy="50.5" r={95} strokeDasharray="4 4" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Pricing Plan Section End */}
        </>
    )
}

export default Home6PricingSection

