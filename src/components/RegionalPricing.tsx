import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Star, ArrowRight, Globe, Shield, Clock } from 'lucide-react';

interface RegionalPricingProps {
  service: string;
  region: 'us' | 'uk' | 'eu';
  autoDetect?: boolean;
}

const RegionalPricing: React.FC<RegionalPricingProps> = ({ 
  service, 
  region: initialRegion, 
  autoDetect = true 
}) => {
  const [selectedRegion, setSelectedRegion] = useState<'us' | 'uk' | 'eu'>(initialRegion);
  const [currency, setCurrency] = useState<'USD' | 'GBP' | 'EUR'>('USD');

  // Auto-detect region based on timezone if enabled
  useEffect(() => {
    if (autoDetect) {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (timezone.includes('Europe')) {
        setSelectedRegion('eu');
        setCurrency('EUR');
      } else if (timezone.includes('London') || timezone.includes('UK')) {
        setSelectedRegion('uk');
        setCurrency('GBP');
      } else {
        setSelectedRegion('us');
        setCurrency('USD');
      }
    } else {
      // Set currency based on provided region
      switch (initialRegion) {
        case 'uk':
          setCurrency('GBP');
          break;
        case 'eu':
          setCurrency('EUR');
          break;
        default:
          setCurrency('USD');
      }
    }
  }, [autoDetect, initialRegion]);

  // Pricing data structure
  const pricingData = {
    'automations': {
      name: 'AI Workflow Automation',
      us: { starter: [8000, 15000], professional: [15000, 35000], enterprise: [35000, 75000] },
      uk: { starter: [7600, 14250], professional: [14250, 33250], enterprise: [33250, 71250] },
      eu: { starter: [7200, 13500], professional: [13500, 31500], enterprise: [31500, 67500] }
    },
    'chatbots': {
      name: 'AI Chatbots & Conversational AI',
      us: { starter: [6000, 12000], professional: [12000, 28000], enterprise: [28000, 60000] },
      uk: { starter: [5700, 11400], professional: [11400, 26600], enterprise: [26600, 57000] },
      eu: { starter: [5400, 10800], professional: [10800, 25200], enterprise: [25200, 54000] }
    },
    'voice-agents': {
      name: 'AI Voice Agents & Speech Technology',
      us: { starter: [10000, 18000], professional: [18000, 40000], enterprise: [40000, 85000] },
      uk: { starter: [9500, 17100], professional: [17100, 38000], enterprise: [38000, 80750] },
      eu: { starter: [9000, 16200], professional: [16200, 36000], enterprise: [36000, 76500] }
    },
    'ecommerce': {
      name: 'E-commerce & AI-Driven Sales Solutions',
      us: { starter: [8000, 15000], professional: [15000, 35000], enterprise: [35000, 75000] },
      uk: { starter: [7600, 14250], professional: [14250, 33250], enterprise: [33250, 71250] },
      eu: { starter: [7200, 13500], professional: [13500, 31500], enterprise: [31500, 67500] }
    },
    'web-development': {
      name: 'Website Design & AI-Enhanced Development',
      us: { starter: [5000, 10000], professional: [10000, 25000], enterprise: [25000, 50000] },
      uk: { starter: [4750, 9500], professional: [9500, 23750], enterprise: [23750, 47500] },
      eu: { starter: [4500, 9000], professional: [9000, 22500], enterprise: [22500, 45000] }
    },
    'app-development': {
      name: 'Mobile & Web App Development',
      us: { starter: [12000, 20000], professional: [20000, 45000], enterprise: [45000, 90000] },
      uk: { starter: [11400, 19000], professional: [19000, 42750], enterprise: [42750, 85500] },
      eu: { starter: [10800, 18000], professional: [18000, 40500], enterprise: [40500, 81000] }
    }
  };

  const currentPricing = pricingData[service as keyof typeof pricingData];
  const regionPricing = currentPricing?.[selectedRegion];

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const tiers = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and proof of concept',
      price: regionPricing?.starter,
      features: [
        'Basic AI implementation',
        'Standard integrations',
        'Email support',
        '30-day warranty',
        'Basic training included'
      ],
      popular: false
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and mid-market companies',
      price: regionPricing?.professional,
      features: [
        'Advanced AI features',
        'Custom integrations',
        'Priority support',
        '90-day warranty',
        'Comprehensive training',
        'Performance optimization'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For large organizations and Fortune 500 companies',
      price: regionPricing?.enterprise,
      features: [
        'Enterprise-grade AI',
        'Full system integration',
        '24/7 dedicated support',
        '1-year warranty',
        'Executive training program',
        'Custom development',
        'SLA guarantees'
      ],
      popular: false
    }
  ];

  const getRegionInfo = () => {
    switch (selectedRegion) {
      case 'uk':
        return { flag: '🇬🇧', name: 'United Kingdom', compliance: 'GDPR Compliant' };
      case 'eu':
        return { flag: '🇪🇺', name: 'European Union', compliance: 'GDPR Article 25 Compliant' };
      default:
        return { flag: '🇺🇸', name: 'United States', compliance: 'SOC 2 & HIPAA Certified' };
    }
  };

  const regionInfo = getRegionInfo();

  if (!currentPricing) {
    return (
      <div className="text-center p-8">
        <p className="text-muted-foreground">Pricing information not available for this service.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-2xl">{regionInfo.flag}</span>
          <Badge variant="outline" className="text-sm">
            {regionInfo.name} • {regionInfo.compliance}
          </Badge>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {currentPricing.name} Pricing
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Professional AI solutions with transparent pricing. Choose the tier that matches your business needs.
        </p>
      </div>

      {/* Region Selector */}
      {autoDetect && (
        <div className="flex justify-center mb-8">
          <div className="flex bg-muted rounded-lg p-1">
            {[
              { key: 'us', label: '🇺🇸 US', curr: 'USD' },
              { key: 'uk', label: '🇬🇧 UK', curr: 'GBP' },
              { key: 'eu', label: '🇪🇺 EU', curr: 'EUR' }
            ].map((region) => (
              <button
                key={region.key}
                onClick={() => {
                  setSelectedRegion(region.key as 'us' | 'uk' | 'eu');
                  setCurrency(region.curr as 'USD' | 'GBP' | 'EUR');
                }}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedRegion === region.key
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {region.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Pricing Tiers */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {tiers.map((tier, index) => (
          <Card 
            key={tier.name} 
            className={`relative ${tier.popular ? 'border-primary shadow-lg scale-105' : ''}`}
          >
            {tier.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground px-4 py-1">
                  <Star className="h-3 w-3 mr-1" />
                  Most Popular
                </Badge>
              </div>
            )}
            
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl font-bold">{tier.name}</CardTitle>
              <CardDescription className="text-sm">{tier.description}</CardDescription>
              <div className="mt-4">
                <div className="text-3xl font-bold">
                  {tier.price ? `${formatPrice(tier.price[0])} - ${formatPrice(tier.price[1])}` : 'Custom'}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  One-time project cost
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <ul className="space-y-3 mb-6">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${tier.popular ? 'bg-primary' : 'variant-outline'}`}
                size="lg"
              >
                Get Started
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Payment Terms */}
      <div className="bg-muted/50 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-center">Professional Payment Terms</h3>
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
              <span className="text-primary font-bold">50%</span>
            </div>
            <div className="font-medium">Project Start</div>
            <div className="text-sm text-muted-foreground">Upfront payment</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
              <span className="text-primary font-bold">30%</span>
            </div>
            <div className="font-medium">Milestone</div>
            <div className="text-sm text-muted-foreground">Progress payment</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
              <span className="text-primary font-bold">20%</span>
            </div>
            <div className="font-medium">Completion</div>
            <div className="text-sm text-muted-foreground">Final delivery</div>
          </div>
        </div>
      </div>

      {/* Special Offers */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
          <div className="text-green-600 font-semibold">Early Bird Discount</div>
          <div className="text-sm text-green-700">Book this month - Save 10%</div>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
          <div className="text-blue-600 font-semibold">Volume Discount</div>
          <div className="text-sm text-blue-700">Multiple services - Save 15%</div>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
          <div className="text-purple-600 font-semibold">Annual Retainer</div>
          <div className="text-sm text-purple-700">12-month commitment - Save 20%</div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <Button size="lg" className="bg-gradient-to-r from-primary to-blue-600">
          Schedule Free Consultation
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
        <p className="text-sm text-muted-foreground mt-3">
          <Globe className="h-4 w-4 inline mr-1" />
          Available globally • <Shield className="h-4 w-4 inline mr-1" />
          Enterprise security • <Clock className="h-4 w-4 inline mr-1" />
          24/7 support
        </p>
      </div>
    </div>
  );
};

export default RegionalPricing;
