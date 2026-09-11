"use client";

import React, { useState } from "react";
import { SiteContent, BlogPost, LeadRecord } from "@/lib/cms-types";
import {
  Settings,
  Database,
  Download,
  KeyRound,
  ShieldCheck,
  Check,
  Sparkles,
  RefreshCw,
} from "lucide-react";

interface SettingsTabProps {
  content: SiteContent;
  blogs: BlogPost[];
  leads: LeadRecord[];
}

export default function SettingsTab({ content, blogs, leads }: SettingsTabProps) {
  const [backedUp, setBackedUp] = useState(false);

  const handleBackupExport = () => {
    const backupData = {
      exportedAt: new Date().toISOString(),
      siteContent: content,
      blogs,
      leads,
    };

    const blob = new Blob([JSON.stringify(backupData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `simplified-website-backup-${new Date().toISOString().split("T")[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    setBackedUp(true);
    setTimeout(() => setBackedUp(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-2xl">
        <h2 className="text-lg font-bold text-white tracking-tight">System & Data Settings</h2>
        <p className="text-xs text-neutral-400">
          Manage website content backups, database connections, and security credentials.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Backup & Export */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Full Website Content Backup</h3>
              <p className="text-xs text-neutral-400">Export all texts, articles, and lead records.</p>
            </div>
          </div>

          <p className="text-xs text-neutral-400 leading-relaxed">
            Download a full JSON snapshot of your website text configuration, uploaded image maps, blog posts, and customer inquiries for safekeeping.
          </p>

          <button
            onClick={handleBackupExport}
            className="inline-flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-xs px-4 py-2.5 rounded-xl border border-neutral-700 transition-colors"
          >
            {backedUp ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Backup Downloaded!</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4 text-amber-400" />
                <span>Download Backup JSON</span>
              </>
            )}
          </button>
        </div>

        {/* Database & Storage Status */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Storage & Database Engine</h3>
              <p className="text-xs text-neutral-400">Active content persistence</p>
            </div>
          </div>

          <div className="p-3.5 bg-neutral-950 rounded-xl border border-neutral-800 space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-neutral-400">Content Storage Engine:</span>
              <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Active (Auto-saving)
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-neutral-400">Local Uploads Directory:</span>
              <span className="font-mono text-neutral-300">/public/uploads</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-neutral-400">Total Blog Posts:</span>
              <span className="font-semibold text-white">{blogs.length} articles</span>
            </div>
          </div>

          <p className="text-[11px] text-neutral-500">
            Changes saved through this dashboard immediately persist and update the live website with zero deployment delay.
          </p>
        </div>
      </div>
    </div>
  );
}
