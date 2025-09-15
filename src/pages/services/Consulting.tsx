import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import ServiceDemoForm from '../../components/ServiceDemoForm';
import { Users, CheckCircle2, DollarSign } from 'lucide-react';

const Consulting = () => {
  const benefits = [
    "Get strategic AI guidance from industry experts",
    "Optimize existing AI implementations for better ROI",
    "Develop comprehensive AI adoption roadmaps",
    "Receive ongoing support and performance monitoring",
    "Access cutting-edge AI knowledge and best practices"
  ];

  const services = [
    "AI strategy development and roadmap planning",
    "Workflow analysis and optimization recommendations",
    "Technology stack assessment and modernization",
    "Team training and change management support",
    "Performance monitoring and continuous improvement",
    "ROI measurement and reporting"
  ];

  return (
    <ServiceLayout
      title="AI Consulting & Ongoing Support"
      description="Expert AI consulting services to help you maximize ROI, optimize workflows, and ensure successful AI implementation with strategic guidance and ongoing support."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6 text-white">Expert Guidance for AI Success</h2>
          <p className="text-white/70 mb-6">
            Our AI consulting services provide comprehensive support for businesses looking to leverage artificial intelligence effectively. Whether you're just starting your AI journey or optimizing existing implementations, our expert consultants work closely with your team to ensure successful outcomes and maximum return on investment.
          </p>
          <p className="text-white/70 mb-6">
            We don't just implement AI solutions – we help you understand how to integrate them strategically into your business operations. Our consulting approach focuses on sustainable growth, measurable results, and building internal capabilities for long-term AI success.
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
              <h3 className="text-xl font-semibold mb-4 text-white">Consulting Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 size={20} className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-white/70">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/20 to-blue-300/20 border border-primary/30 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <DollarSign size={24} className="text-primary mr-3" />
              <h3 className="text-xl font-semibold text-white">Pricing: $1,500 – $4,000/month</h3>
            </div>
            <p className="text-white/70">
              Our consulting retainers are flexible and scalable based on your needs. Basic strategic consulting starts at $1,500/month, while comprehensive ongoing support with dedicated consultants can reach $4,000/month. All retainers include regular strategy sessions and priority support.
            </p>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white/5 border border-white/10 p-8 rounded-lg flex flex-col h-full">
            <div className="mb-6 text-center">
              <Users size={48} className="text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white">Get Expert Guidance</h2>
              <p className="text-white/70 mt-2">Accelerate your AI success with professional consulting</p>
            </div>

            <div className="mt-auto">
              <ServiceDemoForm
                serviceName="AI Consulting"
                ctaText="Schedule Strategy Session"
              />
              <p className="text-white/50 text-sm text-center mt-4">
                Our consultants will assess your AI readiness and develop a customized success plan
              </p>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default Consulting;
