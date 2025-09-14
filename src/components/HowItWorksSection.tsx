import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Build",
      description: "Utilize the voice AI API and our intuitive agent builder to create custom voice AI callers effortlessly."
    },
    {
      number: "02", 
      title: "Test",
      description: "Perform comprehensive agent testing with built-in LLM features to ensure seamless handling of edge cases."
    },
    {
      number: "03",
      title: "Deploy", 
      description: "Easily deploy your agents for AI phone calls, web calls, SMS, chat, and more."
    },
    {
      number: "04",
      title: "Monitor",
      description: "Artificial Intelligence tracks success rates, latency, and user sentiment through call history dashboard. Quickly identify failed calls."
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
            <Card key={step.number} className="gradient-card shadow-card border-0 group hover:shadow-lg transition-smooth">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <span className="text-6xl font-bold text-retell-blue/20 group-hover:text-retell-blue/40 transition-smooth">
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