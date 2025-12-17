import React from 'react';
import { LOGO_URL, WA_LINK } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
             {/* Text Logo for Footer */}
             <div className="text-2xl font-bold tracking-tighter mb-2">
                <span className="text-white">krono</span>
                <span className="text-krono-orange">.</span>
             </div>
             <p className="text-slate-400 text-sm">
               Automatización inteligente para negocios reales.
             </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Términos de servicio</a>
            <a href="#" className="hover:text-white transition-colors">Política de privacidad</a>
            <a href={WA_LINK} className="hover:text-white transition-colors">Contacto</a>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} Krono AI. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;