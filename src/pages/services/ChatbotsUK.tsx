import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import SEOProvider from '@/components/SEOProvider';
import RegionalPageLinks from '@/components/RegionalPageLinks';
import RegionalPricing from '@/components/RegionalPricing';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, MessageSquare, Brain, Zap, Shield, Users, BarChart3 } from 'lucide-react';

const ChatbotsUK = () => {
  return (
    <SEOProvider
      title="AI Chatbot Development UK | Enterprise Conversational AI | SyncSphere"
      description="Leading AI chatbot development agency in the UK. Enterprise-grade conversational AI solutions with advanced NLP, multi-channel deployment, and seamless CRM integration for UK businesses."
      keywords="ai chatbot development uk, conversational ai uk, chatbot agency uk, enterprise chatbots uk, nlp chatbots uk, whatsapp chatbot uk, ecommerce chatbots uk, web development uk, mobile app development uk"
      region="uk"
      service="chatbots"
    >
      <ServiceLayout>
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">AI Chatbot Development UK</h1>
            <p className="text-xl mb-8">Enterprise-grade conversational AI solutions for UK businesses</p>
            <Button size="lg">Get Started</Button>
          </div>
        </div>

        {/* Pricing Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RegionalPricing 
              service="chatbots" 
              region="uk" 
              autoDetect={false}
            />
          </div>
        </section>

        {/* CTA Section */}
      </ServiceLayout>
    </SEOProvider>
  );
};

export default ChatbotsUK;
