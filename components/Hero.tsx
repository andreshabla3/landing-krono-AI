import React from 'react';
import { Play, ArrowRight } from 'lucide-react';
import { WA_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-16 lg:pt-32 lg:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-krono-blue/10 text-krono-blue text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-krono-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-krono-red"></span>
              </span>
              Disponible 24/7 para tus clientes
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
              Aura no es un Chatbot. <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-krono-purple via-krono-magenta to-krono-orange">
                Es la recepcionista IA
              </span> que cierra ventas.
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Deja de perder 50 clientes al mes por no contestar. Aura califica prospectos, responde dudas complejas y agenda citas automáticamente en tu calendario.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-krono-orange hover:bg-krono-red text-white font-bold rounded-xl shadow-lg shadow-krono-orange/30 transition-all flex items-center justify-center gap-2 group"
              >
                Probar chat en vivo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-sm text-slate-500 mt-2 sm:mt-0">
                Respuesta inmediata • Sin tarjetas
              </p>
            </div>
          </div>

          {/* Video / Visual Asset */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 aspect-video group cursor-pointer">
              {/* This mimics the video IMG_1530.MP4. In production, use a <video> tag here. */}
              <div className="absolute inset-0 bg-gradient-to-br from-krono-purple/80 to-krono-blue/80 mix-blend-multiply z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=1000" 
                alt="Demo Video Thumbnail" 
                className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
              />
              
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <button className="bg-white/20 backdrop-blur-md border border-white/50 text-white rounded-full p-6 hover:bg-white/30 transition-all hover:scale-110">
                   <Play className="w-8 h-8 fill-current ml-1" />
                </button>
              </div>
              
              <div className="absolute bottom-4 left-4 z-20">
                <p className="text-white font-semibold text-sm">Ver Demo: Agente vs Chatbot</p>
                <p className="text-white/70 text-xs">0:45 • Experiencia real</p>
              </div>
            </div>

            {/* Decorative blobs updated to new brand colors */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-krono-magenta/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-krono-blue/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;