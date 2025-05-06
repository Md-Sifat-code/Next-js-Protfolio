export async function GET() {
  const baseUrl = "https://mdsifat.site"; // Updated base URL

  // List of static pages specific to your website
  const staticPages = [
    "",
    "about",
    "contact",
    "projects",
    "blog",
    "privacy-policy",
    "terms-of-service",
  ];

  // Generate URLs for the sitemap
  const urls = staticPages.map((page) => {
    const fullUrl = `${baseUrl}/${page}`.replace(/([^:]\/)\/+/g, "$1"); // Avoid double slashes in URLs
    const priority =
      page === ""
        ? 1.0
        : page.includes("policy") || page.includes("terms")
        ? 0.5
        : 0.7; // Default priority logic

    return {
      url: fullUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority,
    };
  });

  // Create the sitemap XML content
  const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
      <?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls
          .map(
            (url) => `
          <url>
            <loc>${url.url}</loc>
            <lastmod>${url.lastModified}</lastmod>
            <changefreq>${url.changeFrequency}</changefreq>
            <priority>${url.priority}</priority>
          </url>`
          )
          .join("")}
      </urlset>`;

  // Return the sitemap XML with appropriate headers
  return new Response(sitemapXML, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
