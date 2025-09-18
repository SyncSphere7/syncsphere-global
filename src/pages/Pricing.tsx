import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOProvider from '@/components/SEOProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle, Star, Globe, Zap, Shield, Clock, CreditCard, ArrowRight, Check, Phone, Mail, Download } from 'lucide-react';
import ContactFormNew from '@/components/ContactFormNew';

const Pricing = () => {
  const [selectedService, setSelectedService] = useState('automations');
  const [currency, setCurrency] = useState('USD');

  const services = [
    { id: 'automations', name: 'AI Automation', icon: '🤖', desc: 'Workflow automation & business systems' },
    { id: 'chatbots', name: 'AI Chatbots', icon: '💬', desc: 'SMS, WhatsApp, web & social chatbots' },
    { id: 'voice-agents', name: 'Voice Agents', icon: '🎙️', desc: 'AI-powered voice assistants' },
    { id: 'ecommerce', name: 'E-commerce', icon: '🛒', desc: 'Online stores with AI integration' },
    { id: 'web-development', name: 'Web Development', icon: '🌐', desc: 'Modern websites & web apps' },
    { id: 'app-development', name: 'App Development', icon: '📱', desc: 'Mobile & web applications' }
  ];

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
    },
    'voice-agents': {
      starter: { usd: [10000, 18000], gbp: [8000, 14400], eur: [9000, 16200] },
      professional: { usd: [18000, 40000], gbp: [14400, 32000], eur: [16200, 36000] },
      enterprise: { usd: [40000, 85000], gbp: [32000, 68000], eur: [36000, 76500] }
    },
    ecommerce: {
      starter: { usd: [2500, 5000], gbp: [2000, 4000], eur: [2250, 4500] },
      professional: { usd: [5000, 15000], gbp: [4000, 12000], eur: [4500, 13500] },
      enterprise: { usd: [15000, 35000], gbp: [12000, 28000], eur: [13500, 31500] }
    },
    'web-development': {
      starter: { usd: [500, 2000], gbp: [400, 1600], eur: [450, 1800] },
      professional: { usd: [2000, 8000], gbp: [1600, 6400], eur: [1800, 7200] },
      enterprise: { usd: [8000, 20000], gbp: [6400, 16000], eur: [7200, 18000] }
    },
    'app-development': {
      starter: { usd: [3000, 6000], gbp: [2400, 4800], eur: [2700, 5400] },
      professional: { usd: [6000, 20000], gbp: [4800, 16000], eur: [5400, 18000] },
      enterprise: { usd: [20000, 50000], gbp: [16000, 40000], eur: [18000, 45000] }
    }
  };

  const formatPrice = (amount) => {
    const symbols = { USD: '$', GBP: '£', EUR: '€' };
    return `${symbols[currency]}${amount.toLocaleString()}`;
  };

  const getCurrentPricing = () => {
    const service = pricingData[selectedService];
    const curr = currency.toLowerCase();
    return {
      starter: service.starter[curr],
      professional: service.professional[curr],
      enterprise: service.enterprise[curr]
    };
  };

  const pricing = getCurrentPricing();

  return (
    <SEOProvider
      title="AI Workflow Automation Pricing | Enterprise Chatbot Development Costs | SyncSphere"
      description="Transparent AI automation pricing: Workflow automation £6,400-£75,000, AI chatbots £4,800-£54,000, voice agents £8,000-£76,500. UK/US/EU pricing with flexible payment terms."
      keywords="ai automation pricing, chatbot development cost, voice agent pricing, enterprise ai cost, business automation pricing, ai consulting rates"
    >
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-background relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-30 blur-3xl -z-10"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <span className="px-4 py-2 bg-white/5 rounded-full text-foreground/80 text-sm mb-6 border border-white/10 backdrop-blur-sm animate-fadeIn">
                Enterprise-Grade AI Solutions
              </span>
              <h1 className="text-foreground text-4xl md:text-6xl font-bold mb-6 animate-fadeIn leading-tight">
                Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">Enterprise Pricing</span>
              </h1>
              <p className="text-foreground/80 text-xl mb-8 max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: "0.2s" }}>
                Professional, value-based pricing for Fortune 500-grade AI solutions. 
                No hidden fees, no surprises - just transparent rates that deliver exceptional ROI.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
                <Badge variant="outline" className="px-4 py-2 bg-white/5 border-white/10 text-foreground/80 backdrop-blur-sm">
                  <Shield className="h-4 w-4 mr-2" />
                  Enterprise Security
                </Badge>
                <Badge variant="outline" className="px-4 py-2 bg-white/5 border-white/10 text-foreground/80 backdrop-blur-sm">
                  <Globe className="h-4 w-4 mr-2" />
                  Global Compliance
                </Badge>
                <Badge variant="outline" className="px-4 py-2 bg-white/5 border-white/10 text-foreground/80 backdrop-blur-sm">
                  <Clock className="h-4 w-4 mr-2" />
                  24/7 Support
                </Badge>
                <Badge variant="outline" className="px-4 py-2 bg-white/5 border-white/10 text-foreground/80 backdrop-blur-sm">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Flexible Payment Terms
                </Badge>
              </div>
            </div>
          </section>

          {/* Currency Selector */}
          <section className="py-8 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-center">
                <div className="flex bg-white/5 rounded-lg p-1 border border-white/10">
                  {[{key: 'USD', label: '🇺🇸 USD'}, {key: 'GBP', label: '🇬🇧 GBP'}, {key: 'EUR', label: '🇪🇺 EUR'}].map((curr) => (
                    <button
                      key={curr.key}
                      onClick={() => setCurrency(curr.key)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        currency === curr.key ? 'bg-primary text-white' : 'text-foreground/70 hover:text-foreground'
                      }`}
                    >
                      {curr.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Service Selection */}
          <section className="py-16 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-foreground text-3xl font-bold mb-4">Choose Your Service</h2>
                <p className="text-foreground/80 text-lg">
                  Select a service to view detailed pricing and features
                </p>
              </div>

              <Tabs value={selectedService} onValueChange={setSelectedService} className="w-full">
                <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 mb-12">
                  {services.map((service) => (
                    <TabsTrigger 
                      key={service.id} 
                      value={service.id}
                      className="flex flex-col items-center gap-2 p-4"
                    >
                      <span className="text-2xl">{service.icon}</span>
                      <span className="text-sm font-medium text-center">{service.name}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {services.find(s => s.id === selectedService)?.name} Pricing
                  </h3>
                  <p className="text-foreground/70 mb-4">
                    {services.find(s => s.id === selectedService)?.desc}
                  </p>
                  <Link to={`/services/${selectedService}`}>
                    <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary hover:text-white">
                      Learn More About {services.find(s => s.id === selectedService)?.name}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>

                {/* Pricing Tiers */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <Card className="relative">
                    <CardHeader className="text-center">
                      <CardTitle>Starter</CardTitle>
                      <CardDescription>Perfect for small businesses</CardDescription>
                      <div className="text-3xl font-bold text-foreground mt-4">
                        {formatPrice(pricing.starter[0])} - {formatPrice(pricing.starter[1])}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Basic implementation</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Standard features</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Email support</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-sm">30-day warranty</span>
                        </li>
                      </ul>
                      <Link to={`/services/${selectedService}`}>
                        <Button className="w-full" variant="outline">
                          Get Started
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>

                  <Card className="relative border-primary shadow-lg scale-105">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-white px-4 py-1">
                        <Star className="h-3 w-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                    <CardHeader className="text-center">
                      <CardTitle>Professional</CardTitle>
                      <CardDescription>Ideal for growing businesses</CardDescription>
                      <div className="text-3xl font-bold text-foreground mt-4">
                        {formatPrice(pricing.professional[0])} - {formatPrice(pricing.professional[1])}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Advanced features</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Custom integrations</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Priority support</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-sm">90-day warranty</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Training included</span>
                        </li>
                      </ul>
                      <Link to={`/services/${selectedService}`}>
                        <Button className="w-full bg-primary">
                          Get Started
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>

                  <Card className="relative">
                    <CardHeader className="text-center">
                      <CardTitle>Enterprise</CardTitle>
                      <CardDescription>For large organizations</CardDescription>
                      <div className="text-3xl font-bold text-foreground mt-4">
                        {formatPrice(pricing.enterprise[0])} - {formatPrice(pricing.enterprise[1])}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Enterprise-grade</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Full customization</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-sm">24/7 dedicated support</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-sm">1-year warranty</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-sm">SLA guarantees</span>
                        </li>
                      </ul>
                      <Button 
                        className="w-full" 
                        variant="outline"
                        onClick={() => {
                          const form = document.createElement('div');
                          form.innerHTML = `<div id="enterprise-contact"></div>`;
                          document.body.appendChild(form);
                        }}
                      >
                        Contact Sales
                        <Mail className="h-4 w-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </Tabs>
            </div>
          </section>

          {/* Payment Terms */}
          <section id="payment-terms" className="py-16 bg-white/5">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-8">Professional Payment Terms</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold text-xl">50%</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Project Start</h4>
                  <p className="text-foreground/70 text-sm">Upfront payment to begin development</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold text-xl">30%</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Milestone</h4>
                  <p className="text-foreground/70 text-sm">Progress payment at key milestone</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold text-xl">20%</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Completion</h4>
                  <p className="text-foreground/70 text-sm">Final payment upon delivery</p>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-foreground/70 text-sm mb-4">
                  Enterprise clients can discuss custom payment schedules
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={async () => {
                      try {
                        await fetch('/api/contact', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({
                            name: 'Payment Terms Inquiry',
                            email: 'inquiry@example.com',
                            message: 'I would like to discuss custom payment terms for my project.',
                            formType: 'finance',
                            service: 'Payment Terms'
                          })
                        });
                        alert('Payment terms inquiry sent! We\'ll contact you soon.');
                      } catch (error) {
                        window.location.href = 'mailto:finance@syncsphereofficial.com?subject=Custom%20Payment%20Terms%20Inquiry';
                      }
                    }}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Discuss Payment Terms
                  </Button>
                  <a href="https://wa.me/447424819094?text=Hi!%20I'd%20like%20to%20discuss%20enterprise%20payment%20options." target="_blank" rel="noopener noreferrer" className="inline-block">
                    <Button variant="outline" size="sm">
                      <Phone className="h-4 w-4 mr-2" />
                      WhatsApp Finance Team
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-20 bg-gradient-to-r from-primary to-blue-600 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-30 blur-3xl -z-10"></div>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl mb-8 opacity-90">
                Book your strategic consultation this week for priority Q4 2025 implementation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="https://wa.me/447424819094?text=Hi%20SyncSphere!%20I'd%20like%20to%20schedule%20a%20free%20consultation%20to%20discuss%20AI%20solutions%20for%20my%20business." target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="group bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg flex items-center gap-2 shadow-lg transition-all duration-300 hover:translate-y-[-2px] w-full sm:w-auto"
                  >
                    <Phone className="h-5 w-5" />
                    Schedule Free Consultation
                    <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </a>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="group text-white border-white hover:bg-white hover:text-primary px-8 py-6 text-lg flex items-center gap-2 transition-all duration-300 hover:translate-y-[-2px] w-full sm:w-auto"
                  onClick={async () => {
                    try {
                      await fetch('/api/contact', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                          name: 'Pricing Guide Request',
                          email: 'guide@example.com',
                          message: 'Please send me your detailed pricing guide for AI solutions.',
                          formType: 'demo',
                          service: 'Pricing Guide'
                        })
                      });
                      alert('Pricing guide request sent! Check your email soon.');
                    } catch (error) {
                      window.location.href = 'mailto:info@syncsphereofficial.com?subject=Pricing%20Guide%20Request';
                    }
                  }}
                >
                  <Download className="h-5 w-5" />
                  Download Pricing Guide
                </Button>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-sm opacity-80">
                <a href="#payment-terms" className="hover:opacity-100 transition-opacity">
                  <span>💳 Flexible payment terms</span>
                </a>
                <span className="hover:opacity-100 transition-opacity cursor-pointer" onClick={() => window.location.href = 'mailto:compliance@syncsphereofficial.com'}>
                  🌍 Global compliance
                </span>
                <span className="hover:opacity-100 transition-opacity cursor-pointer" onClick={() => window.location.href = 'mailto:security@syncsphereofficial.com'}>
                  🔒 Enterprise security
                </span>
                <span>🏢 Fortune 500 trusted</span>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </SEOProvider>
  );
};

export default Pricing;
