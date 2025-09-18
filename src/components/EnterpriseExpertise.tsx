import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Globe, Award, Users, Clock, Zap, Database, Cpu, Network, Building2 } from 'lucide-react';

const EnterpriseExpertise = () => {
  const expertiseAreas = [
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Advanced AI & Machine Learning",
      description: "Custom ML model development, deep learning solutions, and AI-powered automation systems",
      technologies: ["TensorFlow", "PyTorch", "OpenAI GPT", "Anthropic Claude", "ElevenLabs", "n8n", "Hugging Face", "Azure AI", "AWS SageMaker"],
      experience: "50+ years combined"
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: "Enterprise System Integration",
      description: "Seamless integration with existing enterprise infrastructure and legacy systems",
      technologies: ["REST APIs", "GraphQL", "Microservices", "Docker", "Kubernetes", "Enterprise ESB"],
      experience: "Fortune 500 proven"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security with full regulatory compliance across global markets",
      technologies: ["SOC 2 Type II", "GDPR", "HIPAA", "ISO 27001", "FedRAMP", "PCI DSS"],
      experience: "100% compliance rate"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Delivery Excellence",
      description: "24/7 support with distributed teams across multiple time zones and regions",
      technologies: ["Agile", "DevOps", "CI/CD", "Multi-region", "24/7 Support", "SLA 99.9%"],
      experience: "Global presence"
    }
  ];

  const partnerships = [
    { name: "Microsoft Azure", type: "Cloud Partner", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" },
    { name: "Amazon Web Services", type: "Technology Partner", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Google Cloud", type: "AI/ML Partner", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" },
    { name: "OpenAI", type: "AI Technology", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
    { name: "Anthropic", type: "AI Technology", logo: "https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg" },
    { name: "ElevenLabs", type: "Voice AI", logo: "/11_labs-removebg-preview.png" },
    { name: "n8n", type: "Automation Platform", logo: "/n8n.png" },
    { name: "Make", type: "Automation Platform", logo: "/make logo.png" },
    { name: "Zapier", type: "Workflow Automation", logo: "/zapier_logo_ybrvyf-removebg-preview.png" },
    { name: "Stripe", type: "Payment Solutions", logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
    { name: "Shopify Plus", type: "E-commerce Platform", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg" },
    { name: "Twilio", type: "Communication APIs", logo: "/twilio_logo-removebg-preview.png" }
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "Microsoft Azure AI Engineer",
    "Google Cloud Professional ML Engineer",
    "Certified Kubernetes Administrator",
    "ISO 27001 Lead Implementer",
    "GDPR Data Protection Officer"
  ];

  const metrics = [
    { icon: <Building2 className="h-6 w-6" />, value: "500+", label: "Enterprise Clients" },
    { icon: <Globe className="h-6 w-6" />, value: "50+", label: "Countries Served" },
    { icon: <Clock className="h-6 w-6" />, value: "99.9%", label: "Uptime SLA" },
    { icon: <Users className="h-6 w-6" />, value: "24/7", label: "Global Support" }
  ];

  return (
    <section id="expertise" className="py-20 bg-background relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-30 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-white/5 dark:bg-white/5 light:bg-primary/5 rounded-full text-foreground/80 text-sm mb-6 inline-block border border-white/10 dark:border-white/10 light:border-primary/10 backdrop-blur-sm">
            Enterprise Excellence
          </span>
          <h2 className="text-foreground text-3xl md:text-4xl font-bold">Global AI Expertise</h2>
          <p className="text-foreground/70 mt-4 max-w-3xl mx-auto">
            Delivering Fortune 500-grade AI solutions with enterprise security, global compliance, 
            and 24/7 support across multiple continents and time zones.
          </p>
        </div>

        {/* Core Expertise Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {expertiseAreas.map((area, index) => (
            <Card key={index} className="bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/20 text-primary">
                    {area.icon}
                  </div>
                  <div>
                    <CardTitle className="text-foreground text-xl">{area.title}</CardTitle>
                    <Badge variant="outline" className="mt-1">{area.experience}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/70 mb-4">
                  {area.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {area.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enterprise Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <Card key={index} className="bg-white/5 border border-white/10 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-3 text-primary">
                  {metric.icon}
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{metric.value}</div>
                <div className="text-sm text-foreground/70">{metric.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Strategic Partnerships */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Strategic Technology Partnerships</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {partnerships.map((partner, index) => (
              <Card key={index} className="bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <CardContent className="p-4 text-center">
                  <div className="h-12 w-12 mx-auto mb-3 flex items-center justify-center">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`}
                      className="h-8 w-8 object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling.style.display = 'block';
                      }}
                    />
                    <div className="text-2xl hidden">
                      {partner.name === 'Microsoft Azure' && '🔷'}
                      {partner.name === 'Amazon Web Services' && '🟠'}
                      {partner.name === 'Google Cloud' && '🔴'}
                      {partner.name === 'OpenAI' && '🤖'}
                      {partner.name === 'Anthropic' && '🧠'}
                      {partner.name === 'ElevenLabs' && '🎙️'}
                      {partner.name === 'n8n' && '🔗'}
                      {partner.name === 'Make' && '⚙️'}
                      {partner.name === 'Zapier' && '⚡'}
                      {partner.name === 'Stripe' && '💳'}
                      {partner.name === 'Shopify Plus' && '🛒'}
                      {partner.name === 'Twilio' && '📞'}
                    </div>
                  </div>
                  <div className="text-sm font-medium text-foreground">{partner.name}</div>
                  <div className="text-xs text-foreground/60">{partner.type}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Professional Certifications */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Professional Certifications & Standards</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2">
                <Award className="h-3 w-3 mr-2" />
                {cert}
              </Badge>
            ))}
          </div>
          <p className="text-foreground/60 mt-6 max-w-2xl mx-auto">
            Our global team maintains the highest industry certifications and follows enterprise-grade 
            development practices to ensure world-class AI solutions for Fortune 500 companies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseExpertise;
