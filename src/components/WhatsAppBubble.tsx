import React, { useState, useEffect } from 'react';

const WhatsAppBubble = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [messageClosed, setMessageClosed] = useState(false);

  // Show the bubble after a short delay for better UX
  useEffect(() => {
    const bubbleTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    // Show the message bubble after a longer delay
    const messageTimer = setTimeout(() => {
      if (!messageClosed) {
        setShowMessage(true);
      }
    }, 5000);

    return () => {
      clearTimeout(bubbleTimer);
      clearTimeout(messageTimer);
    };
  }, [messageClosed]);

  // WhatsApp link with the updated number
  const whatsappLink = "https://wa.me/18154727760";

  // Handle click to open WhatsApp
  const handleClick = () => {
    window.open(whatsappLink, "_blank");
  };

  // Close the message bubble
  const handleCloseMessage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowMessage(false);
    setMessageClosed(true);
  };

  return (
    <div 
      className={`fixed bottom-24 right-6 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
    >
      {/* Chat message bubble */}
      {showMessage && (
        <div 
          className="absolute bottom-full right-0 mb-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg w-64 animate-fadeIn"
          style={{ animationDelay: "0.2s" }}
        >
          <button 
            onClick={handleCloseMessage}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            aria-label="Close message"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <p className="text-gray-700 dark:text-gray-200 text-sm">
            👋 Hello! Need help with AI solutions for your business? Chat with us on WhatsApp!
          </p>
        </div>
      )}
      
      <button
        onClick={handleClick}
        className="bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors duration-300 flex items-center justify-center group relative"
        aria-label="Chat on WhatsApp"
      >
        {/* WhatsApp tooltip */}
        <span className="absolute right-full mr-3 bg-black/80 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat with us on WhatsApp
        </span>
        
        {/* WhatsApp SVG Logo */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="30" 
          height="30" 
          viewBox="0 0 39 39" 
          fill="none"
        >
          <path 
            d="M19.5 0C8.73 0 0 8.73 0 19.5C0 23.29 1.06 26.85 2.89 29.89L0.3 39L9.62 36.45C12.53 38.14 15.9 39.01 19.5 39.01C30.27 39.01 39 30.28 39 19.51C39 14.31 36.97 9.46 33.35 5.83C29.73 2.2 24.7 0 19.5 0ZM30.94 27.71C30.44 29.27 28.37 30.57 26.62 30.94C25.43 31.19 23.9 31.38 19.56 29.52C14.02 27.15 10.38 21.53 10.13 21.2C9.89 20.87 7.9 18.22 7.9 15.48C7.9 12.74 9.32 11.38 9.89 10.8C10.36 10.33 11.19 10.12 11.99 10.12C12.24 10.12 12.46 10.13 12.66 10.14C13.23 10.16 13.51 10.19 13.89 11.13C14.35 12.29 15.52 15.02 15.64 15.26C15.76 15.5 15.89 15.83 15.71 16.15C15.55 16.48 15.41 16.63 15.17 16.91C14.93 17.19 14.71 17.41 14.47 17.7C14.25 17.95 14.01 18.22 14.29 18.71C14.57 19.19 15.51 20.74 16.9 21.98C18.71 23.58 20.16 24.11 20.71 24.33C21.12 24.49 21.61 24.46 21.89 24.12C22.25 23.68 22.69 22.95 23.14 22.23C23.46 21.7 23.87 21.65 24.29 21.81C24.73 21.95 27.45 23.29 27.93 23.53C28.41 23.77 28.72 23.89 28.85 24.08C28.97 24.27 28.97 25.71 28.37 27.71H30.94Z" 
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default WhatsAppBubble;
