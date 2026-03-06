"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Check } from "lucide-react";
import type { Template } from "@/lib/templates";

interface TemplateCardProps {
  template: Template;
  index: number;
}

export function TemplateCard({ template, index }: TemplateCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative rounded-2xl overflow-hidden border border-white/8 bg-gradient-to-b from-white/[0.04] to-transparent"
    >
      {/* Glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            {template.badge && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-violet-600/20 text-violet-300 border border-violet-500/30 mb-3">
                {template.badge}
              </span>
            )}
            <h3 className="text-2xl font-bold text-white font-mono">{template.name}</h3>
            <p className="text-violet-400 text-sm mt-1">{template.tagline}</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-white">${template.price}</div>
            <div className="text-xs text-white/30 mt-1">one-time</div>
          </div>
        </div>

        {/* Description */}
        <p className="text-white/50 text-sm leading-relaxed mb-8">{template.description}</p>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
          {template.features.map((feature) => (
            <div key={feature} className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-violet-500 mt-0.5 shrink-0" />
              <span className="text-white/60 text-sm">{feature}</span>
            </div>
          ))}
        </div>

        {/* What's included */}
        <div className="border border-white/8 rounded-xl p-5 mb-8 bg-white/[0.02]">
          <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-3">
            What&apos;s included
          </p>
          <div className="flex flex-wrap gap-2">
            {template.includes.map((item) => (
              <span
                key={item}
                className="text-xs px-3 py-1 rounded-full bg-violet-600/10 border border-violet-500/20 text-violet-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {template.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/8 text-white/40 font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={template.gumroadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 group/btn flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:shadow-lg hover:shadow-violet-600/25"
          >
            Buy on Gumroad
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </a>
          <a
            href={template.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-white/10 hover:border-white/20 text-white/60 hover:text-white px-6 py-3 rounded-xl font-medium text-sm transition-all hover:bg-white/5"
          >
            Live Demo
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
