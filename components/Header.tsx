"use client";

import React from "react";
import { MapPin, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import Logo from "@/components/Logo";

export default function Header() {
  return (
    <header className="bg-[#0e0e0e] text-white border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 min-h-[76px] sm:min-h-[82px] flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <a href="#" className="group shrink-0">
          <Logo className="w-[120px] sm:w-[135px] lg:w-[150px] h-auto" priority />
        </a>

        {/* Center: Service Area with Pin Icon (Desktop) */}
        <div className="hidden lg:flex items-center gap-2.5 text-xs sm:text-sm text-gray-300 group cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-200">
            <MapPin className="w-4 h-4 text-gray-300 group-hover:text-black transition-colors" />
          </div>
          <div className="text-left leading-snug">
            <span className="text-gray-400 font-normal">Serving </span>
            <span className="text-white font-semibold link-underline-slide">
              Palm Springs, Palm Desert,
            </span>
            <br />
            <span className="text-white font-semibold link-underline-slide">
              Rancho Mirage, La Quinta &amp; Coachella Valley
            </span>
          </div>
        </div>

        {/* Right: Phone & Call CTA */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${BUSINESS.phone}`}
            className="flex items-center gap-3 sm:gap-3.5 group"
          >
            {/* Black <-> White Invert Hover on Icon Badge */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/15 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-200 shrink-0">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
            </div>
            <div className="text-right hidden sm:block">
              <div className="font-extrabold text-base sm:text-lg text-white tracking-tight leading-tight link-underline-slide">
                {BUSINESS.formattedPhone}
              </div>
              <div className="text-xs text-gray-400 font-medium tracking-wide group-hover:text-white transition-colors">
                Call for a Free Consultation
              </div>
            </div>
          </a>
        </div>

      </div>
    </header>
  );
}
