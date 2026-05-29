import Hero from "@/Components/Hero";
import TechStack from "@/Components/TechStack";
import HackathonAchievements from "@/Components/HackathonAchievements";
import WorkshopTaken from "@/Components/WorkshopTaken";
import Experience from "@/Components/Experience";
import LinkedInContributions from "@/Components/LinkedInContributions";
import YouTubeSection from "@/Components/YouTubeSection";
import { SITE_URL, SITE_DESCRIPTION } from "@/lib/seo/site";

export const metadata = {
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    url: SITE_URL,
    title: "Md Sifat Bin Jibon | Portfolio",
    description: SITE_DESCRIPTION,
  },
};

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <TechStack />
      <HackathonAchievements />
      <WorkshopTaken />
      <Experience />
      <LinkedInContributions />
      <YouTubeSection />
      <div className="sr-only" aria-hidden="true">
        <h1>Md Sifat Bin Jibon — Portfolio</h1>
        <h2>Blockchain Developer in Bangladesh | R3, FluvoSoft & AKINO Founder</h2>
        <p>{SITE_DESCRIPTION}</p>
        <p>
          Md Sifat Bin Jibon (md sifat, md sifat bin jibon) works at R3 as a
          Blockchain Developer, leads FluvoSoft as CEO, and founded AKINO
          (akino.store), a premium clothing brand in Bangladesh with valuation
          grown from 0 to 152,000 BDT. He conducts workshops through UIU
          Developers HUB at United International University and publishes the
          Start Your Online Business e-book with a free starter guide at
          sifatbinjibon.site/ebook.
        </p>
        <nav aria-label="Site sections">
          <ul>
            <li>
              <a href={`${SITE_URL}/blog`}>Blockchain development blog</a>
            </li>
            <li>
              <a href={`${SITE_URL}/ebook`}>Start Your Online Business e-book</a>
            </li>
            <li>
              <a href={`${SITE_URL}/ebook/free`}>Free e-book starter guide</a>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
}
