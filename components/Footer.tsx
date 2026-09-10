"use client";

import React from "react";
import { MapPin, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-white/10 text-xs">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-white/10">
          
          {/* Logo with S Monogram */}
          <a href="/" className="group shrink-0" aria-label="Simplified Home Remodeling Home">
            <Logo className="w-[125px] sm:w-[145px] h-auto" />
          </a>

          {/* Center Serving Areas */}
          <div className="flex items-start gap-3 text-gray-300 group">
            <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-200">
              <MapPin className="w-3.5 h-3.5 text-gray-400 group-hover:text-black transition-colors" />
            </div>
            <div className="text-left text-xs leading-relaxed">
              <div className="text-white font-bold tracking-wide uppercase text-[11px] mb-1">
                Proudly Serving the Coachella Valley
              </div>
              <div className="text-gray-300 font-medium space-y-0.5 text-[11px] leading-normal">
                <div>Palm Desert • Rancho Mirage • La Quinta • Indian Wells</div>
                <div>Palm Springs • Cathedral City • Indio • Bermuda Dunes</div>
                <div>Coachella • Desert Hot Springs • Thousand Palms • Thermal</div>
              </div>
            </div>
          </div>

              {/* Right Phone */}
              <a
                href={`tel:${BUSINESS.phone}`}
                className="flex items-center gap-3 group"
              >
                {/* #1 Black <-> White Invert Hover */}
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/15 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-200 shrink-0">
                  <Phone className="w-4 h-4 fill-current" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-sm sm:text-base text-white tracking-tight leading-tight link-underline-slide text-gentle-lift">
                    {BUSINESS.formattedPhone}
                  </div>
                  <div className="text-[11px] text-gray-400 font-normal group-hover:text-white transition-colors">
                    Call or Text for a free consultation
                  </div>
                </div>
              </a>

            </div>

            {/* Social & Review Profiles Row */}
            <div className="py-6 border-b border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-gray-300 text-xs font-semibold uppercase tracking-wider">
                Connect &amp; Read Verified Reviews:
              </div>

              <div className="flex items-center gap-3">
                {/* Facebook */}
                <a
                  href={BUSINESS.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Simplified Home Remodeling on Facebook"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-200 shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* Yelp */}
                <a
                  href={BUSINESS.yelpUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Simplified Home Remodeling on Yelp"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#d32323] hover:border-[#d32323] transition-all duration-200 shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.784 14.85l2.71 1.764c.732.476 1.554-.253 1.187-.972l-1.39-2.73-2.507 1.938zm-1.85-2.73L8.224 9.39c-.732-.476-.366-1.448.513-1.448h3.072l-.875 4.178zm.725 3.018l-.875 4.178c-.183.876.878 1.448 1.464.795l2.122-2.368-2.711-2.605zm2.857-4.178h3.072c.879 0 1.245.972.513 1.448l-2.71 1.764-.875-3.212zm-3.804-1.258L8.59 7.334c-.586-.653-.183-1.67.732-1.448l2.962.725-.572 2.091z" />
                  </svg>
                </a>

                {/* Google */}
                <a
                  href={BUSINESS.googleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Simplified Home Remodeling on Google"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#4285F4] hover:border-[#4285F4] transition-all duration-200 shadow-sm"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                    <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href={BUSINESS.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Simplified Home Remodeling on YouTube"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#FF0000] hover:border-[#FF0000] transition-all duration-200 shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-gray-400 text-xs gap-3">
              <div>
                Licensed General Contractor • Financing Available | {BUSINESS.cslbNumber}
              </div>
              <div>
                © {new Date().getFullYear()} Simplified Home Remodeling. All Rights Reserved.
              </div>
            </div>

          </div>
        </footer>
      );
    }
