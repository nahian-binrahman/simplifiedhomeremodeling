"use client";

import React from "react";
import {
  LayoutDashboard,
  FileText,
  Image as ImageIcon,
  Newspaper,
  Inbox,
  Settings,
  ExternalLink,
  LogOut,
  Sparkles,
} from "lucide-react";

export type AdminTab = "overview" | "pages" | "media" | "blogs" | "leads" | "settings";

interface AdminSidebarProps {
  currentTab: AdminTab;
  onSelectTab: (tab: AdminTab) => void;
  onLogout: () => void;
  leadCount: number;
  blogCount: number;
}

export default function AdminSidebar({
  currentTab,
  onSelectTab,
  onLogout,
  leadCount,
  blogCount,
}: AdminSidebarProps) {
  const navItems: { id: AdminTab; label: string; icon: any; badge?: number }[] = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "pages", label: "Edit Page Texts", icon: FileText },
    { id: "media", label: "Media & Images", icon: ImageIcon },
    { id: "blogs", label: "Blog Articles", icon: Newspaper, badge: blogCount },
    { id: "leads", label: "Leads & Quotes", icon: Inbox, badge: leadCount },
    { id: "settings", label: "Settings & Sync", icon: Settings },
  ];

  return (
    <aside className="w-64 bg-neutral-900 border-r border-neutral-800 flex flex-col shrink-0 h-screen sticky top-0">
      {/* Brand Header */}
      <div className="p-5 border-b border-neutral-800 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
            <h2 className="font-bold text-sm text-white tracking-wider uppercase">Simplified CMS</h2>
          </div>
          <p className="text-[11px] text-neutral-400 mt-0.5">Content Control Hub</p>
        </div>
        <span className="text-[10px] uppercase font-bold tracking-widest bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded border border-amber-500/20">
          Client
        </span>
      </div>

      {/* Nav links */}
      <nav className="flex-1 p-3 space-y-1.5 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                isActive
                  ? "bg-amber-500 text-black shadow-md shadow-amber-500/20 font-bold"
                  : "text-neutral-300 hover:bg-neutral-800/80 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-4 h-4 ${isActive ? "text-black" : "text-neutral-400"}`} />
                <span>{item.label}</span>
              </div>
              {typeof item.badge === "number" && item.badge > 0 && (
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                    isActive ? "bg-black/20 text-black" : "bg-neutral-800 text-neutral-300 border border-neutral-700"
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Footer / Quick Actions */}
      <div className="p-3 border-t border-neutral-800 space-y-1.5 bg-neutral-950/40">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-medium text-neutral-400 hover:text-white hover:bg-neutral-800/60 transition-colors"
        >
          <div className="flex items-center gap-2">
            <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
            <span>View Live Site</span>
          </div>
          <span className="text-[10px] bg-neutral-800 px-1.5 py-0.5 rounded text-neutral-400">Open ↗</span>
        </a>

        <button
          onClick={onLogout}
          className="w-full flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
