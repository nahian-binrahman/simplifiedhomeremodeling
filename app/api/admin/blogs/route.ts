import { NextRequest, NextResponse } from "next/server";
import { getStoredBlogs, saveStoredBlogs } from "@/lib/cms-server";
import { BlogPost } from "@/lib/cms-types";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const onlyPublished = searchParams.get("published") === "true";
    let blogs = await getStoredBlogs();

    if (onlyPublished) {
      blogs = blogs.filter((b) => b.published);
    }

    return NextResponse.json({ success: true, blogs });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const blog = (await req.json()) as BlogPost;
    if (!blog || !blog.title) {
      return NextResponse.json({ success: false, message: "Title is required" }, { status: 400 });
    }

    const blogs = await getStoredBlogs();
    const existingIndex = blogs.findIndex((b) => b.id === blog.id || (blog.slug && b.slug === blog.slug));

    if (!blog.id) {
      blog.id = "blog-" + Date.now();
    }
    if (!blog.slug) {
      blog.slug = blog.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
    }
    if (!blog.date) {
      blog.date = new Date().toISOString().split("T")[0];
    }

    let updatedList: BlogPost[];
    if (existingIndex >= 0) {
      updatedList = [...blogs];
      updatedList[existingIndex] = { ...blogs[existingIndex], ...blog };
    } else {
      updatedList = [blog, ...blogs];
    }

    await saveStoredBlogs(updatedList);
    return NextResponse.json({ success: true, blog, message: "Blog saved successfully" });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ success: false, message: "Blog ID required" }, { status: 400 });
    }

    const blogs = await getStoredBlogs();
    const filtered = blogs.filter((b) => b.id !== id);
    await saveStoredBlogs(filtered);

    return NextResponse.json({ success: true, message: "Blog deleted successfully" });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
