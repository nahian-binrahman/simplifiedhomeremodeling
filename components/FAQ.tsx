"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Phone, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How long does a typical kitchen or bathroom remodel take in the Coachella Valley?",
    answer:
      "A standard luxury kitchen remodel typically takes 3 to 6 weeks, while a spa master bathroom renovation takes 2 to 4 weeks once construction starts. Whole-home architectural renovations typically span 8 to 14 weeks. Because we pre-order all custom cabinetry, slabs, and fixtures before demolition day, we eliminate on-site idle time and avoid mid-project delays.",
  },
  {
    question: "Do you handle city building permits and HOA architectural approvals?",
    answer:
      "Yes, completely. We manage 100% of the architectural plan submissions, Riverside County / City building permits, engineering calculations, and HOA Architectural Review Committee (ARC) packages for country clubs like PGA West, Thunderbird, Ironwood, and Bighorn.",
  },
  {
    question: "What is your Fixed-Price Contract Guarantee?",
    answer:
      "Unlike traditional contractors who present vague low estimates only to hit you with costly change orders later, we provide a comprehensive, line-itemized fixed contract after your initial in-home design session. The price we agree on is the price you pay, guaranteed.",
  },
  {
    question: "Can we live in our home during the remodel, or do seasonal residents remodel while away?",
    answer:
      "We accommodate both scenarios seamlessly. If you reside in the home during construction, we install zippered dust barrier enclosures, commercial HEPA air scrubbers, and conduct daily end-of-day site cleanings. For snowbirds and seasonal homeowners, our project managers provide weekly high-definition video walkthroughs and real-time photo logs so you return to a finished home with zero hassle.",
  },
  {
    question: "Are you licensed, bonded, and insured in California?",
    answer:
      "Yes, we are a fully licensed California General Building Contractor (CA Lic #1084291) carrying full general liability insurance ($2,000,000 policy) and complete Workers' Compensation coverage for all tradesmen and craftsmen on your property.",
  },
  {
    question: "What warranty coverage do you provide on completed remodels?",
    answer:
      "We provide an industry-leading 10-Year Workmanship Warranty on all structural work, framing, cabinetry installation, waterproofing, and tile craft, backed by standard manufacturer warranties on all appliances, fixtures, and materials.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-spacing bg-brand-black border-b border-white/10">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Clear Answers
          </div>
          <h2 className="heading-condensed text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-brand-gray-300 text-sm sm:text-base mt-3 leading-relaxed">
            Everything you need to know about planning your desert home renovation, budgets, and timelines.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="subtle-card bg-brand-dark border border-white/10 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:text-amber-400 transition-colors"
                >
                  <span className="font-semibold text-base sm:text-lg text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "transform rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-brand-gray-300 text-sm sm:text-base leading-relaxed border-t border-white/5 pt-4 animate-in fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ CTA Card */}
        <div className="mt-14 max-w-3xl mx-auto p-6 rounded-xl bg-brand-charcoal border border-white/10 text-center space-y-4">
          <h3 className="heading-condensed text-xl sm:text-2xl text-white">
            Have a Specific Question About Your Property?
          </h3>
          <p className="text-xs sm:text-sm text-brand-gray-300 max-w-lg mx-auto">
            Speak directly with our senior desert project estimator today. No pressure, just honest architectural advice.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              Call {BUSINESS.formattedPhone}
            </a>
            <a
              href="#estimate"
              className="px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-bold uppercase tracking-wider text-sm flex items-center gap-2 shadow-md shadow-amber-500/20"
            >
              <span>Schedule Free In-Home Session</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
