import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import { getStoredBlogs } from "@/lib/cms-server";
import { Calendar, Clock, User, ArrowRight, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Remodeling Guides, Tips & Insights | Simplified Home Remodeling",
  description:
    "Expert tips, trends, and advice on kitchen remodeling, curbless bathrooms, custom cabinetry, and countertops across the Coachella Valley.",
};

export default async function BlogPage() {
  const allBlogs = await getStoredBlogs();
  const published = allBlogs.filter((b) => b.published);

  return (
    <div className="bg-brand-black min-h-screen text-white flex flex-col">
      <Header />
      <TrustBar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-24 bg-gradient-to-b from-neutral-900 to-brand-black border-b border-neutral-800">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              Remodeling Inspiration & Advice
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase font-oswald max-w-3xl mx-auto">
              Desert Home Renovation Guides & Insights
            </h1>
            <p className="text-neutral-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
              Discover insider tips, ROI calculations, and design trends for your upcoming kitchen, bathroom, or whole-home remodel in the Coachella Valley.
            </p>
          </div>
        </section>

        {/* Blog Post Grid */}
        <section className="py-12 sm:py-16">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            {published.length === 0 ? (
              <div className="text-center py-16 text-neutral-500">
                Articles are coming soon. Check back shortly!
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {published.map((post) => (
                  <article
                    key={post.id || post.slug}
                    className="bg-neutral-900 border border-neutral-800 hover:border-amber-500/40 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 group shadow-lg"
                  >
                    {/* Cover image */}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="h-52 bg-neutral-800 overflow-hidden block relative"
                    >
                      <img
                        src={post.coverImage || "/images/hero-kitchen.jpg"}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                        {(post.tags || []).slice(0, 2).map((tag, idx) => (
                          <span
                            key={idx}
                            className="bg-black/80 backdrop-blur-sm text-amber-400 border border-amber-500/20 text-[10px] uppercase font-bold px-2 py-0.5 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </Link>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2.5">
                        <div className="flex items-center gap-3 text-xs text-neutral-400">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                            {post.date}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-neutral-500" />
                            {post.readTime || "4 min read"}
                          </span>
                        </div>

                        <h2 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors leading-snug line-clamp-2">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h2>

                        <p className="text-xs text-neutral-400 line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                        <span className="text-xs text-neutral-500 font-medium">{post.author}</span>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 group-hover:translate-x-1 transition-transform"
                        >
                          <span>Read Full Story</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
