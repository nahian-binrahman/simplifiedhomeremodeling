"use client";

import React, { useState } from "react";
import {
  Upload,
  Image as ImageIcon,
  Check,
  Copy,
  Trash2,
  ExternalLink,
  Sparkles,
  Layers,
  ArrowRightLeft,
} from "lucide-react";
import { SiteContent } from "@/lib/cms-types";

interface MediaManagerTabProps {
  content: SiteContent;
  onSaveContent: (newContent: SiteContent) => Promise<boolean>;
}

export default function MediaManagerTab({ content, onSaveContent }: MediaManagerTabProps) {
  const [uploading, setUploading] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const [uploadedImages, setUploadedImages] = useState<string[]>([
    "/images/hero-kitchen.jpg",
    "/images/bathroom-hero.jpg",
    "/images/cabinetry-hero.jpg",
    "/images/countertops-hero.jpg",
    "/images/flooring-hero.jpg",
  ]);

  const [replacements, setReplacements] = useState<Record<string, string>>(
    content.mediaReplacements || {}
  );
  const [targetOriginalSlot, setTargetOriginalSlot] = useState("/images/hero-kitchen.jpg");
  const [customUrl, setCustomUrl] = useState("");
  const [savingReplacements, setSavingReplacements] = useState(false);
  const [successNotice, setSuccessNotice] = useState("");

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const formData = new FormData();
      formData.append("file", file);

      try {
        const res = await fetch("/api/admin/upload", {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        if (res.ok && data.url) {
          setUploadedImages((prev) => [data.url, ...prev]);
        }
      } catch (err) {
        console.error("Upload error", err);
      }
    }
    setUploading(false);
  };

  const handleCopy = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 2500);
  };

  const handleApplyReplacement = async (newUrl: string, originalSlot: string) => {
    setSavingReplacements(true);
    const updated = {
      ...replacements,
      [originalSlot]: newUrl,
    };
    setReplacements(updated);

    const newContent = {
      ...content,
      mediaReplacements: updated,
    };

    const ok = await onSaveContent(newContent);
    setSavingReplacements(false);
    if (ok) {
      setSuccessNotice(`Swapped photo for "${originalSlot}" successfully!`);
      setTimeout(() => setSuccessNotice(""), 4000);
    }
  };

  const handleRemoveReplacement = async (originalSlot: string) => {
    const updated = { ...replacements };
    delete updated[originalSlot];
    setReplacements(updated);

    const newContent = {
      ...content,
      mediaReplacements: updated,
    };
    await onSaveContent(newContent);
  };

  const predefinedSlots = [
    { slot: "/images/hero-kitchen.jpg", label: "Homepage & Kitchen Hero Image" },
    { slot: "/images/bathroom-hero.jpg", label: "Bathroom Remodeling Hero Image" },
    { slot: "/images/cabinetry-hero.jpg", label: "Custom Cabinetry Hero Image" },
    { slot: "/images/countertops-hero.jpg", label: "Countertops Hero Image" },
    { slot: "/images/flooring-hero.jpg", label: "Flooring Hero Image" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-neutral-900 border border-neutral-800 p-4 rounded-2xl">
        <div>
          <h2 className="text-lg font-bold text-white tracking-tight">Media & Image Replacement Hub</h2>
          <p className="text-xs text-neutral-400">
            Upload pictures and swap images across any page instantly without writing code.
          </p>
        </div>

        {successNotice && (
          <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 rounded-xl font-medium">
            <Check className="w-4 h-4" />
            <span>{successNotice}</span>
          </div>
        )}
      </div>

      {/* Upload Zone */}
      <div className="bg-neutral-900 border-2 border-dashed border-neutral-800 hover:border-amber-500/50 rounded-2xl p-8 text-center transition-colors">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 mb-3">
          <Upload className="w-6 h-6" />
        </div>
        <h3 className="text-sm font-bold text-white">Upload New Pictures</h3>
        <p className="text-xs text-neutral-400 mt-1 max-w-md mx-auto">
          Upload remodeling before/after photos, project completions, or hero banners (JPG, PNG, WebP).
        </p>

        <label className="mt-4 inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs px-5 py-2.5 rounded-xl cursor-pointer transition-all shadow-md shadow-amber-500/20">
          <Upload className="w-4 h-4" />
          <span>{uploading ? "Uploading Image..." : "Select Files from Computer"}</span>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileUpload}
            disabled={uploading}
            className="hidden"
          />
        </label>
      </div>

      {/* Active Replacements Card */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
        <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
          <ArrowRightLeft className="w-4 h-4 text-amber-400" />
          <span>Active Image Replacements on Website</span>
        </h3>
        <p className="text-xs text-neutral-400 mb-4">
          Any photo swapped here replaces the original image slot across all public pages automatically.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {predefinedSlots.map((slotItem) => {
            const hasReplacement = Boolean(replacements[slotItem.slot]);
            const activeUrl = replacements[slotItem.slot] || slotItem.slot;

            return (
              <div
                key={slotItem.slot}
                className="bg-neutral-950 border border-neutral-800 rounded-xl p-4 flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">{slotItem.label}</span>
                    {hasReplacement ? (
                      <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded font-semibold">
                        Replaced
                      </span>
                    ) : (
                      <span className="text-[10px] bg-neutral-800 text-neutral-400 px-2 py-0.5 rounded">
                        Default
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-neutral-500 font-mono mt-1 truncate">{activeUrl}</p>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-neutral-900">
                  <input
                    type="text"
                    placeholder="Paste replacement image URL..."
                    defaultValue={replacements[slotItem.slot] || ""}
                    onBlur={(e) => {
                      if (e.target.value.trim() && e.target.value !== replacements[slotItem.slot]) {
                        handleApplyReplacement(e.target.value.trim(), slotItem.slot);
                      }
                    }}
                    className="flex-1 bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-1.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
                  />
                  {hasReplacement && (
                    <button
                      onClick={() => handleRemoveReplacement(slotItem.slot)}
                      className="text-xs text-red-400 hover:text-red-300 p-1.5 rounded-lg hover:bg-red-500/10 transition-colors"
                      title="Reset to default"
                    >
                      Reset
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Media Library Grid */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
        <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
          <ImageIcon className="w-4 h-4 text-amber-400" />
          <span>Uploaded Media Library ({uploadedImages.length})</span>
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {uploadedImages.map((imgUrl, idx) => (
            <div
              key={idx}
              className="group bg-neutral-950 border border-neutral-800 rounded-xl overflow-hidden flex flex-col"
            >
              <div className="h-28 bg-neutral-900 relative flex items-center justify-center overflow-hidden">
                <img
                  src={imgUrl}
                  alt="Asset"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
              </div>

              <div className="p-2.5 space-y-2">
                <p className="text-[11px] text-neutral-400 truncate font-mono">{imgUrl}</p>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handleCopy(imgUrl)}
                    className="flex-1 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-[10px] font-semibold py-1.5 rounded flex items-center justify-center gap-1 transition-colors"
                  >
                    {copiedUrl === imgUrl ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy URL</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
