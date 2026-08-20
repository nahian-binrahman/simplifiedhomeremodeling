"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Play, X, Shield, Star, Volume2, VolumeX } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export default function HomeHero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[100svh] min-h-screen flex items-center bg-[#0a0a0a] overflow-hidden">
        
        {/* 1. Background Remodeling Image with Next.js Optimization */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90"
            alt="Luxury Home Remodeling in Coachella Valley"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.76] contrast-[1.04] scale-[1.02] transition-transform duration-1000"
          />

          {/* 2. Architectural Multi-Layer Gradients */}
          {/* Base Dark Gradient to ensure text pop */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/65 to-black/75 sm:bg-gradient-to-r sm:from-black/90 sm:via-black/60 sm:to-black/25" />
          {/* Bottom Vignette for seamless section transitions */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/30" />

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
          <div className="max-w-3xl lg:max-w-4xl space-y-4 sm:space-y-7 animate-in fade-in slide-in-from-bottom-3 duration-700">
            
            {/* Top Label & Trust Pill */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] sm:text-xs text-gray-200 font-medium shadow-sm">
                <span className="flex text-[#d32323] text-[10px] sm:text-xs">★★★★★</span>
                <span className="text-white font-bold tracking-wider">5.0 TOP RATED</span>
                <span className="text-white/20">•</span>
                <span className="text-gray-300 font-mono text-[10px] sm:text-[11px]">COACHELLA VALLEY</span>
              </div>

              <div className="hidden sm:inline-flex items-center gap-1.5 text-xs text-gray-400 font-mono tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>BOOKING ESTIMATES FOR THIS MONTH</span>
              </div>
            </div>

            {/* Small Label */}
            <div className="inline-block text-xs sm:text-sm font-bold tracking-[0.22em] text-gray-300 uppercase heading-condensed drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
              SIMPLIFIED HOME REMODELING
            </div>

            {/* Main Headline (Condensed, Bold, Architectural) */}
            <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-[88px] font-black text-white tracking-tight uppercase leading-[0.92] heading-condensed drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              TRANSFORM YOUR HOUSE <br className="hidden xs:inline" />
              <span className="text-white">INTO A DREAM HOME</span>
            </h1>

            {/* Subheadline with Serif Italic & Supporting Body */}
            <div className="space-y-1.5 max-w-2xl">
              <p className="text-base xs:text-lg sm:text-2xl md:text-[26px] text-gray-100 italic text-italic-accent leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                Expert remodeling solutions for kitchens, bathrooms, countertops, flooring, and complete home transformations.
              </p>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal pt-0.5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                Licensed master craftsmen, guaranteed fixed-price contracts, and white-glove site cleanliness across Palm Desert, Palm Springs, Rancho Mirage, and La Quinta.
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              
              {/* Primary CTA: Tell Us About Your Project */}
              <a
                href="#quote-form"
                className="w-full sm:w-auto px-8 py-4 rounded btn-invert-white font-bold uppercase tracking-wider text-xs sm:text-sm text-center shadow-2xl transform hover:-translate-y-0.5 active:scale-[0.99] flex items-center justify-center gap-2.5 group"
              >
                <span>TELL US ABOUT YOUR PROJECT</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary CTA: Watch Our Story */}
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(true)}
                className="w-full sm:w-auto px-7 py-4 rounded btn-outline-fill font-bold uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-3 backdrop-blur-md transform hover:-translate-y-0.5 active:scale-[0.99] group cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors shadow-sm">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>WATCH OUR STORY</span>
              </button>

            </div>

            {/* Bottom Meta & Coordinates Bar */}
            <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-400">
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-medium">
                <div className="flex items-center gap-1.5 text-gray-200">
                  <Shield className="w-4 h-4 text-white" />
                  <span>Licensed • Insured • Bonded</span>
                </div>
                <span className="hidden sm:inline text-white/20">•</span>
                <div>100% Fixed-Price Guarantee</div>
                <span className="hidden sm:inline text-white/20">•</span>
                <div>10-Year Workmanship Warranty</div>
              </div>

              <div className="hidden lg:block font-mono text-[11px] text-gray-500 tracking-wider">
                33.7206° N, 116.3775° W
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
                <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
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
