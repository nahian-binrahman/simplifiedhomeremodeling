"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MapPin, ChevronDown, Compass, Sparkles } from "lucide-react";
import { ALL_LOCATIONS_LIST } from "@/lib/locations";

interface LocationSelectorProps {
  currentLocationSlug?: string;
  serviceBasePath?: string; // e.g. "/kitchen-remodeling"
  title?: string;
  subtitle?: string;
}

export default function LocationSelector({
  currentLocationSlug,
  serviceBasePath = "/kitchen-remodeling",
  title = "Select Your Coachella Valley City",
  subtitle = "Choose your local community to view city-specific kitchen remodeling projects, HOA permit details, and local estimates.",
}: LocationSelectorProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const currentLocation = ALL_LOCATIONS_LIST.find((loc) => loc.slug === currentLocationSlug);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const slug = e.target.value;
    if (slug) {
      router.push(`${serviceBasePath}/${slug}`);
    }
  };

  return (
    <section className="w-full bg-[#161616] border-y border-white/10 py-10 sm:py-14 relative z-20">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-white/90 text-xs font-semibold uppercase tracking-wider mb-2.5">
            <Compass className="w-3.5 h-3.5 text-white" />
            Local Service Areas
          </div>
          <h2 className="heading-condensed text-2xl sm:text-3xl md:text-4xl text-white font-bold tracking-tight uppercase">
            {title}
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm mt-2 max-w-xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Dropdown Selector (Mobile & Desktop UX) */}
        <div className="max-w-md mx-auto mb-8 relative">
          <label htmlFor="location-dropdown" className="sr-only">
            Select a Coachella Valley Location
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/80">
              <MapPin className="w-5 h-5" />
            </div>
            <select
              id="location-dropdown"
              aria-label="Select location"
              value={currentLocationSlug || ""}
              onChange={handleSelectChange}
              className="w-full bg-[#202020] text-white font-medium text-sm sm:text-base pl-11 pr-10 py-3.5 rounded-lg border border-white/20 focus:border-white focus:ring-1 focus:ring-white outline-none appearance-none cursor-pointer hover:border-white/40 transition-colors shadow-inner"
            >
              <option value="" disabled>
                -- Choose Your City / Community --
              </option>
              {ALL_LOCATIONS_LIST.map((loc) => (
                <option key={loc.slug} value={loc.slug} className="bg-[#202020] text-white py-2">
                  {loc.name} (Coachella Valley)
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-gray-400">
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
          {currentLocation && (
            <p className="text-center text-xs text-gray-300 mt-2 font-medium">
              Currently viewing: <span className="font-bold text-white underline">{currentLocation.name}</span>
            </p>
          )}
        </div>

        {/* Static HTML Link Pills (100% Crawlable & Indexable for Search Engines) */}
        <div>
          <div className="text-center mb-3">
            <span className="text-[11px] uppercase tracking-widest text-gray-400 font-bold">
              Direct City Pages (Crawlable & Indexable)
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-4xl mx-auto">
            {ALL_LOCATIONS_LIST.map((loc) => {
              const isActive = loc.slug === currentLocationSlug;
              return (
                <Link
                  key={loc.slug}
                  href={`${serviceBasePath}/${loc.slug}`}
                  className={`inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-md text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                    isActive
                      ? "bg-white text-black border-white shadow-[0_0_12px_rgba(255,255,255,0.15)]"
                      : "bg-[#222222] text-gray-200 border-white/10 hover:border-white/40 hover:bg-[#2a2a2a] hover:text-white"
                  }`}
                >
                  <MapPin className={`w-3 h-3 ${isActive ? "text-black" : "text-white/80"}`} />
                  <span>{loc.name}</span>
                </Link>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
