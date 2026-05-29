import { SITE_URL, absoluteUrl, DEFAULT_OG_IMAGE, SOCIAL } from "@/lib/seo/site";

export const metadata = {
  title: "Blockchain Development Blog",
  description:
    "Guides on blockchain development, smart contracts, dApps, Corda, and Ethereum by Md Sifat Bin Jibon — R3 Blockchain Developer, FluvoSoft CEO, and AKINO founder.",
  keywords: [
    "blockchain development blog",
    "blockchain development guides",
    "blockchain tutorials",
    "blockchain development articles",
    "smart contract development",
    "dapp development guide",
    "ethereum development tutorial",
    "blockchain programming blog",
    "blockchain developer blog",
    "blockchain technology articles",
    "corda development",
    "blockchain development resources",
  ].join(", "),
  openGraph: {
    title: "Blog | Blockchain Development Guides | Md Sifat Bin Jibon",
    description:
      "Comprehensive blockchain development guides, tutorials, and articles. Learn smart contracts, dApps, and blockchain programming from an experienced developer.",
    url: `${SITE_URL}/blog`,
    siteName: "Md Sifat Bin Jibon - Blockchain Developer",
    images: [
      {
        url: absoluteUrl(DEFAULT_OG_IMAGE),
        width: 1200,
        height: 630,
        alt: "Md Sifat Bin Jibon - Blockchain Development Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Blockchain Development Guides | Md Sifat Bin Jibon",
    description:
      "Comprehensive blockchain development guides and tutorials for beginners and advanced developers.",
    creator: "@md_sifat",
    images: [absoluteUrl(DEFAULT_OG_IMAGE)],
    creator: SOCIAL.twitter,
  },
  alternates: {
    canonical: `${SITE_URL}/blog`,
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

export default function BlogLayout({ children }) {
  return (
    <>
      {/* Blog Collection Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Md Sifat Bin Jibon - Blockchain Development Blog",
            description:
              "Comprehensive guides on blockchain development, smart contracts, and dApp development",
            url: `${SITE_URL}/blog`,
            author: {
              "@type": "Person",
              name: "Md Sifat Bin Jibon",
              jobTitle:
                "Founder of AKINO · Mid level Blockchain Developer at R3 & CEO at FluvoSoft",
              url: SITE_URL,
              sameAs: [SOCIAL.linkedin, SOCIAL.github, SOCIAL.akino],
            },
            publisher: {
              "@type": "Person",
              name: "Md Sifat Bin Jibon",
              url: SITE_URL,
            },
            inLanguage: "en-US",
            about: {
              "@type": "Thing",
              name: "Blockchain Development",
            },
          }),
        }}
      />
      {children}
    </>
  );
}

