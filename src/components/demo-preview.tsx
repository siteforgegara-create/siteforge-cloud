"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Lock } from "lucide-react";

import { DEMO_URL } from "@/lib/templates";
import { cn } from "@/lib/utils";

// Real screenshots of the live demo (public/screens). Re-capture them after a
// template redesign so the storefront always matches what buyers get.
const SCREENS = [
  { id: "landing", label: "Landing", path: "/", src: "/screens/landing.webp", alt: "Landing page with a live AI chat demo" },
  { id: "pricing", label: "Pricing", path: "/pricing", src: "/screens/pricing.webp", alt: "Pricing page with monthly and yearly billing" },
  { id: "dashboard", label: "Dashboard", path: "/dashboard", src: "/screens/dashboard.webp", alt: "Dashboard with plan and usage stats" },
  { id: "chat", label: "AI Chat", path: "/chat", src: "/screens/chat.webp", alt: "Streaming AI chat with markdown replies" },
  { id: "chat-dark", label: "Dark mode", path: "/chat", src: "/screens/chat-dark.webp", alt: "AI chat in dark mode" },
] as const;

const AUTOPLAY_MS = 5000;

export function DemoPreview() {
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const screen = SCREENS[active];
  const demoHost = DEMO_URL.replace(/^https?:\/\//, "");

  useEffect(() => {
    if (!autoplay) return;
    const timer = setTimeout(() => setActive((i) => (i + 1) % SCREENS.length), AUTOPLAY_MS);
    return () => clearTimeout(timer);
  }, [active, autoplay]);

  const select = (index: number) => {
    setAutoplay(false);
    setActive(index);
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-violet-400 text-sm font-mono uppercase tracking-widest mb-4">Live preview</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            See it in <span className="text-gradient">action</span>
          </h2>
          <p className="text-white/50 max-w-lg mx-auto">
            Fully functional demo: create an account, try the AI chat, test Stripe in sandbox mode.
          </p>
        </motion.div>

        {/* Tabs */}
        <div role="tablist" aria-label="Demo screens" className="mb-6 flex flex-wrap justify-center gap-2">
          {SCREENS.map((item, index) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={index === active}
              onClick={() => select(index)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                index === active
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-600/25"
                  : "border border-white/10 text-white/50 hover:border-white/20 hover:text-white"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-violet-950/50">
            {/* Browser bar */}
            <div className="bg-[#111118] border-b border-white/8 px-4 py-3 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="bg-white/5 border border-white/8 rounded-md px-4 py-1.5 text-xs text-white/50 font-mono max-w-sm w-full flex items-center justify-center gap-1.5">
                  <Lock className="w-3 h-3 text-white/30" />
                  {demoHost}
                  {screen.path === "/" ? "" : screen.path}
                </div>
              </div>
              <div className="w-12" />
            </div>

            {/* Screenshot */}
            <div className="relative aspect-[16/10] bg-white">
              <AnimatePresence initial={false} mode="popLayout">
                <motion.div
                  key={screen.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    fill
                    sizes="(min-width: 1024px) 1024px, 100vw"
                    className="object-cover object-top"
                    priority={screen.id === "landing"}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Glow under */}
          <div className="absolute -inset-4 bg-violet-600/10 blur-3xl -z-10 rounded-3xl" />
        </motion.div>

        {/* Autoplay progress */}
        <div className="mt-5 flex justify-center gap-1.5" aria-hidden>
          {SCREENS.map((item, index) => (
            <span
              key={item.id}
              className={cn(
                "h-1.5 rounded-full transition-all duration-500",
                index === active ? "w-6 bg-violet-500" : "w-1.5 bg-white/15"
              )}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-6"
        >
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors text-sm font-medium"
          >
            Open full demo
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
