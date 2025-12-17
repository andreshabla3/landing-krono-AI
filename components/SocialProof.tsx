import React from 'react';

const SocialProof: React.FC = () => {
  // Mock logos for demonstration. In production, use real client logos.
  const logos = [
    { name: "DentalCare", color: "text-blue-500" },
    { name: "BarberKing", color: "text-slate-800" },
    { name: "EstéticaPura", color: "text-pink-500" },
    { name: "MediHealth", color: "text-green-600" },
    { name: "DermaCenter", color: "text-teal-600" }
  ];

  return (
    <section className="bg-slate-100 py-12 border-y border-slate-200">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">
          Confiado por más de 50 clínicas y estéticas
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Generating text-based logos for the mockup */}
            {logos.map((logo, idx) => (
                <div key={idx} className={`text-2xl font-bold flex items-center gap-2 ${logo.color}`}>
                   <div className="w-8 h-8 rounded bg-current opacity-20"></div>
                   <span>{logo.name}</span>
                </div>
            ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex items-center justify-center gap-1 mb-4 text-yellow-400">
                {[1,2,3,4,5].map(i => <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
            </div>
            <p className="text-slate-700 italic text-lg mb-4">
                "Antes perdíamos unas 15 citas a la semana porque no podíamos contestar el WhatsApp mientras atendíamos pacientes. Con Aura, la agenda se llena sola."
            </p>
            <div className="flex items-center justify-center gap-3">
                 <div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden">
                    <img src="https://i.pravatar.cc/150?img=32" alt="Doctor" />
                 </div>
                 <div className="text-left">
                     <p className="font-bold text-slate-900 text-sm">Dra. Elena Ruiz</p>
                     <p className="text-slate-500 text-xs">Dueña de Smile Clinic</p>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;