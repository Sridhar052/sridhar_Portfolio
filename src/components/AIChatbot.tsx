import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { findBestMatch } from '../data/chatbotKnowledge';

interface Message {
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const SUGGESTED_QUESTIONS = [
  "Tell me about your education",
  "What are your skills?",
  "Show me your projects",
  "What certifications do you have?",
  "Tell me about your achievements"
];

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi! I'm Sridhar's AI Assistant. I can answer any questions about his education, skills, projects, certifications, and achievements. What would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    const userMessage: Message = {
      text: messageText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = findBestMatch(messageText);
      const botMessage: Message = {
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 500 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <section className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-bounce"
          aria-label="Open AI Chatbot"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>

          <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block">
            <div className="bg-slate-900 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap shadow-xl">
              Ask me anything about Sridhar!
              <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-slate-900"></div>
            </div>
          </div>
        </button>
      )}

      {isOpen && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-96 max-w-[calc(100vw-3rem)] flex flex-col overflow-hidden border border-slate-200 dark:border-slate-700 animate-slide-up">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Bot className="w-8 h-8 text-white" />
                <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
              </div>
              <div>
                <h3 className="text-white font-semibold flex items-center gap-2">
                  AI Assistant
                  <Sparkles className="w-4 h-4" />
                </h3>
                <p className="text-blue-100 text-xs">Always ready to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-800 max-h-96">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
              >
                {message.sender === 'bot' && (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                )}

                <div
                  className={`max-w-[75%] p-3 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-br-sm'
                      : 'bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 rounded-bl-sm shadow-md'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <span className={`text-xs mt-1 block ${
                    message.sender === 'user' ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>

                {message.sender === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-slate-300 dark:bg-slate-600 flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2 justify-start animate-fade-in">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="bg-white dark:bg-slate-700 p-3 rounded-2xl rounded-bl-sm shadow-md">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {messages.length === 1 && (
            <div className="px-4 py-2 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">Try asking:</p>
              <div className="flex flex-wrap gap-2">
                {SUGGESTED_QUESTIONS.slice(0, 3).map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(question)}
                    className="text-xs bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="p-4 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 px-4 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none transition-all text-slate-800 dark:text-slate-100 text-sm"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim()}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
