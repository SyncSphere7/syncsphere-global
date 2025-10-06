import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import SEOProvider from '@/components/SEOProvider';
import RegionalPricing from '@/components/RegionalPricing';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, Mic, Phone, Zap, Target, TrendingUp, Shield, Headphones, Volume2 } from 'lucide-react';

const VoiceAgentsUK = () => {
  const ukVoiceFeatures = [
    "British accent recognition and synthesis",
    "UK telephony system integration (BT, Sky, Virgin)",
    "GDPR-compliant voice data processing",
    "Real-time conversation handling",
    "Multi-language support (English, Welsh, Scottish)",
    "UK business hours automation",
    "Integration with UK CRM systems",
    "Ofcom compliance for telecommunications"
  ];

  const voiceTechnologies = [
    {
      technology: "Speech Recognition",
      description: "Advanced ASR with UK accent adaptation",
      features: ["Real-time transcription", "Noise cancellation", "Multi-speaker detection"],
      accuracy: "97.8%"
    },
    {
      technology: "Natural Language Processing",
      description: "Context-aware conversation understanding",
      features: ["Intent recognition", "Entity extraction", "Sentiment analysis"],
      accuracy: "96.4%"
    },
    {
      technology: "Speech Synthesis",
      description: "Natural-sounding voice generation",
      features: ["British accents", "Emotion modeling", "Custom voice cloning"],
      accuracy: "98.2%"
    }
  ];

  const ukVoiceCaseStudies = [
    {
      company: "UK Insurance Company",
      industry: "Insurance",
      challenge: "24/7 claims processing for 500K+ customers",
      solution: "AI voice agent handling initial claims assessment",
      results: ["89% call resolution", "£1.2M cost savings", "2.3s average response time"],
      techStack: "Azure Speech, Node.js, MongoDB, Twilio UK",
    },
    {
      company: "British Healthcare Trust",
      industry: "Healthcare",
      challenge: "Appointment booking across 15 clinics",
      solution: "Voice-enabled booking system with NHS integration",
      results: ["78% automation rate", "340 hours saved weekly", "94% patient satisfaction"],
      techStack: "Google Speech API, Python, PostgreSQL, NHS APIs",
    }
  ];

  const voiceUseCases = [
    {
      useCase: "Customer Service",
      description: "24/7 automated customer support",
      benefits: ["Reduced wait times", "Consistent service quality", "Cost reduction"],
      industries: ["Banking", "Insurance", "Retail", "Utilities"]
    },
    {
      useCase: "Appointment Booking",
      description: "Voice-enabled scheduling systems",
      benefits: ["Automated bookings", "Calendar integration", "Reminder calls"],
      industries: ["Healthcare", "Beauty", "Professional Services", "Automotive"]
    },
    {
      useCase: "Lead Qualification",
      description: "Intelligent sales conversation handling",
      benefits: ["Lead scoring", "CRM integration", "Follow-up automation"],
      industries: ["Real Estate", "Financial Services", "B2B Sales", "Education"]
    }
  ];

  return (
    <SEOProvider
      title="AI Voice Agents UK | Voice Automation & Speech Technology | SyncSphere"
      description="Advanced AI voice agent development in the UK. Custom voice automation solutions with natural speech synthesis, real-time conversation handling, and telephony integration for British businesses."
      keywords="voice agents uk, ai voice automation uk, speech recognition uk, voice ai uk, telephony automation uk, voice assistants uk"
      region="uk"
      service="voice-agents"
    >
      <ServiceLayout>
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-blue-500 text-blue-600">
              🇬🇧 UK Voice AI Specialists
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Voice Agents UK
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Transform your UK business with intelligent voice automation. Advanced speech recognition, 
              natural conversation handling, and seamless telephony integration with British accent optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
                Try Voice Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Schedule Voice Consultation
              </Button>
            </div>
          </div>

          {/* UK Voice Features */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mic className="h-6 w-6 text-green-600" />
                  UK Voice Technology Specialization
                </CardTitle>
                <CardDescription>
                  Advanced voice solutions optimized for the UK market and accents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {ukVoiceFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Voice Technologies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Advanced Voice AI Technologies
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {voiceTechnologies.map((tech, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg flex items-center gap-2">
                        {tech.technology.includes('Recognition') && <Headphones className="h-5 w-5" />}
                        {tech.technology.includes('Processing') && <Zap className="h-5 w-5" />}
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

          {/* Voice Use Cases */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              UK Voice Automation Use Cases
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {voiceUseCases.map((useCase, index) => (
                <Card key={index} className="bg-gradient-to-br from-slate-50 to-green-50 border-0 shadow-lg">
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

          {/* UK Case Studies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              UK Voice Agent Success Stories
            </h2>
            <div className="space-y-8">
              {ukVoiceCaseStudies.map((study, index) => (
                <Card key={index} className="bg-gradient-to-r from-slate-50 to-green-50 border-0 shadow-lg">
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

          {/* Pricing Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <RegionalPricing 
                service="voice-agents" 
                region="uk" 
                autoDetect={false}
              />
            </div>
          </section>

          {/* Voice Performance Metrics */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">UK Voice Agent Metrics</h2>
                <p className="text-lg mb-6 opacity-90">
                  Real performance data from our UK voice automation deployments
                </p>
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center">
                    <Mic className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">97.8%</div>
                    <div className="text-sm opacity-80">Speech accuracy</div>
                  </div>
                  <div className="text-center">
                    <Phone className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">89%</div>
                    <div className="text-sm opacity-80">Call resolution</div>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">£1.2M</div>
                    <div className="text-sm opacity-80">Cost savings</div>
                  </div>
                  <div className="text-center">
                    <Shield className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">2.3s</div>
                    <div className="text-sm opacity-80">Response time</div>
                  </div>
                </div>
                <Button size="lg" variant="secondary">
                  Try Voice Demo
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Deploy UK Voice Agents?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join leading UK businesses that have transformed their customer service with SyncSphere's 
              intelligent voice automation solutions. British accent optimized, GDPR compliant, and Ofcom approved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600">
                Start Voice Project
              </Button>
              <Button size="lg" variant="outline">
                Schedule Voice Demo
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              97.8% accuracy • British accent optimized • GDPR & Ofcom compliant
            </p>
          </div>
        </div>
      </ServiceLayout>
    </SEOProvider>
  );
};

export default VoiceAgentsUK;
