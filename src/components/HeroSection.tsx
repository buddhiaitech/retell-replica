import { ShimmerButton } from "@/components/ui/shimmer-button";
import { AuroraText } from "@/components/ui/aurora-text";
import { useEffect, useRef } from "react";
import { SoundWaveAnimation } from "./SoundWaveAnimation";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const parallax = scrolled * 0.3;
      
      sectionRef.current.style.setProperty('--scroll-offset', `${parallax * 0.1}px`);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Logo */}
      <div className="absolute top-8 left-8 z-20">
        <h2 className="text-2xl font-bold">
          Buddhi Voice <span className="text-blue-600">AI</span>
        </h2>
      </div>
      
      {/* Sound Wave Background Animation */}
      <SoundWaveAnimation className="z-0" />
      
      {/* Content with Enhanced Animations */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
            Supercharge your{" "}
            <AuroraText 
              colors={["#60a5fa", "#3b82f6", "#1d4ed8", "#93c5fd"]}
              speed={1.5}
            >
              Call Operations
            </AuroraText>{" "}
            with Voice AI
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-normal">
            Discover the new way to build, test, deploy, and monitor 
            production-ready AI voice agents at scale.
          </p>
          
          <div className="flex justify-center mb-16">
            <ShimmerButton 
              shimmerColor="#60a5fa" 
              background="rgba(255, 255, 255, 1)"
              className="px-8 py-6 text-lg font-medium text-foreground"
            >
              TRY FOR FREE
            </ShimmerButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;