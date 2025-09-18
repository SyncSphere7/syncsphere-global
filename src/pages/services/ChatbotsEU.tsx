import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import SEOProvider from '@/components/SEOProvider';
import RegionalPricing from '@/components/RegionalPricing';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, MessageSquare, Brain, Zap, Shield, Users, BarChart3 } from 'lucide-react';

const ChatbotsEU = () => {
  const euEnterpriseFeatures = [
    "GDPR-compliant conversational AI architecture",
    "Multi-language support (27 EU languages)",
    "Enterprise CRM integration (SAP, Microsoft)",
    "ISO 27001 and SOC 2 Type II certified",
    "Advanced NLP with 98.5% accuracy",
    "Real-time sentiment analysis and escalation",
    "24/7 European support with local teams",
    "EU data residency and sovereignty"
  ];

  const europeanCases = [
    {
      company: "Major European Bank",
      industry: "Financial Services",
      challenge: "GDPR-compliant customer service across 15 EU countries",
      solution: "Multilingual AI assistant with regulatory compliance",
      metrics: {
        "Customer Satisfaction": "95.8%",
        "GDPR Compliance": "100%",
        "Languages Supported": "15",
        "Cost Reduction": "€23M annually"
      },
      techStack: "Node.js, PostgreSQL, Docker, Azure EU, GPT-4, ElevenLabs",
    },
    {
      company: "Fortune 500 Automotive",
      industry: "Manufacturing",
      challenge: "Technical support for 200+ dealerships across Europe",
      solution: "AI-powered technical assistant with parts integration",
      metrics: {
        "Resolution Rate": "89.3%",
        "Response Time": "< 2 seconds",
        "Dealership Adoption": "94%",
        "Parts Accuracy": "97.8%"
      },
      techStack: "Python, MongoDB, Kubernetes, SAP integration, OpenAI, n8n",
    },
    {
      company: "European Healthcare Network",
      industry: "Healthcare",
      challenge: "Patient engagement across 12 EU countries",
      solution: "GDPR-compliant health assistant with EHR integration",
      metrics: {
        "Patient Interactions": "8M+ monthly",
        "Appointment Bookings": "82% automated",
        "Patient Satisfaction": "93.7%",
        "GDPR Compliance": "100%"
      },
      techStack: "React, Express.js, MySQL, HL7 FHIR, Azure EU, Twilio",
    }
  ];

  const enterpriseIntegrations = [
    "SAP Customer Experience integration",
    "Microsoft Dynamics 365 European cloud",
    "Salesforce EU instance connectivity",
    "Oracle CX Cloud GDPR-compliant setup",
    "ServiceNow European data centers",
    "HubSpot with EU data residency",
    "Zendesk European infrastructure",
    "Custom GDPR-compliant API integrations"
  ];

  return (
    <SEOProvider
      title="AI Chatbot Development EU | GDPR-Compliant Conversational AI | SyncSphere"
      description="Leading AI chatbot development company in Europe. GDPR-compliant conversational AI solutions with multilingual support, enterprise integrations, and EU data residency for European businesses."
      keywords="ai chatbot development eu, conversational ai europe, gdpr chatbots, enterprise chatbots eu, multilingual chatbots, european ai solutions"
      region="eu"
      service="chatbots"
    >
      <ServiceLayout>
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-30 blur-3xl -z-10"></div>
            <Badge variant="outline" className="mb-4 bg-white/5 border-white/10 text-foreground/80 backdrop-blur-sm">
              🇪🇺 GDPR-Compliant Enterprise AI
            </Badge>
            <h1 className="text-foreground text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">Chatbots EU</span>
            </h1>
            <p className="text-foreground/80 text-xl mb-8 max-w-4xl mx-auto">
              Transform European customer engagement with GDPR-compliant conversational AI. Multilingual support, 
              enterprise integrations, and EU data sovereignty. Trusted by Europe's largest corporations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary text-white px-8 py-6 text-lg flex items-center gap-2 shadow-lg transition-all duration-300 hover:translate-y-[-2px]"
              >
                Schedule Enterprise Demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="group backdrop-blur-sm bg-white/5 text-foreground border-foreground/20 hover:bg-foreground/10 px-8 py-6 text-lg flex items-center gap-2 shadow-lg transition-all duration-300 hover:translate-y-[-2px]"
              >
                View GDPR Compliance
              </Button>
            </div>
          </div>

          {/* EU Enterprise Features */}
          <div className="mb-16">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  EU Enterprise Chatbot Features
                </CardTitle>
                <CardDescription className="text-foreground/70">
                  GDPR-compliant conversational AI with European data sovereignty
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {euEnterpriseFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* European Case Studies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              European Enterprise Success Stories
            </h2>
            <div className="space-y-8">
              {europeanCases.map((study, index) => (
                <Card key={index} className="bg-gradient-to-r from-slate-50 to-blue-50 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-12 gap-8">
                      <div className="lg:col-span-4">
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
                      <div className="lg:col-span-4">
                        <h4 className="font-medium text-green-600 mb-3">Enterprise Metrics:</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {Object.entries(study.metrics).map(([key, value], idx) => (
                            <div key={idx} className="text-center p-3 bg-white rounded-lg border">
                              <div className="text-lg font-bold text-green-600">{value}</div>
                              <div className="text-xs text-muted-foreground">{key}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="lg:col-span-4">
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

          {/* Enterprise Integrations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              European Enterprise Integrations
            </h2>
            <Card className="bg-gradient-to-br from-slate-50 to-blue-50 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {enterpriseIntegrations.map((integration, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-blue-600 flex-shrink-0" />
                      <span className="text-sm">{integration}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* ROI Dashboard */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">European Enterprise ROI</h2>
                <p className="text-lg mb-6 opacity-90">
                  Real performance data from European enterprise deployments
                </p>
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center">
                    <Users className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">27</div>
                    <div className="text-sm opacity-80">EU languages supported</div>
                  </div>
                  <div className="text-center">
                    <BarChart3 className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">95.8%</div>
                    <div className="text-sm opacity-80">Customer satisfaction</div>
                  </div>
                  <div className="text-center">
                    <Brain className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">98.5%</div>
                    <div className="text-sm opacity-80">NLP accuracy</div>
                  </div>
                  <div className="text-center">
                    <Shield className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm opacity-80">GDPR compliance</div>
                  </div>
                </div>
                <Button size="lg" variant="secondary">
                  Get GDPR Assessment
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Pricing Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RegionalPricing 
              service="chatbots" 
              region="eu" 
              autoDetect={false}
            />
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for GDPR-Compliant AI?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join European enterprises using our compliant conversational AI platform. EU data sovereignty, multilingual support, and dedicated European teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Schedule European Demo
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                Download GDPR Guide
              </Button>
            </div>
            <p className="text-sm mt-6 opacity-80">
              🇪🇺 27 languages • 🛡️ GDPR compliant • 🔒 EU data residency
            </p>
          </div>
        </div>
      </ServiceLayout>
    </SEOProvider>
  );
};

export default ChatbotsEU;
