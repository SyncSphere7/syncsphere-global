
import React from 'react';
import { Sparkle } from 'lucide-react';
import { Link } from 'react-router-dom';

const AskAIButton = ({ floating = true }) => {
  return (
    <Link to="/chat-agent" aria-label="Chat with SyncSphere AI Assistant" className={floating ? "fixed bottom-6 right-6 z-40" : ""}>
      <button
        className="group flex items-center justify-center gap-2 h-14 w-14 md:w-auto md:px-5 rounded-full shadow-lg text-white font-medium transition-all duration-300 hover:scale-105"
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
      </button>
    </Link>
  );
};

export default AskAIButton;
