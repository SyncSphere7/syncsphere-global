import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import SEOProvider from '@/components/SEOProvider';
import RegionalPricing from '@/components/RegionalPricing';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, ShoppingCart, Zap, Target, TrendingUp, Shield, CreditCard, Package } from 'lucide-react';

const EcommerceUK = () => {
  const ukEcommerceFeatures = [
    "Shopify UK integration with VAT automation",
    "WooCommerce optimization for UK market",
    "Sage Pay and Stripe UK payment processing",
    "Royal Mail and DPD shipping integration",
    "GDPR-compliant customer data handling",
    "UK VAT calculation and HMRC reporting",
    "Multi-currency support (GBP, EUR, USD)",
    "UK-specific checkout optimization"
  ];

  const ecommercePlatforms = [
    {
      platform: "Shopify Plus UK",
      description: "Enterprise e-commerce with UK-specific features",
      features: ["VAT automation", "UK payment gateways", "Inventory sync", "Multi-channel selling"],
      roi: "340%"
    },
    {
      platform: "WooCommerce Pro",
      description: "WordPress-based e-commerce optimization",
      features: ["UK shipping zones", "Tax calculations", "Payment processing", "Performance optimization"],
      roi: "285%"
    },
    {
      platform: "Magento Commerce",
      description: "Enterprise-grade e-commerce platform",
      features: ["B2B functionality", "Advanced reporting", "Multi-store management", "API integrations"],
      roi: "420%"
    }
  ];

  const ukCaseStudies = [
    {
      company: "UK Fashion Retailer",
      industry: "Fashion & Apparel",
      challenge: "Manual inventory management across 45 UK stores",
      solution: "Automated inventory sync with real-time stock updates",
      results: ["£2.1M revenue increase", "89% inventory accuracy", "67% faster checkout"],
      techStack: "Shopify Plus, Node.js, MongoDB, Stripe UK",
    },
    {
      company: "British Home Goods Chain",
      industry: "Home & Garden",
      challenge: "Complex VAT calculations for EU/UK sales",
      solution: "Automated VAT compliance with HMRC integration",
      results: ["£890K tax savings", "100% VAT compliance", "45% faster processing"],
      techStack: "WooCommerce, PHP, MySQL, Sage integration",
    }
  ];

  return (
    <SEOProvider
      title="E-commerce Development UK | Shopify & WooCommerce Experts | SyncSphere"
      description="Leading e-commerce development agency in the UK. Shopify Plus, WooCommerce, and Magento solutions with VAT automation, UK payment gateways, and GDPR compliance for British businesses."
      keywords="ecommerce development uk, shopify development uk, woocommerce uk, online store development uk, uk ecommerce agency, shopify plus uk"
      region="uk"
      service="ecommerce"
    >
      <ServiceLayout>
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-blue-500 text-blue-600">
              🇬🇧 UK E-commerce Specialists
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              E-commerce Development UK
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Transform your UK e-commerce business with intelligent automation. Shopify Plus, WooCommerce, 
              and Magento solutions with VAT automation, UK payment processing, and GDPR compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
                Get E-commerce Audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                View UK Case Studies
              </Button>
            </div>
          </div>

          {/* UK E-commerce Features */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="h-6 w-6 text-green-600" />
                  UK E-commerce Specialization
                </CardTitle>
                <CardDescription>
                  Comprehensive e-commerce solutions tailored for the UK market
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {ukEcommerceFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* E-commerce Platforms */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              UK E-commerce Platform Expertise
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {ecommercePlatforms.map((platform, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{platform.platform}</CardTitle>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {platform.roi} ROI
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

          {/* UK Case Studies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              UK E-commerce Success Stories
            </h2>
            <div className="space-y-8">
              {ukCaseStudies.map((study, index) => (
                <Card key={index} className="bg-gradient-to-r from-slate-50 to-blue-50 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                      <div>
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
                region="uk" 
                autoDetect={false}
              />
            </div>
          </section>

          {/* ROI Calculator */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">UK E-commerce ROI Calculator</h2>
                <p className="text-lg mb-6 opacity-90">
                  Calculate the potential impact of e-commerce optimization on your UK business
                </p>
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center">
                    <ShoppingCart className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">340%</div>
                    <div className="text-sm opacity-80">Average ROI increase</div>
                  </div>
                  <div className="text-center">
                    <Target className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">89%</div>
                    <div className="text-sm opacity-80">Conversion rate boost</div>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">£2.1M</div>
                    <div className="text-sm opacity-80">Revenue increase</div>
                  </div>
                  <div className="text-center">
                    <Shield className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm opacity-80">GDPR compliance</div>
                  </div>
                </div>
                <Button size="lg" variant="secondary">
                  Get E-commerce Assessment
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your UK E-commerce?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join successful UK e-commerce businesses that have transformed their operations with SyncSphere's 
              intelligent automation solutions. VAT compliance, UK payment processing, and GDPR included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
                Start E-commerce Project
              </Button>
              <Button size="lg" variant="outline">
                Schedule Consultation
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Shopify Plus certified • UK VAT compliant • GDPR certified
            </p>
          </div>
        </div>
      </ServiceLayout>
    </SEOProvider>
  );
};

export default EcommerceUK;
