import React from 'react';

// WhatsApp Configuration
export const WA_NUMBER = "584129878696";
export const WA_MESSAGE = "Hola, me interesa probar Aura para que atienda a mis clientes. ¿Me das más información?";
export const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

// Asset Placeholders (Replace these with actual local assets in production)
// Using colorful/gradient placeholders to match the brand identity described
export const LOGO_URL = "https://placehold.co/150x50/2E236C/FFFFFF?text=Krono+AI"; 
// Using a specific artistic placeholder to represent the "Aura" split-face avatar
export const AURA_AVATAR_URL = "https://picsum.photos/id/64/200/200"; 

export const CHAT_SCRIPT: Array<{sender: 'user' | 'aura', text: string, delay: number}> = [
  { sender: 'user', text: "Hola", delay: 500 },
  { sender: 'aura', text: "¡Hola! Soy Aura 👋 \n\nAyudo a dueños de barberías, estéticas y clínicas dentales a que su negocio crezca.", delay: 1500 },
  { sender: 'aura', text: "¿A qué te dedicas?", delay: 2500 },
  { sender: 'user', text: "Tengo una clínica dental especializada en diseño de sonrisa", delay: 4000 },
  { sender: 'aura', text: "Genial, trabajamos específicamente con clínicas dentales. ¿Cómo te llamas?", delay: 5500 },
  { sender: 'user', text: "Maria Torres", delay: 7000 },
  { sender: 'aura', text: "¡Hola Maria! Un gusto saludarte. \n\nVeo que tienes una clínica dental. ¡Excelente! Para poder ayudarte mejor, ¿en qué ciudad se encuentra?", delay: 8500 },
];
