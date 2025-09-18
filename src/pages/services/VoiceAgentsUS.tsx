import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import SEOProvider from '@/components/SEOProvider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, Mic, Phone, Zap, Target, TrendingUp, Shield, Headphones, Volume2 } from 'lucide-react';

const VoiceAgentsUS = () => {
  const usVoiceFeatures = [
    "American English accent optimization",
    "Enterprise call center integration (Genesys, Avaya)",
    "HIPAA-compliant voice data processing",
    "Real-time conversation analytics",
    "Multi-state regulatory compliance",
    "Cloud telephony integration (Twilio, RingCentral)",
    "CRM integration (Salesforce, HubSpot)",
    "FCC compliance for telecommunications"
  ];

  const enterpriseVoiceTech = [
    {
      technology: "Advanced Speech Recognition",
      description: "Enterprise-grade ASR with American accent models",
      features: ["Real-time transcription", "Noise cancellation", "Multi-speaker detection"],
      accuracy: "98.4%"
    },
    {
      technology: "Conversational AI Engine",
      description: "Context-aware dialogue management",
      features: ["Intent recognition", "Entity extraction", "Sentiment analysis"],
      accuracy: "97.1%"
    },
    {
      technology: "Neural Voice Synthesis",
      description: "Human-like voice generation",
      features: ["American accents", "Emotion modeling", "Custom voice cloning"],
      accuracy: "99.2%"
    }
  ];

  const usVoiceCaseStudies = [
    {
      company: "Fortune 100 Insurance Company",
      industry: "Insurance",
      challenge: "24/7 claims processing for 15M+ customers across 50 states",
      solution: "AI voice agent handling initial claims assessment and routing",
      results: ["92% call resolution", "$12M cost reduction", "1.8s average response time"],
      techStack: "Azure Speech, Node.js, PostgreSQL, Twilio, Salesforce",
    },
    {
      company: "Major US Healthcare System",
      industry: "Healthcare",
      challenge: "Appointment scheduling across 200+ facilities",
      solution: "HIPAA-compliant voice booking system with EHR integration",
      results: ["87% automation rate", "2,400 hours saved weekly", "96% patient satisfaction"],
      techStack: "Google Speech API, Python, MongoDB, Epic EHR, RingCentral",
    }
  ];

  const enterpriseUseCases = [
    {
      useCase: "Enterprise Customer Service",
      description: "Fortune 500 customer support automation",
      benefits: ["24/7 availability", "Consistent service quality", "Scalable operations"],
      industries: ["Financial Services", "Insurance", "Telecommunications", "Utilities"]
    },
    {
      useCase: "Healthcare Voice Assistants",
      description: "HIPAA-compliant medical voice automation",
      benefits: ["Appointment scheduling", "Prescription refills", "Symptom assessment"],
      industries: ["Hospitals", "Clinics", "Telemedicine", "Pharmacies"]
    },
    {
      useCase: "Sales & Lead Qualification",
      description: "Intelligent sales conversation handling",
      benefits: ["Lead scoring", "CRM integration", "Follow-up automation"],
      industries: ["Real Estate", "Financial Services", "B2B Sales", "Insurance"]
    }
  ];

  return (
    <SEOProvider
      title="AI Voice Agents US | Enterprise Voice Automation | SyncSphere"
      description="Leading AI voice agent development company in the US. Enterprise voice automation solutions with advanced speech recognition, conversational AI, and cloud telephony integration for American businesses."
      keywords="voice agents us, ai voice automation us, speech recognition us, enterprise voice us, call center automation us, voice ai us"
      region="us"
      service="voice-agents"
    >
      <ServiceLayout>
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-blue-500 text-blue-600">
              🇺🇸 Enterprise Voice AI Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Enterprise Voice Agents US
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Transform your American enterprise with intelligent voice automation. Advanced speech recognition, 
              conversational AI, and enterprise telephony integration with Fortune 500 scalability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
                Try Enterprise Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Schedule Voice Consultation
              </Button>
            </div>
          </div>

          {/* US Voice Features */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-red-50 to-blue-50 border-red-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mic className="h-6 w-6 text-red-600" />
                  US Enterprise Voice Technology
                </CardTitle>
                <CardDescription>
                  Advanced voice solutions optimized for American enterprises
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {usVoiceFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enterprise Voice Technologies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Enterprise Voice AI Technologies
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {enterpriseVoiceTech.map((tech, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg flex items-center gap-2">
                        {tech.technology.includes('Recognition') && <Headphones className="h-5 w-5" />}
                        {tech.technology.includes('AI') && <Zap className="h-5 w-5" />}
                        {tech.technology.includes('Synthesis') && <Volume2 className="h-5 w-5" />}
                        {tech.technology}
                      </CardTitle>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {tech.accuracy}
                      </Badge>
                    </div>
                    <CardDescription>{tech.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tech.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Enterprise Use Cases */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Enterprise Voice Automation Use Cases
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {enterpriseUseCases.map((useCase, index) => (
                <Card key={index} className="bg-gradient-to-br from-slate-50 to-red-50 border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-blue-600" />
                      {useCase.useCase}
                    </CardTitle>
                    <CardDescription>{useCase.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Key Benefits:</h4>
                        <ul className="text-sm space-y-1">
                          {useCase.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <CheckCircle className="h-3 w-3 text-green-500" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Industries:</h4>
                        <div className="flex flex-wrap gap-1">
                          {useCase.industries.map((industry, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {industry}
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

          {/* US Case Studies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Fortune 500 Voice Agent Success Stories
            </h2>
            <div className="space-y-8">
              {usVoiceCaseStudies.map((study, index) => (
                <Card key={index} className="bg-gradient-to-r from-slate-50 to-red-50 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                      <div>
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
                      <div>
                        <h4 className="font-medium text-green-600 mb-3">Results:</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <TrendingUp className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
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

          {/* Enterprise Voice Metrics */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-red-600 to-blue-600 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Enterprise Voice Agent Metrics</h2>
                <p className="text-lg mb-6 opacity-90">
                  Real performance data from Fortune 500 voice automation deployments
                </p>
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center">
                    <Mic className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">98.4%</div>
                    <div className="text-sm opacity-80">Speech accuracy</div>
                  </div>
                  <div className="text-center">
                    <Phone className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">92%</div>
                    <div className="text-sm opacity-80">Call resolution</div>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">$12M</div>
                    <div className="text-sm opacity-80">Cost reduction</div>
                  </div>
                  <div className="text-center">
                    <Shield className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">1.8s</div>
                    <div className="text-sm opacity-80">Response time</div>
                  </div>
                </div>
                <Button size="lg" variant="secondary">
                  Try Enterprise Demo
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready for Enterprise Voice Automation?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join Fortune 500 companies that have transformed their customer service with SyncSphere's 
              enterprise voice automation solutions. HIPAA compliant, FCC approved, and built for scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-red-600 to-blue-600">
                Start Voice Project
              </Button>
              <Button size="lg" variant="outline">
                Schedule Enterprise Demo
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              🎤 98.4% accuracy • 🇺🇸 American English optimized • 🔒 HIPAA & FCC compliant
            </p>
          </div>
        </div>
      </ServiceLayout>
    </SEOProvider>
  );
};

export default VoiceAgentsUS;
