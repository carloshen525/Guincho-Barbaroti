import React from 'react';
import { Phone } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { businessInfo } from '../data/content';

export default function QuickContactBanner() {
  return (
    <section className="bg-gradient-to-r from-[#980e14] via-[#b91118] to-[#980e14] py-8 sm:py-10 px-4 sm:px-6 relative overflow-hidden shadow-2xl">
      {/* Background Lighting Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black/30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left Side: Truck Icon and Catchphrase from Mockup */}
        <div className="flex items-center gap-4 sm:gap-6 text-center lg:text-left">
          
          {/* Tow Truck Vector Icon */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-black/30 border border-white/20 p-2.5 flex items-center justify-center flex-shrink-0 shadow-lg">
            <svg 
              viewBox="0 0 100 64" 
              className="w-full h-full drop-shadow"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Boom */}
              <path d="M14 38L38 10H46L24 40H14Z" fill="#FFFFFF" />
              <path d="M38 12L56 22" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
              <path d="M56 24V32" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
              {/* Bed */}
              <path d="M8 40H62V46H8V40Z" fill="#FFFFFF" />
              {/* Cab */}
              <path d="M60 22H78L88 34V46H60V22Z" fill="#FFFFFF" />
              <path d="M64 26H76L82 34H64V26Z" fill="#B91118" />
              <rect x="67" y="19" width="10" height="3" rx="1.5" fill="#FBBF24" />
              {/* Wheels */}
              <circle cx="26" cy="48" r="8" fill="#111827" />
              <circle cx="26" cy="48" r="4" fill="#FFFFFF" />
              <circle cx="76" cy="48" r="8" fill="#111827" />
              <circle cx="76" cy="48" r="4" fill="#FFFFFF" />
            </svg>
          </div>

          <div>
            <span className="block text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-white/90">
              PRECISOU? É SÓ CHAMAR!
            </span>
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-black font-['Montserrat',sans-serif] text-white uppercase tracking-tight drop-shadow-sm">
              GUINCHO BARBAROTI
            </span>
            <span className="text-xs sm:text-sm text-red-100 font-medium hidden sm:block">
              Chegamos rápido onde você estiver em Ribeirão Preto e região.
            </span>
          </div>

        </div>

        {/* Right Side: Red & Green Action CTAs matching mockup */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
          
          {/* Ligar Agora Button */}
          <a
            href={businessInfo.phoneCallUrl}
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3.5 bg-[#E51920] hover:bg-[#c91218] active:scale-95 text-white rounded-xl shadow-lg shadow-black/30 border border-white/20 transition-all font-bold group"
          >
            <div className="w-8 h-8 rounded-lg bg-black/20 flex items-center justify-center flex-shrink-0">
              <Phone className="w-4 h-4 fill-white transition-transform group-hover:rotate-12" />
            </div>
            <div className="text-left">
              <span className="block text-[10px] uppercase font-bold text-red-100">Ligar Agora</span>
              <span className="block text-sm sm:text-base font-black font-['Montserrat',sans-serif]">
                {businessInfo.phoneDisplay}
              </span>
            </div>
          </a>

          {/* WhatsApp Button */}
          <a
            href={businessInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3.5 bg-[#22C55E] hover:bg-[#16A34A] active:scale-95 text-white rounded-xl shadow-lg shadow-black/30 border border-white/20 transition-all font-bold group"
          >
            <div className="w-8 h-8 rounded-lg bg-black/20 flex items-center justify-center flex-shrink-0">
              <WhatsAppIcon className="w-4 h-4 text-white transition-transform group-hover:scale-110" />
            </div>
            <div className="text-left">
              <span className="block text-[10px] uppercase font-bold text-emerald-100">WhatsApp</span>
              <span className="block text-sm sm:text-base font-black font-['Montserrat',sans-serif]">
                {businessInfo.phoneDisplay}
              </span>
            </div>
          </a>

        </div>

      </div>
    </section>
  );
}

