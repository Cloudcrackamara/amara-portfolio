import { GITHUB_USER, type RepoSummary } from "@/lib/github";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { month: "short", day: "numeric", timeZone: "UTC" });
}

/** A card generated purely from GitHub data, for "Latest from GitHub". */
export function RepoCard({ repo }: { repo: RepoSummary }) {
  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="bounce flex flex-col overflow-hidden rounded-[14px] border border-l-4 border-card-line border-l-yellow bg-card"
    >
      {repo.cover ? (
        // A remote cover image from the repo itself; plain <img> keeps it out of the image optimiser.
        // eslint-disable-next-line @next/next/no-img-element
        <img src={repo.cover} alt="" className="aspect-[2/1] w-full object-cover" loading="lazy" />
      ) : (
        <span
          className="flex aspect-[2/1] flex-col justify-between gap-2.5 bg-[#0b0b0c] px-4 py-3.5 text-[#f2f2ee]"
          style={{ backgroundImage: "radial-gradient(rgba(255,214,10,.16) 1px, transparent 1.2px)", backgroundSize: "14px 14px" }}
        >
          <span className="font-mono text-[11px] text-[#8c8b85]">{GITHUB_USER} /</span>
          <span className="break-all font-mono text-base font-semibold leading-tight text-yellow">{repo.name}</span>
          <span className="flex items-center gap-1.5 font-mono text-[11px] text-[#b4b3ac]">
            <span className="size-2 rounded-full" style={{ background: repo.languageColor }} />
            {repo.language ?? "Code"}
          </span>
        </span>
      )}
      <span className="flex flex-1 flex-col gap-2.5 px-4 pb-4 pt-3.5">
        {repo.description && <span className="text-sm leading-normal text-muted">{repo.description}</span>}
        {repo.topics.length > 0 && (
          <span className="flex flex-wrap gap-[5px]">
            {repo.topics.slice(0, 5).map((t) => (
              <span key={t} className="rounded-full bg-chip px-2 py-[3px] font-mono text-[11px] text-muted">
                {t}
              </span>
            ))}
          </span>
        )}
        <span className="mt-auto flex justify-between font-mono text-[11px] text-faint">
          <span>updated {formatDate(repo.pushedAt)}</span>
          <span className="text-gold">repo ↗</span>
        </span>
      </span>
    </a>
  );
}
