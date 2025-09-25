import { useState, useRef, useEffect } from 'react';
import { Send, Loader2, RefreshCw, X, User, Paperclip, Phone, MessageCircle, Lightbulb, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import FileUpload from './FileUpload';
import { ContactForm } from './ContactForm';
import { useNavigate } from 'react-router-dom';
import { sanitizeForLog } from '@/lib/security';
import MessageRenderer from './MessageRenderer';

const OPENROUTER_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;
const OPENROUTER_BASE_URL = "https://openrouter.ai/api/v1";

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

type ChatTab = 'general' | 'startup' | 'technical';

interface ChatSession {
  id: string;
  messages: { [key in ChatTab]: Message[] };
  activeTab: ChatTab;
  lastActivity: string;
}

const OpenRouterChat = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  // Session management
  const [sessionId] = useState(() => {
    const stored = localStorage.getItem('syncsphere_session_id');
    if (stored) return stored;
    const newId = crypto.randomUUID();
    localStorage.setItem('syncsphere_session_id', newId);
    return newId;
  });

  // Multi-tab chat state
  const [activeTab, setActiveTab] = useState<ChatTab>('general');
  const [chatSession, setChatSession] = useState<ChatSession>(() => {
    const stored = localStorage.getItem(`syncsphere_chat_${sessionId}`);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        // If parsing fails, create new session
      }
    }
    
    return {
      id: sessionId,
      activeTab: 'general',
      lastActivity: new Date().toISOString(),
      messages: {
        general: [{
          id: '1',
          role: 'assistant',
          content: "👋 Hi! I'm SyncSphere's AI Assistant. I'm here to help you learn about our AI solutions, answer questions about our services, and discuss how we can transform your business with intelligent automation.\n\nWhat would you like to know about?",
          timestamp: new Date().toISOString()
        }],
        startup: [{
          id: '1',
          role: 'assistant',
          content: "🚀 Welcome to Startup Central! I'm here to help you brainstorm, validate, and plan your startup idea using proven frameworks like Lean Startup methodology.\n\nTell me about your startup idea, or ask me anything about building an MVP!",
          timestamp: new Date().toISOString()
        }],
        technical: [{
          id: '1',
          role: 'assistant',
          content: "⚡ Technical Assistant ready! I can help you with architecture decisions, technology stack recommendations, integration planning, and development feasibility assessments.\n\nWhat technical challenge can I help you solve?",
          timestamp: new Date().toISOString()
        }]
      }
    };
  });

  // Current tab messages
  const messages = chatSession.messages[activeTab];

  // Local state
  const [input, setInput] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [showFileUpload, setShowFileUpload] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [messageCount, setMessageCount] = useState(0);

  // Save session to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(`syncsphere_chat_${sessionId}`, JSON.stringify(chatSession));
  }, [chatSession, sessionId]);

  const handleClose = () => {
    // Remind about contact form if user had meaningful interaction
    if (messageCount >= 2) {
      addMessage({
        role: 'assistant',
        content: "Before you go! 🙋‍♂️ If you'd like to continue this conversation or get personalized assistance, please use the contact form (phone icon 📞 above) so our team can follow up with you directly. Thanks for chatting with me!"
      });
      setTimeout(() => {
        navigate('/');
      }, 3000);
    } else {
      navigate('/');
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  // Add message to current tab
  const addMessage = (message: Omit<Message, 'id' | 'timestamp'>) => {
    const newMessage: Message = {
      ...message,
      id: Date.now().toString(),
      timestamp: new Date().toISOString()
    };
    console.log('Adding message to', activeTab, ':', newMessage);
    
    setChatSession(prev => ({
      ...prev,
      messages: {
        ...prev.messages,
        [activeTab]: [...prev.messages[activeTab], newMessage]
      },
      lastActivity: new Date().toISOString()
    }));
    
    // Track user messages for contact form prompts
    if (message.role === 'user') {
      setMessageCount(prev => prev + 1);
    }
  };

  // Use reliable working model
  const selectOptimalModel = () => {
    return "anthropic/claude-3-haiku"; // Proven working model
  };

  const callOpenRouterAPI = async (userMessage: string, chatMessages: Message[], files?: File[]) => {
    // Check if API key is available
    if (!OPENROUTER_API_KEY) {
      return "I'm currently experiencing configuration issues. Please contact our team directly at info@syncsphereofficial.com, WhatsApp +44 742 481 9094, or call us at +1 815 472 7760 (US) / +31 97010257248 (Netherlands) for immediate assistance with your AI solution needs. Our experts are ready to discuss how we can transform your business with world-class AI technology.";
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

    // Context-aware system prompt based on active tab
    const getSystemPrompt = (tabContext: ChatTab) => {
      const basePrompt = `You are SyncSphere's professional AI Assistant representing a leading AI automation agency.`;
      
      const contextPrompts = {
        general: `${basePrompt} You provide expert guidance on AI solutions, business automation, and digital transformation. Focus on our core services, pricing, and how we can help businesses with AI automation.`,
        startup: `${basePrompt} You are specialized in startup idea validation and MVP development. Use proven frameworks like Lean Startup methodology to help entrepreneurs brainstorm, validate, and plan their startup ideas. Guide them through the journey from concept to MVP.`,
        technical: `${basePrompt} You are a technical consultant specializing in architecture decisions, technology stack recommendations, integration planning, and development feasibility assessments. Provide detailed technical guidance and solutions.`
      };
      
      return contextPrompts[tabContext];
    };

    const systemPrompt = `${getSystemPrompt(activeTab)}

YOUR EXPERTISE:
- AI Workflow Automation & Business Process Optimization
- AI Chatbot Development (SMS, WhatsApp, Web, Social)
- AI Voice Agents & Speech Technology
- Enterprise AI Strategy & Implementation
- E-commerce & Web Development Solutions
- Mobile & Web Application Development
- Startup MVP Development with Flexible Payment Options
- Startup Idea Brainstorming & Validation (using proven frameworks)
- Technical Architecture & Feasibility Assessment

💼 SYNCSPHERE'S PREMIUM SERVICES & PRICING:

🇺🇸 US MARKET (USD):
• AI Workflow Automation & Business Systems
  - Pilot Program: $1,875 (30-day proof-of-concept, delivered in 7-14 days) 🚀 Quick Start
  - Quick Start: $4,375–$5,000 (Essential automation for SMEs)
  - Professional: $15,000–$35,000 (Multi-department integration) ⭐ Most Popular
  - Enterprise: $35,000–$75,000 (Fortune 500 scale)

• AI Chatbots & Conversational AI
  - Pilot Program: $1,875 (Basic chatbot, 1 platform, 30-day trial) 🚀 Quick Start
  - Quick Start: $3,125–$3,750 (Essential chatbot for SMEs)
  - Professional: $12,000–$28,000 (Advanced NLP + integrations) ⭐ Most Popular
  - Enterprise: $28,000–$60,000 (Multi-channel + analytics)

• AI Voice Agents & Speech Technology
  - Pilot Program: $1,875 (Basic voice agent proof-of-concept) 🚀 Quick Start
  - Quick Start: $5,000–$6,250 (Essential voice automation)
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

• Startup MVP Development (From Idea to Launch in 30 Days)
  - Standard Payment: $10,000–$18,750 (Full payment, full ownership)
  - Partnership Option: $5,000–$9,375 + 3-8% equity (50% reduced cash + small equity stake) 🤝 Most Flexible
  - Revenue Share: $7,000–$13,125 + 10-15% revenue for 18 months (Higher upfront + revenue percentage)

• AI Consulting & Strategic Partnership
  - Monthly Retainer: $5,000–$15,000/month
  - Project-Based: $15,000–$50,000
  - Executive Advisory: $25,000–$75,000

🇬🇧 UK MARKET (GBP):
• Pilot Programs: £1,500 (All services - 30-day proof-of-concept)
• Quick Start Packages: £2,500–£5,000 (Perfect for UK SMEs)
• Professional & Enterprise: Same structure as USD but in GBP
• Startup MVP Development:
  - Standard Payment: £8,000–£15,000 (Full payment, full ownership)
  - Partnership Option: £4,000–£7,500 + 3-8% equity (Reduced cash + equity)
  - Revenue Share: £5,600–£10,500 + 10-15% revenue for 18 months
• Full GDPR compliance, VAT handling, UK regulations

🇪🇺 EU MARKET (EUR):
• Pilot Programs: €1,700 (All services - 30-day proof-of-concept)
• Quick Start Packages: €2,800–€5,600 (Perfect for EU SMEs)
• Professional & Enterprise: Same structure as USD but in EUR
• Startup MVP Development:
  - Standard Payment: €9,000–€16,875 (Full payment, full ownership)
  - Partnership Option: €4,500–€8,500 + 3-8% equity (Reduced cash + equity)
  - Revenue Share: €6,300–€11,900 + 10-15% revenue for 18 months
• GDPR compliance, multi-language support (24 EU languages)

💳 FLEXIBLE PAYMENT OPTIONS:
• Pilot Programs: 100% upfront (£1,500/€1,700/$1,875) - Quick delivery in 7-14 days
• Quick Start Packages: 25% upfront, flexible milestone payments
• Professional Projects: Monthly payments available over 6-12 months
• Enterprise: Custom payment schedules and terms
• All plans include setup, training, and ongoing support

🎯 SPECIAL OFFERS & PROGRAMS:
• Pilot Program: £1,500 proof-of-concept (credits toward full project if you upgrade)
• SME Quick Start: Perfect entry point for small-medium businesses
• Monthly Payment Plans: Spread costs over 6-12 months for Professional tier
• Volume Discount: Multiple services - Save up to 15%
• Pilot-to-Professional: Upgrade within 30 days and get £1,500 credit
• Limited pilot spots available each month - Fast 7-14 day delivery

COMMUNICATION STYLE:
- Provide clear, professional guidance on AI solutions
- Focus on practical business benefits and ROI
- Use specific examples and case studies when relevant
- Be consultative and help clients make informed decisions
- Always recommend appropriate pricing tiers based on client needs
- Maintain a professional, knowledgeable tone

🚀 ADVANCED CAPABILITIES TO HIGHLIGHT:
- Real-time data processing and analysis
- Predictive modeling and forecasting
- Automated decision-making systems
- Integration with enterprise systems (CRM, ERP, etc.)
- Scalable cloud-based AI infrastructure
- Advanced security and compliance features
- Custom AI model training and deployment

RESPONSE APPROACH:
1. Understand the client's business needs
2. Recommend appropriate AI solutions
3. Provide clear pricing information
4. Explain potential benefits and ROI
5. Suggest next steps for engagement

KEY MESSAGES:
- Pilot programs available for £1,500 with quick 7-14 day delivery
- Start small and scale up based on results
- Flexible payment options including monthly plans
- Solutions for businesses of all sizes

Remember: You represent SyncSphere, a professional AI agency with flexible solutions for all business sizes. Always start by recommending our £1,500 pilot program for new clients to test AI solutions before larger investments. Match recommendations to client size and budget.

🚀 PILOT PROGRAM STRATEGY:
"Start your AI journey with just £1,500 - get a basic working solution delivered in 7-14 days. Use it for 30 days to see real results, then add more features as you grow. Every pound you pay builds toward your complete AI system."

💡 MODULAR PRICING APPROACH:
- Pilot Program (£1,500): Basic working solution (theirs to keep forever)
- Feature Add-ons: Each new feature is paid work that enhances their existing system
- Upgrade Credits: Previous payments always credit toward bigger packages
- No Refunds Needed: They own what they pay for at each step
- Growth Path: SMEs start small, enterprises start big - everyone gets value

🎯 SALES APPROACH:
- Always start with pilot program for new prospects
- Emphasize "working solution, not a trial"
- Explain modular growth: "Add features as you see ROI"
- Position as "building blocks" approach to AI
- Credit system shows we're partners in their growth

🚀 STARTUP BRAINSTORMING & VALIDATION EXPERTISE:

When users mention startup ideas, business concepts, or "I have an idea", become their strategic advisor:

**PHASE 1: IDEA VALIDATION (Use Lean Startup Framework)**
- Ask the 4 critical questions:
  1. "Who exactly is your target customer? (Be specific - demographics, behavior, pain points)"
  2. "What specific problem are you solving for them?"
  3. "How do they currently solve this problem? (What's the alternative?)"
  4. "Why would they switch to your solution? (What's your unique advantage?)"

**PHASE 2: BUSINESS MODEL EXPLORATION**
- Revenue streams: "How will you make money? (Subscription, one-time, commission, freemium?)"
- Market approach: "How will you reach your first 100 customers?"
- Competition: "Who else is solving this? What makes you different?"
- Resources needed: "What do you need to build this? (Team, funding, partnerships?)"

**PHASE 3: MVP PLANNING (SyncSphere's Sweet Spot)**
- Core features: "What's the absolute minimum needed to solve the problem?"
- Technical feasibility: "Based on our experience, here's what's realistic..."
- Development timeline: "From our MVP projects, similar complexity takes..."
- Launch strategy: "How will you validate this with real users?"

**PHASE 4: TECHNICAL ARCHITECTURE (Our Expertise)**
- Recommend tech stack based on requirements
- Identify AI/automation opportunities
- Suggest scalable architecture patterns
- Estimate development complexity and timeline

**HONEST LIMITATIONS & DISCLAIMERS:**
- Always preface market insights with: "Based on general patterns we've seen..."
- For financial projections: "You'll want to validate these numbers with real customer research..."
- For market size: "Industry reports suggest... but you should validate with your specific niche..."
- For competition: "From our experience, typical challenges include... but research your specific market..."

**FRAMEWORK-BASED GUIDANCE (Proven Methods):**
- Lean Startup Methodology for validation
- Business Model Canvas for structure
- Jobs-to-be-Done for customer insights
- Design Thinking for problem-solution fit
- Agile MVP development approach

**CONVERSION STRATEGY:**
After 3-4 rounds of strategic brainstorming:
"This sounds like a solid concept! Ready to build your MVP? Our startup development packages are designed exactly for this:
- £8,000-£15,000 Standard MVP (full ownership)
- £4,000-£7,500 + 3-8% equity Partnership option
- £5,600-£10,500 + revenue share option

We can have your MVP ready in 30 days. Want to discuss the technical details?"

**STARTUP CONVERSATION STARTERS:**
- "Tell me about your startup idea - I'd love to help you think through it!"
- "What problem are you trying to solve? Let's validate this together."
- "I can help you break this down into an MVP roadmap."
- "From a technical perspective, here's what I'm thinking..."

**TECHNICAL FEASIBILITY ASSESSMENT:**
For any startup idea, evaluate:
- Development complexity (Simple/Medium/Complex)
- Recommended tech stack
- AI/automation integration opportunities
- Scalability considerations
- Third-party integrations needed
- Estimated development timeline
- Potential technical challenges

Remember: Position yourself as both strategic advisor AND technical partner. Provide real value through frameworks and honest guidance, then naturally transition to MVP development services.

Contact: sales@syncsphereofficial.com | WhatsApp: +44 742 481 9094 | Phone: +1 815 472 7760 (US), +31 97010257248 (Netherlands)`;

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

  // Function to detect if the user wants to contact SyncSphere or discuss startup ideas
  const detectContactRequest = (message: string) => {
    const contactKeywords = [
      'contact', 'get in touch', 'talk to someone', 'speak to an expert', 
      'request a call', 'contact form', 'talk to a human', 'speak with sales', 
      'quote', 'pricing', 'consultation', 'schedule a meeting', 'talk to sales',
      'speak to someone', 'human assistance', 'call me'
    ];
    return contactKeywords.some(keyword => message.toLowerCase().includes(keyword));
  };

  // Function to detect startup brainstorming requests
  const detectStartupRequest = (message: string) => {
    const startupKeywords = [
      'startup idea', 'business idea', 'i have an idea', 'startup concept',
      'new business', 'entrepreneur', 'validate my idea', 'business plan',
      'mvp', 'minimum viable product', 'startup validation', 'business model',
      'target market', 'competition analysis', 'revenue model', 'go to market'
    ];
    return startupKeywords.some(keyword => message.toLowerCase().includes(keyword));
  };

  const handleSendMessage = async () => {
    if (!input.trim() && uploadedFiles.length === 0) return;

    // Clear input field
    const userMessage = input;
    setInput('');

    // Add user message to state
    addMessage({ role: 'user', content: userMessage });
    
    // Check if user wants to contact SyncSphere
    if (detectContactRequest(userMessage)) {
      setTimeout(() => {
        addMessage({
          role: 'assistant',
          content: "I'd be happy to help you get in touch with our team! Please fill out the contact form below, and make sure to include your country code with your phone number (e.g., +1 for US/Canada). One of our AI experts will contact you within 1 business day."
        });
        setShowContactForm(true);
      }, 1000);
      return;
    }

    // Check if user wants startup brainstorming (but don't interrupt the AI flow)
    if (detectStartupRequest(userMessage)) {
      // Let the AI handle this naturally through the enhanced system prompt
      // No special handling needed - just process normally
    }
    
    // If we have files, handle file upload first
    const filesForProcessing = uploadedFiles.length > 0 ? [...uploadedFiles] : undefined;

    // Set loading indicators
    setIsLoading(true);
    setIsTyping(true);

    try {
      console.log('Sending message to AI');
      
      // Get AI response
      const aiResponse = await callOpenRouterAPI(userMessage, messages, filesForProcessing);
      
      // Simulate typing effect for short responses
      if (aiResponse.length < 500) {
        await simulateTyping(aiResponse.length);
      } else {
        // For long responses, just add a minimum delay
        await new Promise(resolve => setTimeout(resolve, 1200));
      }
      
      // Add AI response to chat
      addMessage({ role: 'assistant', content: aiResponse });
      
      // Prompt for contact form after certain interactions
      if (messageCount >= 3 && messageCount % 3 === 0) {
        setTimeout(() => {
          addMessage({
            role: 'assistant',
            content: "💡 Quick tip: If you'd like to discuss your specific requirements or get a personalized quote, click the phone icon (📞) at the top of this chat to fill out our contact form. Our team will get back to you within 24 hours with tailored recommendations!"
          });
        }, 2000);
      }

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
    const welcomeMessages = {
      general: "👋 Hi! I'm SyncSphere's AI Assistant. I'm here to help you learn about our AI solutions, answer questions about our services, and discuss how we can transform your business with intelligent automation.\n\nWhat would you like to know about?",
      startup: "🚀 Welcome to Startup Central! I'm here to help you brainstorm, validate, and plan your startup idea using proven frameworks like Lean Startup methodology.\n\nTell me about your startup idea, or ask me anything about building an MVP!",
      technical: "⚡ Technical Assistant ready! I can help you with architecture decisions, technology stack recommendations, integration planning, and development feasibility assessments.\n\nWhat technical challenge can I help you solve?"
    };

    setChatSession(prev => ({
      ...prev,
      messages: {
        ...prev.messages,
        [activeTab]: [{
          id: '1',
          role: 'assistant',
          content: welcomeMessages[activeTab],
          timestamp: new Date().toISOString()
        }]
      }
    }));
    setMessageCount(0);
  };

  // Tab configuration
  const tabs = [
    { id: 'general' as ChatTab, label: 'General', icon: MessageCircle, description: 'Services & Pricing' },
    { id: 'startup' as ChatTab, label: 'Startup', icon: Lightbulb, description: 'Idea Validation & MVP' },
    { id: 'technical' as ChatTab, label: 'Technical', icon: Code, description: 'Architecture & Development' }
  ];

  // Switch tab handler
  const switchTab = (tabId: ChatTab) => {
    setActiveTab(tabId);
    setChatSession(prev => ({ ...prev, activeTab: tabId }));
  };

  // Get message count for tab badge
  const getTabMessageCount = (tabId: ChatTab) => {
    return Math.max(0, chatSession.messages[tabId].length - 1); // Exclude welcome message
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
                src="/syncsphere-logo.png"
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
              title="Clear current tab"
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

        {/* Chat Tabs */}
        <div className="flex border-b border-white/10 bg-white/5">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const messageCount = getTabMessageCount(tab.id);
            return (
              <button
                key={tab.id}
                onClick={() => switchTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-colors relative ${
                  activeTab === tab.id
                    ? 'text-white bg-white/10 border-b-2 border-primary'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon size={16} />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label}</span>
                {messageCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {messageCount > 9 ? '9+' : messageCount}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Description */}
        <div className="px-4 py-2 bg-white/5 border-b border-white/10">
          <p className="text-xs text-white/60">
            {tabs.find(tab => tab.id === activeTab)?.description}
          </p>
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
                          src="/syncsphere-logo.png"
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
                        {message.role === 'assistant' ? (
                          <MessageRenderer 
                            content={message.content} 
                            className="text-sm whitespace-pre-wrap"
                          />
                        ) : (
                          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                        )}
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
                      src="/syncsphere-logo.png"
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
