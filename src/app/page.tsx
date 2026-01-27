import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TalentShowcase } from "@/components/talent-showcase";
import { CaseStudies } from "@/components/case-studies";
import { BentoGridSection } from "@/components/bento-grid";
import { TalentGrid } from "@/components/talent-grid";
import { Footer } from "@/components/footer";
import { ComparisonSection } from "@/components/comparison-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TalentShowcase />
      <CaseStudies />
      <BentoGridSection />
      <TalentGrid />
      <ComparisonSection />
      <Footer />
    </main>
  );
}
