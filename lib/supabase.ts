import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export interface LeadSubmission {
  project_type: string;
  timeline: string;
  full_name: string;
  phone: string;
  email: string;
  city: string;
  project_details?: string;
  created_at?: string;
}

export async function submitLead(data: LeadSubmission): Promise<{ success: boolean; message: string; error?: string }> {
  try {
    if (supabase) {
      const { error } = await supabase.from("remodeling_leads").insert([
        {
          ...data,
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) {
        console.error("Supabase insert error:", error);
        return { success: false, message: "Submission failed. Please call us directly.", error: error.message };
      }
      return { success: true, message: "Thank you! We received your request and will contact you within 24 hours." };
    }

    // Fallback simulated success when Supabase keys are not set yet
    console.log("[Demo Mode] Lead captured:", data);
    // Simulate brief network latency
    await new Promise((resolve) => setTimeout(resolve, 800));
    return {
      success: true,
      message: "Estimate request received! Our project consultant will reach out promptly.",
    };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "An unexpected error occurred.";
    console.error("Submission catch error:", err);
    return { success: false, message: "Unable to submit. Please call our office directly.", error: message };
  }
}
