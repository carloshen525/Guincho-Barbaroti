import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { businessInfo } from '../data/content';

export default function MobileQuickBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostra os botões fixos apenas após o usuário rolar e sair do topo do Hero
      if (window.scrollY > 280) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0b0c10]/95 backdrop-blur-md border-t border-neutral-800 p-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-2xl transition-all duration-300 ease-out ${
        isVisible
          ? 'translate-y-0 opacity-100 pointer-events-auto'
          : 'translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="grid grid-cols-2 gap-2">
        
        {/* Ligar Agora Button */}
        <a
          href={businessInfo.phoneCallUrl}
          className="flex items-center justify-center gap-2 py-3 px-3 bg-[#E51920] active:bg-[#c91218] text-white font-bold rounded-xl text-sm shadow-md"
        >
          <Phone className="w-4 h-4 fill-white" />
          <span>Ligar Agora</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={businessInfo.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 bg-[#22C55E] active:bg-[#16A34A] text-white font-bold rounded-xl text-sm shadow-md"
        >
          <WhatsAppIcon className="w-4 h-4 text-white" />
          <span>WhatsApp</span>
        </a>

      </div>
    </div>
  );
}
