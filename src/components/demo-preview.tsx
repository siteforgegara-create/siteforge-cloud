"use client";

import { motion } from "framer-motion";
import { ExternalLink, Monitor } from "lucide-react";

export function DemoPreview() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-violet-400 text-sm font-mono uppercase tracking-widest mb-4">Live preview</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            See it in <span className="text-gradient">action</span>
          </h2>
          <p className="text-white/50 max-w-lg mx-auto">
            Fully functional demo — create an account, try the AI chat, test Stripe in sandbox mode.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Browser chrome mockup */}
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-violet-950/50">
            {/* Browser bar */}
            <div className="bg-[#111118] border-b border-white/8 px-4 py-3 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="bg-white/5 border border-white/8 rounded-md px-4 py-1.5 text-xs text-white/40 font-mono max-w-xs w-full text-center">
                  saas-starter-blackbird.vercel.app
                </div>
              </div>
              <Monitor className="w-4 h-4 text-white/20" />
            </div>

            {/* "Screenshot" placeholder — gradient mockup of the app */}
            <div className="bg-[#0f0f1a] aspect-[16/9] relative overflow-hidden">
              {/* Simulated app UI */}
              <div className="absolute inset-0 flex">
                {/* Sidebar */}
                <div className="w-56 bg-[#0a0a12] border-r border-white/5 p-4 flex flex-col gap-2">
                  <div className="flex items-center gap-2 px-2 py-1 mb-4">
                    <div className="w-5 h-5 rounded bg-violet-600" />
                    <div className="h-3 w-20 bg-white/20 rounded" />
                  </div>
                  {["Dashboard", "AI Chat", "Settings"].map((item, i) => (
                    <div
                      key={item}
                      className={`px-3 py-2 rounded-lg flex items-center gap-2 ${i === 0 ? "bg-violet-600/20 border border-violet-500/30" : ""}`}
                    >
                      <div className={`w-4 h-4 rounded ${i === 0 ? "bg-violet-400" : "bg-white/10"}`} />
                      <div className={`h-2.5 rounded ${i === 0 ? "bg-violet-300 w-16" : "bg-white/15 w-12"}`} />
                    </div>
                  ))}
                </div>

                {/* Main content */}
                <div className="flex-1 p-6 overflow-hidden">
                  <div className="h-7 w-40 bg-white/20 rounded mb-1" />
                  <div className="h-4 w-64 bg-white/8 rounded mb-6" />

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {[["Plan", "Pro"], ["Messages", "24/100"], ["Member since", "Today"]].map(([label, val]) => (
                      <div key={label} className="bg-white/4 border border-white/6 rounded-lg p-3">
                        <div className="h-2.5 w-16 bg-white/15 rounded mb-2" />
                        <div className="h-5 w-20 bg-white/25 rounded" />
                      </div>
                    ))}
                  </div>

                  {/* Chat preview */}
                  <div className="bg-white/4 border border-white/6 rounded-lg p-4">
                    <div className="flex gap-3 mb-3">
                      <div className="w-7 h-7 rounded-full bg-violet-600/60 shrink-0" />
                      <div className="bg-white/6 rounded-xl px-3 py-2 flex-1">
                        <div className="h-2.5 w-full bg-white/15 rounded mb-1.5" />
                        <div className="h-2.5 w-3/4 bg-white/10 rounded" />
                      </div>
                    </div>
                    <div className="flex gap-3 justify-end">
                      <div className="bg-violet-600/30 rounded-xl px-3 py-2 max-w-[60%]">
                        <div className="h-2.5 w-32 bg-violet-300/40 rounded mb-1.5" />
                        <div className="h-2.5 w-20 bg-violet-300/30 rounded" />
                      </div>
                      <div className="w-7 h-7 rounded-full bg-white/10 shrink-0" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Glow under */}
          <div className="absolute -inset-4 bg-violet-600/10 blur-3xl -z-10 rounded-3xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-8"
        >
          <a
            href="https://saas-starter-blackbird.vercel.app"
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
