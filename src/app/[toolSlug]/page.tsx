import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Shield, Sparkles, Check, HelpCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { toolsData } from '@/data/tools';
import ToolWorkspace from '@/components/Tools/ToolWorkspace';

interface PageProps {
  params: Promise<{
    toolSlug: string;
  }>;
}

// Generate Static Params for all tools to ensure static generation SEO optimization
export async function generateStaticParams() {
  return [
    { toolSlug: 'merge-pdf' },
    { toolSlug: 'split-pdf' },
    { toolSlug: 'compress-pdf' },
    { toolSlug: 'pdf-to-word' },
    { toolSlug: 'word-to-pdf' },
    { toolSlug: 'jpg-to-pdf' },
    { toolSlug: 'pdf-to-jpg' },
    { toolSlug: 'protect-pdf' },
    { toolSlug: 'unlock-pdf' },
    { toolSlug: 'ocr-pdf' },
    { toolSlug: 'compress-image' },
    { toolSlug: 'resize-image' },
    { toolSlug: 'jpg-to-png' },
    { toolSlug: 'png-to-jpg' },
    { toolSlug: 'image-size-checker' },
    { toolSlug: 'rotate-pdf' },
    { toolSlug: 'delete-pages' },
    { toolSlug: 'reorder-pages' }
  ];
}

// Dynamic Metadatas for maximum SEO scoring
export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const resolvedParams = await params;
  const tool = toolsData.find((t) => t.path === `/${resolvedParams.toolSlug}`);
  if (!tool) return {};

  return {
    title: tool.seoTitle,
    description: tool.seoDesc,
    alternates: {
      canonical: `https://pdfgo.com${tool.path}`
    },
    openGraph: {
      title: tool.seoTitle,
      description: tool.seoDesc,
      url: `https://pdfgo.com${tool.path}`,
      siteName: "PDFGo",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: tool.seoTitle,
      description: tool.seoDesc
    }
  };
}

export default async function ToolPage({ params }: PageProps) {
  const resolvedParams = await params;
  const tool = toolsData.find((t) => t.path === `/${resolvedParams.toolSlug}`);
  if (!tool) {
    notFound();
  }

  // Generate JSON-LD schemas dynamic injection
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": tool.name,
    "url": `https://pdfgo.com${tool.path}`,
    "description": tool.seoDesc,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires HTML5 compatible browser",
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD"
    }
  };

  const faqLdSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": tool.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://pdfgo.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": tool.name,
        "item": `https://pdfgo.com${tool.path}`
      }
    ]
  };

  // Find related tools (excluding current)
  const relatedTools = toolsData
    .filter((t) => t.id !== tool.id && t.category === tool.category)
    .slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* JSON-LD Schemas injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLdSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Tool Hero Header */}
      <section className="bg-slate-50/50 border-b border-slate-100 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
            <Link href="/" className="hover:text-indigo-600 transition">Home</Link>
            <span>/</span>
            <span className="text-slate-500">{tool.name}</span>
          </div>

          <h1 className="text-3xl font-extrabold text-slate-900 sm:text-5xl tracking-tight">
            {tool.name} Online
          </h1>
          <p className="text-sm text-slate-500 font-semibold max-w-xl mx-auto">
            {tool.longDesc}
          </p>
        </div>
      </section>

      {/* Interactive workspace portal */}
      <section className="py-12 md:py-16 bg-white px-4">
        <ToolWorkspace tool={tool} />
      </section>

      {/* Structured SEO Page Copy Content */}
      <section className="py-16 bg-slate-50/40 border-y border-slate-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Features check grid */}
          <div className="space-y-6">
            <h2 className="text-2xl font-extrabold text-slate-900">
              Why use PDFGo {tool.name} tool?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tool.features.map((feat, i) => (
                <div key={i} className="flex gap-3 items-start p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm text-slate-600 font-semibold">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Structured Step Progression */}
          <div className="space-y-6">
            <h2 className="text-2xl font-extrabold text-slate-900">
              How to process {tool.name} in 4 simple steps
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {tool.steps.map((step, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 font-bold text-xs">
                      {i + 1}
                    </span>
                    <h3 className="text-sm font-bold text-slate-800">Step {i + 1}</h3>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed font-semibold pl-9">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Dynamic FAQs accordion lists */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-extrabold text-slate-900 flex items-center justify-center gap-2">
              <HelpCircle className="w-6 h-6 text-indigo-500" />
              <span>Questions & Answers</span>
            </h2>
            <p className="text-sm text-slate-500 font-semibold">
              Frequently asked questions concerning our online {tool.name} compiler
            </p>
          </div>

          <div className="space-y-4">
            {tool.faqs.map((faq, i) => (
              <div key={i} className="p-6 bg-slate-50/50 border border-slate-100 rounded-3xl space-y-2.5">
                <h3 className="text-base font-bold text-slate-800 flex items-start gap-2">
                  <span className="text-indigo-500">Q.</span>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed font-semibold pl-5">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related tools / Internal Linking */}
      {relatedTools.length > 0 && (
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-extrabold text-slate-900 mb-8 text-center sm:text-left">
              Related PDF Utilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedTools.map((t) => (
                <Link
                  key={t.id}
                  href={t.path}
                  className="group flex flex-col p-6 rounded-3xl border border-slate-100 hover:border-indigo-100 bg-slate-50/30 hover:bg-white hover:shadow-xl transition duration-300"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 font-extrabold text-xs mb-4">
                    {t.name.substring(0, 2)}
                  </div>
                  <h3 className="text-sm font-bold text-slate-800 group-hover:text-indigo-600 transition">
                    {t.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-1 leading-normal">
                    {t.shortDesc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
