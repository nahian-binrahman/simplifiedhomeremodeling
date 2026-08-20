"use client";

import React from "react";
import { ArrowRight, ShieldCheck, Award, HeartHandshake, CheckCircle2, Clock, Sparkles } from "lucide-react";

interface BenefitCard {
  id: number;
  number: string;
  quote: string;
  title: string;
  description: string;
  tag: string;
}

const benefitCards: BenefitCard[] = [
  {
    id: 1,
    number: "01",
    quote: "“15+ years delivering architectural excellence across the Coachella Valley.”",
    title: "Experience You Can Trust",
    description:
      "Decades of combined master carpentry, structural engineering, and luxury desert renovation expertise behind every single project.",
    tag: "PROVEN TRACK RECORD",
  },
  {
    id: 2,
    number: "02",
    quote: "“The price agreed upon before demolition is the exact price you pay.”",
    title: "Honest & Transparent Pricing",
    description:
      "Comprehensive, line-itemized contracts with guaranteed fixed pricing. Zero hidden builder surcharges or mid-project change order surprises.",
    tag: "100% FIXED-PRICE",
  },
  {
    id: 3,
    number: "03",
    quote: "“From initial 3D design to the final key handover with zero friction.”",
    title: "A Simplified Process",
    description:
      "We handle 100% of the permits, HOA architectural approvals, material logistics, and daily project scheduling so you stay stress-free.",
    tag: "TURNKEY MANAGEMENT",
  },
  {
    id: 4,
    number: "04",
    quote: "“We never compromise on waterproofing, joinery, or structural integrity.”",
    title: "Quality Without Shortcuts",
    description:
      "Premium Schluter-KERDI waterproofing, solid-wood dovetailed cabinetry, and laser-templated stone installations built to last a lifetime.",
    tag: "10-YR WARRANTY",
  },
  {
    id: 5,
    number: "05",
    quote: "“Every layout is custom-tailored to your lifestyle and architectural aesthetic.”",
    title: "Custom Solutions For Every Home",
    description:
      "No generic cookie-cutter packages. We engineer bespoke islands, walk-in pantries, spa ensuites, and open-concept structural conversions.",
    tag: "BESPOKE DESIGN",
  },
  {
    id: 6,
    number: "06",
    quote: "“Punctual, polite, and treating your residence with white-glove respect.”",
    title: "Service That Feels Like Family",
    description:
      "Our team cleans up thoroughly every afternoon at 4:30 PM, uses sealed zipper dust containment walls, and communicates proactively daily.",
    tag: "WHITE-GLOVE CARE",
  },
  {
    id: 7,
    number: "07",
    quote: "“In-house designers, licensed master builders, and dedicated site superintendents.”",
    title: "All-In-One Remodeling Team",
    description:
      "A cohesive team managing every trade under one licensed roof eliminates the blame-shifting and delays common with disjointed contractors.",
    tag: "IN-HOUSE TRADES",
  },
  {
    id: 8,
    number: "08",
    quote: "“Direct access to Sub-Zero, Wolf, Thermador, and premier stone slab distributors.”",
    title: "Trusted Vendor Partnerships",
    description:
      "Priority procurement on luxury appliances, custom quartz slabs, and plumbing fixtures ensures rapid lead times and full manufacturer warranties.",
    tag: "PREMIUM SOURCING",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative bg-[#111111] text-white py-14 sm:py-24 lg:py-32 border-b border-white/10 overflow-hidden">
      
      {/* Background Subtle Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "70px 70px",
        }}
      />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 reveal-init">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-gray-400 uppercase heading-condensed mb-3">
            <span className="w-4 h-px bg-white/40" />
            <span>THE SIMPLIFIED DIFFERENCE</span>
            <span className="w-4 h-px bg-white/40" />
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[48px] font-black text-white uppercase tracking-normal sm:tracking-tight leading-snug sm:leading-tight lg:leading-[1.18] heading-condensed">
            WHY CHOOSE SIMPLIFIED <br className="hidden xs:inline" />
            HOME REMODELING?
          </h2>

          <p className="text-xs sm:text-base text-gray-300 mt-3 sm:mt-4 leading-relaxed font-normal">
            Discover the eight foundational principles that have earned us 5-star ratings across Palm Desert, Palm Springs, Rancho Mirage, and La Quinta.
          </p>
        </div>

        {/* 8 Premium Benefit Cards in Two-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {benefitCards.map((card, idx) => (
            <div
              key={card.id}
              className={`bg-white text-[#111111] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group border border-gray-100 relative overflow-hidden reveal-init delay-${(idx % 4 + 1) * 100}`}
            >
              {/* Top Row: Tag + Number */}
              <div>
                <div className="flex items-center justify-between gap-4 pb-4 border-b border-gray-100">
                  <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-gray-500 bg-gray-100 px-2.5 py-1 rounded">
                    {card.tag}
                  </span>
                  <span className="text-xl font-black text-gray-300 font-mono heading-condensed">
                    {card.number}
                  </span>
                </div>

                {/* Small Quote Text */}
                <div className="pt-5 pb-3">
                  <p className="text-xs sm:text-sm text-gray-600 italic text-italic-accent leading-relaxed">
                    {card.quote}
                  </p>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-[26px] font-black text-black uppercase tracking-tight heading-condensed leading-snug group-hover:text-gray-800 transition-colors">
                  {card.title}
                </h3>

                {/* 2-Line Description */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal mt-2.5 line-clamp-2">
                  {card.description}
                </p>
              </div>

              {/* Bottom Row with Arrow Icon */}
              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-bold text-black uppercase tracking-wider heading-condensed group-hover:underline">
                  SIMPLIFIED STANDARD
                </span>
                
                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-gray-800 transition-all duration-300 transform group-hover:translate-x-1 shadow-sm">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Estimate Banner */}
        <div className="mt-14 sm:mt-20 p-8 sm:p-10 rounded-2xl bg-[#141414] border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left reveal-init delay-200">
          <div className="space-y-1">
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase heading-condensed">
              Experience the Simplified difference on your home.
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              Schedule your complimentary in-home design consultation &amp; laser measurement audit today.
            </p>
          </div>

          <a
            href="#quote-form"
            className="px-8 py-4 rounded btn-invert-white font-bold uppercase tracking-wider text-xs sm:text-sm shrink-0 shadow-xl flex items-center gap-2.5"
          >
            <span>SCHEDULE FREE IN-HOME VISIT</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
