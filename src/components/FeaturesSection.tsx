import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const FeaturesSection = () => {
  const buildFeatures = [
    {
      id: "smart-voice",
      title: "Smart Voice Agents",
      description: "Natural language processing with advanced conversation flows, multi-language support with native accent adaptation, and emotion recognition.",
      icon: "🧠"
    },
    {
      id: "omnichannel",
      title: "Omnichannel Integration", 
      description: "Seamless integration with existing CRM systems, support for inbound and outbound campaigns, with real-time monitoring and analytics dashboard.",
      icon: "🔗"
    },
    {
      id: "custom-flows",
      title: "Customizable Call Flows",
      description: "Drag-and-drop conversation builder with dynamic scripting, conditional logic, A/B testing, and custom voice training for brand consistency.",
      icon: "⚙️"
    },
    {
      id: "analytics",
      title: "Advanced Analytics",
      description: "Real-time call performance metrics, detailed conversation transcripts, ROI tracking, and predictive analytics for call outcomes.",
      icon: "📊"
    }
  ];

  const deployFeatures = [
    {
      title: "Voice Technology",
      description: "Crystal-clear voice quality with minimal latency, real-time voice modulation and personalization, advanced noise reduction and echo cancellation.",
      icon: "🎙️"
    },
    {
      title: "Security & Compliance", 
      description: "End-to-end encryption for all communications, GDPR, HIPAA, and PCI DSS compliance, secure data storage and regular security audits.",
      providers: ["GDPR", "HIPAA", "PCI DSS", "ISO 27001", "SOC 2"],
      icon: "🔒"
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