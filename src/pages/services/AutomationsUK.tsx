import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import SEOProvider from '@/components/SEOProvider';
import RegionalPageLinks from '@/components/RegionalPageLinks';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, Zap, Target, Clock, TrendingUp, Shield, Database, Cpu, Network, Building2 } from 'lucide-react';

const AutomationsUK = () => {
  const technicalCapabilities = [
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Advanced AI/ML Integration",
      description: "Custom machine learning models with TensorFlow, PyTorch, and scikit-learn for intelligent decision-making"
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: "Enterprise API Integration", 
      description: "Seamless integration with SAP, Salesforce, Microsoft Dynamics, and 500+ enterprise systems"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Real-time Data Processing",
      description: "Apache Kafka, Redis, and MongoDB for high-throughput data processing and analytics"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Enterprise Security",
      description: "OAuth 2.0, JWT tokens, AES-256 encryption, and SOC 2 Type II compliance"
    }
  ];

  const ukComplianceFeatures = [
    "GDPR Article 25 - Privacy by Design implementation",
    "HMRC Making Tax Digital (MTD) API integration",
    "Companies House API for real-time business data",
    "FCA regulatory compliance for financial services",
    "NHS Digital API integration for healthcare",
    "UK GAAP accounting standards automation"
  ];

  const enterpriseCaseStudies = [
    {
      company: "FTSE 100 Financial Institution",
      industry: "Investment Banking",
      challenge: "Manual trade settlement processing taking 4+ hours",
      solution: "AI-powered trade matching with 99.97% accuracy",
      results: ["Settlement time reduced to 15 minutes", "£2.4M annual cost savings", "Zero compliance violations"],
      techStack: "Python, Apache Kafka, PostgreSQL, Docker, Kubernetes, n8n",
      employees: "150,000+"
    },
    {
      company: "UK Manufacturing Conglomerate", 
      industry: "Aerospace & Defense",
      challenge: "Supply chain visibility across 47 UK facilities",
      solution: "Real-time inventory tracking with predictive analytics",
      results: ["30% reduction in inventory costs", "99.2% order fulfillment accuracy", "£1.8M working capital optimization"],
      techStack: "React, Node.js, MongoDB, Redis, AWS Lambda, Make",
      employees: "75,000+"
    },
    {
      company: "NHS Trust Network",
      industry: "Healthcare",
      challenge: "Patient data processing across multiple systems",
      solution: "FHIR-compliant data integration platform",
      results: ["85% faster patient onboarding", "Zero data breaches", "£890K operational savings"],
      techStack: "HL7 FHIR, Azure Functions, SQL Server, Power BI, Zapier",
      employees: "200,000+"
    }
  ];

  const automationArchitectures = [
    {
      title: "Intelligent Document Processing",
      description: "OCR + NLP pipeline for automated document analysis",
      technologies: ["Tesseract OCR", "spaCy NLP", "Apache Tika", "OpenCV"],
      useCases: ["Invoice processing", "Contract analysis", "Compliance reporting"],
      accuracy: "99.4%"
    },
    {
      title: "Robotic Process Automation (RPA)",
      description: "Browser automation with computer vision capabilities", 
      technologies: ["Selenium WebDriver", "OpenCV", "Puppeteer", "Playwright"],
      useCases: ["Data entry", "Report generation", "System integration"],
      accuracy: "99.8%"
    },
    {
      title: "Workflow Orchestration Engine",
      description: "Event-driven microservices architecture",
      technologies: ["Apache Airflow", "Celery", "RabbitMQ", "Docker Swarm"],
      useCases: ["Multi-system workflows", "Approval processes", "Data pipelines"],
      accuracy: "99.9%"
    }
  ];

  return (
    <SEOProvider
      title="Business Process Automation UK | Enterprise AI Solutions | SyncSphere"
      description="Leading business process automation agency in the UK. Enterprise-grade AI-driven automation with advanced ML, RPA, and intelligent document processing for UK businesses. GDPR-compliant solutions."
      keywords="business process automation uk, workflow automation uk, ai automation agency uk, enterprise automation uk, rpa uk, intelligent document processing uk"
      region="uk"
      service="automations"
    >
      <ServiceLayout>
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-blue-500 text-blue-600">
              🇬🇧 Enterprise UK Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Enterprise Process Automation UK
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Transform your UK enterprise with intelligent automation solutions. Advanced AI/ML integration, 
              enterprise-grade security, and full UK regulatory compliance. Trusted by FTSE 100 companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Schedule Technical Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Architecture Diagrams
              </Button>
            </div>
          </div>

          {/* Technical Capabilities */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Enterprise-Grade Technical Capabilities
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technicalCapabilities.map((capability, index) => (
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

          {/* UK Compliance Features */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-green-600" />
                  UK Regulatory Compliance & Integration
                </CardTitle>
                <CardDescription>
                  Full compliance with UK regulations and seamless integration with government systems
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {ukComplianceFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Automation Architectures */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Advanced Automation Architectures
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {automationArchitectures.map((arch, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{arch.title}</CardTitle>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {arch.accuracy} Accuracy
                      </Badge>
                    </div>
                    <CardDescription>{arch.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-1">
                          {arch.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Use Cases:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {arch.useCases.map((useCase, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                              {useCase}
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

          {/* Enterprise Case Studies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Enterprise Success Stories
            </h2>
            <div className="space-y-8">
              {enterpriseCaseStudies.map((study, index) => (
                <Card key={index} className="bg-gradient-to-r from-slate-50 to-blue-50 border-0 shadow-lg">
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

          {/* ROI Calculator */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Enterprise Automation ROI Calculator</h2>
                <p className="text-lg mb-6 opacity-90">
                  Calculate the potential impact of intelligent automation on your UK enterprise
                </p>
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center">
                    <Clock className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">2,400+</div>
                    <div className="text-sm opacity-80">Hours saved monthly</div>
                  </div>
                  <div className="text-center">
                    <Target className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">85%</div>
                    <div className="text-sm opacity-80">Process efficiency gain</div>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">£2.4M</div>
                    <div className="text-sm opacity-80">Average annual savings</div>
                  </div>
                  <div className="text-center">
                    <Shield className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">99.9%</div>
                    <div className="text-sm opacity-80">Compliance accuracy</div>
                  </div>
                </div>
                <Button size="lg" variant="secondary">
                  Get Enterprise ROI Assessment
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Regional Page Links */}
          <RegionalPageLinks currentService="automations" currentRegion="uk" />

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready for Enterprise-Grade Automation?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join FTSE 100 companies and leading UK enterprises that have transformed their operations 
              with SyncSphere's intelligent automation solutions. Enterprise security, UK compliance, 
              and 24/7 support included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
                Schedule Enterprise Demo
              </Button>
              <Button size="lg" variant="outline">
                Download Technical Whitepaper
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Trusted by Fortune 500 companies • UK-based support team • SOC 2 Type II certified
            </p>
          </div>
        </div>
      </ServiceLayout>
    </SEOProvider>
  );
};

export default AutomationsUK;
