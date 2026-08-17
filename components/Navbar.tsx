"use client";

import React, { useState } from "react";
import { Phone, Calendar, ShieldCheck, Menu, X } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-brand-black border-b border-white/10 text-xs py-2 px-4 text-brand-gray-400 hidden sm:block">
        <div className="section-container flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-brand-gray-300 font-medium">
              <ShieldCheck className="w-4 h-4 text-amber-500" />
              {BUSINESS.licenseInfo}
            </span>
            <span className="text-white/20">•</span>
            <span>{BUSINESS.primaryLocations}</span>
          </div>
          <div className="flex items-center gap-6">
            <span>{BUSINESS.hours}</span>
            <a
              href={`tel:${BUSINESS.phone}`}
              className="font-semibold text-white hover:text-amber-400 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              Direct: {BUSINESS.formattedPhone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 bg-brand-dark/95 backdrop-blur-md border-b border-white/10">
        <div className="section-container flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a href="#" className="flex flex-col">
            <span className="heading-condensed text-xl sm:text-2xl tracking-wider text-white">
              COACHELLA VALLEY
            </span>
            <span className="text-[10px] sm:text-xs tracking-[0.25em] text-amber-500 font-bold uppercase -mt-1">
              Home Remodeling & Design
            </span>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-brand-gray-300">
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#transformations" className="hover:text-white transition-colors">
              Before & After
            </a>
            <a href="#process" className="hover:text-white transition-colors">
              Our Process
            </a>
            <a href="#service-areas" className="hover:text-white transition-colors">
              Service Areas
            </a>
            <a href="#reviews" className="hover:text-white transition-colors">
              Reviews
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
          </nav>

          {/* CTA & Phone Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="px-4 py-2.5 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-medium flex items-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span className="hidden md:inline">{BUSINESS.formattedPhone}</span>
              <span className="md:hidden">Call</span>
            </a>

            <a
              href="#estimate"
              className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black text-xs sm:text-sm font-bold tracking-wide uppercase shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Get Free Estimate</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400"
              aria-label="Call direct"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-brand-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-brand-dark border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top-2">
            <nav className="flex flex-col space-y-3 text-base text-brand-gray-200">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-amber-400"
              >
                Remodeling Services
              </a>
              <a
                href="#transformations"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-amber-400"
              >
                Before & After Gallery
              </a>
              <a
                href="#process"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-amber-400"
              >
                Our 4-Step Process
              </a>
              <a
                href="#service-areas"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-amber-400"
              >
                Service Areas (Palm Desert & Beyond)
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-amber-400"
              >
                Homeowner Testimonials
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-amber-400"
              >
                Frequently Asked Questions
              </a>
            </nav>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <a
                href="#estimate"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-bold uppercase tracking-wider text-center block text-sm shadow-md"
              >
                Claim Free In-Home Estimate
              </a>
              <a
                href={`tel:${BUSINESS.phone}`}
                className="w-full py-3 rounded-lg bg-white/10 border border-white/20 text-white font-semibold text-center block text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                Call {BUSINESS.formattedPhone}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
