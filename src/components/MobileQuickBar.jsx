import React from 'react';
import { Phone } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { businessInfo } from '../data/content';

export default function MobileQuickBar() {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0b0c10]/95 backdrop-blur-md border-t border-neutral-800 p-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-2xl">
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
