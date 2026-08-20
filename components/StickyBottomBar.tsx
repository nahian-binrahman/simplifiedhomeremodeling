"use client";

import React from "react";
import { Phone, Calendar } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export default function StickyBottomBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-[#0e0e0e]/95 backdrop-blur-xl border-t border-white/15 pt-2.5 px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] sm:hidden shadow-2xl flex items-center gap-2.5">
      <a
        href={`tel:${BUSINESS.phone}`}
        className="flex-1 py-3 px-2 rounded-lg btn-outline-fill font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 text-center"
      >
        <Phone className="w-3.5 h-3.5 fill-current shrink-0" />
        <span className="truncate">Call Now</span>
      </a>

      <a
        href="#quote-form"
        className="flex-1 py-3 px-2 rounded-lg btn-invert-white font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-1.5 shadow-lg active:scale-95 text-center"
      >
        <Calendar className="w-3.5 h-3.5 shrink-0" />
        <span className="truncate">Free Estimate</span>
      </a>
    </div>
  );
}
