import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Shield, CheckCircle, ExternalLink } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { regionalCities, highwaysCovered, businessInfo } from '../data/content';

export default function ServiceArea() {
  const [activeCity, setActiveCity] = useState(regionalCities[0]);

  return (
    <section id="atendimento" className="py-20 lg:py-24 bg-[#0a0c10] text-white relative overflow-hidden">
      
      {/* Background Skyline with gradient blend */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img 
          src="/images/area-atendimento-bg-2x.jpg" 
          alt="Vista panorâmica Ribeirão Preto à noite" 
          className="w-full h-full object-cover object-center filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-[#0a0c10]/80 to-[#0a0c10]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#E51920]" />
            <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#E51920] uppercase font-['Montserrat',sans-serif]">
              ÁREA DE ATENDIMENTO
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black font-['Montserrat',sans-serif] tracking-tight text-white uppercase leading-tight">
            Ribeirão Preto e região
          </h2>

          <p className="mt-3 text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
            Chegamos até você com rapidez e segurança, onde quer que esteja. Atendemos todos os bairros de Ribeirão Preto e as principais cidades e rodovias vizinhas.
          </p>
        </div>

        {/* Interactive Map & City Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Interactive Regional Map Graphic (matching mockup layout) */}
          <div className="lg:col-span-7 bg-gradient-to-b from-[#13161c] to-[#0d0f14] rounded-2xl border border-neutral-800 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
              <div className="flex items-center gap-2">
                <Navigation className="w-5 h-5 text-[#E51920]" />
                <span className="font-bold text-sm tracking-wide text-neutral-200">
                  Radar de Cobertura Regional
                </span>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-red-950/60 border border-red-800/60 text-red-300">
                Raio de até 100km
              </span>
            </div>

            {/* Stylized Vector Radar Map */}
            <div className="relative w-full aspect-[16/10] bg-[#08090d] rounded-xl border border-neutral-800/80 p-4 flex items-center justify-center overflow-hidden">
              
              {/* Radar Rings */}
              <div className="absolute w-[80%] aspect-square rounded-full border border-neutral-800/60 pointer-events-none" />
              <div className="absolute w-[50%] aspect-square rounded-full border border-neutral-800/80 pointer-events-none" />
              <div className="absolute w-[25%] aspect-square rounded-full border border-red-500/20 pointer-events-none" />
              
              {/* Regional Silhouette Overlay (styled SVG representation) */}
              <svg viewBox="0 0 500 320" className="w-full h-full absolute inset-0 text-red-600/20 fill-current">
                {/* Stylized regional boundary shape */}
                <path d="M 120 70 Q 230 40 340 60 Q 420 120 400 220 Q 330 290 220 280 Q 110 260 90 170 Z" />
              </svg>

              {/* City Markers overlay */}
              {/* Ribeirão Preto (Center Hub) */}
              <button
                type="button"
                onClick={() => setActiveCity(regionalCities[0])}
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center group focus:outline-none transition-transform ${
                  activeCity.name === 'Ribeirão Preto' ? 'scale-110' : 'hover:scale-105'
                }`}
              >
                <div className="relative">
                  <span className="animate-ping absolute -inset-1 rounded-full bg-red-500 opacity-60"></span>
                  <div className="w-9 h-9 rounded-full bg-[#E51920] border-2 border-white flex items-center justify-center text-white shadow-lg">
                    <MapPin className="w-5 h-5 fill-white" />
                  </div>
                </div>
                <span className="mt-1 px-2.5 py-0.5 rounded bg-black/90 border border-red-600 text-[11px] font-bold text-white shadow">
                  Ribeirão Preto (Base)
                </span>
              </button>

              {/* Sertãozinho (Northwest) */}
              <button
                type="button"
                onClick={() => setActiveCity(regionalCities[1])}
                className="absolute top-[28%] left-[24%] z-20 flex flex-col items-center group focus:outline-none hover:scale-110 transition-transform"
              >
                <div className="w-5 h-5 rounded-full bg-neutral-800 border-2 border-red-500 flex items-center justify-center text-white shadow">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
                <span className="mt-0.5 px-2 py-0.5 rounded bg-black/80 border border-neutral-700 text-[10px] font-semibold text-neutral-200">
                  Sertãozinho
                </span>
              </button>

              {/* Jardinópolis (Northeast) */}
              <button
                type="button"
                onClick={() => setActiveCity(regionalCities[3])}
                className="absolute top-[22%] right-[28%] z-20 flex flex-col items-center group focus:outline-none hover:scale-110 transition-transform"
              >
                <div className="w-5 h-5 rounded-full bg-neutral-800 border-2 border-red-500 flex items-center justify-center text-white shadow">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
                <span className="mt-0.5 px-2 py-0.5 rounded bg-black/80 border border-neutral-700 text-[10px] font-semibold text-neutral-200">
                  Jardinópolis
                </span>
              </button>

              {/* Cravinhos (Southeast) */}
              <button
                type="button"
                onClick={() => setActiveCity(regionalCities[2])}
                className="absolute bottom-[20%] right-[32%] z-20 flex flex-col items-center group focus:outline-none hover:scale-110 transition-transform"
              >
                <div className="w-5 h-5 rounded-full bg-neutral-800 border-2 border-red-500 flex items-center justify-center text-white shadow">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
                <span className="mt-0.5 px-2 py-0.5 rounded bg-black/80 border border-neutral-700 text-[10px] font-semibold text-neutral-200">
                  Cravinhos
                </span>
              </button>

              {/* Bonfim Paulista (South) */}
              <button
                type="button"
                onClick={() => setActiveCity(regionalCities[6])}
                className="absolute bottom-[24%] left-[45%] z-20 flex flex-col items-center group focus:outline-none hover:scale-110 transition-transform"
              >
                <div className="w-4 h-4 rounded-full bg-neutral-800 border-2 border-red-400 flex items-center justify-center text-white shadow">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>
                <span className="mt-0.5 px-1.5 py-0.5 rounded bg-black/80 border border-neutral-700 text-[9px] font-semibold text-neutral-300">
                  Bonfim Paulista
                </span>
              </button>

              {/* Serrana (East) */}
              <button
                type="button"
                onClick={() => setActiveCity(regionalCities[4])}
                className="absolute top-[48%] right-[15%] z-20 flex flex-col items-center group focus:outline-none hover:scale-110 transition-transform"
              >
                <div className="w-4 h-4 rounded-full bg-neutral-800 border-2 border-red-400 flex items-center justify-center text-white shadow">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>
                <span className="mt-0.5 px-1.5 py-0.5 rounded bg-black/80 border border-neutral-700 text-[9px] font-semibold text-neutral-300">
                  Serrana
                </span>
              </button>

            </div>

            {/* Hint below map */}
            <p className="text-center text-xs text-neutral-400 mt-4">
              Clique em qualquer cidade no radar para consultar a previsão de socorro.
            </p>
          </div>

          {/* Right: Selected City Card & Highways */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            
            {/* Active City Detail Card */}
            <div className="bg-[#141822] rounded-2xl p-6 border border-neutral-800 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#E51920]">
                  Destino Selecionado
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-green-400 font-semibold bg-green-950/40 px-2.5 py-1 rounded-full border border-green-800/40">
                  <Clock className="w-3.5 h-3.5" />
                  Previsão: {activeCity.time}
                </span>
              </div>

              <h3 className="text-2xl font-black font-['Montserrat',sans-serif] text-white">
                {activeCity.name}
              </h3>
              
              <p className="text-sm text-neutral-300 mt-1 mb-4">
                {activeCity.isHub 
                  ? "Atendemos todos os bairros de Ribeirão Preto (Centro, Bonfim Paulista, Ipiranga, Campos Elíseos, Vila Virgínia, Quintino Facci, Jardim Botânico, Ribeirânia e condomínios)." 
                  : `Equipe de prontidão com rota direta para socorrer seu veículo em ${activeCity.name} com total segurança.`
                }
              </p>

              {/* Action Button for this location */}
              <a
                href={`https://wa.me/${businessInfo.phoneRaw}?text=${encodeURIComponent(`Olá! Preciso de um guincho urgente em ${activeCity.name}. Qual a previsão e valor?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold rounded-xl text-sm transition-all shadow-md active:scale-95 group"
              >
                <WhatsAppIcon className="w-4 h-4 text-white transition-transform group-hover:scale-110" />
                <span>Solicitar Guincho em {activeCity.name} via WhatsApp</span>
              </a>
            </div>

            {/* Quick City Selector Pill List */}
            <div className="bg-[#111319] rounded-2xl p-5 border border-neutral-800/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                Cidades com Socorro Frequente
              </h4>
              <div className="flex flex-wrap gap-2">
                {regionalCities.map((city) => (
                  <button
                    key={city.name}
                    type="button"
                    onClick={() => setActiveCity(city)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      activeCity.name === city.name
                        ? 'bg-[#E51920] text-white shadow-sm'
                        : 'bg-neutral-800/80 text-neutral-300 hover:text-white hover:bg-neutral-700'
                    }`}
                  >
                    {city.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Highways List */}
            <div className="bg-[#111319] rounded-2xl p-5 border border-neutral-800/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#E51920]" />
                Atendimento em Rodovias da Região
              </h4>
              <ul className="space-y-2 text-xs text-neutral-300">
                {highwaysCovered.slice(0, 3).map((hw) => (
                  <li key={hw.name} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E51920]" />
                    <span className="font-semibold text-white">{hw.name}:</span>
                    <span className="text-neutral-400">{hw.desc}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

