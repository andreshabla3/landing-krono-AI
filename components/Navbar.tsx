import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
           {/* Krono Logo adapted to new colors */}
           <div className="relative w-10 h-10 flex items-center justify-center rounded-full border-2 border-transparent bg-gradient-to-tr from-krono-magenta to-krono-orange p-0.5">
             <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-krono-purple to-krono-blue text-xl">K</span>
             </div>
           </div>
           <span className={`font-bold text-2xl tracking-tight ${scrolled ? 'text-krono-purple' : 'text-slate-900'}`}>
            krono
            <span className="text-krono-orange">.</span>
           </span>
        </div>

        {/* Removed CTA Button as requested */}
      </div>
    </nav>
  );
};

export default Navbar;