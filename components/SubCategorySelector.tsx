"use client";

import React from "react";
import Link from "next/link";
import { Layers, CheckCircle2 } from "lucide-react";
import { SUBCATEGORIES_BY_SERVICE, SubCategoryData } from "@/lib/subcategories";

interface SubCategorySelectorProps {
  serviceSlug: string;
  currentSubCategorySlug?: string;
  locationSlug?: string;
}

export default function SubCategorySelector({
  serviceSlug,
  currentSubCategorySlug,
  locationSlug,
}: SubCategorySelectorProps) {
  const subCategories: SubCategoryData[] = SUBCATEGORIES_BY_SERVICE[serviceSlug] || [];

  if (subCategories.length === 0) return null;

  return (
    <div className="w-full bg-[#161616] border-b border-white/10 py-6">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-white/80" />
            <span className="text-xs uppercase font-bold tracking-wider text-gray-300">
              Select {serviceSlug.toUpperCase()} Option:
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {subCategories.map((sub) => {
              const isActive = sub.subCategorySlug === currentSubCategorySlug;
              const href = locationSlug
                ? `/${serviceSlug}/${sub.subCategorySlug}/${locationSlug}`
                : `/${serviceSlug}/${sub.subCategorySlug}`;

              return (
                <Link
                  key={sub.subCategorySlug}
                  href={href}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all duration-200 border flex items-center gap-1.5 ${
                    isActive
                      ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.15)] font-bold"
                      : "bg-[#202020] text-gray-300 border-white/10 hover:border-white/40 hover:bg-[#282828] hover:text-white"
                  }`}
                >
                  <span className="text-[10px] opacity-70 font-mono">{sub.numberPrefix}</span>
                  <span>{sub.title}</span>
                  {isActive && <CheckCircle2 className="w-3 h-3 text-black shrink-0" />}
                </Link>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}
