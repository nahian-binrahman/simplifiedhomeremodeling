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
    beforeImg: "/images/bathroom-before-client.jpg",
    afterImg: "/images/bathroom-after-client.jpg",
    title: "Palm Desert Modern Walk-In Shower & Vanity Transformation",
  },
  {
    id: 2,
    beforeImg: "/images/bathroom-tub-before-client.jpg",
    afterImg: "/images/bathroom-tub-after-client.jpg",
    title: "Rancho Mirage Freestanding Tub & Walk-In Shower Renovation",
  },
  {
    id: 3,
    beforeImg: "/images/bathroom-shower-before-client.jpg",
    afterImg: "/images/bathroom-shower-after-client.jpg",
    title: "Palm Springs Modern Frameless Glass Shower & Tile Renovation",
  },
];

const bathroomReviews = [
  {
    name: "Lilia Z.",
    source: "Verified Yelp Review",
    timeAgo: "4 months ago",
    text: "Great quality work and my vanity looked amazing! Owner was patient with all my questions and very good communication before the job was scheduled. 10 out of 10, Highly recommended!",
  },
  {
    name: "Jorge M.",
    source: "Verified Yelp Review",
    timeAgo: "1 year ago",
    text: "I recently had the pleasure of working with Juan at Simplified Home Remodeling for a bathroom remodel, and I couldn't be happier with the results. From start to finish, Juan was honest, transparent, and communicative, making the entire process stress-free. His crew was consistently on time, respectful, and kept the work area clean, which I really appreciated. The finished bathroom is absolutely beautiful, and it exceeded my expectations. I'm thrilled with the experience and would highly recommend Juan and his team for any remodeling project!",
  },
  {
    name: "Karli V.",
    source: "Verified Yelp Review",
    timeAgo: "1 year ago",
    text: "I recently had my 30-year-old guest bathroom in my new house completely renovated, and I couldn't be happier with the results. From start to finish, Juan and his team were attentive, punctual, and very fair with pricing. They were always accommodating whenever I had questions or new ideas, and handled every request with professionalism and care. It's clear that integrity is a top priority for Juan...he truly stands behind his work and ensures his clients are fully satisfied. The finished bathroom looks beautiful, and the whole process felt smooth and worry-free thanks to he and his team's commitment and attention to detail. I highly recommend Simplified Home Remodeling and plan to work with them again when I remodel my master bathroom in the future!",
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
          "Professional Remodeling Specialist",
        ]}
        ctaText="REQUEST A PROJECT CONSULTATION"
      />
      <BeforeAfterGallery
        eyebrow="SEE THE DIFFERENCE"
        heading="Before & After."
        subtitle="Real Bathrooms. Real Transformations."
        items={bathroomComparisons}
        ctaText="START YOUR BATHROOM REMODEL"
      />
      <ClientReviews items={bathroomReviews} />
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
