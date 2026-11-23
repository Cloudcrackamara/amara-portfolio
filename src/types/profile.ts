export interface SocialLink {
  label: "github" | "linkedin" | "email";
  href: string;
}

export interface Profile {
  name: string;
  shortName: string;
  identityLabel: string;
  bio: string;
  tagline: string;
  location: string;
  timeZone: string;
  timeZoneLabel: string;
  email: string;
  /** Opens a Gmail draft addressed to Amarachi. */
  gmailCompose: string;
  github: { user: string; url: string };
  linkedin: { handle: string; url: string };
  portrait: { src: string; alt: string };
  atWork: { src: string; alt: string };
  cv: string;
}
