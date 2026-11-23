import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { RepoCard } from "@/components/projects/RepoCard";
import { ArrowUpRight } from "@/components/ui/Icons";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { projectFilters, projects } from "@/data/projects";
import { pythonRepos } from "@/data/site";
import { GITHUB_USER, PORTFOLIO_TOPIC, type RepoSummary } from "@/lib/github";
import type { ProjectFilter } from "@/types/project";
import { cn } from "@/utils/cn";

export function Work({ latest }: { latest: RepoSummary[] }) {
  const [filter, setFilter] = useState<ProjectFilter | "all">("all");
  const shown = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.filters.includes(filter))),
    [filter],
  );

  return (
    <section id="work" className="flex flex-col gap-9 pb-[72px] pt-[88px]">
      <SectionLabel
        num="01"
        label="SELECTED WORK"
        aside={
          <a href={`https://github.com/${GITHUB_USER}?tab=repositories`} target="_blank" rel="noopener noreferrer" className="font-mono text-xs tracking-[0.14em] text-gold">
            ALL REPOS ↗
          </a>
        }
      />

      <div className="flex flex-wrap items-end justify-between gap-6">
        <h3 className="m-0 text-[clamp(36px,4.4vw,56px)] font-medium leading-[1.02] tracking-[-0.04em]">
          From repo
          <br />
          to running.
        </h3>
        <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-1.5 rounded-[28px] border border-line bg-surface p-[5px]">
          {projectFilters.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
              className={cn(
                "min-h-10 cursor-pointer rounded-full border-0 px-3.5 py-2.5 font-mono text-xs tracking-[0.06em]",
                filter === f.id ? "bg-ink text-bg" : "bg-transparent text-muted hover:text-ink",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {shown.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>

      {latest.length > 0 && (
        <div className="mt-3 flex flex-col gap-[18px] rounded-[20px] border border-dashed border-card-line p-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="flex flex-col gap-1.5">
              <h4 className="m-0 text-[22px] font-medium tracking-[-0.02em]">Latest from GitHub</h4>
              <p className="m-0 text-sm text-muted">
                New public repos tagged{" "}
                <span className="rounded bg-yellow px-1.5 py-px font-mono text-[12.5px] font-semibold text-[#0b0b0c]">{PORTFOLIO_TOPIC}</span>{" "}
                appear here on their own, newest first.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-[7px] font-mono text-xs text-faint">
              <span className="sync-dot size-2 rounded-full bg-signal" />
              synced from GitHub · refreshes hourly
            </span>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(230px,100%),1fr))] gap-4">
            {latest.map((repo) => (
              <RepoCard key={repo.name} repo={repo} />
            ))}
          </div>
        </div>
      )}

      <div className="mt-2 flex flex-col gap-1">
        <div className="flex flex-wrap items-baseline justify-between gap-3 pb-3">
          <h4 className="m-0 text-[22px] font-medium tracking-[-0.02em]">More Python backends</h4>
          <span className="font-mono text-xs text-faint">smaller APIs &amp; services · each links to its repo</span>
        </div>
        {pythonRepos.map((r) => (
          <a
            key={r.name}
            href={r.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="row-link grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-1.5 border-t border-line py-4"
          >
            <span className="flex min-w-0 flex-col gap-1">
              <span className="break-words font-mono text-sm font-semibold">
                <span className="text-gold">&gt;</span> {r.name}
              </span>
              <span className="text-sm leading-normal text-muted">{r.desc}</span>
            </span>
            <span className="flex items-center gap-2.5 whitespace-nowrap font-mono text-xs text-faint">
              <span className="hidden sm:inline">{r.tags}</span> <ArrowUpRight size={14} className="row-arrow" />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
