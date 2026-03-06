import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://siteforge.cloud"),
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  title: {
    default: "SiteForge — Premium Next.js SaaS Templates",
    template: "%s | SiteForge",
  },
  description:
    "Production-ready Next.js SaaS starter templates. Ship your SaaS in days, not months. Auth, payments, AI, and more — all wired up.",
  keywords: ["Next.js", "SaaS", "starter template", "boilerplate", "TypeScript", "Stripe", "Auth"],
  authors: [{ name: "SiteForge" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://siteforge.cloud",
    siteName: "SiteForge",
    title: "SiteForge — Premium Next.js SaaS Templates",
    description: "Production-ready Next.js SaaS starter templates. Ship your SaaS in days, not months.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SiteForge — Premium Next.js SaaS Templates",
    description: "Production-ready Next.js SaaS starter templates.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
