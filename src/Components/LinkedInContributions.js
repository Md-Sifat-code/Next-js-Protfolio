import React from "react";

const linkedInPosts = [
  {
    id: 1,
    title: "Startup Execution vs Direction",
    excerpt: "Most startups don't fail because of bad execution. They fail because they execute the wrong thing perfectly. Shipping faster doesn't matter if the direction is wrong. Hiring more people doesn't help if the problem isn't clear. Raising money won't save a model that doesn't scale...",
    image: "/Linkedin posts/md_sifat_bin_jibon_startup.png",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7419048696186613760/",
    date: "1 week ago",
    category: "Startup",
  },
  {
    id: 2,
    title: "Building a Blockchain Startup in Bangladesh",
    excerpt: "Building a Blockchain Startup in Bangladesh is a different kind of battle. The biggest challenge isn't coding. It's market trust. Most people still hear 'blockchain' and think: crypto, scams, or something too complex to adopt. At Fluvo Soft, we're overcoming this by keeping it simple: We don't sell 'blockchain hype.' We build blockchain utility...",
    image: "/Linkedin posts/md_sifat_bin_jibon_blockchain_startup.jpg",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7421244945057091584/",
    date: "1 week ago",
    category: "Blockchain",
  },
  {
    id: 3,
    title: "Blockchain Infrastructure for Trust",
    excerpt: "Bangladesh doesn't need blockchain to look modern. It needs it to scale trust. As systems grow, manual processes and invisible agreements start to break. Disputes increase. Middle layers multiply. Honest work becomes hard to verify. Blockchain isn't about crypto hype. It's about verifiable records, transparent processes, and fewer points of failure...",
    image: "/Linkedin posts/md_sifat_bin Jibon_trust.png",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:YOUR_POST_ID/",
    date: "3 days ago",
    category: "Blockchain",
  },
];

const LinkedInContributions = () => {
  return (
    <>
      {/* JSON-LD Structured Data for LinkedIn Contributions */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "LinkedIn Contributions by Md Sifat Bin Jibon",
            description:
              "LinkedIn posts and articles by Md Sifat Bin Jibon on blockchain development, startup strategy, and technology innovation in Bangladesh",
            itemListElement: linkedInPosts.map((post, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Article",
                headline: post.title,
                description: post.excerpt,
                image: `https://sifatbinjibon.site${post.image}`,
                author: {
                  "@type": "Person",
                  name: "Md Sifat Bin Jibon",
                  jobTitle: "Founder of AKINO · Mid level Blockchain Developer at R3 & CEO at FluvoSoft",
                  url: "https://sifatbinjibon.site",
                },
                publisher: {
                  "@type": "Organization",
                  name: "LinkedIn",
                  url: "https://www.linkedin.com",
                },
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": post.link,
                },
                articleSection: post.category,
                inLanguage: "en-US",
              },
            })),
          }),
        }}
      />
      <section
        id="linkedin-contributions"
        className="py-20 bg-gray-50 min-h-screen flex flex-col items-center justify-center"
        itemScope
        itemType="https://schema.org/ItemList"
        aria-label="LinkedIn Contributions Section"
      >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4" itemProp="name">
            LinkedIn Contributions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" itemProp="description">
            Insights, thoughts, and updates on blockchain development, startup strategy, automation, Web3, and
            technology innovation in Bangladesh. Follow me on{" "}
            <a
              href="https://www.linkedin.com/in/mdsifatbinjibon/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#dfb425] hover:underline font-semibold"
            >
              LinkedIn
            </a>{" "}
            for more.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          itemProp="itemListElement"
        >
          {linkedInPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 group"
              itemScope
              itemType="https://schema.org/Article"
            >
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img
                    src={post.image}
                    alt={`${post.title} - LinkedIn post by Md Sifat Bin Jibon, Blockchain Developer in Bangladesh, CEO at FluvoSoft, R3`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    itemProp="image"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#dfb425] text-black">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <h3
                    className="text-xl font-bold text-black mb-3 group-hover:text-[#dfb425] transition-colors line-clamp-2"
                    itemProp="headline"
                  >
                    {post.title}
                  </h3>
                  <p
                    className="text-gray-600 text-sm mb-4 line-clamp-3"
                    itemProp="description"
                  >
                    {post.excerpt}
                  </p>
                  <meta itemProp="author" content="Md Sifat Bin Jibon" />
                  <meta itemProp="publisher" content="LinkedIn" />
                  <meta itemProp="inLanguage" content="en-US" />
                  <meta itemProp="articleSection" content={post.category} />
                  <div className="flex items-center gap-2 text-[#dfb425] font-medium text-sm">
                    <span>Read on LinkedIn</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.linkedin.com/in/mdsifatbinjibon/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            View All Posts on LinkedIn
          </a>
        </div>
      </div>
    </section>
    </>
  );
};

export default LinkedInContributions;
