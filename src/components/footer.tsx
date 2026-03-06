import Link from "next/link";
import { Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-violet-600 flex items-center justify-center">
            <Zap className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-sm font-medium text-white/70">
            site<span className="text-violet-400">forge</span>.cloud
          </span>
        </div>

        <p className="text-xs text-white/30 text-center">
          © {new Date().getFullYear()} SiteForge. Premium Next.js SaaS Templates.
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://siteforge.gumroad.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/40 hover:text-white/70 transition-colors"
          >
            Gumroad
          </a>
          <a
            href="mailto:hello@siteforge.cloud"
            className="text-xs text-white/40 hover:text-white/70 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
