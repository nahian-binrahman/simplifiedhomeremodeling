"use client";

import React from "react";
import { ShieldCheck, Hammer, CalendarCheck } from "lucide-react";

export default function TrustBar() {
  return (
    <div className="bg-white text-black border-b border-gray-200 py-3.5 sm:py-5 shadow-sm">
      <div className="max-w-[1320px] mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 divide-x divide-gray-200">
          
          {/* Badge 1 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3 px-2 sm:px-4 text-center sm:text-left group cursor-default">
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-900 group-hover:bg-black group-hover:text-white transition-colors duration-200 shrink-0">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
            </div>
            <span className="font-bold text-[11px] xs:text-xs sm:text-sm lg:text-base text-gray-900 tracking-tight leading-tight">
              Licensed &amp; Insured
            </span>
          </div>

          {/* Badge 2 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3 px-2 sm:px-4 text-center sm:text-left group cursor-default">
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-900 group-hover:bg-black group-hover:text-white transition-colors duration-200 shrink-0">
              <Hammer className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
            </div>
            <span className="font-bold text-[11px] xs:text-xs sm:text-sm lg:text-base text-gray-900 tracking-tight leading-tight">
              Master Craftsmanship
            </span>
          </div>

          {/* Badge 3 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3 px-2 sm:px-4 text-center sm:text-left group cursor-default">
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-900 group-hover:bg-black group-hover:text-white transition-colors duration-200 shrink-0">
              <CalendarCheck className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
            </div>
            <span className="font-bold text-[11px] xs:text-xs sm:text-sm lg:text-base text-gray-900 tracking-tight leading-tight">
              Free Consultation
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
