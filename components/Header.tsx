"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  ChevronDown,
  Menu,
  X,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { BUSINESS } from "@/lib/business";
import Logo from "@/components/Logo";

interface ServiceNavItem {
  title: string;
  desc: string;
  href: string;
  badge?: string;
}

const serviceNavItems: ServiceNavItem[] = [
  {
    title: "Kitchen Remodeling",
    desc: "Gourmet islands, custom cabinetry & chef layouts",
    href: "/kitchen-remodeling",
    badge: "POPULAR",
  },
  {
    title: "Bathroom Remodeling",
    desc: "Spa master ensuites, curbless rain showers & soaking tubs",
    href: "/bathroom-remodeling",
    badge: "POPULAR",
  },
  {
    title: "Countertops & Slabs",
    desc: "Calacatta quartz, quartzite & mitred waterfall edges",
    href: "/countertops",
  },
  {
    title: "Custom Cabinetry",
    desc: "Architectural millwork, rift white oak & Blum soft-close",
    href: "/cabinetry",
  },
  {
    title: "Luxury Flooring",
    desc: "European white oak, large format porcelain & LVP",
    href: "/flooring",
  },
  {
    title: "Whole-Home Renovations",
    desc: "Open-concept layout re-engineering & sliding glass walls",
    href: "/#services",
  },
];

const coachellaCities = [
  "Palm Desert",
  "Palm Springs",
  "Rancho Mirage",
  "La Quinta",
  "Indian Wells",
  "Cathedral City",
  "Indio",
  "Bermuda Dunes",
  "Coachella",
  "Desert Hot Springs",
  "Thousand Palms",
  "Thermal",
];

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAreasOpen, setIsAreasOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const servicesRef = useRef<HTMLDivElement | null>(null);
  const areasRef = useRef<HTMLDivElement | null>(null);

  const isLandingPage = [
    "/kitchenremodeling",
    "/kitchen-remodeling",
    "/bathroom-remodeling",
    "/countertops",
    "/cabinetry",
    "/flooring",
  ].includes(pathname);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
      if (areasRef.current && !areasRef.current.contains(event.target as Node)) {
        setIsAreasOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-[#0e0e0e]/95 backdrop-blur-xl border-b border-white/10 text-white transition-all duration-300">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-3 min-h-[72px] sm:min-h-[82px] flex items-center justify-between gap-4 lg:gap-8">
        
        {/* =========================================
            LEFT: Brand Logo & Monogram
           ========================================= */}
        <div className="flex items-center gap-6 shrink-0">
          <Link href="/" className="group flex items-center" aria-label="Simplified Home Remodeling Home">
            <Logo className="w-[115px] xs:w-[130px] sm:w-[145px] lg:w-[155px] h-auto transition-transform group-hover:scale-[1.02]" priority />
          </Link>
        </div>

        {/* =========================================
            CENTER: Navigation or Locations Banner
           ========================================= */}
        {isLandingPage ? (
          <div className="hidden lg:flex flex-col items-center justify-center text-center px-4 max-w-2xl mx-auto">
            <div className="flex items-center gap-1.5 text-sm font-semibold text-white tracking-wide mb-0.5">
              <MapPin className="w-4 h-4 text-white/90 shrink-0" />
              <span>Proudly Serving the Coachella Valley</span>
            </div>
            <div className="text-xs sm:text-[13px] text-gray-300 font-normal leading-snug space-y-0.5">
              <div>Palm Desert • Rancho Mirage • La Quinta • Indian Wells</div>
              <div>Palm Springs • Cathedral City • Indio • Bermuda Dunes</div>
              <div>Coachella • Desert Hot Springs • Thousand Palms • Thermal</div>
            </div>
          </div>
        ) : (
          <nav className="hidden xl:flex items-center gap-1.5 lg:gap-2 text-xs font-bold uppercase tracking-wider heading-condensed">
            {/* Services Dropdown */}
            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`px-3 py-2 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer ${
                  isServicesOpen
                    ? "bg-white/10 text-white"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
                aria-expanded={isServicesOpen}
              >
                <span>SERVICES</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    isServicesOpen ? "rotate-180 text-white" : "text-gray-400"
                  }`}
                />
              </button>

              {/* Services Dropdown Menu */}
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-[460px] p-3 rounded-2xl bg-[#141414] border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.9)] backdrop-blur-2xl grid grid-cols-2 gap-2 animate-in fade-in zoom-in-95 duration-200 z-50">
                  {serviceNavItems.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={() => setIsServicesOpen(false)}
                      className="p-3 rounded-xl hover:bg-white/5 transition-all group flex flex-col justify-between border border-transparent hover:border-white/10"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold text-white uppercase group-hover:text-white transition-colors">
                            {item.title}
                          </span>
                          {item.badge && (
                            <span className="text-[9px] bg-white text-black font-black px-1.5 py-0.5 rounded font-mono">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-gray-400 font-sans font-normal leading-snug line-clamp-2">
                          {item.desc}
                        </p>
                      </div>
                      <div className="pt-2 mt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-500 font-mono group-hover:text-white transition-colors">
                        <span>VIEW SPECS</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* About Us */}
            <Link
              href="/#about"
              className="px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              ABOUT US
            </Link>

            {/* Our Process */}
            <Link
              href="/#process"
              className="px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              PROCESS
            </Link>

            {/* Portfolio */}
            <Link
              href="/#portfolio"
              className="px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              BEFORE &amp; AFTER
            </Link>

            {/* Service Areas Dropdown */}
            <div
              ref={areasRef}
              className="relative"
              onMouseEnter={() => setIsAreasOpen(true)}
              onMouseLeave={() => setIsAreasOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsAreasOpen(!isAreasOpen)}
                className={`px-3 py-2 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer ${
                  isAreasOpen ? "bg-white/10 text-white" : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
                aria-expanded={isAreasOpen}
              >
                <MapPin className="w-3.5 h-3.5 text-gray-400" />
                <span>SERVICE AREAS</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    isAreasOpen ? "rotate-180 text-white" : "text-gray-400"
                  }`}
                />
              </button>

              {/* Service Areas Mega Card */}
              {isAreasOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[400px] p-5 rounded-2xl bg-[#141414] border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.9)] backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-200 z-50">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      COACHELLA VALLEY COMMUNITIES
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono">12 CITIES</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs font-sans font-medium text-gray-300">
                    {coachellaCities.map((city, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg hover:bg-white/5 hover:text-white transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                        <span>{city}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Blog */}
            <Link
              href="/#about"
              className="px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              BLOG
            </Link>

            {/* Contact */}
            <a
              href="#quote-form"
              className="px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              CONTACT
            </a>
          </nav>
        )}

        {/* =========================================
            RIGHT: Direct Call & Free Estimate CTAs
           ========================================= */}
        <div className="flex items-center gap-3 sm:gap-4">
          
          {/* Direct Phone Dial (Desktop) */}
          <a
            href={`tel:${BUSINESS.phone}`}
            className="hidden md:flex items-center gap-3 group px-3 py-1.5 rounded-xl hover:bg-white/5 transition-colors"
          >
            <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/15 group-hover:bg-white group-hover:text-black transition-all duration-200 shrink-0">
              <Phone className="w-4 h-4 fill-current" />
            </div>
            <div className="text-left">
              <div className="font-extrabold text-sm text-white tracking-tight leading-tight">
                {BUSINESS.formattedPhone}
              </div>
              <div className="text-[10px] text-gray-400 font-medium">Call for a Free Consultation</div>
            </div>
          </a>

          {/* Primary Navbar Action Button */}
          <a
            href="#quote-form"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg btn-invert-white font-bold uppercase tracking-wider text-xs shadow-lg transform hover:-translate-y-0.5"
          >
            <span>FREE ESTIMATE</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Phone Tap Button */}
          <a
            href={`tel:${BUSINESS.phone}`}
            className="md:hidden w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/15 active:bg-white active:text-black"
            aria-label="Call phone number directly"
          >
            <Phone className="w-4 h-4 fill-current" />
          </a>

          {/* Mobile Hamburger Toggle (hidden on landing pages) */}
          {!isLandingPage && (
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          )}
        </div>

      </div>

      {/* =========================================
          MOBILE SLIDE-OUT NAVIGATION DRAWER
         ========================================= */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#111111] border-b border-white/15 px-4 py-6 space-y-5 animate-in slide-in-from-top-3 duration-300">
          
          {/* Main Links */}
          <div className="space-y-1 text-sm font-bold uppercase tracking-wider heading-condensed">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg hover:bg-white/5 text-white"
            >
              HOMEPAGE
            </Link>

            <Link
              href="/kitchen-remodeling"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-4 py-2.5 rounded-lg bg-white/5 text-white"
            >
              <span>KITCHEN REMODELING</span>
              <span className="text-[10px] bg-white text-black font-bold px-2 py-0.5 rounded font-mono">
                POPULAR
              </span>
            </Link>

            <Link
              href="/#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg hover:bg-white/5 text-gray-300 hover:text-white"
            >
              ALL SERVICES
            </Link>

            <Link
              href="/#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg hover:bg-white/5 text-gray-300 hover:text-white"
            >
              ABOUT US
            </Link>

            <Link
              href="/#process"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg hover:bg-white/5 text-gray-300 hover:text-white"
            >
              5-STEP PROCESS
            </Link>

            <Link
              href="/#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg hover:bg-white/5 text-gray-300 hover:text-white"
            >
              BEFORE &amp; AFTER GALLERY
            </Link>

            <Link
              href="/#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg hover:bg-white/5 text-gray-300 hover:text-white"
            >
              BLOG &amp; ARTICLES
            </Link>

            <a
              href="#quote-form"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg hover:bg-white/5 text-gray-300 hover:text-white"
            >
              CONTACT US
            </a>
          </div>

          {/* Service Areas Chips */}
          <div className="pt-4 border-t border-white/10">
            <div className="text-[11px] font-mono uppercase tracking-wider text-gray-400 mb-2.5">
              PROUDLY SERVING COACHELLA VALLEY:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {coachellaCities.map((city, i) => (
                <span
                  key={i}
                  className="text-[11px] text-gray-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md font-sans"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>

          {/* Mobile Bottom Estimate Button */}
          <div className="pt-2">
            <a
              href="#quote-form"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-lg btn-invert-white font-bold uppercase tracking-wider text-xs text-center flex items-center justify-center gap-2 shadow-xl"
            >
              <span>REQUEST A FREE QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      )}

    </header>
  );
}
