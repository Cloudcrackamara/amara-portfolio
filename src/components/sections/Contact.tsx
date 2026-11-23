import { ArrowUpRight, GitHubIcon, LinkedInIcon, MailIcon } from "@/components/ui/Icons";
import { profile } from "@/data/profile";

const rows = [
  { label: "Email", value: profile.email, href: profile.gmailCompose, Icon: MailIcon },
  { label: "LinkedIn", value: profile.linkedin.handle, href: profile.linkedin.url, Icon: LinkedInIcon },
  { label: "GitHub", value: profile.github.user, href: profile.github.url, Icon: GitHubIcon },
];

export function Contact() {
  return (
    <section id="contact" className="border-t border-line bg-surface dark:border-transparent dark:bg-[#0b0b0c]">
      <div className="mx-auto flex max-w-[1200px] justify-center px-[clamp(20px,4vw,40px)] py-12">
        <div className="bounce flex min-h-[354px] w-full max-w-[731px] flex-col overflow-hidden rounded-2xl border-2 border-soc-line bg-soc text-soc-text shadow-[0_18px_40px_-24px_rgba(122,92,0,.45)] [--card-shadow:0_24px_50px_-22px_rgba(122,92,0,.55)] dark:shadow-[0_18px_40px_-24px_rgba(255,214,10,.3)] dark:[--card-shadow:0_24px_50px_-20px_rgba(255,214,10,.4)]">
          <p className="m-0 border-b border-soc-line px-7 py-[18px] font-mono text-xs tracking-[0.14em] opacity-70">
            <span className="live-blink">●</span> CONTACT · let&apos;s talk
          </p>
          <ul className="m-0 flex flex-1 list-none flex-col p-0">
            {rows.map(({ label, value, href, Icon }, i) => (
              <li key={label} className={`flex flex-1 ${i > 0 ? "border-t border-soc-line" : ""}`}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group row-link flex flex-1 items-center gap-4 px-7 py-5 transition-colors hover:bg-[#ffe680] dark:hover:bg-yellow/10"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-[10px] bg-[#0b0b0c] text-yellow [--soc-bg:#0b0b0c] dark:bg-yellow dark:text-[#0b0b0c] dark:[--soc-bg:#ffd60a]">
                    <Icon size={18} />
                  </span>
                  <span className="flex min-w-0 flex-1 flex-col">
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] opacity-60">{label}</span>
                    <span className="truncate text-[17px] font-medium">{value}</span>
                  </span>
                  <ArrowUpRight size={17} className="row-arrow shrink-0" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
