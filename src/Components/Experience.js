"use client";
import React, { useState } from "react";

function Experience() {
  // State to manage selected button and content
  const [selectedExperience, setSelectedExperience] = useState("work");

  // Content for different experiences
  const workExperience = (
    <div>
      <h2 className="text-2xl font-semibold">
        Forntend Engineer @
        <span className="text-teal-600">Hyperlink InfoSystem</span>
      </h2>
      <p className="text-xl ">APR 2025 - PRESENT</p>
      <ul className="list-disc pl-5 mt-4">
        <li>Working as an Frontend Engineer, Web3js Specialist.</li>
        <li>Working into one of the top team Fuji-14</li>
        <li>Completed over 4+ Industry Projects</li>
      </ul>
    </div>
  );

  const educationExperience = (
    <div>
      <h2 className="text-2xl font-semibold">
        Forntend Developer @<span className="text-teal-600">Whesper Dev</span>
      </h2>
      <p className="text-xl ">SEP 2024 - MARCH 2025</p>
      <ul className="list-disc pl-5 mt-4">
        <li>
          Working as an Frontend Developer, React js, Next js, Tailwnind CSS{" "}
        </li>
        <li>Worked with a 8 Person team </li>
        <li>Completed over 2+ Industry Projects</li>
      </ul>
    </div>
  );

  const skillsExperience = (
    <div>
      <h2 className="text-2xl font-semibold">
        Forntend Trainee @
        <span className="text-teal-600">UIU Developers HUB</span>
      </h2>
      <p className="text-xl ">JUL 2024 - PRESENT</p>
      <ul className="list-disc pl-5 mt-4">
        <li>
          Working as an Frontend Trainee, React js, Next js, Tailwnind CSS{" "}
          ,Javascript
        </li>
        <li>Working with a 32 Person team, Teaching students </li>
        <li>Completed over 6+ Industry Projects</li>
      </ul>
    </div>
  );

  // Decide what content to display based on the selected button
  const renderContent = () => {
    switch (selectedExperience) {
      case "work":
        return workExperience;
      case "education":
        return educationExperience;
      case "skills":
        return skillsExperience;
      default:
        return workExperience;
    }
  };

  return (
    <div className="container mx-auto max-w-5xl p-6 text-[#ccd6f6] iceland mt-[120px]">
      <div className="flex flex-col">
        {/* Header Section */}
        <div className="mb-8 flex flex-col md:flex-row items-center gap-6">
          <h1 className="text-4xl font-semibold">/Experience</h1>
          <hr className="border-t-2 border-teal-600 w-64 mt-2 md:mt-0" />
        </div>

        <div className="grid grid-cols-3 gap-4">
          {/* Buttons Section (Left) */}
          <div className="col-span-1 flex flex-col gap-6">
            <button
              onClick={() => setSelectedExperience("work")}
              className={`px-6 py-2 text-white rounded-lg transition ${
                selectedExperience === "work"
                  ? "bg-teal-700"
                  : "hover:bg-teal-700"
              }`}
            >
              Hyperlink InfoSystem
            </button>
            <button
              onClick={() => setSelectedExperience("education")}
              className={`px-6 py-2 text-white rounded-lg transition ${
                selectedExperience === "education"
                  ? "bg-teal-700"
                  : "hover:bg-teal-700"
              }`}
            >
              Whesper Dev
            </button>
            <button
              onClick={() => setSelectedExperience("skills")}
              className={`px-6 py-2 text-white rounded-lg transition ${
                selectedExperience === "skills"
                  ? "bg-teal-700"
                  : "hover:bg-teal-700"
              }`}
            >
              UIU Developers HUB
            </button>
          </div>

          {/* Content Section (Right) */}
          <div className="col-span-2">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
