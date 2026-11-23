import { profile } from "@/data/profile";
import { useLocalTime } from "@/hooks/useLocalTime";

/** A code-editor status line. */
export function Footer() {
  const time = useLocalTime(profile.timeZone);
  return (
    <footer className="flex flex-wrap items-stretch border-t border-line bg-surface-2 font-mono text-xs">
      <span className="bg-yellow px-4 py-2.5 font-semibold text-[#0b0b0c]">NORMAL</span>
      <span className="bg-ink px-4 py-2.5 text-bg">⎇ main</span>
      <span className="hidden px-4 py-2.5 text-muted sm:inline">~/portfolio/index.tsx</span>
      <span className="flex-1" />
      <span className="px-4 py-2.5 text-faint">© {new Date().getFullYear()} {profile.name}</span>
      <span className="bg-yellow px-4 py-2.5 text-[#0b0b0c]">
        {time} {profile.timeZoneLabel}
      </span>
      <a href="#top" className="bg-ink px-4 py-2.5 text-bg">
        top ↑
      </a>
    </footer>
  );
}
