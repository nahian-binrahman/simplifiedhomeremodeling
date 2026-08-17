"use client";

import React from "react";
import { Star, ShieldCheck, MapPin, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  location: string;
  project: string;
  review: string;
  rating: number;
  date: string;
}

const reviews: Testimonial[] = [
  {
    name: "David & Eleanor Vance",
    location: "Palm Desert, CA (Ironwood Country Club)",
    project: "Complete Kitchen & Living Room Remodel",
    review:
      "We renovated our entire 3,400 sq ft home before the winter season. The team stayed exactly on budget, finished 4 days ahead of schedule, and the Calacatta marble waterfall island is the centerpiece of our dinner parties. Absolutely master-level craftsmanship.",
    rating: 5,
    date: "Completed Jan 2026",
  },
  {
    name: "Dr. Marcus Sterling",
    location: "Palm Springs, CA (Old Las Palmas)",
    project: "Mid-Century Modern Master Bath & Ensuite",
    review:
      "Having remodeled three homes in California, this was by far the smoothest experience. Zero surprise change orders, spotlessly clean job site every evening, and their tile artisans are perfectionists. The curbless shower feels like a 5-star resort.",
    rating: 5,
    date: "Completed Nov 2025",
  },
  {
    name: "Catherine & Robert Hayes",
    location: "Rancho Mirage, CA (The Springs)",
    project: "Whole-Home Modernization & Outdoor Patio",
    review:
      "From permitting with our strict HOA to installing 24 feet of pocket sliding glass doors, they handled every detail seamlessly. They protected our artwork, kept dust sealed off, and gave us our dream desert oasis.",
    rating: 5,
    date: "Completed Dec 2025",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="section-spacing bg-brand-black border-b border-white/10">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              Verified Local Reputation
            </div>
            <h2 className="heading-condensed text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              WHAT VALLEY HOMEOWNERS SAY
            </h2>
            <p className="text-brand-gray-300 text-sm sm:text-base mt-2">
              Over 180 completed luxury remodels across Coachella Valley&apos;s premier neighborhoods and country clubs.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-brand-dark border border-white/10 p-4 rounded-xl">
            <div className="text-3xl font-black heading-condensed text-amber-400">
              4.9
            </div>
            <div className="text-xs space-y-0.5">
              <div className="flex text-amber-400 text-sm">★★★★★</div>
              <div className="text-brand-gray-300 font-medium">180+ Five-Star Reviews</div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="subtle-card bg-brand-dark border border-white/10 p-6 sm:p-7 rounded-xl flex flex-col justify-between relative group hover:border-amber-500/40 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Rating & Project Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 text-sm">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-amber-400/90 bg-amber-500/10 px-2.5 py-0.5 rounded-md">
                    {rev.date}
                  </span>
                </div>

                <div className="text-xs font-semibold text-white/90 uppercase tracking-wide">
                  {rev.project}
                </div>

                {/* Review Text */}
                <p className="text-sm text-brand-gray-300 leading-relaxed italic relative">
                  <Quote className="w-6 h-6 text-white/10 absolute -top-2 -left-2 -z-0 pointer-events-none" />
                  &ldquo;{rev.review}&rdquo;
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-bold text-white text-sm">{rev.name}</div>
                  <div className="flex items-center gap-1 text-xs text-brand-gray-400 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-500" />
                    <span>{rev.location}</span>
                  </div>
                </div>

                <span className="flex items-center gap-1 text-[11px] text-green-400 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
