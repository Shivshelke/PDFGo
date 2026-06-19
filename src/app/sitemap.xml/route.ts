import { toolsData } from '@/data/tools';
import { blogPosts } from '@/data/blog';

export async function GET() {
  const baseUrl = "https://pdfgo.com";

  const staticUrls = [
    { url: baseUrl, lastMod: new Date().toISOString() },
    { url: `${baseUrl}/blog`, lastMod: new Date().toISOString() },
    { url: `${baseUrl}/pricing`, lastMod: new Date().toISOString() }
  ];

  const toolUrls = toolsData.map(tool => ({
    url: `${baseUrl}${tool.path}`,
    lastMod: new Date().toISOString()
  }));

  const blogUrls = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastMod: new Date().toISOString()
  }));

  const allUrls = [...staticUrls, ...toolUrls, ...blogUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls.map(item => `
  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastMod.split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${item.url === baseUrl ? '1.0' : item.url.includes('/blog') ? '0.6' : '0.8'}</priority>
  </url>
  `).join('')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=43200'
    }
  });
}
