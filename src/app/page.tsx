"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Sparkles, Shield, Zap, Lock, Star, ChevronDown, Check, ArrowRight, ArrowUpRight, HelpCircle, BookOpen, Layers } from 'lucide-react';
import { toolsData } from '@/data/tools';
import { blogPosts } from '@/data/blog';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Tools' },
    { id: 'organize', label: 'Organize' },
    { id: 'optimize', label: 'Optimize' },
    { id: 'convert', label: 'Convert' },
    { id: 'security', label: 'Security' },
    { id: 'image', label: 'Image Tools' }
  ];

  const filteredTools = toolsData.filter((tool) => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tool.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = activeCategory === 'all' || tool.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  const featuredBlogs = blogPosts.slice(0, 3);

  const faqs = [
    {
      q: "Are my files safe on PDFGo?",
      a: "Yes! PDFGo is built with a privacy-first, serverless-style execution. Most of our tools perform calculations completely offline directly inside your web browser. When file transfers are required, they are protected with 256-bit SSL encryption and immediately deleted from our buffers within 1 hour."
    },
    {
      q: "Is PDFGo really free to use?",
      a: "Absolutely. All core utilities (merging, splitting, compression, and image conversions) are 100% free with no watermarks and no registrations. Premium tiers exist for corporate customers looking for high-volume API automation."
    },
    {
      q: "Can I convert scanned PDF pages into editable text?",
      a: "Yes, our OCR PDF tool accurately extracts characters from scanned documents and images, compiling them into a fully selectable PDF or raw TXT file."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/70 via-white to-white py-20 lg:py-28 border-b border-slate-100">
        
        {/* Subtle background grids */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60"></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 border border-indigo-100/60 px-4 py-1.5 text-xs font-bold text-indigo-600 animate-fade-in">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            <span>Introducing PDFGo 2.0 — Secure, Local, Fast</span>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl leading-[1.1]">
              All PDF Tools in <span className="text-indigo-600 bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent">One Place</span>
            </h1>
            <p className="text-lg text-slate-500 font-medium max-w-xl mx-auto">
              Merge, split, compress, convert, protect, and edit PDF files online free. 
              Military-grade client-side security meets Apple-level minimalist UI.
            </p>
          </div>

          {/* Interactive Tool Search Bar */}
          <div className="max-w-md mx-auto relative group">
            <input
              type="text"
              placeholder="Search PDF tools (e.g. Merge, Compress, Word)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-white/80 backdrop-blur pl-12 pr-4 py-4 text-sm shadow-xl shadow-slate-100/50 focus:border-indigo-500 focus:outline-none transition group-hover:bg-white"
            />
            <Search className="absolute left-4.5 top-4.5 w-5 h-5 text-slate-400 group-hover:text-indigo-500 transition" />
          </div>

          {/* Core Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-bold pt-4">
            <span className="flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              <span>Instant client processing</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-emerald-500" />
              <span>Zero server file logging</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-violet-500" />
              <span>SSL 256-bit Encrypted</span>
            </span>
          </div>

        </div>
      </section>

      {/* 2. Popular Tools Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
                Popular Document Toolkit
              </h2>
              <p className="text-slate-500 mt-2 text-sm font-semibold">
                Select from our complete range of specialized document compilers
              </p>
            </div>
            
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-slate-50 rounded-xl border border-slate-100">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 text-xs font-bold rounded-lg transition duration-200 ${
                    activeCategory === cat.id
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool) => {
              // Color schemes based on category
              let borderHvr = "hover:border-slate-300";
              let catColor = "bg-indigo-50 text-indigo-600";
              
              if (tool.category === 'organize') {
                borderHvr = "hover:border-rose-300/60 hover:shadow-rose-50/30";
                catColor = "bg-rose-50 text-rose-600";
              } else if (tool.category === 'optimize') {
                borderHvr = "hover:border-emerald-300/60 hover:shadow-emerald-50/30";
                catColor = "bg-emerald-50 text-emerald-600";
              } else if (tool.category === 'convert') {
                borderHvr = "hover:border-blue-300/60 hover:shadow-blue-50/30";
                catColor = "bg-blue-50 text-blue-600";
              } else if (tool.category === 'security') {
                borderHvr = "hover:border-violet-300/60 hover:shadow-violet-50/30";
                catColor = "bg-violet-50 text-violet-600";
              } else if (tool.category === 'image') {
                borderHvr = "hover:border-amber-300/60 hover:shadow-amber-50/30";
                catColor = "bg-amber-50 text-amber-600";
              }

              return (
                <Link
                  key={tool.id}
                  href={tool.path}
                  className={`group relative flex flex-col p-6 rounded-3xl border border-slate-100 bg-white transition duration-300 shadow-sm hover:-translate-y-1 hover:shadow-xl ${borderHvr}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${catColor} font-extrabold text-sm shadow-inner group-hover:scale-105 duration-200`}>
                      {tool.name.substring(0, 2)}
                    </div>
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-50 text-slate-400 opacity-0 group-hover:opacity-100 group-hover:bg-slate-100 group-hover:text-slate-900 transition-all duration-300">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-indigo-600 transition">
                    {tool.name}
                  </h3>
                  
                  <p className="text-sm text-slate-500 mt-2 flex-grow leading-relaxed">
                    {tool.shortDesc}
                  </p>

                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-widest mt-6 group-hover:text-indigo-600 duration-200">
                    <span>Explore Tool</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 duration-200" />
                  </div>
                </Link>
              );
            })}
          </div>

          {filteredTools.length === 0 && (
            <div className="text-center py-16 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
              <Layers className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <p className="text-sm font-semibold text-slate-500">No tools found matching your query</p>
              <button
                onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
                className="text-xs font-bold text-indigo-600 hover:text-indigo-800 mt-2"
              >
                Clear all filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* 3. Why PDFGo Section */}
      <section className="py-20 bg-slate-50/60 border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Engineered for absolute document security
            </h2>
            <p className="text-slate-500 text-sm font-semibold">
              Unlike cloud services that store files permanently, PDFGo relies on next-gen security pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-100 p-8 rounded-3xl space-y-4 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-800">Ultra-fast conversion</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                By performing structural tasks natively in the client browser, files are processed instantly without wait times.
              </p>
            </div>

            <div className="bg-white border border-slate-100 p-8 rounded-3xl space-y-4 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-600">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-800">100% Privacy first</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                No database logs are kept, and no files remain inside cloud clusters. All conversions operate under sandboxed environments.
              </p>
            </div>

            <div className="bg-white border border-slate-100 p-8 rounded-3xl space-y-4 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-800">Completely water-mark free</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                We believe document tools should look clean. PDFGo delivers clean outputs without annoying overlays or brand stamps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Trusted by 100,000+ professionals
            </h2>
            <p className="text-slate-500 text-sm font-semibold">
              Hear why developers, designers, and administrators prefer PDFGo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "The local processing is mind-blowing. Converting 20MB financial PDFs happens in under 2 seconds, and knowing our data never leaves the browser keeps compliance incredibly happy.",
                author: "Sarah Sterling",
                role: "Director of Operations at Velo"
              },
              {
                text: "No account registration, no watermarks, just high-fidelity PDF compression. I shrink all my customer receipts here daily. It's an indispensable modern toolkit.",
                author: "David Vance",
                role: "Freelance Creative Lead"
              },
              {
                text: "The Apple-style design is beautiful. It is the first time I actually enjoy using a document conversion tool. Clean spacings, smooth UI, and zero ads.",
                author: "Lena Kovalenko",
                role: "Senior UX Designer"
              }
            ].map((test, idx) => (
              <div key={idx} className="p-8 rounded-3xl border border-slate-100 bg-slate-50/30 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4.5 h-4.5 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed italic">
                    "{test.text}"
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{test.author}</h4>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">{test.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ Section */}
      <section className="py-20 bg-slate-50/40 border-t border-slate-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 text-sm font-semibold">
              Find answers to the most common questions about PDFGo
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-100 bg-white rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-800 hover:text-indigo-600 transition"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${openFaq === idx ? 'rotate-180 text-indigo-600' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="p-5 pt-0 text-sm text-slate-500 leading-relaxed border-t border-slate-50 bg-slate-50/20">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Blog Preview Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
                Insights & Document Guides
              </h2>
              <p className="text-slate-500 text-sm font-semibold mt-2">
                Stay updated with the latest tutorials on office productivity and PDF standards.
              </p>
            </div>
            <Link
              href="/blog"
              className="hidden sm:flex items-center gap-1 text-sm font-bold text-indigo-600 hover:text-indigo-800 transition"
            >
              <span>View all articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBlogs.map((post) => (
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
                  
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-indigo-600 duration-200 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="border-t border-slate-100/80 pt-4 flex items-center justify-between text-xs text-slate-400 font-semibold">
                    <span>{post.readTime}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm font-bold text-indigo-600 hover:text-indigo-800 transition"
            >
              <span>View all articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 7. Final CTA Section */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden border-t border-slate-800">
        
        {/* Subtle grid on background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Simplify your document flows today
          </h2>
          <p className="text-slate-400 text-base max-w-md mx-auto">
            Get instant access to all premium tools completely free. 
            No limits, no watermarks, and complete offline privacy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/pricing"
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 hover:bg-indigo-500 px-8 py-4 text-base font-bold text-white shadow-xl shadow-indigo-500/10 transition"
            >
              <span>Go Premium Now</span>
              <Sparkles className="w-4 h-4 text-amber-300" />
            </Link>
            <Link
              href="/blog"
              className="w-full sm:w-auto flex items-center justify-center gap-1 rounded-2xl border border-slate-700 hover:bg-slate-800 px-8 py-4 text-base font-bold text-slate-300 transition"
            >
              <span>Read productivity blog</span>
              <BookOpen className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
