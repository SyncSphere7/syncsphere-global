import React, { useState } from 'react';
import SEOProvider from '@/components/SEOProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, Rocket, Zap, Shield, Clock, TrendingUp, Users, Code, Smartphone } from 'lucide-react';

const StartupMVP = () => {
  const [currency, setCurrency] = useState('GBP');

  const pricingData = {
    standard: { usd: [10000, 18750], gbp: [8000, 15000], eur: [9000, 16875] },
    partnership: { usd: [5000, 9375], gbp: [4000, 7500], eur: [4500, 8500] },
    revenue: { usd: [7000, 13125], gbp: [5600, 10500], eur: [6300, 11900] }
  };

  const formatPrice = (amount) => {
    const symbols = { USD: '$', GBP: '£', EUR: '€' };
    return `${symbols[currency]}${amount.toLocaleString()}`;
  };

  const getCurrentPricing = () => {
    const curr = currency.toLowerCase();
    return {
      standard: pricingData.standard[curr],
      partnership: pricingData.partnership[curr],
      revenue: pricingData.revenue[curr]
    };
  };

  const pricing = getCurrentPricing();

  return (
    <SEOProvider
      title="Startup MVP Development | From Idea to Launch in 30 Days | SyncSphere"
      description="Professional MVP development for startups with flexible payment options. Full-stack web & mobile apps with AI integration. Standard payment, equity partnerships, or revenue sharing available."
      keywords="startup mvp development, minimum viable product, startup app development, mvp web development, startup partnerships, equity development"
    >
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-background relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-30 blur-3xl -z-10"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <span className="px-4 py-2 bg-white/5 rounded-full text-foreground/80 text-sm mb-6 border border-white/10 backdrop-blur-sm animate-fadeIn">
                🚀 Startup MVP Development
              </span>
              <h1 className="text-foreground text-4xl md:text-6xl font-bold mb-6 animate-fadeIn leading-tight">
                From <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">Idea to Launch</span> in 30 Days
              </h1>
              <p className="text-foreground/80 text-xl mb-8 max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: "0.2s" }}>
                Professional MVP development for startups with flexible payment options. 
                Full-stack web & mobile applications with AI integration, designed to get you funded and growing fast.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
                <Badge variant="outline" className="px-4 py-2 bg-white/5 border-white/10 text-foreground/80 backdrop-blur-sm">
                  <Rocket className="h-4 w-4 mr-2" />
                  30-Day Delivery
                </Badge>
                <Badge variant="outline" className="px-4 py-2 bg-white/5 border-white/10 text-foreground/80 backdrop-blur-sm">
                  <Code className="h-4 w-4 mr-2" />
                  Full-Stack Development
                </Badge>
                <Badge variant="outline" className="px-4 py-2 bg-white/5 border-white/10 text-foreground/80 backdrop-blur-sm">
                  <Zap className="h-4 w-4 mr-2" />
                  AI Integration
                </Badge>
                <Badge variant="outline" className="px-4 py-2 bg-white/5 border-white/10 text-foreground/80 backdrop-blur-sm">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Flexible Payment Options
                </Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn" style={{ animationDelay: "0.6s" }}>
                <a href="https://wa.me/447392428844?text=Hi! I'd like to discuss MVP development for my startup idea." target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 text-white px-8 py-6 text-lg">
                    <Rocket className="mr-2 h-5 w-5" />
                    Start Your MVP
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <a href="https://wa.me/447392428844?text=Hi! I'd like to learn about flexible payment options for MVP development." target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="backdrop-blur-sm bg-white/5 text-foreground border-foreground/20 hover:bg-foreground/10 px-8 py-6 text-lg">
                    Explore Payment Options
                  </Button>
                </a>
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

          {/* What's Included */}
          <section className="py-16 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-foreground text-3xl font-bold mb-4">Complete MVP Package</h2>
                <p className="text-foreground/80 text-lg">
                  Everything you need to launch, validate, and scale your startup
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Smartphone className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Web & Mobile App</h3>
                    <p className="text-sm text-muted-foreground">Responsive web app + mobile-optimized experience</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Zap className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">AI Integration</h3>
                    <p className="text-sm text-muted-foreground">Smart features powered by latest AI technology</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Shield className="h-12 w-12 text-green-500 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Secure Backend</h3>
                    <p className="text-sm text-muted-foreground">Scalable infrastructure with security best practices</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Users className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">User Management</h3>
                    <p className="text-sm text-muted-foreground">Authentication, profiles, and user analytics</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Technical Features</h3>
                  <div className="grid gap-3">
                    {[
                      "Modern React/Next.js frontend",
                      "Node.js backend with database",
                      "User authentication & profiles",
                      "Payment integration ready",
                      "AI/ML API integrations",
                      "Real-time features",
                      "Mobile-responsive design",
                      "SEO optimization"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-6">Business Support</h3>
                  <div className="grid gap-3">
                    {[
                      "30-day rapid development",
                      "Weekly progress updates",
                      "Investor-ready demo",
                      "Technical documentation",
                      "Deployment & hosting setup",
                      "3-month technical support",
                      "Scaling roadmap included",
                      "Fundraising preparation"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Flexible Payment Options */}
          <section className="py-16 bg-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-foreground text-3xl font-bold mb-4">Flexible Payment Options</h2>
                <p className="text-foreground/80 text-lg">
                  Choose the payment structure that works best for your startup's situation
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Standard Payment */}
                <Card className="relative">
                  <CardHeader className="text-center">
                    <CardTitle>Standard Payment</CardTitle>
                    <CardDescription>Full payment, full ownership</CardDescription>
                    <div className="text-3xl font-bold text-foreground mt-2">
                      {formatPrice(pricing.standard[0])} - {formatPrice(pricing.standard[1])}
                    </div>
                    <p className="text-sm text-foreground/60">One-time payment</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">100% ownership retained</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">No ongoing commitments</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Full source code ownership</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Priority support included</span>
                      </li>
                    </ul>
                    <a href="https://wa.me/447392428844?text=Hi! I'd like to discuss standard payment for MVP development." target="_blank" rel="noopener noreferrer">
                      <Button className="w-full">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>

                {/* Partnership Option */}
                <Card className="relative border-primary shadow-lg scale-105">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-white px-3 py-1">
                      🤝 Most Flexible
                    </Badge>
                  </div>
                  <CardHeader className="text-center pt-6">
                    <CardTitle>Partnership Option</CardTitle>
                    <CardDescription>Reduced cash + small equity stake</CardDescription>
                    <div className="text-3xl font-bold text-foreground mt-2">
                      {formatPrice(pricing.partnership[0])} - {formatPrice(pricing.partnership[1])}
                    </div>
                    <p className="text-sm text-foreground/60">+ 3-8% equity stake</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">50% reduced upfront cost</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Ongoing technical partnership</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Extended support included</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Scaling assistance</span>
                      </li>
                    </ul>
                    <a href="https://wa.me/447392428844?text=Hi! I'm interested in the partnership option for MVP development with reduced cash + equity." target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-primary">
                        Discuss Partnership
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>

                {/* Revenue Share */}
                <Card className="relative">
                  <CardHeader className="text-center">
                    <CardTitle>Revenue Share</CardTitle>
                    <CardDescription>Higher upfront + revenue percentage</CardDescription>
                    <div className="text-3xl font-bold text-foreground mt-2">
                      {formatPrice(pricing.revenue[0])} - {formatPrice(pricing.revenue[1])}
                    </div>
                    <p className="text-sm text-foreground/60">+ 10-15% revenue for 18 months</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">70% upfront payment</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Revenue share for 18 months</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">No equity required</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Growth-aligned partnership</span>
                      </li>
                    </ul>
                    <a href="https://wa.me/447392428844?text=Hi! I'd like to learn about the revenue share option for MVP development." target="_blank" rel="noopener noreferrer">
                      <Button className="w-full" variant="outline">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="py-16 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-foreground text-3xl font-bold mb-4">30-Day MVP Process</h2>
                <p className="text-foreground/80 text-lg">
                  From concept to launch in just one month
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Discovery & Planning</h3>
                  <p className="text-sm text-muted-foreground">Requirements gathering, technical architecture, and project planning</p>
                  <p className="text-xs text-primary mt-2">Days 1-3</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Design & Setup</h3>
                  <p className="text-sm text-muted-foreground">UI/UX design, database setup, and development environment</p>
                  <p className="text-xs text-primary mt-2">Days 4-7</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Development</h3>
                  <p className="text-sm text-muted-foreground">Core features, AI integration, and testing with weekly updates</p>
                  <p className="text-xs text-primary mt-2">Days 8-25</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <h3 className="font-semibold mb-2">Launch & Support</h3>
                  <p className="text-sm text-muted-foreground">Deployment, final testing, and handover with documentation</p>
                  <p className="text-xs text-primary mt-2">Days 26-30</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 bg-gradient-to-r from-primary to-blue-600 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-30 blur-3xl -z-10"></div>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Build Your MVP?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join successful startups who launched with SyncSphere. Choose your payment option and let's get started.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/447392428844?text=Hi! I'm ready to start my MVP development project. Let's discuss the best payment option for my startup." target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg">
                    <Rocket className="mr-2 h-5 w-5" />
                    Start Your MVP Today
                  </Button>
                </a>
                <a href="https://wa.me/447392428844?text=Hi! I'd like to schedule a consultation to discuss my startup idea and MVP requirements." target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary px-8 py-6 text-lg">
                    Schedule Consultation
                  </Button>
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </SEOProvider>
  );
};

export default StartupMVP;