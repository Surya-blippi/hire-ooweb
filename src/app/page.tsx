import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TalentShowcase } from "@/components/talent-showcase";
import { HiringSteps } from "@/components/hiring-steps";
import { TalentGrid } from "@/components/talent-grid";
import { Footer } from "@/components/footer";
import { ComparisonSection } from "@/components/comparison-section";
import { CompanyLogos } from "@/components/company-logos";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <CompanyLogos />
      <TalentShowcase />
      <HiringSteps />
      <TalentGrid />
      <ComparisonSection />
      <Footer />
    </main>
  );
}
