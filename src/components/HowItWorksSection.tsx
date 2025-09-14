import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Setup",
      description: "Configure your AI voice agents with our drag-and-drop conversation builder and custom voice training for brand consistency."
    },
    {
      number: "02", 
      title: "Integrate",
      description: "Seamlessly integrate with your existing CRM systems, business tools, and telephony infrastructure for unified operations."
    },
    {
      number: "03",
      title: "Deploy", 
      description: "Launch your intelligent voice agents for inbound and outbound calling campaigns with real-time monitoring capabilities."
    },
    {
      number: "04",
      title: "Optimize",
      description: "Analyze performance metrics, conversation transcripts, and ROI tracking to continuously improve call outcomes and efficiency."
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-6 py-2 text-sm font-medium bg-retell-cyan/20 text-retell-blue border-0">
            Value
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How it Works
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={step.number} className="border border-border">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <span className="text-6xl font-bold text-muted-foreground">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;