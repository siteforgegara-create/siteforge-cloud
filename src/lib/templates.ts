// ─────────────────────────────────────────────────────────────────────────────
// Where every "Buy" button on the site leads.
// Paste the 21st.dev listing URL here once it's live. While it's null, buy
// buttons say "Coming soon on 21st.dev" and open the live demo instead.
// ─────────────────────────────────────────────────────────────────────────────
export const PURCHASE_URL: string | null = null;
export const PURCHASE_PLATFORM = "21st.dev";
export const DEMO_URL = "https://demo.siteforge.cloud";

export const purchase = {
  available: PURCHASE_URL !== null,
  href: PURCHASE_URL ?? DEMO_URL,
  platform: PURCHASE_PLATFORM,
} as const;

/** Button text: `label` when the template can be bought, otherwise "Coming soon". */
export function buyLabel(label: string, comingSoon = `Coming soon on ${PURCHASE_PLATFORM} · Try the demo`): string {
  return purchase.available ? label : comingSoon;
}

export interface Template {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  originalPrice?: number;
  demoUrl: string;
  badge?: string;
  features: string[];
  techStack: string[];
  includes: string[];
}

export const TEMPLATES: Template[] = [
  {
    id: "saas-starter",
    slug: "saas-starter",
    name: "SAAS-STARTER",
    tagline: "The complete Next.js SaaS boilerplate",
    description:
      "A production-ready Next.js 16 SaaS starter with everything you need: authentication, Stripe subscriptions, AI chat, MDX blog, and full documentation. Stop building plumbing — ship your product.",
    price: 79,
    demoUrl: DEMO_URL,
    badge: "NEW",
    features: [
      "Next.js 16 + TypeScript strict",
      "NextAuth v5 (Google, Magic Link, Credentials)",
      "Email verification flow",
      "Stripe subscriptions (4 tiers)",
      "Upgrade/downgrade via Billing Portal",
      "Streaming AI chat: OpenAI, Claude, Gemini, Groq, DeepSeek, Ollama",
      "Model + message limits per plan",
      "MDX Blog + SEO utilities",
      "SEO utilities & sitemap",
      "Dark mode + shadcn/ui",
      "Framer Motion animations",
      "Resend transactional emails",
      "Prisma 7 + PostgreSQL (Neon)",
      "Feature switches: turn modules on/off in one file",
      "Full docs + AGENTS.md for AI coding tools",
    ],
    techStack: ["Next.js 16", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "OpenAI", "shadcn/ui"],
    includes: [
      "Full source code",
      "README.md with setup guide",
      "SETUP.md (step-by-step)",
      "DEPLOYMENT.md (Vercel)",
      "CUSTOMIZATION.md + AGENTS.md",
      ".env.example",
      "Lifetime updates",
    ],
  },
];

export function getTemplate(slug: string): Template | undefined {
  return TEMPLATES.find((t) => t.slug === slug);
}
