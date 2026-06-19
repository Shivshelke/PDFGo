"use client";
import React from 'react';
import Link from 'next/link';
import { Sparkles, Check, ArrowLeft, ShieldCheck, Zap } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "Starter Plan",
      price: "199",
      period: "1 Month",
      desc: "Perfect for quick individual tasks and document compression needs.",
      features: [
        "Unrestricted access to all 15+ PDF & Image tools",
        "Up to 100MB file size upload limit",
        "100% offline secure client-side browser processing",
        "Zero watermark output files",
        "Standard customer support"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional Plan",
      price: "999",
      period: "6 Months",
      desc: "Ideal for professionals looking for long-term document utility.",
      features: [
        "Everything in Starter Plan included",
        "Expanded 500MB file size upload limit",
        "High-performance batch processing capabilities",
        "Priority VIP customer support response times",
        "New upcoming beta features access"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise Plan",
      price: "2,000",
      period: "12 Months",
      desc: "Best value for power users and enterprise workflows.",
      features: [
        "Everything in Professional Plan included",
        "Max 2GB file size upload capacity",
        "API integration credentials access",
        "Dedicated corporate manager assistance",
        "Lifetime configuration settings lock"
      ],
      cta: "Get Started",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white relative overflow-hidden flex flex-col font-sans">
      
      {/* Grid background effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1F1F23_1px,transparent_1px),linear-gradient(to_bottom,#1F1F23_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-35"></div>
      
      {/* Subtle radial glow spots */}
      <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-[100px] pointer-events-none"></div>

      {/* Navbar header */}
      <header className="relative z-10 w-full border-b border-white/5 bg-transparent">
        <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-blue-500 text-white shadow-md shadow-indigo-100 group-hover:scale-105 transition duration-200">
              <ArrowLeft className="h-5 w-5" />
            </div>
            <span className="text-sm font-bold tracking-tight text-slate-300">Back to Dashboard</span>
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-bold uppercase tracking-wider bg-white/5 border border-white/10 px-3 py-1 rounded-full">Secure SSL Checkout</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-grow py-16 md:py-24 px-4">
        <div className="mx-auto max-w-6xl space-y-16">
          
          {/* Header Title Section */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl leading-tight bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
              Find the Perfect Plan to Elevate Your Productivity
            </h1>
            <p className="text-slate-400 text-sm md:text-base">
              Explore our flexible local-first plans to unlock maximum processing capacity.
            </p>
          </div>

          {/* Plan cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col justify-between p-8 rounded-[32px] border transition duration-300 ${
                  plan.popular
                    ? "border-amber-500/30 bg-[#0F0F12] shadow-2xl shadow-amber-500/5 ring-1 ring-amber-500/20"
                    : "border-white/5 bg-[#0F0F12]/60 hover:border-white/10"
                }`}
              >
                {/* Glow layer for professional plan */}
                {plan.popular && (
                  <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-amber-500/10 to-transparent blur-2xl rounded-t-[32px] pointer-events-none"></div>
                )}

                {/* Popular Badge */}
                {plan.popular && (
                  <span className="absolute top-5 right-6 inline-flex items-center gap-1 text-[10px] font-bold text-amber-900 bg-amber-400 px-3 py-1 rounded-full shadow-lg shadow-amber-400/20">
                    <Sparkles className="w-3 h-3 fill-amber-900" />
                    <span>Most Popular</span>
                  </span>
                )}

                <div className="space-y-6 relative z-10">
                  {/* Title & Desc */}
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold text-slate-300">{plan.name}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed pr-8">{plan.desc}</p>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 py-2">
                    <span className="text-4xl font-extrabold tracking-tight text-white">₹{plan.price}</span>
                    <span className="text-xs font-bold text-slate-500">/ {plan.period}</span>
                  </div>

                  {/* Button CTA */}
                  <div>
                    {plan.popular ? (
                      <button className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm shadow-xl shadow-amber-500/10 hover:scale-101 active:scale-99 transition duration-200">
                        {plan.cta}
                      </button>
                    ) : (
                      <button className="w-full py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm hover:scale-101 active:scale-99 transition duration-200">
                        {plan.cta}
                      </button>
                    )}
                  </div>

                  {/* Divider */}
                  <div className="border-t border-white/5 my-4"></div>

                  {/* Features list */}
                  <div className="space-y-3.5">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Features included</span>
                    <ul className="space-y-3">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex gap-2.5 items-start text-xs font-medium text-slate-400">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Secure SSL Notice */}
          <div className="flex justify-center items-center gap-8 flex-wrap pt-8 text-slate-500 text-xs font-bold">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>SSL 256-bit Encrypted checkout</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-indigo-500" />
              <span>Instant subscription upgrade</span>
            </span>
          </div>

        </div>
      </main>

    </div>
  );
}
