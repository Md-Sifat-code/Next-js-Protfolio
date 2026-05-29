// src/app/layout.js

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FollowCursor from "../Components/FollowCursor";
import Navbar from "@/Components/Navbar";
import { Analytics } from "@vercel/analytics/next";
import FirebaseAnalytics from "@/Components/FirebaseAnalytics";
import {
  SITE_URL,
  SITE_TITLE,
  SITE_DESCRIPTION,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  SOCIAL,
  absoluteUrl,
} from "@/lib/seo/site";

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Md Sifat Bin Jibon",
  },
  description: SITE_DESCRIPTION,
  applicationName: "Md Sifat Portfolio",
  authors: [{ name: "Md Sifat Bin Jibon", url: "https://sifatbinjibon.site" }],
  keywords: [
    "md sifat",
    "md sifat bin jibon",
    "Md Sifat",
    "Md Sifat Bin Jibon",
    "r3",
    "R3",
    "blockchain",
    "Blockchain",
    "uiu",
    "UIU",
    "united international university",
    "United International University",
    "uiudh",
    "UIUDH",
    "uiu developers hub",
    "UIU Developers HUB",
    "fluvosoft",
    "FluvoSoft",
    "akino",
    "AKINO",
    "akino.store",
    "AKINO clothing",
    "AKINO founder",
    "clothing brand Bangladesh",
    "men's fashion Bangladesh",
    "uiu orbit",
    "UIU Orbit",
    "React Orbit",
    "blockchain developer in bangladesh",
    "Blockchain Developer in Bangladesh",
    "Blockchain Developer Bangladesh",
    "best blockchain developer Bangladesh",
    "Corda developer Bangladesh",
    "DLT engineer Bangladesh",
    "FluvoSoft CEO",
    "CEO FluvoSoft",
    "R3 Blockchain Developer",
    "Md Sifat Portfolio",
    "Md Sifat Projects",
    "Software Developer",
    "Frontend Engineer",
    "React Next.js developer",
    "Tokenization",
    "Corda",
    "Distributed Ledger",
    "Blockchain engineering in Bangladesh",
    "Software Development",
    "Tech Solutions in Bangladesh",
    "drmc",
    "DRMC",
    "LinkedIn posts",
    "LinkedIn contributions",
    "startup strategy",
    "blockchain startup Bangladesh",
    "Interview Panel",
    "workshop instructor",
    "UIU workshop",
    "educational workshops",
    "start your online business",
    "online business ebook",
    "entrepreneurship ebook",
    "start business online Bangladesh",
    "sifatbinjibon",
    "sifatbinjibon.site",
    "Md Sifat ebook",
  ].join(", "),
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxImagePreview: "large",
      maxSnippet: -1,
      maxVideoPreview: -1,
    },
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: `${SITE_NAME} Portfolio`,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Md Sifat Bin Jibon - Blockchain Developer, CEO at FluvoSoft, Founder of AKINO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    creator: SOCIAL.twitter,
    images: [DEFAULT_OG_IMAGE],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#0D47A1" />
        <link rel="me" href={SOCIAL.linkedin} />
        <link rel="me" href={SOCIAL.github} />
        <link rel="me" href={SOCIAL.akino} />
        {/* Apple Web App */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        {/* JSON-LD: Person and WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Md Sifat Bin Jibon",
              alternateName: ["Md Sifat", "md sifat", "md sifat bin jibon"],
              url: SITE_URL,
              image: absoluteUrl(DEFAULT_OG_IMAGE),
              description: SITE_DESCRIPTION,
              sameAs: [SOCIAL.linkedin, SOCIAL.github, SOCIAL.akino],
              jobTitle: "Blockchain Developer & Software Engineer",
              worksFor: [
                {
                  "@type": "Organization",
                  name: "R3",
                  alternateName: "r3",
                  sameAs: "https://www.linkedin.com/company/r3cev-llc",
                  description: "R3 is a leading enterprise blockchain software firm",
                },
                {
                  "@type": "Organization",
                  name: "FluvoSoft",
                  alternateName: "fluvosoft",
                  sameAs: "https://www.linkedin.com/company/fluvo-soft",
                  employee: {
                    "@type": "Person",
                    name: "Md Sifat Bin Jibon",
                  },
                  employeeType: "CEO",
                },
                {
                  "@type": "Organization",
                  name: "AKINO",
                  alternateName: ["akino", "AKINO clothing"],
                  url: "https://www.akino.store",
                  sameAs: "https://www.akino.store",
                  description:
                    "AKINO is a premium men's fashion and clothing brand in Bangladesh offering oversized tees, drop-shoulder streetwear, couple sets, and women's wear.",
                  founder: {
                    "@type": "Person",
                    name: "Md Sifat Bin Jibon",
                  },
                  areaServed: "Bangladesh",
                },
              ],
              alumniOf: [
                {
                  "@type": "EducationalOrganization",
                  name: "United International University",
                  alternateName: ["UIU", "uiu", "United International University"],
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Dhaka",
                    addressRegion: "Dhaka",
                    addressCountry: "Bangladesh",
                  },
                },
              ],
              memberOf: [
                {
                  "@type": "Organization",
                  name: "UIU Developers HUB",
                  alternateName: ["UIUDH", "uiudh", "UIU Developers HUB", "uiu developers hub"],
                  parentOrganization: {
                    "@type": "EducationalOrganization",
                    name: "United International University",
                  },
                },
              ],
              knowsAbout: [
                "Blockchain",
                "blockchain",
                "Blockchain Developer in Bangladesh",
                "Corda",
                "Tokenization",
                "Distributed Ledger Technology",
                "DLT",
                "Smart Contracts",
                "Solana",
                "React",
                "Next.js",
                "Frontend Development",
                "E-commerce",
                "Fashion",
                "Clothing brand",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dhaka",
                addressRegion: "Dhaka",
                addressCountry: "Bangladesh",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: SOCIAL.email,
              },
              hasCredential: [
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "Workshop",
                  recognizedBy: {
                    "@type": "Organization",
                    name: "UIU Developers HUB",
                  },
                  about: "React Orbit - Frontend Development Workshop",
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "Workshop",
                  recognizedBy: {
                    "@type": "Organization",
                    name: "UIU Developers HUB",
                  },
                  about: "Hackathon Preparation Workshop",
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Md Sifat Bin Jibon Portfolio",
              alternateName: ["Md Sifat Portfolio", "md sifat portfolio"],
              url: SITE_URL,
              description: SITE_DESCRIPTION,
              publisher: {
                "@type": "Person",
                name: SITE_NAME,
                url: SITE_URL,
              },
              hasPart: [
                {
                  "@type": "WebPage",
                  name: "Blog",
                  url: `${SITE_URL}/blog`,
                },
                {
                  "@type": "WebPage",
                  name: "Start Your Online Business E-book",
                  url: `${SITE_URL}/ebook`,
                },
              ],
            }),
          }}
        />
        {/* JSON-LD: Organization - UIU Developers HUB */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "UIU Developers HUB",
              alternateName: ["UIUDH", "uiudh", "UIU Developers HUB", "uiu developers hub"],
              parentOrganization: {
                "@type": "EducationalOrganization",
                name: "United International University",
                alternateName: ["UIU", "uiu", "United International University"],
              },
            }),
          }}
        />
        {/* JSON-LD: Organization - United International University */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "United International University",
              alternateName: ["UIU", "uiu", "United International University"],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dhaka",
                addressRegion: "Dhaka",
                addressCountry: "Bangladesh",
              },
            }),
          }}
        />
      </head>
      <body className={geist.className}>
        <FollowCursor />
        <Navbar />
        {children}
        <Analytics />
        <FirebaseAnalytics />
      </body>
    </html>
  );
}
