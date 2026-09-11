"use client";

import React, { useState } from "react";
import { SiteContent, PageSectionContent } from "@/lib/cms-types";
import {
  Save,
  Check,
  AlertCircle,
  Upload,
  Layers,
  Sparkles,
  HelpCircle,
  Home,
  Utensils,
  Bath,
  Box,
  SquareDashedBottom,
  Grid,
  Globe,
} from "lucide-react";

interface PagesEditorTabProps {
  content: SiteContent;
  onSaveContent: (newContent: SiteContent) => Promise<boolean>;
}

type PageSectionKey = "home" | "kitchen" | "bathroom" | "cabinetry" | "countertops" | "flooring" | "global";

export default function PagesEditorTab({ content, onSaveContent }: PagesEditorTabProps) {
  const [formData, setFormData] = useState<SiteContent>(JSON.parse(JSON.stringify(content)));
  const [activeSection, setActiveSection] = useState<PageSectionKey>("home");
  const [saving, setSaving] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [uploadingImageKey, setUploadingImageKey] = useState<string | null>(null);

  const handleSave = async () => {
    setSaving(true);
    setSuccessMsg("");
    const ok = await onSaveContent(formData);
    setSaving(false);
    if (ok) {
      setSuccessMsg("Changes saved and published live to website!");
      setTimeout(() => setSuccessMsg(""), 4000);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, targetField: string) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImageKey(targetField);
    try {
      const form = new FormData();
      form.append("file", file);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: form,
      });

      const data = await res.json();
      if (res.ok && data.success && data.url) {
        if (targetField === "home.heroImage") {
          setFormData((prev) => ({
            ...prev,
            home: { ...prev.home, heroImage: data.url },
          }));
        } else if (targetField.startsWith("services.")) {
          const serviceName = targetField.split(".")[1] as keyof typeof formData.services;
          setFormData((prev) => ({
            ...prev,
            services: {
              ...prev.services,
              [serviceName]: {
                ...prev.services[serviceName],
                heroImage: data.url,
              },
            },
          }));
        }
      }
    } catch (err) {
      alert("Error uploading image");
    } finally {
      setUploadingImageKey(null);
    }
  };

  const pagesNav = [
    { id: "home", label: "Home Page", icon: Home },
    { id: "kitchen", label: "Kitchen Remodeling", icon: Utensils },
    { id: "bathroom", label: "Bathroom Remodeling", icon: Bath },
    { id: "cabinetry", label: "Custom Cabinetry", icon: Box },
    { id: "countertops", label: "Countertops", icon: SquareDashedBottom },
    { id: "flooring", label: "Flooring", icon: Grid },
    { id: "global", label: "Global / Header & Footer", icon: Globe },
  ];

  return (
    <div className="space-y-6">
      {/* Top action bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-neutral-900 border border-neutral-800 p-4 rounded-2xl">
        <div>
          <h2 className="text-lg font-bold text-white tracking-tight">Website Page Content Editor</h2>
          <p className="text-xs text-neutral-400">
            Edit text, headings, bullet points and pictures across every page. Layouts and styles are preserved.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {successMsg && (
            <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 rounded-xl font-medium animate-fadeIn">
              <Check className="w-4 h-4" />
              <span>{successMsg}</span>
            </div>
          )}

          <button
            onClick={handleSave}
            disabled={saving}
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-md shadow-amber-500/20 disabled:opacity-50"
          >
            {saving ? (
              <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
            ) : (
              <Save className="w-4 h-4" />
            )}
            <span>{saving ? "Publishing..." : "Save & Publish Changes"}</span>
          </button>
        </div>
      </div>

      {/* Navigation Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {pagesNav.map((nav) => {
          const Icon = nav.icon;
          const isActive = activeSection === nav.id;
          return (
            <button
              key={nav.id}
              onClick={() => setActiveSection(nav.id as PageSectionKey)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                isActive
                  ? "bg-amber-500 text-black shadow-md shadow-amber-500/20 font-bold"
                  : "bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{nav.label}</span>
            </button>
          );
        })}
      </div>

      {/* Editor Content Area */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
        {/* HOME SECTION */}
        {activeSection === "home" && (
          <div className="space-y-6">
            <h3 className="text-base font-bold text-white border-b border-neutral-800 pb-3">
              Home Page Content
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                  Hero Badge Subtitle
                </label>
                <input
                  type="text"
                  value={formData.home.heroBadge}
                  onChange={(e) =>
                    setFormData({ ...formData, home: { ...formData.home, heroBadge: e.target.value } })
                  }
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-white text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                  Hero Main Heading
                </label>
                <textarea
                  rows={2}
                  value={formData.home.heroTitle}
                  onChange={(e) =>
                    setFormData({ ...formData, home: { ...formData.home, heroTitle: e.target.value } })
                  }
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-white text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                  Hero Description / Subtext
                </label>
                <textarea
                  rows={3}
                  value={formData.home.heroSubtitle}
                  onChange={(e) =>
                    setFormData({ ...formData, home: { ...formData.home, heroSubtitle: e.target.value } })
                  }
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-white text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                  Hero Primary Button Text
                </label>
                <input
                  type="text"
                  value={formData.home.heroCtaText}
                  onChange={(e) =>
                    setFormData({ ...formData, home: { ...formData.home, heroCtaText: e.target.value } })
                  }
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-white text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>

              {/* Hero Image Replacement */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                  Hero Background Image
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={formData.home.heroImage}
                    onChange={(e) =>
                      setFormData({ ...formData, home: { ...formData.home, heroImage: e.target.value } })
                    }
                    className="flex-1 bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-white text-sm focus:border-amber-500 focus:outline-none"
                  />
                  <label className="cursor-pointer bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold px-3 py-2.5 rounded-xl border border-neutral-700 flex items-center gap-1.5 shrink-0">
                    <Upload className="w-3.5 h-3.5" />
                    <span>{uploadingImageKey === "home.heroImage" ? "Uploading..." : "Upload"}</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleImageUpload(e, "home.heroImage")}
                    />
                  </label>
                </div>
              </div>

              <div className="md:col-span-2 pt-4 border-t border-neutral-800">
                <h4 className="text-sm font-bold text-white mb-3">About Section Texts</h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-400 mb-1">About Title</label>
                    <input
                      type="text"
                      value={formData.home.aboutTitle}
                      onChange={(e) =>
                        setFormData({ ...formData, home: { ...formData.home, aboutTitle: e.target.value } })
                      }
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2 text-white text-sm focus:border-amber-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-400 mb-1">About Subtitle</label>
                    <input
                      type="text"
                      value={formData.home.aboutSubtitle}
                      onChange={(e) =>
                        setFormData({ ...formData, home: { ...formData.home, aboutSubtitle: e.target.value } })
                      }
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2 text-white text-sm focus:border-amber-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-400 mb-1">About Paragraph</label>
                    <textarea
                      rows={3}
                      value={formData.home.aboutDescription}
                      onChange={(e) =>
                        setFormData({ ...formData, home: { ...formData.home, aboutDescription: e.target.value } })
                      }
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2 text-white text-sm focus:border-amber-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SERVICES SECTIONS (Kitchen, Bathroom, Cabinetry, Countertops, Flooring) */}
        {["kitchen", "bathroom", "cabinetry", "countertops", "flooring"].includes(activeSection) && (
          (() => {
            const serviceKey = activeSection as keyof typeof formData.services;
            const currentService = formData.services[serviceKey];
            return (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                  <h3 className="text-base font-bold text-white capitalize">
                    {currentService.title} Page Editor
                  </h3>
                  <span className="text-xs text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-lg">
                    Route: /{serviceKey === "kitchen" ? "kitchen-remodeling" : serviceKey === "bathroom" ? "bathroom-remodeling" : serviceKey}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                      Badge / Tagline
                    </label>
                    <input
                      type="text"
                      value={currentService.badge || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          services: {
                            ...formData.services,
                            [serviceKey]: { ...currentService, badge: e.target.value },
                          },
                        })
                      }
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-white text-sm focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                      Service Title
                    </label>
                    <input
                      type="text"
                      value={currentService.title}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          services: {
                            ...formData.services,
                            [serviceKey]: { ...currentService, title: e.target.value },
                          },
                        })
                      }
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-white text-sm focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                      Subtitle / Hook
                    </label>
                    <input
                      type="text"
                      value={currentService.subtitle}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          services: {
                            ...formData.services,
                            [serviceKey]: { ...currentService, subtitle: e.target.value },
                          },
                        })
                      }
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-white text-sm focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                      Detailed Description
                    </label>
                    <textarea
                      rows={3}
                      value={currentService.description || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          services: {
                            ...formData.services,
                            [serviceKey]: { ...currentService, description: e.target.value },
                          },
                        })
                      }
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-white text-sm focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                      Call-to-Action Button Text
                    </label>
                    <input
                      type="text"
                      value={currentService.ctaText || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          services: {
                            ...formData.services,
                            [serviceKey]: { ...currentService, ctaText: e.target.value },
                          },
                        })
                      }
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-white text-sm focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                      Page Hero Photo
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        type="text"
                        value={currentService.heroImage || ""}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            services: {
                              ...formData.services,
                              [serviceKey]: { ...currentService, heroImage: e.target.value },
                            },
                          })
                        }
                        className="flex-1 bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-white text-sm focus:border-amber-500 focus:outline-none"
                      />
                      <label className="cursor-pointer bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold px-3 py-2.5 rounded-xl border border-neutral-700 flex items-center gap-1.5 shrink-0">
                        <Upload className="w-3.5 h-3.5" />
                        <span>Upload</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleImageUpload(e, `services.${serviceKey}`)}
                        />
                      </label>
                    </div>
                  </div>

                  {/* Highlights / Features list */}
                  <div className="md:col-span-2 pt-4 border-t border-neutral-800">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                      Key Highlights & Features (One per line)
                    </label>
                    <textarea
                      rows={4}
                      value={(currentService.highlights || []).join("\n")}
                      onChange={(e) => {
                        const lines = e.target.value.split("\n").filter((l) => l.trim() !== "");
                        setFormData({
                          ...formData,
                          services: {
                            ...formData.services,
                            [serviceKey]: { ...currentService, highlights: lines },
                          },
                        });
                      }}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-white text-sm focus:border-amber-500 focus:outline-none font-mono"
                    />
                  </div>
                </div>
              </div>
            );
          })()
        )}

        {/* GLOBAL SECTION (Header, Footer, Phone, License, Trust Bar) */}
        {activeSection === "global" && (
          <div className="space-y-6">
            <h3 className="text-base font-bold text-white border-b border-neutral-800 pb-3">
              Global Company Info & Trust Elements
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                  Business Name
                </label>
                <input
                  type="text"
                  value={formData.general.name}
                  onChange={(e) =>
                    setFormData({ ...formData, general: { ...formData.general, name: e.target.value } })
                  }
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-white text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                  Business Sub-Name
                </label>
                <input
                  type="text"
                  value={formData.general.subName}
                  onChange={(e) =>
                    setFormData({ ...formData, general: { ...formData.general, subName: e.target.value } })
                  }
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-white text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                  Display Phone Number
                </label>
                <input
                  type="text"
                  value={formData.general.formattedPhone}
                  onChange={(e) =>
                    setFormData({ ...formData, general: { ...formData.general, formattedPhone: e.target.value } })
                  }
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-white text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                  Dialable Phone (numbers only)
                </label>
                <input
                  type="text"
                  value={formData.general.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, general: { ...formData.general, phone: e.target.value } })
                  }
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-white text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                  Contact Email
                </label>
                <input
                  type="email"
                  value={formData.general.email}
                  onChange={(e) =>
                    setFormData({ ...formData, general: { ...formData.general, email: e.target.value } })
                  }
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-white text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                  Contractor License (CSLB #)
                </label>
                <input
                  type="text"
                  value={formData.general.cslbNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, general: { ...formData.general, cslbNumber: e.target.value } })
                  }
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-white text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                  Operating Hours
                </label>
                <input
                  type="text"
                  value={formData.general.hours}
                  onChange={(e) =>
                    setFormData({ ...formData, general: { ...formData.general, hours: e.target.value } })
                  }
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-white text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                  Primary Service Cities
                </label>
                <input
                  type="text"
                  value={formData.general.primaryLocations}
                  onChange={(e) =>
                    setFormData({ ...formData, general: { ...formData.general, primaryLocations: e.target.value } })
                  }
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-white text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
