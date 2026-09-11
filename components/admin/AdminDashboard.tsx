"use client";

import React, { useState, useEffect } from "react";
import AdminSidebar, { AdminTab } from "./AdminSidebar";
import OverviewTab from "./OverviewTab";
import PagesEditorTab from "./PagesEditorTab";
import MediaManagerTab from "./MediaManagerTab";
import BlogManagerTab from "./BlogManagerTab";
import LeadsManagerTab from "./LeadsManagerTab";
import SettingsTab from "./SettingsTab";
import { SiteContent, BlogPost, LeadRecord } from "@/lib/cms-types";
import { DEFAULT_SITE_CONTENT } from "@/lib/cms-defaults";
import { Loader2 } from "lucide-react";

interface AdminDashboardProps {
  onLogout: () => void;
}

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [currentTab, setCurrentTab] = useState<AdminTab>("overview");
  const [content, setContent] = useState<SiteContent>(DEFAULT_SITE_CONTENT);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [leads, setLeads] = useState<LeadRecord[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchAllData = async () => {
    try {
      const [contentRes, blogsRes, leadsRes] = await Promise.all([
        fetch("/api/admin/content", { cache: "no-store" }),
        fetch("/api/admin/blogs", { cache: "no-store" }),
        fetch("/api/admin/leads", { cache: "no-store" }),
      ]);

      if (contentRes.ok) {
        const cData = await contentRes.json();
        if (cData.content) setContent(cData.content);
      }
      if (blogsRes.ok) {
        const bData = await blogsRes.json();
        if (bData.blogs) setBlogs(bData.blogs);
      }
      if (leadsRes.ok) {
        const lData = await leadsRes.json();
        if (lData.leads) setLeads(lData.leads);
      }
    } catch (err) {
      console.error("Error fetching dashboard data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const handleSaveContent = async (newContent: SiteContent): Promise<boolean> => {
    try {
      const res = await fetch("/api/admin/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: newContent }),
      });
      if (res.ok) {
        setContent(newContent);
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  };

  const handleRefreshBlogs = async () => {
    const res = await fetch("/api/admin/blogs", { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      if (data.blogs) setBlogs(data.blogs);
    }
  };

  const handleRefreshLeads = async () => {
    const res = await fetch("/api/admin/leads", { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      if (data.leads) setLeads(data.leads);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center gap-3">
        <Loader2 className="w-8 h-8 text-amber-500 animate-spin" />
        <p className="text-xs text-neutral-400">Loading your content dashboard...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col md:flex-row">
      <AdminSidebar
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        onLogout={onLogout}
        leadCount={leads.filter((l) => l.status === "New" || !l.status).length}
        blogCount={blogs.length}
      />

      <main className="flex-1 p-4 md:p-8 max-w-7xl overflow-y-auto">
        {currentTab === "overview" && (
          <OverviewTab
            content={content}
            blogs={blogs}
            leads={leads}
            onNavigate={setCurrentTab}
          />
        )}

        {currentTab === "pages" && (
          <PagesEditorTab content={content} onSaveContent={handleSaveContent} />
        )}

        {currentTab === "media" && (
          <MediaManagerTab content={content} onSaveContent={handleSaveContent} />
        )}

        {currentTab === "blogs" && (
          <BlogManagerTab blogs={blogs} onRefreshBlogs={handleRefreshBlogs} />
        )}

        {currentTab === "leads" && (
          <LeadsManagerTab leads={leads} onRefreshLeads={handleRefreshLeads} />
        )}

        {currentTab === "settings" && (
          <SettingsTab content={content} blogs={blogs} leads={leads} />
        )}
      </main>
    </div>
  );
}
