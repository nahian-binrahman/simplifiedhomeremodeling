import { NextRequest, NextResponse } from "next/server";
import { getStoredLeads, saveStoredLeads } from "@/lib/cms-server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  try {
    const leads = await getStoredLeads();
    return NextResponse.json({ success: true, leads });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { id, status } = await req.json();
    if (!id || !status) {
      return NextResponse.json({ success: false, message: "ID and status required" }, { status: 400 });
    }

    const leads = await getStoredLeads();
    const index = leads.findIndex((l) => l.id === id);
    if (index >= 0) {
      leads[index].status = status;
      await saveStoredLeads(leads);
      return NextResponse.json({ success: true, message: "Status updated" });
    }
    return NextResponse.json({ success: false, message: "Lead not found" }, { status: 404 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
