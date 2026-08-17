"use client";

import React from "react";
import { MapPin, Phone, Home } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export default function Header() {
  return (
    <header className="bg-[#0e0e0e] text-white border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo with House Icon */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-white border border-white/20 group-hover:bg-white group-hover:text-black transition-colors">
            <Home className="w-5 h-5" strokeWidth={2.2} />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base sm:text-lg tracking-wider text-white leading-tight font-sans">
              {BUSINESS.name}
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.2em] text-gray-400 font-semibold uppercase -mt-0.5">
              {BUSINESS.subName}
            </span>
          </div>
        </a>

        {/* Center: Service Area with Pin Icon (Desktop) */}
        <div className="hidden lg:flex items-center gap-2 text-xs text-gray-300">
          <MapPin className="w-4 h-4 text-gray-400 shrink-0" />
          <div className="text-left leading-snug">
            <span className="text-gray-400">Serving </span>
            <span className="text-gray-200 font-medium">
              Palm Springs, Palm Desert,
            </span>
            <br />
            <span className="text-gray-200 font-medium">
              Rancho Mirage, La Quinta &amp; Coachella Valley
            </span>
          </div>
        </div>

        {/* Right: Phone & Call CTA */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${BUSINESS.phone}`}
            className="flex items-center gap-3 group"
          >
            <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/15 group-hover:bg-white group-hover:text-black transition-all">
              <Phone className="w-4 h-4 fill-current" />
            </div>
            <div className="text-right hidden sm:block">
              <div className="font-bold text-sm sm:text-base text-white tracking-tight leading-tight group-hover:text-gray-200 transition-colors">
                {BUSINESS.formattedPhone}
              </div>
              <div className="text-[11px] text-gray-400 font-normal">
                Call for a Free Consultation
              </div>
            </div>
          </a>
        </div>

      </div>
    </header>
  );
}
