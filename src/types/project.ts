export type ProjectFilter = "backend" | "k8s" | "iac" | "cicd" | "app";

export type ProjectStatus = "Live" | "Deployed" | "Done" | "Repo";

/** An image served from /public, e.g. { src: "/images/projects/taskapp.jpg", alt: "..." }. */
export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Project {
  /** URL-safe identifier. */
  slug: string;
  name: string;
  /** One-line hook under the title. */
  tagline: string;
  /** Small pill in the top-right corner, e.g. "team of 14". */
  badge: string;
  /** Mono detail line: role · focus · context. */
  meta: string;
  /** Short category shown above the title, e.g. "Fleet API". */
  kind: string;
  status: ProjectStatus;
  /** Full description paragraph. */
  description: string;
  /** "How it was built" notes, revealed by the toggle. */
  built: readonly string[];
  /** Technology tags. */
  stack: readonly string[];
  /** Filters this project appears under. */
  filters: readonly ProjectFilter[];
  /** Address shown above the screenshot. */
  url?: string;
  image?: ImageAsset;
  repo: string;
  repoLabel: string;
}
