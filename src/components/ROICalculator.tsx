import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calculator, TrendingUp, DollarSign, Clock, Users, Zap } from 'lucide-react';

interface ROIData {
  currentCosts: number;
  timeSpent: number;
  employeeCount: number;
  hourlyRate: number;
  industry: string;
  solution: string;
}

const ROICalculator: React.FC = () => {
  const [formData, setFormData] = useState<ROIData>({
    currentCosts: 0,
    timeSpent: 0,
    employeeCount: 0,
    hourlyRate: 50,
    industry: '',
    solution: ''
  });

  const [results, setResults] = useState({
    monthlySavings: 0,
    annualSavings: 0,
    roi: 0,
    paybackPeriod: 0,
    productivityGain: 0
  });

  const [currency, setCurrency] = useState('USD');

  const industries = [
    { value: 'ecommerce', label: 'E-commerce', multiplier: 1.2 },
    { value: 'healthcare', label: 'Healthcare', multiplier: 1.5 },
    { value: 'finance', label: 'Finance', multiplier: 1.8 },
    { value: 'manufacturing', label: 'Manufacturing', multiplier: 1.3 },
    { value: 'retail', label: 'Retail', multiplier: 1.1 },
    { value: 'technology', label: 'Technology', multiplier: 1.4 },
    { value: 'consulting', label: 'Consulting', multiplier: 1.6 },
    { value: 'other', label: 'Other', multiplier: 1.0 }
  ];

  const solutions = [
    { value: 'chatbot', label: 'AI Chatbot', cost: 3750, efficiency: 0.4 },
    { value: 'workflow', label: 'Workflow Automation', cost: 15000, efficiency: 0.6 },
    { value: 'voice', label: 'AI Voice Agent', cost: 5625, efficiency: 0.5 },
    { value: 'analytics', label: 'Business Intelligence', cost: 12000, efficiency: 0.3 },
    { value: 'custom', label: 'Custom AI Solution', cost: 25000, efficiency: 0.7 }
  ];

  const currencySymbols = {
    USD: '$',
    GBP: '£',
    EUR: '€'
  };

  const currencyRates = {
    USD: 1,
    GBP: 0.8,
    EUR: 0.9
  };

  useEffect(() => {
    calculateROI();
  }, [formData, currency]);

  const calculateROI = () => {
    const { currentCosts, timeSpent, employeeCount, hourlyRate, industry, solution } = formData;
    
    if (!industry || !solution || !employeeCount) {
      setResults({ monthlySavings: 0, annualSavings: 0, roi: 0, paybackPeriod: 0, productivityGain: 0 });
      return;
    }

    const industryData = industries.find(i => i.value === industry);
    const solutionData = solutions.find(s => s.value === solution);
    
    if (!industryData || !solutionData) return;

    // Calculate current monthly costs
    const monthlyLaborCost = employeeCount * hourlyRate * timeSpent * 4.33; // 4.33 weeks per month
    const totalMonthlyCost = currentCosts + monthlyLaborCost;

    // Calculate savings with AI automation
    const efficiencyGain = solutionData.efficiency * industryData.multiplier;
    const monthlySavings = totalMonthlyCost * efficiencyGain;
    const annualSavings = monthlySavings * 12;

    // Calculate investment and ROI
    const investment = solutionData.cost * currencyRates[currency as keyof typeof currencyRates];
    const roi = investment > 0 ? ((annualSavings - investment) / investment) * 100 : 0;
    const paybackPeriod = investment > 0 ? investment / monthlySavings : 0;
    const productivityGain = efficiencyGain * 100;

    setResults({
      monthlySavings: monthlySavings * currencyRates[currency as keyof typeof currencyRates],
      annualSavings: annualSavings * currencyRates[currency as keyof typeof currencyRates],
      roi,
      paybackPeriod,
      productivityGain
    });
  };

  const formatCurrency = (amount: number) => {
    const symbol = currencySymbols[currency as keyof typeof currencySymbols];
    return `${symbol}${Math.round(amount).toLocaleString()}`;
  };

  const handleInputChange = (field: keyof ROIData, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: typeof value === 'string' ? parseFloat(value) || 0 : value
    }));
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Calculator className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-bold text-foreground">AI ROI Calculator</h2>
        </div>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          Calculate the potential return on investment for AI automation in your business. 
          Get instant insights into cost savings, productivity gains, and payback periods.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <Card className="bg-white/5 border border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Business Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Currency Selector */}
            <div>
              <Label className="text-foreground/80">Currency</Label>
              <Select value={currency} onValueChange={setCurrency}>
                <SelectTrigger className="bg-white/5 border-white/10 text-foreground">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USD">USD ($)</SelectItem>
                  <SelectItem value="GBP">GBP (£)</SelectItem>
                  <SelectItem value="EUR">EUR (€)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Industry */}
            <div>
              <Label className="text-foreground/80">Industry</Label>
              <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                <SelectTrigger className="bg-white/5 border-white/10 text-foreground">
                  <SelectValue placeholder="Select your industry" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map(industry => (
                    <SelectItem key={industry.value} value={industry.value}>
                      {industry.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Solution Type */}
            <div>
              <Label className="text-foreground/80">AI Solution</Label>
              <Select value={formData.solution} onValueChange={(value) => handleInputChange('solution', value)}>
                <SelectTrigger className="bg-white/5 border-white/10 text-foreground">
                  <SelectValue placeholder="Select AI solution" />
                </SelectTrigger>
                <SelectContent>
                  {solutions.map(solution => (
                    <SelectItem key={solution.value} value={solution.value}>
                      {solution.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Current Monthly Costs */}
            <div>
              <Label className="text-foreground/80">Current Monthly Operational Costs</Label>
              <Input
                type="number"
                placeholder="5000"
                value={formData.currentCosts || ''}
                onChange={(e) => handleInputChange('currentCosts', e.target.value)}
                className="bg-white/5 border-white/10 text-foreground placeholder:text-foreground/50"
              />
            </div>

            {/* Employee Count */}
            <div>
              <Label className="text-foreground/80">Number of Employees Affected</Label>
              <Input
                type="number"
                placeholder="10"
                value={formData.employeeCount || ''}
                onChange={(e) => handleInputChange('employeeCount', e.target.value)}
                className="bg-white/5 border-white/10 text-foreground placeholder:text-foreground/50"
              />
            </div>

            {/* Time Spent */}
            <div>
              <Label className="text-foreground/80">Hours/Week on Manual Tasks</Label>
              <Input
                type="number"
                placeholder="20"
                value={formData.timeSpent || ''}
                onChange={(e) => handleInputChange('timeSpent', e.target.value)}
                className="bg-white/5 border-white/10 text-foreground placeholder:text-foreground/50"
              />
            </div>

            {/* Hourly Rate */}
            <div>
              <Label className="text-foreground/80">Average Hourly Rate</Label>
              <Input
                type="number"
                placeholder="50"
                value={formData.hourlyRate || ''}
                onChange={(e) => handleInputChange('hourlyRate', e.target.value)}
                className="bg-white/5 border-white/10 text-foreground placeholder:text-foreground/50"
              />
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <Card className="bg-white/5 border border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              ROI Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {results.monthlySavings > 0 ? (
              <>
                {/* Monthly Savings */}
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="h-5 w-5 text-green-400" />
                    <h3 className="font-semibold text-green-400">Monthly Savings</h3>
                  </div>
                  <p className="text-2xl font-bold text-green-400">
                    {formatCurrency(results.monthlySavings)}
                  </p>
                </div>

                {/* Annual Savings */}
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-5 w-5 text-blue-400" />
                    <h3 className="font-semibold text-blue-400">Annual Savings</h3>
                  </div>
                  <p className="text-2xl font-bold text-blue-400">
                    {formatCurrency(results.annualSavings)}
                  </p>
                </div>

                {/* ROI Percentage */}
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="h-5 w-5 text-purple-400" />
                    <h3 className="font-semibold text-purple-400">Return on Investment</h3>
                  </div>
                  <p className="text-2xl font-bold text-purple-400">
                    {Math.round(results.roi)}%
                  </p>
                </div>

                {/* Payback Period */}
                <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-5 w-5 text-orange-400" />
                    <h3 className="font-semibold text-orange-400">Payback Period</h3>
                  </div>
                  <p className="text-2xl font-bold text-orange-400">
                    {Math.round(results.paybackPeriod)} months
                  </p>
                </div>

                {/* Productivity Gain */}
                <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-cyan-400" />
                    <h3 className="font-semibold text-cyan-400">Productivity Gain</h3>
                  </div>
                  <p className="text-2xl font-bold text-cyan-400">
                    {Math.round(results.productivityGain)}%
                  </p>
                </div>

                {/* CTA */}
                <div className="mt-8 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Ready to Get Started?</h4>
                  <p className="text-sm text-foreground/70 mb-4">
                    Start with our £1,500 pilot program and see these results in action within 7-14 days.
                  </p>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Get Your Pilot Program
                  </Button>
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <Calculator className="h-16 w-16 text-foreground/30 mx-auto mb-4" />
                <p className="text-foreground/50">
                  Fill in your business information to see your potential ROI
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Disclaimer */}
      <div className="mt-8 text-center">
        <p className="text-xs text-foreground/50 max-w-4xl mx-auto">
          * Results are estimates based on industry averages and typical AI automation efficiency gains. 
          Actual results may vary depending on specific business processes, implementation complexity, and organizational factors. 
          Contact our team for a detailed analysis of your specific use case.
        </p>
      </div>
    </div>
  );
};

export default ROICalculator;