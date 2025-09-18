
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation, useSearchParams } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImageUrl?: string;
  keywords?: string;
  region?: 'uk' | 'us' | 'eu' | 'global';
  service?: string;
  children?: React.ReactNode;
}

const SEOProvider: React.FC<SEOProps> = ({
  title = "SyncSphere AI Agency",
  description = "Professional AI solutions including chatbots, voice agents, automations, micro-SaaS, and AI agents.",
  canonicalUrl = "https://syncsphereofficial.com",
  ogImageUrl = "https://syncsphereofficial.com/lovable-uploads/512e76cc-7293-4e60-a3fe-8e7f2f6892b5.png",
  keywords = "ai automation, business automation, workflow automation, ai chatbots, voice agents",
  region = 'global',
  service,
  children
}) => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const isEmbedded = searchParams.get('embedded') === 'true';
  
  // Regional keyword mapping
  const regionalKeywords = {
    uk: "ai automation agency uk, business process automation uk, workflow automation uk, digital transformation agency uk, saas workflow automation uk",
    us: "ai automation agency us, business process automation us, workflow automation us, digital transformation agency us, b2b ai automation services us",
    eu: "ai automation agency eu, business process automation eu, workflow automation eu, digital transformation agency eu, virtual agents for business automation eu",
    global: "ai automation agency, business process automation, workflow automation, digital transformation, ai solutions"
  };

  // Service-specific descriptions
  const serviceDescriptions = {
    chatbots: {
      uk: "Leading AI chatbot development agency in the UK. Enterprise-grade conversational AI solutions with advanced NLP, multi-channel deployment, and seamless CRM integration for businesses across London, Manchester, Birmingham and nationwide.",
      us: "Top AI chatbot development company in the US. Advanced conversational AI solutions with machine learning, natural language understanding, and enterprise integrations serving Fortune 500 companies across New York, California, Texas and all US markets.",
      eu: "Premier AI chatbot development agency in Europe. Multilingual conversational AI solutions with GDPR compliance, advanced sentiment analysis, and cross-platform deployment for businesses across Germany, France, Netherlands and EU.",
      global: "Professional AI chatbot development services. Enterprise-grade conversational AI solutions with advanced NLP, machine learning, and seamless integrations for businesses worldwide."
    },
    automations: {
      uk: "Expert business process automation services in the UK. Advanced AI-driven workflow automation with RPA, machine learning, and intelligent document processing for UK enterprises. GDPR-compliant solutions with HMRC integration.",
      us: "Leading business process automation company in the US. Enterprise-grade intelligent automation with AI/ML, robotic process automation, and advanced analytics for American businesses. SOX and HIPAA compliant solutions.",
      eu: "Top business process automation agency in Europe. Advanced workflow automation solutions with AI orchestration, intelligent document processing, and multi-language support for European enterprises and SMEs.",
      global: "Professional business process automation services. AI-driven workflow solutions with machine learning, RPA, and intelligent automation for global enterprises."
    },
    'voice-agents': {
      uk: "Advanced AI voice agent development in the UK. Custom voice automation solutions with natural speech synthesis, real-time conversation handling, and telephony integration for British businesses and call centers.",
      us: "Leading AI voice agent development company in the US. Enterprise voice automation solutions with advanced speech recognition, conversational AI, and cloud telephony integration for American businesses.",
      eu: "Premier AI voice agent development in Europe. Multilingual voice automation solutions with accent adaptation, real-time translation, and advanced speech processing for European markets.",
      global: "Professional AI voice agent development services. Custom voice automation solutions with advanced speech technology and conversational AI worldwide."
    }
  };

  // Dynamic SEO based on route
  let dynamicTitle = title;
  let dynamicDescription = description;
  let dynamicKeywords = keywords;

  // Extract service and region from path
  const pathParts = location.pathname.split('/');
  const detectedService = pathParts.find(part => 
    ['chatbots', 'automations', 'voice-agents', 'ai-agents', 'web-development', 'app-development', 'ecommerce', 'consulting'].includes(part)
  );
  const detectedRegion = pathParts.find(part => ['uk', 'us', 'eu'].includes(part)) as 'uk' | 'us' | 'eu' | undefined;

  const currentRegion = region !== 'global' ? region : detectedRegion || 'global';
  const currentService = service || detectedService;

  // Update title and description based on service and region
  if (currentService && serviceDescriptions[currentService as keyof typeof serviceDescriptions]) {
    const serviceData = serviceDescriptions[currentService as keyof typeof serviceDescriptions];
    dynamicDescription = serviceData[currentRegion] || serviceData.global;
    
    const regionSuffix = currentRegion !== 'global' ? ` ${currentRegion.toUpperCase()}` : '';
    dynamicTitle = `${currentService.charAt(0).toUpperCase() + currentService.slice(1).replace('-', ' ')}${regionSuffix} | SyncSphere AI Agency`;
  }

  // Update keywords based on region
  dynamicKeywords = regionalKeywords[currentRegion];

  // Chat agent specific SEO
  if (location.pathname === '/chat-agent') {
    dynamicTitle = "AI Assistant | SyncSphere AI Agency";
    dynamicDescription = "Chat with our AI assistant to learn more about SyncSphere's AI solutions and services.";
  }
  
  // Don't include metadata for embedded chat views
  if (isEmbedded) {
    return <>{children}</>;
  }
  
  // Enhanced organization schema with regional data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SyncSphere",
    "alternateName": "SyncSphere AI Agency",
    "url": "https://syncsphereofficial.com",
    "logo": "https://syncsphereofficial.com/syncsphere-logo.png",
    "description": "Leading AI automation agency providing enterprise-grade business process automation, conversational AI, voice agents, and digital transformation solutions across UK, US, and EU markets.",
    "foundingDate": "2023",
    "sameAs": [
      "https://twitter.com/SyncSphere",
      "https://www.linkedin.com/company/syncsphere",
      "https://www.facebook.com/SyncSphere"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+44-742-481-9094",
        "contactType": "sales",
        "availableLanguage": ["English"],
        "areaServed": ["GB", "US", "EU"]
      }
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "United Kingdom"
      },
      {
        "@type": "Country", 
        "name": "United States"
      },
      {
        "@type": "Place",
        "name": "European Union"
      }
    ],
    "serviceType": [
      "AI Automation Services",
      "Business Process Automation", 
      "AI Chatbot Development",
      "Voice Agent Development",
      "Workflow Automation",
      "Digital Transformation Consulting"
    ]
  };

  // Service-specific schema
  const serviceSchema = currentService ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${currentService.charAt(0).toUpperCase() + currentService.slice(1).replace('-', ' ')} Services`,
    "provider": {
      "@type": "Organization",
      "name": "SyncSphere"
    },
    "areaServed": currentRegion !== 'global' ? [currentRegion.toUpperCase()] : ["GB", "US", "EU"],
    "serviceType": dynamicTitle,
    "description": dynamicDescription
  } : null;

  return (
    <>
    <Helmet>
      {/* Basic meta tags */}
      <title>{dynamicTitle}</title>
      <meta name="description" content={dynamicDescription} />
      <meta name="keywords" content={dynamicKeywords} />
      <link rel="canonical" href={`${canonicalUrl}${location.pathname}`} />

      {/* Regional hreflang tags */}
      {currentService && (
        <>
          <link rel="alternate" hrefLang="en-gb" href={`${canonicalUrl}/${currentService}/uk`} />
          <link rel="alternate" hrefLang="en-us" href={`${canonicalUrl}/${currentService}/us`} />
          <link rel="alternate" hrefLang="en-eu" href={`${canonicalUrl}/${currentService}/eu`} />
          <link rel="alternate" hrefLang="x-default" href={`${canonicalUrl}/${currentService}`} />
        </>
      )}

      {/* OpenGraph tags */}
      <meta property="og:title" content={dynamicTitle} />
      <meta property="og:description" content={dynamicDescription} />
      <meta property="og:url" content={`${canonicalUrl}${location.pathname}`} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="SyncSphere AI Agency" />

      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={dynamicTitle} />
      <meta name="twitter:description" content={dynamicDescription} />
      <meta name="twitter:image" content={ogImageUrl} />

      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="SyncSphere AI Agency" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Structured data / JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      
      {serviceSchema && (
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      )}
    </Helmet>
    {children}
    </>
  );
};

export default SEOProvider;
