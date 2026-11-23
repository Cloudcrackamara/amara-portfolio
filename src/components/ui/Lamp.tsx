interface LampProps {
  on: boolean;
  /** Number of pulls so far; each pull restarts the swing, tug and flicker. */
  pulls: number;
  onToggle: () => void;
  /** Rendered width in px; height follows the 60:170 drawing. */
  width?: number;
}

/**
 * The hanging Edison bulb that switches the theme.
 * Lit = light theme (the default). Unlit = dark theme, drawn as shiny glass so it stays visible.
 */
export function Lamp({ on, pulls, onToggle, width = 52 }: LampProps) {
  const height = Math.round((width * 170) / 60);
  const swing = pulls === 0 ? "swing-idle" : pulls % 2 ? "swing-a" : "swing-b";
  const flick = on ? (pulls === 0 ? "flick-load" : pulls % 2 ? "flick-a" : "flick-b") : "";
  const tug = pulls === 0 ? "" : pulls % 2 ? "tug-a" : "tug-b";

  const c = on
    ? { cord: "#4A2F17", glassOff: "rgba(242,242,238,0.06)", rim: "#C9A46A", shine: 0.45, shine2: 0.3, fil: "#6B4A2B", glow: "drop-shadow(0 0 16px rgba(255,166,48,.85))" }
    : { cord: "#8A5E34", glassOff: "rgba(255,255,255,0.13)", rim: "#ECEAE2", shine: 0.95, shine2: 0.7, fil: "#FFB15C", glow: "drop-shadow(0 0 5px rgba(255,255,255,.35)) drop-shadow(0 0 14px rgba(255,159,67,.35))" };

  const glass = "M25 94 C25 104 13 110 13 126 C13 141 22 152 30 152 C38 152 47 141 47 126 C47 110 35 104 35 94 Z";
  const filament = "M27 121 C23 113 25 108 27.5 113 C29 117 31 117 32.5 113 C35 108 37 113 33 121";

  return (
    <div className="relative flex flex-col items-center">
      {on && (
        <div
          aria-hidden
          className={`pointer-events-none absolute left-1/2 top-0 -ml-[110px] h-[220px] w-[220px] rounded-full ${flick}`}
          style={{ background: "radial-gradient(circle, rgba(255,170,60,.34) 0%, rgba(255,170,60,0) 65%)" }}
        />
      )}
      <span className="lamp-drop">
        <button
          type="button"
          onClick={onToggle}
          aria-pressed={on}
          aria-label={on ? "Turn the lights off (dark mode)" : "Turn the lights on (light mode)"}
          className={`${swing} relative cursor-pointer border-0 bg-transparent px-2.5 pb-1.5`}
        >
          <svg className="lamp-svg block" width={width} height={height} viewBox="0 0 60 170" aria-hidden style={{ filter: c.glow }}>
            <defs>
              <radialGradient id="lamp-glass" cx="50%" cy="58%" r="60%">
                <stop offset="0%" stopColor="#FFF4CF" />
                <stop offset="30%" stopColor="#FFC65C" />
                <stop offset="70%" stopColor="#F29A2E" />
                <stop offset="100%" stopColor="#E07D1A" stopOpacity="0.75" />
              </radialGradient>
              <linearGradient id="lamp-brass" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#6E4A1C" />
                <stop offset="35%" stopColor="#D9AE5F" />
                <stop offset="55%" stopColor="#F3D58E" />
                <stop offset="100%" stopColor="#7A5320" />
              </linearGradient>
            </defs>
            <line x1="30" y1="0" x2="30" y2="66" stroke={c.cord} strokeWidth="3.6" />
            <line x1="30" y1="0" x2="30" y2="66" stroke="#9A6B3C" strokeWidth="3.6" strokeDasharray="2.2 2.2" />
            <rect x="26" y="62" width="8" height="8" rx="1.5" fill="url(#lamp-brass)" />
            <rect x="22.5" y="69" width="15" height="25" rx="2.5" fill="url(#lamp-brass)" />
            {[75, 80, 85, 90].map((y) => (
              <line key={y} x1="23" y1={y} x2="37" y2={y} stroke="#7A5320" strokeWidth="0.8" />
            ))}
            <g className={tug}>
              <line x1="44" y1="74" x2="44" y2="104" stroke="#C9A46A" strokeWidth="1.2" strokeDasharray="1 2.4" strokeLinecap="round" />
              <circle cx="44" cy="107" r="2.2" fill="#D9AE5F" />
            </g>
            <path d={glass} fill={c.glassOff} stroke={c.rim} strokeWidth="1.2" opacity={on ? 0 : 1} />
            <path d={glass} fill="url(#lamp-glass)" stroke="#E9B465" strokeWidth="1" opacity={on ? 1 : 0} className={flick} />
            <path d="M18 120 C18 112 21 108 24 106" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" opacity={c.shine} />
            <path d="M17 130 C17.5 134 19 137 21 139.5" fill="none" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" opacity={c.shine2} />
            <circle cx="39.5" cy="114" r="1.6" fill="#FFFFFF" opacity={c.shine2} />
            <line x1="28" y1="95" x2="27" y2="121" stroke="#8C6A3E" strokeWidth="0.8" />
            <line x1="32" y1="95" x2="33" y2="121" stroke="#8C6A3E" strokeWidth="0.8" />
            <path d={filament} fill="none" stroke={c.fil} strokeWidth="1.4" opacity={on ? 0 : 1} />
            <path d={filament} fill="none" stroke="#FFF8DE" strokeWidth="1.6" opacity={on ? 1 : 0} className={flick} />
          </svg>
        </button>
      </span>
    </div>
  );
}
