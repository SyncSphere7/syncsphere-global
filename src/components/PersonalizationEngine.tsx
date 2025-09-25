import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Building, MapPin, Clock, TrendingUp, Users, Zap } from 'lucide-react';

interface VisitorData {
  location: string;
  country: string;
  timezone: string;
  deviceType: 'mobile' | 'tablet' | 'desktop';
  visitCount: number;
  timeOnSite: number;
  referrer: string;
  industry?: string;
  companySize?: string;
}

interface PersonalizationEngineProps {
  children: (data: {
    greeting: string;
    pricing: string;
    testimonial: any;
    cta: string;
    urgency: string;
    industry: string;
  }) => React.ReactNode;
}

const PersonalizationEngine: React.FC<PersonalizationEngineProps> = ({ children }) => {
  const [visitorData, setVisitorData] = useState<VisitorData>({
    location: 'Unknown',
    country: 'US',
    timezone: 'UTC',
    deviceType: 'desktop',
    visitCount: 1,
    timeOnSite: 0,
    referrer: '',
    industry: 'technology',
    companySize: 'small'
  });

  const [personalization, setPersonalization] = useState({
    greeting: 'Welcome to SyncSphere',
    pricing: 'USD',
    testimonial: null,
    cta: 'Get Started',
    urgency: '',
    industry: 'technology'
  });

  // Industry-specific testimonials
  const testimonials = {
    ecommerce: {
      text: "SyncSphere's AI chatbot increased our conversion rate by 40% and handles 80% of customer inquiries automatically.",
      author: "Sarah Chen, E-commerce Director",
      company: "TechMart Online",
      metric: "40% conversion increase"
    },
    healthcare: {
      text: "The AI automation reduced patient wait times by 60% and improved our appointment scheduling efficiency dramatically.",
      author: "Dr. Michael Rodriguez, Practice Manager",
      company: "HealthFirst Clinic",
      metric: "60% faster processing"
    },
    finance: {
      text: "Our AI voice agent processes loan applications 5x faster while maintaining 99.9% accuracy in compliance checks.",
      author: "Jennifer Walsh, Operations Director",
      company: "SecureFinance Group",
      metric: "5x faster processing"
    },
    manufacturing: {
      text: "AI workflow automation cut our production planning time from 8 hours to 45 minutes with better accuracy.",
      author: "Robert Kim, Production Manager",
      company: "PrecisionTech Manufacturing",
      metric: "90% time reduction"
    },
    retail: {
      text: "The AI system manages our inventory across 50 stores, reducing stockouts by 75% and overstock by 60%.",
      author: "Lisa Thompson, Retail Operations",
      company: "StyleHub Retail Chain",
      metric: "75% fewer stockouts"
    },
    technology: {
      text: "SyncSphere's custom AI solution automated our entire customer onboarding, reducing time-to-value by 80%.",
      author: "Alex Johnson, CTO",
      company: "InnovateTech Solutions",
      metric: "80% faster onboarding"
    }
  };

  // Time-based greetings
  const getTimeBasedGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  // Location-based pricing
  const getLocationPricing = (country: string) => {
    const pricingMap: { [key: string]: string } = {
      'GB': 'GBP',
      'UK': 'GBP',
      'DE': 'EUR',
      'FR': 'EUR',
      'ES': 'EUR',
      'IT': 'EUR',
      'NL': 'EUR',
      'BE': 'EUR',
      'AT': 'EUR',
      'IE': 'EUR',
      'PT': 'EUR',
      'FI': 'EUR',
      'LU': 'EUR',
      'MT': 'EUR',
      'CY': 'EUR',
      'EE': 'EUR',
      'LV': 'EUR',
      'LT': 'EUR',
      'SK': 'EUR',
      'SI': 'EUR'
    };
    return pricingMap[country.toUpperCase()] || 'USD';
  };

  // Industry detection from referrer or stored data
  const detectIndustry = (referrer: string, storedData?: string) => {
    if (storedData) return storedData;
    
    const industryKeywords = {
      ecommerce: ['shop', 'store', 'retail', 'ecommerce', 'commerce', 'buy', 'sell'],
      healthcare: ['health', 'medical', 'clinic', 'hospital', 'doctor', 'patient'],
      finance: ['bank', 'finance', 'loan', 'credit', 'investment', 'fintech'],
      manufacturing: ['manufacturing', 'factory', 'production', 'industrial', 'supply'],
      technology: ['tech', 'software', 'saas', 'startup', 'digital', 'app']
    };

    for (const [industry, keywords] of Object.entries(industryKeywords)) {
      if (keywords.some(keyword => referrer.toLowerCase().includes(keyword))) {
        return industry;
      }
    }
    return 'technology';
  };

  // Urgency messaging based on behavior
  const getUrgencyMessage = (visitCount: number, timeOnSite: number) => {
    if (visitCount > 3) {
      return "You've been exploring our solutions - ready to take the next step?";
    }
    if (timeOnSite > 300) { // 5 minutes
      return "Limited pilot program spots available this month - secure yours today!";
    }
    if (visitCount === 1) {
      return "New visitor special: Free consultation + 10% off your first project";
    }
    return '';
  };

  // Device-specific CTA
  const getDeviceCTA = (deviceType: string) => {
    if (deviceType === 'mobile') {
      return 'WhatsApp Us Now';
    }
    return 'Schedule Consultation';
  };

  useEffect(() => {
    // Get visitor data from various sources
    const getVisitorData = async () => {
      try {
        // Get basic device info
        const deviceType = window.innerWidth < 768 ? 'mobile' : 
                          window.innerWidth < 1024 ? 'tablet' : 'desktop';
        
        // Get stored visitor data
        const storedData = localStorage.getItem('syncsphere_visitor_data');
        const visitCount = parseInt(localStorage.getItem('syncsphere_visit_count') || '1');
        const startTime = parseInt(localStorage.getItem('syncsphere_session_start') || Date.now().toString());
        
        // Update visit count
        localStorage.setItem('syncsphere_visit_count', (visitCount + 1).toString());
        localStorage.setItem('syncsphere_session_start', Date.now().toString());

        // Try to get location data (free IP geolocation)
        let locationData = { country: 'US', city: 'Unknown', timezone: 'UTC' };
        try {
          const response = await fetch('https://ipapi.co/json/');
          if (response.ok) {
            const data = await response.json();
            locationData = {
              country: data.country_code || 'US',
              city: data.city || 'Unknown',
              timezone: data.timezone || 'UTC'
            };
          }
        } catch (error) {
          console.log('Location detection failed, using defaults');
        }

        const newVisitorData: VisitorData = {
          location: locationData.city,
          country: locationData.country,
          timezone: locationData.timezone,
          deviceType,
          visitCount,
          timeOnSite: Math.floor((Date.now() - startTime) / 1000),
          referrer: document.referrer,
          industry: detectIndustry(document.referrer, storedData ? JSON.parse(storedData).industry : undefined),
          companySize: storedData ? JSON.parse(storedData).companySize : 'small'
        };

        setVisitorData(newVisitorData);

        // Store updated data
        localStorage.setItem('syncsphere_visitor_data', JSON.stringify(newVisitorData));

        // Generate personalization
        const greeting = `${getTimeBasedGreeting()}${newVisitorData.location !== 'Unknown' ? ` from ${newVisitorData.location}` : ''}!`;
        const pricing = getLocationPricing(newVisitorData.country);
        const testimonial = testimonials[newVisitorData.industry as keyof typeof testimonials] || testimonials.technology;
        const cta = getDeviceCTA(newVisitorData.deviceType);
        const urgency = getUrgencyMessage(newVisitorData.visitCount, newVisitorData.timeOnSite);

        setPersonalization({
          greeting,
          pricing,
          testimonial,
          cta,
          urgency,
          industry: newVisitorData.industry || 'technology'
        });

      } catch (error) {
        console.error('Personalization error:', error);
      }
    };

    getVisitorData();

    // Update time on site every 30 seconds
    const interval = setInterval(() => {
      setVisitorData(prev => ({
        ...prev,
        timeOnSite: prev.timeOnSite + 30
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {children(personalization)}
      
      {/* Debug Panel (only in development) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 left-4 z-40 hidden sm:block">
          <Card className="bg-black/80 text-white text-xs max-w-xs">
            <CardContent className="p-3">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="h-3 w-3" />
                <span className="font-semibold">Personalization Debug</span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <MapPin className="h-3 w-3" />
                  <span className="truncate">{visitorData.location}, {visitorData.country}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="h-3 w-3" />
                  <span className="truncate">Industry: {visitorData.industry}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-3 w-3" />
                  <span>Visit #{visitorData.visitCount}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-3 w-3" />
                  <span>{Math.floor(visitorData.timeOnSite / 60)}m on site</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-3 w-3" />
                  <span>Currency: {personalization.pricing}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default PersonalizationEngine;