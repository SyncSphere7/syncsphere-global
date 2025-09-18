
import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import ServiceDemoForm from '../../components/ServiceDemoForm';
import { Phone, CheckCircle2, DollarSign } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const VoiceAgents = () => {
  const benefits = [
    "Handle calls, route queries, and perform basic transactions autonomously",
    "Reduce call center costs by up to 60% while maintaining quality",
    "Provide 24/7 service without staffing limitations",
    "Ensure consistent customer experience across all interactions",
    "Scale call handling capacity instantly as demand grows"
  ];

  const features = [
    "Natural language processing for human-like conversations",
    "Intelligent call routing and escalation protocols",
    "Multi-language support for global operations",
    "Integration with existing CRM and business systems",
    "Real-time analytics and performance monitoring"
  ];

  // Enhanced structured data for SEO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Voice Agent Development Services",
    "description": "Professional AI voice agent development for call centers and customer service. Natural-sounding voice technology that handles calls, routes queries, and processes transactions autonomously.",
    "provider": {
      "@type": "Organization",
      "name": "SyncSphere AI Agency",
      "url": "https://syncsphereofficial.com",
      "logo": "https://syncsphereofficial.com/syncsphere-logo.png"
    },
    "offers": {
      "@type": "Offer",
      "priceRange": "£8000-£76500",
      "description": "AI voice agent development: Starter £8,000-£16,200, Professional £16,200-£36,000, Enterprise £36,000-£76,500"
    }
  };

  return (
    <>
      <Helmet>
        <title>AI Voice Agent Development | Call Center Automation | SyncSphere</title>
        <meta name="description" content="Professional AI voice agent development services. Automate call centers, reduce costs by 60%, handle calls 24/7. Natural voice technology from £8,000." />
        <meta name="keywords" content="AI voice agents, voice agent development, call center automation, AI phone systems, automated customer service, voice AI technology" />
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>
      <ServiceLayout
        title="AI Voice Agents"
        description="Handle calls, route queries, and perform basic transactions with natural-sounding AI voice technology. Reduce call center costs while maintaining quality service."
      >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6 text-white">Revolutionary Voice Technology</h2>
          <p className="text-white/70 mb-6">
            Our AI voice agents combine advanced speech recognition, natural language understanding, and conversational AI to deliver human-like interactions over the phone. They can handle complex customer inquiries, process transactions, schedule appointments, and provide detailed product information with remarkable accuracy.
          </p>
          <p className="text-white/70 mb-6">
            Unlike traditional IVR systems, our voice agents understand context, remember conversation history, and can handle nuanced customer requests. They seamlessly escalate to human agents when needed while providing instant responses for routine inquiries, dramatically improving both customer satisfaction and operational efficiency.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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

            <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-white">What's Included</h3>
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

          <div className="bg-gradient-to-r from-primary/20 to-blue-300/20 border border-primary/30 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <DollarSign size={24} className="text-primary mr-3" />
              <h3 className="text-xl font-semibold text-white">Pricing: $1,500 – $4,000</h3>
            </div>
            <p className="text-white/70">
              Voice agent solutions are priced based on call volume and complexity. Basic implementations start at $1,500, while comprehensive enterprise solutions with advanced features can reach $4,000. All solutions include setup, voice training, and ongoing optimization.
            </p>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white/5 border border-white/10 p-8 rounded-lg flex flex-col h-full">
            <div className="mb-6 text-center">
              <Phone size={48} className="text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white">Experience Voice AI</h2>
              <p className="text-white/70 mt-2">Transform your call center with intelligent voice agents</p>
            </div>

            <div className="mt-auto">
              <div className="space-y-3">
                <a href="https://wa.me/447424819094?text=Hi!%20I'd%20like%20to%20start%20with%20a%20£1,500%20AI%20voice%20agent%20pilot%20program." target="_blank" rel="noopener noreferrer">
                  <button className="w-full bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                    🎤 Start Voice Agent Pilot (£1,500)
                  </button>
                </a>
                <a href="https://wa.me/447424819094?text=Hi!%20I'd%20like%20to%20discuss%20AI%20voice%20agent%20solutions%20for%20my%20business." target="_blank" rel="noopener noreferrer">
                  <button className="w-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg font-medium transition-colors border border-white/20">
                    💬 WhatsApp Consultation
                  </button>
                </a>
                <ServiceDemoForm
                  serviceName="AI Voice Agents"
                  ctaText="📧 Send Detailed Requirements"
                />
              </div>
              <p className="text-white/50 text-xs text-center mt-3">
                WhatsApp for instant response • Form for detailed requirements
              </p>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
    </>
  );
};

export default VoiceAgents;
