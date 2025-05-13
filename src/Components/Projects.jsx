"use client";

import React, { useState } from "react";
import { FaGithub, FaLink, FaNodeJs } from "react-icons/fa";
import {
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiMysql,
  SiC,
} from "react-icons/si";

// Icon mapping
const skillIcons = {
  React: <SiReact className="text-2xl text-white" />,
  Next: <SiNextdotjs className="text-2xl text-white" />,
  Python: <SiPython className="text-2xl text-white" />,
  MongoDB: <SiMongodb className="text-2xl text-white" />,
  JavaScript: <SiJavascript className="text-2xl text-white" />,
  Nodejs: <FaNodeJs className="text-2xl text-white" />,
  HTML: <SiHtml5 className="text-2xl text-white" />,
  CSS: <SiTailwindcss className="text-2xl text-white" />,
};

// Project data
const projectData = {
  python: [
    {
      id: 12,
      title: "Randon Linear Classification Model",
      description:
        "Tried to build an Random Linear classification model in two version",
      image: "/p-11.png",
      skills: ["Python"],
    },
    {
      id: 13,
      title: "The Perceptron Model",
      description:
        "Tried to Build the 1st ai model of 1957 which can learn from it's mistake",
      image: "/p-12.png",
      skills: ["Python"],
    },
    {
      id: 15,
      title: "AI Chatbot",
      description: "A chatbot using Python NLP libraries.",
      image: "/p8.png",
      skills: ["Python"],
    },
  ],
  frontend: [
    {
      id: 1,
      title: "Amar Market",
      description: "A responsive marketing website using Next js and Tailwind.",
      image: "/p2.png",
      skills: ["Next", "JavaScript", "CSS", "HTML"],
    },
    {
      id: 2,
      title: "Weather App",
      description: "A weather forecast UI powered by OpenWeatherMap API.",
      image: "/p1.png",
      skills: ["React", "Next", "JavaScript", "CSS", "HTML"],
    },
    {
      id: 3,
      title: "MediSage",
      description:
        "A ai intrigated healthcare platform built in HARVARD HSTL HACKATHON 2025",
      image: "/p3.png",
      skills: ["HTML", "React", "CSS", "JavaScript", "Next"],
    },
  ],
  fullstack: [
    {
      id: 5,
      title: "MERN E-commerce",
      description: "A full e-commerce platform using the MERN stack.",
      image: "/ds.png",
      skills: ["MongoDB", "React", "Nodejs"],
    },
    {
      id: 6,
      title: "Blog Platform",
      description: "Blog CMS built with Next.js, MongoDB, and Tailwind.",
      image: "/p5.png",
      skills: ["React", "MongoDB", "Nodejs"],
    },
    {
      id: 7,
      title: "University Management HUB",
      description:
        "A AI intigated university hub, built for MIST INNOVATION 4.0 Hackathon",
      image: "/p6.png",
      skills: ["MongoDB", "React", "Nodejs"],
    },
  ],
};

// Reordered categories
const categories = ["python", "frontend", "fullstack"];

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("python");

  return (
    <div className="container mx-auto max-w-6xl py-12 text-[#ccd6f6] iceland px-4">
      {/* Title */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold">/projects</h1>
        <p className="text-lg mt-2">Click tabs to explore</p>
      </div>

      {/* Category Buttons */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-full transition-all ${
              selectedCategory === category
                ? "bg-teal-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Project Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData[selectedCategory].map((project) => (
          <div
            key={project.id}
            className="bg-[#1a202c] border border-teal-500 shadow-md rounded-xl overflow-hidden flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-teal-400 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-300 mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex gap-2 flex-wrap mb-4">
                {project.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="bg-[#8c52ff] p-2 rounded-full"
                    title={skill}
                  >
                    {skillIcons[skill] || (
                      <span className="text-white text-sm">{skill}</span>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Md-Sifat-code"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="text-white text-xl hover:text-teal-500" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
