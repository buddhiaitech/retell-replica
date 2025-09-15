import { ShimmerButton } from "@/components/ui/shimmer-button";
import { AuroraText } from "@/components/ui/aurora-text";
import { useEffect, useRef } from "react";
import { SoundWaveAnimation } from "./SoundWaveAnimation";
import dashboardVideo from "../assets/dashboardvideo.mp4"; // Make sure your video is in the assets folder

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const parallax = scrolled * 0.3;
      
      sectionRef.current.style.setProperty('--scroll-offset', `${parallax * 0.1}px`);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-whiten pd-16">
        {/* Logo now shown in Header */}
        
        {/* Sound Wave Background Animation */}
        <SoundWaveAnimation className="z-10-mt-13 md:-mt-12" />
        
        {/* Content with Enhanced Animations */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-7xl font-bold text-gray-800 mb-8 leading-tight">
              Supercharge your{" "}
              <AuroraText 
                colors={["#60a5fa", "#3b82f6", "#1d4ed8", "#93c5fd"]}
                speed={1.5}
              >
                Call Operations
              </AuroraText>{" "}
              with Voice AI
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-normal">
              Discover the new way to build, test, deploy, and monitor 
              production-ready AI voice agents at scale.
            </p>
            
            <div className="flex justify-center">
              <ShimmerButton 
                shimmerColor="#60a5fa" 
                background="rgba(255, 255, 255, 1)"
                className="px-6 py-4 text-base font-medium text-blue-600"
              >
                TRY FOR FREE
              </ShimmerButton>
            
            </div>
          </div>
        </div>
      </section>

      {/* New Video Section */}
      <section className="relative w-full pt-0 pb-12 -mt-6 px-2 bg-white flex items-center justify-center mb-8 md:mb-12">
        <div className="relative w-full max-w-6xl mx-auto rounded-3xl overflow-hidden mt-4 md:mt-6" 
             style={{ backgroundColor: '#e0f7fa', padding: '1.5rem', border: '3px solid rgb(120, 169, 249)' }}>
          <video 
            className="w-full h-full rounded-2xl" 
            src={dashboardVideo} 
            autoPlay 
            loop 
            muted 
            playsInline 
          
          ></video>
        </div>
      </section>
    </>
  );
};

export default HeroSection;