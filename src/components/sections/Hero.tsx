import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-[1200px] px-[clamp(20px,4vw,40px)] pb-7 pt-8 sm:pt-12">
      <div className="flex max-w-[980px] flex-col gap-7">
        <div className="flex flex-wrap items-center gap-3">
          <span className="size-2 rounded-full bg-live" />
          <a
            href="#status"
            className="border-b border-dashed border-muted font-mono text-xs uppercase tracking-[0.14em] text-muted"
          >
            Open to roles &amp; freelance
          </a>
          <span className="font-mono text-xs text-faint">/</span>
          <span className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-ink">{profile.identityLabel}</span>
        </div>
        <h2 className="m-0 text-[clamp(44px,6.4vw,92px)] font-medium leading-[0.96] tracking-[-0.045em]">
          I engineer products from idea to{" "}
          <span
            className="glitch-word px-[0.06em]"
            style={{ color: "var(--prod-color)", backgroundImage: "var(--prod-bg)" }}
          >
            production.
          </span>
        </h2>
        <p className="m-0 max-w-[560px] text-pretty text-lg leading-relaxed text-muted">
          I build practical software applications, work with AI to make them smarter, engineer the infrastructure
          behind them, and automate the processes that make them reliable in production.
        </p>
      </div>
    </section>
  );
}
