"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import blogPostsData from "@/data/blogPosts.json";
import BlogContent from "@/Components/blog/BlogContent";
import HackathonGuideContent from "@/Components/blog/HackathonGuideContent";

// Convert array to object for easier lookup
const blogPosts = {};
blogPostsData.posts.forEach((post) => {
  blogPosts[String(post.id)] = post;
});

export default function BlogPost() {
  const params = useParams();
  const postId = params?.id ? String(params.id) : null;
  const post = postId ? blogPosts[postId] : null;

  if (!postId || !post) {
    return (
      <main className="min-h-screen bg-white text-black pt-20 pb-32">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-4">
            {postId ? `Post ID ${postId} not found.` : "Invalid post ID."}
          </p>
          <Link
            href="/blog"
            className="text-[#dfb425] hover:underline"
          >
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-black pt-20 pb-32">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      {/* Structured Data - JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            image: "https://sifatbinjibon.site/profpic.jpg",
            datePublished: post.dateISO,
            dateModified: post.dateISO,
            author: {
              "@type": "Person",
              name: post.author,
              jobTitle: post.authorRole,
              url: "https://sifatbinjibon.site",
              sameAs: [
                "https://www.linkedin.com/in/mdsifatbinjibon/",
                "https://github.com/Md-Sifat-Bin-Jibon",
              ],
            },
            publisher: {
              "@type": "Organization",
              name: "Md Sifat Bin Jibon",
              url: "https://sifatbinjibon.site",
              logo: {
                "@type": "ImageObject",
                url: "https://sifatbinjibon.site/profpic.jpg",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://sifatbinjibon.site/blog/${post.id}`,
            },
            articleSection: post.category,
            keywords: post.keywords.join(", "),
            articleBody: postId === "1" 
              ? "Complete guide covering blockchain fundamentals, smart contracts, dApp development, and hands-on projects for beginners."
              : "Comprehensive hackathon preparation guide covering team building, idea generation, execution strategies, pitching mastery, and post-hackathon follow-up from a seasoned participant with multiple wins.",
            inLanguage: "en-US",
            about: {
              "@type": "Thing",
              name: postId === "1" ? "Blockchain Development" : "Hackathon Preparation",
              description: postId === "1" 
                ? "Comprehensive guide to blockchain development for beginners"
                : "Complete guide to hackathon success and preparation strategies",
            },
            teaches: postId === "1" 
              ? [
                  "Blockchain Technology",
                  "Smart Contract Development",
                  "Decentralized Application Development",
                  "Ethereum Development",
                  "Solidity Programming",
                ]
              : [
                  "Hackathon Preparation",
                  "Team Building",
                  "Idea Generation",
                  "Rapid Prototyping",
                  "Pitch Presentation",
                  "Time Management",
                ],
          }),
        }}
      />
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://sifatbinjibon.site",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://sifatbinjibon.site/blog",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: post.title,
                item: `https://sifatbinjibon.site/blog/${post.id}`,
              },
            ],
          }),
        }}
      />
      {/* FAQ Schema - Conditional based on post */}
      {postId === "1" ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is blockchain development?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Blockchain development involves creating decentralized applications (dApps) and smart contracts using blockchain technology. It includes programming smart contracts, building front-end interfaces, and integrating with blockchain networks like Ethereum.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I start learning blockchain development?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Start by learning programming basics (JavaScript or Python), understanding blockchain fundamentals, setting up a development environment with tools like Hardhat or Truffle, and building your first smart contract project.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What programming languages are used for blockchain development?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Common languages include Solidity (for Ethereum), JavaScript (for web3.js), Python (for scripting), and Rust (for Solana). Solidity is the most popular for smart contract development.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What tools do I need for blockchain development?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Essential tools include Node.js, a development framework (Hardhat or Truffle), MetaMask wallet, a local blockchain (Ganache), and an IDE like VS Code with Solidity extensions.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is blockchain development hard to learn?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Blockchain development has a learning curve, but with dedication and the right resources, beginners can start building projects within a few months. Start with fundamentals, practice with testnets, and join developer communities for support.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the best blockchain to develop on?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ethereum is the most popular for beginners due to extensive resources, large community, and mature tooling. Other options include Solana (for high-speed apps), Polygon (for low fees), and enterprise solutions like R3 Corda for business applications.",
                  },
                },
              ],
            }),
          }}
        />
      ) : postId === "4" ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How do I prepare for a hackathon?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Prepare by researching hackathons on platforms like Devpost or MLH, assessing your skills and upskilling if needed, setting up your development toolkit, preparing mentally and physically, and setting realistic goals. Start 4-6 weeks before the event.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What skills do I need for hackathons?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Essential skills include coding (Python, JavaScript), design (Figma), pitching, and knowledge of trending technologies like AI/ML or blockchain. Teamwork and time management are also crucial.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I build a winning hackathon team?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Find teammates with diverse skills (developer, designer, business strategist) through Discord, LinkedIn, or hackathon channels. Assign clear roles, use communication tools like Slack, and establish conflict resolution strategies early.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are common hackathon mistakes to avoid?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Common mistakes include over-scoping projects, poor time management, neglecting design, team conflicts, ignoring sleep, not having backups, and weak pitches. Focus on MVP, manage time wisely, and practice your presentation.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I win a hackathon?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Winning requires thorough preparation, a strong diverse team, clear idea validation, focused MVP development, excellent time management, compelling pitch, and effective execution. Practice your pitch multiple times and ensure your demo works flawlessly.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What should I do after a hackathon?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "After a hackathon, debrief with your team, follow up on LinkedIn with participants and judges, continue developing your project (open source or iterate), add it to your portfolio, and take time to rest and recharge.",
                  },
                },
              ],
            }),
          }}
        />
      ) : null}
      {/* HowTo Schema - Conditional based on post */}
      {postId === "1" ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to Get Started with Blockchain Development",
              description: "Step-by-step guide to learning blockchain development from basics to building your first project",
              image: "https://sifatbinjibon.site/profpic.jpg",
              totalTime: "PT15M",
              estimatedCost: {
                "@type": "MonetaryAmount",
                currency: "USD",
                value: "0",
              },
              step: [
                {
                  "@type": "HowToStep",
                  name: "Learn Programming Basics",
                  text: "Start with JavaScript or Python. Learn data structures and basic programming concepts.",
                },
                {
                  "@type": "HowToStep",
                  name: "Understand Blockchain Fundamentals",
                  text: "Learn about decentralization, immutability, consensus mechanisms, and how blockchain works.",
                },
                {
                  "@type": "HowToStep",
                  name: "Set Up Development Environment",
                  text: "Install Node.js, Hardhat or Truffle framework, MetaMask wallet, and Ganache for local testing.",
                },
                {
                  "@type": "HowToStep",
                  name: "Learn Smart Contract Development",
                  text: "Study Solidity programming language and write your first smart contract.",
                },
                {
                  "@type": "HowToStep",
                  name: "Build Your First Project",
                  text: "Create a simple dApp like a voting system to practice smart contract development and front-end integration.",
                },
              ],
            }),
          }}
        />
      ) : postId === "4" ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to Prepare for and Win Hackathons",
              description: "Complete step-by-step guide to hackathon success from preparation to execution and follow-up",
              image: "https://sifatbinjibon.site/profpic.jpg",
              totalTime: "PT48H",
              estimatedCost: {
                "@type": "MonetaryAmount",
                currency: "USD",
                value: "0",
              },
              step: [
                {
                  "@type": "HowToStep",
                  name: "Research and Select Hackathons",
                  text: "Use platforms like Devpost or MLH to find hackathons that align with your skills and interests. Consider prize pool, theme, and location.",
                },
                {
                  "@type": "HowToStep",
                  name: "Build Your Team",
                  text: "Find teammates with diverse skills (developer, designer, business strategist) through Discord, LinkedIn, or hackathon channels.",
                },
                {
                  "@type": "HowToStep",
                  name: "Prepare Your Toolkit",
                  text: "Set up development environment, install necessary tools (VS Code, Git, APIs), and prepare hardware (laptop charger, headphones).",
                },
                {
                  "@type": "HowToStep",
                  name: "Generate and Validate Ideas",
                  text: "Brainstorm solutions using mind mapping or SWOT analysis. Validate ideas quickly with user surveys or MVP sketches.",
                },
                {
                  "@type": "HowToStep",
                  name: "Execute During Hackathon",
                  text: "Focus on MVP, manage time with Pomodoro technique, test continuously, and prepare a compelling pitch presentation.",
                },
                {
                  "@type": "HowToStep",
                  name: "Follow Up After Event",
                  text: "Debrief with team, network on LinkedIn, continue project development, and add to portfolio.",
                },
              ],
            }),
          }}
        />
      ) : null}

      <article className="container mx-auto px-6 max-w-4xl relative z-10" itemScope itemType="https://schema.org/BlogPosting">
        {/* Header */}
        <header className="mb-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#dfb425] transition-colors mb-6"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span>Back to Blog</span>
          </Link>

          <div className="mb-4">
            <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold bg-[#dfb425] text-black">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6" itemProp="headline">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-2" itemProp="author" itemScope itemType="https://schema.org/Person">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span className="font-medium" itemProp="name">{post.author}</span>
            </div>
            <span>•</span>
            <time dateTime={post.dateISO} itemProp="datePublished">{post.date}</time>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <p className="text-lg text-gray-600 italic">{post.authorRole}</p>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none" itemProp="articleBody">
          {postId === "1" && <BlogContent />}
          {postId === "4" && <HackathonGuideContent />}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <span className="text-sm text-gray-600">Share this article:</span>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://sifatbinjibon.site/blog/${post.id}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#dfb425] hover:underline"
            >
              Twitter
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://sifatbinjibon.site/blog/${post.id}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#dfb425] hover:underline"
            >
              LinkedIn
            </a>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-100 hover:bg-gray-200 text-black font-medium transition-all duration-200"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span>Back to All Posts</span>
          </Link>
        </div>
      </article>
    </main>
  );
}
