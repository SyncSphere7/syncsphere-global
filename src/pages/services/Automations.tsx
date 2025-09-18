import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import ServiceDemoForm from '../../components/ServiceDemoForm';
import { Zap, CheckCircle2, DollarSign } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Automations = () => {
  const benefits = [
    "Automate repetitive tasks and business processes to save time and reduce costs",
    "Reduce operational costs by up to 80% through intelligent automation",
    "Eliminate human errors and ensure consistent process execution",
    "Scale operations without increasing headcount",
    "Free up staff for strategic, high-value activities"
  ];

  const features = [
    "Workflow automation and business process optimization",
    "Document processing and data extraction automation",
    "CRM and ERP system integrations",
    "Email marketing and lead nurturing automation",
    "Inventory management and order processing automation"
  ];

  // Enhanced structured data for SEO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Workflow Automation Services",
    "description": "Professional AI workflow automation and business process automation services. Automate repetitive tasks, reduce costs by 80%, and scale operations with intelligent automation solutions.",
    "provider": {
      "@type": "Organization",
      "name": "SyncSphere AI Agency",
      "url": "https://syncsphereofficial.com",
      "logo": "https://syncsphereofficial.com/syncsphere-logo.png"
    },
    "areaServed": ["United Kingdom", "United States", "European Union"],
    "serviceType": "Business Process Automation",
    "offers": {
      "@type": "Offer",
      "priceRange": "£6400-£67500",
      "description": "AI workflow automation services: Starter £6,400-£13,500, Professional £13,500-£31,500, Enterprise £31,500-£67,500",
      "availability": "InStock",
      "validFrom": "2024-01-01"
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Cost Reduction",
        "value": "Up to 80% operational cost reduction"
      },
      {
        "@type": "PropertyValue",
        "name": "ROI Timeline",
        "value": "3-6 months payback period"
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://syncsphereofficial.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://syncsphereofficial.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "AI Workflow Automation",
        "item": "https://syncsphereofficial.com/services/automations"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>AI Workflow Automation Services | Business Process Automation | SyncSphere</title>
        <meta name="description" content="Professional AI workflow automation services. Automate business processes, reduce costs by 80%, eliminate errors. UK/US/EU pricing from £6,400. Get started free." />
        <meta name="keywords" content="AI workflow automation, business process automation, workflow automation services, automated business processes, intelligent automation, RPA services" />
        <link rel="canonical" href="https://syncsphereofficial.com/services/automations" />
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      <ServiceLayout
        title="AI Workflow Automation / Business Systems"
        description="Automate repetitive tasks and business processes to save time and reduce costs. Professional workflow automation solutions with 80% cost reduction guarantee."
      >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6 text-white">Intelligent Business Process Automation</h2>
          <p className="text-white/70 mb-6">
            Transform your business operations with our advanced AI workflow automation solutions. We design and implement intelligent automation systems that handle repetitive tasks, streamline complex processes, and integrate seamlessly with your existing business systems.
          </p>
          <p className="text-white/70 mb-6">
            Our automation solutions use cutting-edge AI and machine learning to understand your business processes, identify optimization opportunities, and create custom workflows that adapt and improve over time. From document processing to customer onboarding, we automate the tasks that consume your team's valuable time.
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
              <h3 className="text-xl font-semibold text-white">Pricing: £6,400 – £67,500</h3>
            </div>
            <p className="text-white/70">
              Workflow automation solutions are priced based on complexity and scope. Starter implementations begin at £6,400, Professional solutions range £13,500-£31,500, while Enterprise-grade automation reaches £67,500. All solutions include setup, training, and ongoing optimization with guaranteed ROI within 6 months.
            </p>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white/5 border border-white/10 p-8 rounded-lg flex flex-col h-full">
            <div className="mb-6 text-center">
              <Zap size={48} className="text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white">Automate Your Business</h2>
              <p className="text-white/70 mt-2">Transform operations with intelligent workflow automation</p>
            </div>

            <div className="mt-auto">
              <ServiceDemoForm
                serviceName="AI Workflow Automation"
                ctaText="Get Automation Demo"
              />
              <p className="text-white/50 text-sm text-center mt-4">
                See how our AI automation can transform your business processes and reduce costs by 80%
              </p>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
    </>
  );
};

export default Automations;