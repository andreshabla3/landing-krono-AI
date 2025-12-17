import React from 'react';

export interface ChatMessage {
  id: string;
  sender: 'user' | 'aura';
  text: string;
  delay: number; // Delay in ms before showing this message
}

export interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  image: string;
}