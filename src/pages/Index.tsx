
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CaseStudiesSection from '../components/CaseStudiesSection';
import EnterpriseExpertise from '../components/EnterpriseExpertise';
import ProcessSection from '../components/ProcessSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import AskAIButton from '../components/AskAIButton';

const Index = () => {
  // JSON-LD structured data for the homepage
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "SyncSphere AI Global Agency",
    "description": "SyncSphere delivers professional AI solutions including AI chatbots, voice agents, automations, micro-SaaS, and AI agents for businesses of all sizes globally.",
    "url": "https://syncsphereofficial.com",
    "logo": "https://syncsphereofficial.com/SyncSphere%20logo.png",
    "sameAs": [
      "https://twitter.com/SyncSphere",
      "https://www.linkedin.com/company/syncsphere",
      "https://www.facebook.com/SyncSphere"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Innovation Drive",
      "addressLocality": "Tech City",
      "addressRegion": "TC",
      "postalCode": "10001",
      "addressCountry": "US"
    },
    "telephone": "+1-234-567-8901",
    "email": "contact@syncsphereofficial.com",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Workflow Automation / Business Systems",
            "description": "Automate repetitive tasks and business processes to save time and reduce costs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Chatbots (SMS, WhatsApp, Web, Social)",
            "description": "24/7 customer engagement across all channels"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Voice Agents",
            "description": "Handle calls, route queries, and perform transactions autonomously"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Design & Revamps",
            "description": "Modern, responsive websites with AI integration"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-commerce Solutions",
            "description": "Online stores with AI integration and automated payments"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile & Web App Development",
            "description": "Custom apps with AI features for enhanced functionality"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Consulting & Ongoing Support",
            "description": "Expert AI guidance and strategic implementation support"
          }
        }
      ]
    }
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What AI services does SyncSphere offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SyncSphere offers AI chatbots, voice agents, business automations, micro-SaaS solutions, and AI agents tailored to your business needs globally."
        }
      },
      {
        "@type": "Question",
        "name": "How can AI chatbots benefit my business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our AI chatbots provide 24/7 customer support, qualify leads, answer FAQs, and collect valuable customer data, all while reducing operational costs."
        }
      },
      {
        "@type": "Question",
        "name": "What industries does SyncSphere work with?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SyncSphere works with diverse industries including e-commerce, banking, healthcare, retail, education, and more. Our solutions can be customized to any industry's specific needs."
        }
      }
    ]
  };
  
  return (
    <div className="min-h-screen bg-background text-white flex flex-col">
      <Helmet>
        <title>SyncSphere AI Global Agency</title>
        <meta name="description" content="SyncSphere delivers professional AI solutions including AI chatbots, voice agents, automations, micro-SaaS, and AI agents for businesses of all sizes globally." />
        <link rel="canonical" href="https://syncsphereofficial.com" />
        <script type="application/ld+json">
          {JSON.stringify(businessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <EnterpriseExpertise />
        <FAQSection />
        <ContactSection />
        
        {/* Ask AI Button */}
        <AskAIButton floating={true} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
