"use client"
import Home6Banner from '@/components/banner/Home6Banner'
import Home6BlogSection from '@/components/blog-section/Home6BlogSection'
import Home6Faq from '@/components/faq-section/Home6Faq'
import Home6FeatureSection from '@/components/feature-section/Home6FeatureSection'
// import Home1Footer from '@/components/Footer/Home1Footer'
import Header6 from '@/components/header/Header6'
import Home6IntegrationSection from '@/components/integration-section/Home6IntegrationSection'
import Home6PartnerSection from '@/components/partner-sections/Home6PartnerSection'
import Home6processSection from '@/components/process-sections/Home6processSection'
import Home6TestimonialSection from '@/components/testimonial-section/Home6TestimonialSection'
import Home6PricingSection from '@/components/pricing-section/Home6PricingSection'
import React, { useEffect } from 'react'
import Footer7 from '@/components/Footer/Footer7'

export default function Home() {
    useEffect(() => {
        document.body.classList.add("digital-agency");
    })
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
            
            <Footer7/>
        </>
    )
}
