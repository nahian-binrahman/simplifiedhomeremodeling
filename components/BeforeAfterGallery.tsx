"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeftRight, ArrowRight } from "lucide-react";

interface BeforeAfterItem {
  id: number;
  beforeImg: string;
  afterImg: string;
  title: string;
}

const comparisons: BeforeAfterItem[] = [
  {
    id: 1,
    beforeImg: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
    afterImg: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    title: "Palm Desert Traditional to Modern Shaker Remodel",
  },
  {
    id: 2,
    beforeImg: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    afterImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    title: "Palm Springs Closed Kitchen to Waterfall Island",
  },
  {
    id: 3,
    beforeImg: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
    afterImg: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
    title: "Rancho Mirage Custom Modern Kitchen Renovation",
  },
];

function SplitCard({ item }: { item: BeforeAfterItem }) {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  return (
    <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200 bg-white relative">
      <div
        className="relative aspect-[4/3] w-full select-none cursor-ew-resize overflow-hidden"
        onMouseMove={(e) => handleMove(e.clientX, e.currentTarget.getBoundingClientRect())}
        onTouchMove={(e) => handleMove(e.touches[0].clientX, e.currentTarget.getBoundingClientRect())}
      >
        {/* AFTER Image (Full Background) */}
        <div className="absolute inset-0">
          <Image
            src={item.afterImg}
            alt={`${item.title} After`}
            fill
            className="object-cover object-center"
          />
          <div className="absolute bottom-3 right-3 bg-black/85 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded">
            AFTER
          </div>
        </div>

        {/* BEFORE Image (Clipped Left) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <div className="relative h-full w-full" style={{ width: "100%" }}>
            <Image
              src={item.beforeImg}
              alt={`${item.title} Before`}
              fill
              className="object-cover object-center brightness-90 sepia-[0.25]"
            />
            <div className="absolute bottom-3 left-3 bg-black/85 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded">
              BEFORE
            </div>
          </div>
        </div>

        {/* Split Divider Line & Handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white z-10"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-white/95 shadow-lg flex items-center justify-center text-gray-800 border border-gray-300">
            <ArrowLeftRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfterGallery() {
  return (
    <section className="bg-[#f7f8f9] text-black py-16 sm:py-20 lg:py-24 border-b border-gray-200">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase mb-2">
            SEE THE DIFFERENCE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-gray-900 tracking-tight">
            Before &amp; After.
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2 font-normal">
            Real Kitchens. Real Transformations.
          </p>
        </div>

        {/* 3 Split Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {comparisons.map((item) => (
            <SplitCard key={item.id} item={item} />
          ))}
        </div>

        {/* Bottom Centered Button */}
        <div className="mt-12 text-center">
          <a
            href="#quote-form"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded bg-white hover:bg-gray-50 border border-gray-300 text-gray-900 font-bold uppercase tracking-wider text-xs sm:text-sm shadow-sm transition-all hover:border-gray-400"
          >
            <span>VIEW MORE PROJECTS</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
