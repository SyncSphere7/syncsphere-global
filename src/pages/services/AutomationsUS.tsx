import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import SEOProvider from '@/components/SEOProvider';
import RegionalPricing from '@/components/RegionalPricing';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, Zap, Target, Clock, TrendingUp, Shield, Database, Cpu, Network, Building2 } from 'lucide-react';

const AutomationsUS = () => {
  const usEnterpriseFeatures = [
    "Fortune 500-grade intelligent automation",
    "SOX, HIPAA, and PCI DSS compliance",
    "Enterprise CRM integration (Salesforce, HubSpot)",
    "Multi-cloud deployment (AWS, Azure, GCP)",
    "Advanced AI/ML with TensorFlow, PyTorch, ElevenLabs, and n8n",
    "Real-time analytics and business intelligence",
    "24/7 enterprise support with dedicated CSM",
    "Federal contracting compliance (FAR/DFARS)"
  ];

  const fortune500CaseStudies = [
    {
      company: "Fortune 50 Technology Company",
      industry: "Technology",
      challenge: "Manual procurement processes across 180+ global offices",
      solution: "AI-powered procurement automation with predictive analytics",
      results: ["$47M annual cost savings", "92% faster vendor onboarding", "Zero compliance violations"],
      techStack: "Python, Apache Kafka, Elasticsearch, Docker, AWS EKS, n8n",
      employees: "150,000+"
    },
    {
      company: "Major US Healthcare System", 
      industry: "Healthcare",
      challenge: "Patient data integration across 85 hospitals and 300+ clinics",
      solution: "FHIR-compliant data orchestration with AI-driven insights",
      results: ["$23M operational savings", "78% faster patient processing", "99.97% data accuracy"],
      techStack: "HL7 FHIR, Azure Functions, SQL Server, Power BI, Kubernetes, Make",
      employees: "75,000+"
    },
    {
      company: "Top 5 US Bank",
      industry: "Financial Services",
      challenge: "Real-time fraud detection for 45M+ customers",
      solution: "ML-powered fraud prevention with microsecond response times",
      results: ["$89M fraud prevention", "0.02% false positive rate", "< 50ms detection time"],
      techStack: "Apache Kafka, Redis, TensorFlow, Kubernetes, GCP, Zapier",
      employees: "200,000+"
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
      title="Business Process Automation US | Enterprise AI Solutions | SyncSphere"
      description="Leading business process automation company in the US. Enterprise-grade intelligent automation with AI/ML, robotic process automation, and advanced analytics for American businesses. SOX and HIPAA compliant."
      keywords="business process automation us, workflow automation us, ai automation agency us, enterprise automation us, rpa us, intelligent automation us"
      region="us"
      service="automations"
    >
      <ServiceLayout>
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-blue-500 text-blue-600">
              🇺🇸 Fortune 500 Trusted Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Enterprise Automation US
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Transform your American enterprise with intelligent automation at scale. Advanced AI/ML integration, 
              Fortune 500-grade security, and full US regulatory compliance. Trusted by top US corporations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Schedule C-Suite Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Download ROI Calculator
              </Button>
            </div>
          </div>

          {/* US Enterprise Features */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-red-50 to-blue-50 border-red-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-red-600" />
                  US Enterprise Automation Features
                </CardTitle>
                <CardDescription>
                  Fortune 500-grade automation with full US regulatory compliance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {usEnterpriseFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Fortune 500 Case Studies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Fortune 500 Success Stories
            </h2>
            <div className="space-y-8">
              {fortune500CaseStudies.map((study, index) => (
                <Card key={index} className="bg-gradient-to-r from-slate-50 to-blue-50 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-12 gap-8">
                      <div className="lg:col-span-4">
                        <h3 className="text-xl font-bold mb-2">{study.company}</h3>
                        <div className="flex gap-2 mb-4">
                          <Badge>{study.industry}</Badge>
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
                        <h4 className="font-medium text-green-600 mb-3">Enterprise Results:</h4>
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
                        <h4 className="font-medium text-purple-600 mb-3">Enterprise Stack:</h4>
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
              Enterprise System Integrations
            </h2>
            <Card className="bg-gradient-to-br from-slate-50 to-blue-50 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {enterpriseIntegrations.map((integration, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Network className="h-4 w-4 text-blue-600 flex-shrink-0" />
                      <span className="text-sm">{integration}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enterprise ROI Dashboard */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Fortune 500 ROI Metrics</h2>
                <p className="text-lg mb-6 opacity-90">
                  Real performance metrics from our Fortune 500 enterprise deployments
                </p>
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center">
                    <Clock className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">12,000+</div>
                    <div className="text-sm opacity-80">Hours saved monthly</div>
                  </div>
                  <div className="text-center">
                    <Target className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">92%</div>
                    <div className="text-sm opacity-80">Process efficiency gain</div>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">$47M</div>
                    <div className="text-sm opacity-80">Largest annual savings</div>
                  </div>
                  <div className="text-center">
                    <Shield className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm opacity-80">Compliance rate</div>
                  </div>
                </div>
                <Button size="lg" variant="secondary">
                  Get Fortune 500 Assessment
                </Button>
              </CardContent>
            </Card>
          </div>
          {/* Pricing Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <RegionalPricing 
                service="automations" 
                region="us" 
                autoDetect={false}
              />
            </div>
          </section>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Enterprise?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join Fortune 500 companies using our intelligent automation platform. Enterprise security, US compliance, and dedicated success teams included.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Schedule Executive Briefing
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                  Download Enterprise Whitepaper
                </Button>
              </div>
              <p className="text-sm mt-6 opacity-80">
                🏢 Fortune 500 trusted • 🇺🇸 US-based enterprise support • 🔒 SOC 2 Type II + FedRAMP certified
              </p>
            </div>
          </div>
        </div>
      </ServiceLayout>
    </SEOProvider>
  );
};

export default AutomationsUS;
