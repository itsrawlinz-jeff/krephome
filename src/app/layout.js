"use client";
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/all.min.css";
import "../../public/assets/css/bootstrap-icons.css";
import "../../public/assets/css/animate.min.css";
import "../../public/assets/css/swiper-bundle.min.css";
import "react-modal-video/css/modal-video.css";
import "../../public/assets/css/slick-theme.css";
import "../../public/assets/css/nice-select.css";
import "../../public/assets/css/slick.css";
import "../../public/assets/css/style.css";
import { useEffect } from "react";
import { useWow } from '@/customHooks/useWow';
import useMagneticHover from "@/customHooks/useMagneticHover";
import { dmsans, suseSans, lora } from "@/fonts/font";
import { usePathname } from 'next/navigation'; // Import usePathname


import Script from 'next/script';

import ThemeSwitch from "@/components/common/Theme";
import ScrollCircleProgress from "@/utils/ScrollCircleProgess";
import useButtonHoverEffect from "@/customHooks/useButtonHoverEffect";
import SmoothPageScroll from "@/utils/SmoothPageScroll";
import AnimatedCursor from "react-animated-cursor";


export default function RootLayout({ children }) {
  const pathname = usePathname(); // Get the current pathname

  useMagneticHover();
  useWow()
  useButtonHoverEffect();
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    require("../../public/assets/js/confetti.browser.min");
  }, []);

  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/assets/img/fav-icon.svg"
          type="image/x-icon"
          sizes="16x16"
        />
        <title>KREP Software – Smart Digital Solutions for Business Growth</title>
  <meta name="title" content="KREP Software – Smart Digital Solutions for Business Growth" />
  <meta name="description" content="KREP Software is a cutting-edge IT solutions agency specializing in CRM, cloud software, automation, mobile apps, and enterprise tools to grow your business." />
  <meta name="keywords" content="KREP Software, digital agency Kenya, CRM software, cloud CRM, ERP systems, business automation, mobile app development Kenya, software development Nairobi, IT consultancy, enterprise solutions Kenya, digital transformation Kenya" />
  <meta name="author" content="KREP Software | Rawlinz Designs" />
  <meta name="robots" content="index, follow" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

  {/* Canonical */}
  <link rel="canonical" href="https://krepsoftware.co.ke/" />

  {/* Favicon */}
  <link rel="icon" type="image/png" href="/favicon.png" />

  {/* Open Graph / Facebook */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://krepsoftware.co.ke/" />
  <meta property="og:title" content="KREP Software – Smart Digital Solutions for Business Growth" />
  <meta property="og:description" content="From CRM and cloud-based software to mobile apps, KREP Software delivers smart, scalable solutions for enterprises in Kenya and beyond." />
  <meta property="og:image" content="https://krepsoftware.co.ke/og-image.jpg" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://krepsoftware.co.ke/" />
  <meta name="twitter:title" content="KREP Software – Smart Digital Solutions for Business Growth" />
  <meta name="twitter:description" content="From CRM and cloud-based software to mobile apps, KREP Software delivers smart, scalable solutions for enterprises in Kenya and beyond." />
  <meta name="twitter:image" content="https://krepsoftware.co.ke/og-image.jpg" />
  <meta name="twitter:site" content="@krepsoftware" />

  {/* Fonts and Icons */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
  <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />

  {/* Structured Data */}
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "KREP Software",
      "url": "https://krepsoftware.co.ke/",
      "logo": "https://krepsoftware.co.ke/logo.png",
      "sameAs": [
        "https://www.facebook.com/krepsoftware",
        "https://www.linkedin.com/company/krepsoftware",
        "https://twitter.com/krepsoftware",
        "https://instagram.com/krepsoftware"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+254700123456",
        "contactType": "Customer Support",
        "areaServed": "KE",
        "availableLanguage": ["English", "Swahili"]
      }
    }
  `}} />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />

        {/* GSAP Scripts */}
        <Script src="/assets/js/gsap.min.js" strategy="beforeInteractive" onLoad={() => { window.gsap.registerPlugin(window.ScrollTrigger); }} />
        <Script src="/assets/js/ScrollTrigger.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/SplitText.min.js" strategy="beforeInteractive" />

        {/* Tawk.to Live Chat Script */}
        <Script id="tawk-to-chat" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/686402ac7dd051190adf9b78/1iv3akt6s';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      </head>
      <body id="body" className={`tt-magic-cursor ${lora.variable} ${dmsans.variable} ${suseSans.variable}`}>

        <SmoothPageScroll />
        {children}
        <AnimatedCursor
          innerSize={16}
          outerSize={16}

          color='88, 65, 216'
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={3}
          outerStyle={{
            zIndex: 999999,
          }}
          innerStyle={{
            zIndex: 999999,
          }}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link'
          ]}
        />

        <ScrollCircleProgress />
        <ThemeSwitch />
      </body>
    </html>
  );
}
