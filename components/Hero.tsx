"use client";

import React from "react";
import Image from "next/image";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export default function Hero() {
  return (
    <section className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] flex items-center bg-[#111111] overflow-hidden">
      {/* Background Image of Modern Kitchen with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=2000&q=85"
          alt="Kitchen Remodeling in Coachella Valley"
          fill
          priority
          className="object-cover object-center brightness-[0.52] contrast-[1.08]"
        />
        {/* Dark Vignette & Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/40" />
      </div>

      {/* Hero Content Container */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative z-10 w-full">
        <div className="max-w-2xl space-y-4 sm:space-y-5">
          
          {/* Pre-Heading */}
          <div className="text-xs sm:text-sm font-bold tracking-[0.2em] text-gray-200 uppercase heading-condensed">
            KITCHEN REMODELING IN
          </div>

          {/* Main Headline (Condensed, Tall, Bold) */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-black text-white tracking-tight uppercase leading-[0.88] heading-condensed">
            COACHELLA <br />
            VALLEY
          </h1>

          {/* Subtitle with Serif Italic & Sub-phrase */}
          <div className="space-y-1 pt-1">
            <p className="text-xl sm:text-2xl md:text-[28px] text-gray-100 italic text-italic-accent">
              Transform Your Kitchen.
            </p>
            <p className="text-base sm:text-lg md:text-xl font-medium text-gray-200 font-sans">
              Expert Craftsmanship. Built Around Your Home.
            </p>
          </div>

          {/* Paragraph */}
          <p className="text-sm sm:text-base text-gray-300 max-w-xl leading-relaxed font-normal pt-1">
            Create a kitchen that&apos;s beautiful, functional, and built to last with a licensed local remodeling contractor.
          </p>

          {/* Call to Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            {/* White Solid Button */}
            <a
              href="#quote-form"
              className="px-7 py-3.5 rounded bg-white hover:bg-gray-100 text-black font-bold uppercase tracking-wider text-xs sm:text-sm text-center shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              REQUEST A FREE QUOTE
            </a>

            {/* Dark Translucent Button */}
            <a
              href={`tel:${BUSINESS.phone}`}
              className="px-6 py-3.5 rounded bg-black/60 hover:bg-black/80 border border-white/30 text-white font-bold uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2.5 backdrop-blur-sm transition-all"
            >
              <Phone className="w-4 h-4 text-white fill-current" />
              <span>CALL NOW</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
