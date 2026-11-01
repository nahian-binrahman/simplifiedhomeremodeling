"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface ServiceCard {
  number: string;
  title: string;
  description: string;
  ctaText: string;
  image: string;
  href: string;
}

const servicesList: ServiceCard[] = [
  {
    number: "01",
    title: "KITCHEN REMODELING",
    description: "Custom cabinetry, countertops, islands, backsplashes & complete kitchen transformations.",
    ctaText: "EXPLORE KITCHEN REMODELING",
    image: "/images/countertops-hero.jpg",
    href: "/kitchen-remodeling",
  },
  {
    number: "02",
    title: "BATHROOM REMODELING",
    description: "Custom showers, vanities, tile, flooring & complete bathroom transformations.",
    ctaText: "EXPLORE BATHROOM REMODELING",
    image: "/images/bathroom-hero.jpg",
    href: "/bathroom-remodeling",
  },
  {
    number: "03",
    title: "COUNTERTOPS",
    description: "Quartz, quartzite, granite & porcelain fabrication and installation.",
    ctaText: "EXPLORE COUNTERTOPS",
    image: "/images/countertop-after-1.jpg",
    href: "/countertops",
  },
  {
    number: "04",
    title: "CABINETRY",
    description: "Custom & semi-custom cabinetry, cabinet refacing, refinishing & storage solutions.",
    ctaText: "EXPLORE CABINETRY",
    image: "/images/cabinetry-hero.jpg",
    href: "/cabinetry",
  },
  {
    number: "05",
    title: "FLOORING & TILE",
    description: "Luxury vinyl plank, laminate, tile, flooring preparation & installation.",
    ctaText: "EXPLORE FLOORING & TILE",
    image: "/images/flooring-hero.jpg",
    href: "/flooring",
  },
];

export default function HomeServices() {
  return (
    <section id="services" className="relative bg-[#0a0a0a] text-white py-20 sm:py-28 lg:py-36 border-b border-white/10 overflow-hidden">
      
      {/* Subtle Architectural Blueprint Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 reveal-init">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-[#cbb08a] uppercase heading-condensed mb-3">
            <span className="w-4 h-px bg-[#cbb08a]" />
            <span>OUR SERVICES</span>
            <span className="w-4 h-px bg-[#cbb08a]" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-black text-white uppercase tracking-tight leading-[0.96] heading-condensed">
            EVERYTHING YOU NEED TO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eed4b6] via-[#cbb08a] to-[#e4c9a6]">
              TRANSFORM YOUR HOME.
            </span>
          </h2>
          
          <p className="text-sm sm:text-base text-gray-300 mt-4 leading-relaxed font-normal max-w-2xl mx-auto">
            From kitchens and bathrooms to countertops, cabinetry and flooring, Simplified Home Remodeling brings your entire project together with quality craftsmanship and clear communication.
          </p>
        </div>

        {/* 5 Image-Based Service Cards (Grid on Desktop, Swipe/Grid on Mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3.5 xl:gap-4 mb-14 sm:mb-16 reveal-init delay-100">
          {servicesList.map((service) => (
            <Link
              key={service.number}
              href={service.href}
              className="group relative rounded-2xl overflow-hidden bg-[#141414] border border-white/15 hover:border-[#cbb08a] transition-all duration-300 flex flex-col justify-end min-h-[420px] sm:min-h-[460px] lg:min-h-[480px] shadow-2xl hover:shadow-[0_12px_35px_rgba(203,176,138,0.18)] cursor-pointer"
            >
              {/* Background Project Photography with Subtle Zoom on Hover */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.title} by Simplified Home Remodeling`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  className="object-cover object-center brightness-[0.82] group-hover:brightness-[0.92] group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Dark Vignette Gradients for High Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/85" />
              </div>

              {/* Card Content (Anchored to Bottom) */}
              <div className="relative z-10 p-5 sm:p-5 flex flex-col justify-between h-full">
                
                {/* Top Number */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-black text-white/70 group-hover:text-[#cbb08a] transition-colors tracking-widest">
                    {service.number}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-[#cbb08a] transition-colors" />
                </div>

                {/* Bottom Details & CTA */}
                <div className="space-y-3 pt-24">
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight heading-condensed group-hover:text-[#eed4b6] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-300 leading-relaxed mt-1.5 line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  {/* Card Bottom CTA with Circle Arrow */}
                  <div className="pt-2 border-t border-white/15 flex items-center justify-between text-[11px] font-bold text-gray-200 group-hover:text-white uppercase tracking-wider heading-condensed">
                    <span className="flex items-center gap-1 link-underline-slide">
                      <span>{service.ctaText}</span>
                      <span>→</span>
                    </span>
                    <div className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-white group-hover:text-black flex items-center justify-center transition-all duration-300 shrink-0">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA Strip: Not Sure Where to Start? */}
        <div className="text-center space-y-3 reveal-init delay-200 pt-2">
          <div className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase heading-condensed">
            NOT SURE WHERE TO START?
          </div>
          <div>
            <a
              href="#quote-form"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded btn-invert-white font-bold uppercase tracking-wider text-xs sm:text-sm shadow-xl transform hover:-translate-y-0.5 active:scale-[0.99] group"
            >
              <span>TELL US ABOUT YOUR PROJECT</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
