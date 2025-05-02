'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Loader2, ShieldAlert, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useChatContext } from './ChatContext';

interface Message {
  role: 'assistant' | 'user';
  content: string;
  timestamp?: string;
}

const INITIAL_MESSAGE: Message = {
  role: 'assistant',
  content: `Hello! I am Ira, your medical AI assistant. I can help you with health-related questions and provide general medical information.\n\nPlease note that I am not a replacement for professional medical care—always consult with a qualified healthcare provider for specific medical advice.`,
};

const SYSTEM_PROMPT = `You are a highly professional and knowledgeable Medical AI Assistant. Your sole purpose is to provide clear, structured, and easy-to-read health-related information.

- Always use bullet points, numbered lists, and headers to improve readability.
- Ensure responses are well-organized, with separate sections for causes, remedies, and when to seek medical attention.
- Avoid long paragraphs; instead, break information into digestible sections.
- Always end responses with a professional disclaimer, reminding users to consult a healthcare provider for personalized medical advice.

You must not answer non-medical questions. If asked, politely inform the user that you can only discuss medical and health-related topics.`;

const IRA_IMAGE = "https://media-hosting.imagekit.io/1b7a9c823d964ea2/Ira.png?Expires=1838141441&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=zepo1vWAC7UXA74FIhfEB7Z4kfcVGDaZ~Q~q3zPB6MVIMkrFAtszCFfkw7ZR0iohoHh2h1BalcVz63X0ZlQxp~U80JJJxBTWDVydY87608XwVur86k5OsleV5BVmD91UeMUmwEpyKGOwYEs8f5XKkeJOwt6MSDFqqaUbJZaSjKJ7fkDnDAaBq00qGDhjvP~1Mi9xDafVUXKg7Y-mOjbdKsZl9z-ch3JPthE7F2uUEG97hjQwae7aRoNzuEgvPI4-Fe8eGZMIXzG5yZC2nX2ipMlnmRUPRPH3Tjh0qlCX1THqeM1sz1ErR7x33BpnHL-ODOFUU3Czkos2c7c4PuJtJg__";

const ChatWindow = () => {
  const { isChatOpen, setIsChatOpen } = useChatContext();
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isChatOpen) {
      scrollToBottom();
    }
  }, [messages, isChatOpen]);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      const { scrollHeight, clientHeight } = chatContainerRef.current;
      chatContainerRef.current.scrollTo({
        top: scrollHeight - clientHeight,
        behavior: 'smooth'
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userMessage = input.trim();
    if (!userMessage || isLoading) return;

    setMessages(prev => [...prev, {
      role: 'user',
      content: userMessage,
      timestamp: new Date().toLocaleTimeString()
    }]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer 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`,
          "Content-Type": "application/json",
          "HTTP-Referer": window.location.origin,
          "X-Title": "Medical Assistant"
        },
        body: JSON.stringify({
          model: "sophosympatheia/rogue-rose-103b-v0.2:free",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages.map(({ role, content }) => ({ role, content })),
            { role: "user", content: userMessage }
          ]
        })
      });

      if (!response.ok) {
        throw new Error("API request failed.");
      }

      const data = await response.json();
      const reply = data.choices[0].message.content;
      const formatted = formatResponse(reply);

      setMessages(prev => [...prev, {
        role: 'assistant',
        content: formatted,
        timestamp: new Date().toLocaleTimeString()
      }]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "⚠️ Sorry, something went wrong. Please try again.",
        timestamp: new Date().toLocaleTimeString()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const formatResponse = (response: string) => {
    return response
      .split('\n\n')
      .map(section => section.trim())
      .filter(Boolean)
      .join('\n\n');
  };

  const renderMessage = (message: Message, index: number) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`flex gap-4 mb-6 ${message.role === 'assistant' ? 'flex-row' : 'flex-row-reverse'}`}
    >
      <div className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center ${
        message.role === 'assistant' ? 'bg-gradient-to-r from-violet-500 to-purple-500' : 'bg-gradient-to-r from-purple-500 to-fuchsia-500'
      }`}>
        {message.role === 'assistant' ? (
          <img
            src={IRA_IMAGE}
            alt="AI Assistant"
            onError={(e) => (e.currentTarget.src = '/fallback-avatar.png')}
            className="w-10 h-8 object-cover rounded-xl"
          />
        ) : (
          <User className="w-5 h-5 text-white" />
        )}
      </div>
      <div className="flex-1 max-w-[80%]">
        <div className={`message-bubble ${
          message.role === 'assistant' ? 'message-bubble-assistant' : 'message-bubble-user'
        }`}>
          <pre className="whitespace-pre-wrap font-sans text-sm">{message.content}</pre>
        </div>
        <div className="mt-1 text-xs text-white/60 px-6">{message.timestamp}</div>
      </div>
    </motion.div>
  );

  return (
    <AnimatePresence>
      {isChatOpen && (
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          className="fixed top-0 right-0 z-40 h-full w-full sm:w-96 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center">
                <img src={IRA_IMAGE} alt="Ira" className="w-12 h-10 object-cover rounded-xl" />
              </div>
              <div>
                <h3 className="font-bold text-white">Ira Medical Assistant</h3>
                <p className="text-xs text-white/70">Your AI health companion</p>
              </div>
            </div>
            <button 
              onClick={() => setIsChatOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Chat Messages */}
          <div 
            ref={chatContainerRef} 
            className="h-[calc(100vh-160px)] overflow-y-auto p-4 scroll-smooth"
          >
            {messages.map(renderMessage)}

            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-start gap-4 mb-6"
              >
                <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center">
                  <img src={IRA_IMAGE} alt="AI Assistant" className="w-10 h-8 object-cover rounded-xl" />
                </div>
                <div className="flex-1 max-w-[80%]">
                  <div className="message-bubble message-bubble-assistant">
                    <div className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 text-white animate-spin" />
                      <span className="text-white/80 text-sm">Thinking...</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-white/20 bg-black/30 p-4 absolute bottom-0 left-0 right-0">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a health question..."
                className="flex-1 bg-white/20 text-white placeholder-white/60 text-sm rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-gradient-to-r from-violet-500 to-purple-500 text-white font-semibold w-10 h-10 rounded-xl hover:shadow-lg transition-all duration-200 flex items-center justify-center flex-shrink-0"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChatWindow;