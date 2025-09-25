import React from 'react';

interface MessageRendererProps {
  content: string;
  className?: string;
}

const MessageRenderer: React.FC<MessageRendererProps> = ({ content, className = '' }) => {
  // Function to render text with clickable phone numbers and WhatsApp links
  const renderWithLinks = (text: string) => {
    // Patterns for different types of contact information
    const patterns = [
      // WhatsApp pattern
      {
        regex: /WhatsApp:?\s*(\+44\s*742\s*481\s*9094)/gi,
        replacement: (match: string, number: string) => (
          <a
            key={`whatsapp-${number}`}
            href={`https://wa.me/447424819094`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 underline"
            title="Chat with us on WhatsApp"
          >
            WhatsApp: {number}
          </a>
        )
      },
      // US Phone pattern
      {
        regex: /(\+1\s*815\s*472\s*7760)/gi,
        replacement: (match: string, number: string) => (
          <a
            key={`phone-us-${number}`}
            href={`tel:+18154727760`}
            className="text-blue-400 hover:text-blue-300 underline"
            title="Call our US office"
          >
            {number}
          </a>
        )
      },
      // Netherlands Phone pattern
      {
        regex: /(\+31\s*97010257248)/gi,
        replacement: (match: string, number: string) => (
          <a
            key={`phone-nl-${number}`}
            href={`tel:+3197010257248`}
            className="text-blue-400 hover:text-blue-300 underline"
            title="Call our Netherlands office"
          >
            {number}
          </a>
        )
      },

    ];

    // Split text into parts and apply replacements
    let parts: (string | React.ReactElement)[] = [text];

    patterns.forEach(({ regex, replacement }) => {
      const newParts: (string | React.ReactElement)[] = [];
      
      parts.forEach((part, partIndex) => {
        if (typeof part === 'string') {
          const matches = Array.from(part.matchAll(regex));
          if (matches.length === 0) {
            newParts.push(part);
          } else {
            let lastIndex = 0;
            matches.forEach((match, matchIndex) => {
              // Add text before match
              if (match.index! > lastIndex) {
                newParts.push(part.substring(lastIndex, match.index));
              }
              // Add replacement element
              newParts.push(replacement(match[0], match[1] || match[0]));
              lastIndex = match.index! + match[0].length;
            });
            // Add remaining text
            if (lastIndex < part.length) {
              newParts.push(part.substring(lastIndex));
            }
          }
        } else {
          newParts.push(part);
        }
      });
      
      parts = newParts;
    });

    return parts.map((part, index) => 
      typeof part === 'string' ? (
        <span key={`text-${index}`}>{part}</span>
      ) : (
        part
      )
    );
  };

  return (
    <div className={className}>
      {renderWithLinks(content)}
    </div>
  );
};

export default MessageRenderer;