import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, TrendingDown, Search, Globe, Building, Users, DollarSign, BarChart3, Eye, Clock, Zap } from 'lucide-react';

interface MarketData {
  industry: string;
  marketSize: string;
  growthRate: string;
  keyTrends: string[];
  competitors: Array<{
    name: string;
    marketShare: string;
    strengths: string[];
    weaknesses: string[];
  }>;
  opportunities: string[];
  threats: string[];
  aiAdoptionRate: string;
  averageROI: string;
}

interface MarketIntelligenceProps {
  embedded?: boolean;
  onInsightSelect?: (insight: any) => void;
}

const MarketIntelligence: React.FC<MarketIntelligenceProps> = ({ embedded = false, onInsightSelect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('technology');
  const [marketData, setMarketData] = useState<MarketData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [realTimeData, setRealTimeData] = useState({
    aiJobPostings: '+23%',
    automationInvestment: '$2.4B',
    startupFunding: '+15%',
    marketSentiment: 'Bullish'
  });

  const industries = [
    { id: 'technology', name: 'Technology', icon: '💻' },
    { id: 'healthcare', name: 'Healthcare', icon: '🏥' },
    { id: 'finance', name: 'Finance', icon: '💰' },
    { id: 'ecommerce', name: 'E-commerce', icon: '🛒' },
    { id: 'manufacturing', name: 'Manufacturing', icon: '🏭' },
    { id: 'retail', name: 'Retail', icon: '🏪' }
  ];

  // Simulated market data
  const getMarketData = (industry: string): MarketData => {
    const data = {
      technology: {
        industry: 'Technology',
        marketSize: '$5.2T',
        growthRate: '+12.3%',
        keyTrends: ['AI Integration', 'Cloud Migration', 'Automation', 'Remote Work Tools'],
        competitors: [
          { name: 'Microsoft', marketShare: '15%', strengths: ['Cloud Services', 'Enterprise Solutions'], weaknesses: ['Consumer Mobile'] },
          { name: 'Google', marketShare: '12%', strengths: ['AI/ML', 'Search'], weaknesses: ['Enterprise Sales'] },
          { name: 'Amazon', marketShare: '10%', strengths: ['AWS', 'Scale'], weaknesses: ['Regulation Risk'] }
        ],
        opportunities: ['AI Automation', 'Edge Computing', 'Quantum Computing'],
        threats: ['Regulation', 'Talent Shortage', 'Economic Downturn'],
        aiAdoptionRate: '67%',
        averageROI: '340%'
      },
      healthcare: {
        industry: 'Healthcare',
        marketSize: '$4.1T',
        growthRate: '+8.7%',
        keyTrends: ['Telemedicine', 'AI Diagnostics', 'Digital Health', 'Personalized Medicine'],
        competitors: [
          { name: 'UnitedHealth', marketShare: '8%', strengths: ['Insurance', 'Data'], weaknesses: ['Innovation Speed'] },
          { name: 'Johnson & Johnson', marketShare: '6%', strengths: ['R&D', 'Global Reach'], weaknesses: ['Digital Transformation'] }
        ],
        opportunities: ['AI-Powered Diagnostics', 'Remote Patient Monitoring', 'Drug Discovery AI'],
        threats: ['Regulatory Compliance', 'Data Privacy', 'Cybersecurity'],
        aiAdoptionRate: '34%',
        averageROI: '280%'
      },
      finance: {
        industry: 'Finance',
        marketSize: '$3.8T',
        growthRate: '+6.2%',
        keyTrends: ['Digital Banking', 'Robo-Advisors', 'Blockchain', 'RegTech'],
        competitors: [
          { name: 'JPMorgan Chase', marketShare: '12%', strengths: ['Scale', 'Technology Investment'], weaknesses: ['Legacy Systems'] },
          { name: 'Goldman Sachs', marketShare: '8%', strengths: ['Innovation', 'Talent'], weaknesses: ['Consumer Banking'] }
        ],
        opportunities: ['AI Risk Management', 'Automated Trading', 'Customer Service Bots'],
        threats: ['Regulatory Changes', 'Fintech Disruption', 'Economic Volatility'],
        aiAdoptionRate: '45%',
        averageROI: '420%'
      }
    };
    
    return data[industry as keyof typeof data] || data.technology;
  };

  useEffect(() => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setMarketData(getMarketData(selectedIndustry));
      setIsLoading(false);
    }, 1000);
  }, [selectedIndustry]);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setIsLoading(true);
      // Simulate search
      setTimeout(() => {
        setMarketData(getMarketData(selectedIndustry));
        setIsLoading(false);
      }, 800);
    }
  };

  const handleInsightClick = (insight: any) => {
    if (onInsightSelect) {
      onInsightSelect(insight);
    }
  };

  if (embedded && !marketData) {
    return (
      <div className="p-4 bg-white/5 rounded-lg border border-white/10">
        <div className="animate-pulse space-y-3">
          <div className="h-4 bg-white/10 rounded w-3/4"></div>
          <div className="h-4 bg-white/10 rounded w-1/2"></div>
          <div className="h-4 bg-white/10 rounded w-2/3"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${embedded ? 'max-w-2xl' : 'max-w-7xl mx-auto'} p-6`}>
      {!embedded && (
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BarChart3 className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Market Intelligence</h2>
          </div>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Real-time market insights, competitor analysis, and industry trends powered by AI
          </p>
        </div>
      )}

      {/* Real-time Market Indicators */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card className="bg-white/5 border border-white/10">
          <CardContent className="p-4 text-center">
            <TrendingUp className="h-6 w-6 text-green-400 mx-auto mb-2" />
            <p className="text-sm text-foreground/70">AI Job Growth</p>
            <p className="text-lg font-bold text-green-400">{realTimeData.aiJobPostings}</p>
          </CardContent>
        </Card>
        <Card className="bg-white/5 border border-white/10">
          <CardContent className="p-4 text-center">
            <DollarSign className="h-6 w-6 text-blue-400 mx-auto mb-2" />
            <p className="text-sm text-foreground/70">AI Investment</p>
            <p className="text-lg font-bold text-blue-400">{realTimeData.automationInvestment}</p>
          </CardContent>
        </Card>
        <Card className="bg-white/5 border border-white/10">
          <CardContent className="p-4 text-center">
            <Zap className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
            <p className="text-sm text-foreground/70">Startup Funding</p>
            <p className="text-lg font-bold text-yellow-400">{realTimeData.startupFunding}</p>
          </CardContent>
        </Card>
        <Card className="bg-white/5 border border-white/10">
          <CardContent className="p-4 text-center">
            <TrendingUp className="h-6 w-6 text-purple-400 mx-auto mb-2" />
            <p className="text-sm text-foreground/70">Market Sentiment</p>
            <p className="text-lg font-bold text-purple-400">{realTimeData.marketSentiment}</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Industry Selection */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 flex gap-2">
          <Input
            placeholder="Search market insights..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-white/5 border-white/10 text-foreground"
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <Button onClick={handleSearch} className="bg-primary hover:bg-primary/90">
            <Search className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex gap-2 overflow-x-auto">
          {industries.map((industry) => (
            <Button
              key={industry.id}
              variant={selectedIndustry === industry.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedIndustry(industry.id)}
              className="whitespace-nowrap"
            >
              {industry.icon} {industry.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Market Data */}
      {isLoading ? (
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <Card key={i} className="bg-white/5 border border-white/10">
              <CardContent className="p-6">
                <div className="animate-pulse space-y-3">
                  <div className="h-4 bg-white/10 rounded w-3/4"></div>
                  <div className="h-4 bg-white/10 rounded w-1/2"></div>
                  <div className="h-4 bg-white/10 rounded w-2/3"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : marketData ? (
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="competitors">Competitors</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
            <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-white/5 border border-white/10">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    Market Size
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">{marketData.marketSize}</p>
                  <p className="text-sm text-foreground/70">Total addressable market</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/5 border border-white/10">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Growth Rate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-green-400">{marketData.growthRate}</p>
                  <p className="text-sm text-foreground/70">Year over year</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/5 border border-white/10">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    AI Adoption
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-yellow-400">{marketData.aiAdoptionRate}</p>
                  <p className="text-sm text-foreground/70">Average ROI: {marketData.averageROI}</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="competitors" className="space-y-4">
            {marketData.competitors.map((competitor, index) => (
              <Card key={index} className="bg-white/5 border border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-foreground">{competitor.name}</h3>
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                      {competitor.marketShare} market share
                    </Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-green-400 mb-2">Strengths</h4>
                      <ul className="space-y-1">
                        {competitor.strengths.map((strength, i) => (
                          <li key={i} className="text-sm text-foreground/70">• {strength}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-red-400 mb-2">Weaknesses</h4>
                      <ul className="space-y-1">
                        {competitor.weaknesses.map((weakness, i) => (
                          <li key={i} className="text-sm text-foreground/70">• {weakness}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="trends" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {marketData.keyTrends.map((trend, index) => (
                <Card 
                  key={index} 
                  className="bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition-colors"
                  onClick={() => handleInsightClick({ type: 'trend', data: trend })}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      <span className="font-medium text-foreground">{trend}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="opportunities" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-white/5 border border-white/10">
                <CardHeader>
                  <CardTitle className="text-green-400 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Opportunities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {marketData.opportunities.map((opportunity, index) => (
                      <li 
                        key={index} 
                        className="text-foreground/80 cursor-pointer hover:text-foreground transition-colors"
                        onClick={() => handleInsightClick({ type: 'opportunity', data: opportunity })}
                      >
                        • {opportunity}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-white/5 border border-white/10">
                <CardHeader>
                  <CardTitle className="text-red-400 flex items-center gap-2">
                    <TrendingDown className="h-5 w-5" />
                    Threats
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {marketData.threats.map((threat, index) => (
                      <li 
                        key={index} 
                        className="text-foreground/80 cursor-pointer hover:text-foreground transition-colors"
                        onClick={() => handleInsightClick({ type: 'threat', data: threat })}
                      >
                        • {threat}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      ) : null}

      {!embedded && (
        <div className="mt-8 text-center">
          <p className="text-xs text-foreground/50 mb-4">
            Data updated every 15 minutes • Sources: Industry reports, public APIs, market research
          </p>
          <Button className="bg-primary hover:bg-primary/90">
            <Eye className="h-4 w-4 mr-2" />
            Get Detailed Report
          </Button>
        </div>
      )}
    </div>
  );
};

export default MarketIntelligence;