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
          <h2 className="text-4xl font-medium text-center text-foreground mb-12">
            Powerful AI Agent Creation Features
          </h2>
          <AgentFeaturesSection />
        </div>

        {/* Deploy Features */}
        <div className="bg-blue-50 rounded-3xl p-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-black mb-6">
              Effortlessly Deploy AI Calls
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* First Card */}
            <Card className="bg-white border-0 rounded-2xl overflow-hidden h-[500px]">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">
                    {deployFeatures[0].title}
                  </h3>
                  <p className="text-blue-700 leading-relaxed">
                    {deployFeatures[0].description}
                  </p>
                </div>
                <div className="bg-blue-50 rounded-lg flex-1 overflow-hidden">
                  <img 
                    src={buddhiCall} 
                    alt="Branded Call ID demonstration"
                    className="w-full h-full object-contain"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Second Card - Wider */}
            <Card className="bg-white border-0 rounded-2xl overflow-hidden h-[500px] lg:col-span-2">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">
                    {deployFeatures[1].title}
                  </h3>
                  <p className="text-blue-700 leading-relaxed mb-4">
                    {deployFeatures[1].description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center opacity-60 mb-4">
                    {deployFeatures[1].providers?.map((provider, i) => (
                      <div key={i} className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">
                        {provider}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg flex-1 overflow-hidden">
                  <video 
                    src={sipTrunkingVideo} 
                    autoPlay 
                    loop 
                    muted 
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Third Card - Wider */}
            <Card className="bg-white border-0 rounded-2xl overflow-hidden h-[500px] lg:col-span-2">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">
                    {deployFeatures[2].title}
                  </h3>
                  <p className="text-blue-700 leading-relaxed">
                    {deployFeatures[2].description}
                  </p>
                </div>
                <div className="bg-blue-50 rounded-lg flex-1 overflow-hidden">
                  <video 
                    src={sipTrunkingVideo} 
                    autoPlay 
                    loop 
                    muted 
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Fourth Card */}
            <Card className="bg-white border-0 rounded-2xl overflow-hidden h-[500px]">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">
                    {deployFeatures[3].title}
                  </h3>
                  <p className="text-blue-700 leading-relaxed">
                    {deployFeatures[3].description}
                  </p>
                </div>
                <div className="bg-blue-50 rounded-lg flex-1 overflow-hidden">
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