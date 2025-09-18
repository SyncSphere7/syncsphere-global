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
      pilot: { usd: [1875], gbp: [1500], eur: [1700] },
      starter: { usd: [4375, 5000], gbp: [3500, 4000], eur: [3900, 4500] },
      professional: { usd: [15000, 35000], gbp: [12000, 28000], eur: [13500, 31500] },
      enterprise: { usd: [35000, 75000], gbp: [28000, 60000], eur: [31500, 67500] }
    },
    chatbots: {
      pilot: { usd: [1875], gbp: [1500], eur: [1700] },
      starter: { usd: [3125, 3750], gbp: [2500, 3000], eur: [2800, 3400] },
      professional: { usd: [12000, 28000], gbp: [9600, 22400], eur: [10800, 25200] },
      enterprise: { usd: [28000, 60000], gbp: [22400, 48000], eur: [25200, 54000] }
    },
    'voice-agents': {
      pilot: { usd: [1875], gbp: [1500], eur: [1700] },
      starter: { usd: [5000, 6250], gbp: [4000, 5000], eur: [4500, 5600] },
      professional: { usd: [18000, 40000], gbp: [14400, 32000], eur: [16200, 36000] },
      enterprise: { usd: [40000, 85000], gbp: [32000, 68000], eur: [36000, 76500] }
    },
    ecommerce: {
      pilot: { usd: [1250], gbp: [1000], eur: [1100] },
      starter: { usd: [2500, 5000], gbp: [2000, 4000], eur: [2250, 4500] },
      professional: { usd: [5000, 15000], gbp: [4000, 12000], eur: [4500, 13500] },
      enterprise: { usd: [15000, 35000], gbp: [12000, 28000], eur: [13500, 31500] }
    },
    'web-development': {
      pilot: { usd: [625], gbp: [500], eur: [550] },
      starter: { usd: [1250, 2500], gbp: [1000, 2000], eur: [1100, 2250] },
      professional: { usd: [2000, 8000], gbp: [1600, 6400], eur: [1800, 7200] },
      enterprise: { usd: [8000, 20000], gbp: [6400, 16000], eur: [7200, 18000] }
    },
    'app-development': {
      pilot: { usd: [1250], gbp: [1000], eur: [1100] },
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
      pilot: service.pilot[curr],
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
                <div className="grid md:grid-cols-4 gap-6 mb-12">
                  <Card className="relative border-blue-500/30 bg-blue-500/5">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-blue-500 text-white px-3 py-1 text-xs">
                        🚀 Quick Start
                      </Badge>
                    </div>
                    <CardHeader className="text-center pt-6">
                      <CardTitle className="text-lg">Pilot Program</CardTitle>
                      <CardDescription className="text-sm">Working AI solution</CardDescription>
                      <div className="text-2xl font-bold text-foreground mt-3">
                        {formatPrice(pricing.pilot[0])}
                      </div>
                      <p className="text-xs text-foreground/60">Delivered in 7-14 days</p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <ul className="space-y-2 mb-4 text-xs">
                        <li className="flex items-center gap-2">
                          <Check className="h-3 w-3 text-green-500" />
                          <span>Basic working solution (yours to keep)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-3 w-3 text-green-500" />
                          <span>Single platform deployment</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-3 w-3 text-green-500" />
                          <span>30 days to see results</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-3 w-3 text-green-500" />
                          <span>Credits toward upgrades</span>
                        </li>
                      </ul>
                      <a href="https://wa.me/447424819094?text=Hi!%20I'd%20like%20to%20start%20a%20pilot%20program%20for%20" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full text-xs py-2 bg-blue-500 hover:bg-blue-600">
                          Start Pilot
                          <ArrowRight className="h-3 w-3 ml-1" />
                        </Button>
                      </a>
                    </CardContent>
                  </Card>

                  <Card className="relative">
                    <CardHeader className="text-center">
                      <CardTitle className="text-lg">Quick Start</CardTitle>
                      <CardDescription className="text-sm">Perfect for SMEs</CardDescription>
                      <div className="text-2xl font-bold text-foreground mt-3">
                        {pricing.starter.length > 1 ? `${formatPrice(pricing.starter[0])} - ${formatPrice(pricing.starter[1])}` : formatPrice(pricing.starter[0])}
                      </div>
                      <p className="text-xs text-foreground/60">Flexible payments available</p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <ul className="space-y-2 mb-4 text-xs">
                        <li className="flex items-center gap-2">
                          <Check className="h-3 w-3 text-green-500" />
                          <span>Essential features</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-3 w-3 text-green-500" />
                          <span>Basic integrations</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-3 w-3 text-green-500" />
                          <span>Email support</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-3 w-3 text-green-500" />
                          <span>60-day warranty</span>
                        </li>
                      </ul>
                      <Link to={`/services/${selectedService}`}>
                        <Button className="w-full text-xs py-2" variant="outline">
                          Get Started
                          <ArrowRight className="h-3 w-3 ml-1" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>

                  <Card className="relative border-primary shadow-lg scale-105">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-white px-3 py-1 text-xs">
                        <Star className="h-3 w-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                    <CardHeader className="text-center pt-6">
                      <CardTitle className="text-lg">Professional</CardTitle>
                      <CardDescription className="text-sm">Growing businesses</CardDescription>
                      <div className="text-2xl font-bold text-foreground mt-3">
                        {formatPrice(pricing.professional[0])} - {formatPrice(pricing.professional[1])}
                      </div>
                      <p className="text-xs text-foreground/60">Monthly payments available</p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <ul className="space-y-2 mb-4 text-xs">
                        <li className="flex items-center gap-2">
                          <Check className="h-3 w-3 text-green-500" />
                          <span>Advanced features</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-3 w-3 text-green-500" />
                          <span>Custom integrations</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-3 w-3 text-green-500" />
                          <span>Priority support</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-3 w-3 text-green-500" />
                          <span>90-day warranty</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-3 w-3 text-green-500" />
                          <span>Training included</span>
                        </li>
                      </ul>
                      <Link to={`/services/${selectedService}`}>
                        <Button className="w-full text-xs py-2 bg-primary">
                          Get Started
                          <ArrowRight className="h-3 w-3 ml-1" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>

                  <Card className="relative">
                    <CardHeader className="text-center">
                      <CardTitle className="text-lg">Enterprise</CardTitle>
                      <CardDescription className="text-sm">Large organizations</CardDescription>
                      <div className="text-2xl font-bold text-foreground mt-3">
                        {formatPrice(pricing.enterprise[0])} - {formatPrice(pricing.enterprise[1])}
                      </div>
                      <p className="text-xs text-foreground/60">Custom payment terms</p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <ul className="space-y-2 mb-4 text-xs">
                        <li className="flex items-center gap-2">
                          <Check className="h-3 w-3 text-green-500" />
                          <span>Enterprise-grade</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-3 w-3 text-green-500" />
                          <span>Full customization</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-3 w-3 text-green-500" />
                          <span>24/7 dedicated support</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-3 w-3 text-green-500" />
                          <span>1-year warranty</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-3 w-3 text-green-500" />
                          <span>SLA guarantees</span>
                        </li>
                      </ul>
                      <Button 
                        className="w-full text-xs py-2" 
                        variant="outline"
                        onClick={async () => {
                          try {
                            await fetch('/api/contact', {
                              method: 'POST',
                              headers: { 'Content-Type': 'application/json' },
                              body: JSON.stringify({
                                name: 'Enterprise Inquiry',
                                email: 'enterprise@example.com',
                                message: 'I would like to discuss enterprise AI solutions.',
                                formType: 'sales',
                                service: 'Enterprise'
                              })
                            });
                            alert('Enterprise inquiry sent! We\'ll contact you within 24 hours.');
                          } catch (error) {
                            window.location.href = 'mailto:sales@syncsphereofficial.com?subject=Enterprise%20AI%20Solutions%20Inquiry';
                          }
                        }}
                      >
                        Contact Sales
                        <Mail className="h-3 w-3 ml-1" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </Tabs>
            </div>
          </section>

          {/* Payment Terms */}
          <section id="payment-terms" className="py-16 bg-white/5">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-8">Flexible Payment Options</h3>
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="text-center bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-400 font-bold text-sm">100%</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Pilot Program</h4>
                  <p className="text-foreground/70 text-xs">Full payment upfront for quick delivery</p>
                </div>
                <div className="text-center bg-white/5 p-6 rounded-lg border border-white/10">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold text-sm">25%</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Quick Start</h4>
                  <p className="text-foreground/70 text-xs">25% upfront, flexible milestone payments</p>
                </div>
                <div className="text-center bg-white/5 p-6 rounded-lg border border-white/10">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold text-sm">Monthly</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Professional</h4>
                  <p className="text-foreground/70 text-xs">Monthly payments over 6-12 months</p>
                </div>
                <div className="text-center bg-white/5 p-6 rounded-lg border border-white/10">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold text-sm">Custom</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Enterprise</h4>
                  <p className="text-foreground/70 text-xs">Tailored payment schedules</p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-foreground/70 text-sm mb-4">
                  All payment plans include setup, training, and ongoing support
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://wa.me/447424819094?text=Hi!%20I'd%20like%20to%20discuss%20flexible%20payment%20options%20for%20AI%20solutions." target="_blank" rel="noopener noreferrer" className="inline-block">
                    <Button variant="outline" size="sm">
                      <Phone className="h-4 w-4 mr-2" />
                      Discuss Payment Options
                    </Button>
                  </a>
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
                            message: 'I would like information about monthly payment plans and flexible terms.',
                            formType: 'finance',
                            service: 'Payment Plans'
                          })
                        });
                        alert('Payment inquiry sent! We\'ll contact you with flexible options.');
                      } catch (error) {
                        window.location.href = 'mailto:finance@syncsphereofficial.com?subject=Flexible%20Payment%20Plans%20Inquiry';
                      }
                    }}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Get Payment Info
                  </Button>
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
                Start with a £1,500 pilot program or book a free consultation to discuss your needs
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
