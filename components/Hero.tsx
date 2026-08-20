"use client";

import React from "react";
import Image from "next/image";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export default function Hero() {
  return (
    <section className="relative min-h-[560px] sm:min-h-[640px] lg:min-h-[720px] flex items-center bg-[#111111] overflow-hidden">
      {/* Background Image of Modern Kitchen with Balanced Light Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/kitchen-hero.jpg"
          alt="Kitchen Remodeling in Coachella Valley"
          fill
          priority
          className="object-cover object-center brightness-[0.85] sm:brightness-[0.75] contrast-[1.04]"
        />
        {/* Balanced Gradients - keeps the photo clearly visible while keeping text legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30" />
      </div>

      {/* Hero Content Container */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20 lg:py-24 relative z-10 w-full">
        <div className="max-w-2xl space-y-3.5 sm:space-y-5">
          
          {/* Pre-Heading */}
          <div className="inline-block text-xs sm:text-sm font-bold tracking-[0.2em] text-gray-200 uppercase heading-condensed drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
            KITCHEN REMODELING IN
          </div>

          {/* Main Headline (Condensed, Tall, Bold) */}
          <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-black text-white tracking-tight uppercase leading-[0.92] sm:leading-[0.88] heading-condensed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            COACHELLA <br className="sm:hidden" />
            VALLEY
          </h1>

          {/* Subtitle with Serif Italic */}
          <div className="pt-0.5 sm:pt-1">
            <p className="text-base sm:text-2xl md:text-[28px] text-gray-100 italic text-italic-accent leading-snug drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
              Transform Your Kitchen.
            </p>
          </div>

          {/* Clean Focused Paragraph */}
          <p className="text-xs sm:text-base text-gray-200 max-w-xl leading-relaxed font-normal drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
            Expert craftsmanship, premium materials, and transparent pricing built around your home by licensed local contractors.
          </p>

          {/* Call to Action Buttons */}
          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* #1 Black <-> White Invert Hover */}
            <a
              href="#quote-form"
              className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded btn-invert-white font-bold uppercase tracking-wider text-xs sm:text-sm text-center shadow-lg transform hover:-translate-y-0.5 active:scale-[0.99]"
            >
              REQUEST A FREE QUOTE
            </a>

            {/* #2 Border Fill Effect */}
            <a
              href={`tel:${BUSINESS.phone}`}
              className="w-full sm:w-auto px-6 py-3.5 sm:py-4 rounded btn-outline-fill font-bold uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2.5 backdrop-blur-sm transform hover:-translate-y-0.5 active:scale-[0.99]"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>CALL NOW</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
