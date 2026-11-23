import Image from "next/image";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/ui/Icons";
import { Lamp } from "@/components/ui/Lamp";
import { profile } from "@/data/profile";
import { useLights } from "@/hooks/useLights";
import { useLocalTime } from "@/hooks/useLocalTime";

const socials = [
  { label: "github", href: profile.github.url, icon: GitHubIcon, delay: "0s", external: true },
  { label: "linkedin", href: profile.linkedin.url, icon: LinkedInIcon, delay: ".35s", external: true },
  { label: "email", href: profile.gmailCompose, icon: MailIcon, delay: ".7s", external: true },
] as const;

export function Header() {
  const time = useLocalTime(profile.timeZone);
  const { on, pulls, toggle } = useLights();

  return (
    <header className="border-b border-line">
      <div className="relative mx-auto flex max-w-[1200px] flex-wrap items-start justify-between gap-6 px-[clamp(20px,4vw,40px)] pb-8 pt-9 pr-[clamp(84px,9vw,110px)]">
        <div className="flex min-w-0 flex-[1_1_560px] items-center gap-5 sm:gap-7">
          <Image
            src={profile.portrait.src}
            alt={profile.portrait.alt}
            width={600}
            height={600}
            priority
            sizes="132px"
            className="size-[92px] shrink-0 rounded-full border-[3px] border-yellow bg-surface object-cover p-[3px] sm:size-[132px] sm:border-4 sm:p-1"
            style={{ objectPosition: "center 18%", boxShadow: "0 0 0 1px var(--ink), 0 14px 30px -14px rgba(122,92,0,.55)" }}
          />
          <div className="flex min-w-0 flex-col gap-2">
            <div className="flex flex-wrap items-baseline gap-x-3.5 gap-y-1.5">
              <h1 className="m-0 text-[22px] font-semibold tracking-[-0.02em] sm:text-[28px]">{profile.name}</h1>
              <span className="font-mono text-[13px] text-faint">
                {time} {profile.timeZoneLabel} · {profile.location}
              </span>
            </div>
            <p className="m-0 hidden max-w-[560px] text-[15px] leading-relaxed text-muted sm:block">{profile.bio}</p>
            <p className="m-0 font-mono text-[13px]">{profile.tagline}</p>
          </div>
        </div>

        <nav aria-label="Social" className="flex flex-wrap gap-2 self-end">
          {socials.map(({ label, href, icon: Icon, delay }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="soc inline-flex items-center gap-2 rounded-full border border-soc-line bg-soc py-2.5 pl-3 pr-4 font-mono text-[13px] font-medium text-soc-text"
              style={{ ["--d" as string]: delay }}
            >
              <Icon className="soc-ico shrink-0" />
              <span>{label}</span>
            </a>
          ))}
        </nav>

        {/* The lamp hangs from the top edge of the page. */}
        <div className="absolute right-[clamp(12px,4vw,40px)] top-0 flex w-[72px] justify-center">
          <span
            aria-live="polite"
            className="pointer-events-none absolute right-[calc(100%+4px)] top-[98px] hidden whitespace-nowrap font-mono text-xs text-faint sm:block"
          >
            lights: {on ? "on" : "off"}
          </span>
          <Lamp on={on} pulls={pulls} onToggle={toggle} />
        </div>
      </div>
    </header>
  );
}
