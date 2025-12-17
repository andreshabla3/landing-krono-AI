import React from 'react';
import ChatSimulation from './ChatSimulation';
import { Clock, TrendingUp, CalendarCheck, ShieldCheck } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50" id="funcionalidades">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          
          {/* Left: Chat Simulation (The Visual Hook) */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1 sticky top-10">
            <ChatSimulation />
            <div className="text-center mt-6">
               <p className="text-slate-500 text-sm">☝️ Simulación real de Aura calificando un lead</p>
            </div>
          </div>

          {/* Right: Benefits */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Tu negocio pierde dinero cuando duermes. <span className="text-krono-purple">Aura no duerme.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-10">
              Mientras un humano puede atender una llamada a la vez, Aura atiende a cientos de clientes simultáneamente, sin cansarse y sin cobrar horas extra.
            </p>

            <div className="grid gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-krono-blue/10 rounded-xl flex items-center justify-center text-krono-blue">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Atención Inmediata 24/7</h3>
                  <p className="text-slate-600 mt-2">
                    Cero tiempos de espera. Aura responde en segundos a las 3 AM igual que a las 3 PM.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-krono-magenta/10 rounded-xl flex items-center justify-center text-krono-magenta">
                  <CalendarCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Agendamiento Automático</h3>
                  <p className="text-slate-600 mt-2">
                    Se conecta con tu Google Calendar. Ofrece huecos libres y confirma la cita sin que muevas un dedo.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-krono-orange/10 rounded-xl flex items-center justify-center text-krono-orange">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Recuperación de Clientes</h3>
                  <p className="text-slate-600 mt-2">
                    Reactiva bases de datos antiguas y da seguimiento a quienes preguntaron precio y no compraron.
                  </p>
                </div>
              </div>
              
               <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-krono-purple/10 rounded-xl flex items-center justify-center text-krono-purple">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Calificación Inteligente</h3>
                  <p className="text-slate-600 mt-2">
                    Aura filtra curiosos de compradores reales antes de pasarlos a tu equipo humano o agendar.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;