import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollEffects from "@/components/ScrollEffects";
import StickyBottomBar from "@/components/StickyBottomBar";
import TrustBar from "@/components/TrustBar";
import TransformationVideoSection from "@/components/TransformationVideoSection";
import QuoteSection from "@/components/QuoteSection";

// Homepage-specific modular sections
import HomeHero from "@/components/home/HomeHero";
import AboutIntro from "@/components/home/AboutIntro";
import HomeServices from "@/components/home/HomeServices";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HomeProcess from "@/components/home/HomeProcess";
import HomePortfolio from "@/components/home/HomePortfolio";
import HomeTestimonials from "@/components/home/HomeTestimonials";
import HomeFAQ from "@/components/home/HomeFAQ";

export const metadata: Metadata = {
  title: "Simplified Home Remodeling | Kitchen, Bathroom & Complete Home Renovations",
  description:
    "Transform your home with expert remodeling services including kitchens, bathrooms, countertops, flooring and custom renovations.",
  keywords: [
    "Coachella Valley Home Remodeling",
    "Kitchen Remodeling Palm Desert",
    "Bathroom Renovation Palm Springs",
    "Countertops & Custom Cabinetry",
    "Flooring Installation Rancho Mirage",
    "General Contractor La Quinta",
  ],
  openGraph: {
    title: "Simplified Home Remodeling | Kitchen, Bathroom & Complete Home Renovations",
    description:
      "Transform your home with expert remodeling services including kitchens, bathrooms, countertops, flooring and custom renovations.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simplified Home Remodeling | Kitchen, Bathroom & Complete Home Renovations",
    description:
      "Transform your home with expert remodeling services including kitchens, bathrooms, countertops, flooring and custom renovations.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "Simplified Home Remodeling",
  description:
    "Transform your home with expert remodeling services including kitchens, bathrooms, countertops, flooring and custom renovations.",
  telephone: "+17605551234",
  areaServed: [
    "Palm Desert",
    "Palm Springs",
    "Rancho Mirage",
    "La Quinta",
    "Indian Wells",
    "Coachella Valley",
  ],
  priceRange: "$$$$",
  openingHours: "Mo-Sa 07:00-18:00",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen flex flex-col bg-[#0a0a0a] text-white selection:bg-white selection:text-black font-sans pb-16 sm:pb-0">
        {/* Scroll Reveal Engine */}
        <ScrollEffects />

        {/* Global Header */}
        <Header />

        {/* 1. Premium Hero Section */}
        <HomeHero />

        {/* Trust Highlights Strip */}
        <TrustBar />

        {/* 2. Introduction / About Section */}
        <AboutIntro />

        {/* Video Transformation Section with Scroll Autoplay */}
        <TransformationVideoSection
          label="SEE THE TRANSFORMATION"
          title="A Home Designed for Real Life."
          description="See how quality craftsmanship and thoughtful remodeling can transform everyday spaces into stunning, functional living environments built around your family."
          features={[
            "Custom Home & Kitchen Remodeling",
            "Quality Materials & Precision Finishes",
            "Professional In-House Craftsmanship",
          ]}
          ctaText="START YOUR HOME REMODEL"
        />

        {/* 3. Remodeling Services Section */}
        <HomeServices />

        {/* 4. Why Choose Us / Architectural Pillars */}
        <WhyChooseUs />

        {/* 5. Remodeling Process Section */}
        <HomeProcess />

        {/* 6. Portfolio / Gallery Preview */}
        <HomePortfolio />

        {/* 7. Testimonials / Client Proof */}
        <HomeTestimonials />

        {/* 8. Frequently Asked Questions */}
        <HomeFAQ />

        {/* 9. Final CTA & Lead Capture */}
        <QuoteSection
          title="READY TO TRANSFORM YOUR HOME?"
          subtitle="Let's Create a Living Space You'll Love."
          description="Get your free in-home consultation and guaranteed fixed-price estimate today."
          projectType="Whole Home Remodeling"
        />

        {/* 10. Footer */}
        <Footer />

        {/* Mobile Sticky Action Bar */}
        <StickyBottomBar />
      </main>
    </>
  );
}
