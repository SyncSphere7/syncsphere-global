import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, Clock, TrendingUp, Phone, MessageCircle, Gift, Zap, Users } from 'lucide-react';

interface BehavioralTriggersProps {
  onTrigger?: (type: string, data: any) => void;
}

const BehavioralTriggers: React.FC<BehavioralTriggersProps> = ({ onTrigger }) => {
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const [timeOnSite, setTimeOnSite] = useState(0);
  const [scrollDepth, setScrollDepth] = useState(0);
  const [exitIntent, setExitIntent] = useState(false);
  const [sessionData, setSessionData] = useState({
    visitCount: 1,
    pagesViewed: 1,
    timeSpent: 0,
    hasInteracted: false
  });

  useEffect(() => {
    // Initialize session tracking
    const initSession = () => {
      const stored = localStorage.getItem('syncsphere_session_data');
      const visitCount = parseInt(localStorage.getItem('syncsphere_visit_count') || '1');
      const startTime = Date.now();
      
      setSessionData(prev => ({
        ...prev,
        visitCount,
        timeSpent: 0
      }));

      // Update visit count
      localStorage.setItem('syncsphere_visit_count', (visitCount + 1).toString());
      localStorage.setItem('syncsphere_session_start', startTime.toString());
    };

    initSession();

    // Time tracking
    const timeInterval = setInterval(() => {
      setTimeOnSite(prev => prev + 1);
      setSessionData(prev => ({ ...prev, timeSpent: prev.timeSpent + 1 }));
    }, 1000);

    // Scroll depth tracking
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      setScrollDepth(scrollPercent);
    };

    // Exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setExitIntent(true);
      }
    };

    // Interaction tracking
    const handleInteraction = () => {
      setSessionData(prev => ({ ...prev, hasInteracted: true }));
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('click', handleInteraction);
    document.addEventListener('keydown', handleInteraction);

    return () => {
      clearInterval(timeInterval);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
    };
  }, []);

  // Trigger logic
  useEffect(() => {
    // Exit intent popup
    if (exitIntent && !activePopup && sessionData.timeSpent > 30) {
      triggerPopup('exit-intent');
    }
    
    // Time-based triggers
    if (timeOnSite === 60 && !activePopup) { // 1 minute
      triggerPopup('engagement');
    }
    
    if (timeOnSite === 180 && !activePopup) { // 3 minutes
      triggerPopup('consultation-offer');
    }
    
    // Scroll-based triggers
    if (scrollDepth >= 70 && !activePopup && sessionData.timeSpent > 45) {
      triggerPopup('roi-calculator');
    }
    
    // Returning visitor triggers
    if (sessionData.visitCount > 2 && timeOnSite === 30 && !activePopup) {
      triggerPopup('returning-visitor');
    }
  }, [exitIntent, timeOnSite, scrollDepth, sessionData, activePopup]);

  const triggerPopup = (type: string) => {
    // Check if popup was already shown in this session
    const shownPopups = JSON.parse(localStorage.getItem('syncsphere_shown_popups') || '[]');
    if (shownPopups.includes(type)) return;

    setActivePopup(type);
    onTrigger?.(type, { timeOnSite, scrollDepth, sessionData });
    
    // Mark as shown
    shownPopups.push(type);
    localStorage.setItem('syncsphere_shown_popups', JSON.stringify(shownPopups));
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  const getPopupContent = (type: string) => {
    switch (type) {
      case 'exit-intent':
        return {
          title: "Wait! Don't Miss Out",
          subtitle: "Get a free consultation before you go",
          content: "Join 500+ businesses that transformed with our AI solutions. Book a free 15-minute consultation now!",
          cta: "Book Free Consultation",
          ctaLink: "https://wa.me/447424819094?text=Hi! I'd like to book a free consultation before I leave your site.",
          icon: <Clock className="h-6 w-6 text-primary" />,
          badge: "Limited Time"
        };
      
      case 'engagement':
        return {
          title: "Interested in AI Solutions?",
          subtitle: "See how much you could save",
          content: "Calculate your potential ROI with our free calculator. Most businesses save 40-70% on operational costs.",
          cta: "Calculate ROI",
          ctaLink: "/pricing#roi-calculator",
          icon: <TrendingUp className="h-6 w-6 text-green-500" />,
          badge: "Free Tool"
        };
      
      case 'consultation-offer':
        return {
          title: "Ready to Transform Your Business?",
          subtitle: "Get expert guidance in 15 minutes",
          content: "You've been exploring for 3 minutes. Let our AI experts show you exactly how we can help your business.",
          cta: "WhatsApp Expert Now",
          ctaLink: "https://wa.me/447424819094?text=Hi! I've been exploring your site and would like to speak with an AI expert.",
          icon: <Users className="h-6 w-6 text-blue-500" />,
          badge: "Expert Available"
        };
      
      case 'roi-calculator':
        return {
          title: "Calculate Your AI ROI",
          subtitle: "See potential savings in 2 minutes",
          content: "You're clearly interested in our solutions. Use our ROI calculator to see exact savings for your business size.",
          cta: "Calculate Savings",
          ctaLink: "/pricing#roi-calculator",
          icon: <Zap className="h-6 w-6 text-yellow-500" />,
          badge: "Instant Results"
        };
      
      case 'returning-visitor':
        return {
          title: "Welcome Back!",
          subtitle: "Ready to get started?",
          content: "This is your 3rd visit. Start with our £1,500 pilot program and see results in 7-14 days.",
          cta: "Start Pilot Program",
          ctaLink: "https://wa.me/447424819094?text=Hi! I'm a returning visitor and ready to start with the £1,500 pilot program.",
          icon: <Gift className="h-6 w-6 text-purple-500" />,
          badge: "Returning Visitor"
        };
      
      default:
        return null;
    }
  };

  if (!activePopup) return null;

  const popup = getPopupContent(activePopup);
  if (!popup) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4">
      <Card className="bg-background border border-white/20 max-w-sm sm:max-w-md w-full animate-in slide-in-from-bottom-4 duration-300">
        <CardContent className="p-4 sm:p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-start gap-2 sm:gap-3 flex-1">
              <div className="flex-shrink-0">{popup.icon}</div>
              <div className="min-w-0 flex-1">
                <Badge className="bg-primary/20 text-primary border-primary/30 mb-2 text-xs">
                  {popup.badge}
                </Badge>
                <h3 className="font-bold text-foreground text-base sm:text-lg leading-tight">{popup.title}</h3>
                <p className="text-primary text-xs sm:text-sm">{popup.subtitle}</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={closePopup}
              className="text-foreground/50 hover:text-foreground p-1 flex-shrink-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <p className="text-foreground/80 mb-4 sm:mb-6 text-xs sm:text-sm leading-relaxed">
            {popup.content}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <a href={popup.ctaLink} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button className="w-full bg-primary hover:bg-primary/90 text-sm">
                {popup.cta === 'WhatsApp Expert Now' ? (
                  <>
                    <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                    <span className="truncate">{popup.cta}</span>
                  </>
                ) : (
                  <>
                    <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                    <span className="truncate">{popup.cta}</span>
                  </>
                )}
              </Button>
            </a>
            <Button variant="outline" onClick={closePopup} className="px-4 text-sm sm:w-auto">
              Later
            </Button>
          </div>
          
          <p className="text-xs text-foreground/50 mt-3 text-center leading-tight">
            ✨ Free consultation • 🚀 Quick response • 💰 No commitment
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default BehavioralTriggers;