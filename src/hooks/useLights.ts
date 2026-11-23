import { useCallback, useState, useSyncExternalStore } from "react";

const STORAGE_KEY = "lights";

/** Watches the `dark` class on <html>, which the inline script in _document.tsx sets before paint. */
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}

const isLit = () => !document.documentElement.classList.contains("dark");

/**
 * The lamp's state. "on" = light theme (the default), "off" = dark theme.
 * `pulls` counts pulls so each one can restart the swing and flicker animations.
 */
export function useLights() {
  const on = useSyncExternalStore(subscribe, isLit, () => true);
  const [pulls, setPulls] = useState(0);

  const toggle = useCallback(() => {
    const next = !isLit();
    document.documentElement.classList.toggle("dark", !next);
    try {
      localStorage.setItem(STORAGE_KEY, next ? "on" : "off");
    } catch {
      /* Storage can be unavailable (private mode); the switch still works for this visit. */
    }
    setPulls((n) => n + 1);
  }, []);

  return { on, pulls, toggle };
}
