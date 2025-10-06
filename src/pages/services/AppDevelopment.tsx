import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import SEOProvider from '@/components/SEOProvider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, Smartphone, Monitor, Zap, Shield, Code, Users } from 'lucide-react';

const AppDevelopment = () => {
  const features = [
    "Native iOS & Android apps",
    "Cross-platform development",
    "AI-powered features",
    "Real-time synchronization",
    "Offline functionality",
    "Push notifications",
    "In-app purchases",
    "Analytics integration"
  ];

  const technologies = [
    "React Native",
    "Flutter",
    "Swift/Kotlin",
    "Node.js",
    "Firebase",
    "AWS Mobile",
    "AI/ML APIs",
    "Cloud Storage"
  ];

  return (
    <SEOProvider
      title="Mobile & Web App Development | AI-Enhanced Applications | SyncSphere"
      description="Professional mobile and web app development services with AI integration. Custom iOS, Android, and web applications that deliver exceptional user experiences and business value."
      keywords="mobile app development, web app development, ios app, android app, custom apps, ai apps"
    >
      <ServiceLayout>
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              <Smartphone className="w-4 h-4 mr-2" />
              App Development Excellence
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-300 bg-clip-text text-transparent">
              Mobile & Web App Development
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Transform your ideas into powerful mobile and web applications. We build custom apps with AI features 
              that engage users, streamline operations, and drive business growth across all platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/447424819094?text=Hi! I'd like to start an app development project with a £1,000 pilot program." target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary hover:bg-primary/90 w-full">
                  Start £1,000 Pilot
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
                        name: 'App Portfolio Request',
                        email: 'portfolio@example.com',
                        message: 'I would like to see your app development portfolio.',
                        formType: 'demo',
                        service: 'App Development Portfolio'
                      })
                    });
                    alert('Portfolio request sent! We\'ll send you our latest app examples.');
                  } catch (error) {
                    window.location.href = 'mailto:info@syncsphereofficial.com?subject=App%20Development%20Portfolio%20Request';
                  }
                }}
              >
                View App Portfolio
              </Button>
            </div>
          </div>

          {/* Platform Options */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Multi-Platform Development
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Smartphone className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Mobile Apps</h3>
                  <p className="text-muted-foreground mb-4">
                    Native iOS and Android applications with optimal performance and user experience
                  </p>
                  <Badge variant="secondary">iOS & Android</Badge>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Monitor className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Web Apps</h3>
                  <p className="text-muted-foreground mb-4">
                    Progressive web applications that work seamlessly across all browsers and devices
                  </p>
                  <Badge variant="secondary">PWA & SPA</Badge>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Code className="h-16 w-16 text-purple-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Cross-Platform</h3>
                  <p className="text-muted-foreground mb-4">
                    Single codebase solutions that run natively on multiple platforms
                  </p>
                  <Badge variant="secondary">React Native & Flutter</Badge>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Features & Technologies */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Advanced App Features
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
                      <Zap className="h-5 w-5" />
                      Development Stack
                    </CardTitle>
                    <CardDescription>
                      Modern technologies for scalable, high-performance applications
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

          {/* AI Integration */}
          <div className="mb-16">
            <Card className="bg-black border-white/10 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-primary" />
                  AI-Powered App Features
                </CardTitle>
                <CardDescription className="text-white/70">
                  Enhance your app with cutting-edge artificial intelligence capabilities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-white">Natural language processing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-white">Computer vision & image recognition</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-white">Predictive analytics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-white">Personalized recommendations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-white">Voice recognition & synthesis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-white">Intelligent automation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-white">Real-time data processing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-white">Machine learning models</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Pricing */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              App Development Pricing
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Simple App</CardTitle>
                  <CardDescription>Basic functionality and features</CardDescription>
                  <div className="text-3xl font-bold">$3,000 - $6,000</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Single platform</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Basic UI/UX design</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Core functionality</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">App store deployment</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary">
                <CardHeader>
                  <Badge className="w-fit mb-2">Most Popular</Badge>
                  <CardTitle>Advanced App</CardTitle>
                  <CardDescription>Feature-rich with AI integration</CardDescription>
                  <div className="text-3xl font-bold">$6,000 - $15,000</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Cross-platform</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Custom design</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">AI features</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Backend integration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Analytics & monitoring</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Enterprise App</CardTitle>
                  <CardDescription>Complex business applications</CardDescription>
                  <div className="text-3xl font-bold">$15,000+</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Multi-platform</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Advanced AI/ML</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Enterprise integrations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Scalable architecture</span>
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
                <h2 className="text-3xl font-bold mb-4">Ready to Build Your App?</h2>
                <p className="text-lg mb-6 text-white/70">
                  Let's turn your app idea into reality with cutting-edge technology and AI integration
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://wa.me/447424819094?text=Hi! I'm ready to start my app development project. Can we discuss my requirements?" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                      Start Your Project
                    </Button>
                  </a>
                  <a href="https://wa.me/447424819094?text=Hi! I'd like to schedule a consultation for app development." target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline" className="text-white border-white/10 hover:bg-white/5">
                      Schedule Consultation
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </ServiceLayout>
    </SEOProvider>
  );
};

export default AppDevelopment;