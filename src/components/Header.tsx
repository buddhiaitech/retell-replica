import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full sticky top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with enhanced animation */}
          <div className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-retell-blue to-retell-cyan rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 animate-glow">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <span className="text-2xl font-bold text-foreground transition-all duration-300 group-hover:text-primary">
              Retell AI
            </span>
          </div>

          {/* Enhanced Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-8">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-muted text-foreground font-medium text-lg transition-all duration-300 hover:text-primary group">
                  Features 
                  <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-96 p-6 glass rounded-xl animate-fade-in">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-bold text-sm text-primary uppercase tracking-wider">BUILD</h4>
                        <a href="#" className="block text-sm font-medium text-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 story-link">Voice AI API</a>
                        <a href="#" className="block text-sm font-medium text-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 story-link">Agent Builder</a>
                        <a href="#" className="block text-sm font-medium text-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 story-link">Knowledge Base</a>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-bold text-sm text-primary uppercase tracking-wider">DEPLOY</h4>
                        <a href="#" className="block text-sm font-medium text-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 story-link">Phone Calls</a>
                        <a href="#" className="block text-sm font-medium text-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 story-link">Web Calls</a>
                        <a href="#" className="block text-sm font-medium text-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 story-link">Call Transfer</a>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <a href="#" className="text-foreground hover:text-primary font-medium text-lg transition-all duration-300 story-link">
                  Pricing
                </a>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <a href="#" className="text-foreground hover:text-primary font-medium text-lg transition-all duration-300 story-link">
                  Documentation
                </a>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-muted text-foreground font-medium text-lg transition-all duration-300 hover:text-primary group">
                  Solutions 
                  <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                </NavigationMenuTrigger>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-muted text-foreground font-medium text-lg transition-all duration-300 hover:text-primary group">
                  Resources 
                  <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                </NavigationMenuTrigger>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Enhanced Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="hidden md:inline-flex text-foreground hover:text-primary font-medium transition-all duration-300 hover:scale-105"
            >
              CONTACT SALES
            </Button>
            <Button className="bg-retell-dark text-white hover:bg-retell-dark/90 transition-all duration-300 hover:scale-105 hover:shadow-lg font-medium px-6">
              JOIN / LOG IN
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 glass rounded-xl p-6 animate-fade-in">
            <div className="space-y-4">
              <a href="#" className="block text-foreground hover:text-primary font-medium transition-all duration-300">Features</a>
              <a href="#" className="block text-foreground hover:text-primary font-medium transition-all duration-300">Pricing</a>
              <a href="#" className="block text-foreground hover:text-primary font-medium transition-all duration-300">Documentation</a>
              <a href="#" className="block text-foreground hover:text-primary font-medium transition-all duration-300">Solutions</a>
              <a href="#" className="block text-foreground hover:text-primary font-medium transition-all duration-300">Resources</a>
              <div className="pt-4 border-t border-border">
                <Button variant="outline" className="w-full mb-2">CONTACT SALES</Button>
                <Button className="w-full bg-retell-dark text-white">JOIN / LOG IN</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;