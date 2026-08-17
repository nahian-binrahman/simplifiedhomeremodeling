"use client";

import React from "react";
import { Phone, Calendar } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export default function StickyBottomBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-brand-dark/95 backdrop-blur-lg border-t border-white/15 p-3 sm:hidden shadow-2xl flex items-center gap-3">
      <a
        href={`tel:${BUSINESS.phone}`}
        className="flex-1 py-3 px-3 rounded-lg bg-white/10 border border-white/20 text-white font-semibold text-xs flex items-center justify-center gap-2 active:scale-95 transition-transform"
      >
        <Phone className="w-4 h-4 text-amber-400" />
        <span>Call (760) 895-2340</span>
      </a>

      <a
        href="#estimate"
        className="flex-1 py-3 px-3 rounded-lg bg-amber-500 text-black font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 active:scale-95 transition-transform"
      >
        <Calendar className="w-4 h-4" />
        <span>Free Estimate</span>
      </a>
    </div>
  );
}
