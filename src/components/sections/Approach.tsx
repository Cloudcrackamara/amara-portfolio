import { SectionLabel } from "@/components/ui/SectionLabel";
import { stages } from "@/data/site";

export function Approach() {
  return (
    <section id="approach" className="flex flex-col gap-9 pb-[88px] pt-10">
      <SectionLabel num="03" label="HOW I WORK" aside={<span className="font-mono text-xs text-faint">pipeline: idea → production</span>} />
      <h3 className="m-0 text-[clamp(32px,3.8vw,48px)] font-medium leading-[1.04] tracking-[-0.04em]">
        Less theory.
        <br />
        More running software.
      </h3>
      <div className="relative">
        <div aria-hidden className="absolute inset-x-1.5 top-[5px] h-[3px] rounded-[3px] bg-ink" />
        <ol className="relative m-0 grid list-none grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4 p-0">
          {stages.map((s) => (
            <li key={s.num} className="flex flex-col gap-3">
              <span className="size-[15px] rounded-full border-[3px] border-ink bg-yellow" />
              <span className="self-start rounded-md bg-yellow px-2 py-1 font-mono text-[11px] tracking-[0.14em] text-[#0b0b0c]">
                STAGE {s.num} · {s.tag}
              </span>
              <span className="font-display text-xl font-medium leading-tight tracking-[-0.01em]">{s.title}</span>
              <span className="text-sm leading-normal text-muted">{s.desc}</span>
              <span className="font-mono text-xs text-gold">✓ passed</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
