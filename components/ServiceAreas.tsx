"use client";

import React from "react";
import { MapPin, Sparkles, CheckCircle2, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const valleyAreas = [
  {
    city: "Palm Desert",
    zipCodes: "92260, 92211, 92261",
    neighborhoods: "South Palm Desert, Bighorn, Ironwood CC, El Paseo Corridor",
    featured: true,
  },
  {
    city: "Palm Springs",
    zipCodes: "92262, 92264",
    neighborhoods: "Old Las Palmas, Movie Colony, Deepwell, Vista Las Palmas",
    featured: true,
  },
  {
    city: "Rancho Mirage",
    zipCodes: "92270",
    neighborhoods: "Thunderbird CC, Tamarisk, The Springs, Mission Hills",
    featured: true,
  },
  {
    city: "La Quinta",
    zipCodes: "92253",
    neighborhoods: "PGA West, The Madison Club, Tradition, La Quinta Cove",
    featured: true,
  },
  {
    city: "Indian Wells",
    zipCodes: "92210",
    neighborhoods: "Vintage Club, Toscana, Desert Horizons, Mountain Cove",
    featured: true,
  },
  {
    city: "Cathedral City & Indio",
    zipCodes: "92234, 92201, 92203",
    neighborhoods: "Montage at Santa Rosa, Shadow Hills, Terra Lago",
    featured: false,
  },
];

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="section-spacing bg-brand-dark/50 border-b border-white/10">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            Local Valley Presence
          </div>
          <h2 className="heading-condensed text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            SERVING ALL COACHELLA VALLEY COMMUNITIES
          </h2>
          <p className="text-brand-gray-300 text-sm sm:text-base mt-3 leading-relaxed">
            Our crews, design team, and licensed subcontractors are based locally in the desert. We offer rapid in-person consultations and intimate knowledge of Riverside County building codes and HOA regulations.
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valleyAreas.map((area, idx) => (
            <div
              key={idx}
              className="subtle-card bg-brand-charcoal/70 border border-white/10 p-6 rounded-xl group hover:border-amber-500/40 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="heading-condensed text-xl text-white">
                      {area.city}
                    </h3>
                    <span className="text-[11px] text-brand-gray-400">
                      ZIP: {area.zipCodes}
                    </span>
                  </div>
                </div>

                {area.featured && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-400 uppercase">
                    Priority Hub
                  </span>
                )}
              </div>

              <div className="space-y-2 text-xs text-brand-gray-300 border-t border-white/10 pt-3">
                <span className="font-semibold text-brand-gray-400 block">
                  Key Communities Served:
                </span>
                <p className="text-brand-gray-300 leading-relaxed">
                  {area.neighborhoods}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1 text-green-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  HOA Pre-Approved Specs
                </span>
                <a
                  href={`/kitchen-remodeling/${area.city.toLowerCase().split(" ")[0].replace("&", "").replace(",", "") === "cathedral" ? "cathedral-city" : area.city.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-amber-400 hover:text-amber-300 font-semibold"
                >
                  View City Projects →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Contact Ribbon */}
        <div className="mt-12 text-center text-sm text-brand-gray-400">
          <span>Living outside these core zones? We also service Bermuda Dunes, Rancho Mirage Cove, and Thousand Palms. </span>
          <a
            href={`tel:${BUSINESS.phone}`}
            className="text-amber-400 font-bold hover:underline inline-flex items-center gap-1 ml-1"
          >
            <Phone className="w-3.5 h-3.5" />
            Call {BUSINESS.formattedPhone} to check availability.
          </a>
        </div>

      </div>
    </section>
  );
}
