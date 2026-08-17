"use client";

import React from "react";
import { Star, Quote } from "lucide-react";

interface ReviewItem {
  name: string;
  location: string;
  text: string;
}

const reviews: ReviewItem[] = [
  {
    name: "Sarah M.",
    location: "Palm Desert, CA",
    text: "Simplified Home Remodeling completely transformed our kitchen! The team was professional, on time, and the quality of work is outstanding.",
  },
  {
    name: "James T.",
    location: "La Quinta, CA",
    text: "From the design to the final touches, everything was perfect. Our new kitchen is not only beautiful but so functional. Highly recommend!",
  },
  {
    name: "Maria G.",
    location: "Rancho Mirage, CA",
    text: "Great communication, fair pricing, and amazing craftsmanship. We couldn't be happier with our kitchen remodel!",
  },
];

export default function ClientReviews() {
  return (
    <section className="bg-white text-black py-16 sm:py-20 lg:py-24 border-b border-gray-200">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase mb-2">
            WHAT OUR CLIENTS SAY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-gray-900 tracking-tight">
            Trusted by Homeowners. <br className="hidden sm:inline" />
            Loved for the Results.
          </h2>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-gray-200 p-6 sm:p-7 shadow-sm flex flex-col justify-between relative card-hover-lift group cursor-default"
            >
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-black">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-black text-black" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-gray-700 leading-relaxed font-normal">
                  {rev.text}
                </p>
              </div>

              {/* Author & Quote mark */}
              <div className="pt-6 mt-4 border-t border-gray-100 flex items-end justify-between">
                <div>
                  <div className="font-bold text-sm text-gray-900">— {rev.name}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{rev.location}</div>
                </div>

                <Quote className="w-6 h-6 text-gray-300 fill-gray-200 group-hover:text-black group-hover:fill-gray-100 transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* Platform Trust Logos (Google, Yelp, Facebook, Houzz) */}
        <div className="mt-14 pt-8 border-t border-gray-100 flex flex-wrap items-center justify-center gap-8 sm:gap-14 lg:gap-20">
          
          {/* Google */}
          <div className="flex flex-col items-center gap-1 text-center group cursor-pointer hover:-translate-y-1 transition-transform">
            <div className="text-lg font-bold tracking-tight">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-600 font-semibold">
              <span className="text-black">★★★★★</span>
              <span>5.0</span>
            </div>
          </div>

          {/* Yelp */}
          <div className="flex flex-col items-center gap-1 text-center group cursor-pointer hover:-translate-y-1 transition-transform">
            <div className="text-lg font-extrabold text-[#d32323] tracking-tight flex items-center gap-1">
              <span>yelp</span>
              <span className="text-sm">★</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-600 font-semibold">
              <span className="text-black">★★★★★</span>
              <span>5.0</span>
            </div>
          </div>

          {/* Facebook */}
          <div className="flex flex-col items-center gap-1 text-center group cursor-pointer hover:-translate-y-1 transition-transform">
            <div className="text-lg font-bold text-[#1877F2] tracking-tight">
              facebook
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-600 font-semibold">
              <span className="text-black">★★★★★</span>
              <span>5.0</span>
            </div>
          </div>

          {/* Houzz */}
          <div className="flex flex-col items-center gap-1 text-center group cursor-pointer hover:-translate-y-1 transition-transform">
            <div className="text-lg font-bold text-[#4dbc15] tracking-tight flex items-center gap-1">
              <span className="w-4 h-4 bg-[#4dbc15] text-white rounded-sm text-xs flex items-center justify-center font-black">
                h
              </span>
              <span>houzz</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-600 font-semibold">
              <span className="text-black">★★★★★</span>
              <span>5.0</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
