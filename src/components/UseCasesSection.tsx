import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShineBorder } from "@/components/ui/shine-border";
import { useState, useEffect, useRef } from "react";
import customerSupportImage from "@/assets/customer-support.jpg";
import healthcareVoiceImage from "@/assets/healthcare-voice.jpg";
import salesLeadImage from "@/assets/sales-lead.jpg";


const UseCasesSection = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [activeUseCase, setActiveUseCase] = useState("sales-lead");
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
      id: "sales-lead",
      title: "Sales & Lead Qualification",
      description: "Automated lead qualification and scoring with follow-up calls for warm prospects, product demonstrations and appointment scheduling.",
      image: salesLeadImage,
      features: ["Lead Qualification", "Follow-up Calls", "Product Demos", "Appointment Confirmation"]
    },
    {
      id: "customer-support",
      title: "Customer Support",
      description: "24/7 first-level technical support with order status inquiries, billing management, and complaint resolution.",
      image: customerSupportImage,
      features: ["24/7 Support", "Order Inquiries", "Billing Management", "Complaint Resolution"]
    },
    {
      id: "marketing-surveys",
      title: "Marketing & Surveys",
      description: "Market research and customer feedback collection, event invitations, satisfaction surveys, and brand awareness campaigns.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      features: ["Market Research", "Event Management", "Customer Surveys", "Brand Campaigns"]
    },
    {
      id: "healthcare",
      title: "Healthcare & Appointments",
      description: "Patient appointment scheduling and reminders, medication adherence follow-ups, post-treatment check-ins, and insurance verification.",
      image: healthcareVoiceImage,
      features: ["Appointment Scheduling", "Medication Follow-ups", "Check-ins", "Insurance Verification"]
    }
  ];

  return (
    <section ref={sectionRef} className="pt-0 pb-0 bg-white">
      <div className="container mx-auto px-6">
        {/* Enhanced Live Demo Section */}
        <div className="max-w-5xl mx-auto text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8 animate-fade-in">
            Try Our{" "}
            <span className="text-blue-500">
              Live Demo
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Discover how our AI caller transforms customer conversations.
          </p>
          
          <Card className="border border-border max-w-3xl mx-auto relative">
            <ShineBorder 
              borderWidth={1} 
              duration={12} 
              shineColor={["#e0f2fe", "#bae6fd", "#7dd3fc", "#38bdf8"]} 
            />
            <CardContent className="p-10">
              <h3 className="text-2xl font-bold mb-8 text-foreground">
                Receive a live call from our agent
              </h3>
              <div className="space-y-6">
                <Input
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="h-14 text-lg"
                />
                <Input
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-14 text-lg"
                />
                <Input
                  placeholder="Email Address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-14 text-lg"
                />
                <Button 
                  className="w-full h-16 bg-primary text-white text-xl font-bold"
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
          <Tabs value={activeUseCase} onValueChange={setActiveUseCase} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 bg-muted/50 p-2 rounded-2xl justify-center mx-auto max-w-4xl">
              {useCases.map((useCase) => (
                <TabsTrigger 
                  key={useCase.id} 
                  value={useCase.id}
                  className="text-xs lg:text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-500 ease-in-out transform hover:scale-105 rounded-xl text-center"
                >
                  {useCase.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {useCases.map((useCase, index) => (
              <TabsContent key={useCase.id} value={useCase.id} className="mt-8">
                <Card className="border border-border transition-all duration-500 ease-in-out animate-fade-in">
                  <CardContent className="p-10">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                      <div className="space-y-6 transform transition-all duration-500 ease-in-out">
                        <h3 className="text-3xl font-bold text-foreground">
                          {useCase.title}
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {useCase.description}
                        </p>
                        
                        {/* Feature List */}
                        <div className="grid grid-cols-2 gap-3">
                          {useCase.features.map((feature, i) => (
                            <div key={i} className="flex items-center space-x-2 transform transition-all duration-300 ease-in-out hover:translate-x-1">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <Button 
                          variant="outline" 
                          className="border-2 border-primary text-primary px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
                        >
                          Learn More
                        </Button>
                      </div>
                      <div className="relative transform transition-all duration-500 ease-in-out">
                        <img 
                          src={useCase.image} 
                          alt={useCase.title}
                          className="w-full h-80 object-cover rounded-2xl"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

      </div>
    </section>
  );
};

export default UseCasesSection;