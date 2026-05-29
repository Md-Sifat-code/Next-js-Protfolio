import ebookData from "@/data/ebook.json";
import { getEbookFreeOfferJsonLd } from "@/lib/seo/ebookJsonLd";
import { SITE_URL, DEFAULT_OG_IMAGE, absoluteUrl } from "@/lib/seo/site";

const { title, free, author } = ebookData;

export const metadata = {
  title: `Free ${free.title} | ${title}`,
  description: `Download the free ${free.title} for ${title} — ${free.chaptersIncluded}. Mindset, niche validation, and worksheets by ${author}.`,
  keywords: [
    "free online business guide",
    "free entrepreneurship ebook",
    "start business online free PDF",
    "business starter guide",
    title.toLowerCase(),
    author,
  ].join(", "),
  openGraph: {
    title: `Free ${free.title} | ${title}`,
    description: `Free PDF — ${free.format}. ${free.chaptersIncluded}. By ${author}.`,
    url: `${SITE_URL}/ebook/free`,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: absoluteUrl(DEFAULT_OG_IMAGE),
        width: 1200,
        height: 630,
        alt: `Free ${free.title} — ${title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Free ${free.title}`,
    description: `Chapters 1–2 free — ${title}`,
    images: [absoluteUrl(DEFAULT_OG_IMAGE)],
  },
  alternates: {
    canonical: `${SITE_URL}/ebook/free`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EbookFreeLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getEbookFreeOfferJsonLd()),
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
              {
                "@type": "ListItem",
                position: 3,
                name: free.title,
                item: `${SITE_URL}/ebook/free`,
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
