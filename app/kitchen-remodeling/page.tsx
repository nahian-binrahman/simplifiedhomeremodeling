import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import LocationSelector from "@/components/LocationSelector";
import TransformationVideoSection from "@/components/TransformationVideoSection";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import ClientReviews from "@/components/ClientReviews";
import QuoteSection from "@/components/QuoteSection";
import Footer from "@/components/Footer";
import ScrollEffects from "@/components/ScrollEffects";
import StickyBottomBar from "@/components/StickyBottomBar";

export const metadata: Metadata = {
  title: "Kitchen Remodeling in Coachella Valley | Simplified Home Remodeling",
  description:
    "Transform your kitchen with expert craftsmanship, custom cabinetry, quartz countertops, and full renovations across Palm Desert, Palm Springs, and Coachella Valley.",
};

export default function KitchenRemodelingPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#111111] text-white selection:bg-black selection:text-white font-sans pb-16 sm:pb-0">
      <ScrollEffects />
      <Header />
      <Hero />
      <TrustBar />
      <LocationSelector
        serviceBasePath="/kitchen-remodeling"
        title="Select Your Coachella Valley Location"
        subtitle="Choose your city below to view localized kitchen remodeling services, HOA guidelines, and local estimates."
      />
      <TransformationVideoSection videoSrc="/videos/remodeling-video.mp4" />
      <BeforeAfterGallery />
      <ClientReviews />
      <QuoteSection
        title="READY TO REMODEL YOUR KITCHEN?"
        subtitle="Let's Create a Kitchen You'll Love."
        description="Get your free consultation and project estimate today."
        projectType="Kitchen Remodel"
      />
      <Footer />
      <StickyBottomBar />
    </main>
  );
}

