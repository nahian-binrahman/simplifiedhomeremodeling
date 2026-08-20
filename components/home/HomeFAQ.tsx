"use client";

import React, { useState } from "react";
import { ChevronDown, Phone, ArrowRight, HelpCircle } from "lucide-react";
import { BUSINESS } from "@/lib/business";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes, absolutely. Simplified Home Remodeling is a fully licensed California General Building Contractor (CSLB #1084291) carrying comprehensive $2,000,000 general liability insurance and complete Workers' Compensation coverage for every craftsman on your property.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes. We offer 100% complimentary in-home design consultations and laser measurement audits across the Coachella Valley. After our initial visit, we provide a detailed, line-itemized fixed-price proposal with zero obligation.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We proudly serve homeowners throughout the entire Coachella Valley, including Palm Desert, Palm Springs, Rancho Mirage, La Quinta, Indian Wells, Cathedral City, Indio, Bermuda Dunes, Coachella, Desert Hot Springs, Thousand Palms, and Thermal.",
  },
  {
    question: "How long does remodeling take?",
    answer:
      "Timelines depend on the project scope: a standard luxury kitchen remodel typically takes 3 to 6 weeks; spa master bathroom renovations take 2 to 4 weeks; countertops take 5 to 10 days; and whole-home architectural renovations span 8 to 14 weeks. We pre-order all cabinetry, stone slabs, and fixtures before demolition to ensure zero on-site idle time.",
  },
  {
    question: "Do you provide warranties?",
    answer:
      "Yes. We stand behind our work with an industry-leading 10-Year Workmanship & Structural Warranty on all framing, cabinetry joinery, waterproofing, and tile installations, in addition to full manufacturer warranties on all installed appliances and fixtures.",
  },
];

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative bg-[#111111] text-white py-20 sm:py-28 lg:py-36 border-b border-white/10 overflow-hidden">
      
      {/* Background Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "70px 70px",
        }}
      />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20 reveal-init">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-gray-400 uppercase heading-condensed mb-3">
            <span className="w-4 h-px bg-white/40" />
            <span>CLEAR ANSWERS &amp; TRANSPARENCY</span>
            <span className="w-4 h-px bg-white/40" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-white uppercase tracking-tight heading-condensed">
            FREQUENTLY ASKED QUESTIONS
          </h2>

          <p className="text-sm sm:text-base text-gray-300 mt-4 leading-relaxed font-normal">
            Everything you need to know about planning, budgeting, and executing a stress-free remodel in the Coachella Valley.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4 reveal-init delay-100">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#141414] rounded-2xl border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-white hover:text-gray-200 transition-colors cursor-pointer"
                >
                  <span className="text-lg sm:text-xl font-bold uppercase heading-condensed tracking-wide">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-white text-black" : "text-white"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-7 text-sm sm:text-base text-gray-300 leading-relaxed font-normal border-t border-white/5 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Box */}
        <div className="max-w-3xl mx-auto mt-12 p-6 sm:p-8 rounded-2xl bg-[#0a0a0a] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left reveal-init delay-200">
          <div>
            <h3 className="text-xl font-bold text-white uppercase heading-condensed">
              Have another question about your project?
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Call our local Coachella Valley office directly for immediate answers.
            </p>
          </div>

          <a
            href={`tel:${BUSINESS.phone}`}
            className="px-6 py-3.5 rounded btn-invert-white font-bold uppercase tracking-wider text-xs flex items-center gap-2 shrink-0 shadow-lg"
          >
            <Phone className="w-4 h-4" />
            <span>CALL {BUSINESS.formattedPhone}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
