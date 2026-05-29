import blogPostsData from "@/data/blogPosts.json";
import { SITE_URL } from "@/lib/seo/site";

export default function sitemap() {
  const now = new Date().toISOString();

  const staticRoutes = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/ebook`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/ebook/free`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];

  const blogRoutes = blogPostsData.posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.id}`,
    lastModified: post.dateISO ? `${post.dateISO}T00:00:00.000Z` : now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...blogRoutes];
}
