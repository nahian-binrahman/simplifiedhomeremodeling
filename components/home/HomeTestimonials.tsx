"use client";

import React from "react";
import { Star, Quote, CheckCircle2 } from "lucide-react";

interface TestimonialItem {
  id: number;
  name: string;
  location: string;
  projectType: string;
  rating: number;
  date: string;
  review: string;
  highlight: string;
  verified: boolean;
}

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: "Steve N.",
    location: "Palm Desert, CA",
    projectType: "Full Kitchen & Island Remodel",
    rating: 5,
    date: "Yelp Verified Review",
    highlight: "“We couldn’t be happier with our new kitchen!”",
    review:
      "Working with Juan and Simplified Home Remodeling was an absolute pleasure. From start to finish, the entire process was smooth, transparent, and completely stress-free. The craftsmanship is truly top-notch. Our custom cabinets and quartz countertops turned out even better than we imagined!",
    verified: true,
  },
  {
    id: 2,
    name: "Rose Z.",
    location: "Rancho Mirage, CA",
    projectType: "Kitchen & Custom Cabinetry",
    rating: 5,
    date: "Yelp Verified Review",
    highlight: "“Honest, reliable, and exceptionally skilled.”",
    review:
      "Juan and his crew were wonderful to work with. They kept the workspace incredibly clean every single day, communicated daily updates, and finished right on schedule with zero surprise costs. Highly recommend them to anyone in the Coachella Valley!",
    verified: true,
  },
  {
    id: 3,
    name: "Bill & Carol M.",
    location: "Palm Springs, CA",
    projectType: "Whole-Home & Bathroom Renovation",
    rating: 5,
    date: "Yelp Verified Review",
    highlight: "“The best contractor experience we’ve ever had.”",
    review:
      "As seasonal residents, we were nervous about remodeling while out of state. Juan sent weekly video walkthroughs and handled everything with white-glove precision. We walked into a flawless home. True master craftsmen!",
    verified: true,
  },
];

export default function HomeTestimonials() {
  return (
    <section id="testimonials" className="relative bg-[#0a0a0a] text-white py-20 sm:py-28 lg:py-36 border-b border-white/10 overflow-hidden">
      
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
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 reveal-init">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-gray-400 uppercase heading-condensed mb-3">
            <span className="w-4 h-px bg-white/40" />
            <span>CLIENT EXPERIENCES &amp; REVIEWS</span>
            <span className="w-4 h-px bg-white/40" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-white uppercase tracking-tight heading-condensed">
            WHAT OUR CLIENTS SAY
          </h2>

          {/* Aggregate Yelp Badge */}
          <div className="mt-4 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="flex text-[#d32323] text-sm">★★★★★</div>
            <span className="text-sm font-bold text-white">5.0 Star Average Rating</span>
            <span className="text-white/20">•</span>
            <span className="text-xs text-gray-400 font-mono">100% Client Satisfaction</span>
          </div>
        </div>

        {/* 3 Testimonial Cards in Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={t.id}
              className={`bg-[#141414] rounded-2xl p-6 sm:p-8 lg:p-9 border border-white/10 card-hover-lift flex flex-col justify-between group relative overflow-hidden reveal-init delay-${(idx + 1) * 100}`}
            >
              {/* Top Row: Stars + Project Type */}
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  {/* Yelp 5-Star Red Badge */}
                  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#d32323] text-white text-xs font-bold shadow-sm">
                    <span>★★★★★</span>
                  </div>

                  <span className="text-[11px] font-mono text-gray-400 uppercase bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                    {t.projectType}
                  </span>
                </div>

                {/* Highlight Quote */}
                <h3 className="text-lg sm:text-xl font-bold text-white italic text-italic-accent leading-snug pt-1">
                  {t.highlight}
                </h3>

                {/* Review Body */}
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                  {t.review}
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-black text-white text-base uppercase heading-condensed tracking-wide">
                    {t.name}
                  </div>
                  <div className="text-[11px] text-gray-400 font-mono">{t.location}</div>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Trust Logos Strip */}
        <div className="mt-14 sm:mt-18 pt-10 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-70 hover:opacity-100 transition-opacity">
          <div className="text-xs font-mono uppercase tracking-widest text-gray-400">
            VERIFIED REVIEWS ON:
          </div>
          <div className="font-black text-lg tracking-wider text-white">Yelp ★★★★★</div>
          <div className="font-black text-lg tracking-wider text-white">Google ★★★★★</div>
          <div className="font-black text-lg tracking-wider text-white">Facebook ★★★★★</div>
        </div>

      </div>
    </section>
  );
}
