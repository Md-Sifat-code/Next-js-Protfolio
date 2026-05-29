"use client";

import React, { useState, useEffect } from "react";

const hackathonAchievements = [
  {
    name: "Harvard HSTL Hackathon 2025",
    image: "/Hackathon achivements/md_sifat_bin_jibon_hackathon_Harvard_hstl_hackathon_2025.jpg",
    alt: "Md Sifat Bin Jibon - Blockchain Developer in Bangladesh - Harvard HSTL Hackathon 2025 Achievement Certificate",
  },
  {
    name: "InnovateX Hackathon",
    image: "/Hackathon achivements/md_sifat_bin_jibon_hackathon_innovatex.jpg",
    alt: "Md Sifat Bin Jibon - Blockchain Developer in Bangladesh - InnovateX Hackathon Achievement Certificate",
  },
  {
    name: "InnovateX Hackathon 2",
    image: "/Hackathon achivements/md_sifat_bin_jibon_hackathon_innovatex_2.jpg",
    alt: "Md Sifat Bin Jibon - Blockchain Developer in Bangladesh - InnovateX Hackathon Achievement Certificate 2",
  },
  {
    name: "InnovateX Hackathon 3",
    image: "/Hackathon achivements/md_sifat_bin_jibon_hackathon_innovatex_3.jpg",
    alt: "Md Sifat Bin Jibon - Blockchain Developer in Bangladesh - InnovateX Hackathon Achievement Certificate 3",
  },
  {
    name: "Innovation Hackathon 4.1",
    image: "/Hackathon achivements/md_sifat_bin_jibon_hackathon_innovation_4.1.jpg.png",
    alt: "Md Sifat Bin Jibon - Blockchain Developer in Bangladesh - Innovation Hackathon 4.1 Achievement Certificate",
  },
  {
    name: "NextGen Hackathon",
    image: "/Hackathon achivements/md_sifat_bin_jibon_hackathon_nextgen.jpg",
    alt: "Md Sifat Bin Jibon - Blockchain Developer in Bangladesh - NextGen Hackathon Achievement Certificate",
  },
  {
    name: "Salesforce Hackathon",
    image: "/Hackathon achivements/md_sifat_bin_jibon_hackathon_salesforce_hackathon.jpg",
    alt: "Md Sifat Bin Jibon - Blockchain Developer in Bangladesh - Salesforce Hackathon Achievement Certificate",
  },
  {
    name: "Technovation Hackathon",
    image: "/Hackathon achivements/md_sifat_bin_jibon_hackathon_technovattion.jpg",
    alt: "Md Sifat Bin Jibon - Blockchain Developer in Bangladesh - Technovation Hackathon Achievement Certificate",
  },
];

const HackathonAchievements = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (achievement) => {
    setSelectedImage(achievement);
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
      id="hackathon-achievements"
      className="py-20 bg-gradient-to-b from-gray-50 to-white min-h-screen flex flex-col items-center justify-center"
      itemScope
      itemType="https://schema.org/ItemList"
      aria-label="Hackathon Achievements Gallery"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold text-black mb-4"
            itemProp="name"
          >
            Hackathon Achievements
          </h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing my competitive achievements and recognition from various
            hackathons and innovation challenges.
          </p>
        </div>

        {/* Achievement Gallery */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          itemProp="itemListElement"
          role="list"
        >
          {hackathonAchievements.map((achievement, index) => (
            <article
              key={index}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 cursor-pointer"
              itemScope
              itemType="https://schema.org/AchievementAction"
              role="listitem"
              onClick={() => openLightbox(achievement)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openLightbox(achievement);
                }
              }}
              tabIndex={0}
              aria-label={`View ${achievement.name} achievement certificate`}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={achievement.image}
                  alt={achievement.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading={index < 4 ? "eager" : "lazy"}
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

              {/* Achievement Name */}
              <div className="p-4">
                <h3
                  className="text-lg font-semibold text-black mb-1 line-clamp-2"
                  itemProp="name"
                >
                  {achievement.name}
                </h3>
                <p className="text-sm text-gray-500" itemProp="description">
                  Achievement Certificate
                </p>
              </div>

              {/* Schema.org structured data */}
              <meta itemProp="actionStatus" content="CompletedActionStatus" />
              <meta
                itemProp="agent"
                content="https://sifatbinjibon.site"
                itemType="https://schema.org/Person"
              />
            </article>
          ))}
        </div>

        {/* Additional SEO Content */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm max-w-3xl mx-auto">
            These achievements represent my participation and success in various
            competitive programming events, hackathons, and innovation
            challenges, demonstrating my problem-solving skills, technical
            expertise, and ability to work under pressure.
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
          aria-label={`Viewing ${selectedImage.name} achievement certificate`}
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
                {selectedImage.name}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HackathonAchievements;

