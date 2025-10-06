import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import SEOProvider from '@/components/SEOProvider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, Mic, Phone, Zap, Target, TrendingUp, Shield, Headphones, Volume2, Globe } from 'lucide-react';

const VoiceAgentsEU = () => {
  const euVoiceFeatures = [
    "Multi-language voice AI (24 EU languages)",
    "GDPR-compliant voice data processing",
    "European accent recognition and synthesis",
    "EU data residency and sovereignty",
    "Real-time conversation translation",
    "Cross-cultural conversation adaptation",
    "European telephony system integration",
    "Digital Services Act compliance"
  ];

  const multilingualVoiceTech = [
    {
      technology: "Multilingual Speech Recognition",
      description: "Advanced ASR with European accent models",
      features: ["24 EU languages", "Accent adaptation", "Noise cancellation"],
      accuracy: "95.8%"
    },
    {
      technology: "Cross-Language NLP",
      description: "Context-aware multilingual understanding",
      features: ["Intent recognition", "Entity extraction", "Cultural adaptation"],
      accuracy: "94.2%"
    },
    {
      technology: "European Voice Synthesis",
      description: "Natural voice generation with European accents",
      features: ["Regional accents", "Emotion modeling", "Real-time translation"],
      accuracy: "96.7%"
    }
  ];

  const euVoiceCaseStudies = [
    {
      company: "European Insurance Group",
      industry: "Insurance",
      countries: "12 EU countries",
      challenge: "Multilingual claims processing across European markets",
      solution: "GDPR-compliant voice agent with real-time translation",
      results: ["87% call resolution", "€5.4M cost reduction", "94% customer satisfaction", "Zero GDPR violations"],
      techStack: "Azure Speech EU, Node.js, PostgreSQL, Twilio EU, Custom ML",
    }
  ];

  return (
    <SEOProvider
      title="AI Voice Agents EU | Multilingual Voice Automation | SyncSphere"
      description="Premier AI voice agent development in Europe. Multilingual voice automation solutions with accent adaptation, real-time translation, and advanced speech processing for European markets."
      keywords="voice agents eu, multilingual voice ai eu, speech recognition eu, voice automation eu, european voice agents, gdpr voice ai eu"
      region="eu"
      service="voice-agents"
    >
      <ServiceLayout>
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-blue-500 text-blue-600">
              🇪🇺 European Union Certified Voice AI
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              European Voice Agents
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Transform European customer engagement with multilingual voice automation. Advanced speech recognition 
              across 24 EU languages, GDPR compliance, and real-time translation for all European markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
                Try Multilingual Voice Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Schedule GDPR Voice Consultation
              </Button>
            </div>
          </div>

          {/* EU Voice Features */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-6 w-6 text-green-600" />
                  European Voice Technology
                </CardTitle>
                <CardDescription>
                  Advanced multilingual voice solutions for European markets
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {euVoiceFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Multilingual Voice Technologies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Multilingual Voice AI Technologies
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {multilingualVoiceTech.map((tech, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg flex items-center gap-2">
                        {tech.technology.includes('Recognition') && <Headphones className="h-5 w-5" />}
                        {tech.technology.includes('NLP') && <Zap className="h-5 w-5" />}
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

          {/* European Case Studies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              European Voice Agent Success Stories
            </h2>
            <div className="space-y-8">
              {euVoiceCaseStudies.map((study, index) => (
                <Card key={index} className="bg-gradient-to-r from-slate-50 to-green-50 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{study.company}</h3>
                        <div className="flex gap-2 mb-4">
                          <Badge>{study.industry}</Badge>
                          <Badge variant="outline">🇪🇺 {study.countries}</Badge>
                        </div>
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

          {/* European Voice Metrics */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">European Voice Agent Metrics</h2>
                <p className="text-lg mb-6 opacity-90">
                  Real performance data from European voice automation deployments
                </p>
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center">
                    <Globe className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">24</div>
                    <div className="text-sm opacity-80">EU languages</div>
                  </div>
                  <div className="text-center">
                    <Mic className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">95.8%</div>
                    <div className="text-sm opacity-80">Speech accuracy</div>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">€5.4M</div>
                    <div className="text-sm opacity-80">Cost reduction</div>
                  </div>
                  <div className="text-center">
                    <Shield className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm opacity-80">GDPR compliance</div>
                  </div>
                </div>
                <Button size="lg" variant="secondary">
                  Try Multilingual Voice Demo
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready for European Voice Automation?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join leading European businesses that have transformed customer service with SyncSphere's 
              multilingual voice automation solutions. 24 languages supported, GDPR compliant, and EU data residency included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600">
                Start European Voice Project
              </Button>
              <Button size="lg" variant="outline">
                Schedule Multilingual Demo
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              95.8% multilingual accuracy • 24 EU languages • GDPR & DSA compliant
            </p>
          </div>
        </div>
      </ServiceLayout>
    </SEOProvider>
  );
};

export default VoiceAgentsEU;
