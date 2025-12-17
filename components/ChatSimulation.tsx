import React, { useState, useEffect, useRef } from 'react';
import { CHAT_SCRIPT, AURA_AVATAR_URL } from '../constants';

const ChatSimulation: React.FC = () => {
  const [messages, setMessages] = useState<typeof CHAT_SCRIPT>([]);
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fix: Use ReturnType<typeof setTimeout> instead of NodeJS.Timeout to avoid missing namespace error
    let timeouts: ReturnType<typeof setTimeout>[] = [];

    // Reset flow
    setMessages([]);

    let cumulativeDelay = 0;

    CHAT_SCRIPT.forEach((msg, index) => {
      cumulativeDelay += msg.delay;
      
      // Show typing indicator before bot messages (except first if fast)
      if (msg.sender === 'aura') {
        const typingStart = cumulativeDelay - 1000; 
        if (typingStart > 0) {
            timeouts.push(setTimeout(() => setIsTyping(true), typingStart));
        }
      }

      timeouts.push(
        setTimeout(() => {
          setIsTyping(false);
          setMessages((prev) => [...prev, msg]);
        }, cumulativeDelay)
      );
    });

    // Loop the animation after it finishes
    const totalDuration = cumulativeDelay + 5000;
    timeouts.push(setTimeout(() => {
        setMessages([]);
        // Trigger a re-render to restart effect? 
        // For simplicity in this demo, we won't infinitely loop automatically to avoid annoying the user while reading, 
        // but typically you might want a 'Replay' button or an interval.
    }, totalDuration));

    return () => timeouts.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className="max-w-md mx-auto bg-white rounded-[3rem] border-8 border-slate-900 shadow-2xl overflow-hidden h-[600px] relative">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-xl z-20"></div>

      {/* Header */}
      <div className="bg-[#f0f2f5] border-b border-slate-200 p-4 pt-8 flex items-center gap-3 relative z-10 shadow-sm">
        <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-300">
           <img src={AURA_AVATAR_URL} alt="Aura Avatar" className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="font-semibold text-slate-800 text-sm">Aura</h3>
          <p className="text-xs text-slate-500">En línea</p>
        </div>
      </div>

      {/* Chat Area */}
      <div className="bg-[#efeae2] h-full overflow-y-auto p-4 pb-20 space-y-3 scrollbar-hide" style={{backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")', backgroundSize: '400px'}}>
        <div className="flex justify-center mb-4">
            <span className="bg-[#e1f3fb] text-slate-600 text-[10px] px-2 py-1 rounded shadow-sm uppercase font-medium">Hoy</span>
        </div>
        
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} fade-in-up`}
          >
            <div
              className={`max-w-[80%] px-3 py-2 rounded-lg text-sm shadow-sm relative ${
                msg.sender === 'user'
                  ? 'bg-[#005c4b] text-white rounded-tr-none'
                  : 'bg-white text-slate-800 rounded-tl-none'
              }`}
            >
              <p className="whitespace-pre-line">{msg.text}</p>
              <span className={`text-[10px] block text-right mt-1 ${msg.sender === 'user' ? 'text-white/60' : 'text-slate-400'}`}>
                {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
              </span>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start fade-in-up">
            <div className="bg-white px-4 py-3 rounded-lg rounded-tl-none shadow-sm flex gap-1">
              <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-75"></span>
              <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-150"></span>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input Area (Static) */}
      <div className="absolute bottom-0 w-full bg-[#f0f2f5] px-4 py-3 flex items-center gap-2 border-t border-slate-200">
        <div className="p-2 text-slate-400">
           <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
        </div>
        <div className="flex-1 bg-white rounded-full px-4 py-2 text-sm text-slate-400 shadow-sm">
            Escribe un mensaje...
        </div>
        <div className="p-2 text-[#005c4b]">
           <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
        </div>
      </div>
    </div>
  );
};

export default ChatSimulation;