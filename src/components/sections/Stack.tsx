import { ArrowRight } from "@/components/ui/Icons";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { appStack, infraStack } from "@/data/site";

function StackColumn({ layer, verb, title, items }: { layer: string; verb: string; title: string; items: readonly { area: string; tools: string }[] }) {
  return (
    <div className="flex flex-[1_1_280px] flex-col gap-[18px] p-7">
      <div className="flex justify-between font-mono text-[11px] tracking-[0.14em] text-faint">
        <span className="text-gold">{layer}</span>
        <span>{verb}</span>
      </div>
      <h4 className="m-0 text-[22px] font-medium">{title}</h4>
      <ul className="m-0 flex list-none flex-col p-0">
        {items.map((s) => (
          <li key={s.area} className="flex flex-col gap-[3px] border-t border-line py-[11px]">
            <span className="font-mono text-[13.5px]">
              <span className="text-gold">▸</span> {s.area}
            </span>
            <span className="pl-[18px] font-mono text-[11.5px] text-faint">{s.tools}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Stack() {
  return (
    <section id="stack" className="flex flex-col gap-9 pb-[72px] pt-10">
      <SectionLabel num="02" label="STACK" />
      <h3 className="m-0 max-w-[680px] text-[clamp(32px,3.8vw,48px)] font-medium leading-[1.04] tracking-[-0.04em]">
        Two disciplines,
        <br />
        one delivery path.
      </h3>
      <div className="flex flex-wrap overflow-hidden rounded-[18px] border border-line bg-surface">
        <StackColumn layer="APP LAYER" verb="BUILD" title="Software Engineering" items={appStack} />
        <div className="flex w-full flex-col items-center justify-center gap-2.5 border-y border-line bg-surface-2 px-3.5 py-5 sm:w-auto sm:border-x sm:border-y-0">
          <span className="font-mono text-[11px] text-faint">git push</span>
          <span className="flex size-11 rotate-90 items-center justify-center rounded-full bg-yellow text-[#0b0b0c] sm:rotate-0">
            <ArrowRight size={18} />
          </span>
          <span className="font-mono text-[11px] text-faint">deploy</span>
        </div>
        <StackColumn layer="INFRA LAYER" verb="SHIP & OPERATE" title="Cloud & DevOps" items={infraStack} />
      </div>
    </section>
  );
}
