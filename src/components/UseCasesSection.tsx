import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const UseCasesSection = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const useCases = [
    {
      id: "receptionist",
      title: "Receptionist",
      description: "Handle incoming calls and route them appropriately",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop"
    },
    {
      id: "appointment",
      title: "Appointment Setter",
      description: "Schedule appointments seamlessly with natural conversation",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop"
    },
    {
      id: "lead",
      title: "Lead Qualification",
      description: "Qualify leads effectively with intelligent questioning",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=300&fit=crop"
    },
    {
      id: "survey",
      title: "Survey",
      description: "Conduct surveys with engaging conversational AI",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    },
    {
      id: "customer-service",
      title: "Customer Service",
      description: "Provide 24/7 customer support with AI agents",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
    },
    {
      id: "debt-collection",
      title: "Debt Collection",
      description: "Handle debt collection calls professionally and efficiently",
      image: "https://images.unsplash.com/photo-1554224154-26032fced8bd?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Live Demo Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Try Our Live Demo
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Discover how our AI caller transforms customer conversations.
          </p>
          
          <Card className="gradient-card shadow-card border-0 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6 text-foreground">
                Receive a live call from our agent
              </h3>
              <div className="space-y-4">
                <Input
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="transition-smooth"
                />
                <Input
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="transition-smooth"
                />
                <Input
                  placeholder="Email Address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="transition-smooth"
                />
                <Button 
                  className="w-full bg-retell-blue hover:bg-retell-blue/90 text-white transition-bounce"
                  size="lg"
                >
                  Request Demo Call
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Use Cases Tabs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Use Cases</h2>
          <Tabs defaultValue="receptionist" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8 bg-muted">
              {useCases.map((useCase) => (
                <TabsTrigger 
                  key={useCase.id} 
                  value={useCase.id}
                  className="text-xs lg:text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-smooth"
                >
                  {useCase.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {useCases.map((useCase) => (
              <TabsContent key={useCase.id} value={useCase.id} className="mt-8">
                <Card className="gradient-card shadow-card border-0">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">
                          {useCase.title}
                        </h3>
                        <p className="text-lg text-muted-foreground mb-6">
                          {useCase.description}
                        </p>
                        <Button 
                          variant="outline" 
                          className="border-retell-blue text-retell-blue hover:bg-retell-blue hover:text-white transition-bounce"
                        >
                          Learn More
                        </Button>
                      </div>
                      <div className="relative">
                        <img 
                          src={useCase.image} 
                          alt={useCase.title}
                          className="w-full h-64 object-cover rounded-lg shadow-soft"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Customer Stories Link */}
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-retell-blue text-retell-blue hover:bg-retell-blue hover:text-white transition-bounce"
          >
            SEE CUSTOMER STORIES
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;