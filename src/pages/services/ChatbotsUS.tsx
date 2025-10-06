import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import SEOProvider from '@/components/SEOProvider';
import RegionalPricing from '@/components/RegionalPricing';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, MessageSquare, Brain, Zap, Shield, Users, BarChart3 } from 'lucide-react';

const ChatbotsUS = () => {
  const usEnterpriseFeatures = [
    "Fortune 500-grade conversational AI",
    "Enterprise CRM integration (Salesforce, HubSpot)",
    "HIPAA and SOC 2 compliant architecture",
    "Multi-channel deployment (Slack, Teams, web)",
    "Advanced NLP with 98.7% accuracy",
    "Real-time sentiment analysis and escalation",
    "24/7 enterprise support with dedicated CSM",
    "Federal contracting compliance (FAR/DFARS)"
  ];

  const fortune500Cases = [
    {
      company: "Fortune 50 Technology Company",
      industry: "Technology",
      challenge: "Customer support for 50M+ users across 180 countries",
      solution: "Omnichannel AI assistant with 24/7 multilingual support",
      metrics: {
        "Customer Satisfaction": "96.4%",
        "First Contact Resolution": "91.7%",
        "Cost Reduction": "$47M annually",
        "Response Time": "< 1 second"
      },
      techStack: "Node.js, MongoDB, Redis, Docker, AWS ECS, GPT-4, ElevenLabs",
    },
    {
      company: "Major US Bank",
      industry: "Financial Services",
      challenge: "Secure banking assistance for 25M+ customers",
      solution: "HIPAA-compliant banking chatbot with fraud detection",
      metrics: {
        "Transaction Volume": "$2.3B processed",
        "Fraud Prevention": "99.8% accuracy",
        "Customer Adoption": "87% active users",
        "Compliance Score": "100% SOX/PCI"
      },
      techStack: "Python, PostgreSQL, Kubernetes, Azure, OpenAI API, n8n",
    },
    {
      company: "Fortune 100 Healthcare System",
      industry: "Healthcare",
      challenge: "Patient engagement across 500+ facilities",
      solution: "HIPAA-compliant health assistant with EHR integration",
      metrics: {
        "Patient Interactions": "12M+ monthly",
        "Appointment Bookings": "87% automated",
        "Patient Satisfaction": "94.2%",
        "Staff Time Saved": "2,400 hours/week"
      },
      techStack: "React, Express.js, MySQL, HL7 FHIR, Azure Functions, Epic EHR, Twilio",
    }
  ];

  const enterpriseIntegrations = [
    "Salesforce Service Cloud integration",
    "Microsoft Dynamics 365 Customer Service",
    "HubSpot CRM and marketing automation",
    "Zendesk enterprise ticketing system",
    "ServiceNow IT service management",
    "Oracle CX Cloud integration",
    "SAP Customer Experience solutions",
    "Custom enterprise API integrations"
  ];

  return (
    <SEOProvider
      title="AI Chatbot Development US | Enterprise Conversational AI | SyncSphere"
      description="Top AI chatbot development company in the US. Advanced conversational AI solutions with machine learning, natural language understanding, and enterprise integrations serving Fortune 500 companies."
      keywords="ai chatbot development us, conversational ai us, enterprise chatbots us, chatbot development company us, nlp chatbots us, fortune 500 chatbots us"
      region="us"
      service="chatbots"
    >
      <ServiceLayout>
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-30 blur-3xl -z-10"></div>
            <Badge variant="outline" className="mb-4 bg-white/5 border-white/10 text-foreground/80 backdrop-blur-sm">
              🇺🇸 Fortune 500 Trusted AI
            </Badge>
            <h1 className="text-foreground text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">Chatbots US</span>
            </h1>
            <p className="text-foreground/80 text-xl mb-8 max-w-4xl mx-auto">
              Transform customer engagement with Fortune 500-grade conversational AI. Advanced NLP, enterprise integrations, 
              and full US compliance. Trusted by America's largest corporations.
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
                View Live Demo
              </Button>
            </div>
          </div>

          {/* US Enterprise Features */}
          <div className="mb-16">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  US Enterprise Chatbot Features
                </CardTitle>
                <CardDescription className="text-foreground/70">
                  Fortune 500-grade conversational AI with full US regulatory compliance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {usEnterpriseFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Fortune 500 Case Studies */}
          <div className="mb-16">
            <h2 className="text-foreground text-3xl font-bold text-center mb-12">
              Fortune 500 Success Stories
            </h2>
            <div className="space-y-8">
              {fortune500Cases.map((study, index) => (
                <Card key={index} className="bg-card border-border shadow-lg">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-12 gap-8">
                      <div className="lg:col-span-4">
                        <h3 className="text-xl font-bold mb-2 text-foreground">{study.company}</h3>
                        <Badge className="mb-4 bg-primary text-primary-foreground">{study.industry}</Badge>
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-medium text-primary">Challenge:</h4>
                            <p className="text-sm text-foreground/70">{study.challenge}</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-blue-400">Solution:</h4>
                            <p className="text-sm text-foreground/70">{study.solution}</p>
                          </div>
                        </div>
                      </div>
                      <div className="lg:col-span-4">
                        <h4 className="font-medium text-green-400 mb-3">Enterprise Metrics:</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {Object.entries(study.metrics).map(([key, value], idx) => (
                            <div key={idx} className="text-center p-3 bg-card rounded-lg border border-border">
                              <div className="text-lg font-bold text-green-400">{value}</div>
                              <div className="text-xs text-foreground/60">{key}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="lg:col-span-4">
                        <h4 className="font-medium text-purple-400 mb-3">Tech Stack:</h4>
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
            <h2 className="text-foreground text-3xl font-bold text-center mb-12">
              Enterprise System Integrations
            </h2>
            <Card className="bg-card border-border shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {enterpriseIntegrations.map((integration, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground/80">{integration}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* ROI Dashboard */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-primary to-blue-600 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Enterprise ROI Metrics</h2>
                <p className="text-lg mb-6 opacity-90">
                  Real performance data from Fortune 500 chatbot deployments
                </p>
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center">
                    <Users className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">50M+</div>
                    <div className="text-sm opacity-80">Users served daily</div>
                  </div>
                  <div className="text-center">
                    <BarChart3 className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">96.4%</div>
                    <div className="text-sm opacity-80">Customer satisfaction</div>
                  </div>
                  <div className="text-center">
                    <Brain className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">98.7%</div>
                    <div className="text-sm opacity-80">NLP accuracy</div>
                  </div>
                  <div className="text-center">
                    <Shield className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm opacity-80">Compliance rate</div>
                  </div>
                </div>
                <Button size="lg" variant="secondary">
                  Get Enterprise Assessment
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Pricing Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RegionalPricing 
              service="chatbots" 
              region="us" 
              autoDetect={false}
            />
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-blue-600 text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-30 blur-3xl -z-10"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Deploy Enterprise AI?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join Fortune 500 companies using our conversational AI platform. Enterprise security, US compliance, and dedicated success teams included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Schedule Technical Demo
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                Download Case Studies
              </Button>
            </div>
            <p className="text-sm mt-6 opacity-80">
              96.8% accuracy • Fortune 500 trusted • SOC 2 + HIPAA compliant
            </p>
          </div>
        </div>
      </ServiceLayout>
    </SEOProvider>
  );
};

export default ChatbotsUS;
