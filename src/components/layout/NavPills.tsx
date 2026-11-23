import { useEffect, useRef, useState } from "react";
import { navLinks } from "@/data/site";
import { useLights } from "@/hooks/useLights";
import { cn } from "@/utils/cn";

/**
 * Section pills. Sticks to the top of the screen once you scroll past the header,
 * so you can jump between sections (or flip the lights) from anywhere on the page.
 * The pill for the section in view turns yellow.
 */
export function NavPills() {
  const [active, setActive] = useState<string>("#top");
  const [stuck, setStuck] = useState(false);
  const sentinel = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const { on, toggle } = useLights();

  // Which section is in view → highlight its pill.
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(`#${visible[0].target.id}`);
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // On narrow screens the pills scroll sideways: keep the active one in view.
  useEffect(() => {
    const nav = navRef.current;
    const pill = nav?.querySelector<HTMLElement>('[aria-current="true"]');
    if (!nav || !pill || nav.scrollWidth <= nav.clientWidth) return;
    const target = pill.offsetLeft - (nav.clientWidth - pill.offsetWidth) / 2;
    nav.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
  }, [active]);

  // A 1px marker just above the bar: once it scrolls out of view, the bar is stuck.
  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setStuck(!entry.isIntersecting));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinel} aria-hidden="true" className="h-px" />
      <div
        className={cn(
          "sticky top-0 z-40 transition-[background-color,border-color,box-shadow] duration-300",
          stuck
            ? "border-b border-line bg-bg/85 shadow-[0_8px_24px_-18px_rgba(0,0,0,.35)] backdrop-blur-md"
            : "border-b border-transparent",
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-[1200px] items-center gap-3 px-[clamp(20px,4vw,40px)] transition-[padding] duration-300",
            stuck ? "py-2.5" : "py-5",
          )}
        >
          <nav
            ref={navRef}
            aria-label="Sections"
            className="-mx-1 -mt-2 flex min-w-0 flex-1 gap-2 overflow-x-auto px-1 pb-1 pt-2 sm:flex-wrap"
          >
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "pill-bounce whitespace-nowrap rounded-full border px-[18px] font-mono text-[13px] transition-[colors,padding] duration-300",
                    stuck ? "py-2" : "py-3",
                    isActive
                      ? "border-yellow bg-yellow font-semibold text-[#0b0b0c]"
                      : "border-line text-muted hover:border-ink hover:text-ink",
                  )}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Light switch: only needed once the big lamp in the header is out of view. */}
          <button
            type="button"
            onClick={toggle}
            aria-label={on ? "Turn the lights off (dark mode)" : "Turn the lights on (light mode)"}
            title={on ? "lights: on" : "lights: off"}
            tabIndex={stuck ? 0 : -1}
            className={cn(
              "pill-bounce flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-full border transition-[opacity,transform,background-color] duration-300",
              on ? "border-line bg-surface text-ink hover:border-ink" : "border-yellow bg-yellow/10 text-yellow",
              stuck ? "scale-100 opacity-100" : "pointer-events-none scale-75 opacity-0",
            )}
          >
            <MiniBulb on={on} />
          </button>
        </div>
      </div>
    </>
  );
}

function MiniBulb({ on }: { on: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {!on && <circle cx="12" cy="10" r="8" fill="#ffd60a" opacity=".25" />}
      <path
        d="M12 3a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1 2V17h5.2v-1.2c0-.8.4-1.5 1-2A6 6 0 0 0 12 3Z"
        fill={on ? "none" : "#ffd60a"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M9.8 19.5h4.4M10.6 21.5h2.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
