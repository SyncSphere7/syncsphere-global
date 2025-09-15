
import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import ServiceDemoForm from '../../components/ServiceDemoForm';
import { Laptop, CheckCircle2 } from 'lucide-react';

const MicroSaas = () => {
  const benefits = [
    "Low-cost, high-impact software solutions",
    "Rapid deployment with minimal technical setup",
    "Tailored for global business challenges",
    "Scalable pricing models that grow with your business",
    "Continuous updates and improvements"
  ];

  return (
    <ServiceLayout 
      title="Micro SaaS Solutions"
      description="Access affordable, AI-powered micro SaaS tools designed to solve niche business challenges across Africa."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-white">Small Software, Big Impact</h2>
          <p className="text-white/70 mb-6">
            Our micro SaaS solutions provide focused, specialized functionality to address specific business needs without the complexity and cost of enterprise software. Each tool is designed with African businesses in mind, solving regional challenges and adapting to local market demands.
          </p>
          <p className="text-white/70 mb-6">
            From inventory management for small retailers to appointment booking for service providers, our micro SaaS tools deliver powerful functionality with minimal setup and maintenance requirements, making advanced technology accessible to businesses of all sizes.
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
            <Laptop size={48} className="text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white">Find Your Perfect Tool</h2>
            <p className="text-white/70 mt-2">Explore our catalog of micro SaaS solutions</p>
          </div>
          
          <div className="mt-auto">
            <ServiceDemoForm 
              serviceName="Micro SaaS" 
              ctaText="View SaaS Catalog" 
            />
            <p className="text-white/50 text-sm text-center mt-4">
              Browse our growing collection of specialized tools or request a custom solution
            </p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default MicroSaas;
