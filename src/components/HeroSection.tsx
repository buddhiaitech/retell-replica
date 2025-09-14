import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

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
      
      {/* Content with Enhanced Animations */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-8xl font-bold text-foreground mb-8 leading-tight">
            Intelligent <span className="text-sky-300">AI</span> Voice{" "}
            <span className="text-sky-300">
              Calling
            </span> Center{" "}
            Platform
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform Your Business Communication with Advanced AI Voice Technology.
            <br />
            Deliver human-like conversations at scale, enabling 24/7 service excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button size="lg" className="bg-primary text-white px-10 py-8 text-xl font-bold">
              TRY FOR FREE
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-primary text-primary px-10 py-8 text-xl font-bold">
              CONTACT SALES
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;