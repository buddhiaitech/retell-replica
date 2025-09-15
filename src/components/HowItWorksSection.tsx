import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import buildWorkflow from "@/assets/build-workflow.gif";
import testConversation from "@/assets/test-conversation.gif";
import deployChannels from "@/assets/deploy-channels.gif";
import monitorAnalytics from "@/assets/monitor-analytics.gif";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Build",
      description: "Utilize the voice AI API and our intuitive agent builder to create custom voice AI callers effortlessly.",
      gif: buildWorkflow
    },
    {
      number: "02", 
      title: "Test",
      description: "Perform comprehensive agent testing with built-in LLM features to ensure seamless handling of edge cases.",
      gif: testConversation
    },
    {
      number: "03",
      title: "Deploy", 
      description: "Easily deploy your agents for AI phone calls, web calls, SMS, chat, and more.",
      gif: deployChannels
    },
    {
      number: "04",
      title: "Monitor",
      description: "Artificial Intelligence tracks success rates, latency, and user sentiment through call history dashboard. Quickly identify failed calls.",
      gif: monitorAnalytics
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-6">
            How it Works
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={step.number} className={`border border-border bg-card ${
              index === 0 || index === 3 
                ? "h-[520px] w-[280px] mx-auto" 
                : "h-[450px] w-full"
            }`}>
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-6 mt-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                  {step.description}
                </p>
                <div className={`w-full rounded-lg overflow-hidden border border-border/50 ${
                  index === 0 || index === 3 ? "h-72" : "h-56"
                }`}>
                  <img 
                    src={step.gif} 
                    alt={`${step.title} demonstration`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;