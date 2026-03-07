"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Zap } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-7 h-7 rounded-lg bg-violet-600 flex items-center justify-center group-hover:bg-violet-500 transition-colors">
            <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
          </div>
          <span className="font-semibold text-white tracking-tight">
            site<span className="text-violet-400">forge</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/#templates"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            Templates
          </Link>
          <Link
            href="/#features"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            Features
          </Link>
          <Link
            href="/#pricing"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            Pricing
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://demo.siteforge.cloud"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            View Demo →
          </a>
          <a
            href="https://forgegala.gumroad.com/l/saas-starter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-violet-600/25"
          >
            Get Template — $97
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white/60 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex flex-col gap-4">
          <Link href="/#templates" className="text-sm text-white/70 hover:text-white" onClick={() => setMobileOpen(false)}>Templates</Link>
          <Link href="/#features" className="text-sm text-white/70 hover:text-white" onClick={() => setMobileOpen(false)}>Features</Link>
          <Link href="/#pricing" className="text-sm text-white/70 hover:text-white" onClick={() => setMobileOpen(false)}>Pricing</Link>
          <a href="https://demo.siteforge.cloud" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-white">View Demo →</a>
          <a
            href="https://forgegala.gumroad.com/l/saas-starter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-violet-600 text-white px-4 py-2 rounded-lg font-medium text-center"
          >
            Get Template — $97
          </a>
        </div>
      )}
    </header>
  );
}
