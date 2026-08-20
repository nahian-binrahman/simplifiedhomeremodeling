"use client";

import React from "react";
import { MapPin, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-white/10 text-xs">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-white/10">
          
          {/* Logo with S Monogram */}
          <a href="/" className="group shrink-0" aria-label="Simplified Home Remodeling Home">
            <Logo className="w-[125px] sm:w-[145px] h-auto" />
          </a>

          {/* Center Serving Areas */}
          <div className="flex items-center gap-2.5 text-gray-300 group cursor-pointer">
            <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-200">
              <MapPin className="w-3.5 h-3.5 text-gray-400 group-hover:text-black transition-colors" />
            </div>
            <div className="text-left text-xs leading-relaxed">
              <span className="text-gray-400 font-medium">Proudly Serving </span>
              <br className="sm:hidden" />
              <span className="text-gray-200 link-underline-slide text-gentle-lift font-medium">
                Palm Springs • Palm Desert • Rancho Mirage
              </span>
              <br />
              <span className="text-gray-200 link-underline-slide text-gentle-lift font-medium">
                La Quinta • Coachella Valley
              </span>
            </div>
          </div>

          {/* Right Phone */}
          <a
            href={`tel:${BUSINESS.phone}`}
            className="flex items-center gap-3 group"
          >
            {/* #1 Black <-> White Invert Hover */}
            <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/15 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-200 shrink-0">
              <Phone className="w-4 h-4 fill-current" />
            </div>
            <div className="text-left">
              <div className="font-bold text-sm sm:text-base text-white tracking-tight leading-tight link-underline-slide text-gentle-lift">
                {BUSINESS.formattedPhone}
              </div>
              <div className="text-[11px] text-gray-400 font-normal group-hover:text-white transition-colors">
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
