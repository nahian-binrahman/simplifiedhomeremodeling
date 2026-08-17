"use client";

import React from "react";
import { ShieldCheck, Hammer, CalendarCheck } from "lucide-react";

export default function TrustBar() {
  return (
    <div className="bg-white text-black border-b border-gray-200 py-5 sm:py-6 shadow-sm">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 gap-4 md:gap-0">
          
          {/* Badge 1 */}
          <div className="flex items-center justify-center gap-3.5 py-2 md:py-0 px-4">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-900 shrink-0">
              <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
            </div>
            <span className="font-bold text-sm sm:text-base text-gray-900 tracking-tight">
              Licensed &amp; Insured
            </span>
          </div>

          {/* Badge 2 */}
          <div className="flex items-center justify-center gap-3.5 py-2 md:py-0 px-4">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-900 shrink-0">
              <Hammer className="w-6 h-6 stroke-[2.2]" />
            </div>
            <span className="font-bold text-sm sm:text-base text-gray-900 tracking-tight">
              High-Quality Craftsmanship
            </span>
          </div>

          {/* Badge 3 */}
          <div className="flex items-center justify-center gap-3.5 py-2 md:py-0 px-4">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-900 shrink-0">
              <CalendarCheck className="w-6 h-6 stroke-[2.2]" />
            </div>
            <span className="font-bold text-sm sm:text-base text-gray-900 tracking-tight">
              Free Consultation
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
