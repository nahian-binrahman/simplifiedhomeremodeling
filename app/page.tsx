import React from "react";
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

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#111111] text-white selection:bg-black selection:text-white font-sans pb-16 sm:pb-0">
      <ScrollEffects />
      <Header />
      <Hero />
      <TrustBar />
      <TransformationVideoSection />
      <BeforeAfterGallery />
      <ClientReviews />
      <QuoteSection />
      <Footer />
      <StickyBottomBar />
    </main>
  );
}
