import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef } from "react";

const FAQSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const parallax = scrolled * 0.5;
      
      sectionRef.current.style.setProperty('--scroll-offset', `${parallax * 0.1}px`);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const faqs = [
    {
      question: "What is Retell AI and how does it work?",
      answer: "Retell AI is a comprehensive platform for building, testing, deploying, and monitoring production-ready AI voice agents at scale. Our platform uses advanced natural language processing and voice synthesis to create human-like conversational experiences for your customers."
    },
    {
      question: "How quickly can I get started with Retell AI?",
      answer: "You can get started in minutes! Simply sign up for our free trial, use our intuitive agent builder to create your first voice agent, test it with our built-in tools, and deploy it across multiple channels including phone calls, web calls, and SMS."
    },
    {
      question: "What types of use cases does Retell AI support?",
      answer: "Retell AI supports a wide range of use cases including customer service, appointment setting, lead qualification, surveys, debt collection, receptionist services, and more. Our platform is flexible enough to handle any conversational AI scenario."
    },
    {
      question: "Can I integrate Retell AI with my existing systems?",
      answer: "Yes! Retell AI offers robust API integrations and supports popular telephony providers like Twilio, Vonage, Telnyx, Plivo, and RingCentral. You can also integrate with your CRM, calendar systems, and knowledge bases for seamless operation."
    },
    {
      question: "How does pricing work for Retell AI?",
      answer: "We offer flexible pricing based on your usage needs. Start with our free trial to test the platform, then choose from our scalable plans that grow with your business. Contact our sales team for enterprise pricing and custom solutions."
    },
    {
      question: "Is my data secure with Retell AI?",
      answer: "Absolutely! We implement enterprise-grade security measures including end-to-end encryption, secure data centers, compliance with industry standards, and regular security audits. Your data privacy and security are our top priorities."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide comprehensive support including detailed documentation, video tutorials, community forums, and direct customer support. Enterprise customers also get dedicated account management and priority support."
    },
    {
      question: "Can I customize the voice and personality of my AI agents?",
      answer: "Yes! You can fully customize your AI agents' voice, tone, personality, and conversation flow. Our platform supports multiple voice options and allows you to train agents with your specific brand voice and communication style."
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 parallax-slow">
        <div className="absolute top-10 left-10 w-32 h-32 bg-retell-cyan/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-retell-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 px-8 py-3 text-base font-medium bg-retell-cyan/20 text-retell-blue border-0 animate-fade-in">
            FAQ
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-retell-blue to-retell-cyan bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Everything you need to know about Retell AI and how it can transform your business operations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass border-0 shadow-2xl animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border border-border/50 rounded-lg px-6 py-2 hover:shadow-lg transition-all duration-300 hover:border-retell-blue/30 group animate-fade-in"
                    style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                  >
                    <AccordionTrigger className="text-left font-semibold text-lg text-foreground hover:text-primary transition-all duration-300 hover:no-underline group-hover:translate-x-2">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-4 animate-accordion-down">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '1.6s' }}>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-8">
              Our team is here to help you get started with Retell AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-retell-blue hover:bg-retell-blue/90 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Contact Support
              </button>
              <button className="px-8 py-4 border-2 border-retell-blue text-retell-blue hover:bg-retell-blue hover:text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;