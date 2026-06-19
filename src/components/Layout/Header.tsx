"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FileCode, Search, Shield, ChevronDown, Sparkles, User, Settings, ArrowRight, Menu, X, Download } from 'lucide-react';
import { toolsData } from '@/data/tools';
import { useToast } from '@/components/UI/Toast';

export default function Header() {
  const { showToast } = useToast();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
      }
    } else {
      showToast("To install PDFGo, click the install icon (🖥️/⬇️) in your address bar or select 'Add to Home Screen' in browser options.", "info");
    }
  };

  const categories = [
    { id: 'organize', label: 'Organize PDF', color: 'text-rose-500' },
    { id: 'optimize', label: 'Optimize PDF', color: 'text-emerald-500' },
    { id: 'convert', label: 'Convert PDF', color: 'text-blue-500' },
    { id: 'security', label: 'Security & Protect', color: 'text-violet-500' },
    { id: 'image', label: 'Image Tools', color: 'text-amber-500' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-100 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-indigo-950 group-hover:scale-105 transition duration-200 shadow-sm border border-indigo-900/10">
              <img
                src="/logo.png"
                alt="PDFGo Logo Icon"
                className="h-full w-full object-cover scale-102"
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              PDF<span className="text-indigo-600 font-extrabold">Go</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {categories.map((cat) => {
              const catTools = toolsData.filter((t) => t.category === cat.id);
              return (
                <div
                  key={cat.id}
                  className="relative group"
                  onMouseEnter={() => setActiveCategory(cat.id)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-slate-700 hover:text-indigo-600 rounded-lg hover:bg-slate-50 transition duration-150">
                    <span>{cat.label}</span>
                    <ChevronDown className="h-4 w-4 text-slate-400 group-hover:text-indigo-500 group-hover:rotate-180 transition duration-200" />
                  </button>

                  {/* Dropdown Menu */}
                  <div className="absolute left-0 top-full hidden group-hover:block w-80 pt-2 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-xl ring-1 ring-black/5">
                      <div className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                        {cat.label} Utilities
                      </div>
                      <div className="grid gap-1">
                        {catTools.map((tool) => (
                          <Link
                            key={tool.id}
                            href={tool.path}
                            className="flex items-start gap-3 rounded-xl p-2.5 hover:bg-slate-50 transition duration-150 group/item"
                          >
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-slate-600 group-hover/item:bg-indigo-50 group-hover/item:text-indigo-600 transition">
                              <span className="text-xs font-bold">{tool.name.substring(0, 2)}</span>
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-slate-800 group-hover/item:text-indigo-600 transition">
                                {tool.name}
                              </div>
                              <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                                {tool.shortDesc}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <Link
              href="/blog"
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-indigo-600 rounded-lg hover:bg-slate-50 transition"
            >
              Blog
            </Link>

          </nav>
        </div>

        {/* Action CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={handleInstallClick}
            className="flex items-center gap-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 border border-indigo-100 px-4 py-2.5 text-sm font-bold text-indigo-600 transition shadow-sm hover:scale-102 duration-150"
          >
            <Download className="h-4 w-4" />
            <span>Install App</span>
          </button>
          <Link
            href="/pricing"
            className="flex items-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-bold text-white hover:bg-slate-800 transition shadow-sm hover:scale-102 duration-150"
          >
            <Sparkles className="h-4 w-4 text-amber-400" />
            <span>Go Premium</span>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={handleInstallClick}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 active:bg-indigo-100 transition shadow-sm"
            title="Install App"
          >
            <Download className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl hover:bg-slate-50 text-slate-600"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-100 bg-white py-4 px-4 animate-in fade-in slide-in-from-top-4 duration-150">
          <div className="space-y-4">
            {categories.map((cat) => {
              const catTools = toolsData.filter((t) => t.category === cat.id);
              return (
                <div key={cat.id} className="space-y-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-2 mb-1">
                    {cat.label}
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {catTools.map((tool) => (
                      <Link
                        key={tool.id}
                        href={tool.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-2 rounded-xl p-2 bg-slate-50 hover:bg-indigo-50 hover:text-indigo-600 text-sm font-medium text-slate-700 transition"
                      >
                        <span className="text-xs font-bold bg-white text-slate-500 rounded p-1 shadow-sm shrink-0">
                          {tool.name.substring(0, 2)}
                        </span>
                        <span className="truncate">{tool.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}

            <hr className="border-slate-100" />

             <div className="flex flex-col gap-2">
              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 rounded-xl p-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
              >
                Blog Guides
              </Link>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => { handleInstallClick(); setMobileMenuOpen(false); }}
                className="w-full flex items-center justify-center gap-1.5 rounded-xl bg-indigo-50 border border-indigo-100 py-2.5 text-sm font-bold text-indigo-600 hover:bg-indigo-100 transition shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Install App</span>
              </button>
              <Link
                href="/pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 py-2.5 text-sm font-bold text-white hover:bg-slate-800 transition shadow-md"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Get Premium</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
