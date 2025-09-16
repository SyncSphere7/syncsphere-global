import { useState, useEffect, useCallback } from 'react';
import { useLocalStorage, localStorageUtils } from './useLocalStorage';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string; // Changed from Date to string for proper serialization
}

export interface ChatSession {
  id: string;
  title: string;
  messages: Message[];
  createdAt: string; // Changed from Date to string for proper serialization
  updatedAt: string; // Changed from Date to string for proper serialization
  isActive?: boolean;
}

const CHAT_STORAGE_KEY = 'syncsphere_chat_sessions';
const MAX_CHATS = 10;
const MAX_MESSAGES_PER_CHAT = 50;
const STORAGE_LIMIT_MB = 5; // 5MB limit

export function useChatStorage() {
  const [chatSessions, setChatSessions] = useLocalStorage<ChatSession[]>(CHAT_STORAGE_KEY, []);
  const [activeChatId, setActiveChatId] = useState<string | null>(null);

  // Initialize with a default chat if none exists
  useEffect(() => {
    try {
      if (chatSessions.length === 0) {
        const defaultChat: ChatSession = {
          id: generateChatId(),
          title: 'New Chat',
          messages: [{
            id: '1',
            role: 'assistant',
            content: "👋 Hi! I'm SyncSphere's AI Assistant. I'm here to help you learn about our AI solutions, answer questions about our services, and discuss how we can transform your business with intelligent automation.\n\nWhat would you like to know about?",
            timestamp: new Date().toISOString()
          }],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          isActive: true
        };
        setChatSessions([defaultChat]);
        setActiveChatId(defaultChat.id);
      } else {
        // Validate chat sessions data
        const validChats = chatSessions.filter(chat => {
          return chat &&
                 typeof chat.id === 'string' &&
                 typeof chat.title === 'string' &&
                 Array.isArray(chat.messages) &&
                 typeof chat.createdAt === 'string' &&
                 typeof chat.updatedAt === 'string';
        });

        if (validChats.length !== chatSessions.length) {
          // If some chats are invalid, use only valid ones
          setChatSessions(validChats.length > 0 ? validChats : [{
            id: generateChatId(),
            title: 'New Chat',
            messages: [{
              id: '1',
              role: 'assistant',
              content: "👋 Hi! I'm SyncSphere's AI Assistant. I'm here to help you learn about our AI solutions, answer questions about our services, and discuss how we can transform your business with intelligent automation.\n\nWhat would you like to know about?",
              timestamp: new Date().toISOString()
            }],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            isActive: true
          }]);
        }

        // Find the active chat or set the first one as active
        const activeChat = validChats.find(chat => chat.isActive) || validChats[0];
        if (activeChat) {
          setActiveChatId(activeChat.id);
        }
      }
    } catch (error) {
      console.error('Error initializing chat sessions:', error);
      // Reset to default state if there's an error
      const defaultChat: ChatSession = {
        id: generateChatId(),
        title: 'New Chat',
        messages: [{
          id: '1',
          role: 'assistant',
          content: "👋 Hi! I'm SyncSphere's AI Assistant. I'm here to help you learn about our AI solutions, answer questions about our services, and discuss how we can transform your business with intelligent automation.\n\nWhat would you like to know about?",
          timestamp: new Date().toISOString()
        }],
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: true
      };
      setChatSessions([defaultChat]);
      setActiveChatId(defaultChat.id);
    }
  }, []);

  // Generate unique chat ID
  const generateChatId = (): string => {
    return `chat_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  };

  // Generate chat title from first user message
  const generateChatTitle = (messages: Message[]): string => {
    const firstUserMessage = messages.find(msg => msg.role === 'user');
    if (firstUserMessage) {
      const content = firstUserMessage.content;
      return content.length > 30 ? content.substring(0, 30) + '...' : content;
    }
    return 'New Chat';
  };

  // Check storage limits
  const checkStorageLimit = useCallback((): boolean => {
    const storageSize = localStorageUtils.getStorageSize();
    const storageSizeMB = storageSize / (1024 * 1024);
    return storageSizeMB < STORAGE_LIMIT_MB;
  }, []);

  // Clean up old chats if storage is full
  const cleanupOldChats = useCallback(() => {
    if (!checkStorageLimit()) {
      const sortedChats = [...chatSessions].sort((a, b) =>
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
      );

      // Keep only the most recent 5 chats
      const chatsToKeep = sortedChats.slice(0, 5);
      setChatSessions(chatsToKeep);

      // If active chat was deleted, set the first remaining chat as active
      if (activeChatId && !chatsToKeep.find(chat => chat.id === activeChatId)) {
        setActiveChatId(chatsToKeep[0]?.id || null);
      }
    }
  }, [chatSessions, activeChatId, checkStorageLimit]);

  // Create new chat
  const createNewChat = useCallback((): string => {
    cleanupOldChats();

    const newChatId = generateChatId();
    const newChat: ChatSession = {
      id: newChatId,
      title: 'New Chat',
      messages: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isActive: true
    };

    setChatSessions(prev => {
      // Mark all other chats as inactive
      const updatedChats = prev.map(chat => ({ ...chat, isActive: false }));
      return [...updatedChats, newChat];
    });

    setActiveChatId(newChatId);
    return newChatId;
  }, [cleanupOldChats]);

  // Switch to existing chat
  const switchToChat = useCallback((chatId: string) => {
    setChatSessions(prev =>
      prev.map(chat => ({
        ...chat,
        isActive: chat.id === chatId
      }))
    );
    setActiveChatId(chatId);
  }, []);

  // Add message to active chat
  const addMessageToActiveChat = useCallback((message: Omit<Message, 'id' | 'timestamp'>) => {
    if (!activeChatId) {
      console.log('No active chat ID, cannot add message');
      return;
    }

    const newMessage: Message = {
      ...message,
      timestamp: new Date().toISOString(),
      id: Date.now().toString()
    };

    console.log('Adding message to chat:', activeChatId, newMessage);

    setChatSessions(prev => {
      const updated = prev.map(chat => {
        if (chat.id === activeChatId) {
          const updatedMessages = [...chat.messages, newMessage];
          // Limit messages per chat
          const limitedMessages = updatedMessages.slice(-MAX_MESSAGES_PER_CHAT);

          console.log('Updated chat messages:', limitedMessages);

          return {
            ...chat,
            messages: limitedMessages,
            title: chat.title === 'New Chat' ? generateChatTitle(limitedMessages) : chat.title,
            updatedAt: new Date().toISOString()
          };
        }
        return chat;
      });
      console.log('Updated chat sessions:', updated);
      return updated;
    });
  }, [activeChatId]);

  // Delete chat
  const deleteChat = useCallback((chatId: string) => {
    setChatSessions(prev => {
      const filteredChats = prev.filter(chat => chat.id !== chatId);

      // If deleting active chat, switch to another chat
      if (chatId === activeChatId && filteredChats.length > 0) {
        const newActiveChat = filteredChats[0];
        newActiveChat.isActive = true;
        setActiveChatId(newActiveChat.id);
      } else if (filteredChats.length === 0) {
        // If no chats left, create a new one
        const newChatId = createNewChat();
        return [{
          id: newChatId,
          title: 'New Chat',
          messages: [{
            id: '1',
            role: 'assistant',
            content: "👋 Hi! I'm SyncSphere's AI Assistant. I'm here to help you learn about our AI solutions, answer questions about our services, and discuss how we can transform your business with intelligent automation.\n\nWhat would you like to know about?",
            timestamp: new Date().toISOString()
          }],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          isActive: true
        }];
      }

      return filteredChats;
    });
  }, [activeChatId, createNewChat]);

  // Clear all chats
  const clearAllChats = useCallback(() => {
    localStorageUtils.remove(CHAT_STORAGE_KEY);
    const newChatId = createNewChat();
    setChatSessions([{
      id: newChatId,
      title: 'New Chat',
      messages: [{
        id: '1',
        role: 'assistant',
        content: "👋 Hi! I'm SyncSphere's AI Assistant. I'm here to help you learn about our AI solutions, answer questions about our services, and discuss how we can transform your business with intelligent automation.\n\nWhat would you like to know about?",
        timestamp: new Date().toISOString()
      }],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isActive: true
    }]);
    setActiveChatId(newChatId);
  }, [createNewChat]);

  // Get active chat
  const activeChat = chatSessions.find(chat => chat.id === activeChatId);

  return {
    chatSessions,
    activeChat,
    activeChatId,
    createNewChat,
    switchToChat,
    addMessageToActiveChat,
    deleteChat,
    clearAllChats,
    storageSize: localStorageUtils.getStorageSize(),
    storageLimit: STORAGE_LIMIT_MB * 1024 * 1024
  };
}
