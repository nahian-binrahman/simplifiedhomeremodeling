"use client";

import React from "react";
import { Home, MapPin, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-white/10 text-xs">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-white/10">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-white border border-white/20">
              <Home className="w-4 h-4" strokeWidth={2.2} />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base tracking-wider text-white leading-tight font-sans">
                {BUSINESS.name}
              </span>
              <span className="text-[9px] tracking-[0.2em] text-gray-400 font-semibold uppercase -mt-0.5">
                {BUSINESS.subName}
              </span>
            </div>
          </a>

          {/* Center Serving Areas */}
          <div className="flex items-center gap-2 text-gray-300">
            <MapPin className="w-4 h-4 text-gray-400 shrink-0" />
            <div className="text-left text-xs leading-relaxed">
              <span className="text-gray-400 font-medium">Proudly Serving </span>
              <br className="sm:hidden" />
              <span className="text-gray-200">
                Palm Springs • Palm Desert • Rancho Mirage
              </span>
              <br />
              <span className="text-gray-200">
                La Quinta • Coachella Valley
              </span>
            </div>
          </div>

          {/* Right Phone */}
          <a
            href={`tel:${BUSINESS.phone}`}
            className="flex items-center gap-3 group"
          >
            <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/15 group-hover:bg-white group-hover:text-black transition-colors">
              <Phone className="w-4 h-4 fill-current" />
            </div>
            <div className="text-left">
              <div className="font-bold text-sm sm:text-base text-white tracking-tight leading-tight">
                {BUSINESS.formattedPhone}
              </div>
              <div className="text-[11px] text-gray-400 font-normal">
                Call for a Free Consultation
              </div>
            </div>
          </a>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-gray-400 text-xs gap-3">
          <div>
            Licensed • Insured • Bonded | {BUSINESS.cslbNumber}
          </div>
          <div>
            © 2024 Simplified Home Remodeling. All Rights Reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
