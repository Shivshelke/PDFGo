export async function GET() {
  const robots = `User-agent: *
Allow: /

Sitemap: https://pdfgo.com/sitemap.xml
`;

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400'
    }
  });
}
