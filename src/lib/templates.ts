export interface Template {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  originalPrice?: number;
  gumroadUrl: string;
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
    price: 97,
    gumroadUrl: "https://siteforge.gumroad.com/l/saas-starter",
    demoUrl: "https://saas-starter-blackbird.vercel.app",
    badge: "NEW",
    features: [
      "Next.js 16 + TypeScript strict",
      "NextAuth v5 (Google, Magic Link, Credentials)",
      "Email verification flow",
      "Stripe subscriptions (4 tiers)",
      "Upgrade/downgrade via Billing Portal",
      "AI chat with streaming (OpenAI)",
      "Message limits per plan",
      "MDX Blog + SEO utilities",
      "SEO utilities & sitemap",
      "Dark mode + shadcn/ui",
      "Framer Motion animations",
      "Resend transactional emails",
      "Prisma 7 + PostgreSQL (Neon)",
      "Full documentation (README, SETUP, DEPLOYMENT)",
    ],
    techStack: ["Next.js 16", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "OpenAI", "shadcn/ui"],
    includes: [
      "Full source code",
      "README.md with setup guide",
      "SETUP.md (step-by-step)",
      "DEPLOYMENT.md (Vercel)",
      ".env.example",
      "Lifetime updates",
    ],
  },
];

export function getTemplate(slug: string): Template | undefined {
  return TEMPLATES.find((t) => t.slug === slug);
}
