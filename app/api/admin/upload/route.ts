import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ success: false, message: "No file provided" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Sanitize filename
    const cleanName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_").toLowerCase();
    const uniqueFilename = `${Date.now()}-${cleanName}`;

    // 1. Save locally to public/uploads
    const uploadsDir = path.join(process.cwd(), "public", "uploads");
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }
    const localFilePath = path.join(uploadsDir, uniqueFilename);
    fs.writeFileSync(localFilePath, buffer);

    let publicUrl = `/uploads/${uniqueFilename}`;

    // 2. Upload to Supabase Storage if configured
    if (supabase) {
      try {
        const { data, error } = await supabase.storage
          .from("site-media")
          .upload(`images/${uniqueFilename}`, buffer, {
            contentType: file.type,
            upsert: true,
          });

        if (!error && data) {
          const { data: urlData } = supabase.storage
            .from("site-media")
            .getPublicUrl(`images/${uniqueFilename}`);
          if (urlData?.publicUrl) {
            publicUrl = urlData.publicUrl;
          }
        }
      } catch (storageErr) {
        console.warn("Supabase storage upload fallback to local:", storageErr);
      }
    }

    return NextResponse.json({
      success: true,
      url: publicUrl,
      filename: uniqueFilename,
      size: file.size,
      message: "Image uploaded successfully",
    });
  } catch (error: any) {
    console.error("Upload error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
