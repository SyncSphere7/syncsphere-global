import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import {
  MessageSquare,
  Plus,
  Trash2,
  History,
  ChevronLeft,
  ChevronRight,
  HardDrive,
  AlertTriangle
} from 'lucide-react';
import { ChatSession } from '@/hooks/useChatStorage';

interface ChatHistorySidebarProps {
  chatSessions: ChatSession[];
  activeChatId: string | null;
  onCreateNewChat: () => void;
  onSwitchToChat: (chatId: string) => void;
  onDeleteChat: (chatId: string) => void;
  onClearAllChats: () => void;
  storageSize: number;
  storageLimit: number;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

const ChatHistorySidebar: React.FC<ChatHistorySidebarProps> = ({
  chatSessions,
  activeChatId,
  onCreateNewChat,
  onSwitchToChat,
  onDeleteChat,
  onClearAllChats,
  storageSize,
  storageLimit,
  isCollapsed,
  onToggleCollapse
}) => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);

  const formatDate = (dateString: string): string => {
    const now = new Date();
    const date = new Date(dateString);
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);

    if (diffInHours < 1) {
      return 'Just now';
    } else if (diffInHours < 24) {
      return `${Math.floor(diffInHours)}h ago`;
    } else if (diffInHours < 168) { // 7 days
      return `${Math.floor(diffInHours / 24)}d ago`;
    } else {
      return date.toLocaleDateString();
    }
  };

  const formatStorageSize = (bytes: number): string => {
    const mb = bytes / (1024 * 1024);
    return mb < 1 ? `${(mb * 1024).toFixed(0)}KB` : `${mb.toFixed(1)}MB`;
  };

  const storagePercentage = (storageSize / storageLimit) * 100;
  const isStorageWarning = storagePercentage > 80;

  if (isCollapsed) {
    return (
      <div className="w-12 bg-white/5 border-r border-white/10 flex flex-col items-center py-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggleCollapse}
          className="text-white/70 hover:text-white mb-4"
          title="Expand chat history"
        >
          <ChevronRight size={16} />
        </Button>

        <div className="flex flex-col items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={onCreateNewChat}
            className="text-white/70 hover:text-white"
            title="New chat"
          >
            <Plus size={16} />
          </Button>

          <div className="text-xs text-white/50 text-center">
            {chatSessions.length}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-80 bg-white/5 border-r border-white/10 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-white/10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <History size={18} className="text-white" />
            <h3 className="font-semibold text-white">Chat History</h3>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleCollapse}
            className="text-white/70 hover:text-white"
            title="Collapse sidebar"
          >
            <ChevronLeft size={16} />
          </Button>
        </div>

        <Button
          onClick={onCreateNewChat}
          className="w-full bg-primary hover:bg-primary/90 text-white mb-3"
        >
          <Plus size={16} className="mr-2" />
          New Chat
        </Button>

        {/* Storage Info */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-white/70">
              <HardDrive size={14} />
              <span>Storage</span>
            </div>
            <span className="text-white/50">
              {formatStorageSize(storageSize)} / {formatStorageSize(storageLimit)}
            </span>
          </div>

          <div className="w-full bg-white/10 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all duration-300 ${
                isStorageWarning ? 'bg-orange-500' : 'bg-primary'
              }`}
              style={{ width: `${Math.min(storagePercentage, 100)}%` }}
            />
          </div>

          {isStorageWarning && (
            <div className="flex items-center gap-2 text-orange-400 text-xs">
              <AlertTriangle size={12} />
              <span>Storage running low</span>
            </div>
          )}
        </div>
      </div>

      {/* Chat Sessions */}
      <ScrollArea className="flex-1">
        <div className="p-2">
          {chatSessions.length === 0 ? (
            <div className="text-center text-white/50 py-8">
              <MessageSquare size={32} className="mx-auto mb-2 opacity-50" />
              <p className="text-sm">No chats yet</p>
            </div>
          ) : (
            <div className="space-y-2">
              {chatSessions.map((chat) => (
                <Card
                  key={chat.id}
                  className={`cursor-pointer transition-all duration-200 ${
                    chat.id === activeChatId
                      ? 'bg-primary/20 border-primary/50'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                  onClick={() => onSwitchToChat(chat.id)}
                >
                  <CardContent className="p-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-white text-sm truncate mb-1">
                          {chat.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-white/50">
                          <span>{chat.messages.length} messages</span>
                          <span>•</span>
                          <span>{formatDate(chat.updatedAt)}</span>
                        </div>
                      </div>

                      {showDeleteConfirm === chat.id ? (
                        <div className="flex gap-1 ml-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              onDeleteChat(chat.id);
                              setShowDeleteConfirm(null);
                            }}
                            className="text-red-400 hover:text-red-300 p-1 h-6 w-6"
                          >
                            <Trash2 size={12} />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowDeleteConfirm(null);
                            }}
                            className="text-white/50 hover:text-white p-1 h-6 w-6"
                          >
                            ✕
                          </Button>
                        </div>
                      ) : (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowDeleteConfirm(chat.id);
                          }}
                          className="text-white/50 hover:text-red-400 p-1 h-6 w-6 opacity-0 group-hover:opacity-100"
                        >
                          <Trash2 size={12} />
                        </Button>
                      )}
                    </div>

                    {chat.isActive && (
                      <Badge variant="secondary" className="mt-2 text-xs">
                        Active
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Footer Actions */}
      {chatSessions.length > 0 && (
        <div className="p-4 border-t border-white/10">
          <Button
            variant="outline"
            onClick={onClearAllChats}
            className="w-full text-red-400 border-red-400/20 hover:bg-red-400/10"
          >
            <Trash2 size={16} className="mr-2" />
            Clear All Chats
          </Button>
        </div>
      )}
    </div>
  );
};

export default ChatHistorySidebar;
