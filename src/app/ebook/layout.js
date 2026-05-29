import ebookData from "@/data/ebook.json";
import { getEbookProductJsonLd } from "@/lib/seo/ebookJsonLd";
import {
  SITE_URL,
  DEFAULT_OG_IMAGE,
  absoluteUrl,
} from "@/lib/seo/site";

const { title, subtitle, author } = ebookData;

export const metadata = {
  title: `E-book: ${title}`,
  description: `${subtitle} Free starter guide (Chapters 1–2) and full PDF by ${author} — Founder of AKINO, CEO at FluvoSoft, Blockchain Developer at R3.`,
  keywords: [
    "start your online business",
    "how to start business online",
    "online business ebook",
    "entrepreneurship guide",
    "start business Bangladesh",
    "free business ebook",
    "Md Sifat Bin Jibon ebook",
    "AKINO founder",
    "online business PDF",
  ].join(", "),
  openGraph: {
    title: `${title} | E-book by ${author}`,
    description: subtitle,
    url: `${SITE_URL}/ebook`,
    type: "website",
    locale: "en_US",
    siteName: author,
    images: [
      {
        url: absoluteUrl(DEFAULT_OG_IMAGE),
        width: 1200,
        height: 630,
        alt: `${title} e-book by ${author}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | E-book`,
    description: subtitle,
    images: [absoluteUrl(DEFAULT_OG_IMAGE)],
  },
  alternates: {
    canonical: `${SITE_URL}/ebook`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EbookLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getEbookProductJsonLd()),
        }}
      />
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
                item: SITE_URL,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: title,
                item: `${SITE_URL}/ebook`,
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
