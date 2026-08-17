"use client";

import React, { useState } from "react";
import { submitLead, LeadSubmission } from "@/lib/supabase";
import { BUSINESS } from "@/lib/business";
import { CheckCircle2, AlertCircle, ArrowRight, Sparkles, Shield, Clock, Phone } from "lucide-react";

export default function LeadForm({ title = "Request Your Free In-Home Estimate" }: { title?: string }) {
  const [formData, setFormData] = useState<LeadSubmission>({
    project_type: "Kitchen Remodel",
    timeline: "1-3 Months",
    full_name: "",
    phone: "",
    email: "",
    city: "Palm Desert",
    project_details: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.full_name || !formData.phone) {
      setErrorMessage("Please enter your name and phone number.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await submitLead(formData);
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
    <div id="estimate" className="subtle-card bg-brand-dark/95 border border-white/15 p-6 sm:p-8 rounded-xl shadow-2xl relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      
      {status === "success" ? (
        <div className="text-center py-10 space-y-5 animate-in fade-in zoom-in-95">
          <div className="w-16 h-16 bg-amber-500/20 border border-amber-500/40 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-9 h-9 text-amber-400" />
          </div>
          <h3 className="text-2xl font-bold heading-condensed text-white tracking-wide">
            Estimate Request Confirmed!
          </h3>
          <p className="text-brand-gray-300 text-sm max-w-md mx-auto leading-relaxed">
            Thank you, <strong className="text-white">{formData.full_name}</strong>. Our senior Coachella Valley project manager will review your <strong className="text-amber-400">{formData.project_type}</strong> project and contact you within 24 hours to schedule your in-home design session.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm tracking-wide uppercase flex items-center justify-center gap-2 transition-all shadow-lg"
            >
              <Phone className="w-4 h-4" />
              Need Immediate Help? Call {BUSINESS.formattedPhone}
            </a>
            <button
              onClick={() => {
                setStatus("idle");
                setFormData({
                  project_type: "Kitchen Remodel",
                  timeline: "1-3 Months",
                  full_name: "",
                  phone: "",
                  email: "",
                  city: "Palm Desert",
                  project_details: "",
                });
              }}
              className="w-full sm:w-auto px-5 py-3 rounded-lg bg-white/10 hover:bg-white/15 text-brand-gray-300 text-sm font-medium transition-colors"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="border-b border-white/10 pb-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Fixed-Price Guarantee
            </div>
            <h3 className="text-xl sm:text-2xl font-bold heading-condensed text-white tracking-wide">
              {title}
            </h3>
            <p className="text-xs sm:text-sm text-brand-gray-400 mt-1">
              Zero obligation. Free on-site spatial measurement & 3D remodeling concept.
            </p>
          </div>

          {status === "error" && (
            <div className="p-3 bg-red-900/30 border border-red-500/30 rounded-lg flex items-center gap-2 text-red-300 text-xs sm:text-sm">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-brand-gray-300 mb-1.5 uppercase tracking-wider">
                Project Type *
              </label>
              <select
                name="project_type"
                value={formData.project_type}
                onChange={handleChange}
                className="w-full bg-brand-charcoal border border-white/15 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
              >
                <option value="Kitchen Remodel">Kitchen Remodel & Waterfall Island</option>
                <option value="Master Bathroom">Spa Master Bathroom Renovation</option>
                <option value="Whole-Home Remodel">Whole-Home Desert Modern Remodel</option>
                <option value="Outdoor Living / Casita">Outdoor Kitchen, Patio & Casita / ADU</option>
                <option value="Custom Cabinetry & Flooring">Custom Cabinetry & Flooring</option>
                <option value="Other Renovation">Other Custom Renovation</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-brand-gray-300 mb-1.5 uppercase tracking-wider">
                Target Timeline *
              </label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full bg-brand-charcoal border border-white/15 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
              >
                <option value="Immediately (Within 30 Days)">Immediately (Within 30 Days)</option>
                <option value="1-3 Months">1 – 3 Months</option>
                <option value="3-6 Months">3 – 6 Months</option>
                <option value="Planning / Budgeting Phase">Planning & Budgeting Phase</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-brand-gray-300 mb-1.5 uppercase tracking-wider">
                Your Full Name *
              </label>
              <input
                type="text"
                name="full_name"
                required
                placeholder="e.g. Robert & Sarah Jenkins"
                value={formData.full_name}
                onChange={handleChange}
                className="w-full bg-brand-charcoal border border-white/15 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-brand-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-brand-gray-300 mb-1.5 uppercase tracking-wider">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="(760) 000-0000"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-brand-charcoal border border-white/15 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-brand-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-brand-gray-300 mb-1.5 uppercase tracking-wider">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="robert@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-brand-charcoal border border-white/15 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-brand-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-brand-gray-300 mb-1.5 uppercase tracking-wider">
                City / Community *
              </label>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full bg-brand-charcoal border border-white/15 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
              >
                {BUSINESS.serviceAreas.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-brand-gray-300 mb-1.5 uppercase tracking-wider">
              Project Vision / Notes (Optional)
            </label>
            <textarea
              name="project_details"
              rows={2}
              placeholder="Tell us what you would like to remodel (e.g. modern open kitchen layout, removing wall, quartz waterfall island)..."
              value={formData.project_details}
              onChange={handleChange}
              className="w-full bg-brand-charcoal border border-white/15 rounded-lg px-3.5 py-2 text-sm text-white placeholder-brand-gray-500 focus:outline-none focus:border-amber-500 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-3.5 rounded-lg bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-black font-bold uppercase tracking-wider text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-amber-500/25 transition-all transform active:scale-[0.99]"
          >
            {status === "submitting" ? (
              <span>Securing Consultation Slot...</span>
            ) : (
              <>
                <span>Claim Free In-Home Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          <div className="pt-2 flex flex-wrap items-center justify-between text-[11px] text-brand-gray-400 gap-2 border-t border-white/5">
            <span className="flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-amber-500" />
              100% Privacy Protected
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              Guaranteed Response in 24 Hrs
            </span>
            <span className="text-brand-gray-500">
              Or call <a href={`tel:${BUSINESS.phone}`} className="text-amber-400 font-semibold underline">{BUSINESS.formattedPhone}</a>
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
