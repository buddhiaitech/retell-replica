import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Documentation", "API Reference", "Integrations"]
    },
    {
      title: "Solutions", 
      links: ["Customer Service", "Sales", "Lead Generation", "Appointment Setting", "Survey"]
    },
    {
      title: "Company",
      links: ["About", "Careers", "Blog", "Press", "Partners"]
    },
    {
      title: "Resources",
      links: ["Help Center", "Community", "Webinars", "Case Studies", "Status"]
    }
  ];

  return (
    <footer className="bg-retell-dark text-white py-16">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-retell-blue to-retell-cyan rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="text-xl font-bold">Retell AI</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              The leading platform for building, testing, deploying, and monitoring production-ready AI voice agents at scale.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:bg-gray-800 hover:text-white">
                Twitter
              </Button>
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:bg-gray-800 hover:text-white">
                LinkedIn
              </Button>
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:bg-gray-800 hover:text-white">
                GitHub
              </Button>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-smooth text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <span>© 2024 Retell AI. All rights reserved.</span>
              <a href="#" className="hover:text-white transition-smooth">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-smooth">Terms of Service</a>
              <a href="#" className="hover:text-white transition-smooth">Cookie Policy</a>
            </div>
            <div className="flex space-x-4">
              <Button 
                variant="outline" 
                size="sm"
                className="border-retell-blue text-retell-blue hover:bg-retell-blue hover:text-white transition-bounce"
              >
                Start Free Trial
              </Button>
              <Button 
                size="sm"
                className="bg-retell-blue hover:bg-retell-blue/90 text-white transition-bounce"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;