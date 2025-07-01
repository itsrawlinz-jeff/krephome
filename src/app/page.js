"use client"
import React, { useEffect } from 'react'
import Home6Banner from '@/components/banner/Home6Banner'
import Home6Faq from '@/components/faq-section/Home6Faq'
import Home6FeatureSection from '@/components/feature-section/Home6FeatureSection'
import Header6 from '@/components/header/Header6'
import Home6IntegrationSection from '@/components/integration-section/Home6IntegrationSection'
import Home6PartnerSection from '@/components/partner-sections/Home6PartnerSection'
import Home6processSection from '@/components/process-sections/Home6processSection'
import Home6TestimonialSection from '@/components/testimonial-section/Home6TestimonialSection'
import Home6PricingSection from '@/components/pricing-section/Home6PricingSection'
import Footer7 from '@/components/Footer/Footer7'

export default function Home() {
    useEffect(() => {
        document.body.classList.add("digital-agency");

        // Inject Calendly script
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.head.appendChild(script);

        // Clean up if necessary
        return () => {
            document.body.classList.remove("digital-agency");
        };
    }, []);

    const openCalendly = (e) => {
        e.preventDefault();
        window.Calendly && window.Calendly.initPopupWidget({
            url: 'https://calendly.com/krepsoftware/krep-demo-meeting?hide_gdpr_banner=1&primary_color=054a18'
        });
    };

    return (
        <>
            <Header6 />
            <Home6Banner />
            <Home6PartnerSection />
            <Home6FeatureSection />
            <Home6TestimonialSection />
            <Home6IntegrationSection />
            <Home6processSection />
            <Home6PricingSection />
            <Home6Faq />

            {/* Calendly Button */}
            <div className="text-center my-5">
                <a href="#" onClick={openCalendly} className="btn btn-success px-4 py-2">
                    Schedule a Demo with KREP Software
                </a>
            </div>

            <Footer7 />
        </>
    );
}
