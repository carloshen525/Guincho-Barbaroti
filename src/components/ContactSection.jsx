import React from 'react';
import { Phone, Clock, MapPin, AlertCircle, Shield } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { businessInfo } from '../data/content';

export default function ContactSection() {
  return (
    <section id="contato" className="py-20 lg:py-24 bg-[#0d0f14] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#E51920]" />
            <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#E51920] uppercase font-['Montserrat',sans-serif]">
              CENTRAL DE ATENDIMENTO
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black font-['Montserrat',sans-serif] tracking-tight text-white uppercase leading-tight">
            Precisa de um guincho agora?
          </h2>

          <p className="mt-3 text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
            Estamos de plantão 24 horas para socorrer seu veículo com velocidade e segurança.
          </p>
        </div>

        {/* 2 Big Primary Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          {/* Phone Call Card (Red) */}
          <div className="bg-gradient-to-b from-[#181316] to-[#120f12] border-2 border-[#E51920] rounded-3xl p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#E51920] text-white flex items-center justify-center mb-6 shadow-lg shadow-red-900/40">
                <Phone className="w-7 h-7 fill-white" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                Ligação Direta • Plantão 24H
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-['Montserrat',sans-serif] text-white mt-1 mb-2">
                {businessInfo.phoneDisplay}
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Fale agora mesmo com o operador para despacho urgente de guincho na sua localização.
              </p>
            </div>

            <a
              href={businessInfo.phoneCallUrl}
              className="mt-8 w-full flex items-center justify-center gap-2 py-4 bg-[#E51920] hover:bg-[#c91218] active:scale-95 text-white font-bold rounded-xl text-base shadow-lg shadow-red-900/50 transition-all"
            >
              <Phone className="w-5 h-5 fill-white" />
              <span>Ligar Agora</span>
            </a>
          </div>

          {/* WhatsApp Card (Green) */}
          <div className="bg-gradient-to-b from-[#121815] to-[#0e1311] border-2 border-[#22C55E] rounded-3xl p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-600/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#22C55E] text-white flex items-center justify-center mb-6 shadow-lg shadow-emerald-950/40">
                <WhatsAppIcon className="w-7 h-7 text-white" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                WhatsApp • Resposta Instantânea
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-['Montserrat',sans-serif] text-white mt-1 mb-2">
                {businessInfo.phoneDisplay}
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Envie sua localização em tempo real no WhatsApp para receber o orçamento e prazo exato.
              </p>
            </div>

            <a
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full flex items-center justify-center gap-2 py-4 bg-[#22C55E] hover:bg-[#16A34A] active:scale-95 text-white font-bold rounded-xl text-base shadow-lg shadow-emerald-950/50 transition-all"
            >
              <WhatsAppIcon className="w-5 h-5 text-white" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>

        </div>

        {/* Operational info bar */}
        <div className="mt-12 bg-neutral-900/70 border border-neutral-800 rounded-2xl p-6 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center flex-shrink-0 text-[#E51920]">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xs uppercase font-bold text-neutral-400">Horário</span>
              <span className="font-semibold text-white text-sm">24 Horas / 7 Dias</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center flex-shrink-0 text-[#E51920]">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xs uppercase font-bold text-neutral-400">Localização</span>
              <span className="font-semibold text-white text-sm">Ribeirão Preto e Rodovias</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center flex-shrink-0 text-emerald-400">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xs uppercase font-bold text-neutral-400">Segurança</span>
              <span className="font-semibold text-white text-sm">Transporte com Seguro</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

