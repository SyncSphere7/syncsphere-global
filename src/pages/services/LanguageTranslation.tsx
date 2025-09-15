
import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import ServiceDemoForm from '../../components/ServiceDemoForm';
import { Languages, CheckCircle2 } from 'lucide-react';

const LanguageTranslation = () => {
  const features = [
    "Real-time translation into multiple languages",
    "Supports Luganda, Runyankore, Luo, Lusoga, Ateso (more languages coming soon)",
    "Easy integration: JavaScript widget for websites, SDK for mobile apps",
    "Usage analytics via a dashboard"
  ];

  return (
    <ServiceLayout 
      title="AI-Powered Language Translation Widget"
      description="Break language barriers and reach more customers with real-time website and app translation."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-white">Break Language Barriers</h2>
          <p className="text-white/70 mb-6">
            SyncSphere's AI-Powered Language Translation Widget helps businesses break language barriers by enabling real-time translation of websites and mobile apps into local languages, ensuring inclusivity for all users.
          </p>
          <p className="text-white/70 mb-6">
            Designed for easy integration, the widget works seamlessly with websites via a JavaScript snippet and with mobile apps through an SDK (iOS/Android), translating content into five Ugandan languages: Luganda, Runyankore, Luo, Lusoga, and Ateso, with plans to expand globally.
          </p>
          <p className="text-white/70 mb-6">
            Perfect for sectors like fintech, health, and e-commerce, this tool can boost user engagement by 20-30% by making your services accessible to non-English-speaking customers.
          </p>
          <p className="text-white/70 mb-6">
            Gain insights with our usage analytics dashboard, and let our team customize the widget to fit your brand's needs.
          </p>
          
          <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-white">Key Features</h3>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 size={20} className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-white/70">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="bg-white/5 border border-white/10 p-8 rounded-lg flex flex-col">
          <div className="mb-6 text-center">
            <Languages size={48} className="text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white">Get Started Today</h2>
            <p className="text-white/70 mt-2">Make your digital content accessible to everyone</p>
          </div>
          
          <div className="mt-auto">
            <ServiceDemoForm 
              serviceName="Language Translation Widget" 
              ctaText="Get a Quote" 
            />
            <p className="text-white/50 text-sm text-center mt-4">
              Our team will analyze your needs and provide a customized solution
            </p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default LanguageTranslation;
