"use client";

import React from "react";
import { Phone, Calendar } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export default function StickyBottomBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-[#0e0e0e]/95 backdrop-blur-lg border-t border-white/15 p-3 sm:hidden shadow-2xl flex items-center gap-3">
      <a
        href={`tel:${BUSINESS.phone}`}
        className="flex-1 py-3 px-3 rounded-lg btn-outline-fill font-bold text-xs flex items-center justify-center gap-2 active:scale-95"
      >
        <Phone className="w-4 h-4 fill-current" />
        <span>Call {BUSINESS.formattedPhone}</span>
      </a>

      <a
        href="#quote-form"
        className="flex-1 py-3 px-3 rounded-lg btn-invert-white font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-lg active:scale-95"
      >
        <Calendar className="w-4 h-4" />
        <span>Free Estimate</span>
      </a>
    </div>
  );
}
