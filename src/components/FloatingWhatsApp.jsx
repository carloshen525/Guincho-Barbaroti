import React, { useState } from 'react';
import { X } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { businessInfo } from '../data/content';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end">
      
      {/* Small Chat Greeting Tooltip */}
      {showTooltip && (
        <div className="mb-2 bg-neutral-900 border border-neutral-700 text-white text-xs px-3.5 py-2 rounded-xl shadow-2xl flex items-center gap-2 max-w-xs animate-fadeIn">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
          <span>Precisa de guincho? <strong>Estamos online agora!</strong></span>
          <button 
            type="button" 
            onClick={() => setShowTooltip(false)}
            className="text-neutral-400 hover:text-white ml-1 p-0.5"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={businessInfo.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-[#22C55E] hover:bg-[#16A34A] text-white rounded-full shadow-2xl shadow-emerald-950/60 hover:scale-110 active:scale-95 transition-all duration-300 group"
        aria-label="Abrir conversa no WhatsApp"
      >
        {/* Glow pulse ring */}
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-30" />
        <WhatsAppIcon className="w-7 h-7 text-white transition-transform group-hover:scale-110" />
      </a>
    </div>
  );
}

