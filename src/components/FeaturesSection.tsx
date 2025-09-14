import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AgentFeaturesSection from "./AgentFeaturesSection";

const FeaturesSection = () => {
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
        {/* Powerful AI Agent Creation Features */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Powerful AI Agent Creation Features
          </h2>
          <AgentFeaturesSection />
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