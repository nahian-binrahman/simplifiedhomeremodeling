"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeftRight, ArrowRight, Eye, Sparkles } from "lucide-react";

type CategoryFilter = "all" | "kitchen" | "bathroom" | "countertops" | "full-home";

interface PortfolioProject {
  id: number;
  category: "kitchen" | "bathroom" | "countertops" | "full-home";
  beforeImg: string;
  afterImg: string;
  title: string;
  location: string;
  scope: string;
  timeline: string;
  hasSplitSlider?: boolean;
}

const allProjects: PortfolioProject[] = [
  {
    id: 1,
    category: "kitchen",
    beforeImg: "/images/kitchen-before-1.jpg",
    afterImg: "/images/kitchen-after-1.jpg",
    title: "Palm Desert Modern Shaker & Quartz Remodel",
    location: "Palm Desert, CA",
    scope: "Full Kitchen & Island",
    timeline: "4 Weeks",
    hasSplitSlider: true,
  },
  {
    id: 2,
    category: "kitchen",
    beforeImg: "/images/kitchen-before-2.jpg",
    afterImg: "/images/kitchen-after-2.jpg",
    title: "Palm Springs Open Concept & Waterfall Marble Island",
    location: "Palm Springs, CA",
    scope: "Wall Removal & Island",
    timeline: "5 Weeks",
    hasSplitSlider: true,
  },
  {
    id: 3,
    category: "kitchen",
    beforeImg: "/images/kitchen-before-3.jpg",
    afterImg: "/images/kitchen-after-3.jpg",
    title: "Rancho Mirage Custom Peninsula & Shaker Millwork",
    location: "Rancho Mirage, CA",
    scope: "Cabinetry & Quartz",
    timeline: "3.5 Weeks",
    hasSplitSlider: true,
  },
  {
    id: 4,
    category: "bathroom",
    beforeImg: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80",
    afterImg: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    title: "La Quinta Spa Master Ensuite & Curbless Shower",
    location: "La Quinta, CA",
    scope: "Resort-Grade Bath",
    timeline: "3 Weeks",
    hasSplitSlider: true,
  },
  {
    id: 5,
    category: "countertops",
    beforeImg: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
    afterImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    title: "Indian Wells Book-Matched Calacatta Quartz Fabrication",
    location: "Indian Wells, CA",
    scope: "Mitred Edge Slabs",
    timeline: "1.5 Weeks",
    hasSplitSlider: true,
  },
  {
    id: 6,
    category: "full-home",
    beforeImg: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
    afterImg: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
    title: "Bermuda Dunes Complete Mid-Century Architectural Modernization",
    location: "Bermuda Dunes, CA",
    scope: "Whole-Home Remodel",
    timeline: "10 Weeks",
    hasSplitSlider: true,
  },
];

function SplitProjectCard({ project }: { project: PortfolioProject }) {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  return (
    <div className="bg-[#141414] rounded-2xl overflow-hidden border border-white/10 card-hover-lift group flex flex-col justify-between">
      {/* Interactive Split View */}
      <div
        className="relative aspect-[4/3] w-full select-none cursor-ew-resize overflow-hidden touch-pan-y"
        onMouseMove={(e) => handleMove(e.clientX, e.currentTarget.getBoundingClientRect())}
        onTouchMove={(e) => handleMove(e.touches[0].clientX, e.currentTarget.getBoundingClientRect())}
      >
        {/* AFTER Image */}
        <div className="absolute inset-0">
          <Image
            src={project.afterImg}
            alt={`${project.title} Remodel After`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center group-hover:brightness-[1.03] transition-all"
          />
          <div className="absolute bottom-3 right-3 bg-black/85 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 sm:px-2.5 sm:py-1 rounded shadow-md pointer-events-none">
            AFTER
          </div>
        </div>

        {/* BEFORE Image (Clipped with Slider) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPos}%` }}
        >
          <div className="relative h-full w-full" style={{ width: "100%" }}>
            <Image
              src={project.beforeImg}
              alt={`${project.title} Remodel Before`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center brightness-90 group-hover:brightness-95 transition-all"
            />
            <div className="absolute bottom-3 left-3 bg-black/85 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 sm:px-2.5 sm:py-1 rounded shadow-md pointer-events-none">
              BEFORE
            </div>
          </div>
        </div>

        {/* Divider Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white z-10 pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-white text-black shadow-lg flex items-center justify-center border border-gray-300">
            <ArrowLeftRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

      {/* Card Info */}
      <div className="p-5 sm:p-6 space-y-3">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span className="font-semibold text-white uppercase tracking-wider text-[11px] bg-white/5 border border-white/10 px-2 py-0.5 rounded">
            {project.scope}
          </span>
          <span className="font-mono text-[11px]">{project.timeline}</span>
        </div>

        <div>
          <h3 className="font-bold text-white text-base sm:text-lg leading-snug uppercase heading-condensed">
            {project.title}
          </h3>
          <p className="text-xs text-gray-400 font-mono mt-1">{project.location}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomePortfolio() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");

  const filteredProjects =
    activeCategory === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="relative bg-[#111111] text-white py-20 sm:py-28 lg:py-36 border-b border-white/10 overflow-hidden">
      
      {/* Subtle Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 reveal-init">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-gray-400 uppercase heading-condensed mb-3">
            <span className="w-4 h-px bg-white/40" />
            <span>AUTHENTIC BEFORE &amp; AFTER SHOWCASE</span>
            <span className="w-4 h-px bg-white/40" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-white uppercase tracking-tight heading-condensed">
            RECENT TRANSFORMATIONS
          </h2>

          <p className="text-sm sm:text-base text-gray-300 mt-4 leading-relaxed font-normal">
            Drag the interactive split slider across any project to inspect the exact precision, alignment, and level of craftsmanship delivered to our Coachella Valley homeowners.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12 reveal-init delay-100">
          {[
            { id: "all", label: "ALL PROJECTS" },
            { id: "kitchen", label: "KITCHEN PROJECTS" },
            { id: "bathroom", label: "BATHROOM PROJECTS" },
            { id: "countertops", label: "COUNTERTOPS" },
            { id: "full-home", label: "FULL HOME REMODELS" },
          ].map((tab) => {
            const isSelected = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id as CategoryFilter)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-white text-black shadow-lg scale-105"
                    : "bg-[#141414] text-gray-300 border border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, idx) => (
            <div key={project.id} className={`reveal-init delay-${(idx % 3 + 1) * 100}`}>
              <SplitProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Bottom CTA Row */}
        <div className="mt-14 sm:mt-20 text-center reveal-init delay-200">
          <Link
            href="/kitchenremodeling"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded btn-invert-white font-bold uppercase tracking-wider text-xs sm:text-sm shadow-xl transform hover:-translate-y-0.5"
          >
            <span>VIEW COMPLETE KITCHEN SHOWCASE &amp; VIDEO</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
