import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import ServiceDemoForm from '../../components/ServiceDemoForm';
import { ShoppingCart, CheckCircle2, DollarSign } from 'lucide-react';

const Ecommerce = () => {
  const benefits = [
    "Increase online sales by up to 40% with AI-powered recommendations",
    "Reduce cart abandonment by 25% through intelligent retargeting",
    "Automate inventory management and order fulfillment processes",
    "Personalize customer experiences for higher conversion rates",
    "Scale operations seamlessly as your business grows"
  ];

  const features = [
    "AI-powered product recommendations and personalization",
    "Automated inventory tracking and low-stock alerts",
    "Intelligent pricing optimization and dynamic discounts",
    "Multi-channel integration (web, mobile, social commerce)",
    "Advanced analytics and customer behavior insights",
    "Secure payment gateway integration and fraud detection"
  ];

  return (
    <ServiceLayout
      title="E-commerce Solutions"
      description="Build scalable online stores with AI integration, automated payments, and intelligent features that drive sales and enhance customer experiences."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6 text-white">Transform Your Online Business</h2>
          <p className="text-white/70 mb-6">
            Our AI-powered e-commerce solutions go beyond traditional online stores. We create intelligent platforms that understand customer behavior, automate operations, and drive conversions through personalized experiences. From product recommendations to automated inventory management, our solutions help e-commerce businesses scale efficiently while maximizing revenue.
          </p>
          <p className="text-white/70 mb-6">
            Whether you're launching a new online store or upgrading an existing platform, we integrate cutting-edge AI technologies that analyze customer data, predict buying patterns, and automate routine tasks. This results in higher sales, lower operational costs, and exceptional customer experiences that keep buyers coming back.
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
              <h3 className="text-xl font-semibold text-white">Pricing: $2,500 – $5,000</h3>
            </div>
            <p className="text-white/70">
              E-commerce solutions are priced based on platform complexity, number of products, and AI features required. Basic stores start at $2,500, while advanced platforms with comprehensive AI integration can reach $5,000. All solutions include setup, AI integration, and ongoing optimization.
            </p>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white/5 border border-white/10 p-8 rounded-lg flex flex-col h-full">
            <div className="mb-6 text-center">
              <ShoppingCart size={48} className="text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white">Launch Your Store</h2>
              <p className="text-white/70 mt-2">Transform your business with AI-powered e-commerce</p>
            </div>

            <div className="mt-auto">
              <ServiceDemoForm
                serviceName="E-commerce Solutions"
                ctaText="Get E-commerce Consultation"
              />
              <p className="text-white/50 text-sm text-center mt-4">
                Our experts will design an AI-powered e-commerce solution tailored to your business
              </p>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default Ecommerce;
