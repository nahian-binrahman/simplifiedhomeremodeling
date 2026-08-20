"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, Award, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function AboutIntro() {
  return (
    <section id="about" className="relative bg-[#111111] text-white py-20 sm:py-28 lg:py-36 border-b border-white/10 overflow-hidden">
      
      {/* Background Architectural Grid Lines */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* =========================================
              LEFT COLUMN: Overlapping Interior Images + Floating Badges
             ========================================= */}
          <div className="lg:col-span-6 relative reveal-init">
            
            {/* Architectural Frame Decorative Lines */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-white/20 pointer-events-none hidden sm:block" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-white/20 pointer-events-none hidden sm:block" />

            <div className="relative pr-4 sm:pr-8 pb-8 sm:pb-12">
              
              {/* Primary Main Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
                  alt="Modern Living & Kitchen Remodel by Simplified Home Remodeling"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center brightness-95 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                
                {/* Image Location Watermark */}
                <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md border border-white/15 px-3 py-1 rounded text-[11px] font-mono uppercase tracking-wider text-gray-300">
                  PALM DESERT RESIDENCE
                </div>
              </div>

              {/* Secondary Overlapping Accent Image */}
              <div className="absolute -bottom-4 right-0 sm:right-4 w-[52%] sm:w-[48%] aspect-[4/3] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-2 border-white/20 group/sec">
                <Image
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=85"
                  alt="Luxury Bathroom Suite Remodel Detail"
                  fill
                  sizes="30vw"
                  className="object-cover object-center group-hover/sec:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-2.5 left-3 text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider heading-condensed">
                  SPA MASTER SUITE
                </div>
              </div>

              {/* Floating Glassmorphism Badge #1 */}
              <div className="absolute top-1/2 -left-2 sm:-left-6 -translate-y-1/2 bg-[#0a0a0a]/90 backdrop-blur-md border border-white/20 p-3.5 sm:p-4 rounded-xl shadow-2xl z-20 max-w-[210px] hidden sm:flex items-center gap-3 card-hover-lift">
                <div className="w-10 h-10 rounded-lg bg-white text-black flex items-center justify-center shrink-0 font-bold shadow-md">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base font-black text-white heading-condensed leading-none">15+ YEARS</div>
                  <div className="text-[11px] text-gray-400 font-medium leading-tight mt-1">Master Craftsmanship Standard</div>
                </div>
              </div>

              {/* Floating Glassmorphism Badge #2 (Bottom-Left) */}
              <div className="absolute -bottom-2 left-4 sm:left-6 bg-[#0a0a0a]/90 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-xl shadow-2xl z-20 flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold text-white tracking-wider uppercase heading-condensed">
                  100% FIXED-PRICE CONTRACTS
                </span>
              </div>

            </div>

          </div>

          {/* =========================================
              RIGHT COLUMN: Editorial Content & Highlight
             ========================================= */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7 reveal-init delay-100">
            
            {/* Small Heading */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-gray-400 uppercase heading-condensed">
                <span className="w-6 h-px bg-white/40" />
                <span>GET TO KNOW US</span>
              </div>

              {/* Large Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-white uppercase tracking-tight leading-[0.95] heading-condensed">
                YOUR VISION, <br className="hidden sm:inline" />
                OUR CRAFTSMANSHIP
              </h2>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-normal">
              Our mission is simple: transform your vision into reality with honesty, craftsmanship, and care. From design to final installation, we deliver beautiful spaces built around your lifestyle.
            </p>

            {/* Highlight Box */}
            <div className="p-5 sm:p-6 rounded-xl bg-[#141414] border-l-4 border-l-white border border-white/10 shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 translate-x-4 -translate-y-4 w-20 h-20 bg-white/5 rounded-full blur-xl pointer-events-none" />
              
              <div className="flex items-start gap-3.5">
                <Sparkles className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="text-xs uppercase font-bold tracking-widest text-gray-400 heading-condensed">
                    OUR COMMITMENT
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white italic text-italic-accent leading-snug">
                    &ldquo;We Create Beautiful And Lasting Home Transformations&rdquo;
                  </h3>
                </div>
              </div>
            </div>

            {/* Value Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {[
                "Licensed, Bonded & Insured In-House Team",
                "Clean Site Protocol with Daily Dust Containment",
                "Full City Permit & HOA ARC Handling",
                "10-Year Workmanship & Structural Warranty",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-300 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Button: Learn More */}
            <div className="pt-3">
              <a
                href="#services"
                className="inline-flex items-center gap-3 px-8 py-4 rounded btn-invert-white font-bold uppercase tracking-wider text-xs sm:text-sm shadow-xl transform hover:-translate-y-0.5 active:scale-[0.99] group"
              >
                <span>LEARN MORE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
