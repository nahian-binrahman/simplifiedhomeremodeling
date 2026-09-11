import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import LeadForm from "@/components/LeadForm";
import { getStoredBlogs } from "@/lib/cms-server";
import { ArrowLeft, Calendar, Clock, User, Phone, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const blogs = await getStoredBlogs();
  const post = blogs.find((b) => b.slug === params.slug);

  if (!post) {
    return { title: "Article Not Found | Simplified Home Remodeling" };
  }

  return {
    title: `${post.title} | Simplified Home Remodeling`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage || "/images/hero-kitchen.jpg"],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const blogs = await getStoredBlogs();
  const post = blogs.find((b) => b.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-brand-black min-h-screen text-white flex flex-col">
      <Header />
      <TrustBar />

      <main className="flex-1 py-10 sm:py-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-amber-400 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {(post.tags || []).map((tag, idx) => (
              <span
                key={idx}
                className="bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[11px] uppercase font-bold px-2.5 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase font-oswald leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-400 mt-4 pb-6 border-b border-neutral-800">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-amber-400" />
              {post.author}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-neutral-500" />
              {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-neutral-500" />
              {post.readTime}
            </span>
          </div>

          {/* Cover photo */}
          {post.coverImage && (
            <div className="my-8 rounded-2xl overflow-hidden border border-neutral-800 max-h-[460px] bg-neutral-900">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Body Content */}
          <div className="prose prose-invert max-w-none text-neutral-300 text-base sm:text-lg leading-relaxed space-y-6 pt-2">
            {post.content.split("\n\n").map((paragraph, index) => {
              if (paragraph.startsWith("### ")) {
                return (
                  <h3 key={index} className="text-xl font-bold text-white mt-8 mb-3 font-oswald uppercase">
                    {paragraph.replace("### ", "")}
                  </h3>
                );
              }
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-white mt-10 mb-4 font-oswald uppercase">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("- ") || paragraph.startsWith("1. ")) {
                const items = paragraph.split("\n");
                return (
                  <ul key={index} className="space-y-2 list-disc list-inside text-neutral-300">
                    {items.map((it, i) => (
                      <li key={i}>{it.replace(/^[-*]|\d+\.\s*/, "").replace(/\*\*(.*?)\*\*/g, "$1")}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Call to action card */}
          <div className="mt-14 bg-gradient-to-r from-neutral-900 to-neutral-850 border border-amber-500/30 rounded-2xl p-8 text-center space-y-4">
            <span className="text-xs uppercase font-bold tracking-widest text-amber-400">
              Ready to Upgrade Your Home?
            </span>
            <h3 className="text-2xl font-bold text-white font-oswald uppercase">
              Schedule Your Free In-Home Consultation Today
            </h3>
            <p className="text-neutral-400 text-sm max-w-xl mx-auto">
              Our licensed remodeling specialists provide 3D designs, fixed transparent pricing, and punctual desert craftsmanship.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:9092248925"
                className="bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition-all shadow-md shadow-amber-500/20 flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call (909) 224-8925</span>
              </a>
              <Link
                href="/#quote"
                className="bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-xs px-6 py-3 rounded-xl border border-neutral-700 transition-colors"
              >
                Request Consultation
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
