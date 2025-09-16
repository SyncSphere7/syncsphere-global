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

// Service Pages
import Chatbots from "./pages/services/Chatbots";
import VoiceAgents from "./pages/services/VoiceAgents";
import Automations from "./pages/services/Automations";
import Ecommerce from "./pages/services/Ecommerce";
import Consulting from "./pages/services/Consulting";
import WebDevelopment from "./pages/services/WebDevelopment";
import AppDevelopment from "./pages/services/AppDevelopment";

// Case Study Pages
import AfriMart from "./pages/case-studies/AfriMart";
import SavannahBank from "./pages/case-studies/SavannahBank";
import HealthPlus from "./pages/case-studies/HealthPlus";

// Policy Pages
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

const queryClient = new QueryClient();

const App = () => (
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
              
              {/* Case Study Routes */}
              <Route path="/case-studies/afrimart" element={<AfriMart />} />
              <Route path="/case-studies/savannah-bank" element={<SavannahBank />} />
              <Route path="/case-studies/healthplus" element={<HealthPlus />} />
              
              {/* Policy Routes */}
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              
              {/* Chat Agent Route */}
              <Route path="/chat-agent" element={<OpenRouterChat />} />
              
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
);

export default App;
