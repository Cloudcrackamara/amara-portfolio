import { skillsStrip } from "@/data/site";

/** The yellow caution-tape band of skills, scrolling sideways. */
export function SkillsStrip() {
  const words = [...skillsStrip, ...skillsStrip];
  return (
    <div className="overflow-hidden border-y-2 border-[#0b0b0c] bg-yellow py-[18px]" aria-label="Skills">
      <div className="marquee flex w-max gap-10 font-mono text-[13px] font-semibold uppercase tracking-[0.16em] text-[#0b0b0c]">
        {words.map((w, i) => (
          <span key={`${w}-${i}`} className="inline-flex items-center gap-10" aria-hidden={i >= skillsStrip.length}>
            <span>{w}</span>
            <span aria-hidden className="opacity-45">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
