import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef } from "react";
import Orb from "@/components/ui/orb";

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
      question: "What is Buddhi Voice and how does it work?",
      answer: "Buddhi Voice is a cutting-edge AI-powered voice calling center platform that revolutionizes how businesses handle customer interactions, sales calls, and support operations. Our intelligent voice agents deliver human-like conversations at scale using advanced natural language processing and voice synthesis."
    },
    {
      question: "What are the key features of Buddhi Voice?",
      answer: "Buddhi Voice offers smart voice agents with natural language processing, omnichannel integration with CRM systems, customizable call flows with drag-and-drop builder, and advanced analytics with real-time performance metrics and ROI tracking."
    },
    {
      question: "What use cases does Buddhi Voice support?",
      answer: "Buddhi Voice supports sales & lead qualification, customer support operations, marketing & surveys, and healthcare & appointment management. Our platform is designed to handle complex conversations across various business scenarios."
    },
    {
      question: "How secure is Buddhi Voice?",
      answer: "Buddhi Voice implements enterprise-grade security with end-to-end encryption for all communications, GDPR, HIPAA, and PCI DSS compliance, secure data storage and processing, plus regular security audits and penetration testing."
    },
    {
      question: "What are the pricing plans for Buddhi Voice?",
      answer: "We offer three plans: Starter Plan at ₹9,999/month (up to 1,000 minutes), Professional Plan at ₹24,999/month (up to 5,000 minutes with advanced features), and Enterprise Plan with custom pricing for unlimited minutes and white-label solutions."
    },
    {
      question: "What technology powers Buddhi Voice?",
      answer: "Buddhi Voice is powered by advanced AI & machine learning including Natural Language Understanding (NLU), text-to-speech with human-like voice synthesis, speech-to-text with noise cancellation, and machine learning algorithms for continuous improvement."
    },
    {
      question: "How can Buddhi Voice reduce costs?",
      answer: "Buddhi Voice can reduce staffing costs by up to 70%, increase efficiency with 24/7 availability, improve customer satisfaction with consistent service quality, and provide scalability to handle varying call volumes without additional staffing."
    },
    {
      question: "Can I integrate Buddhi Voice with my existing systems?",
      answer: "Yes! Buddhi Voice offers seamless integration with popular business tools including Salesforce, HubSpot, and Zendesk. We support various CRM platforms and provide custom integrations and API access for enterprise customers."
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
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Title and Description */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Everything You Need to Know About Buddhi's AI Voice Agents
            </h2>
            
            {/* Orb Animation */}
            <div className="w-32 h-32 mx-auto lg:mx-0">
              <Orb 
                hoverIntensity={0.25} 
                rotateOnHover={true}
                forceHoverState={false}
              />
            </div>
          </div>
          
          {/* Right Column - FAQ Accordion */}
          <div>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-lg"
                >
                  <AccordionTrigger className="text-left font-semibold text-lg text-foreground px-6 py-4 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed px-6 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;