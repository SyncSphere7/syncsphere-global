import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, AlertCircle, Search, Globe, TrendingUp, ExternalLink } from 'lucide-react';

const SEOMonitor: React.FC = () => {
  const [indexingStatus, setIndexingStatus] = useState<'checking' | 'indexed' | 'pending'>('checking');

  const regionalPages = [
    // UK Pages
    { url: '/automations/uk', title: 'Business Process Automation UK', region: 'UK', service: 'Automations' },
    { url: '/chatbots/uk', title: 'AI Chatbot Development UK', region: 'UK', service: 'Chatbots' },
    { url: '/ecommerce/uk', title: 'E-commerce Development UK', region: 'UK', service: 'E-commerce' },
    { url: '/web-development/uk', title: 'Web Development UK', region: 'UK', service: 'Web Development' },
    { url: '/app-development/uk', title: 'Mobile App Development UK', region: 'UK', service: 'App Development' },
    { url: '/voice-agents/uk', title: 'Voice Agents UK', region: 'UK', service: 'Voice Agents' },
    
    // US Pages
    { url: '/automations/us', title: 'Business Process Automation US', region: 'US', service: 'Automations' },
    { url: '/chatbots/us', title: 'AI Chatbot Development US', region: 'US', service: 'Chatbots' },
    { url: '/ecommerce/us', title: 'E-commerce Development US', region: 'US', service: 'E-commerce' },
    { url: '/web-development/us', title: 'Web Development US', region: 'US', service: 'Web Development' },
    { url: '/app-development/us', title: 'Mobile App Development US', region: 'US', service: 'App Development' },
    { url: '/voice-agents/us', title: 'Voice Agents US', region: 'US', service: 'Voice Agents' },
    
    // EU Pages
    { url: '/automations/eu', title: 'Business Process Automation EU', region: 'EU', service: 'Automations' },
    { url: '/chatbots/eu', title: 'AI Chatbot Development EU', region: 'EU', service: 'Chatbots' },
    { url: '/ecommerce/eu', title: 'E-commerce Development EU', region: 'EU', service: 'E-commerce' },
    { url: '/web-development/eu', title: 'Web Development EU', region: 'EU', service: 'Web Development' },
    { url: '/app-development/eu', title: 'Mobile App Development EU', region: 'EU', service: 'App Development' },
    { url: '/voice-agents/eu', title: 'Voice Agents EU', region: 'EU', service: 'Voice Agents' },
  ];

  const primaryKeywords = [
    'ai automation agency uk',
    'ai automation agency us', 
    'ai automation agency eu',
    'business process automation uk',
    'business process automation us',
    'business process automation eu',
    'ai chatbot development uk',
    'ai chatbot development us',
    'ai chatbot development eu',
    'ecommerce development uk',
    'ecommerce development us',
    'ecommerce development eu',
    'web development uk',
    'web development us',
    'web development eu',
    'mobile app development uk',
    'mobile app development us',
    'mobile app development eu',
    'voice agents uk',
    'voice agents us',
    'voice agents eu'
  ];

  const seoActions = [
    {
      action: 'Submit to Google Search Console',
      description: 'Submit sitemap.xml to Google Search Console for faster indexing',
      url: 'https://search.google.com/search-console',
      priority: 'High'
    },
    {
      action: 'Submit to Bing Webmaster Tools',
      description: 'Submit sitemap to Bing for Microsoft search indexing',
      url: 'https://www.bing.com/webmasters',
      priority: 'High'
    },
    {
      action: 'Monitor Core Web Vitals',
      description: 'Ensure all regional pages meet Google\'s performance standards',
      url: 'https://pagespeed.web.dev/',
      priority: 'Medium'
    },
    {
      action: 'Set up Google Analytics',
      description: 'Track regional page performance and user behavior',
      url: 'https://analytics.google.com/',
      priority: 'Medium'
    },
    {
      action: 'Create Google Business Profiles',
      description: 'Set up local business listings for each region',
      url: 'https://business.google.com/',
      priority: 'Medium'
    }
  ];

  useEffect(() => {
    // Simulate checking indexing status
    const timer = setTimeout(() => {
      setIndexingStatus('pending');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const getRegionFlag = (region: string) => {
    switch (region) {
      case 'UK': return '🇬🇧';
      case 'US': return '🇺🇸';
      case 'EU': return '🇪🇺';
      default: return 'Global';
    }
  };

  const getRegionColor = (region: string) => {
    switch (region) {
      case 'UK': return 'bg-blue-100 text-blue-800';
      case 'US': return 'bg-red-100 text-red-800';
      case 'EU': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8">
      {/* SEO Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-6 w-6 text-blue-600" />
            SEO Implementation Status
          </CardTitle>
          <CardDescription>
            Complete overview of regional SEO implementation and indexing status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">18</div>
              <div className="text-sm text-muted-foreground">Regional Pages Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">21</div>
              <div className="text-sm text-muted-foreground">Primary Keywords Targeted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">3</div>
              <div className="text-sm text-muted-foreground">Markets Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">100%</div>
              <div className="text-sm text-muted-foreground">Service Coverage</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Regional Pages Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-6 w-6 text-green-600" />
            Regional Pages Status
          </CardTitle>
          <CardDescription>
            All 18 regional service pages with hreflang tags and schema markup
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {regionalPages.map((page, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-lg">{getRegionFlag(page.region)}</span>
                  <div>
                    <div className="font-medium text-sm">{page.service}</div>
                    <Badge className={`text-xs ${getRegionColor(page.region)}`}>
                      {page.region}
                    </Badge>
                  </div>
                </div>
                <CheckCircle className="h-5 w-5 text-green-500" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Primary Keywords */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-purple-600" />
            Primary Keywords Coverage
          </CardTitle>
          <CardDescription>
            All high-value keywords are now covered with dedicated regional pages
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {primaryKeywords.map((keyword, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-green-50 rounded border border-green-200">
                <span className="text-sm font-medium">{keyword}</span>
                <CheckCircle className="h-4 w-4 text-green-500" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-6 w-6 text-orange-600" />
            Required SEO Actions
          </CardTitle>
          <CardDescription>
            Critical next steps to ensure proper search engine indexing
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {seoActions.map((action, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-medium">{action.action}</h4>
                    <Badge variant={action.priority === 'High' ? 'destructive' : 'secondary'}>
                      {action.priority}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{action.description}</p>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <a href={action.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Open
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Technical Implementation */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardHeader>
          <CardTitle>✅ Technical Implementation Complete</CardTitle>
          <CardDescription>
            All technical SEO requirements have been implemented
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium">✅ Completed:</h4>
              <ul className="text-sm space-y-1">
                <li>• XML Sitemap with hreflang tags</li>
                <li>• Robots.txt optimization</li>
                <li>• Schema markup implementation</li>
                <li>• Regional page structure</li>
                <li>• Internal linking strategy</li>
                <li>• Meta tags optimization</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">🔄 Next Steps:</h4>
              <ul className="text-sm space-y-1">
                <li>• Submit sitemap to search engines</li>
                <li>• Monitor indexing status</li>
                <li>• Track keyword rankings</li>
                <li>• Analyze user behavior</li>
                <li>• Optimize based on performance</li>
                <li>• Create additional content</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SEOMonitor;
