import HeroSection from "@/components/HeroSection";
import UseCasesSection from "@/components/UseCasesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <UseCasesSection />
      <HowItWorksSection />
      <FeaturesSection />
      <FAQSection />
    </div>
  );
};

export default Index;
