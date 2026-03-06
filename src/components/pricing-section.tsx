"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 text-sm font-mono uppercase tracking-widest mb-4">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, <span className="text-gradient">one-time</span> pricing
          </h2>
          <p className="text-white/50 text-lg">
            Buy once, own forever. Lifetime updates included.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden"
        >
          {/* Top border gradient */}
          <div className="h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />

          <div className="bg-gradient-to-b from-violet-950/30 to-[#0d0d18] border border-violet-500/20 border-t-0 rounded-b-2xl p-10">
            {/* Badge + price */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-violet-600/20 border border-violet-500/30 text-violet-300 text-xs font-semibold mb-4">
                  ⚡ SAAS-STARTER
                </div>
                <h3 className="text-3xl font-bold text-white">Complete SaaS Boilerplate</h3>
                <p className="text-white/40 mt-2">Everything you need to launch a SaaS product</p>
              </div>
              <div className="text-right md:text-left">
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-bold text-white">$97</span>
                  <span className="text-white/40 text-lg">one-time</span>
                </div>
                <p className="text-violet-400/70 text-sm mt-1">Price increases after initial sales</p>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
              {[
                "Full source code (Next.js 16)",
                "NextAuth v5 + email verification",
                "Stripe subscriptions + webhooks",
                "4 pricing tiers (Free/Starter/Pro/Enterprise)",
                "OpenAI streaming chat + message limits",
                "MDX Blog + SEO utilities",
                "Dashboard with sidebar + settings",
                "shadcn/ui + Tailwind + Framer Motion",
                "Resend transactional emails",
                "Prisma 7 + Neon PostgreSQL",
                "README + SETUP + DEPLOYMENT docs",
                "Lifetime updates via Gumroad",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-violet-600/20 border border-violet-500/30 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-violet-400" />
                  </div>
                  <span className="text-white/70 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://siteforge.gumroad.com/l/saas-starter"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-2xl hover:shadow-violet-600/30"
            >
              Get Instant Access on Gumroad
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <p className="text-center text-white/25 text-xs mt-4">
              Delivered via Gumroad · Instant download · Use for unlimited projects
            </p>
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {[
            {
              q: "What license is included?",
              a: "Personal and commercial use for unlimited projects. You can build and sell products with this template.",
            },
            {
              q: "Can I use this for client projects?",
              a: "Yes. You can build and deploy as many products as you want using this codebase.",
            },
            {
              q: "Do I need to know Next.js?",
              a: "Basic Next.js knowledge helps, but the detailed documentation walks you through every step.",
            },
            {
              q: "How do updates work?",
              a: "Updates are delivered via Gumroad. You get access to all future updates at no extra cost.",
            },
          ].map((faq) => (
            <div key={faq.q} className="card-dark rounded-xl p-5">
              <p className="font-semibold text-white text-sm mb-2">{faq.q}</p>
              <p className="text-white/40 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
