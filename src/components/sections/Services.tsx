import { ArrowUpRight } from "@/components/ui/Icons";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { services } from "@/data/site";

export function Services() {
  return (
    <section id="services" className="flex flex-col gap-8 pb-[88px]">
      <SectionLabel num="04" label="SERVICES" aside={<span className="font-mono text-xs text-faint">for teams &amp; freelance clients</span>} />
      <h3 className="m-0 text-[clamp(32px,3.8vw,48px)] font-medium leading-[1.04] tracking-[-0.04em]">
        What I can build,
        <br />
        automate and ship.
      </h3>
      <div className="flex flex-col">
        {services.map((s) => (
          <a
            key={s.num}
            href="#contact"
            className="row-link grid grid-cols-[40px_minmax(0,1fr)_24px] items-center gap-x-5 gap-y-2 border-t border-line py-[22px] md:grid-cols-[48px_minmax(0,1.1fr)_minmax(0,1.4fr)_28px]"
          >
            <span className="justify-self-start rounded bg-yellow px-[7px] py-[3px] font-mono text-xs font-semibold text-[#0b0b0c]">{s.num}</span>
            <span className="font-display text-[22px] font-medium tracking-[-0.02em]">{s.title}</span>
            <span className="col-start-2 text-sm leading-normal text-muted md:col-start-auto">{s.desc}</span>
            <ArrowUpRight size={18} className="row-arrow col-start-3 row-start-1 md:col-start-auto md:row-start-auto" />
          </a>
        ))}
      </div>
    </section>
  );
}
