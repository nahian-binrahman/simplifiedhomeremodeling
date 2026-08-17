"use client";

import React from "react";
import { Sparkles, Compass, FileCheck, Hammer, Award, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const steps = [
  {
    step: "01",
    icon: Compass,
    title: "Free In-Home Design Consultation",
    description:
      "We meet at your Coachella Valley home to evaluate the space, listen to your lifestyle needs, take laser measurements, and present initial 3D layout possibilities.",
    timeline: "Days 1 – 3",
  },
  {
    step: "02",
    icon: FileCheck,
    title: "Guaranteed Fixed-Price Proposal",
    description:
      "Receive a line-itemized, transparent contract detailing every material, fixture, and completion milestone. Zero hidden contractor change orders.",
    timeline: "Days 4 – 7",
  },
  {
    step: "03",
    icon: Hammer,
    title: "Master Craftsmanship & Site Management",
    description:
      "Our licensed, background-checked craftsmen manage daily construction with clean dust barriers, daily site protection, and dedicated superintendent supervision.",
    timeline: "Scheduled Build",
  },
  {
    step: "04",
    icon: Award,
    title: "White-Glove Walkthrough & 10-Yr Warranty",
    description:
      "We perform a 100-point quality audit, present your comprehensive 10-Year Workmanship Warranty, and hand over your pristine, newly remodeled sanctuary.",
    timeline: "Move-In Ready",
  },
];

export default function Process() {
  return (
    <section id="process" className="section-spacing bg-brand-dark/40 border-b border-white/10">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Seamless Experience
          </div>
          <h2 className="heading-condensed text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            THE 4-STEP STRESS-FREE PROCESS
          </h2>
          <p className="text-brand-gray-300 text-sm sm:text-base mt-3 leading-relaxed">
            Home remodeling doesn&apos;t have to be overwhelming. We eliminate stress with clear milestones, fixed budgets, and proactive daily communication.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="subtle-card bg-brand-charcoal/70 border border-white/10 p-6 rounded-xl flex flex-col justify-between group hover:border-amber-500/40 transition-all duration-300 relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="heading-condensed text-3xl font-black text-white/20 group-hover:text-amber-400/80 transition-colors">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-black transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="heading-condensed text-xl text-white mb-2 tracking-wide">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-brand-gray-400">Timeline</span>
                  <span className="font-semibold text-amber-400">{item.timeline}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-amber-500/15 via-brand-dark to-brand-charcoal border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="heading-condensed text-xl sm:text-2xl text-white">
              Ready to Discuss Your Desert Remodeling Vision?
            </h4>
            <p className="text-xs sm:text-sm text-brand-gray-300">
              Book your complimentary in-home design consultation today with zero sales pressure.
            </p>
          </div>

          <a
            href="#estimate"
            className="px-6 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-bold uppercase tracking-wider text-sm flex items-center gap-2 shadow-lg shadow-amber-500/20 shrink-0 transition-all"
          >
            <span>{BUSINESS.ctaText}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
