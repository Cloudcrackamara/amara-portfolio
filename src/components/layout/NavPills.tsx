import { useEffect, useState } from "react";
import { navLinks } from "@/data/site";
import { cn } from "@/utils/cn";

/** Section pills. The pill for the section in view turns yellow. */
export function NavPills() {
  const [active, setActive] = useState<string>("#top");

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(`#${visible[0].target.id}`);
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="mx-auto max-w-[1200px] px-[clamp(20px,4vw,40px)] py-5">
      <nav aria-label="Sections" className="-mx-1 -mt-2 flex gap-2 overflow-x-auto px-1 pb-1 pt-2 sm:flex-wrap">
        {navLinks.map((link) => {
          const isActive = active === link.href;
          return (
            <a
              key={link.href}
              href={link.href}
              aria-current={isActive ? "true" : undefined}
              className={cn(
                "pill-bounce whitespace-nowrap rounded-full border px-[18px] py-3 font-mono text-[13px] transition-colors",
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
    </div>
  );
}
