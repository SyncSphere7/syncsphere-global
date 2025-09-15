
import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import ServiceDemoForm from '../../components/ServiceDemoForm';
import { Smartphone, CheckCircle2, DollarSign } from 'lucide-react';

const AppDevelopment = () => {
  const benefits = [
    "Custom apps with AI features for enhanced functionality and user experience",
    "Cross-platform development for iOS, Android, and web applications",
    "Scalable architecture that grows with your business needs",
    "Offline capabilities and seamless data synchronization",
    "Integration with existing systems and third-party services"
  ];

  const features = [
    "Native iOS and Android app development",
    "Progressive Web App (PWA) development",
    "AI-powered features like chatbots and recommendations",
    "Real-time data synchronization and offline support",
    "Push notifications and user engagement tools",
    "App store submission and maintenance support"
  ];

  return (
    <ServiceLayout
      title="Mobile & Web App Development"
      description="Custom apps with AI features for enhanced functionality. Develop innovative mobile and web applications that give your business a competitive edge."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6 text-white">Innovative Apps That Drive Results</h2>
          <p className="text-white/70 mb-6">
            Our mobile and web app development services combine cutting-edge technology with strategic design to create applications that deliver real business value. Whether you need a customer-facing mobile app, an internal productivity tool, or a comprehensive web application, we build solutions that scale and adapt to your growing needs.
          </p>
          <p className="text-white/70 mb-6">
            What sets our apps apart is the intelligent integration of AI capabilities. From personalized user experiences and predictive features to automated workflows and intelligent chatbots, we create apps that work smarter, not harder, giving your business a significant competitive advantage in the digital marketplace.
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
              <h3 className="text-xl font-semibold text-white">Pricing: $3,000 – $6,000</h3>
            </div>
            <p className="text-white/70">
              App development projects are priced based on complexity, platform, and features. Simple mobile apps start at $3,000, while comprehensive cross-platform solutions with advanced AI features can reach $6,000. All projects include design, development, testing, and deployment support.
            </p>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white/5 border border-white/10 p-8 rounded-lg flex flex-col h-full">
            <div className="mb-6 text-center">
              <Smartphone size={48} className="text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white">Build Your App</h2>
              <p className="text-white/70 mt-2">Create innovative applications that drive business growth</p>
            </div>

            <div className="mt-auto">
              <ServiceDemoForm
                serviceName="App Development"
                ctaText="Start Development"
              />
              <p className="text-white/50 text-sm text-center mt-4">
                Let's discuss your app vision and bring it to life with cutting-edge technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default AppDevelopment;
