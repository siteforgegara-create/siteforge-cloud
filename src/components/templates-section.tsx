"use client";

import { motion } from "framer-motion";
import { TemplateCard } from "./template-card";
import { TEMPLATES } from "@/lib/templates";

export function TemplatesSection() {
  return (
    <section id="templates" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 text-sm font-mono uppercase tracking-widest mb-4">Templates</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose your <span className="text-gradient">starting point</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Carefully crafted templates for different use cases. More coming soon.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {TEMPLATES.map((template, i) => (
            <TemplateCard key={template.id} template={template} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
