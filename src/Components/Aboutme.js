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
import { FaJava } from "react-icons/fa"; // Java Icon

function Aboutme() {
  return (
    <div className="container mx-auto max-w-5xl p-6 text-[#ccd6f6] iceland">
      {/* Main Container */}
      <div className="flex flex-col">
        {/* Header Section */}
        <div className="mb-8 flex flex-col md:flex-row items-center gap-6">
          <h1 className="text-4xl font-semibold">/about Me</h1>
          <hr className="border-t-2 border-teal-600 w-64 mt-2 md:mt-0" />
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Side Content */}
          <div className="col-span-1 md:col-span-2">
            <p className="text-xl mb-4">
              I am currently a{" "}
              <span className="font-bold">Software Development</span> Engineer
              at <span className="text-teal-600">Hyperlink InfoSystem</span>,
              working in the Frontend sector under team Fuji-14. At the same
              time, I am studying in BSC in Computer Science and Engineering at
              United International University.
            </p>

            <h2 className="text-2xl font-semibold mb-4">
              Here are some technologies I have been working with:
            </h2>

            {/* Tech Icons Section */}
            <div className="flex flex-wrap justify-start mt-12 gap-4">
              {/* Tech Icons */}
              <div className="flex items-center justify-center bg-[#8c52ff] rounded-full p-4">
                <SiReact className="text-white text-3xl" />
              </div>
              <div className="flex items-center justify-center bg-[#38BDF8] rounded-full p-4 ml-[-50px]">
                <SiTailwindcss className="text-white text-3xl" />
              </div>
              <div className="flex items-center justify-center bg-[#000000] rounded-full p-4 ml-[-50px]">
                <SiNextdotjs className="text-white text-3xl" />
              </div>
              <div className="flex items-center justify-center bg-[#306998] rounded-full p-4 ml-[-50px]">
                <SiPython className="text-white text-3xl" />
              </div>
              <div className="flex items-center justify-center bg-[#007396] rounded-full p-4 ml-[-50px]">
                <FaJava className="text-white text-3xl" />
              </div>
              <div className="flex items-center justify-center bg-[#336791] rounded-full p-4 ml-[-50px]">
                <SiPostgresql className="text-white text-3xl" />
              </div>
              <div className="flex items-center justify-center bg-[#f0db4f] rounded-full p-4 ml-[-50px]">
                <SiJavascript className="text-white text-3xl" />
              </div>
              <div className="flex items-center justify-center bg-[#3178C6] rounded-full p-4 ml-[-50px]">
                <SiTypescript className="text-white text-3xl" />
              </div>
              <div className="flex items-center justify-center bg-[#4479A1] rounded-full p-4 ml-[-50px]">
                <SiMysql className="text-white text-3xl" />
              </div>
              <div className="flex items-center justify-center bg-[#A8B9CC] rounded-full p-4 ml-[-50px]">
                <SiC className="text-white text-3xl" />
              </div>
              <div className="flex items-center justify-center bg-[#E34F26] rounded-full p-4 ml-[-50px]">
                <SiHtml5 className="text-white text-3xl" />
              </div>
              <div className="flex items-center justify-center bg-[#264DE4] rounded-full p-4 ml-[-50px]">
                <SiCss3 className="text-white text-3xl" />
              </div>
              <div className=" items-center justify-center hidden md:flex bg-white border-[#8c52ff] rounded-full p-4 ml-[-50px]">
                <h1 className="text-black text-xl">11+</h1>
              </div>
            </div>

            <p className="text-xl mt-6">
              Outside of work, I am interested in following the developments of
              science. I also play a lot of video games and make Youtube Videos.
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
