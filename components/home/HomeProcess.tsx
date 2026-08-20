"use client";

import React from "react";
import { MessageSquare, LayoutTemplate, Layers, Hammer, CheckCircle2, ArrowRight } from "lucide-react";

interface ProcessStep {
  number: string;
  title: string;
  timeline: string;
  description: string;
  details: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Consultation",
    timeline: "Days 1 – 2",
    description:
      "We meet at your Coachella Valley home to evaluate your space, listen to your aesthetic goals, take laser measurements, and establish a clear budget framework.",
    details: ["In-home spatial audit", "Laser digital measuring", "Lifestyle & budget alignment"],
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "Design Planning",
    timeline: "Days 3 – 7",
    description:
      "Our architectural designers create detailed 3D spatial renderings, structural wall layout plans, and full engineering calculations for city permits & HOA approvals.",
    details: ["3D photorealistic renderings", "HOA & city permit submissions", "Guaranteed fixed-price proposal"],
    icon: LayoutTemplate,
  },
  {
    number: "03",
    title: "Material Selection",
    timeline: "Week 2",
    description:
      "Select your solid-wood cabinetry profiles, Calacatta quartz slabs, European oak flooring, plumbing fixtures, and commercial chef appliances.",
    details: ["Stone slab gallery access", "Cabinet door & finish samples", "Priority vendor procurement"],
    icon: Layers,
  },
  {
    number: "04",
    title: "Construction",
    timeline: "Scheduled Build",
    description:
      "Our licensed in-house master craftsmen execute demolition, framing, plumbing, electrical, and tile setting with daily zippered dust containment.",
    details: ["Zippered HEPA dust barriers", "Dedicated on-site superintendent", "Daily 4:30 PM site cleanup"],
    icon: Hammer,
  },
  {
    number: "05",
    title: "Final Walkthrough",
    timeline: "Move-In Ready",
    description:
      "We perform a rigorous 100-point quality inspection together, hand over your 10-Year Workmanship Warranty, and deliver your pristine dream home.",
    details: ["100-point perfection audit", "10-Year Warranty certification", "White-glove deep cleaning"],
    icon: CheckCircle2,
  },
];

export default function HomeProcess() {
  return (
    <section id="process" className="relative bg-[#0a0a0a] text-white py-20 sm:py-28 lg:py-36 border-b border-white/10 overflow-hidden">
      
      {/* Background Architectural Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24 reveal-init">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-gray-400 uppercase heading-condensed mb-3">
            <span className="w-4 h-px bg-white/40" />
            <span>THE 5-PHASE BLUEPRINT</span>
            <span className="w-4 h-px bg-white/40" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-white uppercase tracking-tight heading-condensed">
            FROM DREAM TO REALITY
          </h2>

          <p className="text-sm sm:text-base text-gray-300 mt-4 leading-relaxed font-normal">
            A structured, transparent timeline designed to eliminate contractor stress, prevent delays, and deliver flawless architectural craftsmanship.
          </p>
        </div>

        {/* 5-Step Timeline (Horizontal on Desktop, Vertical on Mobile) */}
        <div className="relative">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-white/10 via-white/40 to-white/10 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className={`bg-[#141414] rounded-2xl border border-white/10 p-6 sm:p-7 flex flex-col justify-between card-hover-lift group relative reveal-init delay-${(idx + 1) * 100}`}
                >
                  {/* Top Node / Step Marker */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-white text-black font-black text-base flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform font-mono">
                        {step.number}
                      </div>

                      <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider bg-white/5 border border-white/10 px-2.5 py-1 rounded">
                        {step.timeline}
                      </span>
                    </div>

                    {/* Step Title */}
                    <div className="space-y-1.5 mb-3">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Icon className="w-4 h-4 text-white" />
                        <span className="text-[11px] font-mono uppercase tracking-widest text-gray-400">
                          PHASE {step.number}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight heading-condensed group-hover:text-gray-200 transition-colors">
                        {step.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  {/* Micro Checklist */}
                  <div className="pt-5 mt-5 border-t border-white/5 space-y-1.5">
                    {step.details.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-gray-400 font-medium">
                        <span className="w-1 h-1 rounded-full bg-white/60" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Bottom Guarantee Callout */}
        <div className="mt-14 sm:mt-20 p-8 rounded-2xl bg-[#111111] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left reveal-init delay-200">
          <div className="space-y-1">
            <div className="text-xs uppercase font-bold tracking-widest text-gray-400 heading-condensed">
              FIXED TIMELINE COMMITMENT
            </div>
            <h4 className="text-xl sm:text-2xl font-black text-white uppercase heading-condensed">
              All materials ordered prior to demolition = Zero on-site downtime.
            </h4>
          </div>

          <a
            href="#quote-form"
            className="px-8 py-3.5 rounded btn-invert-white font-bold uppercase tracking-wider text-xs sm:text-sm shrink-0 flex items-center gap-2 shadow-xl"
          >
            <span>SCHEDULE STEP 01 CONSULTATION</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
