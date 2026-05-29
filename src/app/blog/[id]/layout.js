import blogPostsData from "@/data/blogPosts.json";
import { SITE_URL, absoluteUrl, DEFAULT_OG_IMAGE } from "@/lib/seo/site";

// Convert array to object for easier lookup
const blogPosts = {};
blogPostsData.posts.forEach((post) => {
  blogPosts[post.id] = post;
});

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const postId = parseInt(resolvedParams.id);
  const post = blogPosts[postId];

  if (!post) {
    return {
      title: "Blog Post Not Found | Md Sifat Bin Jibon",
    };
  }

  const url = `${SITE_URL}/blog/${postId}`;
  const imageUrl = absoluteUrl(DEFAULT_OG_IMAGE);

  const isHackathonPost = postId === 4;
  const titleSuffix = isHackathonPost 
    ? "Hackathon Preparation Guide | Md Sifat Bin Jibon"
    : "Blockchain Development Guide | Md Sifat Bin Jibon";
  const ogTitleSuffix = isHackathonPost
    ? "Hackathon Preparation Guide"
    : "Blockchain Development Guide";

  return {
    title: `${post.title} | ${titleSuffix}`,
    description: post.description,
    keywords: post.keywords.join(", "),
    authors: [{ name: post.author, url: SITE_URL }],
    openGraph: {
      title: `${post.title} | ${ogTitleSuffix}`,
      description: post.description,
      url: url,
      siteName: "Md Sifat Bin Jibon - Blockchain Developer",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${post.title} by Md Sifat Bin Jibon`,
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      section: post.category,
      tags: post.keywords.slice(0, 10),
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | ${ogTitleSuffix}`,
      description: post.description,
      creator: "@md_sifat",
      images: [imageUrl],
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default function BlogPostLayout({ children }) {
  return <>{children}</>;
}

