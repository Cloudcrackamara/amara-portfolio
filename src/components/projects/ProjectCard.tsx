import Image from "next/image";
import { useId, useState } from "react";
import { ArrowUpRight } from "@/components/ui/Icons";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  /** Position in the current list, shown as 01, 02… */
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [open, setOpen] = useState(false);
  const notesId = useId();
  const num = String(index + 1).padStart(2, "0");
  const statusColor = project.status === "Repo" ? "text-muted" : "text-live";

  return (
    <article className="bounce flex flex-col gap-3.5 rounded-2xl border border-l-4 border-card-line border-l-yellow bg-card p-[22px] pb-5">
      {project.image && (
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.name}: open the GitHub repository`}
          className="mb-1 block overflow-hidden rounded-[10px] border border-card-line bg-surface-2"
        >
          <span className="flex items-center gap-2 border-b border-card-line bg-surface px-3 py-2 font-mono text-[11px] text-faint">
            <span className="size-1.5 shrink-0 rounded-full bg-yellow" />
            <span className="min-w-0 truncate">{project.url}</span>
          </span>
          <span className="relative block aspect-video">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              fill
              sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
              className="object-cover object-top"
            />
          </span>
        </a>
      )}

      <div className="flex flex-col gap-1">
        <div className="flex items-start justify-between gap-3">
          <span className="pt-1 font-mono text-[11px] tracking-[0.14em] text-faint">
            {num} / {project.kind.toUpperCase()} · <span className={statusColor}>● {project.status}</span>
          </span>
          <span className="shrink-0 whitespace-nowrap rounded-full border border-card-line bg-surface px-[11px] py-[5px] font-mono text-[11.5px] text-muted">
            {project.badge}
          </span>
        </div>
        <h4 className="m-0 text-2xl font-semibold leading-tight tracking-[-0.02em]">
          <a href={project.repo} target="_blank" rel="noopener noreferrer" className="hover:underline">
            {project.name}
          </a>
        </h4>
        <p className="m-0 text-base leading-snug">{project.tagline}</p>
      </div>

      <p className="m-0 font-mono text-[12.5px] leading-relaxed text-faint">{project.meta}</p>
      <p className="m-0 text-[15px] leading-[1.65] text-muted">{project.description}</p>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={notesId}
        className="inline-flex min-h-9 cursor-pointer items-center self-start border-0 bg-transparent p-0 font-mono text-[13px] font-semibold text-gold"
      >
        {open ? "− hide build notes" : `+ how it was built (${project.built.length})`}
      </button>
      {open && (
        <ol id={notesId} className="pop-in -mt-1 flex list-none flex-col gap-2 border-l-2 border-yellow p-0 pl-0.5">
          {project.built.map((note, i) => (
            <li key={note} className="flex gap-2.5 pl-3 text-sm leading-normal">
              <span className="pt-0.5 font-mono text-xs text-gold">{String(i + 1).padStart(2, "0")}</span>
              <span>{note}</span>
            </li>
          ))}
        </ol>
      )}

      <ul className="mt-0.5 flex list-none flex-wrap gap-1.5 p-0" aria-label="Stack">
        {project.stack.map((tech) => (
          <li key={tech} className="rounded-md bg-chip px-2.5 py-[5px] font-mono text-xs text-muted">
            {tech}
          </li>
        ))}
      </ul>

      <a
        href={project.repo}
        target="_blank"
        rel="noopener noreferrer"
        className="row-link mt-auto inline-flex items-center gap-1.5 self-start border-b border-ink py-1 font-mono text-xs"
      >
        {project.repoLabel} <ArrowUpRight size={12} className="row-arrow" />
      </a>
    </article>
  );
}
