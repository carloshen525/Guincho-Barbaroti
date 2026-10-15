import React from 'react';
import { Clock, ShieldCheck, BadgePercent, CreditCard, Award, MapPin } from 'lucide-react';
import { serviceDifferentials } from '../data/content';

const iconMap = {
  Clock,
  ShieldCheck,
  BadgePercent,
  CreditCard,
  Award,
  MapPin,
};

export default function WhyChooseUs() {
  return (
    <section id="diferenciais" className="py-20 lg:py-24 bg-[#0a0c10] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#E51920]" />
            <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#E51920] uppercase font-['Montserrat',sans-serif]">
              POR QUE ESCOLHER A BARBAROTI
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black font-['Montserrat',sans-serif] tracking-tight text-white uppercase leading-tight">
            Diferenciais que garantem sua tranquilidade
          </h2>

          <p className="mt-3 text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
            Trabalhamos com seriedade e equipamentos modernos para que seu veículo chegue em perfeito estado ao destino.
          </p>
        </div>

        {/* 6 Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceDifferentials.map((diff, index) => {
            const IconComponent = iconMap[diff.icon] || ShieldCheck;
            return (
              <div
                key={diff.title}
                className="bg-gradient-to-b from-[#13161f] to-[#0c0e14] border border-neutral-800/90 hover:border-neutral-700 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
              >
                <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-700/80 flex items-center justify-center text-[#E51920] mb-4 group-hover:bg-[#E51920] group-hover:text-white transition-colors duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold font-['Montserrat',sans-serif] text-white group-hover:text-[#E51920] transition-colors mb-2">
                  {diff.title}
                </h3>

                <p className="text-sm text-neutral-300 leading-relaxed">
                  {diff.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-12 bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <CreditCard className="w-8 h-8 text-[#E51920] flex-shrink-0" />
            <div>
              <h4 className="font-bold text-white text-sm">Facilidade na hora de pagar</h4>
              <p className="text-xs text-neutral-400">Aceitamos PIX, cartões de crédito e débito no local com maquininha sem taxas surpresas.</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-neutral-800 text-xs font-semibold rounded text-neutral-200">PIX</span>
            <span className="px-3 py-1 bg-neutral-800 text-xs font-semibold rounded text-neutral-200">Crédito</span>
            <span className="px-3 py-1 bg-neutral-800 text-xs font-semibold rounded text-neutral-200">Débito</span>
          </div>
        </div>

      </div>
    </section>
  );
}

