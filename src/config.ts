import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://astro-paper.pages.dev/", // replace this with your deployed domain
  author: "Romane Vallet",
  job: "Product Manager",
  desc: "Romane Vallet's portfolio.",
  title: "Romane's portfolio",
  lightAndDarkMode: true,
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/romane-vallet-026714151/",
    linkTitle: `${SITE.author} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "romanevalletj@gmail.com",
    linkTitle: `Send an email to ${SITE.author}`,
    active: true,
  },
];
