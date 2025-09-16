
import React, { useState, useEffect } from 'react';
import { Sparkle, MessageCircle, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const AskAIButton = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [promptClosed, setPromptClosed] = useState(false);
  const location = useLocation();

  // Don't show on chat page itself
  if (location.pathname === '/chat-agent') {
    return null;
  }

  // Show prompt after delay
  useEffect(() => {
    if (promptClosed) return;

    const timer = setTimeout(() => {
      setShowPrompt(true);
    }, 3000); // Show after 3 seconds

    return () => clearTimeout(timer);
  }, [promptClosed]);

  const handleClosePrompt = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowPrompt(false);
    setPromptClosed(true);
  };

  const prompts = [
    "🤖 Need AI solutions for your business? Let's chat!",
    "💡 Looking for automation? Our AI assistant can help!",
    "🚀 Ready to transform your business with AI? Ask me anything!",
    "💬 Have questions about our AI services? I'm here to help!",
    "⚡ Want to learn about AI chatbots, voice agents, or automation?"
  ];

  const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];

  return (
    <div className="fixed bottom-20 right-6 z-50">
      {/* AI Assistant Prompt Bubble */}
      {showPrompt && (
        <div className="absolute top-full right-0 mt-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl w-72 animate-fadeIn border border-gray-200 dark:border-gray-700">
          <button
            onClick={handleClosePrompt}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
            aria-label="Close prompt"
          >
            <X size={16} />
          </button>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center flex-shrink-0">
              <Sparkle size={16} className="text-white" />
            </div>
            <div>
              <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed">
                {randomPrompt}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-xs mt-2">
                Click to start a conversation
              </p>
            </div>
          </div>

          {/* Arrow pointing to button */}
          <div className="absolute -bottom-2 right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white dark:border-t-gray-800"></div>
        </div>
      )}

      {/* AI Assistant Button */}
      <Link to="/chat-agent" aria-label="Chat with SyncSphere AI Assistant">
        <button
          className="group flex items-center justify-center gap-2 h-14 w-14 md:w-auto md:px-5 rounded-full shadow-lg text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl"
          style={{
            background: "linear-gradient(130deg, rgba(0,149,255,1) 0%, rgba(0,224,138,1) 100%)",
            boxShadow: "0 10px 25px -5px rgba(0, 149, 255, 0.3)"
          }}
        >
          <Sparkle
            size={18}
            className="text-white animate-pulse"
            style={{ animationDuration: '3s' }}
          />
          <span className="hidden md:inline">AI Assistant</span>

          {/* Tooltip */}
          <span className="absolute bottom-full right-0 mb-3 bg-black/80 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Ask me about AI solutions
          </span>
        </button>
      </Link>
    </div>
  );
};

export default AskAIButton;
