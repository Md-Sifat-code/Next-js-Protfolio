"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { MdEmail, MdArrowDownward } from "react-icons/md";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-white text-black relative overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Profile Image */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative w-32 h-32">
              <Image
                src="/profpic.jpg"
                alt="Md Sifat Bin Jibon - Blockchain Developer at R3, CEO at FluvoSoft, Founder of AKINO, Former UIU Developers HUB member"
                fill
                sizes="128px"
                priority
                className="object-cover rounded-full border-4 border-gray-200 shadow-lg"
                title="Md Sifat Bin Jibon - Blockchain Developer in Bangladesh"
              />
            </div>
          </div>

          {/* Greeting */}
          <div
            className={`space-y-4 transition-all duration-1000 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
              Md Sifat Bin Jibon
            </h1>
          </div>

          {/* Title/Role */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-block bg-gray-100 text-black px-4 py-2 rounded-lg text-base md:text-lg font-medium max-w-xl">
              Mid level Blockchain Developer at R3 · CEO at FluvoSoft · Founder
              of{" "}
              <a
                href="https://www.akino.store"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-semibold"
              >
                AKINO
              </a>
            </div>
          </div>

          {/* Description */}
          <div
            className={`max-w-2xl transition-all duration-1000 delay-400 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              I&apos;m a passionate{" "}
              <span className="font-bold text-blue-600">
                Blockchain Developer in Bangladesh
              </span>{" "}
              and technology leader specializing in distributed ledger
              technologies and enterprise solutions. As a{" "}
              <span className="font-bold text-blue-600">Blockchain Developer</span>{" "}
              at <span className="font-semibold">R3</span>, I build innovative
              Corda-based applications, while as CEO at{" "}
              <span className="font-semibold">FluvoSoft</span>, I lead
              technical strategy and drive digital transformation initiatives.
              As founder of{" "}
              <a
                href="https://www.akino.store"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 hover:underline"
              >
                AKINO
              </a>
              , a premium clothing brand in Bangladesh, I grew brand valuation
              from ৳0 to ৳152,000 through men&apos;s fashion, oversized
              streetwear, and our online store at akino.store. As a former member
              of{" "}
              <span className="font-semibold">UIU Developers HUB</span> at{" "}
              <span className="font-semibold">United International University (UIU)</span>
              , I conducted React Orbit and Hackathon Preparation workshops. I
              love working with cutting-edge frameworks and creating scalable
              enterprise solutions.
            </p>
          </div>

          {/* Email Button */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <a
              href="mailto:mdsifatbinjibon@gmail.com"
              className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-black px-6 py-3 rounded-lg transition-all duration-300 font-medium"
            >
              <MdEmail size={20} />
              mdsifatbinjibon@gmail.com
            </a>
          </div>

          {/* Motto */}
          <div
            className={`flex items-center space-x-3 transition-all duration-1000 delay-600 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="w-1 h-8 bg-green-500"></div>
            <p className="text-gray-600 italic">
              I have a strong passion for learning and staying abreast of new
              technologies.
            </p>
          </div>

          {/* Social Links */}
          <div
            className={`flex gap-4 pt-4 transition-all duration-1000 delay-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <a
              href="https://github.com/Md-Sifat-Bin-Jibon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600 transition-colors duration-300 p-2 hover:bg-gray-100 rounded-lg"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/mdsifatbinjibon/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-300 p-2 hover:bg-blue-50 rounded-lg"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://leetcode.com/u/HEX_Sifat/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:text-orange-800 transition-colors duration-300 p-2 hover:bg-orange-50 rounded-lg"
            >
              <FaCode size={24} />
            </a>
            <a
              href="mailto:mdsifatbinjibon@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-800 transition-colors duration-300 p-2 hover:bg-red-50 rounded-lg"
            >
              <MdEmail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
