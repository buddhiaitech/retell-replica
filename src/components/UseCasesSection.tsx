import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect, useRef } from "react";

const UseCasesSection = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const parallax = scrolled * 0.2;
      
      sectionRef.current.style.setProperty('--scroll-offset', `${parallax * 0.1}px`);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const useCases = [
    {
      id: "receptionist",
      title: "Receptionist",
      description: "Handle incoming calls and route them appropriately with professional AI reception services that never miss a call.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
      features: ["24/7 Availability", "Call Routing", "Message Taking", "Appointment Scheduling"]
    },
    {
      id: "appointment",
      title: "Appointment Setter",
      description: "Schedule appointments seamlessly with natural conversation, integrating with your calendar systems automatically.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      features: ["Calendar Integration", "Automated Scheduling", "Reminder Calls", "Rescheduling"]
    },
    {
      id: "lead",
      title: "Lead Qualification",
      description: "Qualify leads effectively with intelligent questioning and route qualified prospects to your sales team.",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=300&fit=crop",
      features: ["Smart Qualification", "Lead Scoring", "CRM Integration", "Follow-up Automation"]
    },
    {
      id: "survey",
      title: "Survey",
      description: "Conduct surveys with engaging conversational AI that increases response rates and gathers valuable insights.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      features: ["High Response Rates", "Real-time Analytics", "Custom Questions", "Data Export"]
    },
    {
      id: "customer-service",
      title: "Customer Service",
      description: "Provide 24/7 customer support with AI agents that can handle complex queries and escalate when needed.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      features: ["24/7 Support", "Multi-language", "Issue Resolution", "Escalation Management"]
    },
    {
      id: "debt-collection",
      title: "Debt Collection",
      description: "Handle debt collection calls professionally and efficiently while maintaining compliance with regulations.",
      image: "https://images.unsplash.com/photo-1554224154-26032fced8bd?w=400&h=300&fit=crop",
      features: ["Compliance Ready", "Payment Processing", "Documentation", "Escalation Protocols"]
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 parallax-slow">
        <div className="absolute top-32 right-20 w-40 h-40 bg-retell-blue/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-40 left-16 w-56 h-56 bg-retell-cyan/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Live Demo Section */}
        <div className="max-w-5xl mx-auto text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8 animate-fade-in">
            Try Our{" "}
            <span className="bg-gradient-to-r from-retell-blue to-retell-cyan bg-clip-text text-transparent">
              Live Demo
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Discover how our AI caller transforms customer conversations.
          </p>
          
          <Card className="glass shadow-2xl border-0 max-w-3xl mx-auto hover-scale animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <CardContent className="p-10">
              <h3 className="text-2xl font-bold mb-8 text-foreground">
                Receive a live call from our agent
              </h3>
              <div className="space-y-6">
                <Input
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="h-14 text-lg transition-all duration-300 focus:scale-105"
                />
                <Input
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-14 text-lg transition-all duration-300 focus:scale-105"
                />
                <Input
                  placeholder="Email Address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-14 text-lg transition-all duration-300 focus:scale-105"
                />
                <Button 
                  className="w-full h-16 bg-retell-blue hover:bg-retell-blue/90 text-white text-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl animate-glow"
                  size="lg"
                >
                  Request Demo Call
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Use Cases Tabs */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12 animate-fade-in">Use Cases</h2>
          <Tabs defaultValue="receptionist" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-12 bg-muted/50 p-2 rounded-2xl glass">
              {useCases.map((useCase) => (
                <TabsTrigger 
                  key={useCase.id} 
                  value={useCase.id}
                  className="text-xs lg:text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 rounded-xl hover:scale-105"
                >
                  {useCase.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {useCases.map((useCase, index) => (
              <TabsContent key={useCase.id} value={useCase.id} className="mt-8">
                <Card className="glass shadow-2xl border-0 hover-scale animate-fade-in">
                  <CardContent className="p-10">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                      <div className="space-y-6">
                        <h3 className="text-3xl font-bold text-foreground">
                          {useCase.title}
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {useCase.description}
                        </p>
                        
                        {/* Feature List */}
                        <div className="grid grid-cols-2 gap-3">
                          {useCase.features.map((feature, i) => (
                            <div key={i} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-retell-blue rounded-full"></div>
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <Button 
                          variant="outline" 
                          className="border-2 border-retell-blue text-retell-blue hover:bg-retell-blue hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg px-8 py-6 text-lg font-semibold"
                        >
                          Learn More
                        </Button>
                      </div>
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-retell-blue/20 to-retell-cyan/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                        <img 
                          src={useCase.image} 
                          alt={useCase.title}
                          className="relative w-full h-80 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-all duration-500"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Enhanced Customer Stories CTA */}
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-3 border-retell-blue text-retell-blue hover:bg-retell-blue hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl px-10 py-6 text-xl font-bold animate-fade-in"
          >
            SEE CUSTOMER STORIES
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;