import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-krono-magenta/30">
      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;