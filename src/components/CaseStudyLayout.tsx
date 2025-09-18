
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Helmet } from 'react-helmet-async';

interface CaseStudyLayoutProps {
  title: string;
  client: string;
  industry: string;
  description?: string;
  children: React.ReactNode;
}

const CaseStudyLayout = ({ 
  title, 
  client, 
  industry, 
  description = "Case study showcasing SyncSphere's AI solutions",
  children 
}: CaseStudyLayoutProps) => {
  const pageTitle = `${title} | SyncSphere AI Agency`;
  const url = `https://syncsphereofficial.com/case-studies/${title.toLowerCase().replace(/\s+/g, '-')}`;
  
  // JSON-LD structured data for the case study
  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": "https://syncsphereofficial.com/lovable-uploads/54f2dc02-f4c5-4c57-afe2-0a95d7775909.png",
    "author": {
      "@type": "Organization",
      "name": "SyncSphere"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SyncSphere",
      "logo": {
        "@type": "ImageObject",
        "url": "https://syncsphereofficial.com/syncsphere-logo.png"
      }
    },
    "datePublished": "2023-09-01",
    "dateModified": "2023-09-01"
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={`${title} - ${description} Client: ${client}, Industry: ${industry}`} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={`${title} - ${description} Client: ${client}, Industry: ${industry}`} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify(caseStudySchema)}
        </script>
      </Helmet>
      
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-6 py-12">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/#case-studies">Case Studies</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>{title}</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <Link to="/#case-studies" className="inline-flex items-center text-foreground/70 hover:text-primary mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Case Studies
          </Link>
          
          <div className="mb-8">
            <span className="text-sm text-primary">{industry}</span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">{title}</h1>
            <p className="text-xl text-foreground/70 mb-6">Client: {client}</p>
          </div>
          
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudyLayout;
