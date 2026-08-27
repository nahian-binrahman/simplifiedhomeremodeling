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

export async function generateStaticParams() {
  return ALL_LOCATIONS_LIST.map((loc) => ({
    location: loc.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const loc = LOCATIONS[params.location];
  if (!loc) return {};

  return {
    title: loc.metaTitle,
    description: loc.metaDescription,
    alternates: {
      canonical: `https://simplifiedremodeling.com/kitchen-remodeling/${loc.slug}`,
    },
    openGraph: {
      title: loc.metaTitle,
      description: loc.metaDescription,
      url: `https://simplifiedremodeling.com/kitchen-remodeling/${loc.slug}`,
      siteName: "Simplified Home Remodeling",
      locale: "en_US",
      type: "website",
    },
  };
}

export default function KitchenLocationPage({ params }: PageProps) {
  const loc = LOCATIONS[params.location];

  if (!loc) {
    notFound();
  }

  // JSON-LD LocalBusiness Schema for Google Rich Results
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: `Simplified Home Remodeling - ${loc.name}`,
    description: loc.metaDescription,
    url: `https://simplifiedremodeling.com/kitchen-remodeling/${loc.slug}`,
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
      "Kitchen Remodeling",
      "Custom Cabinetry",
      "Quartz Countertops",
      "Kitchen Island Renovation",
    ],
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#111111] text-white selection:bg-amber-500 selection:text-black font-sans pb-16 sm:pb-0">
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
        eyebrow={`KITCHEN REMODELING IN ${loc.name.toUpperCase()}`}
        heading={loc.heroHeading}
        subtitle={loc.heroSubtitle}
        description={loc.description}
      />

      <TrustBar />

      {/* Location Selector Component */}
      <LocationSelector
        currentLocationSlug={loc.slug}
        serviceBasePath="/kitchen-remodeling"
        title={`Explore Kitchen Remodeling in ${loc.name} & Coachella Valley`}
        subtitle={`Switch between locations to see neighborhood coverage, HOA permit guidelines, and custom kitchen options.`}
      />

      {/* City-Specific Localized Content Section */}
      <section className="py-12 sm:py-16 bg-[#141414] border-b border-white/10">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5" />
              {loc.name}, California Local Expertise
            </div>
            <h2 className="heading-condensed text-3xl sm:text-4xl text-white font-bold tracking-tight uppercase">
              Custom Kitchen Renovation Services in {loc.name}
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mt-3 leading-relaxed">
              {loc.tagline}. We combine fine artisanal carpentry, high-grade stone fabrication, and precision general contracting built specifically for {loc.name} residences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Neighborhoods & Gated Communities */}
            <div className="bg-[#1c1c1c] border border-white/10 rounded-xl p-6 hover:border-amber-500/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
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
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{neighborhood}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Local Architectural Styles */}
            <div className="bg-[#1c1c1c] border border-white/10 rounded-xl p-6 hover:border-amber-500/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="heading-condensed text-xl text-white font-bold mb-2">
                Popular {loc.name} Styles
              </h3>
              <p className="text-xs text-gray-400 mb-3">
                Tailored to regional architecture & desert climate
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {loc.popularStyles.map((style, i) => (
                  <span key={i} className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs text-amber-200 font-medium">
                    {style}
                  </span>
                ))}
              </div>
              <ul className="space-y-1.5 text-xs text-gray-300">
                {loc.localHighlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Permits & HOA Compliance */}
            <div className="bg-[#1c1c1c] border border-white/10 rounded-xl p-6 hover:border-amber-500/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="heading-condensed text-xl text-white font-bold mb-2">
                Permits & HOA Approvals
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                {loc.hoaPermitNotes}
              </p>
              <div className="pt-3 border-t border-white/10 text-xs text-amber-400 flex items-center gap-1.5 font-semibold">
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
      <TransformationVideoSection videoSrc="/videos/remodeling-video.mp4" />

      {/* Showcase Gallery */}
      <BeforeAfterGallery />

      {/* Reviews */}
      <ClientReviews />

      {/* Quote Section Tailored to Location */}
      <QuoteSection
        title={`READY TO REMODEL YOUR ${loc.name.toUpperCase()} KITCHEN?`}
        subtitle={`Let's Create a Kitchen You'll Love in ${loc.name}.`}
        description={`Get your free in-home consultation and detailed itemized estimate in ${loc.name}, CA today.`}
        projectType={`Kitchen Remodel - ${loc.name}`}
      />

      <Footer />
      <StickyBottomBar />
    </main>
  );
}
