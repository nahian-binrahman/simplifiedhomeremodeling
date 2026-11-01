"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, Award, ShieldCheck, MapPin, Handshake, Shield, Home, DollarSign, Wrench } from "lucide-react";

export default function AboutIntro() {
  return (
    <section id="about" className="relative bg-[#0d0d0d] text-white py-20 sm:py-28 lg:py-36 border-b border-white/10 overflow-hidden">
      
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
              TEXT & EDITORIAL CONTENT
              (Shows FIRST on mobile, RIGHT on desktop)
             ========================================= */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7 order-1 lg:order-2 reveal-init delay-100">
            
            {/* Small Heading: The Simplified Difference */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-gray-400 uppercase heading-condensed">
                <span className="w-6 h-px bg-[#cbb08a]" />
                <span>THE SIMPLIFIED DIFFERENCE</span>
              </div>

              {/* Large Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-white uppercase tracking-tight leading-[0.95] heading-condensed">
                YOUR VISION, <br className="hidden sm:inline" />
                <span className="text-white">OUR CRAFTSMANSHIP.</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-normal">
              We make remodeling simpler with clear communication, transparent pricing, quality craftsmanship, and attention to every detail. From the first consultation through final installation, our goal is to create a space you’ll love for years to come.
            </p>

            {/* Highlight Box: Our Commitment with Handshake Icon */}
            <div className="p-5 sm:p-6 rounded-xl bg-[#141414] border-l-4 border-l-[#cbb08a] border border-white/10 shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 translate-x-4 -translate-y-4 w-20 h-20 bg-[#cbb08a]/10 rounded-full blur-xl pointer-events-none" />
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#cbb08a] shrink-0">
                  <Handshake className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs uppercase font-bold tracking-widest text-gray-400 heading-condensed">
                    OUR COMMITMENT
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white italic text-italic-accent leading-snug">
                    &ldquo;Quality work. Clear communication. No shortcuts.&rdquo;
                  </h3>
                </div>
              </div>
            </div>

            {/* Value Checkpoints (2x2 Grid with Consistent Circle Icons) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-200 font-medium">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-[#cbb08a] shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <span>Licensed • Bonded • Insured</span>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-200 font-medium">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-[#cbb08a] shrink-0">
                  <Home className="w-4 h-4" />
                </div>
                <span>Clean &amp; Respectful Jobsites</span>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-200 font-medium">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-[#cbb08a] shrink-0">
                  <DollarSign className="w-4 h-4" />
                </div>
                <span>Clear, Transparent Pricing</span>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-200 font-medium">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-[#cbb08a] shrink-0">
                  <Wrench className="w-4 h-4" />
                </div>
                <span>Quality Materials &amp; Craftsmanship</span>
              </div>
            </div>

            {/* CTA Button: Meet Juan & Our Team */}
            <div className="pt-3">
              <a
                href="#quote-form"
                className="inline-flex items-center gap-3 px-8 py-4 rounded btn-invert-white font-bold uppercase tracking-wider text-xs sm:text-sm shadow-xl transform hover:-translate-y-0.5 active:scale-[0.99] group"
              >
                <span>MEET JUAN &amp; OUR TEAM</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

          {/* =========================================
              PHOTO COLUMN: Overlapping Completed Kitchen & Bathroom
              (Shows SECOND on mobile, LEFT on desktop)
             ========================================= */}
          <div className="lg:col-span-6 relative reveal-init order-2 lg:order-1">
            
            {/* Architectural Frame Decorative Lines */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-white/20 pointer-events-none hidden sm:block" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-white/20 pointer-events-none hidden sm:block" />

            <div className="relative pr-4 sm:pr-8 pb-8 sm:pb-12">
              
              {/* Primary Main Image: Completed Kitchen Project */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                <Image
                  src="/images/countertops-hero.jpg"
                  alt="Completed Kitchen Remodel in Palm Desert by Simplified Home Remodeling"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center brightness-95 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                
                {/* Image Location Label: Palm Desert Kitchen Remodel */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-lg flex items-center gap-2 shadow-xl">
                  <MapPin className="w-3.5 h-3.5 text-[#cbb08a]" />
                  <div className="text-left">
                    <div className="text-[11px] font-bold text-white uppercase tracking-wider heading-condensed">PALM DESERT</div>
                    <div className="text-[9px] text-gray-300 uppercase tracking-widest">Kitchen Remodel</div>
                  </div>
                </div>
              </div>

              {/* Secondary Overlapping Accent Image: Completed Bathroom Project */}
              <div className="absolute -bottom-4 right-0 sm:right-4 w-[54%] sm:w-[50%] aspect-[4/3] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85)] border-2 border-white/20 group/sec">
                <Image
                  src="/images/bathroom-hero.jpg"
                  alt="Completed Bathroom Suite Remodel in La Quinta"
                  fill
                  sizes="30vw"
                  className="object-cover object-center group-hover/sec:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                
                {/* Image Location Label: La Quinta Bathroom Remodel */}
                <div className="absolute bottom-2.5 left-3 bg-black/80 backdrop-blur-md border border-white/20 px-2.5 py-1 rounded flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-[#cbb08a]" />
                  <div className="text-left">
                    <div className="text-[10px] sm:text-[11px] font-bold text-white uppercase tracking-wider heading-condensed">LA QUINTA</div>
                    <div className="text-[8px] text-gray-300 uppercase tracking-wider">Bathroom Remodel</div>
                  </div>
                </div>
              </div>

              {/* Floating Badge #1 (Quality First - Craftsmanship Without Shortcuts) */}
              <div className="absolute top-1/2 -left-2 sm:-left-6 -translate-y-1/2 bg-[#0a0a0a]/95 backdrop-blur-md border border-white/20 p-3.5 sm:p-4 rounded-xl shadow-2xl z-20 max-w-[220px] hidden sm:flex items-center gap-3 card-hover-lift">
                <div className="w-10 h-10 rounded-lg bg-[#cbb08a] text-black flex items-center justify-center shrink-0 font-bold shadow-md">
                  <Award className="w-5 h-5 text-black" />
                </div>
                <div>
                  <div className="text-sm font-black text-white heading-condensed leading-none">QUALITY FIRST</div>
                  <div className="text-[11px] text-gray-300 font-medium leading-tight mt-1">Craftsmanship Without Shortcuts</div>
                </div>
              </div>

              {/* Floating Badge #2 (Clear & Transparent Pricing) */}
              <div className="absolute -bottom-2 left-4 sm:left-6 bg-[#0a0a0a]/95 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-xl shadow-2xl z-20 flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#cbb08a]" />
                <span className="text-xs font-bold text-white tracking-wider uppercase heading-condensed">
                  CLEAR &amp; TRANSPARENT PRICING
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
