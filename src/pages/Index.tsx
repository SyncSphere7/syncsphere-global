
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
import PersonalizationEngine from '../components/PersonalizationEngine';
import BehavioralTriggers from '../components/BehavioralTriggers';

const Index = () => {
  // JSON-LD structured data for the homepage
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "SyncSphere AI Agency",
    "description": "Transform your business with AI workflow automation, chatbots, voice agents, and startup MVP development. 24/7 customer support solutions for global enterprises and startups.",
    "url": "https://syncsphereofficial.com",
    "logo": "https://syncsphereofficial.com/syncsphere-logo.png",
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
    "telephone": "+1-815-472-7760",
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
            "name": "Startup MVP Development",
            "description": "From idea to launch in 30 days with flexible payment options including equity partnerships"
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

  // Review Schema for star ratings
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SyncSphere AI Agency",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  // LocalBusiness Schema for regional SEO
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SyncSphere AI Agency",
    "description": "Leading AI workflow automation, chatbot development, and startup MVP agency serving UK, US, and EU markets.",
    "url": "https://syncsphereofficial.com",
    "telephone": "+44-742-481-9094",
    "email": "info@syncsphereofficial.com",
    "priceRange": "£5000-£75000",
    "areaServed": [
      {"@type": "Country", "name": "United Kingdom"},
      {"@type": "Country", "name": "United States"},
      {"@type": "Place", "name": "European Union"}
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
  };

  // Enhanced FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does AI workflow automation cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI workflow automation pricing ranges from £6,400-£75,000 depending on complexity. Starter packages begin at £6,400, Professional solutions £12,000-£31,500, and Enterprise implementations £31,500-£67,500."
        }
      },
      {
        "@type": "Question",
        "name": "What AI chatbot development services do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We develop AI chatbots for SMS, WhatsApp, web, and social media platforms. Our chatbots provide 24/7 customer support, lead qualification, and seamless CRM integration. Pricing starts from £4,800."
        }
      },
      {
        "@type": "Question",
        "name": "Do you serve UK, US, and EU markets?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, SyncSphere provides AI solutions across UK, US, and EU markets with full regulatory compliance (GDPR, SOX, HIPAA). We offer regional pricing in GBP, USD, and EUR."
        }
      },
      {
        "@type": "Question",
        "name": "What are your startup MVP development options?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer flexible MVP development with 3 payment options: Standard payment (£8,000-£15,000), Partnership option (£4,000-£7,500 + 3-8% equity), and Revenue share (£5,600-£10,500 + 10-15% revenue for 18 months). Complete delivery in 30 days."
        }
      }
    ]
  };
  
  return (
    <PersonalizationEngine>
      {({ greeting, pricing, testimonial, cta, urgency, industry }) => (
        <div className="min-h-screen bg-background text-white flex flex-col">
          <Helmet>
            <title>AI Automation, Chatbot Development & Startup MVP Solutions | SyncSphere</title>
            <meta name="description" content="Transform your business with AI automation, chatbots, voice agents, and startup MVP development. From £1,500 pilots to complete 30-day MVP solutions. UK/US/EU." />
            <link rel="canonical" href="https://syncsphereofficial.com" />
            <script type="application/ld+json">
              {JSON.stringify(businessSchema)}
            </script>
            <script type="application/ld+json">
              {JSON.stringify(reviewSchema)}
            </script>
            <script type="application/ld+json">
              {JSON.stringify(localBusinessSchema)}
            </script>
            <script type="application/ld+json">
              {JSON.stringify(faqSchema)}
            </script>
          </Helmet>

          <Header />
          <main>
            <HeroSection personalization={{ greeting, cta, urgency }} />
            <ServicesSection />
            <ProcessSection />
            <CaseStudiesSection />
            <TestimonialsSection testimonial={testimonial} industry={industry} />
            <EnterpriseExpertise />
            <FAQSection />
            <ContactSection />
            
            {/* Ask AI Button */}
            <AskAIButton floating={true} />
            
            {/* Behavioral Triggers */}
            <BehavioralTriggers onTrigger={(type, data) => {
              console.log('Behavioral trigger:', type, data);
            }} />
          </main>
          <Footer />
        </div>
      )}
    </PersonalizationEngine>
  );
};

export default Index;
