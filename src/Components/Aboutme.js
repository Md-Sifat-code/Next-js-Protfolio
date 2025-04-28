import React from "react";
import {
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiPython,
  SiPostgresql,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiC,
  SiHtml5,
  SiCss3,
} from "react-icons/si"; // Import tech icons from react-icons
import { FaJava } from "react-icons/fa"; // Next.js, Tailwind CSS, JS, TS, GraphQL, Postgres icons

function Aboutme() {
  return (
    <div className="container mx-auto max-w-5xl p-6 text-[#ccd6f6] iceland ">
      {/* Main Container */}
      <div className="flex flex-col">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-semibold">/about Me</h1>
          <hr className="border-t-2 border-teal-600 w-16 mt-2" />
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-3 gap-6">
          {/* Left Side Content */}
          <div className="col-span-2">
            <p className="text-2xl mb-4">
              I am currently a Software Development Engineer at{" "}
              <span className="text-teal-600">Hyperlink InfoSystem</span>,
              working in the AWS sector under team Route 53. At the same time, I
              am undertaking a part-time Master's of Science in Software
              Engineering at University of Oxford.
            </p>

            <h2 className="text-2xl font-semibold mb-4">
              Here are some technologies I have been working with:
            </h2>

            <div className="flex  mt-12 justify-start ">
              <div className="flex items-center justify-center bg-[#8c52ff] rounded-full p-4 ">
                <SiReact className="text-white text-3xl" />
              </div>
              <div className="flex items-center justify-center bg-[#38BDF8] rounded-full p-4 ml-[-30px]">
                <SiTailwindcss className="text-white text-3xl" />
              </div>
              <div className="flex items-center justify-center bg-[#000000] rounded-full p-4 ml-[-30px]">
                <SiNextdotjs className="text-white text-3xl" />
              </div>
              <div className="flex items-center justify-center bg-[#306998] rounded-full p-4 ml-[-30px]">
                <SiPython className="text-white text-3xl" />
              </div>
              <div className="flex items-center justify-center bg-[#007396] rounded-full p-4 ml-[-30px]">
                <FaJava className="text-white text-3xl" /> {/* Java Icon */}
              </div>
              <div className="flex items-center justify-center bg-[#336791] rounded-full p-4 ml-[-30px]">
                <SiPostgresql className="text-white text-3xl" />
              </div>
              <div className="flex items-center justify-center bg-[#f0db4f] rounded-full p-4 ml-[-30px]">
                <SiJavascript className="text-white text-3xl" />
              </div>
              <div className="flex items-center justify-center bg-[#3178C6] rounded-full p-4 ml-[-30px]">
                <SiTypescript className="text-white text-3xl" />
              </div>
              <div className="flex items-center justify-center bg-[#4479A1] rounded-full p-4 ml-[-30px]">
                <SiMysql className="text-white text-3xl" />
              </div>
              <div className="flex items-center justify-center bg-[#A8B9CC] rounded-full p-4 ml-[-30px]">
                <SiC className="text-white text-3xl" />
              </div>
              <div className="flex items-center justify-center bg-[#E34F26] rounded-full p-4 ml-[-30px]">
                <SiHtml5 className="text-white text-3xl" />
              </div>
              <div className="flex items-center justify-center bg-[#264DE4] rounded-full p-4 ml-[-30px]">
                <SiCss3 className="text-white text-3xl" />
              </div>
              <div className="flex items-center justify-center bg-white border-[#8c52ff] rounded-full p-4 ml-[-30px]">
                <h1 className="text-black text-xl">11+</h1>
              </div>
            </div>

            <p className="text-xl mt-6">
              Outside of work, I'm interested in following the developments of
              science. I also play a lot of video games. And make TikToks.
            </p>
          </div>

          {/* Right Side Image Section */}
          <div className="flex justify-center items-center">
            <img
              src="/profpic.jpg"
              alt="Profile Picture"
              className="rounded-full w-72 h-72 object-cover border-4 border-teal-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
