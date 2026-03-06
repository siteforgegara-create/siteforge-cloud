"use client";

import { motion } from "framer-motion";
import {
  Shield,
  CreditCard,
  Bot,
  BookOpen,
  Zap,
  Mail,
  Database,
  LayoutDashboard,
  FileCode,
  Globe,
  Palette,
  Lock,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Full Auth System",
    description: "Google OAuth, Magic Links, Email/Password with verification. NextAuth v5 beta.",
    color: "violet",
  },
  {
    icon: CreditCard,
    title: "Stripe Subscriptions",
    description: "4 pricing tiers, webhooks, upgrade/downgrade via Billing Portal. Production-ready.",
    color: "violet",
  },
  {
    icon: Bot,
    title: "AI Chat w/ Streaming",
    description: "OpenAI integration with SSE streaming. Per-plan message limits enforced server-side.",
    color: "violet",
  },
  {
    icon: BookOpen,
    title: "MDX Blog",
    description: "Full blog with MDX, gray-matter front matter, SEO meta tags, and sitemap generation.",
    color: "violet",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard UI",
    description: "Beautiful sidebar dashboard with stats, usage tracking, and account settings.",
    color: "violet",
  },
  {
    icon: Mail,
    title: "Transactional Emails",
    description: "Resend integration for email verification, password reset, and welcome flows.",
    color: "violet",
  },
  {
    icon: Database,
    title: "Prisma + PostgreSQL",
    description: "Prisma 7 with Neon serverless Postgres. Migrations, type-safe queries, adapters.",
    color: "violet",
  },
  {
    icon: Palette,
    title: "Beautiful UI",
    description: "shadcn/ui components, Tailwind CSS, Framer Motion animations, Geist font.",
    color: "violet",
  },
  {
    icon: FileCode,
    title: "Full Documentation",
    description: "README, SETUP.md, DEPLOYMENT.md, and .env.example. Everything explained.",
    color: "violet",
  },
  {
    icon: Globe,
    title: "SEO Ready",
    description: "Meta tags, Open Graph, Twitter cards, sitemap.xml, robots.txt out of the box.",
    color: "violet",
  },
  {
    icon: Lock,
    title: "TypeScript Strict",
    description: "100% TypeScript with strict mode. No any. Clean, maintainable codebase.",
    color: "violet",
  },
  {
    icon: Zap,
    title: "Vercel-Optimized",
    description: "Edge middleware, lazy Prisma initialization, Turbopack dev server. Deploy in minutes.",
    color: "violet",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 text-sm font-mono font-medium uppercase tracking-widest mb-4">
            Everything included
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            All the boring stuff,{" "}
            <span className="text-gradient">already built</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Months of development work, packaged and documented. Focus on what makes your product unique.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group card-dark rounded-xl p-6 hover:border-violet-500/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-violet-600/15 border border-violet-500/20 flex items-center justify-center mb-4 group-hover:bg-violet-600/25 group-hover:border-violet-500/40 transition-all">
                <feature.icon className="w-5 h-5 text-violet-400" />
              </div>
              <h3 className="font-semibold text-white text-sm mb-2">{feature.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
