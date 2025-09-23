import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import SEOProvider from '@/components/SEOProvider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, Globe, Smartphone, Zap, Shield, Code, Palette } from 'lucide-react';

const WebDevelopment = () => {
  const features = [
    "Modern responsive design",
    "AI-powered personalization",
    "SEO optimization",
    "Performance optimization",
    "Security best practices",
    "Content management systems",
    "E-commerce integration",
    "Analytics and tracking"
  ];

  const technologies = [
    "React & Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "WordPress",
    "Shopify",
    "AWS/Vercel",
    "AI Integration APIs"
  ];

  return (
    <SEOProvider
      title="Website Design & Development | AI-Enhanced Web Solutions | SyncSphere"
      description="Professional website design and development services with AI integration. Modern, responsive websites that convert visitors into customers. Custom web solutions for businesses worldwide."
      keywords="website design, web development, responsive design, ai websites, custom websites, web design agency"
    >
      <ServiceLayout>
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-blue-500 text-blue-600">
              <Globe className="w-4 h-4 mr-2" />
              Web Development Excellence
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Website Design & Development
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Create stunning, high-performance websites that drive results. From modern design to AI integration, 
              we build digital experiences that convert visitors into customers and grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/447424819094?text=Hi! I'd like to start a web development project with a £500 pilot program." target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full">
                  Start £500 Pilot
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Button 
                size="lg" 
                variant="outline"
                onClick={async () => {
                  try {
                    await fetch('/api/contact', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        name: 'Portfolio Request',
                        email: 'portfolio@example.com',
                        message: 'I would like to see your web development portfolio.',
                        formType: 'demo',
                        service: 'Web Development Portfolio'
                      })
                    });
                    alert('Portfolio request sent! We\'ll send you our latest work examples.');
                  } catch (error) {
                    window.location.href = 'mailto:info@syncsphereofficial.com?subject=Web%20Development%20Portfolio%20Request';
                  }
                }}
              >
                View Portfolio
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Complete Web Solutions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Palette className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Modern Design</h3>
                  <p className="text-sm text-muted-foreground">Beautiful, user-friendly interfaces that engage visitors</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Smartphone className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Mobile-First</h3>
                  <p className="text-sm text-muted-foreground">Responsive design that works perfectly on all devices</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Zap className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Fast Performance</h3>
                  <p className="text-sm text-muted-foreground">Optimized for speed and search engine rankings</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 text-red-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Secure & Reliable</h3>
                  <p className="text-sm text-muted-foreground">Built with security best practices and reliability</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Features List */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Everything You Need for Success
                </h2>
                <div className="grid gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="h-5 w-5" />
                      Technologies We Use
                    </CardTitle>
                    <CardDescription>
                      Cutting-edge tools and frameworks for modern web development
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Transparent Pricing
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Starter Website</CardTitle>
                  <CardDescription>Perfect for small businesses</CardDescription>
                  <div className="text-3xl font-bold">$500 - $2,000</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Up to 5 pages</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Responsive design</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Basic SEO</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Contact forms</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary">
                <CardHeader>
                  <Badge className="w-fit mb-2">Most Popular</Badge>
                  <CardTitle>Professional Website</CardTitle>
                  <CardDescription>Advanced features and customization</CardDescription>
                  <div className="text-3xl font-bold">$2,000 - $5,000</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Up to 15 pages</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Custom design</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">CMS integration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">AI features</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Advanced SEO</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Enterprise Solution</CardTitle>
                  <CardDescription>Complex web applications</CardDescription>
                  <div className="text-3xl font-bold">$5,000+</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Unlimited pages</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Custom functionality</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">API integrations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Advanced AI</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Ongoing support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Card className="bg-black border-white/10 text-white">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-4">Ready to Build Your Website?</h2>
                <p className="text-lg mb-6 text-white/70">
                  Let's create a stunning website that drives results for your business
                </p>
                <a href="https://wa.me/447424819094?text=Hi! I'm ready to build my website with SyncSphere. Can we discuss my requirements?" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Get Started Today
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </ServiceLayout>
    </SEOProvider>
  );
};

export default WebDevelopment;