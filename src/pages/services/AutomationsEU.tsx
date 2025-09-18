import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import SEOProvider from '@/components/SEOProvider';
import RegionalPageLinks from '@/components/RegionalPageLinks';
import RegionalPricing from '@/components/RegionalPricing';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, Zap, Target, Clock, TrendingUp, Shield, Database, Cpu, Network, Globe } from 'lucide-react';

const AutomationsEU = () => {
  const europeanCapabilities = [
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "AI/ML Compliance",
      description: "EU AI Act compliant machine learning with explainable AI and algorithmic transparency"
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: "Multi-Market Integration", 
      description: "Native support for 27 EU countries with localized business system integrations"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Data Sovereignty",
      description: "EU-only data processing with GDPR Article 25 privacy-by-design architecture"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Regulatory Excellence",
      description: "GDPR, NIS2, DORA, and Digital Services Act compliance with audit trails"
    }
  ];

  const euComplianceFeatures = [
    "GDPR Article 25 - Privacy by Design implementation",
    "EU AI Act compliance with risk assessment",
    "NIS2 Directive cybersecurity requirements", 
    "DORA operational resilience for financial services",
    "Digital Services Act content moderation",
    "eIDAS electronic identification integration",
    "PSD2 payment services directive compliance",
    "MiFID II financial markets regulation",
    "REACH chemical regulation automation",
    "CE marking and product compliance workflows"
  ];

  const europeanCaseStudies = [
    {
      company: "DAX 30 Automotive Manufacturer",
      industry: "Automotive",
      country: "Germany",
      challenge: "Supply chain compliance across 15 EU countries",
      solution: "Multi-jurisdictional automation with real-time regulatory updates",
      results: ["€18M compliance cost reduction", "99.7% regulatory accuracy", "45% faster market entry"],
      techStack: "SAP integration, Apache Kafka, PostgreSQL, Kubernetes, Azure EU, n8n",
      employees: "120,000+"
    },
    {
      company: "European Banking Group", 
      industry: "Financial Services",
      country: "Netherlands",
      challenge: "Cross-border payment processing under PSD2",
      solution: "GDPR-compliant payment automation with real-time fraud detection",
      results: ["€31M operational savings", "0.003% fraud rate", "< 2s transaction processing"],
      techStack: "Spring Boot, Redis, MongoDB, Docker, AWS EU-Central, Make",
      employees: "85,000+"
    },
    {
      company: "Pan-European Retailer",
      industry: "Retail",
      country: "France",
      challenge: "Inventory management across 2,400 stores in 12 EU countries",
      solution: "AI-powered demand forecasting with multi-currency automation",
      results: ["€24M inventory optimization", "87% demand accuracy", "32% waste reduction"],
      techStack: "TensorFlow, Apache Spark, Elasticsearch, Kubernetes, GCP EU, ElevenLabs",
      employees: "180,000+"
    }
  ];

  const multiCountryAutomation = [
    {
      title: "Cross-Border VAT Automation",
      description: "Automated VAT compliance across all 27 EU member states",
      countries: ["Germany", "France", "Italy", "Spain", "Netherlands", "Poland", "Belgium"],
      features: ["Real-time VAT rate updates", "MOSS reporting", "Intrastat declarations"],
      compliance: "99.8%"
    },
    {
      title: "Multi-Language Document Processing",
      description: "OCR and NLP for 24 official EU languages", 
      countries: ["All EU27", "EEA countries", "Switzerland", "UK (post-Brexit)"],
      features: ["Language detection", "Translation workflows", "Cultural adaptation"],
      compliance: "96.4%"
    },
    {
      title: "Regulatory Change Management",
      description: "Automated tracking of EU regulatory updates",
      countries: ["EU27 + EEA", "National implementations", "Regional variations"],
      features: ["Real-time monitoring", "Impact assessment", "Compliance workflows"],
      compliance: "99.9%"
    }
  ];

  const euIndustryVerticals = [
    {
      industry: "Manufacturing",
      regulations: ["REACH", "RoHS", "CE Marking", "Machinery Directive"],
      processes: ["Product compliance", "Supply chain traceability", "Quality management"],
      savings: "€15-42M annually",
      countries: "27 EU countries"
    },
    {
      industry: "Financial Services",
      regulations: ["GDPR", "PSD2", "MiFID II", "DORA", "Basel III"],
      processes: ["Payment processing", "Risk management", "Regulatory reporting"],
      savings: "€22-67M annually", 
      countries: "EEA + Switzerland"
    },
    {
      industry: "Healthcare",
      regulations: ["MDR", "IVDR", "GDPR", "Clinical Trials Regulation"],
      processes: ["Clinical data management", "Regulatory submissions", "Pharmacovigilance"],
      savings: "€12-38M annually",
      countries: "EU27 + EEA"
    }
  ];

  const dataResidencyOptions = [
    {
      region: "Western Europe",
      countries: ["Germany", "France", "Netherlands", "Ireland"],
      datacenters: "Frankfurt, Paris, Amsterdam, Dublin",
      compliance: ["GDPR", "Cloud Code of Conduct", "ISO 27001"]
    },
    {
      region: "Nordic Region", 
      countries: ["Sweden", "Denmark", "Finland", "Norway"],
      datacenters: "Stockholm, Copenhagen, Helsinki, Oslo",
      compliance: ["GDPR", "Nordic privacy laws", "Green energy certified"]
    },
    {
      region: "Southern Europe",
      countries: ["Italy", "Spain", "Portugal", "Greece"],
      datacenters: "Milan, Madrid, Lisbon, Athens",
      compliance: ["GDPR", "National data protection laws", "EU Cloud Alliance"]
    }
  ];

  return (
    <SEOProvider
      title="Business Process Automation EU | GDPR Compliant AI Solutions | SyncSphere"
      description="Top business process automation agency in Europe. Advanced workflow automation solutions with AI orchestration, GDPR compliance, and multi-language support for European enterprises and SMEs."
      keywords="business process automation eu, workflow automation eu, ai automation agency eu, gdpr automation eu, european automation solutions"
      region="eu"
      service="automations"
    >
      <ServiceLayout>
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-blue-500 text-blue-600">
              🇪🇺 European Union Certified Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              European Process Automation
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Transform your European enterprise with intelligent automation solutions. Full GDPR compliance, 
              EU AI Act ready, and multi-jurisdictional support across all 27 EU member states.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Schedule EU Compliance Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Download GDPR Whitepaper
              </Button>
            </div>
          </div>

          {/* European Capabilities */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              European-First Automation Platform
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {europeanCapabilities.map((capability, index) => (
                <Card key={index} className="border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-blue-500 mt-1">{capability.icon}</div>
                      <div>
                        <h3 className="font-semibold mb-2">{capability.title}</h3>
                        <p className="text-sm text-muted-foreground">{capability.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* EU Compliance Features */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-blue-600" />
                  EU Regulatory Compliance Framework
                </CardTitle>
                <CardDescription>
                  Comprehensive compliance with all major EU regulations and directives
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {euComplianceFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Multi-Country Automation */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Cross-Border Automation Solutions
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {multiCountryAutomation.map((automation, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{automation.title}</CardTitle>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {automation.compliance} Accuracy
                      </Badge>
                    </div>
                    <CardDescription>{automation.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Coverage:</h4>
                        <div className="flex flex-wrap gap-1">
                          {automation.countries.slice(0, 3).map((country, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {country}
                            </Badge>
                          ))}
                          {automation.countries.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{automation.countries.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Features:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {automation.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Data Residency Options */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              European Data Residency Options
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {dataResidencyOptions.map((option, index) => (
                <Card key={index} className="bg-gradient-to-br from-green-50 to-blue-50 border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="h-5 w-5 text-green-600" />
                      {option.region}
                    </CardTitle>
                    <CardDescription>{option.datacenters}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Countries:</h4>
                        <div className="flex flex-wrap gap-1">
                          {option.countries.map((country, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {country}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Compliance:</h4>
                        <ul className="text-sm space-y-1">
                          {option.compliance.map((comp, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <CheckCircle className="h-3 w-3 text-green-500" />
                              {comp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* EU Industry Verticals */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              EU Industry-Specific Solutions
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {euIndustryVerticals.map((vertical, index) => (
                <Card key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>{vertical.industry}</CardTitle>
                    <div className="flex gap-2">
                      <Badge className="bg-green-100 text-green-800">
                        {vertical.savings}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {vertical.countries}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Key Processes:</h4>
                        <ul className="text-sm space-y-1">
                          {vertical.processes.map((process, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <CheckCircle className="h-3 w-3 text-green-500" />
                              {process}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Regulations:</h4>
                        <div className="flex flex-wrap gap-1">
                          {vertical.regulations.map((reg, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {reg}
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

          {/* European Case Studies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              European Success Stories
            </h2>
            <div className="space-y-8">
              {europeanCaseStudies.map((study, index) => (
                <Card key={index} className="bg-gradient-to-r from-slate-50 to-blue-50 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-12 gap-8">
                      <div className="lg:col-span-4">
                        <h3 className="text-xl font-bold mb-2">{study.company}</h3>
                        <div className="flex gap-2 mb-4">
                          <Badge>{study.industry}</Badge>
                          <Badge variant="outline">🇪🇺 {study.country}</Badge>
                          <Badge variant="outline">{study.employees} employees</Badge>
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
                      <div className="lg:col-span-4">
                        <h4 className="font-medium text-green-600 mb-3">European Results:</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <TrendingUp className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="lg:col-span-4">
                        <h4 className="font-medium text-purple-600 mb-3">EU Tech Stack:</h4>
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

          {/* EU ROI Dashboard */}
          <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <CardContent className="p-8 text-center">
                  <h2 className="text-3xl font-bold mb-4">European Enterprise Metrics</h2>
                  <p className="text-lg mb-6 opacity-90">
                    Real performance data from our European enterprise deployments
                  </p>
                  <div className="grid md:grid-cols-4 gap-6 mb-8">
                    <div className="text-center">
                      <Clock className="h-8 w-8 mx-auto mb-2" />
                      <div className="text-2xl font-bold">8,400+</div>
                      <div className="text-sm opacity-80">Hours saved monthly</div>
                    </div>
                    <div className="text-center">
                      <Target className="h-8 w-8 mx-auto mb-2" />
                      <div className="text-2xl font-bold">89%</div>
                      <div className="text-sm opacity-80">Process efficiency gain</div>
                    </div>
                    <div className="text-center">
                      <TrendingUp className="h-8 w-8 mx-auto mb-2" />
                      <div className="text-2xl font-bold">€31M</div>
                      <div className="text-sm opacity-80">Largest annual savings</div>
                    </div>
                    <div className="text-center">
                      <Shield className="h-8 w-8 mx-auto mb-2" />
                      <div className="text-2xl font-bold">100%</div>
                      <div className="text-sm opacity-80">GDPR compliance</div>
                    </div>
                  </div>
                  <Button size="lg" variant="secondary">
                    Get EU Compliance Assessment
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <RegionalPricing 
                service="automations" 
                region="eu" 
                autoDetect={false}
              />
            </div>
          </section>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready for European-Scale Automation?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join leading European enterprises that have transformed their operations with SyncSphere's 
              GDPR-compliant automation solutions. EU data residency, multi-language support, and 
              dedicated European success teams included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
                Schedule EU Demo
              </Button>
              <Button size="lg" variant="outline">
                Download Compliance Guide
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              🇪🇺 27 EU countries supported • 🔒 GDPR Article 25 compliant • 🌍 24 official languages
            </p>
          </div>
        </div>
      </ServiceLayout>
    </SEOProvider>
  );
};

export default AutomationsEU;
