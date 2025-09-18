
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section id="home" className="bg-background py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-30 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        <span className="px-4 py-2 bg-white/5 dark:bg-white/5 light:bg-primary/5 rounded-full text-foreground/80 text-sm mb-6 border border-white/10 dark:border-white/10 light:border-primary/10 backdrop-blur-sm animate-fadeIn">
          AI Solutions for a Smarter World
        </span>
        <h1 className="text-foreground text-4xl md:text-6xl font-bold mb-6 animate-fadeIn leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">AI Workflow Automation</span> & Chatbot Development Services
        </h1>
        <p className="text-foreground/80 text-xl md:text-2xl mb-10 max-w-3xl animate-fadeIn" style={{ animationDelay: "0.2s" }}>
          Transform your business with intelligent automation, AI chatbots, and voice agents. 24/7 customer support solutions for global enterprises.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fadeIn" style={{ animationDelay: "0.4s" }}>
          <Link to="/services/chatbots">
            <Button 
              className="group bg-gradient-to-r from-[#0EA5E9] to-primary hover:from-primary hover:to-[#0EA5E9] text-white px-8 py-6 text-lg flex items-center gap-2 border border-primary/30 shadow-lg shadow-primary/20 transition-all duration-300 hover:translate-y-[-2px]" 
            >
              <Rocket className="mr-1 transition-transform duration-300 group-hover:rotate-12" />
              Get Started
              <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
          <a href="#services">
            <Button 
              variant="outline" 
              className="group backdrop-blur-sm bg-white/5 text-foreground border-foreground/20 hover:bg-foreground/10 px-8 py-6 text-lg flex items-center gap-2 shadow-lg shadow-black/5 transition-all duration-300 hover:translate-y-[-2px]"
            >
              <BookOpen className="mr-1 transition-transform duration-300 group-hover:scale-110" />
              Learn More
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
