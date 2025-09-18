import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import SEOProvider from '@/components/SEOProvider';
import RegionalPricing from '@/components/RegionalPricing';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, Globe } from 'lucide-react';

const WebDevelopmentUK = () => {
  return (
    <SEOProvider
      title="Enterprise Web Development UK | GDPR-Compliant Web Solutions | SyncSphere"
      description="Leading enterprise web development company in the UK. GDPR-compliant web solutions with advanced security, UK data residency, and enterprise integrations for British businesses."
      keywords="enterprise web development uk, gdpr web development, uk web development company, business web development uk, custom web development uk"
      region="uk"
      service="web-development"
    >
      <ServiceLayout>
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-30 blur-3xl -z-10"></div>
            <Badge variant="outline" className="mb-4 bg-white/5 border-white/10 text-foreground/80 backdrop-blur-sm">
              🇬🇧 GDPR-Compliant Enterprise Web
            </Badge>
            <h1 className="text-foreground text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">Web Development UK</span>
            </h1>
            <p className="text-foreground/80 text-xl mb-8 max-w-4xl mx-auto">
              Transform your British enterprise with GDPR-compliant web solutions. Advanced security, 
              UK data residency, and enterprise integrations. Trusted by FTSE 100 companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary text-white px-8 py-6 text-lg flex items-center gap-2 shadow-lg transition-all duration-300 hover:translate-y-[-2px]"
              >
                Schedule Enterprise Demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          <div className="mb-16">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Globe className="h-6 w-6 text-primary" />
                  UK Enterprise Web Development
                </CardTitle>
                <CardDescription className="text-foreground/70">
                  GDPR-compliant web solutions with UK data sovereignty and enterprise security
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground/80">GDPR-compliant web development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground/80">UK data residency</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground/80">Enterprise security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground/80">24/7 UK support</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RegionalPricing 
              service="web-development" 
              region="uk" 
              autoDetect={false}
            />
          </div>
        </section>

        <div className="bg-gradient-to-r from-primary to-blue-600 text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-30 blur-3xl -z-10"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your UK Web Presence?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join FTSE 100 companies using our enterprise web platform.
            </p>
            <Button size="lg" variant="secondary">
              Schedule UK Demo
            </Button>
          </div>
        </div>
      </ServiceLayout>
    </SEOProvider>
  );
};

export default WebDevelopmentUK;
