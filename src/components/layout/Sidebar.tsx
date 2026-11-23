import { currentlyBuilding } from "@/data/site";
import { GITHUB_USER, type Contributions, type RepoSummary } from "@/lib/github";

function Heading({ dot, children }: { dot: string; children: string }) {
  return (
    <h3 className="m-0 flex items-center gap-2.5 font-mono text-[13px] font-semibold">
      <span className="size-2 rounded-full" style={{ background: dot }} />
      {children}
    </h3>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { month: "short", day: "numeric", timeZone: "UTC" });
}

function rangeLabel(days: Contributions["days"]) {
  if (!days.length) return "";
  const fmt = (d: string) => new Date(d).toLocaleDateString("en-GB", { month: "short", timeZone: "UTC" });
  const year = new Date(days[days.length - 1].date).getUTCFullYear();
  return `${fmt(days[0].date)} – ${fmt(days[days.length - 1].date)} ${year}`;
}

interface SidebarProps {
  recent: RepoSummary[];
  contributions: Contributions;
}

export function Sidebar({ recent, contributions }: SidebarProps) {
  return (
    <aside className="flex min-w-0 flex-[1_1_320px] flex-col gap-10 pb-[72px] lg:border-l lg:border-line lg:pl-9 lg:pt-10">
      <section className="flex flex-col gap-3">
        <Heading dot="var(--build)">Currently building</Heading>
        <p className="m-0 text-[14.5px] leading-normal text-muted">
          <strong className="font-semibold text-ink">{currentlyBuilding.name}</strong> — {currentlyBuilding.text}
        </p>
        <p className="m-0 font-mono text-xs text-faint">
          <span className="rounded bg-yellow px-[7px] py-0.5 font-semibold text-[#0b0b0c]">{currentlyBuilding.lang}</span> full-stack
        </p>
        <a href={currentlyBuilding.repo} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-gold">
          view repo ↗
        </a>
      </section>

      <section className="flex flex-col gap-3.5">
        <Heading dot="var(--ink)">Recent on GitHub</Heading>
        {recent.map((repo) => (
          <a key={repo.name} href={repo.url} target="_blank" rel="noopener noreferrer" className="flex flex-col gap-[3px] border-b border-line pb-3">
            <span className="break-all font-mono text-[13px]">{repo.name}</span>
            <span className="font-mono text-[11.5px] text-faint">
              {repo.language ?? "Code"} · {formatDate(repo.pushedAt)}
            </span>
          </a>
        ))}
      </section>

      <section className="flex flex-col gap-3">
        <Heading dot="#30A14E">Contributions</Heading>
        <p className="m-0 text-sm text-muted">
          <strong className="font-semibold text-ink">{contributions.total}</strong> in the last year
        </p>
        <a
          href={`https://github.com/${GITHUB_USER}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`GitHub contribution graph: ${contributions.total} contributions in the last year. Open GitHub profile`}
          className="grid w-fit grid-flow-col grid-rows-[repeat(7,8px)] auto-cols-[8px] gap-0.5 rounded-[10px] border border-line bg-surface p-2.5"
        >
          {contributions.days.map((d) => (
            <span key={d.date} title={d.date} className="rounded-[2px]" style={{ background: `var(--heat-${d.level})` }} />
          ))}
        </a>
        <div className="flex items-center justify-between gap-2.5 font-mono text-[11px] text-faint">
          <span>{rangeLabel(contributions.days)}</span>
          <span className="flex items-center gap-[3px]">
            less
            {[0, 1, 2, 3, 4].map((l) => (
              <span key={l} className="size-2 rounded-[2px]" style={{ background: `var(--heat-${l})` }} />
            ))}
            more
          </span>
        </div>
      </section>

      <section className="flex flex-col gap-2.5">
        <Heading dot="var(--live)">Certified</Heading>
        <p className="m-0 text-sm leading-normal text-muted">AWS Certified Cloud Practitioner</p>
        <p className="m-0 font-mono text-xs text-faint">clouds: AWS · Azure</p>
        <p className="m-0 font-mono text-xs text-faint">next: Solutions Architect – Associate</p>
      </section>

      <section className="flex flex-col gap-2.5">
        <Heading dot="var(--faint)">Based in</Heading>
        <p className="m-0 text-sm leading-normal text-muted">
          Lagos, Nigeria · WAT (UTC+1)
          <br />
          Open to Cloud, DevOps, Platform &amp; Software roles — remote or hybrid
        </p>
      </section>
    </aside>
  );
}
