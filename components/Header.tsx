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

interface SubNavItem {
  number: string;
  title: string;
  href: string;
}

interface MegaMenuSection {
  title: string;
  href: string;
  badge?: string;
  desc?: string;
  subCategories?: SubNavItem[];
}

const megaMenuServices: MegaMenuSection[] = [
  {
    title: "Kitchen Remodeling",
    desc: "Gourmet islands & full renovations",
    href: "/kitchen-remodeling",
    badge: "POPULAR",
  },
  {
    title: "Bathroom Remodeling",
    desc: "Curbless showers & spa retreats",
    href: "/bathroom-remodeling",
    badge: "POPULAR",
  },
  {
    title: "#3 Countertops",
    href: "/countertops",
    subCategories: [
      { number: "3.1", title: "Slab Countertops", href: "/countertops/slab-countertops" },
      { number: "3.2", title: "Pre-Fabricated Countertops", href: "/countertops/pre-fabricated-countertops" },
    ],
  },
  {
    title: "#4 Cabinetry",
    href: "/cabinetry",
    subCategories: [
      { number: "4.1", title: "Cabinetry Refinishing", href: "/cabinetry/cabinetry-refinishing" },
      { number: "4.2", title: "Cabinetry Refacing", href: "/cabinetry/cabinetry-refacing" },
      { number: "4.3", title: "Simplified Select", href: "/cabinetry/simplified-select-cabinetry" },
      { number: "4.4", title: "Simplified Signature", href: "/cabinetry/simplified-signature-cabinetry" },
    ],
  },
  {
    title: "#5 Flooring",
    href: "/flooring",
    subCategories: [
      { number: "5.1", title: "Luxury Vinyl Plank (LVP)", href: "/flooring/luxury-vinyl-plank" },
      { number: "5.2", title: "Laminate Flooring", href: "/flooring/laminate-flooring" },
      { number: "5.3", title: "Porcelain Tile", href: "/flooring/porcelain-tile" },
      { number: "5.4", title: "Natural Stone Tile", href: "/flooring/natural-stone-tile" },
    ],
  },
];

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAreasOpen, setIsAreasOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const pathname = usePathname();

  const servicesRef = useRef<HTMLDivElement | null>(null);
  const areasRef = useRef<HTMLDivElement | null>(null);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const areasTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleServicesEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  const handleAreasEnter = () => {
    if (areasTimeoutRef.current) clearTimeout(areasTimeoutRef.current);
    setIsAreasOpen(true);
  };

  const handleAreasLeave = () => {
    areasTimeoutRef.current = setTimeout(() => {
      setIsAreasOpen(false);
    }, 150);
  };

  const toggleMobileAccordion = (title: string) => {
    setMobileAccordion((prev) => (prev === title ? null : title));
  };

  const citySlugMap: { name: string; slug: string }[] = [
    { name: "Palm Desert", slug: "palm-desert" },
    { name: "Rancho Mirage", slug: "rancho-mirage" },
    { name: "La Quinta", slug: "la-quinta" },
    { name: "Indian Wells", slug: "indian-wells" },
    { name: "Palm Springs", slug: "palm-springs" },
    { name: "Cathedral City", slug: "cathedral-city" },
    { name: "Indio", slug: "indio" },
    { name: "Bermuda Dunes", slug: "bermuda-dunes" },
    { name: "Coachella", slug: "coachella" },
    { name: "Desert Hot Springs", slug: "desert-hot-springs" },
    { name: "Thousand Palms", slug: "thousand-palms" },
    { name: "Thermal", slug: "thermal" },
  ];

  // Determine current active service/subcategory base path
  const currentServicePath = (() => {
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) return "/kitchen-remodeling";
    const lastSegment = segments[segments.length - 1];
    const isLocationSlug = citySlugMap.some((c) => c.slug === lastSegment);
    if (isLocationSlug) {
      return "/" + segments.slice(0, -1).join("/");
    }
    return "/" + segments.join("/");
  })();

  const isLandingPage =
    [
      "/kitchenremodeling",
      "/kitchen-remodeling",
      "/bathroom-remodeling",
      "/countertops",
      "/cabinetry",
      "/flooring",
    ].includes(pathname) ||
    pathname.startsWith("/kitchen-remodeling/") ||
    pathname.startsWith("/bathroom-remodeling/") ||
    pathname.startsWith("/countertops/") ||
    pathname.startsWith("/cabinetry/") ||
    pathname.startsWith("/flooring/");

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
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
      if (areasTimeoutRef.current) clearTimeout(areasTimeoutRef.current);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileAccordion(null);
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
            CENTER: Proudly Serving + Locations Dropdown OR Full Nav
           ========================================= */}
        {isLandingPage ? (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3 text-center">
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white tracking-wide">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/90 shrink-0" />
              <span>Proudly Serving the Coachella Valley</span>
            </div>

            {/* Location Selector Dropdown in Header */}
            <div
              ref={areasRef}
              className="relative"
              onMouseEnter={handleAreasEnter}
              onMouseLeave={handleAreasLeave}
            >
              <button
                type="button"
                onClick={() => setIsAreasOpen(!isAreasOpen)}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all duration-200 border text-xs font-semibold cursor-pointer ${
                  isAreasOpen
                    ? "bg-[#222] text-white border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.08)]"
                    : "bg-white/5 text-gray-200 border-white/10 hover:border-white/30 hover:bg-white/10 hover:text-white"
                }`}
                aria-expanded={isAreasOpen}
                aria-label="Select service location"
              >
                <span className="truncate max-w-[130px] sm:max-w-[180px]">
                  {citySlugMap.find((c) => pathname.endsWith(`/${c.slug}`))?.name || "Select City (12 Cities)"}
                </span>
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-300 ${
                    isAreasOpen ? "rotate-180 text-white" : "text-gray-400"
                  }`}
                />
              </button>

              {/* Locations Dropdown Menu */}
              {isAreasOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[300px] sm:w-[360px] p-3 rounded-2xl bg-[#141414] border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.95)] backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-200 z-50 before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 before:content-['']">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 px-2">
                    <span className="text-[11px] font-bold text-white uppercase tracking-wider flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-white/90" />
                      Coachella Valley Cities
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono font-bold">12 CITIES</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1 max-h-[280px] overflow-y-auto">
                    {citySlugMap.map((item) => {
                      const isCurrent = pathname.endsWith(`/${item.slug}`);
                      return (
                        <Link
                          key={item.slug}
                          href={`${currentServicePath}/${item.slug}`}
                          onClick={() => setIsAreasOpen(false)}
                          className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                            isCurrent
                              ? "bg-white text-black font-bold shadow-sm"
                              : "text-gray-300 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              isCurrent ? "bg-black" : "bg-white/40"
                            }`}
                          />
                          <span className="truncate">{item.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <nav className="hidden xl:flex items-center gap-1.5 lg:gap-2 text-xs font-bold uppercase tracking-wider heading-condensed">
            {/* Desktop Services Mega-Menu */}
            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
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

              {/* Mega-Menu Multi-Column Dropdown */}
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[720px] p-5 rounded-2xl bg-[#141414] border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.95)] backdrop-blur-2xl grid grid-cols-3 gap-5 animate-in fade-in zoom-in-95 duration-200 z-50 before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 before:content-['']">
                  
                  {/* Column 1: Core Remodeling */}
                  <div className="space-y-3 border-r border-white/10 pr-3">
                    <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest font-mono">
                      CORE SERVICES
                    </div>
                    <Link
                      href="/kitchen-remodeling"
                      onClick={() => setIsServicesOpen(false)}
                      className="p-2.5 rounded-xl hover:bg-white/5 transition-all block border border-transparent hover:border-white/10"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-white uppercase">Kitchen Remodeling</span>
                        <span className="text-[9px] bg-white text-black font-black px-1.5 py-0.5 rounded font-mono">POPULAR</span>
                      </div>
                      <p className="text-[11px] text-gray-400 font-sans normal-case">Islands, custom cabinets &amp; chef layouts</p>
                    </Link>

                    <Link
                      href="/bathroom-remodeling"
                      onClick={() => setIsServicesOpen(false)}
                      className="p-2.5 rounded-xl hover:bg-white/5 transition-all block border border-transparent hover:border-white/10"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-white uppercase">Bathroom Remodeling</span>
                        <span className="text-[9px] bg-white text-black font-black px-1.5 py-0.5 rounded font-mono">POPULAR</span>
                      </div>
                      <p className="text-[11px] text-gray-400 font-sans normal-case">Spa master ensuites &amp; rain showers</p>
                    </Link>

                    <div className="pt-2 border-t border-white/10">
                      <Link
                        href="/#services"
                        onClick={() => setIsServicesOpen(false)}
                        className="text-[11px] text-gray-400 hover:text-white flex items-center justify-between font-mono py-1"
                      >
                        <span>WHOLE-HOME SPECS</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>

                  {/* Column 2: #3 Countertops & #4 Cabinetry */}
                  <div className="space-y-4 border-r border-white/10 pr-3">
                    <div>
                      <Link
                        href="/countertops"
                        onClick={() => setIsServicesOpen(false)}
                        className="text-xs font-bold text-white uppercase tracking-wider block hover:text-white/80 mb-1.5"
                      >
                        #3 Countertops
                      </Link>
                      <div className="space-y-1">
                        <Link
                          href="/countertops/slab-countertops"
                          onClick={() => setIsServicesOpen(false)}
                          className="flex items-center gap-1.5 text-[11px] text-gray-300 hover:text-white hover:bg-white/5 px-2 py-1 rounded normal-case"
                        >
                          <span className="font-mono text-[9px] opacity-70">3.1</span>
                          <span>Slab Countertops</span>
                        </Link>
                        <Link
                          href="/countertops/pre-fabricated-countertops"
                          onClick={() => setIsServicesOpen(false)}
                          className="flex items-center gap-1.5 text-[11px] text-gray-300 hover:text-white hover:bg-white/5 px-2 py-1 rounded normal-case"
                        >
                          <span className="font-mono text-[9px] opacity-70">3.2</span>
                          <span>Pre-Fabricated Countertops</span>
                        </Link>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-white/10">
                      <Link
                        href="/cabinetry"
                        onClick={() => setIsServicesOpen(false)}
                        className="text-xs font-bold text-white uppercase tracking-wider block hover:text-white/80 mb-1.5"
                      >
                        #4 Cabinetry
                      </Link>
                      <div className="space-y-1">
                        <Link
                          href="/cabinetry/cabinetry-refinishing"
                          onClick={() => setIsServicesOpen(false)}
                          className="flex items-center gap-1.5 text-[11px] text-gray-300 hover:text-white hover:bg-white/5 px-2 py-1 rounded normal-case"
                        >
                          <span className="font-mono text-[9px] opacity-70">4.1</span>
                          <span>Refinishing</span>
                        </Link>
                        <Link
                          href="/cabinetry/cabinetry-refacing"
                          onClick={() => setIsServicesOpen(false)}
                          className="flex items-center gap-1.5 text-[11px] text-gray-300 hover:text-white hover:bg-white/5 px-2 py-1 rounded normal-case"
                        >
                          <span className="font-mono text-[9px] opacity-70">4.2</span>
                          <span>Refacing</span>
                        </Link>
                        <Link
                          href="/cabinetry/simplified-select-cabinetry"
                          onClick={() => setIsServicesOpen(false)}
                          className="flex items-center gap-1.5 text-[11px] text-gray-300 hover:text-white hover:bg-white/5 px-2 py-1 rounded normal-case"
                        >
                          <span className="font-mono text-[9px] opacity-70">4.3</span>
                          <span>Simplified Select</span>
                        </Link>
                        <Link
                          href="/cabinetry/simplified-signature-cabinetry"
                          onClick={() => setIsServicesOpen(false)}
                          className="flex items-center gap-1.5 text-[11px] text-gray-300 hover:text-white hover:bg-white/5 px-2 py-1 rounded normal-case"
                        >
                          <span className="font-mono text-[9px] opacity-70">4.4</span>
                          <span>Simplified Signature</span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Column 3: #5 Flooring */}
                  <div className="space-y-3">
                    <Link
                      href="/flooring"
                      onClick={() => setIsServicesOpen(false)}
                      className="text-xs font-bold text-white uppercase tracking-wider block hover:text-white/80 mb-1.5"
                    >
                      #5 Luxury Flooring
                    </Link>
                    <div className="space-y-1">
                      <Link
                        href="/flooring/luxury-vinyl-plank"
                        onClick={() => setIsServicesOpen(false)}
                        className="flex items-center gap-1.5 text-[11px] text-gray-300 hover:text-white hover:bg-white/5 px-2 py-1 rounded normal-case"
                      >
                        <span className="font-mono text-[9px] opacity-70">5.1</span>
                        <span>Luxury Vinyl Plank (LVP)</span>
                      </Link>
                      <Link
                        href="/flooring/laminate-flooring"
                        onClick={() => setIsServicesOpen(false)}
                        className="flex items-center gap-1.5 text-[11px] text-gray-300 hover:text-white hover:bg-white/5 px-2 py-1 rounded normal-case"
                      >
                        <span className="font-mono text-[9px] opacity-70">5.2</span>
                        <span>Laminate Flooring</span>
                      </Link>
                      <Link
                        href="/flooring/porcelain-tile"
                        onClick={() => setIsServicesOpen(false)}
                        className="flex items-center gap-1.5 text-[11px] text-gray-300 hover:text-white hover:bg-white/5 px-2 py-1 rounded normal-case"
                      >
                        <span className="font-mono text-[9px] opacity-70">5.3</span>
                        <span>Porcelain Tile</span>
                      </Link>
                      <Link
                        href="/flooring/natural-stone-tile"
                        onClick={() => setIsServicesOpen(false)}
                        className="flex items-center gap-1.5 text-[11px] text-gray-300 hover:text-white hover:bg-white/5 px-2 py-1 rounded normal-case"
                      >
                        <span className="font-mono text-[9px] opacity-70">5.4</span>
                        <span>Natural Stone Tile</span>
                      </Link>
                    </div>
                  </div>

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
              onMouseEnter={handleAreasEnter}
              onMouseLeave={handleAreasLeave}
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
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[400px] p-5 rounded-2xl bg-[#141414] border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.9)] backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-200 z-50 before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 before:content-['']">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      COACHELLA VALLEY COMMUNITIES
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono">12 CITIES</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs font-sans font-medium text-gray-300">
                    {citySlugMap.map((item, idx) => (
                      <Link
                        key={idx}
                        href={`${currentServicePath}/${item.slug}`}
                        onClick={() => setIsAreasOpen(false)}
                        className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg hover:bg-white/10 hover:text-white transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                        <span>{item.name}</span>
                      </Link>
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
          MOBILE LOCATION STRIP (Touch-Optimized)
         ========================================= */}
      {isLandingPage && (
        <div className="lg:hidden border-t border-white/10 bg-[#0c0c0c] px-3 py-2 flex items-center gap-1.5 overflow-x-auto no-scrollbar scroll-smooth">
          <span className="text-[10px] font-bold text-white/90 shrink-0 flex items-center gap-1 uppercase tracking-wider pl-1">
            <MapPin className="w-3 h-3" />
            Cities:
          </span>
          {citySlugMap.map((item, idx) => {
            const isCurrentActive = pathname.endsWith(`/${item.slug}`);
            return (
              <Link
                key={idx}
                href={`${currentServicePath}/${item.slug}`}
                className={`text-[11px] whitespace-nowrap px-2.5 py-1 rounded-md shrink-0 transition-colors border ${
                  isCurrentActive
                    ? "bg-white text-black border-white font-bold shadow-sm"
                    : "bg-[#181818] text-gray-300 border-white/10 hover:text-white hover:border-white/40"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      )}

      {/* =========================================
          MOBILE SLIDE-OUT NAVIGATION DRAWER (With Nested Accordions)
         ========================================= */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#111111] border-b border-white/15 px-4 py-6 space-y-4 animate-in slide-in-from-top-3 duration-300 max-h-[85vh] overflow-y-auto">
          
          {/* Main Links & Accordions */}
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
              href="/bathroom-remodeling"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-4 py-2.5 rounded-lg hover:bg-white/5 text-white"
            >
              <span>BATHROOM REMODELING</span>
              <span className="text-[10px] bg-white text-black font-bold px-2 py-0.5 rounded font-mono">
                POPULAR
              </span>
            </Link>

            {/* Accordion: #3 Countertops */}
            <div className="rounded-lg bg-white/[0.03] border border-white/5 overflow-hidden">
              <button
                type="button"
                onClick={() => toggleMobileAccordion("countertops")}
                className="w-full flex items-center justify-between px-4 py-2.5 text-white text-left font-bold"
              >
                <span>#3 COUNTERTOPS</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileAccordion === "countertops" ? "rotate-180 text-white" : "text-gray-400"
                  }`}
                />
              </button>
              {mobileAccordion === "countertops" && (
                <div className="px-4 pb-3 pt-1 space-y-1.5 bg-black/40 border-t border-white/5 font-sans normal-case text-xs">
                  <Link
                    href="/countertops"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-gray-400 hover:text-white font-semibold"
                  >
                    View All Countertops Overview →
                  </Link>
                  <Link
                    href="/countertops/slab-countertops"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-gray-200 hover:text-white pl-2 border-l border-white/10"
                  >
                    3.1 Slab Countertops
                  </Link>
                  <Link
                    href="/countertops/pre-fabricated-countertops"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-gray-200 hover:text-white pl-2 border-l border-white/10"
                  >
                    3.2 Pre-Fabricated Countertops
                  </Link>
                </div>
              )}
            </div>

            {/* Accordion: #4 Cabinetry */}
            <div className="rounded-lg bg-white/[0.03] border border-white/5 overflow-hidden">
              <button
                type="button"
                onClick={() => toggleMobileAccordion("cabinetry")}
                className="w-full flex items-center justify-between px-4 py-2.5 text-white text-left font-bold"
              >
                <span>#4 CABINETRY</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileAccordion === "cabinetry" ? "rotate-180 text-white" : "text-gray-400"
                  }`}
                />
              </button>
              {mobileAccordion === "cabinetry" && (
                <div className="px-4 pb-3 pt-1 space-y-1.5 bg-black/40 border-t border-white/5 font-sans normal-case text-xs">
                  <Link
                    href="/cabinetry"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-gray-400 hover:text-white font-semibold"
                  >
                    View All Cabinetry Overview →
                  </Link>
                  <Link
                    href="/cabinetry/cabinetry-refinishing"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-gray-200 hover:text-white pl-2 border-l border-white/10"
                  >
                    4.1 Cabinetry Refinishing
                  </Link>
                  <Link
                    href="/cabinetry/cabinetry-refacing"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-gray-200 hover:text-white pl-2 border-l border-white/10"
                  >
                    4.2 Cabinetry Refacing
                  </Link>
                  <Link
                    href="/cabinetry/simplified-select-cabinetry"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-gray-200 hover:text-white pl-2 border-l border-white/10"
                  >
                    4.3 Simplified Select
                  </Link>
                  <Link
                    href="/cabinetry/simplified-signature-cabinetry"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-gray-200 hover:text-white pl-2 border-l border-white/10"
                  >
                    4.4 Simplified Signature
                  </Link>
                </div>
              )}
            </div>

            {/* Accordion: #5 Flooring */}
            <div className="rounded-lg bg-white/[0.03] border border-white/5 overflow-hidden">
              <button
                type="button"
                onClick={() => toggleMobileAccordion("flooring")}
                className="w-full flex items-center justify-between px-4 py-2.5 text-white text-left font-bold"
              >
                <span>#5 LUXURY FLOORING</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileAccordion === "flooring" ? "rotate-180 text-white" : "text-gray-400"
                  }`}
                />
              </button>
              {mobileAccordion === "flooring" && (
                <div className="px-4 pb-3 pt-1 space-y-1.5 bg-black/40 border-t border-white/5 font-sans normal-case text-xs">
                  <Link
                    href="/flooring"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-gray-400 hover:text-white font-semibold"
                  >
                    View All Flooring Overview →
                  </Link>
                  <Link
                    href="/flooring/luxury-vinyl-plank"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-gray-200 hover:text-white pl-2 border-l border-white/10"
                  >
                    5.1 Luxury Vinyl Plank (LVP)
                  </Link>
                  <Link
                    href="/flooring/laminate-flooring"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-gray-200 hover:text-white pl-2 border-l border-white/10"
                  >
                    5.2 Laminate Flooring
                  </Link>
                  <Link
                    href="/flooring/porcelain-tile"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-gray-200 hover:text-white pl-2 border-l border-white/10"
                  >
                    5.3 Porcelain Tile
                  </Link>
                  <Link
                    href="/flooring/natural-stone-tile"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-gray-200 hover:text-white pl-2 border-l border-white/10"
                  >
                    5.4 Natural Stone Tile
                  </Link>
                </div>
              )}
            </div>

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

            <a
              href="#quote-form"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg hover:bg-white/5 text-gray-300 hover:text-white"
            >
              CONTACT US
            </a>
          </div>

          {/* Service Areas Chips */}
          <div className="pt-3 border-t border-white/10">
            <div className="text-[11px] font-mono uppercase tracking-wider text-gray-400 mb-2">
              PROUDLY SERVING COACHELLA VALLEY:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {citySlugMap.map((item, i) => (
                <Link
                  key={i}
                  href={`${currentServicePath}/${item.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[11px] text-gray-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md font-sans hover:bg-white hover:text-black hover:border-white transition-colors"
                >
                  {item.name}
                </Link>
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
