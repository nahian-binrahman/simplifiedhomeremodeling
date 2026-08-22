"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Sparkles, Layers, ShieldCheck, Clock } from "lucide-react";

interface ServiceTab {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullTitle: string;
  subtitle: string;
  fullDesc: string;
  features: string[];
  timeline: string;
  warranty: string;
  image: string;
  href: string;
  buttonLabel: string;
}

const servicesData: ServiceTab[] = [
  {
    id: "kitchen",
    number: "01",
    title: "Kitchen Remodeling",
    shortDesc: "Custom cabinetry, waterfall quartz islands & open layouts.",
    fullTitle: "Gourmet Kitchen Transformations",
    subtitle: "Custom Cabinetry • Calacatta Waterfall Islands • Chef-Grade Layouts",
    fullDesc:
      "Turn your kitchen into the centerpiece of your home. We specialize in custom solid-wood cabinetry, dramatic quartz & porcelain waterfall islands, hidden walk-in pantries, and open-concept structural wall removals.",
    features: [
      "Custom flat-panel, rift white oak & shaker cabinetry",
      "Calacatta quartz & book-matched marble waterfall edges",
      "Sub-Zero, Wolf, Thermador & Bosch appliance installations",
      "Architectural under-cabinet & toe-kick LED lighting",
      "Open-concept wall removals & structural steel engineering",
    ],
    timeline: "3 – 6 Weeks",
    warranty: "10-Year Workmanship Warranty",
    image: "/images/kitchen-hero.jpg",
    href: "/kitchen-remodeling",
    buttonLabel: "EXPLORE KITCHEN REMODELING",
  },
  {
    id: "bathroom",
    number: "02",
    title: "Bathroom Remodeling",
    shortDesc: "Spa master ensuites, curbless rain showers & floating vanities.",
    fullTitle: "Resort-Grade Master Ensuites & Spas",
    subtitle: "Curbless Showers • Stone Soaking Tubs • Heated Floors",
    fullDesc:
      "Transform cramped, dated bathrooms into serene, resort-style desert sanctuaries. We engineer zero-threshold curbless rain showers, freestanding matte stone tubs, custom dual floating vanities, and floor-to-ceiling large format porcelain tile.",
    features: [
      "Zero-threshold curbless rain showers with linear drain systems",
      "Freestanding stone resin soaking tubs & floor-mounted faucets",
      "Custom dual floating vanities with quartz undermount sinks",
      "Backlit anti-fog LED mirrors & custom illuminated shampoo niches",
      "Radiant in-floor heating & Schluter-KERDI waterproofing systems",
    ],
    timeline: "2 – 4 Weeks",
    warranty: "10-Year Waterproofing Warranty",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85",
    href: "#quote-form",
    buttonLabel: "GET BATHROOM ESTIMATE",
  },
  {
    id: "countertops",
    number: "03",
    title: "Countertops",
    shortDesc: "Quartz, quartzite, porcelain & natural stone fabrication.",
    fullTitle: "Precision Stone Fabrication & Installation",
    subtitle: "Calacatta Quartz • Taj Mahal Quartzite • Mitred Edge Profiles",
    fullDesc:
      "Elevate your surfaces with laser-templated stone fabrication. We partner with premier stone distributors to deliver flawless book-matched slabs, seamless mitred waterfall edges, and ultra-durable porcelain countertops engineered for desert living.",
    features: [
      "Laser digital templating for 1/16-inch seam precision",
      "Jumbo quartz, quartzite, granite & porcelain slab selections",
      "2-inch to 3-inch built-up & mitred apron edge profiles",
      "Undermount sink cutouts with polished drain grooves",
      "Stain-proof sealant & non-porous antimicrobial surfaces",
    ],
    timeline: "5 – 10 Days",
    warranty: "Lifetime Slab Material Warranty",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    href: "#quote-form",
    buttonLabel: "SELECT STONE SURFACES",
  },
  {
    id: "cabinetry",
    number: "04",
    title: "Cabinetry",
    shortDesc: "Custom architectural millwork, soft-close organizers & built-ins.",
    fullTitle: "Custom Architectural Cabinetry & Millwork",
    subtitle: "Solid Maple • Blum Soft-Close • Walk-in Closets & Pantries",
    fullDesc:
      "Tailor-made storage built to exact architectural specifications. From modern flat-panel rift white oak to classic painted shaker doors, our cabinetry features dovetail joinery, heavy-duty soft-close hardware, and custom organizational inserts.",
    features: [
      "Custom frameless European & full-overlay face-frame designs",
      "Solid maple 5/8-inch dovetailed drawer boxes",
      "Blumotion soft-close concealed hinges & undermount glides",
      "Integrated pull-out spice racks, trash pullouts & appliance garages",
      "Multi-stage catalyzed conversion varnish lacquer finishes",
    ],
    timeline: "2 – 4 Weeks",
    warranty: "Lifetime Hardware Warranty",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85",
    href: "#quote-form",
    buttonLabel: "REQUEST CABINETRY CATALOG",
  },
  {
    id: "flooring",
    number: "05",
    title: "Flooring",
    shortDesc: "European white oak, large-format porcelain & luxury LVP.",
    fullTitle: "Luxury Desert Flooring & Tile Installations",
    subtitle: "European White Oak • Large-Format Porcelain • Luxury Vinyl Plank",
    fullDesc:
      "Create seamless visual flow across every room with premium desert-proven flooring materials. We ensure flawless subfloor leveling, moisture barriers, and continuous transitions without unsightly t-moldings.",
    features: [
      "Wide-plank engineered European white oak with wire-brushed finish",
      "24x48 and 48x48 large-format rectified porcelain tiles",
      "100% waterproof commercial-grade luxury vinyl plank (LVP)",
      "Self-leveling subfloor preparation & acoustic underlayment",
      "Custom flush-mount wood vents & seamless room transitions",
    ],
    timeline: "1 – 2 Weeks",
    warranty: "10-Year Installation Guarantee",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85",
    href: "#quote-form",
    buttonLabel: "GET FLOORING ESTIMATE",
  },
];

export default function HomeServices() {
  const [activeTabId, setActiveTabId] = useState<string>("kitchen");

  const activeService = servicesData.find((s) => s.id === activeTabId) || servicesData[0];

  return (
    <section id="services" className="relative bg-[#0a0a0a] text-white py-20 sm:py-28 lg:py-36 border-b border-white/10 overflow-hidden">
      
      {/* Subtle Architectural Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20 reveal-init">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-gray-400 uppercase heading-condensed mb-3">
            <span className="w-4 h-px bg-white/40" />
            <span>FULL-SERVICE REMODELING CONTRACTOR</span>
            <span className="w-4 h-px bg-white/40" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-white uppercase tracking-tight heading-condensed">
            OUR REMODELING EXPERTISE
          </h2>
          
          <p className="text-sm sm:text-base text-gray-300 mt-4 leading-relaxed font-normal">
            Select a service below to explore our architectural capabilities, materials, and fixed-price timelines across the Coachella Valley.
          </p>
        </div>

        {/* 5 Service Selection Cards / Interactive Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-4 mb-8 sm:mb-14 reveal-init delay-100">
          {servicesData.map((service) => {
            const isActive = service.id === activeTabId;
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setActiveTabId(service.id)}
                className={`p-3.5 sm:p-5 rounded-xl border text-left flex flex-col justify-between transition-all duration-300 transform active:scale-98 cursor-pointer relative group last:col-span-2 sm:last:col-span-1 ${
                  isActive
                    ? "bg-white text-black border-white shadow-2xl scale-[1.02] z-10"
                    : "bg-[#141414] text-white border-white/10 hover:border-white/30 hover:bg-[#1a1a1a]"
                }`}
              >
                {/* Top: Number & Active Indicator */}
                <div className="flex items-center justify-between w-full mb-3">
                  <span
                    className={`text-xs font-mono font-black ${
                      isActive ? "text-black" : "text-gray-400 group-hover:text-white"
                    }`}
                  >
                    {service.number}
                  </span>
                  
                  {isActive ? (
                    <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white/60 transition-colors" />
                  )}
                </div>

                {/* Title */}
                <div>
                  <h3
                    className={`text-base sm:text-lg font-black uppercase tracking-tight heading-condensed ${
                      isActive ? "text-black" : "text-white"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-[11px] sm:text-xs leading-snug line-clamp-2 mt-1 ${
                      isActive ? "text-gray-700 font-medium" : "text-gray-400"
                    }`}
                  >
                    {service.shortDesc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Service Detailed Showcase (Appears below selected tab) */}
        <div className="bg-[#141414] rounded-2xl border border-white/15 overflow-hidden shadow-2xl reveal-init delay-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Column: Rich Details & Specs */}
            <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-8">
              
              <div className="space-y-6">
                
                {/* Badges Bar */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="bg-white text-black font-bold text-[11px] uppercase tracking-wider px-3 py-1 rounded font-mono">
                    SERVICE {activeService.number}
                  </span>

                  <div className="flex items-center gap-1.5 text-xs text-gray-300 font-medium bg-white/5 border border-white/10 px-3 py-1 rounded">
                    <Clock className="w-3.5 h-3.5 text-white" />
                    <span>Timeline: {activeService.timeline}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-gray-300 font-medium bg-white/5 border border-white/10 px-3 py-1 rounded">
                    <ShieldCheck className="w-3.5 h-3.5 text-white" />
                    <span>{activeService.warranty}</span>
                  </div>
                </div>

                {/* Titles */}
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-gray-400 tracking-wider uppercase">
                    {activeService.subtitle}
                  </div>
                  <h3 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-white uppercase tracking-tight leading-[0.95] heading-condensed">
                    {activeService.fullTitle}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                  {activeService.fullDesc}
                </p>

                {/* Features Checklist */}
                <div className="space-y-2.5 pt-2 border-t border-white/10">
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-400 heading-condensed">
                    INCLUDED STANDARDS &amp; MATERIALS
                  </div>
                  {activeService.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-200">
                      <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Bottom Actions */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href={activeService.href}
                  className="px-8 py-4 rounded btn-invert-white font-bold uppercase tracking-wider text-xs sm:text-sm text-center shadow-xl flex items-center justify-center gap-2 group"
                >
                  <span>{activeService.buttonLabel}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="#quote-form"
                  className="px-6 py-4 rounded btn-outline-fill font-bold uppercase tracking-wider text-xs sm:text-sm text-center backdrop-blur-sm"
                >
                  REQUEST CONSULTATION
                </a>
              </div>

            </div>

            {/* Right Column: High-Res Optimized Image & Visual Overlay */}
            <div className="lg:col-span-6 relative min-h-[340px] sm:min-h-[440px] lg:min-h-full overflow-hidden group">
              <Image
                key={activeService.id}
                src={activeService.image}
                alt={activeService.fullTitle}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center brightness-90 group-hover:scale-105 transition-all duration-700 animate-in fade-in zoom-in-95 duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/20 lg:bg-gradient-to-l lg:from-transparent lg:to-[#141414]/80" />

              {/* Location Tag */}
              <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-lg text-xs font-mono text-gray-300 shadow-xl">
                COACHELLA VALLEY MASTER BUILD
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
