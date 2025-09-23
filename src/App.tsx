import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./components/ThemeProvider";
import WhatsAppBubble from "./components/WhatsAppBubble";
import SEOProvider from "./components/SEOProvider";
import CookieConsent from "./components/CookieConsent";
import AskAIButton from "./components/AskAIButton";
import OpenRouterChat from "./components/OpenRouterChat";
import ErrorBoundary from "./components/ErrorBoundary";

// Service Pages
import Chatbots from "./pages/services/Chatbots";
import VoiceAgents from "./pages/services/VoiceAgents";
import Automations from "./pages/services/Automations";
import Ecommerce from "./pages/services/Ecommerce";
import Consulting from "./pages/services/Consulting";
import WebDevelopment from "./pages/services/WebDevelopment";
import AppDevelopment from "./pages/services/AppDevelopment";

// Regional Service Pages (ONLY EXISTING FILES)
import AutomationsUK from "./pages/services/AutomationsUK";
import AutomationsUS from "./pages/services/AutomationsUS";
import AutomationsEU from "./pages/services/AutomationsEU";
import ChatbotsUK from "./pages/services/ChatbotsUK";
import ChatbotsUS from "./pages/services/ChatbotsUS";
import ChatbotsEU from "./pages/services/ChatbotsEU";
import EcommerceUK from "./pages/services/EcommerceUK";
import EcommerceUS from "./pages/services/EcommerceUS";
import EcommerceEU from "./pages/services/EcommerceEU";
import VoiceAgentsUK from "./pages/services/VoiceAgentsUK";
import VoiceAgentsUS from "./pages/services/VoiceAgentsUS";
import VoiceAgentsEU from "./pages/services/VoiceAgentsEU";
import WebDevelopmentUK from "./pages/services/WebDevelopmentUK";

// Case Study Pages
import AfriMart from "./pages/case-studies/AfriMart";
import SavannahBank from "./pages/case-studies/SavannahBank";
import HealthPlus from "./pages/case-studies/HealthPlus";

// Policy Pages
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

// Pricing Page
import Pricing from "./pages/Pricing";

// Startup MVP Page
import StartupMVP from "./pages/StartupMVP";

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <ThemeProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <SEOProvider />
              <AskAIButton />
              <Routes>
                <Route path="/" element={<Index />} />
                
                {/* Service Routes */}
                <Route path="/services/chatbots" element={<Chatbots />} />
                <Route path="/services/voice-agents" element={<VoiceAgents />} />
                <Route path="/services/automations" element={<Automations />} />
                <Route path="/services/ecommerce" element={<Ecommerce />} />
                <Route path="/services/consulting" element={<Consulting />} />
                <Route path="/services/web-development" element={<WebDevelopment />} />
                <Route path="/services/app-development" element={<AppDevelopment />} />
                
                {/* Regional Service Routes - ONLY WORKING FILES */}
                <Route path="/automations/uk" element={<AutomationsUK />} />
                <Route path="/automations/us" element={<AutomationsUS />} />
                <Route path="/automations/eu" element={<AutomationsEU />} />
                <Route path="/chatbots/uk" element={<ChatbotsUK />} />
                <Route path="/chatbots/us" element={<ChatbotsUS />} />
                <Route path="/chatbots/eu" element={<ChatbotsEU />} />
                <Route path="/ecommerce/uk" element={<EcommerceUK />} />
                <Route path="/ecommerce/us" element={<EcommerceUS />} />
                <Route path="/ecommerce/eu" element={<EcommerceEU />} />
                <Route path="/voice-agents/uk" element={<VoiceAgentsUK />} />
                <Route path="/voice-agents/us" element={<VoiceAgentsUS />} />
                <Route path="/voice-agents/eu" element={<VoiceAgentsEU />} />
                <Route path="/web-development/uk" element={<WebDevelopmentUK />} />
                
                {/* Case Study Routes */}
                <Route path="/case-studies/afrimart" element={<AfriMart />} />
                <Route path="/case-studies/savannah-bank" element={<SavannahBank />} />
                <Route path="/case-studies/healthplus" element={<HealthPlus />} />
                
                {/* Pricing Routes */}
                <Route path="/pricing" element={<Pricing />} />
                
                {/* Startup MVP Routes */}
                <Route path="/startup-mvp" element={<StartupMVP />} />
                
                {/* Policy Routes */}
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                
                {/* Chat Agent Route */}
                <Route path="/chat-agent" element={<ErrorBoundary><OpenRouterChat /></ErrorBoundary>} />
                
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
              <WhatsAppBubble />
              <CookieConsent />
            </BrowserRouter>
          </TooltipProvider>
        </ThemeProvider>
      </HelmetProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
