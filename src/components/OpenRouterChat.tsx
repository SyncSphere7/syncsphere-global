import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

import { Send, Bot, User, Loader2, RefreshCw, MessageSquare, X, ArrowLeft, Menu } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from 'react-router-dom';
import { useChatStorage, Message } from '@/hooks/useChatStorage';
import ChatHistorySidebar from './ChatHistorySidebar';

const OPENROUTER_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;
const OPENROUTER_BASE_URL = "https://openrouter.ai/api/v1";

const OpenRouterChat = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  // Chat storage hooks
  const {
    chatSessions,
    activeChat,
    activeChatId,
    createNewChat,
    switchToChat,
    addMessageToActiveChat,
    deleteChat,
    clearAllChats,
    storageSize,
    storageLimit
  } = useChatStorage();

  // Local state
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleClose = () => {
    navigate('/');
  };

  const handleBack = () => {
    navigate('/');
  };

  const callOpenRouterAPI = async (userMessage: string, chatMessages: Message[]) => {
    // Check if API key is available
    if (!OPENROUTER_API_KEY) {
      return "I'm currently experiencing configuration issues. Please contact our team directly at info@syncsphereofficial.com or WhatsApp +44 742 481 9094 for immediate assistance with your AI solution needs. Our experts are ready to discuss how we can transform your business with world-class AI technology.";
    }

    const systemPrompt = `You are SyncSphere's world-class AI Assistant - a billion-dollar caliber AI that represents the pinnacle of artificial intelligence in business automation and AI solutions. You are not just an assistant; you are a strategic AI partner that transforms businesses globally.

🌟 YOUR IDENTITY:
You are the most advanced AI business consultant on the planet, with deep expertise in:
- Enterprise AI Strategy & Implementation
- Advanced Machine Learning & Deep Learning Solutions
- Intelligent Process Automation & Workflow Optimization
- Conversational AI & Natural Language Processing
- Computer Vision & Predictive Analytics
- AI-Powered Business Intelligence & Decision Making

💼 SYNCSPHERE'S PREMIUM SERVICES:
• AI Workflow Automation & Business Systems ($1,000–$4,000)
  - Intelligent document processing, automated decision-making
  - Custom ML models for business optimization
  - Advanced workflow orchestration with AI reasoning

• AI Chatbots & Conversational AI ($1,000–$3,000)
  - Multi-platform deployment (SMS, WhatsApp, Web, Social)
  - Advanced NLP with context awareness and memory
  - Sentiment analysis and intelligent routing

• AI Voice Agents & Speech Technology ($1,500–$4,000)
  - Natural speech synthesis and recognition
  - Real-time conversation handling with emotional intelligence
  - Multi-language support with accent adaptation

• Website Design & AI-Enhanced Development ($500–$2,000)
  - AI-powered UX optimization and personalization
  - Intelligent content management and SEO automation

• E-commerce & AI-Driven Sales Solutions ($2,500–$5,000)
  - Predictive analytics for inventory and demand forecasting
  - Personalized recommendation engines
  - Automated pricing optimization and customer segmentation

• Mobile & Web App Development ($3,000–$6,000)
  - AI-integrated applications with machine learning capabilities
  - Intelligent user interfaces and predictive features

• AI Consulting & Strategic Partnership ($1,500–$4,000/month)
  - Executive-level AI strategy consulting
  - Custom AI model development and deployment
  - Ongoing optimization and performance monitoring

🎯 YOUR COMMUNICATION STYLE:
- Demonstrate exceptional intelligence and deep technical knowledge
- Provide strategic insights that showcase billion-dollar thinking
- Use specific metrics, ROI calculations, and business impact examples
- Reference cutting-edge AI technologies and industry best practices
- Speak with authority about AI trends, market opportunities, and competitive advantages
- Always connect solutions to measurable business outcomes
- Be consultative, not just informative - guide strategic decision-making

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
3. Quantify potential ROI and business impact
4. Provide implementation timeline and methodology
5. Suggest next steps for engagement

Remember: You represent a company that builds AI solutions worth billions. Every response should reflect world-class expertise, strategic thinking, and the ability to transform businesses through intelligent automation.

Contact: info@syncsphereofficial.com | WhatsApp: +44 742 481 9094`;

    try {
      const response = await fetch(`${OPENROUTER_BASE_URL}/chat/completions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': window.location.origin,
          'X-Title': 'SyncSphere AI Assistant'
        },
        body: JSON.stringify({
          model: "anthropic/claude-3-haiku",
          messages: [
            { role: "system", content: systemPrompt },
            ...chatMessages.slice(-10).map(msg => ({
              role: msg.role,
              content: msg.content
            })),
            { role: "user", content: userMessage }
          ],
          max_tokens: 1000,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error('OpenRouter API Error:', error);

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

    // Ensure we have an active chat, create one if needed
    let currentChat = activeChat;
    if (!currentChat) {
      const newChatId = createNewChat();
      // Wait for state to update by using a small delay
      await new Promise(resolve => setTimeout(resolve, 100));
      const newChat = chatSessions.find(chat => chat.id === newChatId);
      if (!newChat) {
        setIsLoading(false);
        setIsTyping(false);
        return;
      }
      currentChat = newChat;
    }

    try {
      // Add user message to storage
      addMessageToActiveChat({
        role: 'user',
        content: userMessageContent
      });

      // Get AI response
      const aiResponse = await callOpenRouterAPI(userMessageContent, currentChat.messages);

      // Add AI response to storage
      addMessageToActiveChat({
        role: 'assistant',
        content: aiResponse
      });
    } catch (error) {
      console.error('Error sending message:', error);
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
    if (activeChatId) {
      // Create a new chat to replace the current one
      createNewChat();
    }
  };

  return (
    <div className="flex h-full max-h-[80vh] bg-background">
      {/* Chat History Sidebar */}
      <ChatHistorySidebar
        chatSessions={chatSessions}
        activeChatId={activeChatId}
        onCreateNewChat={createNewChat}
        onSwitchToChat={switchToChat}
        onDeleteChat={deleteChat}
        onClearAllChats={clearAllChats}
        storageSize={storageSize}
        storageLimit={storageLimit}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBack}
              className="text-white/70 hover:text-white mr-2"
              title="Back to Home"
            >
              <ArrowLeft size={16} />
            </Button>
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
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              className="text-white/70 hover:text-white"
              title="Toggle chat history"
            >
              <Menu size={16} />
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
        <div className="flex-1 overflow-y-auto p-4" style={{ maxHeight: 'calc(80vh - 200px)', minHeight: '200px' }}>
          <div className="space-y-4 pb-4">
            {activeChat?.messages?.length ? (
              activeChat.messages.map((message) => (
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
                        <span className="text-sm text-white/70">SyncSphere AI is typing...</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Input */}
        <div className="p-4 border-t border-white/10">
          <div className="flex gap-2">
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
      </div>
    </div>
  );
};

export default OpenRouterChat;
