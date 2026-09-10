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
  title: "Coachella Valley Countertops",
  description:
    "See how expert countertop fabrication, precise seam placement, and custom edge details can elevate your kitchen or bathroom with a clean, high-end finish.",
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
        eyebrow="SIMPLIFIED HOME REMODELING"
        heading="COUNTERTOP SURFACES IN COACHELLA VALLEY"
        subtitle="Countertop Surfaces, Crafted with Precision."
        description="See how expert countertop fabrication, precise seam placement, and custom edge details can elevate your kitchen or bathroom with a clean, high-end finish."
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
        title="Countertops That Make a Statement."
        description="Elevate your kitchen or bathroom with expertly fabricated stone countertops, custom edge details, and seamless installation designed for a refined, high-end finish."
        features={[
          "Quartz, Granite, Quartzite & Porcelain Countertops",
          "Mitered Waterfall Edges & Book matched Slabs",
          "Expert Fabrication & Professional Installation",
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
        title="READY FOR NEW COUNTERTOPS?"
        subtitle="Beautiful Surfaces. Professionally Fabricated & Installed."
        description="Upgrade your kitchen or bathroom with professionally fabricated quartz, granite, and quartzite countertops tailored to your space and style."
        projectType="Countertops"
        submitText="START YOUR COUNTERTOP PROJECT"
      />
      <Footer />
      <StickyBottomBar />
    </main>
  );
}
