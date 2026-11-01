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
import type { KeyFeatureItem } from "@/lib/subcategories";
import { BUSINESS } from "@/lib/business";
import { CheckCircle2, ShieldCheck, Sparkles, Layers, Ruler, Shield, MapPin, CalendarCheck, Award } from "lucide-react";

interface PageProps {
  params: {
    service: string;
    subCategory: string;
  };
}

export async function generateStaticParams() {
  return Object.values(SUBCATEGORIES).map((sub) => ({
    service: sub.serviceSlug,
    subCategory: sub.subCategorySlug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const sub = SUBCATEGORIES[params.subCategory];
  if (!sub || sub.serviceSlug !== params.service) return {};

  const title = sub.metaTitleTemplate.includes("{location}")
    ? `${sub.title} in Coachella Valley | Simplified Home Remodeling`
    : sub.metaTitleTemplate;
  const description = sub.metaDescTemplate.includes("{location}")
    ? `${sub.tagline}. ${sub.description}`
    : sub.metaDescTemplate;

  return {
    title,
    description,
    alternates: {
      canonical: `https://simplifiedremodeling.com/${params.service}/${sub.subCategorySlug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://simplifiedremodeling.com/${params.service}/${sub.subCategorySlug}`,
      siteName: "Simplified Home Remodeling",
      locale: "en_US",
      type: "website",
    },
  };
}

function getCardIcon(icon?: string) {
  switch (icon) {
    case "shield": return <Shield className="w-5 h-5" />;
    case "layers": return <Layers className="w-5 h-5" />;
    case "ruler": return <Ruler className="w-5 h-5" />;
    case "sparkles": return <Sparkles className="w-5 h-5" />;
    default: return <CheckCircle2 className="w-5 h-5" />;
  }
}

function getQuoteIcon(icon: string) {
  switch (icon) {
    case "calendar": return <CalendarCheck className="w-4 h-4" />;
    case "map-pin": return <MapPin className="w-4 h-4" />;
    case "award": return <Award className="w-4 h-4" />;
    case "shield": return <ShieldCheck className="w-4 h-4" />;
    default: return <CheckCircle2 className="w-4 h-4" />;
  }
}

export default function SubCategoryPage({ params }: PageProps) {
  const sub = SUBCATEGORIES[params.subCategory];

  if (!sub || sub.serviceSlug !== params.service) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: sub.title,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Simplified Home Remodeling",
      telephone: BUSINESS.phone,
    },
    description: sub.description,
    areaServed: "Coachella Valley, California",
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#111111] text-white selection:bg-white selection:text-black font-sans pb-16 sm:pb-0">
      <Script
        id="subcategory-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollEffects />
      <Header />

      <Hero
        bgImage={sub.heroImage}
        eyebrow={sub.heroEyebrow.startsWith(sub.numberPrefix) ? sub.heroEyebrow : `${sub.numberPrefix} ${sub.heroEyebrow}`}
        heading="COACHELLA VALLEY"
        subtitle={sub.tagline}
        description={sub.description}
        primaryCta={sub.heroCta}
        trustStatement={sub.heroTrustStatement}
      />

      <TrustBar />

      <SubCategorySelector
        serviceSlug={params.service}
        currentSubCategorySlug={sub.subCategorySlug}
      />

      {/* Subcategory Features & Specs Section */}
      <section className="py-14 bg-[#141414] border-b border-white/10">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            {(sub.badgeLabel || !sub.hideSpecializedBadge) && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-white/90 text-xs font-semibold uppercase tracking-wider mb-2.5">
                <Sparkles className="w-3.5 h-3.5" />
                {sub.badgeLabel || `${sub.numberPrefix} Specialized Service`}
              </span>
            )}
            <h2 className="heading-condensed text-3xl sm:text-4xl text-white font-bold tracking-tight uppercase">
              {sub.standardsHeading || `${sub.title} Standards & Craftsmanship`}
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mt-3 leading-relaxed max-w-2xl">
              {sub.standardsDescription || sub.description}
            </p>
          </div>

          <div className={`grid grid-cols-1 gap-6 ${sub.keyFeatures.length === 4 ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3"}`}>
            {sub.keyFeatures.map((feature, i) => {
              const isObj = typeof feature === "object" && feature !== null;
              const cardTitle = isObj && feature.title ? feature.title : `Specification ${i + 1}`;
              const cardText = isObj ? feature.text : feature;
              const cardIcon = isObj ? (feature as KeyFeatureItem).icon : undefined;
              return (
                <div key={i} className="bg-[#1c1c1c] border border-white/10 rounded-xl p-6 hover:border-white/25 hover:bg-[#212121] transition-all duration-200 flex flex-col gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/15 flex items-center justify-center text-white shrink-0 group-hover:bg-white/10 transition-colors">
                    {getCardIcon(cardIcon)}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-wider leading-snug">
                      {cardTitle}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {cardText}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LVP Premium Features Section (only shown when lvpFeatures exists) */}
      {sub.lvpFeatures && sub.lvpFeatures.length > 0 && (
        <section className="py-12 bg-[#111111] border-b border-white/10">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <div className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase mb-2">
                AVAILABLE OPTIONS
              </div>
              <h2 className="heading-condensed text-2xl sm:text-3xl text-white font-bold tracking-tight uppercase">
                PREMIUM LVP FLOORING FEATURES
              </h2>
              <p className="text-gray-400 text-sm mt-2 max-w-2xl">
                Features and specifications vary depending on the product selected. Our team will help you choose the right flooring for your home and lifestyle.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sub.lvpFeatures.map((feat, i) => (
                <div key={i} className="flex items-center gap-3 bg-[#1a1a1a] border border-white/8 rounded-lg px-4 py-3.5 hover:border-white/20 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-white/60 shrink-0" />
                  <span className="text-sm text-gray-300">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Location Selector linking to /service/subCategory/[city] */}
      <LocationSelector
        serviceBasePath={`/${params.service}/${sub.subCategorySlug}`}
        title={`Select Your City for ${sub.title}`}
        subtitle={`Choose your Coachella Valley community to see city-specific ${sub.title} projects, local HOA guidelines, and instant estimates.`}
      />

      <TransformationVideoSection
        videoSrc={sub.serviceSlug === "flooring" ? "/videos/floor-transformation.mp4" : "/videos/remodeling-video.mp4"}
        label={sub.videoSection?.label || "SEE THE TRANSFORMATION"}
        title={sub.videoSection?.title || "See How We Remodel Coachella Valley Kitchens"}
        description={sub.videoSection?.description || "See the craftsmanship, process and attention to detail behind a Simplified Home Remodeling project."}
        features={sub.videoSection?.features}
        ctaText={sub.videoSection?.ctaText || "REQUEST A PROJECT CONSULTATION"}
      />
      <BeforeAfterGallery />
      <ClientReviews />

      <QuoteSection
        title={sub.quoteSection?.title || `READY FOR ${sub.title.toUpperCase()}?`}
        subtitle={sub.quoteSection?.subtitle || "Precision Craftsmanship Built for Desert Living."}
        description={sub.quoteSection?.description || "Get your free in-home consultation and itemized estimate today."}
        projectType={`${sub.title}`}
        phoneSubtext={sub.quoteSection?.phoneSubtext}
        trustItems={sub.quoteSection?.trustItems}
      />

      <Footer />
      <StickyBottomBar />
    </main>
  );
}
