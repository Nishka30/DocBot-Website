'use client';

import React from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useChatContext } from './ChatContext';

const ChatButton = () => {
  const { isChatOpen, setIsChatOpen } = useChatContext();

  return (
    <motion.button
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full 
                 bg-gradient-to-r from-violet-600 to-purple-600 
                 flex items-center justify-center shadow-lg
                 hover:shadow-xl transition-all duration-300
                 hover:scale-105 focus:outline-none"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      onClick={() => setIsChatOpen(!isChatOpen)}
      aria-label={isChatOpen ? "Close chat" : "Open chat"}
    >
      <div className="relative">
        {!isChatOpen && (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
        )}
        {isChatOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}
      </div>
    </motion.button>
  );
};

export default ChatButton;