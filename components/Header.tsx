"use client";

import React from "react";
import { MapPin, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import Logo from "@/components/Logo";

export default function Header() {
  return (
    <header className="bg-[#0e0e0e] text-white border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-[1320px] mx-auto px-3.5 sm:px-6 lg:px-8 py-2.5 sm:py-3 min-h-[68px] sm:min-h-[82px] flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Brand Logo */}
        <a href="/" className="group shrink-0" aria-label="Simplified Home Remodeling Homepage">
          <Logo className="w-[110px] xs:w-[125px] sm:w-[135px] lg:w-[150px] h-auto" priority />
        </a>

        {/* Center: Service Area with Pin Icon (Desktop) */}
        <div className="hidden lg:flex items-center gap-3 max-w-lg lg:max-w-2xl xl:max-w-3xl">
          <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 self-start">
            <MapPin className="w-4.5 h-4.5 text-gray-300" />
          </div>
          <div className="text-left leading-snug">
            <div className="text-white font-bold text-sm sm:text-base tracking-wide">
              Proudly Serving the Coachella Valley
            </div>
            <div className="text-xs sm:text-[13px] text-gray-400 font-normal leading-relaxed mt-0.5 select-none">
              <div>Palm Desert • Rancho Mirage • La Quinta • Indian Wells</div>
              <div>Palm Springs • Cathedral City • Indio • Bermuda Dunes</div>
              <div>Coachella • Desert Hot Springs • Thousand Palms • Thermal</div>
            </div>
          </div>
        </div>

        {/* Right: Phone & Call CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`tel:${BUSINESS.phone}`}
            className="flex items-center gap-2 sm:gap-3.5 group px-2.5 sm:px-0 py-1.5 sm:py-0 rounded-full sm:rounded-none bg-white/5 sm:bg-transparent border border-white/10 sm:border-0"
          >
            {/* Black <-> White Invert Hover on Icon Badge */}
            <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/15 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-200 shrink-0">
              <Phone className="w-3.5 h-3.5 sm:w-5 sm:h-5 fill-current" />
            </div>
            <div className="text-right">
              <div className="font-extrabold text-xs sm:text-base lg:text-lg text-white tracking-tight leading-tight link-underline-slide text-gentle-lift">
                <span className="sm:hidden">CALL DIRECT</span>
                <span className="hidden sm:inline">{BUSINESS.formattedPhone}</span>
              </div>
              <div className="text-[10px] sm:text-xs text-gray-400 font-medium tracking-wide group-hover:text-white transition-colors hidden sm:block">
                Call for a Free Consultation
              </div>
            </div>
          </a>
        </div>

      </div>
    </header>
  );
}
