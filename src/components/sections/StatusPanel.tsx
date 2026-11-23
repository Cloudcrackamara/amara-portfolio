import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, Sparkle } from "@/components/ui/Icons";
import { Terminal } from "@/components/ui/Terminal";
import { profile } from "@/data/profile";
import { useLocalTime } from "@/hooks/useLocalTime";

/** "status: Available", the at-work photo with the chat loop, the buttons, and the terminal. */
export function StatusPanel() {
  const time = useLocalTime(profile.timeZone);
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <div id="status" className="mx-auto max-w-[1200px] px-[clamp(20px,4vw,40px)] pb-[72px]">
      <div className="flex flex-wrap items-stretch gap-8 rounded-3xl border border-line bg-surface p-5 shadow-[0_30px_60px_-44px_rgba(0,0,0,.35)] sm:p-7">
        <div className="flex min-w-0 flex-[1_1_560px] items-stretch px-1 pb-[18px] pt-3.5">
          <div className="flex flex-[1_1_auto] flex-wrap items-center justify-center gap-x-9 gap-y-7 sm:justify-start">
            {/* Status */}
            <div className="flex w-full min-w-0 flex-col gap-1.5 sm:w-auto sm:min-w-[210px] sm:flex-[0_0_auto]">
              <div className="relative flex items-center gap-2">
                <span className="font-mono text-xs text-faint">status:</span>
                <button
                  type="button"
                  onClick={() => setInfoOpen((v) => !v)}
                  aria-expanded={infoOpen}
                  aria-label="What does this status mean?"
                  className="size-[22px] cursor-pointer rounded-full border border-line bg-surface p-0 font-mono text-[11px] text-muted"
                >
                  ?
                </button>
                {infoOpen && (
                  <span
                    role="status"
                    className="pop-in absolute left-0 top-[30px] z-20 w-60 rounded-xl border border-card-line bg-surface px-3.5 py-3 text-[13px] leading-normal text-muted shadow-[0_16px_32px_-16px_rgba(0,0,0,.35)]"
                  >
                    Open to new roles and freelance work. Messages from this site go straight to my inbox.
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3">
                <span className="sync-dot size-[11px] shrink-0 rounded-full bg-signal" />
                <span className="hs-write font-script text-[52px] font-bold leading-none sm:text-[56px]">Available</span>
              </div>
              <span className="flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] text-faint">
                LIVE IN LAGOS <span className="h-px w-[18px] bg-faint" />
                <strong className="text-[13px] tracking-[0.02em] text-ink">{time}</strong> {profile.timeZoneLabel}
              </span>
              <svg width="190" height="12" viewBox="0 0 190 12" aria-hidden className="block max-w-full">
                <path className="hs-line" d="M2 9 C50 11 120 7 188 3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span className="font-mono text-[11.5px] text-faint">always open to a chat ↘</span>
            </div>

            {/* Photo + chat bubbles */}
            <div className="flex w-[280px] max-w-full flex-col sm:w-[340px] sm:flex-[0_0_340px]">
              <div className="relative w-full">
                <div className="photo-frame photo-float relative aspect-[4/3] overflow-hidden rounded-[14px] border border-line">
                  <Image
                    src={profile.atWork.src}
                    alt={profile.atWork.alt}
                    fill
                    sizes="(min-width: 640px) 340px, 280px"
                    className="photo-kb object-cover"
                  />
                  <span className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 rounded-full bg-[rgba(11,11,12,.72)] px-2 py-1 font-mono text-[10px] tracking-[0.12em] text-[#f2f2ee]">
                    <span className="live-blink size-[7px] rounded-full bg-signal" />
                    AT WORK · LAGOS
                  </span>
                </div>
                <span aria-hidden className="ping absolute left-[64%] top-[66%] size-3 rounded-full border-2 border-[#0b0b0c] bg-yellow" />
                <Sparkle size={16} className="twinkle absolute right-2.5 top-2.5 text-yellow drop-shadow-[0_0_3px_rgba(0,0,0,.5)]" />
                <span className="chat-client absolute -left-[18px] -top-3.5 whitespace-nowrap rounded-[10px_10px_10px_2px] border-[1.5px] border-[#0b0b0c] bg-white px-[11px] py-1.5 text-[12.5px] font-semibold text-[#0b0b0c] shadow-[3px_3px_0_#0b0b0c]">
                  Got a project in mind?
                </span>
                <span
                  aria-hidden
                  className="chat-typing absolute -bottom-4 -right-4 flex gap-1 rounded-[10px_10px_2px_10px] border-[1.5px] border-[#0b0b0c] bg-[#fff3b8] px-[11px] py-[9px] shadow-[3px_3px_0_#0b0b0c]"
                >
                  {[0, 0.15, 0.3].map((d) => (
                    <span key={d} className="hs-dot size-[5px] rounded-full bg-[#0b0b0c]" style={{ animationDelay: `${d}s` }} />
                  ))}
                </span>
                <a
                  href={profile.gmailCompose}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chat-reply absolute -bottom-4 -right-[18px] whitespace-nowrap rounded-[10px_10px_2px_10px] border-[1.5px] border-[#0b0b0c] bg-yellow px-[11px] py-1.5 text-[12.5px] font-bold text-[#0b0b0c] shadow-[3px_3px_0_#0b0b0c]"
                >
                  Yes! Let&apos;s talk →
                </a>
              </div>
            </div>

            {/* Buttons, pinned bottom-right of the free space */}
            <div className="mt-2 flex flex-nowrap items-center gap-5 whitespace-nowrap pb-0.5 sm:ml-auto sm:mt-0 sm:self-end">
              <a
                href="#work"
                className="inline-flex items-center gap-3 rounded-full bg-btn py-[5px] pl-[18px] pr-[5px] text-sm font-semibold text-btn-text"
              >
                <span>Explore projects</span>
                <span className="flex size-[30px] items-center justify-center rounded-full bg-btn-circle text-btn-arrow">
                  <ArrowUpRight size={13} />
                </span>
              </a>
              <a href="#contact" className="border-b border-ink py-1.5 font-mono text-[13px]">
                get in touch ↘
              </a>
            </div>
          </div>
        </div>

        <div aria-hidden className="hidden w-px self-stretch bg-line xl:block" />
        <Terminal className="min-w-0 flex-[1_1_360px] self-stretch" />
      </div>
    </div>
  );
}
