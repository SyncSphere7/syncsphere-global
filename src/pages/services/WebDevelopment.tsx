
import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import ServiceDemoForm from '../../components/ServiceDemoForm';
import { Globe, CheckCircle2, DollarSign } from 'lucide-react';

const WebDevelopment = () => {
  const benefits = [
    "Modern, responsive websites that convert visitors into customers",
    "AI integration for enhanced functionality and user experience",
    "Mobile-first design ensuring perfect performance across all devices",
    "SEO optimization to improve search engine rankings",
    "Ongoing maintenance and performance monitoring"
  ];

  const features = [
    "Custom website design and development",
    "AI chatbot and recommendation engine integration",
    "E-commerce functionality and payment processing",
    "Content management system implementation",
    "Performance optimization and speed enhancements",
    "Analytics and conversion tracking setup"
  ];

  return (
    <ServiceLayout
      title="Website Design & Revamps"
      description="Modern, responsive websites or revamping outdated platforms with AI integration. Create stunning digital experiences that convert visitors into customers."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6 text-white">Elevate Your Digital Presence</h2>
          <p className="text-white/70 mb-6">
            Whether you're launching a new website or modernizing an existing one, our website design and development services combine stunning visuals with powerful functionality. We create websites that not only look professional but also drive business results through strategic design and AI-powered features.
          </p>
          <p className="text-white/70 mb-6">
            Our approach focuses on user experience, conversion optimization, and seamless integration of AI technologies. From intelligent chatbots that improve customer engagement to recommendation engines that boost sales, we build websites that work as hard as your team to grow your business.
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
              <h3 className="text-xl font-semibold text-white">Pricing: $500 – $2,000</h3>
            </div>
            <p className="text-white/70">
              Website projects are priced based on complexity and features. Simple brochure sites start at $500, while comprehensive e-commerce platforms with AI integration can reach $2,000. All projects include design, development, testing, and launch support.
            </p>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white/5 border border-white/10 p-8 rounded-lg flex flex-col h-full">
            <div className="mb-6 text-center">
              <Globe size={48} className="text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white">Transform Your Website</h2>
              <p className="text-white/70 mt-2">Create a digital experience that drives results</p>
            </div>

            <div className="mt-auto">
              <ServiceDemoForm
                serviceName="Website Design"
                ctaText="Start Your Project"
              />
              <p className="text-white/50 text-sm text-center mt-4">
                Let's discuss your vision and create a website that exceeds your expectations
              </p>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default WebDevelopment;
