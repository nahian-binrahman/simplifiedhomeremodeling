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
  title: "Flooring Installation in Coachella Valley | Simplified Home Remodeling",
  description:
    "Premium hardwood, luxury vinyl plank (LVP), and custom tile flooring installed with flawless precision across Palm Desert, Palm Springs, and Coachella Valley.",
};

const flooringComparisons = [
  {
    id: 1,
    beforeImg: "/images/kitchen-before-1.jpg",
    afterImg: "/images/flooring-hero.jpg",
    title: "Palm Desert European White Oak Hardwood",
  },
  {
    id: 2,
    beforeImg: "/images/bath-before-1.jpg",
    afterImg: "/images/bath-after-1.jpg",
    title: "Palm Springs Large Format Porcelain Tile",
  },
  {
    id: 3,
    beforeImg: "/images/kitchen-before-2.jpg",
    afterImg: "/images/kitchen-after-2.jpg",
    title: "Rancho Mirage Luxury Vinyl Plank Transformation",
  },
];

export default function FlooringPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#111111] text-white selection:bg-black selection:text-white font-sans pb-16 sm:pb-0">
      <ScrollEffects />
      <Header />
      <Hero
        bgImage="/images/flooring-hero.jpg"
        eyebrow="FLOORING INSTALLATION IN"
        heading="COACHELLA VALLEY"
        subtitle="Transform Your Floors."
        description="Premium hardwood, luxury vinyl plank (LVP), and custom tile flooring installed with flawless precision."
      />
      <TrustBar />
      <SubCategorySelector serviceSlug="flooring" />
      <LocationSelector
        serviceBasePath="/flooring"
        title="Select Your City for Flooring"
        subtitle="Choose your city below to explore localized LVP, laminate, porcelain, and stone tile flooring installations."
      />
      <TransformationVideoSection
        videoSrc="/videos/floor-transformation.mp4"
        label="SEE THE TRANSFORMATION"
        title="Floors Designed for Real Life."
        description="See how seamless hardwood transitions, waterproof luxury vinyl plank, and designer tile layouts elevate the flow and aesthetic of your entire home."
        features={[
          "European White Oak & Engineered Hardwood",
          "Waterproof LVP & Large Format Tile Installation",
          "Professional Master Craftsmanship",
        ]}
        ctaText="START YOUR FLOORING PROJECT"
      />
      <BeforeAfterGallery
        eyebrow="SEE THE DIFFERENCE"
        heading="Before & After."
        subtitle="Real Floors. Real Transformations."
        items={flooringComparisons}
        ctaText="START YOUR FLOORING PROJECT"
      />
      <ClientReviews />
      <QuoteSection
        title="READY TO TRANSFORM YOUR FLOORS?"
        subtitle="Let's Create Floors You'll Love."
        description="Get your free consultation and project estimate today."
        projectType="Flooring Installation"
      />
      <Footer />
      <StickyBottomBar />
    </main>
  );
}
