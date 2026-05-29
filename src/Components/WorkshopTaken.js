"use client";

import React, { useState, useEffect } from "react";

const workshops = [
  {
    title: "React Orbit",
    description: "Taught 30+ students Frontend Development from HTML to React.js",
    organization: "UIU Developers HUB",
    institution: "United International University",
    image: "/Workshop/md_sifat_bin_jibon_react_orbit_workshop.jpg",
    alt: "Md Sifat Bin Jibon - Blockchain Developer in Bangladesh - React Orbit Workshop at UIU Developers HUB (UIUDH) at United International University (UIU)",
    students: "30+",
    topic: "Frontend Development (HTML to React.js)",
  },
  {
    title: "Hackathon Preparation",
    description: "Shared experience with 45+ students on Hackathon Preparation",
    organization: "UIU Developers HUB",
    institution: "United International University",
    image: "/Workshop/md_sifat_bin_jibon_hackathon_workshop.jpg",
    alt: "Md Sifat Bin Jibon - Blockchain Developer in Bangladesh - Hackathon Preparation Workshop at UIU Developers HUB (UIUDH) at United International University (UIU)",
    students: "45+",
    topic: "Hackathon Preparation & Strategy",
  },
  {
    title: "Interview Panel",
    description: "Participated as a panel member in interview sessions",
    organization: "UIU Developers HUB",
    institution: "United International University",
    image: "/Workshop/md_sifat_bin_jibon_interview_panel.png",
    alt: "Md Sifat Bin Jibon - Blockchain Developer in Bangladesh - Interview Panel at UIU Developers HUB (UIUDH) at United International University (UIU)",
    students: "Panel Member",
    topic: "Interview & Recruitment",
  },
];

const WorkshopTaken = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (workshop) => {
    setSelectedImage(workshop);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") closeLightbox();
    };
    if (selectedImage) {
      window.addEventListener("keydown", handleEscape);
      return () => window.removeEventListener("keydown", handleEscape);
    }
  }, [selectedImage]);

  return (
    <section
      id="workshop-taken"
      className="py-20 bg-white min-h-screen flex flex-col items-center justify-center"
      itemScope
      itemType="https://schema.org/ItemList"
      aria-label="Workshop Taken Section"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold text-black mb-4"
            itemProp="name"
          >
            Workshops Taken
          </h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto" itemProp="description">
            Sharing knowledge and experience through educational workshops at{" "}
            <span className="font-semibold">UIU Developers HUB</span> (UIUDH) at{" "}
            <span className="font-semibold">United International University</span> (UIU),
            including React Orbit, Hackathon Preparation, and Interview Panel workshops. As a Blockchain Developer in Bangladesh, I've conducted workshops teaching frontend development, hackathon strategies, and recruitment processes.
          </p>
        </div>

        {/* Workshop Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          itemProp="itemListElement"
          role="list"
        >
          {workshops.map((workshop, index) => (
            <article
              key={index}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
              itemScope
              itemType="https://schema.org/EducationalOccupationalCredential"
              role="listitem"
            >
              {/* Image Container */}
              <div
                className="relative aspect-[16/10] overflow-hidden bg-gray-100 cursor-pointer"
                onClick={() => openLightbox(workshop)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openLightbox(workshop);
                  }
                }}
                tabIndex={0}
                aria-label={`View ${workshop.title} workshop image`}
              >
                <img
                  src={workshop.image}
                  alt={workshop.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading={index < 2 ? "eager" : "lazy"}
                  itemProp="image"
                  onError={(e) => {
                    e.target.style.opacity = "0.5";
                  }}
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Workshop Details */}
              <div className="p-6">
                <h3
                  className="text-2xl font-bold text-black mb-3"
                  itemProp="name"
                >
                  {workshop.title}
                </h3>

                <div className="space-y-3 text-gray-700">
                  <p className="text-base leading-relaxed" itemProp="description">
                    {workshop.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-gray-200">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                      <span className="text-sm font-semibold text-gray-900">
                        {workshop.students} Students
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 pt-2">
                    <div className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {workshop.organization}
                        </p>
                        <p className="text-sm text-gray-600">
                          {workshop.institution}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <span
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200"
                      itemProp="credentialCategory"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                      {workshop.topic}
                    </span>
                  </div>
                </div>

                {/* Schema.org structured data */}
                <meta
                  itemProp="educationalLevel"
                  content="Workshop"
                />
                <meta
                  itemProp="recognizedBy"
                  content={workshop.organization}
                />
              </div>
              </article>
          ))}
        </div>

        {/* Additional SEO Content */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm max-w-3xl mx-auto">
            These workshops at{" "}
            <span className="font-semibold">UIU Developers HUB</span> (UIUDH) at{" "}
            <span className="font-semibold">United International University</span> (UIU)
            demonstrate my commitment to knowledge sharing and community
            building. As a Blockchain Developer in Bangladesh, I've had the
            opportunity to teach and mentor students in frontend development and
            hackathon preparation strategies.
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`Viewing ${selectedImage.title} workshop image`}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors p-2"
              aria-label="Close lightbox"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Image */}
            <div className="relative w-full h-[90vh] bg-white rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src={selectedImage.image}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Image Title */}
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-white">
                {selectedImage.title}
              </h3>
              <p className="text-sm text-gray-300 mt-1">
                {selectedImage.organization} - {selectedImage.institution}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkshopTaken;

