"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ArrowRight, Check, ShieldCheck } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  timeline: string;
  image: string;
  popular?: boolean;
}

const services: ServiceItem[] = [
  {
    id: "kitchen",
    title: "Gourmet Kitchen Transformations",
    subtitle: "Custom Islands • Luxury Stone • Chef-Grade Layouts",
    description:
      "Turn your kitchen into the centerpiece of your home. We specialize in custom solid-wood cabinetry, dramatic quartz & porcelain waterfall islands, hidden walk-in pantries, and seamless appliance integration.",
    features: [
      "Custom flat-panel, rift oak & shaker cabinetry",
      "Calacatta quartz & book-matched marble waterfalls",
      "Sub-Zero, Wolf, Thermador appliance installations",
      "Architectural under-cabinet & toe-kick LED lighting",
      "Open-concept wall removal & structural engineering",
    ],
    timeline: "3 – 6 Weeks",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    popular: true,
  },
  {
    id: "bathroom",
    title: "Spa-Grade Master Ensuites",
    subtitle: "Curbless Showers • Soaking Tubs • Floating Vanities",
    description:
      "Transform cramped, dated bathrooms into serene, resort-style desert spas. We engineer curbless rain showers, freestanding matte tubs, custom dual floating vanities, and radiant heated porcelain floors.",
    features: [
      "Zero-threshold curbless rain showers with linear drains",
      "Freestanding stone resin soaking tubs",
      "Double floating vanities with quartz undermount sinks",
      "Backlit anti-fog LED mirrors & custom niches",
      "Floor-to-ceiling large format porcelain & terrazzo tile",
    ],
    timeline: "2 – 4 Weeks",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "whole-home",
    title: "Whole-Home & Mid-Century Modern",
    subtitle: "Open Layouts • Fleetwood Sliders • Structural Re-Engineering",
    description:
      "Re-imagine your entire living environment. We specialize in desert modern architectural conversions, removing interior structural walls, adding expansive glass sliding walls, and unifying interior finishes.",
    features: [
      "Complete interior demolition & architectural re-layout",
      "Fleetwood & Western multi-slide glass patio doors",
      "Continuous European white oak & micro-cement flooring",
      "Recessed LED trims, smart home automation & HVAC upgrades",
      "Full desert seismic, electrical & plumbing modernization",
    ],
    timeline: "8 – 14 Weeks",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "outdoor-casita",
    title: "Outdoor Living, Patio Kitchens & Casitas",
    subtitle: "Built-In BBQ • Modern Pergolas • Guest ADUs",
    description:
      "Maximize the year-round Palm Springs lifestyle with custom outdoor entertainment kitchens, cantilevered shade structures, misting systems, fire features, and detached guest casitas.",
    features: [
      "Stainless steel built-in BBQ, pizza ovens & beverage bars",
      "Custom aluminum & timber louvered pergolas",
      "Integrated desert fire pits & perimeter hardscape",
      "Permitted detached ADUs & guest suites for seasonal visitors",
      "HOA & municipal architectural review management",
    ],
    timeline: "4 – 8 Weeks",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-spacing bg-brand-dark/50 border-b border-white/10">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Tailored Remodeling Services
          </div>
          <h2 className="heading-condensed text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            MASTER CRAFTSMANSHIP FOR EVERY ROOM
          </h2>
          <p className="text-brand-gray-300 text-sm sm:text-base mt-3 leading-relaxed">
            From single-room luxury transformations to turnkey whole-home desert estate renovations, our licensed builders bring unparalleled precision and design clarity to every square foot.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="subtle-card subtle-card-hover overflow-hidden flex flex-col group border border-white/10 rounded-xl bg-brand-charcoal/80"
            >
              {/* Image Header */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.85]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-black/30" />
                
                {service.popular && (
                  <div className="absolute top-4 left-4 bg-amber-500 text-black font-bold text-[11px] uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    Most Requested
                  </div>
                )}

                <div className="absolute bottom-4 right-4 bg-brand-black/80 backdrop-blur-md border border-white/15 px-3 py-1 rounded-md text-xs font-semibold text-amber-400">
                  Avg. Completion: {service.timeline}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                    {service.subtitle}
                  </div>
                  <h3 className="heading-condensed text-2xl sm:text-3xl text-white tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-brand-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="pt-3 space-y-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-gray-200">
                        <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs text-brand-gray-400">
                    <ShieldCheck className="w-4 h-4 text-amber-500" />
                    10-Year Warranty Backed
                  </span>
                  <a
                    href="#estimate"
                    className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 group-hover:translate-x-1 transition-all"
                  >
                    <span>Get Free Estimate</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
