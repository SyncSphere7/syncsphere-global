
import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import ServiceDemoForm from '../../components/ServiceDemoForm';
import { Settings, CheckCircle2, DollarSign } from 'lucide-react';

const Automations = () => {
  const benefits = [
    "Reduce operational costs by up to 60% through intelligent automation",
    "Eliminate human error in repetitive business processes",
    "Scale operations efficiently without proportional headcount increases",
    "Free up valuable staff time for strategic, high-impact activities",
    "Seamless integration with existing business systems and workflows"
  ];

  const features = [
    "Custom workflow automation design",
    "AI-powered decision making in automated processes",
    "Real-time monitoring and performance analytics",
    "Scalable architecture for growing businesses",
    "Comprehensive documentation and staff training"
  ];

  return (
    <ServiceLayout
      title="AI Workflow Automation / Business Systems"
      description="Transform your business operations with intelligent automation that saves time, reduces costs, and scales with your growth."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6 text-white">Streamline Operations, Maximize Efficiency</h2>
          <p className="text-white/70 mb-6">
            Our AI Workflow Automation solutions revolutionize how businesses operate by intelligently automating repetitive tasks, complex business processes, and decision-making workflows. From invoice processing and customer onboarding to inventory management and quality control, we create custom automation systems that deliver measurable ROI.
          </p>
          <p className="text-white/70 mb-6">
            Each solution is meticulously designed to integrate with your existing systems, ensuring seamless operation while dramatically reducing manual effort and operational costs. Our AI-powered automation goes beyond simple task automation - it includes intelligent decision-making capabilities that improve accuracy and efficiency.
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
              <h3 className="text-xl font-semibold text-white">Pricing: $1,000 – $4,000</h3>
            </div>
            <p className="text-white/70">
              Our automation solutions are priced based on complexity and scope. Simple workflow automations start at $1,000, while comprehensive enterprise automation systems can reach $4,000. All solutions include implementation, training, and ongoing support.
            </p>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white/5 border border-white/10 p-8 rounded-lg flex flex-col h-full">
            <div className="mb-6 text-center">
              <Settings size={48} className="text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white">Ready to Automate?</h2>
              <p className="text-white/70 mt-2">Let's identify automation opportunities in your business</p>
            </div>

            <div className="mt-auto">
              <ServiceDemoForm
                serviceName="AI Workflow Automation"
                ctaText="Get Automation Assessment"
              />
              <p className="text-white/50 text-sm text-center mt-4">
                Our experts will analyze your workflows and design custom automation solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default Automations;
