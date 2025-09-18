import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import SEOProvider from '@/components/SEOProvider';
import RegionalPricing from '@/components/RegionalPricing';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, ShoppingCart, Zap, Target, TrendingUp, Shield, CreditCard, Package, Globe } from 'lucide-react';

const EcommerceEU = () => {
  const euEcommerceFeatures = [
    "GDPR-compliant e-commerce architecture",
    "Multi-currency support (EUR, GBP, SEK, PLN, etc.)",
    "Automated VAT calculation for all EU countries",
    "Cross-border shipping optimization",
    "Multi-language checkout (24 EU languages)",
    "EU payment methods (SEPA, Klarna, Bancontact)",
    "Digital Services Act compliance",
    "Cookie consent and privacy management"
  ];

  const euEcommercePlatforms = [
    {
      platform: "Shopify Plus EU",
      description: "European e-commerce with GDPR compliance",
      features: ["EU VAT automation", "Multi-currency", "GDPR tools", "EU payment gateways"],
      compliance: "GDPR + DSA"
    },
    {
      platform: "WooCommerce EU",
      description: "WordPress e-commerce for European markets",
      features: ["EU shipping zones", "VAT compliance", "Multi-language", "Cookie consent"],
      compliance: "GDPR + ePrivacy"
    },
    {
      platform: "Magento Commerce EU",
      description: "Enterprise e-commerce with EU compliance",
      features: ["B2B functionality", "Multi-store", "EU regulations", "Advanced reporting"],
      compliance: "GDPR + NIS2"
    }
  ];

  const euCaseStudies = [
    {
      company: "Pan-European Fashion Brand",
      industry: "Fashion & Retail",
      countries: "15 EU countries",
      challenge: "Cross-border e-commerce with complex VAT regulations",
      solution: "Automated VAT compliance system with real-time rate updates",
      results: ["€12M revenue increase", "99.8% VAT accuracy", "67% faster checkout", "12 new markets"],
      techStack: "Shopify Plus, Node.js, PostgreSQL, Stripe EU, VAT API",
    },
    {
      company: "German B2B Manufacturer",
      industry: "Industrial Equipment",
      countries: "27 EU countries",
      challenge: "Complex B2B pricing across multiple jurisdictions",
      solution: "Multi-tier pricing engine with regulatory compliance",
      results: ["€8.4M B2B sales growth", "89% quote automation", "45% faster processing", "100% compliance"],
      techStack: "Magento Commerce, PHP, MySQL, SAP integration, Azure EU",
    },
    {
      company: "Nordic E-commerce Group",
      industry: "Consumer Electronics",
      countries: "5 Nordic countries",
      challenge: "Multi-language platform with green energy requirements",
      solution: "Sustainable e-commerce platform with carbon tracking",
      results: ["€5.7M sustainability savings", "92% customer satisfaction", "78% mobile conversion", "Carbon neutral"],
      techStack: "WooCommerce, React, MongoDB, Green hosting, Klarna",
    }
  ];

  const euVATCompliance = [
    {
      country: "Germany",
      vatRate: "19% / 7%",
      specialRules: ["Digital services VAT", "B2B reverse charge", "OSS reporting"],
      integration: "Elster API"
    },
    {
      country: "France", 
      vatRate: "20% / 10% / 5.5%",
      specialRules: ["TVA intracommunautaire", "DEB declarations", "FEC reporting"],
      integration: "DGFiP API"
    },
    {
      country: "Netherlands",
      vatRate: "21% / 9%",
      specialRules: ["BTW compliance", "Intrastat reporting", "SAF-T filing"],
      integration: "Belastingdienst API"
    },
    {
      country: "Italy",
      vatRate: "22% / 10% / 4%",
      specialRules: ["Fattura elettronica", "Esterometro", "VIES validation"],
      integration: "Agenzia Entrate API"
    }
  ];

  return (
    <SEOProvider
      title="E-commerce Development EU | GDPR Compliant Online Stores | SyncSphere"
      description="Leading e-commerce development agency in Europe. GDPR-compliant online stores with multi-currency support, automated VAT compliance, and cross-border optimization for European businesses."
      keywords="ecommerce development eu, gdpr ecommerce eu, multi-currency ecommerce eu, vat compliance ecommerce eu, european online stores, cross-border ecommerce eu"
      region="eu"
      service="ecommerce"
    >
      <ServiceLayout>
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-blue-500 text-blue-600">
              🇪🇺 European Union Certified E-commerce
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              European E-commerce Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Transform your European business with GDPR-compliant e-commerce solutions. Multi-currency support, 
              automated VAT compliance, and cross-border optimization across all 27 EU member states.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
                Get EU Compliance Audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                View European Cases
              </Button>
            </div>
          </div>

          {/* EU E-commerce Features */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="h-6 w-6 text-blue-600" />
                  European E-commerce Specialization
                </CardTitle>
                <CardDescription>
                  Comprehensive e-commerce solutions for the European market
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {euEcommerceFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* EU E-commerce Platforms */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              European E-commerce Platforms
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {euEcommercePlatforms.map((platform, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{platform.platform}</CardTitle>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {platform.compliance}
                      </Badge>
                    </div>
                    <CardDescription>{platform.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {platform.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* EU VAT Compliance */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              EU VAT Compliance Matrix
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {euVATCompliance.map((country, index) => (
                <Card key={index} className="bg-gradient-to-br from-green-50 to-blue-50 border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="h-5 w-5 text-green-600" />
                      {country.country}
                    </CardTitle>
                    <Badge className="w-fit bg-blue-100 text-blue-800">
                      {country.vatRate}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-sm mb-2">Special Rules:</h4>
                        <ul className="text-xs space-y-1">
                          {country.specialRules.map((rule, idx) => (
                            <li key={idx} className="flex items-center gap-1">
                              <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                              {rule}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Integration:</h4>
                        <Badge variant="outline" className="text-xs mt-1">
                          {country.integration}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* European Case Studies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              European E-commerce Success Stories
            </h2>
            <div className="space-y-8">
              {euCaseStudies.map((study, index) => (
                <Card key={index} className="bg-gradient-to-r from-slate-50 to-blue-50 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{study.company}</h3>
                        <div className="flex gap-2 mb-4">
                          <Badge>{study.industry}</Badge>
                          <Badge variant="outline">🇪🇺 {study.countries}</Badge>
                        </div>
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
                      <div>
                        <h4 className="font-medium text-green-600 mb-3">Results:</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <TrendingUp className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
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

          {/* Pricing Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <RegionalPricing 
                service="ecommerce" 
                region="eu" 
                autoDetect={false}
              />
            </div>
          </section>

          {/* European E-commerce Metrics */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">European E-commerce Metrics</h2>
                <p className="text-lg mb-6 opacity-90">
                  Real performance data from our European e-commerce deployments
                </p>
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center">
                    <ShoppingCart className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">€12M</div>
                    <div className="text-sm opacity-80">Revenue increase</div>
                  </div>
                  <div className="text-center">
                    <Target className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">99.8%</div>
                    <div className="text-sm opacity-80">VAT accuracy</div>
                  </div>
                  <div className="text-center">
                    <Globe className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">27</div>
                    <div className="text-sm opacity-80">EU countries</div>
                  </div>
                  <div className="text-center">
                    <Shield className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm opacity-80">GDPR compliance</div>
                  </div>
                </div>
                <Button size="lg" variant="secondary">
                  Get EU E-commerce Assessment
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready for European E-commerce Success?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join successful European businesses that have transformed their online presence with SyncSphere's 
              GDPR-compliant e-commerce solutions. Multi-currency, VAT automation, and cross-border optimization included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
                Start European E-commerce Project
              </Button>
              <Button size="lg" variant="outline">
                Schedule Compliance Demo
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              🛒 99.8% VAT accuracy • 🇪🇺 27 EU countries • 🔒 GDPR & DSA compliant
            </p>
          </div>
        </div>
      </ServiceLayout>
    </SEOProvider>
  );
};

export default EcommerceEU;
