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
    beforeImg: "/images/kitchen-before-1.jpg",
    afterImg: "/images/kitchen-after-1.jpg",
    title: "Palm Desert Full Kitchen Modern Transformation",
  },
  {
    id: 2,
    beforeImg: "/images/kitchen-before-2.jpg",
    afterImg: "/images/kitchen-after-2.jpg",
    title: "Palm Springs Open Layout & Waterfall Island Remodel",
  },
  {
    id: 3,
    beforeImg: "/images/kitchen-before-3.jpg",
    afterImg: "/images/kitchen-after-3.jpg",
    title: "Rancho Mirage Custom Peninsula & Shaker Renovation",
  },
];

function SplitCard({ item }: { item: BeforeAfterItem }) {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  return (
    <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200 bg-white relative card-hover-lift group">
      <div
        className="relative aspect-[4/3] w-full select-none cursor-ew-resize overflow-hidden"
        onMouseMove={(e) => handleMove(e.clientX, e.currentTarget.getBoundingClientRect())}
        onTouchMove={(e) => handleMove(e.touches[0].clientX, e.currentTarget.getBoundingClientRect())}
      >
        {/* AFTER Image (Full Background) with Brightness Hover */}
        <div className="absolute inset-0">
          <Image
            src={item.afterImg}
            alt={`${item.title} After`}
            fill
            className="object-cover object-center transition-all duration-300 group-hover:brightness-[1.05]"
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
              className="object-cover object-center brightness-90 sepia-[0.25] transition-all duration-300 group-hover:brightness-[1.02]"
            />
            <div className="absolute bottom-3 left-3 bg-black/85 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded">
              BEFORE
            </div>
          </div>
        </div>

        {/* Split Divider Line & Handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white z-10 pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 sm:w-7 sm:h-7 rounded-full bg-white text-gray-800 shadow-xl flex items-center justify-center border border-gray-300">
            <ArrowLeftRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export interface BeforeAfterGalleryProps {
  eyebrow?: string;
  heading?: string;
  subtitle?: string;
  items?: BeforeAfterItem[];
  ctaText?: string;
}

export default function BeforeAfterGallery({
  eyebrow = "SEE THE DIFFERENCE",
  heading = "Before & After.",
  subtitle = "Real Kitchens. Real Transformations.",
  items = comparisons,
  ctaText = "VIEW MORE PROJECTS",
}: BeforeAfterGalleryProps) {
  return (
    <section className="bg-[#f7f8f9] text-black py-16 sm:py-20 lg:py-24 border-b border-gray-200">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 reveal-init">
          <div className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase mb-2">
            {eyebrow}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-gray-900 tracking-tight">
            {heading}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2 font-normal">
            {subtitle}
          </p>
        </div>

        {/* 3 Split Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, idx) => (
            <div key={item.id} className={`reveal-init delay-${(idx + 1) * 100}`}>
              <SplitCard item={item} />
            </div>
          ))}
        </div>

        {/* Bottom Centered Button - #1 Invert Hover */}
        <div className="mt-12 text-center reveal-init delay-200">
          <a
            href="#quote-form"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded btn-invert-white font-bold uppercase tracking-wider text-xs sm:text-sm shadow-sm transform hover:-translate-y-0.5"
          >
            <span>{ctaText}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
