/** @type {const} */
export const SITE_URL = "https://sifatbinjibon.site";

export const SITE_NAME = "Md Sifat Bin Jibon";
export const SITE_TITLE =
  "Md Sifat Bin Jibon | Blockchain Developer | R3, FluvoSoft & AKINO Founder";

export const SITE_DESCRIPTION =
  "Md Sifat Bin Jibon — Blockchain Developer at R3, CEO at FluvoSoft, and Founder of AKINO (akino.store). Author of Start Your Online Business e-book. Former UIU Developers HUB workshop lead. Corda, DLT, and software engineering in Bangladesh.";

export const DEFAULT_OG_IMAGE = "/profpic.jpg";

export const SOCIAL = {
  linkedin: "https://www.linkedin.com/in/mdsifatbinjibon/",
  github: "https://github.com/Md-Sifat-Bin-Jibon",
  akino: "https://www.akino.store",
  twitter: "@md_sifat",
  email: "mdsifatbinjibon@gmail.com",
};

export function absoluteUrl(path = "") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized === "/" ? "" : normalized}`;
}
