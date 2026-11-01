"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Play, X, Shield, ShieldCheck, MapPin, Users, FileText, DollarSign, Hammer, Home } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export default function HomeHero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[100svh] min-h-screen flex items-center bg-[#0a0a0a] overflow-hidden">
        
        {/* 1. Background Remodeling Image with Next.js Optimization */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/countertops-hero.jpg"
            alt="Luxury Kitchen Remodeling with Waterfall Island in Coachella Valley"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.88] contrast-[1.04] scale-[1.01]"
          />

          {/* 2. Architectural Multi-Layer Gradients - Dark on left for readability while highlighting kitchen photo */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/30 sm:from-black/90 sm:via-black/65 sm:to-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/40" />

          {/* 3. Subtle Architectural Blueprint Grid Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />

          {/* Subtle architectural vertical layout lines */}
          <div className="max-w-[1320px] mx-auto h-full px-4 sm:px-6 lg:px-8 relative pointer-events-none hidden lg:block">
            <div className="w-full h-full border-x border-white/[0.04]" />
          </div>
        </div>

        {/* 4. Hero Content Container */}
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-12 xs:py-16 sm:py-24 lg:py-32 relative z-10 w-full">
          <div className="max-w-3xl lg:max-w-4xl space-y-4 sm:space-y-6 animate-in fade-in slide-in-from-bottom-3 duration-700">
            
            {/* Top Trust Bar (Replacing Google Rating) */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-300 font-medium pt-2">
              <div className="inline-flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#cbb08a] shrink-0" />
                <span className="text-white font-semibold">Licensed General Contractor</span>
              </div>
              <span className="hidden sm:inline text-white/20">•</span>
              <div className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#cbb08a] shrink-0" />
                <span>Serving the Coachella Valley &amp; Surrounding Areas</span>
              </div>
              <span className="hidden sm:inline text-white/20">•</span>
              <div className="inline-flex items-center gap-2">
                <Users className="w-4 h-4 text-[#cbb08a] shrink-0" />
                <span>Local &amp; Trusted by Homeowners</span>
              </div>
            </div>

            {/* Small Label */}
            <div className="inline-block text-xs sm:text-sm font-bold tracking-[0.22em] text-gray-300 uppercase heading-condensed drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] pt-1">
              SIMPLIFIED HOME REMODELING
            </div>

            {/* Main Headline (Condensed, Bold, Luxury Gold Gradient on Second Line) */}
            <h1 className="text-3xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-black text-white tracking-tight uppercase leading-[0.92] heading-condensed drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              SIMPLIFY YOUR REMODEL. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eed4b6] via-[#cbb08a] to-[#e4c9a6]">
                LOVE YOUR KITCHEN.
              </span>
            </h1>

            {/* Subheadline & Main Description */}
            <div className="space-y-2 max-w-2xl pt-1">
              <p className="text-sm xs:text-base sm:text-lg text-gray-200 leading-relaxed font-normal drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                Kitchen &amp; bathroom remodeling, custom cabinetry, countertops, flooring, and complete home transformations throughout the Coachella Valley.
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              
              {/* Primary CTA: Get Your Free Estimate */}
              <a
                href="#quote-form"
                className="w-full sm:w-auto px-8 py-4 rounded btn-invert-white font-bold uppercase tracking-wider text-xs sm:text-sm text-center shadow-2xl transform hover:-translate-y-0.5 active:scale-[0.99] flex items-center justify-center gap-2.5 group"
              >
                <span>GET YOUR FREE ESTIMATE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary CTA: View Our Projects (Links directly to project gallery & video) */}
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(true)}
                className="w-full sm:w-auto px-7 py-4 rounded btn-outline-fill font-bold uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-3 backdrop-blur-md transform hover:-translate-y-0.5 active:scale-[0.99] group cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-[#cbb08a] group-hover:text-black transition-colors shadow-sm">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>VIEW OUR PROJECTS</span>
                <ArrowRight className="w-4 h-4 ml-0.5 group-hover:translate-x-1 transition-transform" />
              </button>

            </div>

            {/* Bottom Trust Points (4 Clean Items with Icons, Coordinates removed) */}
            <div className="pt-6 sm:pt-8 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm text-gray-300">
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-[#cbb08a] shrink-0" />
                <span className="font-medium text-white">Licensed • Bonded &amp; Insured</span>
              </div>
              <div className="flex items-center gap-2.5">
                <DollarSign className="w-4 h-4 text-[#cbb08a] shrink-0" />
                <span className="font-medium text-white">Transparent Pricing</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Hammer className="w-4 h-4 text-[#cbb08a] shrink-0" />
                <span className="font-medium text-white">Quality Craftsmanship</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Home className="w-4 h-4 text-[#cbb08a] shrink-0" />
                <span className="font-medium text-white">Clean Jobsites &amp; Clear Communication</span>
              </div>
            </div>

          </div>
        </div>

        {/* Subtle Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
          <span className="text-[10px] uppercase font-mono tracking-widest text-gray-400">SCROLL</span>
          <div className="w-4 h-7 rounded-full border border-white/30 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
          </div>
        </div>

      </section>

      {/* Video Story Modal */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-300"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 flex items-center justify-between border-b border-white/10 bg-[#111111]">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#cbb08a] animate-pulse" />
                <span className="font-bold text-white uppercase text-xs sm:text-sm tracking-wider heading-condensed">
                  SIMPLIFIED HOME REMODELING — OUR CRAFTSMANSHIP STORY
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white text-gray-300 hover:text-black flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close video modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Video Player */}
            <div className="relative aspect-[16/9] w-full bg-black">
              <video
                src="/videos/remodeling-video.mp4"
                controls
                autoPlay
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
