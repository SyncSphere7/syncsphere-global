
import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import ServiceDemoForm from '../../components/ServiceDemoForm';
import { MessageSquare, CheckCircle2, DollarSign } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Chatbots = () => {
  const benefits = [
    "24/7 customer engagement across all major platforms",
    "Handle order processing, inquiries, and recommendations instantly",
    "Reduce customer service costs by up to 70%",
    "Improve response time from hours to seconds",
    "Scale support without increasing headcount"
  ];

  const features = [
    "Multi-channel support (SMS, WhatsApp, Web, Social Media)",
    "Natural language processing for accurate responses",
    "Intelligent escalation to human agents when needed",
    "Analytics dashboard for performance monitoring",
    "Custom branding and personality matching"
  ];

  // Structured data for SEO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Chatbots (SMS, WhatsApp, Web, Social)",
    "description": "24/7 customer engagement, order handling, inquiries, and recommendations across all channels. Provide instant support and boost customer satisfaction.",
    "provider": {
      "@type": "Organization",
      "name": "SyncSphere",
      "url": "https://syncsphereofficial.com",
      "logo": "https://syncsphereofficial.com/syncsphere-logo.png"
    },
    "areaServed": "Worldwide",
    "serviceType": "AI Chatbot Development",
    "offers": {
      "@type": "Offer",
      "priceRange": "$1000-$3000",
      "description": "Chatbot solutions priced based on complexity and number of channels"
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Features",
        "value": "Multi-channel support, Natural language processing, Intelligent escalation, Analytics dashboard, Custom branding"
      },
      {
        "@type": "PropertyValue",
        "name": "Benefits",
        "value": "24/7 customer engagement, 70% cost reduction, Instant response time, Scalable support"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>
      <ServiceLayout
        title="AI Chatbots (SMS, WhatsApp, Web, Social)"
        description="24/7 customer engagement, order handling, inquiries, and recommendations across all channels. Provide instant support and boost customer satisfaction."
      >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6 text-white">Intelligent Customer Engagement</h2>
          <p className="text-white/70 mb-6">
            Our advanced AI chatbots provide seamless customer support across SMS, WhatsApp, web platforms, and social media channels. Using cutting-edge natural language processing, they understand customer intent and deliver personalized, helpful responses that enhance the customer experience.
          </p>
          <p className="text-white/70 mb-6">
            From handling basic inquiries and processing orders to providing product recommendations and managing customer relationships, our chatbots work tirelessly to ensure your customers receive instant, accurate support whenever they need it. They learn from every interaction, continuously improving their effectiveness.
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
              <h3 className="text-xl font-semibold text-white">Pricing: $1,000 – $3,000</h3>
            </div>
            <p className="text-white/70">
              Chatbot solutions are priced based on complexity and number of channels. Basic single-channel chatbots start at $1,000, while comprehensive multi-channel solutions with advanced features can reach $3,000. All solutions include setup, training, and ongoing optimization.
            </p>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white/5 border border-white/10 p-8 rounded-lg flex flex-col h-full">
            <div className="mb-6 text-center">
              <MessageSquare size={48} className="text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white">Transform Customer Support</h2>
              <p className="text-white/70 mt-2">Deploy intelligent chatbots across all channels</p>
            </div>

            <div className="mt-auto">
              <ServiceDemoForm
                serviceName="AI Chatbots"
                ctaText="Get Chatbot Demo"
              />
              <p className="text-white/50 text-sm text-center mt-4">
                Experience our AI chatbots in action and see how they can transform your customer service
              </p>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
    </>
  );
};

export default Chatbots;
