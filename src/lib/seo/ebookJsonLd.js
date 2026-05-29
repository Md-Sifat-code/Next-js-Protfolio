import ebookData from "@/data/ebook.json";
import { SITE_URL, SOCIAL } from "./site";

export function getEbookProductJsonLd() {
  const { title, subtitle, author, price, format, updated } = ebookData;

  return {
    "@context": "https://schema.org",
    "@type": "Book",
    name: title,
    description: subtitle,
    author: {
      "@type": "Person",
      name: author,
      url: SITE_URL,
      sameAs: [SOCIAL.linkedin, SOCIAL.github, SOCIAL.akino],
    },
    url: `${SITE_URL}/ebook`,
    inLanguage: "en",
    bookFormat: "https://schema.org/EBook",
    numberOfPages: 120,
    datePublished: updated,
    offers: {
      "@type": "Offer",
      price: price.amount,
      priceCurrency: price.currency,
      url: `${SITE_URL}/ebook`,
      availability: "https://schema.org/InStock",
    },
    workExample: {
      "@type": "Book",
      bookFormat: format,
    },
  };
}

export function getEbookFreeOfferJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${ebookData.title} — Free Starter Guide`,
    description: ebookData.free.highlights.join(" "),
    brand: {
      "@type": "Brand",
      name: ebookData.author,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      url: `${SITE_URL}/ebook/free`,
      availability: "https://schema.org/InStock",
    },
  };
}
