import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const FeaturesSection = () => {
  const buildFeatures = [
    {
      id: "knowledge-base",
      title: "Auto-Sync Knowledge Base",
      description: "Your AI agents stay up-to-date effortlessly by syncing directly with your company's knowledge base. No manual updates required.",
      icon: "🧠"
    },
    {
      id: "call-transfer",
      title: "Powerful Call Transfer Feature", 
      description: "Easily set up warm transfers with handoff messages so the next agent is always prepared. Setup multiple call transfers based on your needs.",
      icon: "📞"
    },
    {
      id: "appointment-booking",
      title: "Easy Appointment Booking",
      description: "Let your AI phone agents schedule meetings in seconds with simple, natural language. Integrate tools like Cal.com to ensure appointments are automatically logged.",
      icon: "📅"
    },
    {
      id: "navigate-ivr",
      title: "Navigate IVR",
      description: "When encounter IVR systems, Retell Agents has the ability to press the correct digits to the right destination.",
      icon: "🎯"
    }
  ];

  const deployFeatures = [
    {
      title: "Display Branded Call ID",
      description: "Enable Retell AI's Branded Call feature to unlock new levels of customer trust and satisfaction for outbound call operations.",
      icon: "🏷️"
    },
    {
      title: "Using SIP Trunking Connect to Any Telephony", 
      description: "Use your existing phone numbers or your familiar VOIP providers. You can connect to any telephony using Retell SIP Trunking.",
      providers: ["Twilio", "Vonage", "Telnyx", "Plivo", "RingCentral"],
      icon: "🔗"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Build Features */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-6 py-2 text-sm font-medium bg-retell-cyan/20 text-retell-blue border-0">
              Build
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Powerful AI Agent Creation Features
            </h2>
          </div>

          <Tabs defaultValue="knowledge-base" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 bg-muted">
              {buildFeatures.map((feature) => (
                <TabsTrigger 
                  key={feature.id} 
                  value={feature.id}
                  className="text-xs lg:text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-smooth"
                >
                  {feature.title.split(' ').slice(0, 2).join(' ')}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {buildFeatures.map((feature) => (
              <TabsContent key={feature.id} value={feature.id} className="mt-8">
                <Card className="border border-border">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="text-4xl mb-4">{feature.icon}</div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">
                          {feature.title}
                        </h3>
                        <p className="text-lg text-muted-foreground mb-6">
                          {feature.description}
                        </p>
                        <Button 
                          variant="outline" 
                          className="border-primary text-primary"
                        >
                          Learn More
                        </Button>
                      </div>
                      <div className="relative">
                        <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
                          <span className="text-6xl">{feature.icon}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Deploy Features */}
        <div>
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-6 py-2 text-sm font-medium bg-retell-cyan/20 text-retell-blue border-0">
              Deploy
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Effortlessly Deploy AI Calls
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {deployFeatures.map((feature, index) => (
              <Card key={index} className="border border-border">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    {feature.description}
                  </p>
                  
                  {feature.providers && (
                    <div className="mb-6">
                      <p className="text-sm font-medium text-muted-foreground mb-3">Supported Providers:</p>
                      <div className="flex flex-wrap gap-2">
                        {feature.providers.concat(feature.providers).map((provider, i) => (
                          <Badge key={i} variant="secondary" className="bg-muted text-muted-foreground">
                            {provider}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <Button 
                    variant="outline" 
                    className="border-primary text-primary"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;