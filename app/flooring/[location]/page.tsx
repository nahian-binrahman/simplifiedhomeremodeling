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
import { LOCATIONS, ALL_LOCATIONS_LIST } from "@/lib/locations";
import { BUSINESS } from "@/lib/business";
import { MapPin, ShieldCheck, FileText, CheckCircle2, Award, Sparkles, Layers } from "lucide-react";

interface PageProps {
  params: {
    location: string;
  };
}

const flooringComparisons = [
  {
    id: 1,
    beforeImg: "/images/kitchen-before-1.jpg",
    afterImg: "/images/flooring-hero.jpg",
    title: "European White Oak Hardwood & Tile Layout",
  },
  {
    id: 2,
    beforeImg: "/images/bath-before-1.jpg",
    afterImg: "/images/bath-after-1.jpg",
    title: "Large Format Porcelain Tile Installation",
  },
  {
    id: 3,
    beforeImg: "/images/kitchen-before-2.jpg",
    afterImg: "/images/kitchen-after-2.jpg",
    title: "Desert Luxury Vinyl Plank Transformation",
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

  const title = `Flooring Installation in ${loc.name}, CA | Simplified Home Remodeling`;
  const description = `Professional flooring installation in ${loc.name}, CA. Luxury vinyl plank (LVP), waterproof laminate, large-format porcelain tile, and expert subfloor leveling. Free estimate.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://simplifiedremodeling.com/flooring/${loc.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://simplifiedremodeling.com/flooring/${loc.slug}`,
      siteName: "Simplified Home Remodeling",
      locale: "en_US",
      type: "website",
    },
  };
}

export default function FlooringLocationPage({ params }: PageProps) {
  const loc = LOCATIONS[params.location];

  if (!loc) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: `Simplified Home Remodeling - Flooring in ${loc.name}`,
    description: `Professional flooring installation in ${loc.name}, CA. Luxury vinyl plank, waterproof laminate, large-format porcelain tile, and natural stone flooring.`,
    url: `https://simplifiedremodeling.com/flooring/${loc.slug}`,
    telephone: BUSINESS.phone,
    areaServed: {
      "@type": "AdministrativeArea",
      name: `${loc.name}, California`,
    },
    serviceType: ["Flooring Installation", "Luxury Vinyl Plank", "Porcelain Tile", "Subfloor Leveling"],
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#111111] text-white selection:bg-white selection:text-black font-sans pb-16 sm:pb-0">
      <Script
        id="flooring-location-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollEffects />
      <Header />

      <Hero
        bgImage="/images/porcelain-tile-hero.jpg"
        eyebrow={`FLOORING INSTALLATION IN ${loc.name.toUpperCase()}`}
        heading={loc.heroHeading}
        title="FLOORING INSTALLATION"
        subtitle={`Beautiful Floors. Expertly Installed in ${loc.name}.`}
        description={`Transform your ${loc.name} home with professionally installed luxury vinyl plank, waterproof laminate, and large-format porcelain tile. With over 20 years of remodeling experience, we deliver precision floor preparation, leveling, and seamless finishing.`}
        primaryCta="GET A FREE FLOORING ESTIMATE"
        trustStatement="Licensed General Contractor • 20+ Years of Experience • Financing Available"
        overlay="left"
      />

      <TrustBar />

      {/* Subcategory Switcher Tab Bar */}
      <SubCategorySelector
        serviceSlug="flooring"
        locationSlug={loc.slug}
      />

      {/* Localized City + Flooring Information */}
      <section className="py-14 bg-[#141414] border-b border-white/10">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-white/90 text-xs font-semibold uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5 text-[#cbb08a]" />
              <span>{loc.name}, CA — Local Installation Standards</span>
            </div>
            <h2 className="heading-condensed text-3xl sm:text-4xl text-white font-bold tracking-tight uppercase">
              Flooring Crafted for {loc.name} Homes
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mt-3 leading-relaxed">
              Desert climate, concrete slab foundations, and country club HOA regulations in {loc.name} demand specialized flooring preparation. From acoustic underlayment in multi-family units to moisture mitigation and self-leveling across slab foundations, our team handles every stage with master craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Neighborhoods Served */}
            <div className="bg-[#1c1c1c] border border-white/10 rounded-xl p-6 hover:border-white/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/15 flex items-center justify-center text-[#cbb08a] mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="heading-condensed text-xl text-white font-bold mb-2">
                Communities Served
              </h3>
              <p className="text-xs text-gray-400 mb-3">
                Active projects &amp; gated community experience
              </p>
              <ul className="space-y-1.5 text-xs text-gray-300">
                {loc.neighborhoods.map((n, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#cbb08a]" />
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Flooring Styles */}
            <div className="bg-[#1c1c1c] border border-white/10 rounded-xl p-6 hover:border-white/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/15 flex items-center justify-center text-[#cbb08a] mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="heading-condensed text-xl text-white font-bold mb-2">
                Popular Flooring in {loc.name}
              </h3>
              <p className="text-xs text-gray-400 mb-3">
                Desert-proven aesthetics &amp; durability
              </p>
              <ul className="space-y-2 text-xs text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#cbb08a] shrink-0" />
                  <span>Large-Format 24×48 Porcelain Tile</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#cbb08a] shrink-0" />
                  <span>Rigid-Core Waterproof Luxury Vinyl Plank (LVP)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#cbb08a] shrink-0" />
                  <span>Embossed Natural Wood-Look Waterproof Laminate</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#cbb08a] shrink-0" />
                  <span>Travertine &amp; Limestone-Look Surfaces</span>
                </li>
              </ul>
            </div>

            {/* HOA & Subfloor Standards */}
            <div className="bg-[#1c1c1c] border border-white/10 rounded-xl p-6 hover:border-white/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/15 flex items-center justify-center text-[#cbb08a] mb-4">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="heading-condensed text-xl text-white font-bold mb-2">
                HOA &amp; Slab Preparation
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                {loc.hoaPermitNotes}
              </p>
              <div className="pt-3 border-t border-white/10 text-xs text-white/90 flex items-center gap-1.5 font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#cbb08a]" />
                <span>{loc.county} Licensed &amp; Insured</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Video Transformation Section */}
      <TransformationVideoSection
        videoSrc="/videos/floor-transformation.mp4"
        label="THE DIFFERENCE IS IN THE DETAILS"
        title={`Flooring Designed for Real Life in ${loc.name}`}
        description="Beautiful flooring is the foundation of every great space. From luxury vinyl plank to large-format porcelain tile, we deliver precision installation, lasting durability, and a seamless finish throughout your home."
        features={[
          "Luxury Vinyl Plank & Waterproof Flooring",
          "Large-Format Porcelain & Ceramic Tile",
          "Expert Installation & Subfloor Preparation",
        ]}
        ctaText="GET A FREE FLOORING ESTIMATE"
      />

      <BeforeAfterGallery
        eyebrow="SEE THE DIFFERENCE"
        heading="Before & After."
        subtitle={`Flooring Transformations in ${loc.name} & Coachella Valley.`}
        items={flooringComparisons}
        ctaText="START YOUR FLOORING PROJECT"
      />

      <ClientReviews />

      {/* Location Selector linking to other cities */}
      <LocationSelector
        serviceBasePath="/flooring"
        currentLocationSlug={loc.slug}
        title="Explore Flooring Across Coachella Valley"
        subtitle="Compare flooring installations, HOA requirements, and materials across our primary desert service areas."
      />

      <QuoteSection
        title={`READY TO TRANSFORM YOUR FLOORS IN ${loc.name.toUpperCase()}?`}
        subtitle="Beautiful Floors Start Here."
        description={`Tell us about your ${loc.name} flooring project and discover beautiful, professionally installed flooring designed for your home. Request your free, no-obligation estimate today.`}
        projectType="Flooring Installation"
        phoneSubtext="Call or text us to discuss your flooring project."
        trustItems={[
          { icon: "calendar", label: "Free In-Home Consultation" },
          { icon: "map-pin", label: `Proudly Serving ${loc.name}` },
          { icon: "award", label: "20+ Years of Remodeling Experience" },
          { icon: "shield", label: "Licensed General Contractor" },
        ]}
      />

      <Footer />
      <StickyBottomBar />
    </main>
  );
}

