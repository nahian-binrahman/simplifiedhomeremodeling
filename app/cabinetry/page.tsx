import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import TransformationVideoSection from "@/components/TransformationVideoSection";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import ClientReviews from "@/components/ClientReviews";
import QuoteSection from "@/components/QuoteSection";
import Footer from "@/components/Footer";
import ScrollEffects from "@/components/ScrollEffects";
import StickyBottomBar from "@/components/StickyBottomBar";

export const metadata: Metadata = {
  title: "Custom Cabinetry in Coachella Valley | Simplified Home Remodeling",
  description:
    "High-end custom and semi-custom cabinetry designed for beauty, maximum storage, and lasting durability across Palm Desert, Palm Springs, and Coachella Valley.",
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
        eyebrow="CUSTOM CABINETRY IN"
        heading="COACHELLA VALLEY"
        subtitle="Custom Cabinetry Built to Last."
        description="High-end custom and semi-custom cabinetry designed for beauty, maximum storage, and lasting durability."
      />
      <TrustBar />
      <TransformationVideoSection
        videoSrc="/videos/countertops & cabinetry.mp4"
        label="SEE THE TRANSFORMATION"
        title="Custom Storage Built for Real Life."
        description="See how custom architectural millwork, soft-close hardware, and bespoke finishes bring elegance and effortless organization to your home."
        features={[
          "Architectural Millwork & Custom Built-Ins",
          "Rift White Oak, Walnut & Painted Finishes",
          "Professional Master Craftsmanship",
        ]}
        ctaText="START YOUR CABINETRY PROJECT"
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
        subtitle="Let's Build Storage You'll Love."
        description="Get your free consultation and project estimate today."
        projectType="Custom Cabinetry"
      />
      <Footer />
      <StickyBottomBar />
    </main>
  );
}
