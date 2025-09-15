
import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import ServiceDemoForm from '../../components/ServiceDemoForm';
import { Bot, CheckCircle2 } from 'lucide-react';

const AIAgents = () => {
  const benefits = [
    "Autonomous decision-making capabilities",
    "Integration with multiple data sources",
    "Self-improving through continuous learning",
    "Ability to perform complex multi-step tasks",
    "Adaptable to changing business conditions"
  ];

  return (
    <ServiceLayout 
      title="AI Agents (Agentic AI)"
      description="Leverage agentic AI to make autonomous decisions, optimize workflows, and drive innovation in your operations."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-white">The Future of Business Intelligence</h2>
          <p className="text-white/70 mb-6">
            Our agentic AI systems go beyond simple automation, employing advanced artificial intelligence to perform complex tasks, make decisions, and solve problems with minimal human guidance. These autonomous agents can analyze data, generate insights, and take actions to optimize your business processes.
          </p>
          <p className="text-white/70 mb-6">
            From supply chain optimization to market analysis and strategic planning, agentic AI represents the cutting edge of business intelligence, providing capabilities that were previously impossible without large teams of specialized analysts.
          </p>
          
          <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-white">Key Benefits</h3>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 size={20} className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-white/70">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="bg-white/5 border border-white/10 p-8 rounded-lg flex flex-col">
          <div className="mb-6 text-center">
            <Bot size={48} className="text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white">Discover Agentic AI</h2>
            <p className="text-white/70 mt-2">See how autonomous AI agents can transform your business</p>
          </div>
          
          <div className="mt-auto">
            <ServiceDemoForm 
              serviceName="AI Agent" 
              ctaText="Schedule a Consultation" 
            />
            <p className="text-white/50 text-sm text-center mt-4">
              Our AI specialists will assess your needs and demonstrate relevant agent capabilities
            </p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default AIAgents;
