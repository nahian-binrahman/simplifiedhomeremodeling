"use client";

import React from "react";
import { MapPin, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import Logo from "@/components/Logo";

export default function Header() {
  return (
    <header className="bg-[#0e0e0e] text-white border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo with S Monogram */}
        <a href="#" className="group">
          <Logo className="h-10 sm:h-12" priority />
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
