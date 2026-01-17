import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedComponents } from "@/components/home/FeaturedComponents";
import { ToolsSection } from "@/components/home/ToolsSection";
import { ContributorsSection } from "@/components/home/ContributorsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedComponents />
        <ToolsSection />
        <ContributorsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
