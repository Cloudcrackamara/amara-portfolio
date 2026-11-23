import { ArrowDown } from "@/components/ui/Icons";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { profile } from "@/data/profile";
import { certs, roles } from "@/data/site";

export function Resume() {
  return (
    <section id="resume" className="flex flex-col gap-8 pb-[88px]">
      <SectionLabel
        num="05"
        label="RESUME"
        aside={
          <span className="font-mono text-xs text-faint">
            git log --oneline career
          </span>
        }
      />
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h3 className="m-0 text-[clamp(32px,3.8vw,48px)] font-medium leading-[1.04] tracking-[-0.04em]">
          Experience,
          <br />
          commit by commit.
        </h3>
        <a
          href={profile.cv}
          download="Amarachi_Ekwebelem_CV.pdf"
          className="inline-flex items-center gap-3.5 rounded-full bg-btn py-2 pl-[22px] pr-2 text-[15px] font-semibold text-btn-text"
        >
          <span>Download CV · PDF</span>
          <span className="flex size-10 items-center justify-center rounded-full bg-btn-circle text-btn-arrow">
            <ArrowDown />
          </span>
        </a>
      </div>

      <ol className="m-0 flex list-none flex-col p-0">
        {roles.map((r) => (
          <li
            key={r.title}
            className="grid grid-cols-[22px_minmax(0,1fr)] gap-x-4 sm:grid-cols-[minmax(120px,170px)_22px_minmax(0,1fr)] sm:gap-x-[18px]"
          >
            <div className="col-start-2 row-start-1 flex flex-col gap-1.5 pb-2 pt-0.5 font-mono text-xs text-faint sm:col-start-1 sm:pb-0">
              <span className="font-semibold text-ink">{r.dates}</span>
              {r.current && (
                <span className="self-start rounded bg-yellow px-[7px] py-0.5 font-semibold text-[#0b0b0c]">
                  HEAD → now
                </span>
              )}
              <span>{r.where}</span>
            </div>
            <div className="col-start-1 row-span-2 row-start-1 flex flex-col items-center sm:col-start-2 sm:row-span-1">
              <span
                className={`mt-0.5 size-[15px] shrink-0 rounded-full border-[3px] border-ink ${r.current ? "bg-yellow" : "bg-bg"}`}
              />
              <span className="w-0.5 flex-1 bg-line" />
            </div>
            <div className="col-start-2 flex flex-col gap-2.5 pb-9 sm:col-start-3 sm:row-start-1">
              <div className="flex flex-col gap-[3px]">
                <h4 className="m-0 text-[22px] font-medium tracking-[-0.02em]">
                  {r.title}
                </h4>
                <span className="text-[15px] text-muted">{r.org}</span>
              </div>
              <ul className="m-0 flex list-none flex-col gap-[7px] p-0">
                {r.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex gap-2.5 text-[14.5px] leading-normal"
                  >
                    <span className="font-mono text-gold">+</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <span className="font-mono text-xs text-faint">{r.tags}</span>
            </div>
          </li>
        ))}
      </ol>

      <div className="grid grid-cols-1 sm:grid-cols-[minmax(120px,170px)_22px_minmax(0,1fr)] sm:gap-x-[18px]">
        <div className="flex flex-wrap gap-3 sm:col-span-2 sm:col-start-2">
          {certs.map((c) => (
            <div
              key={c.name}
              className="bounce flex w-full items-center gap-3 rounded-xl border-2 border-[#0b0b0c] bg-yellow px-3.5 py-2.5 text-[#0b0b0c] sm:w-auto sm:min-w-[300px]"
              style={{
                ["--card-shadow" as string]:
                  "0 14px 30px -16px rgba(122,92,0,.6)",
              }}
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#0b0b0c] font-mono text-[11px] font-semibold text-yellow">
                {c.badge}
              </span>
              <span className="flex flex-col gap-0.5">
                <span className="text-sm font-semibold">{c.name}</span>
                <span className="font-mono text-[11px] text-[#3d3300]">
                  {c.meta}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
