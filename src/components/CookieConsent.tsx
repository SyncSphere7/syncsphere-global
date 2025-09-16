import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Cookie, Settings, X, CheckCircle, Info } from 'lucide-react';
import { useLocalStorage } from '@/hooks/useLocalStorage';

interface CookiePreferences {
  essential: boolean; // Always true, required for site functionality
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
  timestamp: Date;
}

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useLocalStorage<CookiePreferences>('cookie_preferences', {
    essential: true,
    analytics: false,
    marketing: false,
    functional: false,
    timestamp: new Date()
  });

  // Check if we should show the banner
  useEffect(() => {
    const hasConsented = localStorage.getItem('cookie_consent_given');
    if (!hasConsented) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setShowBanner(true), 2000);
      return () => clearTimeout(timer);
    }

    // Listen for cookie settings button clicks
    const handleOpenCookieSettings = () => {
      setShowSettings(true);
    };

    window.addEventListener('openCookieSettings', handleOpenCookieSettings);

    return () => {
      window.removeEventListener('openCookieSettings', handleOpenCookieSettings);
    };
  }, []);

  // Apply cookie preferences
  useEffect(() => {
    if (preferences.analytics) {
      // Enable Google Analytics
      enableAnalytics();
    } else {
      // Disable Google Analytics
      disableAnalytics();
    }

    if (preferences.marketing) {
      // Enable marketing cookies (social media pixels, etc.)
      enableMarketing();
    } else {
      // Disable marketing cookies
      disableMarketing();
    }

    if (preferences.functional) {
      // Enable functional cookies (chat preferences, theme settings, etc.)
      enableFunctional();
    } else {
      // Disable functional cookies
      disableFunctional();
    }
  }, [preferences]);

  const enableAnalytics = () => {
    // Enable Google Analytics 4
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted'
      });
    }
  };

  const disableAnalytics = () => {
    // Disable Google Analytics 4
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied'
      });
    }
  };

  const enableMarketing = () => {
    // Enable marketing cookies
    if (window.gtag) {
      window.gtag('consent', 'update', {
        ad_storage: 'granted'
      });
    }
  };

  const disableMarketing = () => {
    // Disable marketing cookies
    if (window.gtag) {
      window.gtag('consent', 'update', {
        ad_storage: 'denied'
      });
    }
  };

  const enableFunctional = () => {
    // Enable functional cookies (chat history, theme preferences, etc.)
    // These are already enabled by default for essential functionality
  };

  const disableFunctional = () => {
    // Clear functional cookies
    localStorage.removeItem('syncsphere_chat_sessions');
    localStorage.removeItem('theme');
    // Note: Some functional preferences might be lost
  };

  const acceptAllCookies = () => {
    setPreferences({
      essential: true,
      analytics: true,
      marketing: true,
      functional: true,
      timestamp: new Date()
    });
    localStorage.setItem('cookie_consent_given', 'true');
    setShowBanner(false);
  };

  const acceptEssentialOnly = () => {
    setPreferences({
      essential: true,
      analytics: false,
      marketing: false,
      functional: false,
      timestamp: new Date()
    });
    localStorage.setItem('cookie_consent_given', 'true');
    setShowBanner(false);
  };

  const saveSettings = () => {
    setPreferences({
      ...preferences,
      timestamp: new Date()
    });
    localStorage.setItem('cookie_consent_given', 'true');
    setShowSettings(false);
    setShowBanner(false);
  };

  if (!showBanner && !showSettings) return null;

  return (
    <>
      {/* Cookie Consent Banner */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-sm border-t border-white/10">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-6 h-6 text-primary" />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    🍪 Cookie Preferences
                  </h3>
                  <p className="text-foreground/70 text-sm mb-4">
                    We use cookies to enhance your experience, analyze site traffic, and personalize content.
                    You can choose which cookies to accept or reject.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="text-xs">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Essential
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Analytics
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Marketing
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Functional
                    </Badge>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button onClick={acceptAllCookies} className="bg-primary hover:bg-primary/90">
                      Accept All Cookies
                    </Button>
                    <Button variant="outline" onClick={acceptEssentialOnly}>
                      Essential Only
                    </Button>
                    <Dialog open={showSettings} onOpenChange={setShowSettings}>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <Settings className="w-4 h-4 mr-2" />
                          Customize
                        </Button>
                      </DialogTrigger>
                    </Dialog>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowBanner(false)}
                      className="text-foreground/50 hover:text-foreground"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Cookie Settings Dialog */}
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Cookie Settings
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            {/* Essential Cookies */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-foreground">Essential Cookies</h4>
                  <p className="text-sm text-foreground/70">
                    Required for the website to function properly. These cannot be disabled.
                  </p>
                </div>
                <Badge variant="secondary">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Always Active
                </Badge>
              </div>
              <div className="text-xs text-foreground/50 bg-foreground/5 p-3 rounded">
                Includes: Session management, security features, basic functionality
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-foreground">Analytics Cookies</h4>
                  <p className="text-sm text-foreground/70">
                    Help us understand how visitors interact with our website.
                  </p>
                </div>
                <Switch
                  checked={preferences.analytics}
                  onCheckedChange={(checked) =>
                    setPreferences({ ...preferences, analytics: checked })
                  }
                />
              </div>
              <div className="text-xs text-foreground/50 bg-foreground/5 p-3 rounded">
                Includes: Google Analytics, usage statistics, performance monitoring
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-foreground">Marketing Cookies</h4>
                  <p className="text-sm text-foreground/70">
                    Used to deliver personalized advertisements and track campaign effectiveness.
                  </p>
                </div>
                <Switch
                  checked={preferences.marketing}
                  onCheckedChange={(checked) =>
                    setPreferences({ ...preferences, marketing: checked })
                  }
                />
              </div>
              <div className="text-xs text-foreground/50 bg-foreground/5 p-3 rounded">
                Includes: Social media pixels, advertising networks, retargeting
              </div>
            </div>

            {/* Functional Cookies */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-foreground">Functional Cookies</h4>
                  <p className="text-sm text-foreground/70">
                    Enable enhanced features and personalization.
                  </p>
                </div>
                <Switch
                  checked={preferences.functional}
                  onCheckedChange={(checked) =>
                    setPreferences({ ...preferences, functional: checked })
                  }
                />
              </div>
              <div className="text-xs text-foreground/50 bg-foreground/5 p-3 rounded">
                Includes: Chat history, theme preferences, language settings
              </div>
            </div>

            {/* Privacy Information */}
            <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-medium text-blue-900 dark:text-blue-100 mb-1">
                    Your Privacy Matters
                  </h5>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    You can change these settings at any time by clicking the cookie icon in the footer.
                    For more information, please read our{' '}
                    <a href="/privacy-policy" className="underline hover:no-underline">
                      Privacy Policy
                    </a>.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
              <Button onClick={saveSettings} className="bg-primary hover:bg-primary/90">
                Save Preferences
              </Button>
              <Button variant="outline" onClick={acceptAllCookies}>
                Accept All
              </Button>
              <Button variant="ghost" onClick={() => setShowSettings(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CookieConsent;
