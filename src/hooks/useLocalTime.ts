import { useCallback, useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  const id = window.setInterval(onChange, 15_000);
  return () => window.clearInterval(id);
}

/** The current time in `timeZone` as HH:MM, updated every 15 seconds. "--:--" on the server. */
export function useLocalTime(timeZone: string): string {
  const getSnapshot = useCallback(
    () => new Date().toLocaleTimeString("en-GB", { timeZone, hour: "2-digit", minute: "2-digit" }),
    [timeZone],
  );
  return useSyncExternalStore(subscribe, getSnapshot, () => "--:--");
}
