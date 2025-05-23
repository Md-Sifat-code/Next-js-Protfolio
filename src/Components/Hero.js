"use client";

import React, { useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import { MdEmail } from "react-icons/md";

function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1;
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-[#ccd6f6] p-4">
      {/* Video Section */}
      <div className="flex flex-col w-full max-w-4xl mb-10">
        <video
          ref={videoRef}
          src="/intro video.mp4" // ✅ updated file name
          autoPlay
          loop
          muted
          playsInline
          aria-label="Intro background video"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col items-center text-center gap-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          <Typewriter
            words={["Hi, Sifat Here"]}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            delaySpeed={999999}
          />
        </h1>

        <p className="text-lg">I create stuff sometimes.</p>

        <p className="max-w-2xl text-sm md:text-base text-[#ccd6f6]">
          I&apos;m a software engineer from Dhaka, Bangladesh. I&apos;m
          fascinated by large-scale, high-impact products and contributed to
          major feature launches in industry-leading services as well as web
          applications that have 1M+ users.
        </p>

        <a
          href="mailto:codewithsifat4@gmail.com"
          title="Send an email to Sifat"
          className="mt-4 flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-full transition font-bold"
        >
          <MdEmail size={20} />
          Say Hi
        </a>
      </div>
    </div>
  );
}

export default Hero;
