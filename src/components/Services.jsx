import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Shield } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { vehiclesServed, businessInfo } from '../data/content';

export default function Services() {
  const [selectedVehicle, setSelectedVehicle] = useState(vehiclesServed[0]);

  return (
    <section id="servicos" className="py-20 lg:py-24 bg-white text-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#E51920]" />
            <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#E51920] uppercase font-['Montserrat',sans-serif]">
              NOSSOS SERVIÇOS
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-black font-['Montserrat',sans-serif] tracking-tight text-neutral-900 leading-tight">
            Transporte seguro para veículos de todos os portes
          </h2>
          
          <p className="mt-3 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
            Guincho plataforma, reboque e transporte de veículos com toda a segurança e agilidade que você precisa.
          </p>
        </div>

        {/* 6 Vehicle Category Cards Grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
          {vehiclesServed.map((vehicle) => {
            const isSelected = selectedVehicle.id === vehicle.id;
            return (
              <div
                key={vehicle.id}
                onClick={() => setSelectedVehicle(vehicle)}
                className={`group cursor-pointer rounded-2xl p-4 flex flex-col items-center justify-between text-center transition-all duration-300 border ${
                  isSelected
                    ? 'bg-neutral-50 border-[#E51920] shadow-lg shadow-red-500/10 scale-[1.02]'
                    : 'bg-white hover:bg-neutral-50/80 border-neutral-200 hover:border-neutral-300 hover:shadow-md'
                }`}
              >
                {/* Vehicle Thumbnail */}
                <div className="w-full h-24 sm:h-28 flex items-center justify-center p-2 rounded-xl bg-neutral-100/70 mb-3 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={vehicle.image}
                    alt={`Guincho para ${vehicle.name} em Ribeirão Preto`}
                    className="max-h-full max-w-full object-contain filter drop-shadow-sm"
                    loading="lazy"
                  />
                </div>

                {/* Title */}
                <div className="w-full">
                  <h3 className="font-['Montserrat',sans-serif] font-bold text-base sm:text-lg text-neutral-900 mb-1">
                    {vehicle.name}
                  </h3>
                  <span className={`inline-block text-[11px] font-semibold transition-colors ${
                    isSelected ? 'text-[#E51920]' : 'text-neutral-500 group-hover:text-neutral-800'
                  }`}>
                    {isSelected ? 'Selecionado' : 'Ver detalhes'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Detail Box for Selected Vehicle */}
        <div className="mt-8 bg-neutral-900 text-white rounded-2xl p-6 sm:p-8 border border-neutral-800 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            <div className="md:col-span-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-md bg-[#E51920] text-xs font-bold uppercase tracking-wider">
                  Modalidade
                </span>
                <h4 className="text-xl sm:text-2xl font-black font-['Montserrat',sans-serif] text-white">
                  Guincho para {selectedVehicle.name}
                </h4>
              </div>
              
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mt-2">
                {selectedVehicle.description} Equipamento 100% revisado, com amarração por cintas acolchoadas, guincho elétrico reforçado e operador treinado para evitar qualquer dano ao veículo durante o carregamento e descarregamento.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 text-xs font-medium text-neutral-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Plataforma basculante hidráulica</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Cintas de alta resistência</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Chegada rápida no local</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-2.5">
              <a
                href={`https://wa.me/${businessInfo.phoneRaw}?text=${encodeURIComponent(selectedVehicle.whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3.5 bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold rounded-xl text-sm transition-all shadow-md active:scale-95 group"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Pedir Guincho p/ {selectedVehicle.name}</span>
              </a>

              <a
                href={businessInfo.phoneCallUrl}
                className="flex items-center justify-center gap-2 px-5 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold rounded-xl text-sm transition-all border border-neutral-700"
              >
                <span>Ou ligue: {businessInfo.phoneDisplay}</span>
              </a>
            </div>

          </div>
        </div>

        {/* Extra Service Guarantees */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-neutral-200">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E51920] flex items-center justify-center flex-shrink-0 font-bold">
              1
            </div>
            <div>
              <h5 className="font-bold text-neutral-900 text-sm">Socorro Imediato</h5>
              <p className="text-xs text-neutral-600 mt-0.5">
                Acionamento direto com o motorista para deslocamento instantâneo.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E51920] flex items-center justify-center flex-shrink-0 font-bold">
              2
            </div>
            <div>
              <h5 className="font-bold text-neutral-900 text-sm">Cuidado com seu Veículo</h5>
              <p className="text-xs text-neutral-600 mt-0.5">
                Carga e descarga seguras para automáticos, 4x4 e rebaixados.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E51920] flex items-center justify-center flex-shrink-0 font-bold">
              3
            </div>
            <div>
              <h5 className="font-bold text-neutral-900 text-sm">Transparência Total</h5>
              <p className="text-xs text-neutral-600 mt-0.5">
                Preço fixado no atendimento sem cobrança surpresa ao chegar.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

