"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, ArrowLeftRight, CheckCircle, MapPin, Calendar } from "lucide-react";

interface ProjectCase {
  id: string;
  title: string;
  location: string;
  duration: string;
  scope: string;
  beforeImg: string;
  afterImg: string;
  beforeDesc: string;
  afterDesc: string;
  highlight: string;
}

const projects: ProjectCase[] = [
  {
    id: "palm-desert-kitchen",
    title: "1990s Closed Kitchen to Open Desert Gourmet Haven",
    location: "Palm Desert, CA (South Palm Desert)",
    duration: "4.5 Weeks",
    scope: "Full Gut, Wall Removal, Calacatta Waterfall Island, Custom White Oak",
    beforeImg: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
    afterImg: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    beforeDesc: "Dark honey-oak cabinets, cramped 8-foot soffit ceiling, closed-off partition walls blocking natural sunlight.",
    afterDesc: "Airy open layout, 12-ft Calacatta quartz waterfall island, seamless custom cabinetry, Sub-Zero refrigeration suite.",
    highlight: "+38% Appraised Home Equity Value",
  },
  {
    id: "palm-springs-bath",
    title: "Master Ensuite to Desert Resort Spa Retreat",
    location: "Palm Springs, CA (Old Las Palmas)",
    duration: "3 Weeks",
    scope: "Curbless Rain Shower, Freestanding Matte Tub, Terrazzo Heated Tile",
    beforeImg: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    afterImg: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80",
    beforeDesc: "Outdated builder-grade beige fiberglass stall shower, oversized unused corner jetted tub, cramped single vanity.",
    afterDesc: "Zero-threshold walk-in rain shower with frameless glass, custom floating white oak double vanity, matte black Hansgrohe fixtures.",
    highlight: "10-Year Waterproofing Warranty",
  },
  {
    id: "rancho-mirage-living",
    title: "Mid-Century Ranch to Architectural Glass Haven",
    location: "Rancho Mirage, CA (Thunderbird CC)",
    duration: "9 Weeks",
    scope: "Structural Steel Beam Installation, 20-Foot Glass Pocket Doors, Microcement Flooring",
    beforeImg: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    afterImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    beforeDesc: "Confined compartmentalized rooms, low ceilings, drafty aluminum windows, separated patio.",
    afterDesc: "Expansive unified indoor-outdoor entertainment living space with flush threshold sliding glass walls framing mountain views.",
    highlight: "Energy Efficient Low-E Glass",
  },
];

export default function BeforeAfterShowcase() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isHovering, setIsHovering] = useState(false);

  const activeProject = projects[activeProjectIndex];

  return (
    <section id="transformations" className="section-spacing bg-brand-black border-b border-white/10 relative overflow-hidden">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Proven Desert Transformations
            </div>
            <h2 className="heading-condensed text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              BEFORE &amp; AFTER SHOWCASE
            </h2>
            <p className="text-brand-gray-300 text-sm sm:text-base mt-2">
              Slide back and forth to reveal how we transform outdated Coachella Valley properties into architectural showpieces.
            </p>
          </div>

          {/* Project Selector Tabs */}
          <div className="flex flex-wrap gap-2">
            {projects.map((proj, idx) => (
              <button
                key={proj.id}
                onClick={() => {
                  setActiveProjectIndex(idx);
                  setSliderPosition(50);
                }}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  activeProjectIndex === idx
                    ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20"
                    : "bg-white/5 hover:bg-white/10 text-brand-gray-300 border border-white/10"
                }`}
              >
                {proj.location.split(",")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Comparison Card */}
        <div className="subtle-card border border-white/15 rounded-2xl overflow-hidden bg-brand-dark shadow-2xl">
          
          {/* Top Project Meta Bar */}
          <div className="p-4 sm:p-6 border-b border-white/10 bg-brand-charcoal flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
                Featured Transformation
              </span>
              <h3 className="heading-condensed text-xl sm:text-2xl text-white mt-0.5">
                {activeProject.title}
              </h3>
            </div>

            <div className="flex items-center gap-4 text-xs sm:text-sm text-brand-gray-300">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-500" />
                {activeProject.location}
              </span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-amber-500" />
                Completed in {activeProject.duration}
              </span>
            </div>
          </div>

          {/* Interactive Split Image Container */}
          <div
            className="relative h-[360px] sm:h-[480px] md:h-[560px] w-full select-none cursor-ew-resize overflow-hidden"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
              setSliderPosition((x / rect.width) * 100);
            }}
            onTouchMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const touch = e.touches[0];
              const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
              setSliderPosition((x / rect.width) * 100);
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* AFTER Image (Full Background) */}
            <div className="absolute inset-0">
              <Image
                src={activeProject.afterImg}
                alt={`After remodeling: ${activeProject.title}`}
                fill
                className="object-cover object-center"
              />
              <div className="absolute top-6 right-6 bg-brand-black/80 backdrop-blur-md border border-amber-500/40 px-4 py-1.5 rounded-full text-xs font-bold text-amber-400 uppercase tracking-wider shadow-lg">
                After Renovation ✨
              </div>
            </div>

            {/* BEFORE Image (Clipped by slider position) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="relative h-full w-full" style={{ width: "100%", minWidth: "100%" }}>
                <Image
                  src={activeProject.beforeImg}
                  alt={`Before remodeling: ${activeProject.title}`}
                  fill
                  className="object-cover object-center brightness-75 sepia-[0.3]"
                />
                <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold text-brand-gray-300 uppercase tracking-wider shadow-lg">
                  Before
                </div>
              </div>
            </div>

            {/* Vertical Divider Line & Draggable Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-amber-400 z-20 shadow-2xl"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-amber-500 text-black border-2 border-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110">
                <ArrowLeftRight className="w-5 h-5" />
              </div>
            </div>

            {/* Helper Prompt Overlay */}
            {!isHovering && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/75 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-medium border border-white/20 pointer-events-none hidden sm:block animate-pulse">
                ← Drag or hover horizontally to compare →
              </div>
            )}
          </div>

          {/* Bottom Comparison Notes */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10 bg-brand-dark p-6 sm:p-8">
            <div className="pb-4 md:pb-0 md:pr-6 space-y-2">
              <span className="text-xs font-bold text-brand-gray-400 uppercase tracking-wider">
                Original Condition (Before)
              </span>
              <p className="text-sm text-brand-gray-300 leading-relaxed">
                {activeProject.beforeDesc}
              </p>
            </div>

            <div className="pt-4 md:pt-0 md:pl-6 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Transformation Results (After)
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold">
                  {activeProject.highlight}
                </span>
              </div>
              <p className="text-sm text-brand-gray-200 leading-relaxed">
                {activeProject.afterDesc}
              </p>
              <div className="pt-1 flex items-center gap-2 text-xs text-brand-gray-300">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Scope: {activeProject.scope}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
