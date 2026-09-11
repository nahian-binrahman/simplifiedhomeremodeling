import { NextRequest, NextResponse } from "next/server";
import { getStoredSiteContent, saveStoredSiteContent } from "@/lib/cms-server";
import { SiteContent } from "@/lib/cms-types";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  try {
    const content = await getStoredSiteContent();
    return NextResponse.json({ success: true, content });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body || !body.content) {
      return NextResponse.json({ success: false, message: "Missing content payload" }, { status: 400 });
    }

    const saved = await saveStoredSiteContent(body.content as SiteContent);
    if (!saved) {
      return NextResponse.json({ success: false, message: "Failed to persist content" }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "Content updated successfully!" });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
