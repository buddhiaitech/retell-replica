import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-hero"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-retell-cyan/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-retell-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-retell-dark mb-6 leading-tight">
            Supercharge your{" "}
            <span className="bg-gradient-to-r from-retell-blue to-retell-cyan bg-clip-text text-transparent">
              Call Operations
            </span>{" "}
            with Voice AI
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover the new way to build, test, deploy, and monitor
            <br />
            production-ready AI voice agents at scale.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-retell-dark hover:bg-retell-dark/90 text-white px-8 py-6 text-lg font-semibold transition-bounce shadow-soft">
              TRY FOR FREE
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-retell-dark text-retell-dark hover:bg-retell-dark hover:text-white px-8 py-6 text-lg font-semibold transition-bounce">
              CONTACT SALES
            </Button>
          </div>
          
          {/* Trusted By Section */}
          <div className="mt-16">
            <p className="text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
              Trusted By
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
              {/* Company logos would go here - using placeholder boxes for now */}
              {[...Array(12)].map((_, i) => (
                <div key={i} className="h-8 bg-muted rounded flex items-center justify-center">
                  <span className="text-xs text-muted-foreground font-medium">
                    {["CAPSULE", "LAWYER.COM", "WRENCH", "STORAGE VAULT", "SPARE", "EVERISE", "SWTCH", "TRIPLETON", "HONK", "THE HOTELS NETWORK", "GFT HEALTH", "MATIC"][i]}
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