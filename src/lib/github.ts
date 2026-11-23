/*
 * GitHub data for the page, fetched in getStaticProps (server only) and refreshed by ISR.
 *
 * Set GITHUB_TOKEN (a fine-grained token with read-only access to public repositories)
 * in .env.local and in Vercel. Without it, the repo list still loads through the public API,
 * and the contribution graph falls back to the snapshot below.
 */

export const GITHUB_USER = "Cloudcrackamara";

/** Repos tagged with this topic appear in "Latest from GitHub". */
export const PORTFOLIO_TOPIC = "portfolio";

export interface RepoSummary {
  name: string;
  url: string;
  description: string;
  language: string | null;
  languageColor: string;
  topics: string[];
  /** ISO date of the last push. */
  pushedAt: string;
  /** Raw URL of cover.png in the repo, when it exists. */
  cover: string | null;
}

export interface ContributionDay {
  date: string;
  /** 0 = none … 4 = most. */
  level: 0 | 1 | 2 | 3 | 4;
}

export interface Contributions {
  total: number;
  /** Most recent days, oldest first, starting on a Sunday. */
  days: ContributionDay[];
  /** True when this is the bundled snapshot rather than live data. */
  snapshot: boolean;
}

export interface GitHubData {
  latest: RepoSummary[];
  recent: RepoSummary[];
  contributions: Contributions;
}

const LANGUAGE_COLORS: Record<string, string> = {
  Python: "#3572A5",
  TypeScript: "#3178C6",
  JavaScript: "#F1E05A",
  HCL: "#844FBA",
  HTML: "#E34C26",
  CSS: "#563D7C",
  SCSS: "#C6538C",
  Shell: "#89E051",
  Go: "#00ADD8",
};

const WEEKS_SHOWN = 26;

function headers(): HeadersInit {
  const token = process.env.GITHUB_TOKEN;
  return {
    Accept: "application/vnd.github+json",
    "User-Agent": "amara-portfolio",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

interface ApiRepo {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  topics?: string[];
  pushed_at: string;
  fork: boolean;
  archived: boolean;
  private: boolean;
  default_branch: string;
}

async function fetchRepos(): Promise<ApiRepo[]> {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=pushed&type=owner`,
    { headers: headers() },
  );
  if (!res.ok) throw new Error(`GitHub repos request failed: ${res.status}`);
  return (await res.json()) as ApiRepo[];
}

async function findCover(repo: ApiRepo): Promise<string | null> {
  const url = `https://raw.githubusercontent.com/${GITHUB_USER}/${repo.name}/${repo.default_branch}/cover.png`;
  try {
    const res = await fetch(url, { method: "HEAD" });
    return res.ok ? url : null;
  } catch {
    return null;
  }
}

function toSummary(repo: ApiRepo, cover: string | null = null): RepoSummary {
  return {
    name: repo.name,
    url: repo.html_url,
    description: repo.description ?? "",
    language: repo.language,
    languageColor: (repo.language && LANGUAGE_COLORS[repo.language]) || "#8C8B85",
    topics: (repo.topics ?? []).filter((t) => t !== PORTFOLIO_TOPIC),
    pushedAt: repo.pushed_at,
    cover,
  };
}

const LEVELS: Record<string, ContributionDay["level"]> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

async function fetchContributions(): Promise<Contributions | null> {
  if (!process.env.GITHUB_TOKEN) return null;
  const query = `query($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks { contributionDays { date contributionLevel } }
        }
      }
    }
  }`;
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: { ...headers(), "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables: { login: GITHUB_USER } }),
  });
  if (!res.ok) return null;
  const json = (await res.json()) as {
    data?: {
      user?: {
        contributionsCollection: {
          contributionCalendar: {
            totalContributions: number;
            weeks: { contributionDays: { date: string; contributionLevel: string }[] }[];
          };
        };
      };
    };
  };
  const cal = json.data?.user?.contributionsCollection.contributionCalendar;
  if (!cal) return null;
  const weeks = cal.weeks.slice(-WEEKS_SHOWN);
  return {
    total: cal.totalContributions,
    days: weeks.flatMap((w) =>
      w.contributionDays.map((d) => ({ date: d.date, level: LEVELS[d.contributionLevel] ?? 0 })),
    ),
    snapshot: false,
  };
}

/* ---------- Fallbacks: real data captured on 19 Nov 2026 ---------- */

const SNAPSHOT_LEVELS =
  "001000000000000000000000000000000000010000000010000000000100000000111010001000011111111000000111010001110011000000011112112200000000010111100112310132123001243102341200001210001321";
const SNAPSHOT_START = Date.UTC(2026, 4, 24); // Sunday 24 May 2026

function snapshotContributions(): Contributions {
  return {
    total: 607,
    days: SNAPSHOT_LEVELS.split("").map((l, i) => ({
      date: new Date(SNAPSHOT_START + i * 864e5).toISOString().slice(0, 10),
      level: Number(l) as ContributionDay["level"],
    })),
    snapshot: true,
  };
}

const SNAPSHOT_RECENT: RepoSummary[] = [
  { name: "user-management-dashboard", language: "TypeScript", pushedAt: "2026-11-11T00:00:00Z" },
  { name: "FoodLens", language: "Python", pushedAt: "2026-11-04T00:00:00Z" },
  { name: "Fast_Api_Lagos_Route_Window", language: "Python", pushedAt: "2026-10-04T00:00:00Z" },
  { name: "FleetGo_car_project", language: "Python", pushedAt: "2026-09-25T00:00:00Z" },
].map((r) => ({
  ...r,
  url: `https://github.com/${GITHUB_USER}/${r.name}`,
  description: "",
  languageColor: LANGUAGE_COLORS[r.language] ?? "#8C8B85",
  topics: [],
  cover: null,
}));

/**
 * Everything the page needs from GitHub. Never throws: on any failure it returns
 * the snapshot, so a GitHub outage can never break a build or a revalidation.
 */
export async function getGitHubData(featuredRepoNames: readonly string[]): Promise<GitHubData> {
  const featured = new Set(featuredRepoNames.map((n) => n.toLowerCase()));
  let latest: RepoSummary[] = [];
  let recent: RepoSummary[] = SNAPSHOT_RECENT;

  try {
    const repos = (await fetchRepos()).filter((r) => !r.fork && !r.private);
    recent = repos.filter((r) => !r.archived).slice(0, 4).map((r) => toSummary(r));
    const tagged = repos
      .filter((r) => (r.topics ?? []).includes(PORTFOLIO_TOPIC))
      .filter((r) => !featured.has(r.name.toLowerCase()))
      .slice(0, 6);
    latest = await Promise.all(tagged.map(async (r) => toSummary(r, await findCover(r))));
  } catch (error) {
    console.warn("[github] repos unavailable, using snapshot:", (error as Error).message);
  }

  let contributions: Contributions = snapshotContributions();
  try {
    contributions = (await fetchContributions()) ?? contributions;
  } catch (error) {
    console.warn("[github] contributions unavailable, using snapshot:", (error as Error).message);
  }

  return { latest, recent, contributions };
}
