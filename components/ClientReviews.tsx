"use client";

import React from "react";
import { Star, Quote } from "lucide-react";

interface ReviewItem {
  name: string;
  source: string;
  timeAgo: string;
  text: string;
}

const reviews: ReviewItem[] = [
  {
    name: "Steve N.",
    source: "Verified Yelp Review",
    timeAgo: "6 months ago",
    text: "If you're getting ready for a home remodel, you definitely want to call Simplified Home Remodeling. Their bid was competitive and their work is outstanding. Juan and his team performed a high level, taking excellent care of our home throughout the project, and completed the project ahead of schedule. We highly recommend Simplified Home Remodeling.",
  },
  {
    name: "Rose Z.",
    source: "Verified Yelp Review",
    timeAgo: "1 year ago",
    text: "We highly recommend Juan with Simplified Home Remodeling. Juan came out, gave us a fair estimate, and his crew did an excellent job—I mean perfection! They worked cleanly and finished right on schedule. We will definitely be hiring Juan again for our new kitchen remodel!",
  },
  {
    name: "Bill & Carol",
    source: "Verified Yelp Review",
    timeAgo: "1 year ago",
    text: "Juan and his team are absolutely amazing! Juan goes above and beyond, listens with great patience, and brings years of expertise. His team is courteous, cleans up daily, and the finished product is impeccable. We loved our kitchen remodel so much that we rehired him for our bathroom!",
  },
];

export default function ClientReviews() {
  return (
    <section className="bg-white text-black py-16 sm:py-20 lg:py-24 border-b border-gray-200">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 reveal-init">
          <div className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase mb-2">
            WHAT OUR CLIENTS SAY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-gray-900 tracking-tight">
            Trusted by Homeowners. <br className="hidden sm:inline" />
            Loved for the Results.
          </h2>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-xl border border-gray-200 p-6 sm:p-7 shadow-sm flex flex-col justify-between relative card-hover-lift group cursor-default reveal-init delay-${(idx + 1) * 100}`}
            >
              <div className="space-y-4">
                {/* 5 Stars & Time Ago */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-5 h-5 bg-[#d32323] rounded-[3px] flex items-center justify-center text-white text-xs font-bold shadow-xs"
                      >
                        ★
                      </div>
                    ))}
                  </div>
                  <span className="text-xs text-gray-400 font-medium">
                    {rev.timeAgo}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-sm text-gray-700 leading-relaxed font-normal whitespace-pre-line">
                  {rev.text}
                </p>
              </div>

              {/* Author & Quote mark */}
              <div className="pt-6 mt-6 border-t border-gray-100 flex items-end justify-between">
                <div>
                  <div className="font-bold text-sm text-gray-900">— {rev.name}</div>
                  <div className="text-xs text-gray-500 mt-0.5 flex items-center gap-1">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#d32323]" />
                    <span>{rev.source}</span>
                  </div>
                </div>

                <Quote className="w-6 h-6 text-gray-300 fill-gray-200 group-hover:text-black group-hover:fill-gray-100 transition-colors shrink-0" />
              </div>
            </div>
          ))}
        </div>

        {/* Platform Trust Logos (Google, Yelp, Facebook) */}
        <div className="mt-14 pt-8 border-t border-gray-100 flex flex-wrap items-center justify-center gap-8 sm:gap-14 lg:gap-20 reveal-init delay-200">
          
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

        </div>

      </div>
    </section>
  );
}
