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
            <div className="flex flex-wrap justify-center gap-4 mb-12 max-w-5xl mx-auto">
              {useCases.map((useCase) => (
                <button
                  key={useCase.id}
                  onClick={() => setActiveUseCase(useCase.id)}
                  className={`
                    relative overflow-hidden px-6 py-4 rounded-full font-medium text-sm lg:text-base
                    transition-all duration-300 transform hover:scale-105 active:scale-97
                    border-0 cursor-pointer z-0 min-w-[200px]
                    ${activeUseCase === useCase.id 
                      ? 'bg-gradient-to-r from-white to-blue-100 text-blue-800 shadow-lg' 
                      : 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-white hover:to-blue-50 hover:text-blue-700'
                    }
                    shadow-md hover:shadow-lg
                    before:absolute before:inset-0 before:rounded-full before:p-[1px]
                    before:bg-gradient-to-r before:from-blue-200 before:via-blue-100 before:to-white
                    before:-z-10 before:opacity-50
                    after:absolute after:bottom-0 after:top-0 after:left-0 after:right-0
                    after:flex after:items-center after:justify-center after:-z-5
                    after:opacity-30
                    group
                  `}
                >
                  <span className="relative z-10">{useCase.title}</span>
                  <div className="absolute bottom-0 top-0 left-0 right-0 flex items-center justify-center -z-5">
                    <div className={`
                      bg-gradient-to-r from-blue-300 via-blue-200 to-white
                      rounded-full w-40 h-40 transition-all duration-400
                      filter blur-xl opacity-0 group-hover:opacity-50
                      group-hover:w-32 group-hover:h-32
                      animate-spin
                    `} />
                  </div>
                </button>
              ))}
            </div>
            
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