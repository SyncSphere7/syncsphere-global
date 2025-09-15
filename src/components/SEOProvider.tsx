
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation, useSearchParams } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImageUrl?: string;
  children?: React.ReactNode;
}

const SEOProvider: React.FC<SEOProps> = ({
  title = "SyncSphere AI Agency",
  description = "Professional AI solutions including chatbots, voice agents, automations, micro-SaaS, and AI agents.",
  canonicalUrl = "https://syncsphereofficial.com",
  ogImageUrl = "https://syncsphereofficial.com/lovable-uploads/512e76cc-7293-4e60-a3fe-8e7f2f6892b5.png",
  children
}) => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const isEmbedded = searchParams.get('embedded') === 'true';
  
  // Update SEO data based on current route
  if (location.pathname === '/chat-agent') {
    title = "AI Assistant | SyncSphere AI Agency";
    description = "Chat with our AI assistant to learn more about SyncSphere's AI solutions and services.";
  }
  
  // Don't include metadata for embedded chat views
  if (isEmbedded) {
    return <>{children}</>;
  }
  
  // Base organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SyncSphere",
    "url": "https://syncsphereofficial.com",
    "logo": "https://syncsphereofficial.com/lovable-uploads/512e76cc-7293-4e60-a3fe-8e7f2f6892b5.png",
    "sameAs": [
      "https://twitter.com/SyncSphere",
      "https://www.linkedin.com/company/syncsphere",
      "https://www.facebook.com/SyncSphere"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-234-567-8901",
      "contactType": "customer service",
      "availableLanguage": ["English"]
    }
  };

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${canonicalUrl}${location.pathname}`} />

      {/* OpenGraph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${canonicalUrl}${location.pathname}`} />
      <meta property="og:image" content={ogImageUrl} />

      {/* Twitter tags */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />

      {/* Structured data / JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      
      {children}
    </Helmet>
  );
};

export default SEOProvider;
