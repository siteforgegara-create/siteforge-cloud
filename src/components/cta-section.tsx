"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden p-12"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/40 via-violet-950/20 to-[#0a0a0f]" />
          <div className="absolute inset-0 border border-violet-500/20 rounded-3xl" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-violet-500/70 to-transparent" />

          {/* Content */}
          <div className="relative z-10">
            <p className="text-violet-400/70 text-sm font-mono uppercase tracking-widest mb-4">
              Start building today
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Your SaaS deserves a{" "}
              <span className="shimmer-text">solid foundation</span>
            </h2>
            <p className="text-white/40 text-lg mb-10 max-w-lg mx-auto">
              Skip months of setup. Get a production-ready codebase and start shipping features today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://siteforge.gumroad.com/l/saas-starter"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-2xl hover:shadow-violet-600/30 hover:-translate-y-0.5"
              >
                Get SAAS-STARTER — $97
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://saas-starter-blackbird.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/10 hover:border-violet-500/40 text-white/60 hover:text-white px-8 py-4 rounded-xl font-medium transition-all hover:bg-violet-500/5"
              >
                Try the demo first
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
