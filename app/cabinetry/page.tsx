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
  title: "Coachella Valley Cabinetry",
  description:
    "Upgrade your kitchen with beautifully crafted cabinetry, professional refacing, or a fresh refinished look - all tailored to your home & style.",
};

const cabinetryComparisons = [
  {
    id: 1,
    beforeImg: "/images/cabinetry-before-1.jpg",
    afterImg: "/images/cabinetry-hero.jpg",
    title: "Palm Desert Rift White Oak Custom Cabinetry",
  },
  {
    id: 2,
    beforeImg: "/images/kitchen-before-2.jpg",
    afterImg: "/images/kitchen-after-2.jpg",
    title: "Palm Springs Built-In Pantry & Soft-Close Drawers",
  },
  {
    id: 3,
    beforeImg: "/images/kitchen-before-3.jpg",
    afterImg: "/images/kitchen-after-3.jpg",
    title: "Rancho Mirage Architectural Millwork & Storage",
  },
];

export default function CabinetryPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#111111] text-white selection:bg-black selection:text-white font-sans pb-16 sm:pb-0">
      <ScrollEffects />
      <Header />
      <Hero
        bgImage="/images/cabinetry-hero.jpg"
        eyebrow="SIMPLIFIED HOME REMODELING"
        heading="CUSTOM CABINETRY & CABINET REMODELING IN COACHELLA VALLEY"
        subtitle="Custom Cabinetry Built to Last."
        description="Upgrade your kitchen with beautifully crafted cabinetry, professional refacing, or a fresh refinished look - all tailored to your home & style."
      />
      <TrustBar />
      <SubCategorySelector serviceSlug="cabinetry" />
      <LocationSelector
        serviceBasePath="/cabinetry"
        title="Select Your City for Cabinetry"
        subtitle="Choose your city below to explore localized cabinet refinishing, refacing, and custom cabinetry options."
      />
      <TransformationVideoSection
        videoSrc="/videos/countertops & cabinetry.mp4"
        label="BEAUTIFUL CABINETRY"
        title="Built Around You."
        description="From custom and semi-custom cabinetry to refacing and refinishing, we create beautiful, functional kitchens tailored to your home and lifestyle."
        features={[
          "Custom & Semi-Custom Cabinets",
          "Cabinet Refacing & Refinishing",
          "Quality Craftsmanship & Installation",
        ]}
        ctaText="REQUEST A PROJECT CONSULTATION"
      />
      <BeforeAfterGallery
        eyebrow="SEE THE DIFFERENCE"
        heading="Before & After."
        subtitle="Real Cabinets. Real Transformations."
        items={cabinetryComparisons}
        ctaText="START YOUR CABINETRY PROJECT"
      />
      <ClientReviews />
      <QuoteSection
        title="READY TO UPGRADE YOUR CABINETRY?"
        subtitle="Let's Create a Kitchen You'll Love."
        description="Whether you’re looking for new custom or semi-custom cabinetry, cabinet refacing, or professional refinishing, we’ll help you find the right solution for your home."
        projectType="Custom Cabinetry"
        cardTitle="Beautiful Cabinetry Starts Here."
      />
      <Footer />
      <StickyBottomBar />
    </main>
  );
}
