import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
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
import { SUBCATEGORIES } from "@/lib/subcategories";
import { LOCATIONS, ALL_LOCATIONS_LIST } from "@/lib/locations";
import { BUSINESS } from "@/lib/business";
import { MapPin, ShieldCheck, FileText, Sparkles, CheckCircle2, Home } from "lucide-react";

interface PageProps {
  params: {
    service: string;
    subCategory: string;
    location: string;
  };
}

export async function generateStaticParams() {
  const params: { service: string; subCategory: string; location: string }[] = [];
  
  for (const sub of Object.values(SUBCATEGORIES)) {
    for (const loc of ALL_LOCATIONS_LIST) {
      params.push({
        service: sub.serviceSlug,
        subCategory: sub.subCategorySlug,
        location: loc.slug,
      });
    }
  }

  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const sub = SUBCATEGORIES[params.subCategory];
  const loc = LOCATIONS[params.location];
  if (!sub || !loc || sub.serviceSlug !== params.service) return {};

  const title = sub.metaTitleTemplate.replace("{location}", loc.name);
  const description = sub.metaDescTemplate.replace("{location}", loc.name);

  return {
    title,
    description,
    alternates: {
      canonical: `https://simplifiedremodeling.com/${params.service}/${sub.subCategorySlug}/${loc.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://simplifiedremodeling.com/${params.service}/${sub.subCategorySlug}/${loc.slug}`,
      siteName: "Simplified Home Remodeling",
      locale: "en_US",
      type: "website",
    },
  };
}

export default function SubCategoryLocationPage({ params }: PageProps) {
  const sub = SUBCATEGORIES[params.subCategory];
  const loc = LOCATIONS[params.location];

  if (!sub || !loc || sub.serviceSlug !== params.service) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: `Simplified Home Remodeling - ${sub.title} in ${loc.name}`,
    description: sub.metaDescTemplate.replace("{location}", loc.name),
    url: `https://simplifiedremodeling.com/${params.service}/${sub.subCategorySlug}/${loc.slug}`,
    telephone: BUSINESS.phone,
    areaServed: {
      "@type": "AdministrativeArea",
      name: `${loc.name}, California`,
    },
    serviceType: [
      sub.title,
      sub.serviceTitle,
      "Custom Renovation",
    ],
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#111111] text-white selection:bg-white selection:text-black font-sans pb-16 sm:pb-0">
      <Script
        id="subcategory-location-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollEffects />
      <Header />

      <Hero
        bgImage={sub.heroImage}
        eyebrow={`${sub.numberPrefix} ${sub.title.toUpperCase()} IN ${loc.name.toUpperCase()}`}
        heading={loc.heroHeading}
        subtitle={`${sub.title} Crafted for ${loc.name} Living.`}
        description={`Specialized ${sub.title.toLowerCase()} installation across ${loc.name}, CA. ${sub.description}`}
      />

      <TrustBar />

      {/* Subcategory Switcher Tab Bar */}
      <SubCategorySelector
        serviceSlug={params.service}
        currentSubCategorySlug={sub.subCategorySlug}
        locationSlug={loc.slug}
      />

      {/* Localized City + Subcategory Information */}
      <section className="py-14 bg-[#141414] border-b border-white/10">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-white/90 text-xs font-semibold uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5 text-white" />
              {loc.name}, California • {sub.title}
            </div>
            <h2 className="heading-condensed text-3xl sm:text-4xl text-white font-bold tracking-tight uppercase">
              {sub.title} Services in {loc.name}
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mt-2 leading-relaxed">
              {sub.tagline}. Designed and installed to withstand the Coachella Valley climate and tailored to {loc.name} HOA standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Neighborhoods & Gated Communities */}
            <div className="bg-[#1c1c1c] border border-white/10 rounded-xl p-6 hover:border-white/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/15 flex items-center justify-center text-white mb-4">
                <Home className="w-5 h-5" />
              </div>
              <h3 className="heading-condensed text-xl text-white font-bold mb-2">
                {loc.name} Neighborhoods
              </h3>
              <p className="text-xs text-gray-400 mb-3">
                ZIP Codes: {loc.zipCodes}
              </p>
              <ul className="space-y-2 text-xs text-gray-300">
                {loc.neighborhoods.map((n, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white/80 shrink-0" />
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications & Standards */}
            <div className="bg-[#1c1c1c] border border-white/10 rounded-xl p-6 hover:border-white/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/15 flex items-center justify-center text-white mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="heading-condensed text-xl text-white font-bold mb-2">
                Key Features &amp; Specs
              </h3>
              <p className="text-xs text-gray-400 mb-3">
                Commercial grade durability &amp; aesthetics
              </p>
              <ul className="space-y-2 text-xs text-gray-300">
                {sub.keyFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-white/80 font-bold">•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* HOA & Permits */}
            <div className="bg-[#1c1c1c] border border-white/10 rounded-xl p-6 hover:border-white/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/15 flex items-center justify-center text-white mb-4">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="heading-condensed text-xl text-white font-bold mb-2">
                Permits &amp; Compliance
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                {loc.hoaPermitNotes}
              </p>
              <div className="pt-3 border-t border-white/10 text-xs text-white/90 flex items-center gap-1.5 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                Licensed &amp; Insured ({BUSINESS.cslbNumber})
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Location Selector for this SubCategory */}
      <LocationSelector
        currentLocationSlug={loc.slug}
        serviceBasePath={`/${params.service}/${sub.subCategorySlug}`}
        title={`Explore ${sub.title} in Other Coachella Valley Cities`}
        subtitle={`Switch locations to view local ${sub.title.toLowerCase()} details and estimates.`}
      />

      <TransformationVideoSection videoSrc="/videos/remodeling-video.mp4" />
      <BeforeAfterGallery />
      <ClientReviews />

      <QuoteSection
        title={`READY FOR ${sub.title.toUpperCase()} IN ${loc.name.toUpperCase()}?`}
        subtitle={`Let's Upgrade Your Home in ${loc.name}.`}
        description={`Get your free in-home consultation and itemized estimate for ${sub.title} in ${loc.name}, CA.`}
        projectType={`${sub.title} - ${loc.name}`}
      />

      <Footer />
      <StickyBottomBar />
    </main>
  );
}
