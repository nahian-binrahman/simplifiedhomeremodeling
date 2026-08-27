import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import SubCategorySelector from "@/components/SubCategorySelector";
import LocationSelector from "@/components/LocationSelector";
import TransformationVideoSection from "@/components/TransformationVideoSection";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import ClientReviews from "@/components/ClientReviews";
import QuoteSection from "@/components/QuoteSection";
import Footer from "@/components/Footer";
import ScrollEffects from "@/components/ScrollEffects";
import StickyBottomBar from "@/components/StickyBottomBar";

export const metadata: Metadata = {
  title: "Countertop Installation in Coachella Valley | Simplified Home Remodeling",
  description:
    "Precision-cut quartz, granite, and marble surfaces with seamless fabrication and expert installation across Palm Desert, Palm Springs, and Coachella Valley.",
};

const countertopComparisons = [
  {
    id: 1,
    beforeImg: "/images/countertop-before-1.jpg",
    afterImg: "/images/countertop-after-1.jpg",
    title: "Palm Desert Calacatta Waterfall Island Remodel",
  },
  {
    id: 2,
    beforeImg: "/images/countertop-before-2.jpg",
    afterImg: "/images/countertop-after-2.jpg",
    title: "Palm Springs Quartz Slab & Full Backsplash",
  },
  {
    id: 3,
    beforeImg: "/images/countertop-before-3.jpg",
    afterImg: "/images/countertop-after-3.jpg",
    title: "Rancho Mirage Taj Mahal Quartzite Vanity",
  },
];

export default function CountertopsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#111111] text-white selection:bg-black selection:text-white font-sans pb-16 sm:pb-0">
      <ScrollEffects />
      <Header />
      <Hero
        bgImage="/images/countertops-hero.jpg"
        eyebrow="COUNTERTOP INSTALLATION IN"
        heading="COACHELLA VALLEY"
        subtitle="Elevate Your Surfaces."
        description="Precision-cut quartz, granite, and marble surfaces with seamless fabrication and expert installation."
      />
      <TrustBar />
      <SubCategorySelector serviceSlug="countertops" />
      <LocationSelector
        serviceBasePath="/countertops"
        title="Select Your City for Countertops"
        subtitle="Choose your city below to explore localized countertop fabrication, slab selections, and instant estimates."
      />
      <TransformationVideoSection
        videoSrc="/videos/countertops & cabinetry.mp4"
        label="SEE THE TRANSFORMATION"
        title="Surfaces Crafted for Real Life."
        description="See how seamless slab fabrication, precision mitred waterfall edges, and designer stone surfaces transform your kitchen and bathrooms."
        features={[
          "Precision Quartz, Granite & Marble Fabrication",
          "Mitred Waterfall Edges & Bookmatched Slabs",
          "Professional Master Craftsmanship",
        ]}
        ctaText="START YOUR COUNTERTOP PROJECT"
      />
      <BeforeAfterGallery
        eyebrow="SEE THE DIFFERENCE"
        heading="Before & After."
        subtitle="Real Countertops. Real Transformations."
        items={countertopComparisons}
        ctaText="START YOUR COUNTERTOP PROJECT"
      />
      <ClientReviews />
      <QuoteSection
        title="READY TO UPGRADE YOUR COUNTERTOPS?"
        subtitle="Let's Create Surfaces You'll Love."
        description="Get your free consultation and project estimate today."
        projectType="Countertops"
      />
      <Footer />
      <StickyBottomBar />
    </main>
  );
}
