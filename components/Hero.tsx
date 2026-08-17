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
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24 relative z-10 w-full">
        <div className="max-w-2xl space-y-4 sm:space-y-5">
          
          {/* Pre-Heading */}
          <div className="text-xs sm:text-sm font-bold tracking-[0.2em] text-gray-200 uppercase heading-condensed">
            KITCHEN REMODELING IN
          </div>

          {/* Main Headline (Condensed, Tall, Bold) */}
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-black text-white tracking-tight uppercase leading-[0.92] sm:leading-[0.88] heading-condensed">
            COACHELLA <br />
            VALLEY
          </h1>

          {/* Subtitle with Serif Italic & Sub-phrase */}
          <div className="space-y-1 pt-1">
            <p className="text-lg sm:text-2xl md:text-[28px] text-gray-100 italic text-italic-accent">
              Transform Your Kitchen.
            </p>
            <p className="text-sm sm:text-lg md:text-xl font-medium text-gray-200 font-sans">
              Expert Craftsmanship. Built Around Your Home.
            </p>
          </div>

          {/* Paragraph */}
          <p className="text-xs sm:text-base text-gray-300 max-w-xl leading-relaxed font-normal pt-1">
            Create a kitchen that&apos;s beautiful, functional, and built to last with a licensed local remodeling contractor.
          </p>

          {/* Call to Action Buttons */}
          <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
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
