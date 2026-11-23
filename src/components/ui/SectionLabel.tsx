import type { ReactNode } from "react";

interface SectionLabelProps {
  num: string;
  label: string;
  /** Optional text or link on the right. */
  aside?: ReactNode;
}

/** "01 / SELECTED WORK" rule with a yellow number chip. */
export function SectionLabel({ num, label, aside }: SectionLabelProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-t-2 border-ink pt-3.5">
      <span className="font-mono text-xs tracking-[0.14em] text-muted">
        <span className="rounded bg-yellow px-[7px] py-0.5 font-semibold text-[#0b0b0c]">{num}</span> / {label}
      </span>
      {aside}
    </div>
  );
}
