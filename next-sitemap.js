// next-sitemap.js
module.exports = {
  siteUrl: "https://mdsifat.site", // Change site URL to your domain
  generateRobotsTxt: true, // Enable robots.txt generation
  changefreq: "monthly", // Set default changefreq for all pages
  priority: 0.7, // Default priority for all pages
  sitemapSize: 5000, // Max number of URLs per sitemap file
  outDir: "public", // The output directory for the generated sitemap
  generateIndexSitemap: false, // Don't generate index sitemap file
  transform: async (config, path) => {
    return {
      loc: path, // URL of the page
      changefreq: "monthly", // Change frequency for each page
      priority: 0.7, // Priority for each page
    };
  },
};
