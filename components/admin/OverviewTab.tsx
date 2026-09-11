"use client";

import React from "react";
import {
  FileText,
  Image as ImageIcon,
  Newspaper,
  Inbox,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Phone,
  ShieldAlert,
} from "lucide-react";
import { AdminTab } from "./AdminSidebar";
import { SiteContent, BlogPost, LeadRecord } from "@/lib/cms-types";

interface OverviewTabProps {
  content: SiteContent;
  blogs: BlogPost[];
  leads: LeadRecord[];
  onNavigate: (tab: AdminTab) => void;
}

export default function OverviewTab({ content, blogs, leads, onNavigate }: OverviewTabProps) {
  const newLeads = leads.filter((l) => l.status === "New" || !l.status).length;
  const publishedBlogs = blogs.filter((b) => b.published).length;
  const replacedImagesCount = Object.keys(content.mediaReplacements || {}).length;

  return (
    <div className="space-y-6">
      {/* Header banner */}
      <div className="bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-850 border border-neutral-800 rounded-2xl p-6 relative overflow-hidden">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            Live Client Portal Active
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Welcome to Your Remodeling Website Dashboard
          </h1>
          <p className="text-neutral-400 text-sm mt-2 leading-relaxed">
            Manage your website content effortlessly. Update page texts, change hero images, publish remodeling blogs, and respond to incoming customer quote requests — without modifying any site design or code.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            onClick={() => onNavigate("pages")}
            className="bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-md shadow-amber-500/20"
          >
            Edit Page Texts
          </button>
          <button
            onClick={() => onNavigate("blogs")}
            className="bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-xs px-4 py-2.5 rounded-xl transition-all border border-neutral-700"
          >
            Create New Blog
          </button>
          <button
            onClick={() => onNavigate("media")}
            className="bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-xs px-4 py-2.5 rounded-xl transition-all border border-neutral-700"
          >
            Upload Images
          </button>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white px-3 py-2 transition-colors ml-auto"
          >
            <span>Preview Website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          onClick={() => onNavigate("leads")}
          className="bg-neutral-900 border border-neutral-800 hover:border-amber-500/40 rounded-2xl p-5 cursor-pointer transition-all group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">New Leads</span>
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Inbox className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-bold text-white mt-3">{newLeads}</div>
          <p className="text-xs text-neutral-500 mt-1">{leads.length} total customer submissions</p>
        </div>

        <div
          onClick={() => onNavigate("blogs")}
          className="bg-neutral-900 border border-neutral-800 hover:border-blue-500/40 rounded-2xl p-5 cursor-pointer transition-all group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Articles</span>
            <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Newspaper className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-bold text-white mt-3">{publishedBlogs}</div>
          <p className="text-xs text-neutral-500 mt-1">{blogs.length} articles in CMS</p>
        </div>

        <div
          onClick={() => onNavigate("media")}
          className="bg-neutral-900 border border-neutral-800 hover:border-purple-500/40 rounded-2xl p-5 cursor-pointer transition-all group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Custom Images</span>
            <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <ImageIcon className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-bold text-white mt-3">{replacedImagesCount}</div>
          <p className="text-xs text-neutral-500 mt-1">Live active image overrides</p>
        </div>

        <div
          onClick={() => onNavigate("pages")}
          className="bg-neutral-900 border border-neutral-800 hover:border-emerald-500/40 rounded-2xl p-5 cursor-pointer transition-all group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Service Pages</span>
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <FileText className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-bold text-white mt-3">6</div>
          <p className="text-xs text-neutral-500 mt-1">All pages fully editable</p>
        </div>
      </div>

      {/* Quick Summary Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Leads Preview */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-sm text-white flex items-center gap-2">
              <Inbox className="w-4 h-4 text-amber-400" />
              <span>Recent Quote Submissions</span>
            </h3>
            <button
              onClick={() => onNavigate("leads")}
              className="text-xs text-amber-400 hover:underline font-semibold"
            >
              View All →
            </button>
          </div>

          {leads.length === 0 ? (
            <p className="text-xs text-neutral-500 py-6 text-center">No leads received yet.</p>
          ) : (
            <div className="space-y-2.5">
              {leads.slice(0, 3).map((lead) => (
                <div
                  key={lead.id}
                  className="p-3 bg-neutral-950/60 border border-neutral-800/80 rounded-xl flex items-center justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white">{lead.full_name}</span>
                      <span className="text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/20 px-1.5 py-0.5 rounded font-medium">
                        {lead.project_type}
                      </span>
                    </div>
                    <p className="text-[11px] text-neutral-400 mt-1 flex items-center gap-2">
                      <span>{lead.phone}</span>
                      <span>•</span>
                      <span>{lead.city}</span>
                    </p>
                  </div>
                  <span className="text-[10px] text-neutral-400">
                    {new Date(lead.created_at).toLocaleDateString()}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Business Information Card */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-sm text-white flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Company Information</span>
            </h3>
            <button
              onClick={() => onNavigate("pages")}
              className="text-xs text-amber-400 hover:underline font-semibold"
            >
              Edit Info →
            </button>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex justify-between py-1.5 border-b border-neutral-800">
              <span className="text-neutral-400">Company Name:</span>
              <span className="font-semibold text-white">{content.general.name} {content.general.subName}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-neutral-800">
              <span className="text-neutral-400">Phone:</span>
              <span className="font-semibold text-amber-400">{content.general.formattedPhone}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-neutral-800">
              <span className="text-neutral-400">Email:</span>
              <span className="font-semibold text-white">{content.general.email}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-neutral-800">
              <span className="text-neutral-400">License:</span>
              <span className="font-semibold text-emerald-400">{content.general.cslbNumber}</span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="text-neutral-400">Hours:</span>
              <span className="font-semibold text-neutral-300">{content.general.hours}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
