"use client";

import React from "react";
import { Phone, Calendar } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export default function StickyBottomBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-[#0c0c0c]/95 backdrop-blur-2xl border-t border-white/15 px-3 pt-2.5 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] sm:hidden shadow-[0_-10px_30px_rgba(0,0,0,0.8)] flex items-center gap-2.5">
      <a
        href={`tel:${BUSINESS.phone}`}
        className="flex-1 h-12 px-3 rounded-xl bg-white/10 hover:bg-white/15 active:bg-white active:text-black text-white border border-white/20 font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-[0.98] text-center"
      >
        <Phone className="w-4 h-4 fill-current shrink-0" />
        <span className="tracking-wide">Call Now</span>
      </a>

      <a
        href="#quote-form"
        className="flex-[1.2] h-12 px-3 rounded-xl bg-white text-black font-extrabold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-[0.98] transition-all text-center"
      >
        <Calendar className="w-4 h-4 shrink-0" />
        <span className="truncate">Free Estimate</span>
      </a>
    </div>
  );
}
