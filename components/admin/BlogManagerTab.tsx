"use client";

import React, { useState } from "react";
import { BlogPost } from "@/lib/cms-types";
import {
  Plus,
  Edit2,
  Trash2,
  Eye,
  Check,
  Upload,
  Calendar,
  User,
  Clock,
  Tag,
  ExternalLink,
  Search,
} from "lucide-react";

interface BlogManagerTabProps {
  blogs: BlogPost[];
  onRefreshBlogs: () => Promise<void>;
}

export default function BlogManagerTab({ blogs, onRefreshBlogs }: BlogManagerTabProps) {
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [saving, setSaving] = useState(false);
  const [uploadingCover, setUploadingCover] = useState(false);

  const initialNewBlog: BlogPost = {
    id: "",
    slug: "",
    title: "",
    excerpt: "",
    content: "",
    coverImage: "/images/hero-kitchen.jpg",
    author: "Simplified Remodeling Team",
    date: new Date().toISOString().split("T")[0],
    readTime: "4 min read",
    published: true,
    tags: ["Remodeling", "Coachella Valley"],
  };

  const handleStartCreate = () => {
    setEditingBlog({ ...initialNewBlog });
    setIsCreating(true);
  };

  const handleSaveBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingBlog || !editingBlog.title) {
      alert("Please enter a blog title.");
      return;
    }

    setSaving(true);
    try {
      const res = await fetch("/api/admin/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingBlog),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        await onRefreshBlogs();
        setEditingBlog(null);
        setIsCreating(false);
      } else {
        alert(data.message || "Failed to save blog");
      }
    } catch (err) {
      alert("Error saving blog");
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteBlog = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog post?")) return;

    try {
      const res = await fetch(`/api/admin/blogs?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        await onRefreshBlogs();
      }
    } catch (err) {
      alert("Error deleting blog");
    }
  };

  const handleCoverUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editingBlog) return;

    setUploadingCover(true);
    try {
      const form = new FormData();
      form.append("file", file);
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: form,
      });
      const data = await res.json();
      if (res.ok && data.url) {
        setEditingBlog({ ...editingBlog, coverImage: data.url });
      }
    } catch (err) {
      alert("Error uploading cover image");
    } finally {
      setUploadingCover(false);
    }
  };

  const filteredBlogs = blogs.filter(
    (b) =>
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.tags?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-neutral-900 border border-neutral-800 p-4 rounded-2xl">
        <div>
          <h2 className="text-lg font-bold text-white tracking-tight">Blog & Article Publishing</h2>
          <p className="text-xs text-neutral-400">
            Publish renovation guides, customer case studies, and local desert remodeling tips to boost SEO.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white px-3 py-2 bg-neutral-800 rounded-xl transition-colors"
          >
            <span>View Public /blog</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={handleStartCreate}
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-md shadow-amber-500/20"
          >
            <Plus className="w-4 h-4" />
            <span>Write New Article</span>
          </button>
        </div>
      </div>

      {/* MODAL / SLIDEOUT EDITOR */}
      {editingBlog && (
        <div className="bg-neutral-900 border border-amber-500/30 rounded-2xl p-6 shadow-2xl space-y-5 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
            <h3 className="text-base font-bold text-white">
              {isCreating ? "Draft New Remodeling Article" : `Editing: ${editingBlog.title}`}
            </h3>
            <button
              onClick={() => setEditingBlog(null)}
              className="text-neutral-400 hover:text-white text-xs px-2.5 py-1 rounded-lg bg-neutral-800"
            >
              Cancel
            </button>
          </div>

          <form onSubmit={handleSaveBlog} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                  Article Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 5 Kitchen Countertop Trends Taking Over Palm Desert"
                  value={editingBlog.title}
                  onChange={(e) => {
                    const title = e.target.value;
                    const autoSlug = title
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")
                      .replace(/(^-|-$)+/g, "");
                    setEditingBlog({
                      ...editingBlog,
                      title,
                      slug: isCreating ? autoSlug : editingBlog.slug,
                    });
                  }}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-white text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                  URL Slug
                </label>
                <input
                  type="text"
                  required
                  value={editingBlog.slug}
                  onChange={(e) => setEditingBlog({ ...editingBlog, slug: e.target.value })}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2 text-white text-sm focus:border-amber-500 focus:outline-none font-mono text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                  Author Name
                </label>
                <input
                  type="text"
                  value={editingBlog.author}
                  onChange={(e) => setEditingBlog({ ...editingBlog, author: e.target.value })}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2 text-white text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                  Short Excerpt / Summary
                </label>
                <textarea
                  rows={2}
                  value={editingBlog.excerpt}
                  onChange={(e) => setEditingBlog({ ...editingBlog, excerpt: e.target.value })}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2 text-white text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>

              {/* Cover Image */}
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                  Cover Photo
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={editingBlog.coverImage}
                    onChange={(e) => setEditingBlog({ ...editingBlog, coverImage: e.target.value })}
                    className="flex-1 bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2 text-white text-sm focus:border-amber-500 focus:outline-none"
                  />
                  <label className="cursor-pointer bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold px-3 py-2 rounded-xl border border-neutral-700 flex items-center gap-1.5 shrink-0">
                    <Upload className="w-3.5 h-3.5" />
                    <span>{uploadingCover ? "Uploading..." : "Upload Cover"}</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleCoverUpload}
                    />
                  </label>
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                  Article Body (Supports Markdown)
                </label>
                <textarea
                  rows={10}
                  value={editingBlog.content}
                  onChange={(e) => setEditingBlog({ ...editingBlog, content: e.target.value })}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-white text-sm font-mono focus:border-amber-500 focus:outline-none"
                  placeholder="Write your article paragraphs here..."
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                  Tags (comma separated)
                </label>
                <input
                  type="text"
                  value={editingBlog.tags.join(", ")}
                  onChange={(e) =>
                    setEditingBlog({
                      ...editingBlog,
                      tags: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                    })
                  }
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2 text-white text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-3 pt-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={editingBlog.published}
                    onChange={(e) => setEditingBlog({ ...editingBlog, published: e.target.checked })}
                    className="w-4 h-4 rounded text-amber-500 focus:ring-0"
                  />
                  <span className="text-xs font-bold text-white">Publish Immediately to Live Site</span>
                </label>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-neutral-800">
              <button
                type="button"
                onClick={() => setEditingBlog(null)}
                className="bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className="bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-md shadow-amber-500/20 disabled:opacity-50"
              >
                {saving ? "Saving..." : "Save Blog Post"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Search and Blog list */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-4">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3 top-3 text-neutral-500" />
            <input
              type="text"
              placeholder="Search articles or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
            />
          </div>
          <span className="text-xs text-neutral-400">{filteredBlogs.length} articles found</span>
        </div>

        {filteredBlogs.length === 0 ? (
          <div className="py-12 text-center text-neutral-500 text-xs">
            No blog articles found. Click "Write New Article" to publish your first post!
          </div>
        ) : (
          <div className="divide-y divide-neutral-800">
            {filteredBlogs.map((blog) => (
              <div
                key={blog.id || blog.slug}
                className="py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-neutral-850/40 p-2 rounded-xl transition-colors"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-16 h-14 rounded-lg bg-neutral-800 overflow-hidden shrink-0 border border-neutral-800">
                    <img
                      src={blog.coverImage || "/images/hero-kitchen.jpg"}
                      alt=""
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-white hover:text-amber-400 transition-colors">
                        {blog.title}
                      </h4>
                      {blog.published ? (
                        <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded font-semibold">
                          Published
                        </span>
                      ) : (
                        <span className="text-[10px] bg-neutral-800 text-neutral-400 px-1.5 py-0.5 rounded">
                          Draft
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-neutral-400 line-clamp-1 mt-0.5">{blog.excerpt}</p>
                    <div className="flex items-center gap-3 text-[11px] text-neutral-500 mt-1">
                      <span>{blog.date}</span>
                      <span>•</span>
                      <span>{blog.author}</span>
                      <span>•</span>
                      <span>/blog/{blog.slug}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center">
                  <a
                    href={`/blog/${blog.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
                    title="Preview public page"
                  >
                    <Eye className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => {
                      setEditingBlog(blog);
                      setIsCreating(false);
                    }}
                    className="p-2 text-neutral-400 hover:text-amber-400 rounded-lg hover:bg-neutral-800 transition-colors"
                    title="Edit blog post"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteBlog(blog.id)}
                    className="p-2 text-neutral-400 hover:text-red-400 rounded-lg hover:bg-red-500/10 transition-colors"
                    title="Delete blog post"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
