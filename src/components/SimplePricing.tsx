import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Star, ArrowRight } from 'lucide-react';

interface SimplePricingProps {
  service: string;
  currency: string;
}

const SimplePricing: React.FC<SimplePricingProps> = ({ service, currency }) => {
  // Simplified pricing data
  const pricingData = {
    automations: {
      starter: { usd: [8000, 15000], gbp: [6400, 12000], eur: [7200, 13500] },
      professional: { usd: [15000, 35000], gbp: [12000, 28000], eur: [13500, 31500] },
      enterprise: { usd: [35000, 75000], gbp: [28000, 60000], eur: [31500, 67500] }
    },
    chatbots: {
      starter: { usd: [6000, 12000], gbp: [4800, 9600], eur: [5400, 10800] },
      professional: { usd: [12000, 28000], gbp: [9600, 22400], eur: [10800, 25200] },
      enterprise: { usd: [28000, 60000], gbp: [22400, 48000], eur: [25200, 54000] }
    }
  };

  const formatPrice = (amount: number) => {
    const symbols = { USD: '$', GBP: '£', EUR: '€' };
    return `${symbols[currency as keyof typeof symbols]}${amount.toLocaleString()}`;
  };

  const serviceData = pricingData[service as keyof typeof pricingData];
  if (!serviceData) return null;

  const curr = currency.toLowerCase() as 'usd' | 'gbp' | 'eur';

  return (
    <div className="grid md:grid-cols-3 gap-8">
      <Card>
        <CardHeader className="text-center">
          <CardTitle>Starter</CardTitle>
          <CardDescription>Perfect for small businesses</CardDescription>
          <div className="text-3xl font-bold mt-4">
            {formatPrice(serviceData.starter[curr][0])} - {formatPrice(serviceData.starter[curr][1])}
          </div>
        </CardHeader>
        <CardContent>
          <Button className="w-full" variant="outline">
            Get Started
          </Button>
        </CardContent>
      </Card>

      <Card className="border-primary shadow-lg scale-105">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-primary text-white">
            <Star className="h-3 w-3 mr-1" />
            Most Popular
          </Badge>
        </div>
        <CardHeader className="text-center">
          <CardTitle>Professional</CardTitle>
          <CardDescription>Ideal for growing businesses</CardDescription>
          <div className="text-3xl font-bold mt-4">
            {formatPrice(serviceData.professional[curr][0])} - {formatPrice(serviceData.professional[curr][1])}
          </div>
        </CardHeader>
        <CardContent>
          <Button className="w-full bg-primary">
            Get Started
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="text-center">
          <CardTitle>Enterprise</CardTitle>
          <CardDescription>For large organizations</CardDescription>
          <div className="text-3xl font-bold mt-4">
            {formatPrice(serviceData.enterprise[curr][0])} - {formatPrice(serviceData.enterprise[curr][1])}
          </div>
        </CardHeader>
        <CardContent>
          <Button className="w-full" variant="outline">
            Contact Sales
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SimplePricing;