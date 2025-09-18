import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import SEOProvider from '@/components/SEOProvider';
import RegionalPricing from '@/components/RegionalPricing';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, ShoppingCart, TrendingUp, DollarSign, Shield, Users, BarChart3 } from 'lucide-react';

const EcommerceUS = () => {
  const usEnterpriseFeatures = [
    "Fortune 500-grade e-commerce platforms",
    "PCI DSS Level 1 compliant payment processing",
    "Enterprise ERP integration (SAP, Oracle)",
    "Multi-channel commerce (web, mobile, social)",
    "Advanced AI-powered personalization",
    "Real-time inventory and order management",
    "24/7 enterprise support with dedicated CSM",
    "Federal contracting compliance (FAR/DFARS)"
  ];

  const fortune500Cases = [
    {
      company: "Fortune 100 Retailer",
      industry: "Retail",
      challenge: "Omnichannel commerce for 2,000+ stores nationwide",
      solution: "Unified commerce platform with AI personalization",
      metrics: {
        "Revenue Increase": "$1.2B annually",
        "Conversion Rate": "+47%",
        "Customer Retention": "89%",
        "Page Load Speed": "< 1.5 seconds"
      },
      techStack: "React, Node.js, MongoDB, Redis, AWS, Stripe, Shopify Plus",
    },
    {
      company: "Major US Manufacturer",
      industry: "Manufacturing",
      challenge: "B2B e-commerce for 10,000+ business customers",
      solution: "Enterprise B2B platform with custom pricing engine",
      metrics: {
        "Order Volume": "$500M processed",
        "Customer Adoption": "94% active users",
        "Order Accuracy": "99.7%",
        "Processing Time": "< 30 seconds"
      },
      techStack: "Next.js, PostgreSQL, Kubernetes, Azure, SAP integration",
    },
    {
      company: "Fortune 500 Technology",
      industry: "Technology",
      challenge: "Global marketplace for 50M+ users",
      solution: "Scalable marketplace with AI-driven recommendations",
      metrics: {
        "GMV": "$2.8B annually",
        "Seller Onboarding": "87% automated",
        "Search Accuracy": "96.3%",
        "Mobile Conversion": "+62%"
      },
      techStack: "React Native, Express.js, MySQL, Docker, GCP, PayPal",
    }
  ];

  const enterpriseIntegrations = [
    "Salesforce Commerce Cloud integration",
    "SAP Commerce and ERP connectivity",
    "Oracle Commerce Platform integration",
    "Microsoft Dynamics 365 Commerce",
    "Adobe Commerce (Magento) enterprise",
    "Shopify Plus enterprise solutions",
    "BigCommerce enterprise platform",
    "Custom enterprise API integrations"
  ];

  return (
    <SEOProvider
      title="Enterprise E-commerce Development US | Scalable Commerce Solutions | SyncSphere"
      description="Leading enterprise e-commerce development company in the US. Scalable commerce platforms with AI personalization, payment processing, and enterprise integrations for Fortune 500 companies."
      keywords="enterprise ecommerce development us, scalable commerce platforms us, b2b ecommerce solutions us, fortune 500 ecommerce us, ai ecommerce us"
      region="us"
      service="ecommerce"
    >
      <ServiceLayout>
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-30 blur-3xl -z-10"></div>
            <Badge variant="outline" className="mb-4 bg-white/5 border-white/10 text-foreground/80 backdrop-blur-sm">
              🇺🇸 Fortune 500 Commerce Solutions
            </Badge>
            <h1 className="text-foreground text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">E-commerce US</span>
            </h1>
            <p className="text-foreground/80 text-xl mb-8 max-w-4xl mx-auto">
              Transform American commerce with Fortune 500-grade e-commerce platforms. AI personalization, 
              enterprise integrations, and PCI compliance. Trusted by America's largest retailers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary text-white px-8 py-6 text-lg flex items-center gap-2 shadow-lg transition-all duration-300 hover:translate-y-[-2px]"
              >
                Schedule Commerce Demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="group backdrop-blur-sm bg-white/5 text-foreground border-foreground/20 hover:bg-foreground/10 px-8 py-6 text-lg flex items-center gap-2 shadow-lg transition-all duration-300 hover:translate-y-[-2px]"
              >
                View Platform Demo
              </Button>
            </div>
          </div>

          {/* US Enterprise Features */}
          <div className="mb-16">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <ShoppingCart className="h-6 w-6 text-primary" />
                  US Enterprise E-commerce Features
                </CardTitle>
                <CardDescription className="text-foreground/70">
                  Fortune 500-grade commerce platforms with full US regulatory compliance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {usEnterpriseFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Fortune 500 Case Studies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Fortune 500 Commerce Success Stories
            </h2>
            <div className="space-y-8">
              {fortune500Cases.map((study, index) => (
                <Card key={index} className="bg-gradient-to-r from-slate-50 to-blue-50 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-12 gap-8">
                      <div className="lg:col-span-4">
                        <h3 className="text-xl font-bold mb-2">{study.company}</h3>
                        <Badge className="mb-4">{study.industry}</Badge>
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-medium text-red-600">Challenge:</h4>
                            <p className="text-sm text-muted-foreground">{study.challenge}</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-blue-600">Solution:</h4>
                            <p className="text-sm text-muted-foreground">{study.solution}</p>
                          </div>
                        </div>
                      </div>
                      <div className="lg:col-span-4">
                        <h4 className="font-medium text-green-600 mb-3">Commerce Metrics:</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {Object.entries(study.metrics).map(([key, value], idx) => (
                            <div key={idx} className="text-center p-3 bg-white rounded-lg border">
                              <div className="text-lg font-bold text-green-600">{value}</div>
                              <div className="text-xs text-muted-foreground">{key}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="lg:col-span-4">
                        <h4 className="font-medium text-purple-600 mb-3">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-1">
                          {study.techStack.split(', ').map((tech, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Enterprise Integrations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Enterprise Commerce Integrations
            </h2>
            <Card className="bg-gradient-to-br from-slate-50 to-blue-50 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {enterpriseIntegrations.map((integration, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-blue-600 flex-shrink-0" />
                      <span className="text-sm">{integration}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* ROI Dashboard */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Enterprise Commerce ROI</h2>
                <p className="text-lg mb-6 opacity-90">
                  Real performance data from Fortune 500 e-commerce deployments
                </p>
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center">
                    <DollarSign className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">$2.8B</div>
                    <div className="text-sm opacity-80">GMV processed</div>
                  </div>
                  <div className="text-center">
                    <BarChart3 className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">+47%</div>
                    <div className="text-sm opacity-80">Conversion increase</div>
                  </div>
                  <div className="text-center">
                    <Users className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">50M+</div>
                    <div className="text-sm opacity-80">Users served</div>
                  </div>
                  <div className="text-center">
                    <Shield className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">99.9%</div>
                    <div className="text-sm opacity-80">Uptime SLA</div>
                  </div>
                </div>
                <Button size="lg" variant="secondary">
                  Get Commerce Assessment
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Pricing Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RegionalPricing 
              service="ecommerce" 
              region="us" 
              autoDetect={false}
            />
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-blue-600 text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-30 blur-3xl -z-10"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Scale Your Commerce?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join Fortune 500 retailers using our enterprise commerce platform. Scalable architecture, AI personalization, and dedicated success teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Schedule Platform Demo
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                Download Commerce Guide
              </Button>
            </div>
            <p className="text-sm mt-6 opacity-80">
              🛒 $2.8B GMV • 🇺🇸 Fortune 500 trusted • 🔒 PCI DSS Level 1 compliant
            </p>
          </div>
        </div>
      </ServiceLayout>
    </SEOProvider>
  );
};

export default EcommerceUS;
