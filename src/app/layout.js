// src/app/layout.js

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FollowCursor from "../Components/FollowCursor";
import Navbar from "@/Components/Navbar";

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Md Sifat Bin Jibon | AI Engineer & Software Developer",
  description:
    "Md Sifat Bin Jibon is an AI Engineer and Software Developer with expertise in machine learning, deep learning, and building intelligent systems. Explore my portfolio to see innovative AI-driven projects, coding skills, and more.",
  keywords: [
    "md sifat bin jibon",
    "Md Sifat",
    "Md Sifat Bin Jibon",
    "Md Sifat Portfolio",
    "Md Sifat Projects",
    "Md Sifat AI Engineer",
    "Md Sifat Software Developer",
    "Md Sifat AI Projects",
    "Md Sifat Machine Learning",
    "Md Sifat Deep Learning",
    "Md Sifat AI Engineer Portfolio",
    "Md Sifat Software Developer Portfolio",
    "Md Sifat AI Engineer Projects",
    "Md Sifat Software Developer Projects",
    "Md Sifat AI Engineer Bangladesh",
    "Md Sifat Software Developer Bangladesh",
    "Md Sifat AI Engineer Dhaka",
    "Md Sifat Software Developer Dhaka",
    "Md Sifat AI Engineer in Bangladesh",
    "Md Sifat Software Developer in Bangladesh",
    "Md Sifat AI Engineer in Dhaka",
    "Md Sifat Software Developer in Dhaka",
    "Md Sifat AI Engineer Skills",
    "Md Sifat Software Developer Skills",
    "Md Sifat AI Engineer Experience",
    "Md Sifat Software Developer Experience",
    "Md Sifat AI Engineer Projects Bangladesh",
    "Md Sifat Software Developer Projects Bangladesh",
    "Md Sifat AI Engineer Projects Dhaka",
    "Md Sifat Software Developer Projects Dhaka",
    "Md Sifat AI Engineer Projects in Bangladesh",
    "AI Engineer",
    "Machine Learning Engineer",
    "Deep Learning Engineer",
    "Artificial Intelligence",
    "Software Developer",
    "Python Developer",
    "Data Scientist",
    "AI Portfolio",
    "AI Projects",
    "Machine Learning Projects",
    "Deep Learning Projects",
    "Natural Language Processing",
    "Computer Vision",
    "TensorFlow",
    "PyTorch",
    "ML Engineer",
    "AI Researcher",
    "AI Solutions",
    "AI Models",
    "AI Algorithms",
    "Full Stack AI Engineer",
    "Data Science",
    "AI Development",
    "AI Innovations",
    "AI Development Portfolio",
    "AI Engineer Portfolio",
    "ML Engineer Portfolio",
    "Data Science Portfolio",
    "AI Programming",
    "AI Engineers in Bangladesh",
    "AI Engineers in Dhaka",
    "Md Sifat Portfolio",
    "AI Engineering in Bangladesh",
    "Software Development",
    "Deep Learning Frameworks",
    "Supervised Learning",
    "Unsupervised Learning",
    "Reinforcement Learning",
    "AI-based Solutions",
    "AI Projects Bangladesh",
    "Tech Solutions in Bangladesh",
    "Data Science Engineering",
    "Python AI Programming",
    "AI Solutions Bangladesh",
    "AI Innovation Bangladesh",
  ].join(", "),
  authors: [{ name: "Md Sifat Bin Jibon" }],
  openGraph: {
    title: "Md Sifat Bin Jibon | AI Engineer & Software Developer",
    description:
      "Md Sifat Bin Jibon is an AI Engineer and Software Developer with a passion for building intelligent systems. Explore AI-driven projects, machine learning solutions, and more in my portfolio.",
    type: "website",
    locale: "en",
    url: "https://mdsifat.site", // Your portfolio URL
    image: "https://mdsifat.site/your-image.png", // Replace with your image URL
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
        {/* Canonical */}
        <link rel="canonical" href="https://mdsifat.site" />
        {/* ✅ Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"
          rel="stylesheet"
        />
        {/* Theme Color */}
        <meta name="theme-color" content="#0D47A1" />
        {/* Open Graph */}
        <meta
          property="og:image"
          content="https://mdsifat.site/your-image.png"
        />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://mdsifat.site/your-image.png"
        />
        {/* Apple Web App */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Md Sifat Bin Jibon",
              url: "https://mdsifat.site",
              logo: "https://mdsifat.site/your-image.png", // Replace with your logo/image URL
              description:
                "Md Sifat Bin Jibon is an AI Engineer and Software Developer specializing in machine learning, deep learning, and building intelligent systems.",
              sameAs: [
                "https://www.linkedin.com/in/md-sifat-follow",
                "https://github.com/Md-Sifat-code",
                "https://fluvosoft.com", // Your company link
              ],
              jobTitle: "AI Engineer & Software Developer",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dhaka",
                addressRegion: "Dhaka",
                addressCountry: "Bangladesh",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: "md.sifat@example.com", // Replace with your contact email
              },
            }),
          }}
        />
      </head>
      <body className={geist.className}>
        <FollowCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
