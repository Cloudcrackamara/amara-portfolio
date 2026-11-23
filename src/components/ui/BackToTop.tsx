import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";

/** Round "back to top" arrow, bottom-right. Appears once you've scrolled past the first screen. */
export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label="Back to top"
      tabIndex={show ? 0 : -1}
      className={cn(
        "pill-bounce fixed bottom-5 right-5 z-40 flex size-12 cursor-pointer items-center justify-center rounded-full border-2 border-[#0b0b0c] bg-yellow text-[#0b0b0c] shadow-[0_10px_24px_-10px_rgba(0,0,0,.45)] transition-[opacity,transform] duration-300 sm:bottom-7 sm:right-7",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 19V5M5.5 11.5 12 5l6.5 6.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
