import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
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
import { LOCATIONS, ALL_LOCATIONS_LIST } from "@/lib/locations";
import { BUSINESS } from "@/lib/business";
import { MapPin, ShieldCheck, FileText, Sparkles, CheckCircle2, Home } from "lucide-react";

interface PageProps {
  params: {
    location: string;
  };
}

const bathroomComparisons = [
  {
    id: 1,
    beforeImg: "/images/bathroom-before-client.jpg",
    afterImg: "/images/bathroom-after-client.jpg",
    title: "Modern Walk-In Shower & Vanity Transformation",
  },
  {
    id: 2,
    beforeImg: "/images/bathroom-tub-before-client.jpg",
    afterImg: "/images/bathroom-tub-after-client.jpg",
    title: "Freestanding Tub & Walk-In Shower Renovation",
  },
  {
    id: 3,
    beforeImg: "/images/bathroom-shower-before-client.jpg",
    afterImg: "/images/bathroom-shower-after-client.jpg",
    title: "Frameless Glass Shower & Luxury Tile Renovation",
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

export async function generateStaticParams() {
  return ALL_LOCATIONS_LIST.map((loc) => ({
    location: loc.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const loc = LOCATIONS[params.location];
  if (!loc) return {};

  const title = `Bathroom Remodeling in ${loc.name}, CA | Simplified Home Remodeling`;
  const description = `Premier bathroom remodeling in ${loc.name}, CA. Custom walk-in showers, spa master suites, custom vanities, tub conversions, and precision tile work.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://simplifiedremodeling.com/bathroom-remodeling/${loc.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://simplifiedremodeling.com/bathroom-remodeling/${loc.slug}`,
      siteName: "Simplified Home Remodeling",
      locale: "en_US",
      type: "website",
    },
  };
}

export default function BathroomLocationPage({ params }: PageProps) {
  const loc = LOCATIONS[params.location];

  if (!loc) {
    notFound();
  }

  // JSON-LD LocalBusiness Schema for Google Rich Results
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: `Simplified Home Remodeling - Bathroom Remodeling ${loc.name}`,
    description: `Expert bathroom remodeling and renovation services in ${loc.name}, California.`,
    url: `https://simplifiedremodeling.com/bathroom-remodeling/${loc.slug}`,
    telephone: BUSINESS.phone,
    areaServed: {
      "@type": "AdministrativeArea",
      name: `${loc.name}, California`,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: loc.name,
      addressRegion: "CA",
      postalCode: loc.zipCodes.split(",")[0].trim(),
      addressCountry: "US",
    },
    serviceType: [
      "Bathroom Remodeling",
      "Walk-In Showers",
      "Master Bath Renovations",
      "Custom Vanities",
      "Tub-to-Shower Conversions",
      "Tile Installation",
    ],
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#111111] text-white selection:bg-white selection:text-black font-sans pb-16 sm:pb-0">
      {/* Inject Structured Data */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ScrollEffects />
      <Header />

      {/* City-Specific Hero */}
      <Hero
        bgImage="/images/bathroom-hero.jpg"
        eyebrow={`BATHROOM REMODELING IN ${loc.name.toUpperCase()}`}
        heading={`BATHROOM REMODELING IN ${loc.name.toUpperCase()}`}
        subtitle={`Transform Your Bathroom in ${loc.name}.`}
        description={`Expert craftsmanship in complete bathroom remodeling, custom showers, tub conversions, vanities, and tile installations designed for ${loc.name} homes and built to last.`}
      />

      <TrustBar />

      {/* Location Selector Component */}
      <LocationSelector
        currentLocationSlug={loc.slug}
        serviceBasePath="/bathroom-remodeling"
        title={`Explore Bathroom Remodeling in ${loc.name} & Coachella Valley`}
        subtitle={`Switch between locations to see neighborhood coverage, HOA permit guidelines, and custom bathroom options.`}
      />

      {/* City-Specific Localized Content Section */}
      <section className="py-12 sm:py-16 bg-[#141414] border-b border-white/10">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-white/90 text-xs font-semibold uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5 text-white" />
              {loc.name}, California Local Bathroom Expertise
            </div>
            <h2 className="heading-condensed text-3xl sm:text-4xl text-white font-bold tracking-tight uppercase">
              Custom Bathroom Renovation Services in {loc.name}
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mt-3 leading-relaxed">
              {loc.tagline}. We combine curbless zero-threshold showers, freestanding soaking tubs, moisture-resistant cabinetry, and artisan tile work engineered for {loc.name} desert living.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Neighborhoods & Gated Communities */}
            <div className="bg-[#1c1c1c] border border-white/10 rounded-xl p-6 hover:border-white/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/15 flex items-center justify-center text-white mb-4">
                <Home className="w-5 h-5" />
              </div>
              <h3 className="heading-condensed text-xl text-white font-bold mb-2">
                Neighborhoods Served
              </h3>
              <p className="text-xs text-gray-400 mb-3">
                ZIP Codes: {loc.zipCodes}
              </p>
              <ul className="space-y-2 text-xs text-gray-300">
                {loc.neighborhoods.map((neighborhood, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white/80 shrink-0" />
                    <span>{neighborhood}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Local Architectural Styles */}
            <div className="bg-[#1c1c1c] border border-white/10 rounded-xl p-6 hover:border-white/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/15 flex items-center justify-center text-white mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="heading-condensed text-xl text-white font-bold mb-2">
                Popular {loc.name} Styles
              </h3>
              <p className="text-xs text-gray-400 mb-3">
                Tailored to desert architecture & spa luxury
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {loc.popularStyles.map((style, i) => (
                  <span key={i} className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs text-gray-200 font-medium">
                    {style}
                  </span>
                ))}
              </div>
              <ul className="space-y-1.5 text-xs text-gray-300">
                {loc.localHighlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-white/80 font-bold">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Permits & HOA Compliance */}
            <div className="bg-[#1c1c1c] border border-white/10 rounded-xl p-6 hover:border-white/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/15 flex items-center justify-center text-white mb-4">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="heading-condensed text-xl text-white font-bold mb-2">
                Permits & HOA Approvals
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                {loc.hoaPermitNotes}
              </p>
              <div className="pt-3 border-t border-white/10 text-xs text-white/90 flex items-center gap-1.5 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                Licensed & Insured ({BUSINESS.cslbNumber})
              </div>
            </div>

          </div>

          {/* Localized FAQ */}
          {loc.faq && loc.faq.length > 0 && (
            <div className="mt-12 pt-8 border-t border-white/10">
              <h3 className="heading-condensed text-2xl text-white font-bold mb-6">
                Frequently Asked Questions in {loc.name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {loc.faq.map((faqItem, idx) => (
                  <div key={idx} className="p-5 rounded-lg bg-[#1a1a1a] border border-white/5">
                    <h4 className="text-sm font-bold text-white mb-2">
                      {faqItem.question}
                    </h4>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {faqItem.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Video Transformation Section */}
      <TransformationVideoSection
        videoSrc="/videos/bathroom-remodeling.mp4"
        label="SEE THE TRANSFORMATION"
        title="Designed for Comfort. Built to Last."
        description="See how quality craftsmanship and thoughtful remodeling can transform your master bath or guest suite into a spa-like retreat built with lasting materials."
        features={[
          "Luxury Master Ensuites & Walk-In Showers",
          "Custom Tile, Slabs & Curbless Entries",
          "Remodeling Specialist",
        ]}
        ctaText="REQUEST A PROJECT CONSULTATION"
      />

      {/* Showcase Gallery */}
      <BeforeAfterGallery
        eyebrow="SEE THE DIFFERENCE"
        heading="Before & After."
        subtitle="Real Bathrooms. Real Transformations."
        items={bathroomComparisons}
        ctaText="START YOUR BATHROOM REMODEL"
      />

      {/* Reviews */}
      <ClientReviews items={bathroomReviews} />

      {/* Quote Section Tailored to Location */}
      <QuoteSection
        title={`READY TO REMODEL YOUR ${loc.name.toUpperCase()} BATHROOM?`}
        subtitle={`Let's Create a Bathroom You'll Love in ${loc.name}.`}
        description={`Get your free in-home consultation and detailed itemized estimate in ${loc.name}, CA today.`}
        projectType={`Bathroom Remodel - ${loc.name}`}
      />

      <Footer />
      <StickyBottomBar />
    </main>
  );
}
