import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, ShieldAlert, Mail, BookOpen } from 'lucide-react';
import { blogPosts } from '@/data/blog';

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(
  { params }: BlogPostProps
): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  if (!post) return {};

  return {
    title: post.seoTitle,
    description: post.seoDesc,
    alternates: {
      canonical: `https://pdfgo-app.vercel.app/blog/${post.slug}`
    },
    openGraph: {
      title: post.seoTitle,
      description: post.seoDesc,
      url: `https://pdfgo-app.vercel.app/blog/${post.slug}`,
      siteName: "PDFGo Blog",
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name]
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.seoDesc
    }
  };
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  if (!post) {
    notFound();
  }

  // Generate structured schemas
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.coverImage,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author.name
    },
    "publisher": {
      "@type": "Organization",
      "name": "PDFGo",
      "logo": {
        "@type": "ImageObject",
        "url": "https://pdfgo-app.vercel.app/logo.png"
      }
    },
    "description": post.excerpt
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqSchema.map(faq => ({
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
        "item": "https://pdfgo-app.vercel.app"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://pdfgo-app.vercel.app/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://pdfgo-app.vercel.app/blog/${post.slug}`
      }
    ]
  };

  // Convert simple markdown headings into clean HTML
  const formatContent = (txt: string) => {
    return txt.split('\n').map((line, idx) => {
      const cleanLine = line.trim();
      if (cleanLine.startsWith('## ')) {
        return <h2 key={idx} className="text-xl md:text-2xl font-extrabold text-slate-800 mt-8 mb-4">{cleanLine.substring(3)}</h2>;
      }
      if (cleanLine.startsWith('- ')) {
        return <li key={idx} className="text-sm md:text-base text-slate-600 font-medium list-disc ml-6 mt-2 leading-relaxed">{cleanLine.substring(2)}</li>;
      }
      if (cleanLine.startsWith('1. ')) {
        return <li key={idx} className="text-sm md:text-base text-slate-600 font-medium list-decimal ml-6 mt-2 leading-relaxed">{cleanLine.substring(3)}</li>;
      }
      if (cleanLine.startsWith('|')) {
        // Table markup format
        return <div key={idx} className="text-xs text-slate-400 py-1 overflow-x-auto">{cleanLine}</div>;
      }
      if (cleanLine === "") return <div key={idx} className="h-3"></div>;
      return <p key={idx} className="text-sm md:text-base text-slate-600 font-semibold leading-relaxed mt-3">{cleanLine}</p>;
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Schemas dynamic injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="py-12 md:py-16 px-4 max-w-4xl mx-auto w-full">
        
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-indigo-600 mb-8 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to guides hub</span>
        </Link>

        {/* Heading */}
        <div className="space-y-6">
          <div className="flex gap-2">
            {post.tags.map((t) => (
              <span key={t} className="text-[10px] font-extrabold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                {t}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            {post.title}
          </h1>

          {/* Author metadata */}
          <div className="flex flex-wrap items-center gap-6 border-y border-slate-100 py-4 text-xs text-slate-400 font-semibold">
            <div className="flex items-center gap-2">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-8 h-8 rounded-full border border-slate-100"
              />
              <div>
                <div className="text-slate-800">{post.author.name}</div>
                <div className="text-[10px] text-slate-400 mt-0.5">{post.author.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </div>

            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{post.date}</span>
            </div>
          </div>
        </div>

        {/* Banner Cover Image */}
        <div className="aspect-video rounded-3xl overflow-hidden border border-slate-100 shadow-md my-8">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Body Content */}
        <div className="prose prose-slate max-w-none pt-4">
          {formatContent(post.content)}
        </div>

        {/* Dynamic FAQ section in body */}
        <div className="border-t border-slate-100 pt-10 mt-12 space-y-6">
          <h3 className="text-lg font-bold text-slate-900">Guide FAQ</h3>
          <div className="space-y-4">
            {post.faqSchema.map((faq, i) => (
              <div key={i} className="p-5 bg-slate-50 border border-slate-100 rounded-2xl space-y-1.5">
                <h4 className="text-sm font-bold text-slate-800">{faq.question}</h4>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Newsletter Sign-up Box */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 mt-12 space-y-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-10"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-lg font-bold">Join 50,000+ office wizards</h3>
              <p className="text-xs text-slate-400 max-w-sm">
                Get monthly productivity guidelines, shortcut blueprints, and standard updates.
              </p>
            </div>

            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter email address"
                className="flex-grow rounded-xl bg-slate-800 border border-slate-700 px-4 py-2.5 text-xs focus:border-indigo-500 focus:outline-none"
              />
              <button className="flex items-center gap-1 bg-indigo-600 hover:bg-indigo-500 text-xs font-bold px-4 py-2.5 rounded-xl transition">
                <Mail className="w-3.5 h-3.5" />
                <span>Subscribe</span>
              </button>
            </div>
          </div>
        </div>

      </article>

    </div>
  );
}
