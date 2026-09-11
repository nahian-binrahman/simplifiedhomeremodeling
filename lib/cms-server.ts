import fs from "fs";
import path from "path";
import { SiteContent, BlogPost, LeadRecord } from "./cms-types";
import { DEFAULT_SITE_CONTENT, DEFAULT_BLOGS } from "./cms-defaults";
import { supabase } from "./supabase";

const DATA_DIR = path.join(process.cwd(), "data");
const CONTENT_FILE = path.join(DATA_DIR, "site-content.json");
const BLOGS_FILE = path.join(DATA_DIR, "blogs.json");
const LEADS_FILE = path.join(DATA_DIR, "leads.json");

function ensureDataDirectory() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

// ---------------- Site Content ----------------
export async function getStoredSiteContent(): Promise<SiteContent> {
  try {
    // Check Supabase if configured
    if (supabase) {
      const { data, error } = await supabase
        .from("site_content")
        .select("content")
        .eq("id", "main")
        .single();
      if (!error && data?.content) {
        return data.content as SiteContent;
      }
    }

    ensureDataDirectory();
    if (!fs.existsSync(CONTENT_FILE)) {
      fs.writeFileSync(CONTENT_FILE, JSON.stringify(DEFAULT_SITE_CONTENT, null, 2), "utf-8");
      return DEFAULT_SITE_CONTENT;
    }
    const raw = fs.readFileSync(CONTENT_FILE, "utf-8");
    return JSON.parse(raw) as SiteContent;
  } catch (err) {
    console.error("Error reading site content:", err);
    return DEFAULT_SITE_CONTENT;
  }
}

export async function saveStoredSiteContent(content: SiteContent): Promise<boolean> {
  try {
    ensureDataDirectory();
    fs.writeFileSync(CONTENT_FILE, JSON.stringify(content, null, 2), "utf-8");

    // Sync to Supabase if configured
    if (supabase) {
      await supabase.from("site_content").upsert({
        id: "main",
        content,
        updated_at: new Date().toISOString(),
      });
    }
    return true;
  } catch (err) {
    console.error("Error saving site content:", err);
    return false;
  }
}

// ---------------- Blog Management ----------------
export async function getStoredBlogs(): Promise<BlogPost[]> {
  try {
    if (supabase) {
      const { data, error } = await supabase
        .from("site_blogs")
        .select("*")
        .order("date", { ascending: false });
      if (!error && data && data.length > 0) {
        return data as BlogPost[];
      }
    }

    ensureDataDirectory();
    if (!fs.existsSync(BLOGS_FILE)) {
      fs.writeFileSync(BLOGS_FILE, JSON.stringify(DEFAULT_BLOGS, null, 2), "utf-8");
      return DEFAULT_BLOGS;
    }
    const raw = fs.readFileSync(BLOGS_FILE, "utf-8");
    return JSON.parse(raw) as BlogPost[];
  } catch (err) {
    console.error("Error reading blogs:", err);
    return DEFAULT_BLOGS;
  }
}

export async function saveStoredBlogs(blogs: BlogPost[]): Promise<boolean> {
  try {
    ensureDataDirectory();
    fs.writeFileSync(BLOGS_FILE, JSON.stringify(blogs, null, 2), "utf-8");

    if (supabase) {
      // Upsert blogs
      for (const blog of blogs) {
        await supabase.from("site_blogs").upsert(blog);
      }
    }
    return true;
  } catch (err) {
    console.error("Error saving blogs:", err);
    return false;
  }
}

// ---------------- Leads Management ----------------
export async function getStoredLeads(): Promise<LeadRecord[]> {
  try {
    if (supabase) {
      const { data, error } = await supabase
        .from("remodeling_leads")
        .select("*")
        .order("created_at", { ascending: false });
      if (!error && data) {
        return data.map((d: any) => ({
          id: d.id || String(Math.random()),
          project_type: d.project_type || "Remodeling",
          timeline: d.timeline || "Flexible",
          full_name: d.full_name || d.name || "Homeowner",
          phone: d.phone || "",
          email: d.email || "",
          city: d.city || "",
          project_details: d.project_details || "",
          created_at: d.created_at || new Date().toISOString(),
          status: d.status || "New",
        }));
      }
    }

    ensureDataDirectory();
    if (!fs.existsSync(LEADS_FILE)) {
      const sampleLeads: LeadRecord[] = [
        {
          id: "lead-101",
          project_type: "Kitchen Remodel",
          timeline: "Within 1 Month",
          full_name: "Robert Anderson",
          phone: "(760) 555-0192",
          email: "r.anderson@example.com",
          city: "Palm Desert",
          project_details: "Looking to replace cabinets with white shaker, install quartz waterfall island, and add new backsplash.",
          created_at: new Date(Date.now() - 3600000 * 5).toISOString(),
          status: "New",
        },
        {
          id: "lead-102",
          project_type: "Bathroom Remodel",
          timeline: "1-3 Months",
          full_name: "Elena Martinez",
          phone: "(760) 555-4821",
          email: "elena.m@example.com",
          city: "Rancho Mirage",
          project_details: "Convert master bathtub into walk-in shower with frameless glass and double vanity.",
          created_at: new Date(Date.now() - 3600000 * 28).toISOString(),
          status: "Contacted",
        },
      ];
      fs.writeFileSync(LEADS_FILE, JSON.stringify(sampleLeads, null, 2), "utf-8");
      return sampleLeads;
    }
    const raw = fs.readFileSync(LEADS_FILE, "utf-8");
    return JSON.parse(raw) as LeadRecord[];
  } catch (err) {
    console.error("Error reading leads:", err);
    return [];
  }
}

export async function saveStoredLeads(leads: LeadRecord[]): Promise<boolean> {
  try {
    ensureDataDirectory();
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), "utf-8");
    return true;
  } catch (err) {
    console.error("Error saving leads:", err);
    return false;
  }
}
