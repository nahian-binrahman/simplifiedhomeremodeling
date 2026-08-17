"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Phone, CalendarCheck, Lock, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { submitLead, LeadSubmission } from "@/lib/supabase";

export default function QuoteSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    details: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      setErrorMessage("Please enter your full name and phone number.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const submission: LeadSubmission = {
        project_type: "Kitchen Remodel",
        timeline: "Immediate / Consultation",
        full_name: formData.fullName,
        phone: formData.phone,
        email: formData.email || "Not provided",
        city: formData.address || "Coachella Valley",
        project_details: formData.details,
      };

      const res = await submitLead(submission);
      if (res.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(res.message || "Failed to submit. Please call us directly.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please call us directly.");
    }
  };

  return (
    <section id="quote-form" className="relative bg-[#111111] text-white py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-white/10">
      {/* Background Kitchen Image with Deep Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1800&q=80"
          alt="Kitchen remodel background"
          fill
          className="object-cover object-center brightness-[0.25] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-black/85" />
      </div>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading & Contact Badges */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-[1.05] font-sans">
                READY TO REMODEL <br />
                YOUR KITCHEN?
              </h2>
              <div className="w-12 h-0.5 bg-white/40 rounded my-3.5" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-100">
                Let&apos;s Create a Kitchen <br />
                You&apos;ll Love.
              </h3>
            </div>

            <p className="text-sm sm:text-base text-gray-300 font-normal">
              Get your free consultation <br />
              and project estimate today.
            </p>

            {/* Direct Badges */}
            <div className="pt-4 space-y-4">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="flex items-center gap-3 text-gray-200 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/15 group-hover:bg-white group-hover:text-black transition-colors shrink-0">
                  <Phone className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <div className="font-bold text-sm sm:text-base text-white">
                    {BUSINESS.formattedPhone}
                  </div>
                  <div className="text-xs text-gray-400">Call Now</div>
                </div>
              </a>

              <div className="flex items-center gap-3 text-gray-200">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/15 shrink-0">
                  <CalendarCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-sm sm:text-base text-white">
                    Free Consultation
                  </div>
                  <div className="text-xs text-gray-400">No Obligation</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: White Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl p-6 sm:p-8 lg:p-10 shadow-2xl text-black">
              
              {status === "success" ? (
                <div className="text-center py-8 space-y-4 animate-in fade-in zoom-in-95">
                  <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Quote Request Received!
                  </h3>
                  <p className="text-gray-600 text-sm max-w-md mx-auto">
                    Thank you, <strong>{formData.fullName}</strong>. Our Coachella Valley project manager will contact you promptly at <strong>{formData.phone}</strong> to confirm your free consultation.
                  </p>
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setFormData({
                        fullName: "",
                        phone: "",
                        email: "",
                        address: "",
                        details: "",
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-gray-800"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === "error" && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Row 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="fullName"
                        required
                        placeholder="Full Name*"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full bg-white border border-gray-300 rounded px-3.5 py-3 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="Phone Number*"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-white border border-gray-300 rounded px-3.5 py-3 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address*"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white border border-gray-300 rounded px-3.5 py-3 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        name="address"
                        placeholder="Project Address*"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full bg-white border border-gray-300 rounded px-3.5 py-3 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 3: Textarea */}
                  <div>
                    <textarea
                      name="details"
                      rows={3}
                      placeholder="Tell us about your project*"
                      value={formData.details}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-300 rounded px-3.5 py-3 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-4 rounded bg-black hover:bg-gray-800 disabled:opacity-50 text-white font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.99]"
                  >
                    {status === "submitting" ? (
                      <span>SUBMITTING...</span>
                    ) : (
                      <>
                        <span>GET MY FREE QUOTE</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {/* Privacy note */}
                  <div className="text-center pt-1 text-xs text-gray-500 flex items-center justify-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-gray-400" />
                    <span>Your information is secure and will never be shared.</span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
