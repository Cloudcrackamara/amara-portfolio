import { workloads } from "@/data/site";
import { cn } from "@/utils/cn";

const tone: Record<(typeof workloads)[number]["tone"], string> = {
  violet: "text-syn-violet",
  blue: "text-syn-blue",
  amber: "text-syn-amber",
  coral: "text-syn-coral",
  teal: "text-syn-teal",
};

/** Projects as running workloads. Always dark, in both lamp states. */
export function Terminal({ className }: { className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-2xl border border-term-line bg-term", className)}>
      <div className="flex items-center justify-between border-b border-term-line px-[18px] py-3.5 font-mono text-xs text-term-faint">
        <span>amara@lagos: ~/portfolio</span>
        <span>zsh</span>
      </div>
      <div className="overflow-x-auto px-[18px] pb-[22px] pt-5 font-mono text-xs leading-[1.85] text-term-text sm:text-[13.5px]">
        <div className="min-w-[300px] whitespace-nowrap">
        <div>
          <span className="text-yellow">$</span> <span className="text-syn-blue">kubectl</span>{" "}
          <span className="text-syn-violet">get</span> projects <span className="text-syn-amber">-n</span>{" "}
          <span className="text-syn-coral">amara</span>
        </div>
        <div className="mt-1.5 grid grid-cols-[1.1fr_1.5fr_1fr] gap-x-3 text-term-faint">
          <span>NAME</span>
          <span>LAYER</span>
          <span>STATUS</span>
        </div>
        {workloads.map((w) => (
          <div key={w.name} className="grid grid-cols-[1.1fr_1.5fr_1fr] gap-x-3">
            <span className={tone[w.tone]}>{w.name}</span>
            <span className="text-term-muted">{w.layer}</span>
            <span className={w.status === "Building" ? "text-[#fb923c]" : "text-yellow"}>● {w.status}</span>
          </div>
        ))}
        <div className="mt-2.5">
          <span className="text-yellow">$</span> <span className="cursor-blink inline-block h-4 w-2 bg-yellow align-[-3px]" />
        </div>
        </div>
      </div>
    </div>
  );
}
