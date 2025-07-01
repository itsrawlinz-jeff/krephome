'use client';
import React, { useEffect } from 'react';

const Home6Banner = () => {
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth <= 767) return;

            const scroll = window.scrollY;

            // Banner transformation
            const banner = document.querySelector(".home6-banner-section .banner-wrapper");
            if (banner) {
                const translateYBanner = Math.min(scroll / 2, 500);
                const scale = Math.max((100 - scroll / 5) / 100, 0);
                const opacity = Math.max(1 - scroll / 500, 0);

                banner.style.transform = `translate3d(0%, ${translateYBanner}px, 0) scale(${scale})`;
                banner.style.opacity = opacity.toString();
            }

            // Dashboard transformation
            const dashboard = document.querySelector(".dashboard-img-section .dashboard-img-wrap .dashboard-img");
            if (dashboard) {
                const translateYDashboard = Math.min(scroll / 2, 300);
                const rotateXValue = Math.max(30 - scroll / 10, 0);

                dashboard.style.transform = `translate3d(0, -${translateYDashboard}px, 0) rotateX(${rotateXValue}deg)`;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className="home6-banner-section">
                <div className="container">
                    <div className="banner-wrapper">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="banner-content">
                                    <div className="sub-title">
                                        <span>#1 All-In-One Business Software</span>
                                    </div>
                                    <h1>Run Your Business Smarter with KREP</h1>
                                    <p>
                                        KREP is the all-in-one <strong>ERP, CRM, and HRM</strong> solution designed to centralize your operations, automate your workflows, and empower teams to deliver more — faster.
                                    </p>
                                    <form className="email-area" onSubmit={(e) => {
                                        e.preventDefault();
                                        window.open('https://krepsoftware.co.ke/authentication/', '_blank');
                                    }}>
                                        <div className="form-inner">
                                            <input type="email" placeholder="Enter Your Email" />
                                            <button className="primary-btn3 two btn-hover" type="submit">
                                                Start A Free Trial
                                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                                <span />
                                            </button>
                                        </div>
                                    </form>
                                    <ul>
                                        <li>
                                            <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M3.95746 8.18786L5.29446 10.1242C6.12424 8.92552 9.81254 3.0703 11.9333 0.350098C9.73694 4.49886 7.82762 8.82696 6.11038 13.1762C5.86398 13.8 4.98534 13.8107 4.72662 13.1919C3.9086 11.2361 3.02912 9.29246 2.06718 7.404C2.75878 7.26568 3.4963 7.49626 3.95732 8.18786H3.95746Z" />
                                            </svg>
                                            14-Day Free Trial – No Credit Card Needed
                                        </li>
                                        <li>
                                            <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M3.95746 8.18786L5.29446 10.1242C6.12424 8.92552 9.81254 3.0703 11.9333 0.350098C9.73694 4.49886 7.82762 8.82696 6.11038 13.1762C5.86398 13.8 4.98534 13.8107 4.72662 13.1919C3.9086 11.2361 3.02912 9.29246 2.06718 7.404C2.75878 7.26568 3.4963 7.49626 3.95732 8.18786H3.95746Z" />
                                            </svg>
                                            Cancel Anytime, Full Access Included
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="vector">
                            {/* SVG and animation code unchanged */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="dashboard-img-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-lg-12">
                            <div className="dashboard-img-wrap">
                                <div className="dashboard-img">
                                    <img src="/assets/img/home6/dashboard.png" alt="" className="light" />
                                    <img src="/assets/img/home6/dashboard-dark.png" alt="" className="dark" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home6Banner;
