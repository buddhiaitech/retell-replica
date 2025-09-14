import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AgentFeaturesSection from "./AgentFeaturesSection";
import buddhiCall from "@/assets/buddhi-call.png";
import sipTrunkingVideo from "@/assets/sip-trunking-video.mp4";
import verifiedNumbers from "@/assets/verified-numbers.gif";

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

          <div className="grid grid-cols-2 gap-6">
            {/* First Card - Small */}
            <Card className="bg-white border-0 rounded-2xl overflow-hidden row-span-1">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-2xl">{deployFeatures[0].icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {deployFeatures[0].title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {deployFeatures[0].description}
                    </p>
                  </div>
                </div>
                <div className="mt-4 bg-slate-100 rounded-lg h-32 overflow-hidden">
                  <img 
                    src={buddhiCall} 
                    alt="Branded Call ID demonstration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Second Card - Large */}
            <Card className="bg-white border-0 rounded-2xl overflow-hidden row-span-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-2xl">{deployFeatures[1].icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {deployFeatures[1].title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {deployFeatures[1].description}
                    </p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 justify-center opacity-40 mb-4">
                    {deployFeatures[1].providers?.map((provider, i) => (
                      <div key={i} className="text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded">
                        {provider}
                      </div>
                    ))}
                  </div>
                  <div className="bg-slate-100 rounded-lg h-32 overflow-hidden">
                    <video 
                      src={sipTrunkingVideo} 
                      autoPlay 
                      loop 
                      muted 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Third Card - Large */}
            <Card className="bg-white border-0 rounded-2xl overflow-hidden row-span-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-2xl">{deployFeatures[2].icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {deployFeatures[2].title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {deployFeatures[2].description}
                    </p>
                  </div>
                </div>
                <div className="mt-4 bg-slate-100 rounded-lg h-48 flex items-center justify-center">
                  <div className="w-24 h-32 bg-slate-800 rounded-lg flex items-center justify-center">
                    <div className="w-20 h-28 bg-slate-600 rounded-md"></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fourth Card - Small */}
            <Card className="bg-white border-0 rounded-2xl overflow-hidden row-span-1">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-2xl">{deployFeatures[3].icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {deployFeatures[3].title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {deployFeatures[3].description}
                    </p>
                  </div>
                </div>
                <div className="mt-4 bg-slate-100 rounded-lg h-32 overflow-hidden">
                  <img 
                    src={verifiedNumbers} 
                    alt="Verified Phone Numbers demonstration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;