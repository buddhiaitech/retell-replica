import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import UseCasesSection from "@/components/UseCasesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <UseCasesSection />
      <HowItWorksSection />
      <FeaturesSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
