import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Globe, MapPin } from 'lucide-react';

interface RegionalPageLinksProps {
  currentService: string;
  currentRegion?: string;
}

const RegionalPageLinks: React.FC<RegionalPageLinksProps> = ({ currentService, currentRegion }) => {
  const regions = [
    {
      code: 'uk',
      name: 'United Kingdom',
      flag: '🇬🇧',
      description: 'GDPR compliant, VAT automation, British business systems'
    },
    {
      code: 'us',
      name: 'United States',
      flag: '🇺🇸',
      description: 'Fortune 500 focus, HIPAA/SOC 2, enterprise scale'
    },
    {
      code: 'eu',
      name: 'European Union',
      flag: '🇪🇺',
      description: 'GDPR compliance, 24 languages, multi-jurisdictional'
    }
  ];

  const services = [
    { slug: 'automations', name: 'Business Process Automation' },
    { slug: 'chatbots', name: 'AI Chatbot Development' },
    { slug: 'ecommerce', name: 'E-commerce Development' },
    { slug: 'web-development', name: 'Web Development' },
    { slug: 'app-development', name: 'Mobile App Development' },
    { slug: 'voice-agents', name: 'Voice Agent Development' }
  ];

  const currentServiceName = services.find(s => s.slug === currentService)?.name || currentService;

  return (
    <div className="my-16">
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-6 w-6 text-blue-600" />
            {currentServiceName} - Regional Solutions
          </CardTitle>
          <CardDescription>
            Explore our specialized {currentServiceName.toLowerCase()} services tailored for different markets
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {regions.map((region) => (
              <Link
                key={region.code}
                to={`/${currentService}/${region.code}`}
                className={`block group ${currentRegion === region.code ? 'pointer-events-none' : ''}`}
              >
                <Card className={`h-full transition-all duration-300 ${
                  currentRegion === region.code 
                    ? 'bg-blue-100 border-blue-300' 
                    : 'hover:shadow-lg hover:border-blue-300'
                }`}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{region.flag}</span>
                      <div>
                        <h3 className="font-semibold text-lg">{region.name}</h3>
                        {currentRegion === region.code && (
                          <Badge variant="secondary" className="bg-blue-200 text-blue-800">
                            Current Page
                          </Badge>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{region.description}</p>
                    {currentRegion !== region.code && (
                      <div className="mt-3 text-blue-600 group-hover:text-blue-800 text-sm font-medium">
                        View {region.name} Solutions →
                      </div>
                    )}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Related Services */}
      <Card className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-6 w-6 text-green-600" />
            Other Services {currentRegion ? `in ${regions.find(r => r.code === currentRegion)?.name}` : ''}
          </CardTitle>
          <CardDescription>
            Explore our complete range of AI automation services
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services
              .filter(service => service.slug !== currentService)
              .map((service) => (
                <Link
                  key={service.slug}
                  to={currentRegion ? `/${service.slug}/${currentRegion}` : `/services/${service.slug}`}
                  className="block group"
                >
                  <Card className="h-full transition-all duration-300 hover:shadow-md hover:border-green-300">
                    <CardContent className="p-4">
                      <h4 className="font-medium text-sm mb-2">{service.name}</h4>
                      <div className="text-green-600 group-hover:text-green-800 text-xs font-medium">
                        Learn More →
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegionalPageLinks;
