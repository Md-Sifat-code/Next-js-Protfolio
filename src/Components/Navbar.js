import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import { AiFillCode } from "react-icons/ai"; // For Leetcode icon
import { IoLogoInstagram } from "react-icons/io5"; // Replaced Fiverr with Instagram

function Navbar() {
  return (
    <section className="flex flex-wrap container mx-auto max-w-5xl justify-between items-center p-4 text-[#ccd6f6] iceland">
      {/* Left side: logo and navigation */}
      <div className="flex items-center space-x-6 w-full sm:w-auto justify-between mb-4 sm:mb-0">
        <div className="text-xl font-semibold">MD Sifat</div>
        <nav className="space-x-4 font-semibold hidden sm:flex">
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#projects" className="hover:text-gray-400">
            Projects
          </a>
          <a href="#about" className="hover:text-gray-400">
            About
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </nav>
      </div>

      {/* Right side: icons (email, github, linkedin, leetcode, instagram) */}
      <div className="flex space-x-4">
        <a
          href="codewithsifat4@mail.com"
          className="text-xl hover:text-gray-400"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/Md-Sifat-code"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:text-gray-400"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/md-sifat-follow/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:text-gray-400"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://leetcode.com/u/HEX_Sifat/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:text-gray-400"
        >
          <AiFillCode />
        </a>
        <a
          href="https://www.fiverr.com/sifat046"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:text-gray-400"
        >
          <IoLogoInstagram />
        </a>
      </div>

      {/* Mobile Navigation Toggle */}
      <div className="sm:hidden flex items-center justify-between w-full mt-4">
        <nav className="flex space-x-4 w-full justify-center">
          <a href="#home" className="block hover:text-gray-400">
            Home
          </a>
          <a href="#projects" className="block hover:text-gray-400">
            Projects
          </a>
          <a href="#about" className="block hover:text-gray-400">
            About
          </a>
          <a href="#contact" className="block hover:text-gray-400">
            Contact
          </a>
        </nav>
      </div>
    </section>
  );
}

export default Navbar;
