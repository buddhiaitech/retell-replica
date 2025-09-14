import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AgentFeaturesSection from "./AgentFeaturesSection";

const FeaturesSection = () => {
  const deployFeatures = [
    {
      title: "Display Branded Call ID",
      description: "Enable Retell AI's Branded Call feature to unlock new levels of customer trust and satisfaction for outbound call operations.",
      icon: "📱",
      hasImage: true
    },
    {
      title: "Using SIP Trunking Connect to Any Telephony",
      description: "Use your existing phone numbers or your familiar VOIP providers. You can connect to any telephony using Retell SIP Trunking.",
      providers: ["RingCentral", "Twilio", "Vonage", "Telnyx", "Plivo", "RingCentral", "TeleX"],
      icon: "📞"
    },
    {
      title: "Batch Calling",
      description: "Effortlessly run batch call campaigns without concurrency limits, with detailed conversion tracking available after each campaign.",
      icon: "📊",
      hasImage: true
    },
    {
      title: "Verified Phone Numbers",
      description: "Build customer trust with customers with verified phone numbers that prevent your calls being labeled as spam.",
      icon: "✅",
      hasImage: true
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
        <div className="bg-slate-900 rounded-3xl p-12">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-6 py-2 text-sm font-medium bg-white/10 text-white border-0">
              Deploy
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Effortlessly Deploy AI Calls
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {deployFeatures.map((feature, index) => (
              <Card key={index} className="bg-white border-0 rounded-2xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-2xl">{feature.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  
                  {feature.providers && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2 justify-center opacity-40">
                        {feature.providers.map((provider, i) => (
                          <div key={i} className="text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded">
                            {provider}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {feature.hasImage && (
                    <div className="mt-4 bg-slate-100 rounded-lg h-24 flex items-center justify-center">
                      <div className="w-16 h-20 bg-slate-800 rounded-lg flex items-center justify-center">
                        <div className="w-12 h-16 bg-slate-600 rounded-md"></div>
                      </div>
                    </div>
                  )}
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