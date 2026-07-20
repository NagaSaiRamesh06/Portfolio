
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: "Hi! I'm Ramesh's AI assistant. Ask me anything about his skills, experience, or projects!" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const suggestedPrompts = [
    "🚀 What projects have you built?",
    "💻 What are your key tech skills?",
    "💼 Tell me about your internships",
    "✉️ How can I contact Ramesh?"
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (textOverride?: string) => {
    const textToSend = (textOverride || input).trim();
    if (!textToSend || isTyping) return;

    setMessages(prev => [...prev, { role: 'user', text: textToSend }]);
    if (!textOverride) setInput('');
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const responseStream = await ai.models.generateContentStream({
        model: 'gemini-2.5-flash',
        contents: textToSend,
        config: {
          systemInstruction: `
            You are an AI representative for Naga Sai Ramesh Kunapalli. 
            Base your answers on the following info:
            - Profile: Full Stack Developer & MCA student (2024-2026 expected) at JNTU GV.
            - Skills: Python, React, Node.js, SQL, NLP, Gemini API, Git.
            - Exp: Python Full Stack Intern at Infosys Springboard, AI/ML Intern at SmartBridge.
            - Projects: JobCheck (Fake Job Detection), CareerVibe AI, TypeMaster AI, Smart Tourist Weather.
            - Contact: nagasairameshkunapalli@gmail.com, +91-9948060152.
            Be professional, polite, and enthusiastic about his work. 
            If asked something not relevant to his professional life, politely steer back to his skills and portfolio.
          `
        }
      });

      // Add placeholder message for the incoming stream
      setMessages(prev => [...prev, { role: 'ai', text: '' }]);
      setIsTyping(false);

      for await (const chunk of responseStream) {
        setMessages(prev => {
          const updated = [...prev];
          if (updated.length > 0) {
            const lastMsg = updated[updated.length - 1];
            if (lastMsg.role === 'ai') {
              lastMsg.text = (lastMsg.text || '') + (chunk.text || '');
            }
          }
          return updated;
        });
      }
    } catch (err) {
      setIsTyping(false);
      setMessages(prev => [...prev, { role: 'ai', text: "Error connecting to AI service. Please try again later." }]);
    }
  };

  // Helper function to render simple inline formatting (**bold**, *italic*, [text](url), `code`)
  const renderInlineFormatting = (text: string): React.ReactNode[] => {
    const tokenRegex = /(\*\*.*?\*\*|\*.*?\*|`.*?`|\[.*?\]\(.*?\))/g;
    const parts = text.split(tokenRegex);
    
    return parts.map((part, idx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={idx} className="font-extrabold text-white">{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith('*') && part.endsWith('*')) {
        return <em key={idx} className="italic text-gray-100">{part.slice(1, -1)}</em>;
      }
      if (part.startsWith('`') && part.endsWith('`')) {
        return <code key={idx} className="font-mono bg-white/10 px-1.5 py-0.5 rounded text-blue-300 text-[11px]">{part.slice(1, -1)}</code>;
      }
      if (part.startsWith('[') && part.includes('](')) {
        const match = part.match(/\[(.*?)\]\((.*?)\)/);
        if (match) {
          return (
            <a key={idx} href={match[2]} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline font-semibold">
              {match[1]}
            </a>
          );
        }
      }
      return part;
    });
  };

  // Helper function to render blocks (paragraphs, lists)
  const renderMessageContent = (text: string) => {
    if (!text) return null;
    const lines = text.split('\n');
    return lines.map((line, lineIdx) => {
      // Bullet list item
      const bulletMatch = line.match(/^(\s*)[-*+]\s+(.*)/);
      if (bulletMatch) {
        return (
          <li key={lineIdx} className="list-disc ml-4 mb-1 text-gray-200">
            {renderInlineFormatting(bulletMatch[2])}
          </li>
        );
      }
      
      // Numbered list item
      const numMatch = line.match(/^(\s*)\d+\.\s+(.*)/);
      if (numMatch) {
        return (
          <li key={lineIdx} className="list-decimal ml-4 mb-1 text-gray-200">
            {renderInlineFormatting(numMatch[2])}
          </li>
        );
      }

      // Empty lines
      if (!line.trim()) {
        return <div key={lineIdx} className="h-2" />;
      }

      // Paragraph
      return (
        <p key={lineIdx} className="mb-1.5 last:mb-0 text-gray-200 leading-relaxed">
          {renderInlineFormatting(line)}
        </p>
      );
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="w-80 md:w-96 h-[500px] glass rounded-3xl flex flex-col shadow-3xl border border-white/20 overflow-hidden">
          <div className="p-4 border-b border-white/10 flex justify-between items-center bg-blue-600/20">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
              <span className="font-bold text-sm text-white">Portfolio Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-tr-none' 
                    : 'glass text-gray-200 rounded-tl-none border border-white/5'
                }`}>
                  {m.role === 'ai' ? renderMessageContent(m.text) : m.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="glass px-4 py-2.5 rounded-2xl text-sm rounded-tl-none border border-white/5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              </div>
            )}

            {/* Quick Prompts */}
            {messages.length === 1 && !isTyping && (
              <div className="pt-2 flex flex-col gap-2">
                <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Suggested Questions:</span>
                <div className="flex flex-col gap-1.5">
                  {suggestedPrompts.map((prompt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(prompt.substring(3))}
                      className="text-xs px-3.5 py-2 rounded-xl bg-white/5 border border-white/5 text-gray-300 hover:bg-blue-600/20 hover:text-blue-400 hover:border-blue-500/25 transition-all text-left font-medium active:scale-[0.98]"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/10 bg-black/25">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me something..."
                className="flex-1 bg-white/5 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:bg-white/10 border border-white/5 focus:border-blue-500/30 transition-all"
              />
              <button onClick={() => handleSend()} className="p-2.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center text-white active:scale-95 shadow-md">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all hover:shadow-blue-600/40 relative group"
        >
          <div className="absolute -top-12 right-0 glass px-3 py-1.5 rounded-lg text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap border border-white/10">Ask My AI!</div>
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
