"use client";

import React from "react";

const youtubeStreams = [
  {
    id: 1,
    title: "Live Stream 1",
    url: "https://www.youtube.com/live/ewst_ZtjocU?si=k-wrUN1JxoR0Yg92",
    videoId: "ewst_ZtjocU",
  },
  {
    id: 2,
    title: "Live Stream 2",
    url: "https://www.youtube.com/live/VjoQtTMxS1w?si=qQl4MJ2WTgVXGLex",
    videoId: "VjoQtTMxS1w",
  },
  {
    id: 3,
    title: "Live Stream 3",
    url: "https://www.youtube.com/live/UXqMUhXDCgs?si=N6lu0ceVcNQjsXlM",
    videoId: "UXqMUhXDCgs",
  },
];

const YouTubeSection = () => {
  const channelUrl = "https://www.youtube.com/@blockSifat";

  return (
    <>
      {/* JSON-LD Structured Data for YouTube Channel */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: "YouTube Channel - blockSifat",
            description:
              "YouTube channel by Md Sifat Bin Jibon featuring blockchain development tutorials, live streams, and technology content",
            url: channelUrl,
            publisher: {
              "@type": "Person",
              name: "Md Sifat Bin Jibon",
              jobTitle: "Founder of AKINO · Mid level Blockchain Developer at R3 & CEO at FluvoSoft",
              url: "https://sifatbinjibon.site",
            },
            inLanguage: "en-US",
          }),
        }}
      />
      <section
        id="youtube"
        className="py-20 bg-white min-h-screen flex flex-col items-center justify-center"
        aria-label="YouTube Channel Section"
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <svg
                className="w-16 h-16 text-red-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              YouTube Channel
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              Watch my live streams, tutorials, and content on blockchain development, Web3, and technology innovation. Subscribe to{" "}
              <a
                href={channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:underline font-semibold"
              >
                blockSifat
              </a>{" "}
              for the latest updates.
            </p>
            <a
              href={channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Visit My Channel
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {youtubeStreams.map((stream) => (
              <article
                key={stream.id}
                className="bg-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 group"
              >
                <a
                  href={stream.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative h-48 overflow-hidden bg-gray-900">
                    <img
                      src={`https://img.youtube.com/vi/${stream.videoId}/maxresdefault.jpg`}
                      alt={`${stream.title} - YouTube stream by Md Sifat Bin Jibon, Blockchain Developer`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = `https://img.youtube.com/vi/${stream.videoId}/hqdefault.jpg`;
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all">
                      <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg
                          className="w-8 h-8 text-white ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-red-600 text-white">
                        Live Stream
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <svg
                        className="w-5 h-5 text-red-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                      <span className="text-xs text-gray-500">YouTube</span>
                    </div>
                    <h3 className="text-xl font-bold text-black mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                      {stream.title}
                    </h3>
                    <div className="flex items-center gap-2 text-red-600 font-medium text-sm">
                      <span>Watch on YouTube</span>
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default YouTubeSection;
