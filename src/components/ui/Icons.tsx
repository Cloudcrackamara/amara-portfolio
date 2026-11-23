import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size: number, props: SVGProps<SVGSVGElement>) => ({
  width: size,
  height: size,
  viewBox: "0 0 16 16",
  "aria-hidden": true as const,
  focusable: false as const,
  ...props,
});

export function ArrowUpRight({ size = 16, ...props }: IconProps) {
  return (
    <svg {...base(size, props)}>
      <path d="M4 12 L12 4 M5.5 4 H12 V10.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function ArrowDown({ size = 16, ...props }: IconProps) {
  return (
    <svg {...base(size, props)}>
      <path d="M8 3 V12 M4 8.5 L8 12.5 L12 8.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowRight({ size = 16, ...props }: IconProps) {
  return (
    <svg {...base(size, props)}>
      <path d="M3 8 H13 M9 4 L13 8 L9 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function GitHubIcon({ size = 16, ...props }: IconProps) {
  return (
    <svg {...base(size, props)}>
      <path
        fill="currentColor"
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
      />
    </svg>
  );
}

export function LinkedInIcon({ size = 16, ...props }: IconProps) {
  return (
    <svg {...base(size, props)}>
      <rect x="0.5" y="0.5" width="15" height="15" rx="2.5" fill="currentColor" />
      <rect x="3.4" y="6.3" width="2" height="6.2" fill="var(--soc-bg)" />
      <circle cx="4.4" cy="4.3" r="1.15" fill="var(--soc-bg)" />
      <path
        d="M7.2 6.3 H9.1 V7.2 C9.5 6.6 10.2 6.15 11.1 6.15 C12.6 6.15 13 7.1 13 8.5 V12.5 H11 V8.9 C11 8.2 10.8 7.8 10.1 7.8 C9.4 7.8 9.2 8.3 9.2 9 V12.5 H7.2 Z"
        fill="var(--soc-bg)"
      />
    </svg>
  );
}

export function MailIcon({ size = 16, ...props }: IconProps) {
  return (
    <svg {...base(size, props)}>
      <rect x="1.5" y="3" width="13" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 4 L8 8.8 L14 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function Sparkle({ size = 16, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" aria-hidden focusable={false} {...props}>
      <path d="M11 1 V21 M1 11 H21 M4 4 L18 18 M18 4 L4 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
