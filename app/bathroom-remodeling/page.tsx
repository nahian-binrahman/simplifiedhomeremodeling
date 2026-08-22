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
  title: "Bathroom Remodeling in Coachella Valley | Simplified Home Remodeling",
  description:
    "Expert craftsmanship, luxury bath conversions, and custom tile installations built around your home by licensed local contractors across Palm Desert, Palm Springs, and Coachella Valley.",
};

const bathroomComparisons = [
  {
    id: 1,
    beforeImg: "/images/bath-before-1.jpg",
    afterImg: "/images/bath-after-1.jpg",
    title: "Palm Desert Master Ensuite Transformation",
  },
  {
    id: 2,
    beforeImg: "/images/bath-before-2.jpg",
    afterImg: "/images/bath-after-2.jpg",
    title: "Palm Springs Curbless Shower & Floating Vanity",
  },
  {
    id: 3,
    beforeImg: "/images/bath-before-3.jpg",
    afterImg: "/images/bath-after-3.jpg",
    title: "Rancho Mirage Luxury Spa Bath Renovation",
  },
];

export default function BathroomRemodelingPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#111111] text-white selection:bg-black selection:text-white font-sans pb-16 sm:pb-0">
      <ScrollEffects />
      <Header />
      <Hero
        bgImage="/images/bathroom-hero.jpg"
        eyebrow="BATHROOM REMODELING IN"
        heading="COACHELLA VALLEY"
        subtitle="Transform Your Bathroom."
        description="Expert craftsmanship, luxury bath conversions, and custom tile installations built around your home by licensed local contractors."
      />
      <TrustBar />
      <TransformationVideoSection
        videoSrc="/videos/bathroom-remodeling.mp4"
        label="SEE THE TRANSFORMATION"
        title="A Bathroom Designed for Real Life."
        description="See how quality craftsmanship and thoughtful remodeling can transform your master bath or guest suite into a spa-like retreat built with lasting materials."
        features={[
          "Luxury Master Ensuites & Walk-In Showers",
          "Custom Tile, Slabs & Curbless Entries",
          "Professional Master Craftsmanship",
        ]}
        ctaText="START YOUR BATHROOM REMODEL"
      />
      <BeforeAfterGallery
        eyebrow="SEE THE DIFFERENCE"
        heading="Before & After."
        subtitle="Real Bathrooms. Real Transformations."
        items={bathroomComparisons}
        ctaText="START YOUR BATHROOM REMODEL"
      />
      <ClientReviews />
      <QuoteSection
        title="READY TO REMODEL YOUR BATHROOM?"
        subtitle="Let's Create a Bathroom You'll Love."
        description="Get your free consultation and project estimate today."
        projectType="Bathroom Remodel"
      />
      <Footer />
      <StickyBottomBar />
    </main>
  );
}
