import type { Profile } from "@/types/profile";

const email = "amarachi.ekwebelem0@gmail.com";

export const profile: Profile = {
  name: "Amarachi Ekwebelem",
  shortName: "Amarachi",
  identityLabel: "Software Engineering · Cloud & DevOps · AI",
  bio: "Software engineer on the application side, Cloud & DevOps engineer on the infrastructure side. One person, the whole path to production.",
  tagline: "I write it, ship it, and stay on-call for it.",
  location: "Lagos, NG",
  timeZone: "Africa/Lagos",
  timeZoneLabel: "WAT",
  email,
  gmailCompose: `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
    "Hello Amarachi, from your portfolio",
  )}`,
  github: { user: "Cloudcrackamara", url: "https://github.com/Cloudcrackamara" },
  linkedin: { handle: "in/ekwebelemamarachi", url: "https://linkedin.com/in/ekwebelemamarachi" },
  portrait: { src: "/images/profile.jpg", alt: "Amarachi Ekwebelem" },
  atWork: { src: "/images/me-desk.jpg", alt: "Amarachi at her laptop, working in Lagos" },
  cv: "/cv/Amarachi_Ekwebelem_CV.pdf",
};
