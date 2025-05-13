import Aboutme from "@/Components/Aboutme";
import Experience from "@/Components/Experience";
import Hero from "@/Components/Hero";
import Projects from "@/Components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div>
        <Aboutme />
      </div>
      <div>
        <Experience />
      </div>
      <div>
        <Projects />
      </div>
    </div>
  );
}
