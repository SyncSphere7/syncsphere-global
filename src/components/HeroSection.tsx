
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Rocket, BookOpen, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  personalization?: {
    greeting: string;
    cta: string;
    urgency: string;
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({ personalization }) => {
  return (
    <section id="home" className="bg-background py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-30 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        {personalization?.urgency ? (
          <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2 text-sm mb-4 animate-fadeIn">
            {personalization.urgency}
          </Badge>
        ) : null}
        <span className="px-4 py-2 bg-white/5 dark:bg-white/5 light:bg-primary/5 rounded-full text-foreground/80 text-sm mb-6 border border-white/10 dark:border-white/10 light:border-primary/10 backdrop-blur-sm animate-fadeIn">
          AI Solutions for a Smarter World
        </span>
        <h1 className="text-foreground text-4xl md:text-6xl font-bold mb-6 animate-fadeIn leading-tight">
          {personalization?.greeting.includes('from') ? (
            <>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">
                {personalization.greeting.split(' ').slice(0, 2).join(' ')}
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                AI Solutions
              </span>
            </>
          ) : (
            <>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">AI Automation</span> & Startup MVP Development Services
            </>
          )}
        </h1>
        <p className="text-foreground/80 text-xl md:text-2xl mb-10 max-w-3xl animate-fadeIn" style={{ animationDelay: "0.2s" }}>
          {personalization?.greeting.includes('from') ? 
            `${personalization.greeting} From £1,500 pilot programs to complete MVP solutions in 30 days. Transform your business with intelligent automation, AI chatbots, voice agents, and startup-ready applications.` :
            'From £1,500 pilot programs to complete MVP solutions in 30 days. Transform your business with intelligent automation, AI chatbots, voice agents, and startup-ready applications.'
          }
        </p>
        <div className="flex flex-col items-center gap-4 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/447424819094?text=Hi! I'd like to start with a £1,500 AI pilot program to test your solutions." target="_blank" rel="noopener noreferrer">
              <Button 
                className="group bg-gradient-to-r from-[#0EA5E9] to-primary hover:from-primary hover:to-[#0EA5E9] text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg flex items-center gap-2 border border-primary/30 shadow-lg shadow-primary/20 transition-all duration-300 hover:translate-y-[-2px] w-full sm:w-auto" 
              >
                <Rocket className="mr-1 transition-transform duration-300 group-hover:rotate-12" />
                Start Pilot (£1,500)
                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="https://wa.me/447424819094?text=Hi! I'd like to discuss MVP development for my startup idea." target="_blank" rel="noopener noreferrer">
              <Button 
                className="group bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg flex items-center gap-2 border border-primary/30 shadow-lg shadow-primary/20 transition-all duration-300 hover:translate-y-[-2px] w-full sm:w-auto" 
              >
                <Rocket className="mr-1 transition-transform duration-300 group-hover:rotate-12" />
                Start Your MVP
                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
          
          {/* Secondary Consultation Button */}
          <div className="flex justify-center">
            <a href="https://wa.me/447424819094?text=Hi! I'd like to learn more about your AI solutions and pricing." target="_blank" rel="noopener noreferrer">
              <Button 
                variant="outline" 
                className="group backdrop-blur-sm bg-white/5 text-foreground border-foreground/20 hover:bg-foreground/10 px-6 md:px-8 py-3 md:py-4 text-sm md:text-base flex items-center gap-2 shadow-lg shadow-black/5 transition-all duration-300 hover:translate-y-[-2px]"
              >
                {personalization?.cta === 'WhatsApp Us Now' ? (
                  <>
                    <Phone className="h-4 w-4" />
                    WhatsApp Us Now
                  </>
                ) : (
                  <>
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp Consultation
                  </>
                )}
              </Button>
            </a>
          </div>
        </div>
        <div className="mt-4 animate-fadeIn" style={{ animationDelay: "0.6s" }}>
          <p className="text-foreground/60 text-sm">
            Instant response on WhatsApp • Quick 7-14 day delivery • Credits toward full project
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
