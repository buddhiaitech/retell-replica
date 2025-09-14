import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-retell-blue to-retell-cyan rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="text-xl font-bold text-foreground">Retell AI</span>
          </div>

          {/* Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="space-x-6">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-muted text-foreground">
                  Features <ChevronDown className="ml-1 h-4 w-4" />
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-96 p-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-sm text-muted-foreground">BUILD</h4>
                        <a href="#" className="block text-sm font-medium hover:text-primary transition-smooth">Voice AI API</a>
                        <a href="#" className="block text-sm font-medium hover:text-primary transition-smooth">Agent Builder</a>
                        <a href="#" className="block text-sm font-medium hover:text-primary transition-smooth">Knowledge Base</a>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-sm text-muted-foreground">DEPLOY</h4>
                        <a href="#" className="block text-sm font-medium hover:text-primary transition-smooth">Phone Calls</a>
                        <a href="#" className="block text-sm font-medium hover:text-primary transition-smooth">Web Calls</a>
                        <a href="#" className="block text-sm font-medium hover:text-primary transition-smooth">Call Transfer</a>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <a href="#" className="text-foreground hover:text-primary font-medium transition-smooth">Pricing</a>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <a href="#" className="text-foreground hover:text-primary font-medium transition-smooth">Documentation</a>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-muted text-foreground">
                  Solutions <ChevronDown className="ml-1 h-4 w-4" />
                </NavigationMenuTrigger>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-muted text-foreground">
                  Resources <ChevronDown className="ml-1 h-4 w-4" />
                </NavigationMenuTrigger>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:inline-flex text-foreground hover:text-primary">
              CONTACT SALES
            </Button>
            <Button className="bg-retell-dark text-white hover:bg-retell-dark/90 transition-smooth">
              JOIN / LOG IN
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;