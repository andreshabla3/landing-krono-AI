import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WA_LINK } from '../constants';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      <span className="font-semibold text-sm hidden md:inline">Hablar con Aura</span>
      
      {/* Pulse effect */}
      <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping"></span>
    </a>
  );
};

export default FloatingWhatsApp;