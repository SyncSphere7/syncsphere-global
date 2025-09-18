
import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loader2, RefreshCw } from 'lucide-react';
import { sanitizeForLog } from '@/lib/security';

const ChatbaseAgent = () => {
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const embedded = searchParams.get('embedded') === 'true';
  
  const containerClasses = embedded 
    ? "chatbase-container w-full h-full rounded-lg overflow-hidden shadow-xl"
    : "chatbase-container w-full h-full min-h-[700px]";

  const handleIframeLoad = () => {
    console.log('Chatbase iframe loaded successfully, retry count:', retryCount);
    setIsLoading(false);
    setError(false);
    
    // Additional check to ensure the iframe content is actually loaded
    setTimeout(() => {
      if (iframeRef.current) {
        try {
          console.log('Iframe document ready state check');
          // Try to access iframe to verify it's responsive
          const iframeDoc = iframeRef.current.contentDocument;
          if (iframeDoc) {
            console.log('Iframe content accessible');
          }
        } catch (e) {
          console.log('Iframe cross-origin, but that is expected for Chatbase');
        }
      }
    }, 2000);
  };

  const handleIframeError = () => {
    console.error('Failed to load Chatbase iframe, retry count:', retryCount);
    setIsLoading(false);
    setError(true);
  };

  const handleRetry = () => {
    console.log('Retrying to load Chatbase iframe');
    setRetryCount(prev => prev + 1);
    setIsLoading(true);
    setError(false);
    
    // Force reload the iframe
    if (iframeRef.current) {
      iframeRef.current.src = iframeRef.current.src;
    }
  };

  useEffect(() => {
    console.log('ChatbaseAgent component mounted, retry count:', retryCount);
    
    // Set a timeout to handle cases where the iframe doesn't trigger load events
    const timeout = setTimeout(() => {
      if (isLoading) {
        console.log('Iframe load timeout after 15 seconds, checking if content is available');
        // Try a more aggressive approach to determine if the iframe loaded
        if (iframeRef.current) {
          setIsLoading(false);
          console.log('Assuming iframe loaded due to timeout');
        } else {
          setError(true);
          setIsLoading(false);
          console.log('Iframe reference not found, marking as error');
        }
      }
    }, 15000);

    return () => clearTimeout(timeout);
  }, [isLoading, retryCount]);

  // Add a message listener to detect iframe activity
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Chatbase might send messages when it's ready
      if (event.origin.includes('chatbase.co')) {
        console.log('Received message from Chatbase:', sanitizeForLog(event.data));
        setIsLoading(false);
        setError(false);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);
  
  return (
    <div className={containerClasses}>
      {isLoading && (
        <div className="flex items-center justify-center h-full min-h-[400px] bg-gray-100">
          <div className="text-center">
            <Loader2 className="w-8 h-8 animate-spin mx-auto mb-2" />
            <p className="text-gray-600">Loading AI Assistant...</p>
            {retryCount > 0 && (
              <p className="text-gray-500 text-sm mt-1">Retry attempt: {retryCount}</p>
            )}
          </div>
        </div>
      )}
      
      {error && (
        <div className="flex items-center justify-center h-full min-h-[400px] bg-gray-100">
          <div className="text-center">
            <p className="text-red-600 mb-2">AI Assistant failed to load</p>
            <p className="text-gray-600 text-sm mb-4">
              This might be due to network issues or the service being temporarily unavailable.
            </p>
            <button 
              onClick={handleRetry}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center gap-2 mx-auto"
            >
              <RefreshCw size={16} />
              Retry Loading
            </button>
          </div>
        </div>
      )}

      <iframe
        ref={iframeRef}
        src="https://www.chatbase.co/chatbot-iframe/3x3KHQWRHxoaauq9tmeFL"
        width="100%"
        style={{ 
          height: '100%', 
          minHeight: embedded ? '400px' : '700px',
          display: isLoading || error ? 'none' : 'block'
        }}
        frameBorder="0"
        title="SyncSphere AI Assistant"
        className="w-full h-full"
        onLoad={handleIframeLoad}
        onError={handleIframeError}
        allow="microphone; camera"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-presentation"
      />
    </div>
  );
};

export default ChatbaseAgent;
