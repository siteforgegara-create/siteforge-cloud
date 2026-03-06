import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { DemoPreview } from "@/components/demo-preview";
import { TemplatesSection } from "@/components/templates-section";
import { Features } from "@/components/features";
import { PricingSection } from "@/components/pricing-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <main>
        <Hero />
        <DemoPreview />
        <TemplatesSection />
        <Features />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
