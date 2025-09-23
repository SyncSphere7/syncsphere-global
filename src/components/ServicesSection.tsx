
import React from 'react';
import ServiceCard from './ServiceCard';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'AI Workflow Automation / Business Systems',
    description: 'Automate repetitive tasks and business processes to save time and reduce costs. Streamline operations with intelligent workflow automation that scales with your business.',
    delay: '0.1s',
    link: '/services/automations'
  },
  {
    title: 'AI Chatbots (SMS, WhatsApp, Web, Social)',
    description: '24/7 customer engagement, order handling, inquiries, and recommendations across all channels. Provide instant support and boost customer satisfaction.',
    delay: '0.2s',
    link: '/services/chatbots'
  },
  {
    title: 'AI Voice Agents',
    description: 'Handle calls, route queries, and perform basic transactions with natural-sounding AI voice technology. Reduce call center costs while maintaining quality service.',
    delay: '0.3s',
    link: '/services/voice-agents'
  },
  {
    title: 'Website Design & Revamps',
    description: 'Modern, responsive websites or revamping outdated platforms with AI integration. Create stunning digital experiences that convert visitors into customers.',
    delay: '0.4s',
    link: '/services/web-development'
  },
  {
    title: 'E-commerce Solutions',
    description: 'Online stores with AI integration, payments, and automation. Build scalable e-commerce platforms that drive sales and enhance customer experiences.',
    delay: '0.5s',
    link: '/services/ecommerce'
  },
  {
    title: 'Mobile & Web App Development',
    description: 'Custom apps with AI features for enhanced functionality. Develop innovative mobile and web applications that give your business a competitive edge.',
    delay: '0.6s',
    link: '/services/app-development'
  },
  {
    title: 'Startup MVP Development (30 Days)',
    description: 'From idea to launch in 30 days with flexible payment options. Complete MVP solutions with AI integration, designed to get startups funded and growing fast.',
    delay: '0.7s',
    link: '/startup-mvp'
  },
  {
    title: 'AI Consulting & Ongoing Support',
    description: 'Training, workflow optimization, and strategic guidance. Get expert AI consulting to maximize ROI and ensure long-term success with your AI initiatives.',
    delay: '0.8s',
    link: '/services/consulting'
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-background py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-30 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-white/5 dark:bg-white/5 light:bg-primary/5 rounded-full text-foreground/80 text-sm mb-6 inline-block border border-white/10 dark:border-white/10 light:border-primary/10 backdrop-blur-sm">
            Our Capabilities
          </span>
          <h2 className="text-foreground text-3xl md:text-4xl font-bold">Comprehensive AI Solutions</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link to={service.link} key={index} className="block h-full">
              <ServiceCard
                title={service.title}
                description={service.description}
                delay={service.delay}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
