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
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background Gradient */}
      <div className="absolute inset-0 gradient-hero"></div>
      
      {/* Enhanced Animated Background Elements with Parallax */}
      <div className="absolute inset-0 parallax-slow">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-retell-cyan/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-retell-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-10 w-32 h-32 bg-accent/30 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-10 right-10 w-48 h-48 bg-retell-cyan/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      {/* Content with Enhanced Animations */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-8xl font-bold text-retell-dark mb-8 leading-tight animate-fade-in">
            Supercharge your{" "}
            <span className="bg-gradient-to-r from-retell-blue via-retell-cyan to-retell-blue bg-clip-text text-transparent animate-glow">
              Call Operations
            </span>{" "}
            with Voice AI
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Discover the new way to build, test, deploy, and monitor
            <br />
            production-ready AI voice agents at scale.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" className="bg-retell-dark hover:bg-retell-dark/90 text-white px-10 py-8 text-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-glow">
              TRY FOR FREE
            </Button>
            <Button variant="outline" size="lg" className="border-3 border-retell-dark text-retell-dark hover:bg-retell-dark hover:text-white px-10 py-8 text-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl">
              CONTACT SALES
            </Button>
          </div>
          
          {/* Enhanced Trusted By Section */}
          <div className="mt-20 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <p className="text-sm font-bold text-muted-foreground mb-10 uppercase tracking-wider">
              Trusted By Industry Leaders
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
              {[
                "CAPSULE", "LAWYER.COM", "WRENCH", "STORAGE VAULT", 
                "SPARE", "EVERISE", "SWTCH", "TRIPLETON", 
                "HONK", "THE HOTELS NETWORK", "GFT HEALTH", "MATIC"
              ].map((company, i) => (
                <div 
                  key={i} 
                  className="h-12 bg-gradient-to-r from-muted/80 to-muted/60 rounded-lg flex items-center justify-center hover-scale glass animate-fade-in" 
                  style={{ animationDelay: `${1.1 + i * 0.1}s` }}
                >
                  <span className="text-xs text-muted-foreground font-bold tracking-wide">
                    {company}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;