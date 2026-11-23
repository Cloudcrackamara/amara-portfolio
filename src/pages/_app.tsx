import "@/styles/globals.css";
import { MotionConfig } from "framer-motion";
import type { AppProps } from "next/app";
import { Caveat, Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

/** Handwritten "Available" in the status panel. */
const caveat = Caveat({ subsets: ["latin"], weight: "700", variable: "--font-caveat", display: "swap" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${caveat.variable} min-h-screen font-sans`}
    >
      <MotionConfig reducedMotion="user">
        <Component {...pageProps} />
      </MotionConfig>
    </div>
  );
}
