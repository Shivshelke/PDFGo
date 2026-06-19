"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Search, BookOpen, Clock, Calendar, ArrowRight, User } from 'lucide-react';
import { blogPosts } from '@/data/blog';

export default function BlogIndex() {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState("All");

  const tags = ["All", ...Array.from(new Set(blogPosts.flatMap(post => post.tags)))];

  const filtered = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesTag = activeTag === "All" || post.tags.includes(activeTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* Hero section */}
      <section className="bg-slate-50 border-b border-slate-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
            <Link href="/" className="hover:text-indigo-600 transition">Home</Link>
            <span>/</span>
            <span className="text-slate-500">Blog</span>
          </div>

          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            PDFGo Guide Hub
          </h1>
          <p className="text-sm text-slate-500 font-semibold max-w-lg mx-auto">
            Deep-dives into document productivity, standard specifications, and tutorial pipelines to master your files.
          </p>

          <div className="max-w-md mx-auto relative mt-4">
            <input
              type="text"
              placeholder="Search guides, tutorials & reviews..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-white px-11 py-3 text-sm focus:border-indigo-500 focus:outline-none shadow-sm"
            />
            <Search className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
          </div>
        </div>
      </section>

      {/* Grid listing */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Tags list */}
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 text-xs font-bold rounded-xl border transition ${
                  activeTag === tag
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-white text-slate-500 hover:text-slate-800 border-slate-200"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Posts list grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filtered.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-3xl border border-slate-100 bg-slate-50/30 overflow-hidden hover:shadow-xl hover:border-slate-200 transition duration-300"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-103 duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow space-y-3">
                  <div className="flex gap-2">
                    {post.tags.slice(0, 2).map((t) => (
                      <span key={t} className="text-[10px] font-extrabold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-lg font-bold text-slate-800 group-hover:text-indigo-600 transition duration-200 line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="border-t border-slate-100 pt-4 flex items-center justify-between text-xs text-slate-400 font-semibold">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
              <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <p className="text-sm font-semibold text-slate-500">No blog guides found matching filters</p>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
