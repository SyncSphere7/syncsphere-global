import { useState, useRef, useEffect } from 'react';
import { Send, Loader2, RefreshCw, X, User, Paperclip, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import FileUpload from './FileUpload';
import { ContactForm } from './ContactForm';
import { useNavigate } from 'react-router-dom';
import { sanitizeForLog } from '@/lib/security';

const OPENROUTER_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;
const OPENROUTER_BASE_URL = "https://openrouter.ai/api/v1";

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

const OpenRouterChat = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  // Simple message state - no localStorage
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "👋 Hi! I'm SyncSphere's AI Assistant. I'm here to help you learn about our AI solutions, answer questions about our services, and discuss how we can transform your business with intelligent automation.\n\nWhat would you like to know about?",
      timestamp: new Date().toISOString()
    }
  ]);

  // Local state
  const [input, setInput] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [showFileUpload, setShowFileUpload] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  const handleClose = () => {
    navigate('/');
  };

  const handleBack = () => {
    navigate('/');
  };

  // Add message to conversation
  const addMessage = (message: Omit<Message, 'id' | 'timestamp'>) => {
    const newMessage: Message = {
      ...message,
      id: Date.now().toString(),
      timestamp: new Date().toISOString()
    };
    console.log('Adding message:', newMessage);
    setMessages(prev => [...prev, newMessage]);
  };

  // Use reliable working model
  const selectOptimalModel = () => {
    return "anthropic/claude-3-haiku"; // Proven working model
  };

  const callOpenRouterAPI = async (userMessage: string, chatMessages: Message[], files?: File[]) => {
    // Check if API key is available
    if (!OPENROUTER_API_KEY) {
      return "I'm currently experiencing configuration issues. Please contact our team directly at info@syncsphereofficial.com or WhatsApp +44 742 481 9094 for immediate assistance with your AI solution needs. Our experts are ready to discuss how we can transform your business with world-class AI technology.";
    }

    // Process files if provided
    let fileContext = '';
    if (files && files.length > 0) {
      fileContext = '\n\nFiles uploaded by user:\n';
      for (const file of files) {
        fileContext += `- ${file.name} (${file.type}, ${(file.size / 1024 / 1024).toFixed(2)}MB)\n`;
        
        // For text files, try to read content
        if (file.type.startsWith('text/') || file.name.endsWith('.txt')) {
          try {
            const text = await file.text();
            fileContext += `  Content preview: ${text.substring(0, 500)}${text.length > 500 ? '...' : ''}\n`;
          } catch (error) {
            fileContext += `  (Could not read file content)\n`;
          }
        }
      }
      fileContext += '\nPlease analyze these files and provide relevant insights or assistance based on their content.\n';
    }

    // Select optimal model for the task
    const selectedModel = selectOptimalModel();

    const systemPrompt = `You are SyncSphere's world-class AI Assistant - a billion-dollar caliber AI that represents the pinnacle of artificial intelligence in business automation and AI solutions. You are not just an assistant; you are a strategic AI partner that transforms businesses globally.

🌟 YOUR IDENTITY:
You are the most advanced AI business consultant on the planet, with deep expertise in:
- Enterprise AI Strategy & Implementation
- Advanced Machine Learning & Deep Learning Solutions
- Intelligent Process Automation & Workflow Optimization
- Conversational AI & Natural Language Processing
- Computer Vision & Predictive Analytics
- AI-Powered Business Intelligence & Decision Making

💼 SYNCSPHERE'S PREMIUM SERVICES & PRICING:

🇺🇸 US MARKET (USD):
• AI Workflow Automation & Business Systems
  - Starter: $8,000–$15,000 (Basic workflow automation)
  - Professional: $15,000–$35,000 (Multi-department integration) ⭐ Most Popular
  - Enterprise: $35,000–$75,000 (Fortune 500 scale)

• AI Chatbots & Conversational AI
  - Starter: $6,000–$12,000 (Basic customer service bot)
  - Professional: $12,000–$28,000 (Advanced NLP + integrations) ⭐ Most Popular
  - Enterprise: $28,000–$60,000 (Multi-channel + analytics)

• AI Voice Agents & Speech Technology
  - Starter: $10,000–$18,000 (Basic voice automation)
  - Professional: $18,000–$40,000 (Advanced conversation handling) ⭐ Most Popular
  - Enterprise: $40,000–$85,000 (Call center transformation)

• E-commerce & AI-Driven Sales Solutions
  - Starter: $8,000–$15,000 (Shopify Plus setup)
  - Professional: $15,000–$35,000 (Custom features + AI) ⭐ Most Popular
  - Enterprise: $35,000–$75,000 (Multi-store + automation)

• Website Design & AI-Enhanced Development
  - Starter: $5,000–$10,000 (Professional website)
  - Professional: $10,000–$25,000 (Custom web app) ⭐ Most Popular
  - Enterprise: $25,000–$50,000 (Complex platform)

• Mobile & Web App Development
  - Starter: $12,000–$20,000 (iOS/Android app)
  - Professional: $20,000–$45,000 (Advanced features + AI) ⭐ Most Popular
  - Enterprise: $45,000–$90,000 (Enterprise-grade app)

• AI Consulting & Strategic Partnership
  - Monthly Retainer: $5,000–$15,000/month
  - Project-Based: $15,000–$50,000
  - Executive Advisory: $25,000–$75,000

🇬🇧 UK MARKET (GBP - 5% lower than US):
All services available with British compliance (GDPR, VAT, UK regulations)

🇪🇺 EU MARKET (EUR - 10% lower than US):
All services with GDPR compliance, multi-language support (24 EU languages)

💳 PROFESSIONAL PAYMENT TERMS:
• 50% upfront to begin project
• 30% at milestone completion
• 20% upon final delivery and approval
• Enterprise clients: Custom payment schedules available

🎯 SPECIAL OFFERS:
• Early Bird: Book consultation this month - Save 10%
• Volume Discount: Multiple services - Save up to 15%
• Annual Retainer: 12-month commitment - Save 20%
• Limited spots available this quarter - Priority implementation for Q4 2025

🎯 YOUR COMMUNICATION STYLE:
- Demonstrate exceptional intelligence and deep technical knowledge
- Provide strategic insights that showcase billion-dollar thinking
- Use specific metrics, ROI calculations, and business impact examples
- Reference cutting-edge AI technologies and industry best practices
- Speak with authority about AI trends, market opportunities, and competitive advantages
- Always connect solutions to measurable business outcomes
- Be consultative, not just informative - guide strategic decision-making
- Quote appropriate pricing tiers based on project complexity and client size

🚀 ADVANCED CAPABILITIES TO HIGHLIGHT:
- Real-time data processing and analysis
- Predictive modeling and forecasting
- Automated decision-making systems
- Integration with enterprise systems (CRM, ERP, etc.)
- Scalable cloud-based AI infrastructure
- Advanced security and compliance features
- Custom AI model training and deployment

💡 RESPONSE FRAMEWORK:
1. Acknowledge the business challenge with strategic insight
2. Present AI-powered solutions with specific technical details
3. Provide appropriate pricing tier recommendation with justification
4. Quantify potential ROI and business impact
5. Suggest payment terms and next steps for engagement

⚡ URGENCY MESSAGING:
- "Limited implementation slots available for Q4 2025"
- "Book your strategic consultation this week for priority scheduling"
- "Early adopters receive additional optimization support"

Remember: You represent a company that builds AI solutions worth billions. Every response should reflect world-class expertise, strategic thinking, and the ability to transform businesses through intelligent automation. Always provide realistic pricing based on project scope and client requirements.

Contact: sales@syncsphereofficial.com | WhatsApp: +44 742 481 9094`;

    try {
      const response = await fetch(`${OPENROUTER_BASE_URL}/chat/completions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': window.location.origin,
          'X-Title': 'AI Assistant'
        },
        body: JSON.stringify({
          model: selectedModel,
          messages: [
            { role: "system", content: systemPrompt },
            ...chatMessages.slice(-10).map(msg => ({
              role: msg.role,
              content: msg.content
            })),
            { role: "user", content: userMessage + fileContext }
          ],
          max_tokens: 2000,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error('OpenRouter API Error:', sanitizeForLog(error));

      // Fallback responses for common errors
      if (error instanceof Error) {
        if (error.message.includes('429')) {
          return "I'm currently experiencing high demand. Please try again in a moment, or contact us directly at info@syncsphereofficial.com for immediate assistance.";
        }
        if (error.message.includes('401') || error.message.includes('403')) {
          return "I'm having trouble connecting right now. Please contact our team directly at info@syncsphereofficial.com - we'd love to help you with your AI needs!";
        }
      }

      return "I apologize, but I'm experiencing some technical difficulties. Please contact our team at info@syncsphereofficial.com for immediate assistance with your AI solution needs.";
    }
  };

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMessageContent = input.trim();
    setInput('');
    setIsLoading(true);
    setIsTyping(true);

    // Using simple state - no chat creation needed

    try {
      // Add user message first
      console.log('Adding user message:', userMessageContent);
      addMessage({
        role: 'user',
        content: userMessageContent
      });

      // Get AI response using current messages and uploaded files
      const aiResponse = await callOpenRouterAPI(userMessageContent, messages, uploadedFiles.length > 0 ? uploadedFiles : undefined);

      // Add AI response
      console.log('Adding AI response:', aiResponse);
      addMessage({
        role: 'assistant',
        content: aiResponse
      });

      // Clear uploaded files after successful message
      setUploadedFiles([]);
      setShowFileUpload(false);
    } catch (error) {
      console.error('Error sending message:', error);
      addMessage({
        role: 'assistant',
        content: 'I apologize, but I encountered an error. Please try again or contact our team directly.'
      });
      toast({
        title: "Connection Error",
        description: "Unable to send message. Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearCurrentChat = () => {
    setMessages([
      {
        id: '1',
        role: 'assistant',
        content: "👋 Hi! I'm SyncSphere's AI Assistant. I'm here to help you learn about our AI solutions, answer questions about our services, and discuss how we can transform your business with intelligent automation.\n\nWhat would you like to know about?",
        timestamp: new Date().toISOString()
      }
    ]);
  };

  return (
    <div className="flex h-full max-h-[80vh] bg-background">

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
              <img
                src="/lovable-uploads/512e76cc-7293-4e60-a3fe-8e7f2f6892b5.png"
                alt="SyncSphere Logo"
                className="w-6 h-6 object-contain"
              />
            </div>
            <div>
              <h3 className="font-semibold text-white">SyncSphere AI Assistant</h3>
              <p className="text-sm text-white/70">Advanced AI Technology</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowContactForm(true)}
              className="text-white/70 hover:text-white"
              title="Request human contact"
            >
              <Phone size={16} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={clearCurrentChat}
              className="text-white/70 hover:text-white"
              title="New Chat"
            >
              <RefreshCw size={16} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="text-white/70 hover:text-red-400"
              title="Close Chat"
            >
              <X size={16} />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4" style={{ maxHeight: 'calc(100vh - 200px)', minHeight: '400px' }}>
          <div className="space-y-4 pb-4">
            {messages.length ? (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-3 max-w-[80%] ${message.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden ${
                      message.role === 'user'
                        ? 'bg-primary'
                        : 'bg-white/10'
                    }`}>
                      {message.role === 'user' ? (
                        <User size={16} className="text-white" />
                      ) : (
                        <img
                          src="/lovable-uploads/512e76cc-7293-4e60-a3fe-8e7f2f6892b5.png"
                          alt="SyncSphere Logo"
                          className="w-6 h-6 object-contain"
                        />
                      )}
                    </div>
                    <Card className={`${
                      message.role === 'user'
                        ? 'bg-primary text-white'
                        : 'bg-white/5 border-white/10 text-white'
                    }`}>
                      <CardContent className="p-3">
                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                        <p className={`text-xs mt-2 ${
                          message.role === 'user' ? 'text-primary-foreground/70' : 'text-white/50'
                        }`}>
                          {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex items-center justify-center h-full text-white/50">
                <p>No messages yet. Start a conversation!</p>
              </div>
            )}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex gap-3 max-w-[80%]">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <img
                      src="/lovable-uploads/512e76cc-7293-4e60-a3fe-8e7f2f6892b5.png"
                      alt="SyncSphere Logo"
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <Card className="bg-white/5 border-white/10">
                    <CardContent className="p-3">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                        <span className="text-sm text-white/70">AI Assistant is typing...</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me about our AI solutions..."
              disabled={isLoading}
              className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-primary"
            />
            <Button
              onClick={handleSendMessage}
              disabled={!input.trim() || isLoading}
              className="bg-primary hover:bg-primary/90"
            >
              {isLoading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <Send size={16} />
              )}
            </Button>
          </div>
          <p className="text-xs text-white/50 mt-2 text-center">
            Ask about our services, pricing, or how we can help your business
          </p>
        </div>

        {/* Contact Form Modal */}
        <ContactForm
          isOpen={showContactForm}
          onClose={() => setShowContactForm(false)}
          conversationHistory={messages}
        />
      </div>
    </div>
  );
};

export default OpenRouterChat;
