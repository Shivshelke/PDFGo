"use client";
import React from 'react';
import Link from 'next/link';
import { FileCode, Shield, CheckCircle2, Lock, Heart } from 'lucide-react';
import { toolsData } from '@/data/tools';

export default function Footer() {
  const organizeTools = toolsData.filter((t) => t.category === 'organize');
  const optimizeTools = toolsData.filter((t) => t.category === 'optimize');
  const convertTools = toolsData.filter((t) => t.category === 'convert').slice(0, 4);
  const securityTools = toolsData.filter((t) => t.category === 'security');

  const imageTools = toolsData.filter((t) => t.category === 'image');

  return (
    <footer className="w-full bg-slate-900 text-slate-400 border-t border-slate-800">
      
      {/* Premium Trust Banner */}
      <div className="border-b border-slate-800 bg-slate-950/60 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-4 px-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">100% Privacy Protected</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Files are processed completely locally in-browser or deleted immediately after 1 hour.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-4 px-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">High Fidelity Rendering</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Layouts, text vectors, fonts, and graphics are preserved down to the last pixel.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 px-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-400">
                <Lock className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Secure Transfer SSL</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Full 256-bit encryption covers all data transfers, securing you from eavesdropping.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          
          {/* Brand Info */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500 text-white font-bold">
                <FileCode className="h-4.5 w-4.5" />
              </div>
              <span className="text-lg font-bold text-white">
                PDF<span className="text-indigo-400">Go</span>
              </span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              PDFGo is the premier SaaS PDF toolkit for fast, secure, and professional document conversions. 
              Simplify document flows on all devices completely free.
            </p>
            <div className="flex gap-3 pt-2">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-500 uppercase tracking-wider px-2 py-1 rounded bg-slate-950 border border-slate-800">
                GDPR Compliant
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-500 uppercase tracking-wider px-2 py-1 rounded bg-slate-950 border border-slate-800">
                ISO 27001 Secure
              </span>
            </div>
          </div>

          {/* Column 2: Organize */}
          <div>
            <h5 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Organize</h5>
            <ul className="space-y-2.5 text-sm">
              {organizeTools.map((t) => (
                <li key={t.id}>
                  <Link href={t.path} className="hover:text-white transition">{t.name}</Link>
                </li>
              ))}
              {optimizeTools.map((t) => (
                <li key={t.id}>
                  <Link href={t.path} className="hover:text-white transition">{t.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Convert */}
          <div>
            <h5 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Convert</h5>
            <ul className="space-y-2.5 text-sm">
              {convertTools.map((t) => (
                <li key={t.id}>
                  <Link href={t.path} className="hover:text-white transition">{t.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Image Tools */}
          <div>
            <h5 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Image Tools</h5>
            <ul className="space-y-2.5 text-sm">
              {imageTools.map((t) => (
                <li key={t.id}>
                  <Link href={t.path} className="hover:text-white transition">{t.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Security & Company */}
          <div>
            <h5 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Security</h5>
            <ul className="space-y-2.5 text-sm">
              {securityTools.map((t) => (
                <li key={t.id}>
                  <Link href={t.path} className="hover:text-white transition">{t.name}</Link>
                </li>
              ))}
              <li className="pt-2">
                <Link href="/blog" className="text-slate-500 hover:text-white transition">Blog Guide Hub</Link>
              </li>
            </ul>
          </div>

        </div>

        <hr className="border-slate-800 my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>© 2026 PDFGo. All rights reserved. Built with privacy in mind.</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-slate-400">Privacy Policy</Link>
            <Link href="/" className="hover:text-slate-400">Terms of Service</Link>
            <Link href="/" className="hover:text-slate-400">Contact Support</Link>
          </div>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for documents.
          </p>
        </div>
      </div>
    </footer>
  );
}
