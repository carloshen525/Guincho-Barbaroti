import React from 'react';
import { Phone, MapPin, Clock, Shield, AlertCircle } from 'lucide-react';
import Logo from './Logo';
import WhatsAppIcon from './WhatsAppIcon';
import { businessInfo, navLinks, vehiclesServed } from '../data/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#07080a] text-neutral-400 text-sm border-t border-neutral-800/80 pt-16 pb-28 sm:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-neutral-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <a href="#inicio" className="inline-block mb-4">
              <Logo size="normal" />
            </a>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Serviço profissional de guincho plataforma 24 horas em Ribeirão Preto e macrorregião. Atendimento emergencial rápido, seguro e com preço justo para carros, motos, utilitários e caminhões leves.
            </p>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-800/40 text-emerald-400 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Plantão 24 Horas Ativo
              </span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-['Montserrat',sans-serif]">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services list */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-['Montserrat',sans-serif]">
              Serviços de Guincho
            </h4>
            <ul className="space-y-2.5">
              {vehiclesServed.map((v) => (
                <li key={v.id}>
                  <a
                    href="#servicos"
                    className="hover:text-white transition-colors"
                  >
                    Guincho para {v.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="#atendimento" className="hover:text-white transition-colors">
                  Socorro em Rodovias (SP-330, SP-334)
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Address */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-['Montserrat',sans-serif]">
              Atendimento Imediato
            </h4>
            
            <div className="space-y-3">
              <a
                href={businessInfo.phoneCallUrl}
                className="flex items-center gap-3 text-white hover:text-[#E51920] font-bold text-base transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#E51920] flex items-center justify-center flex-shrink-0 text-white">
                  <Phone className="w-4 h-4 fill-white" />
                </div>
                <span>{businessInfo.phoneDisplay}</span>
              </a>

              <a
                href={businessInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white hover:text-green-400 font-bold text-base transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#22C55E] flex items-center justify-center flex-shrink-0 text-white">
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                </div>
                <span>{businessInfo.phoneDisplay}</span>
              </a>

              <div className="flex items-start gap-3 text-xs text-neutral-400 pt-2">
                <MapPin className="w-4 h-4 text-[#E51920] flex-shrink-0 mt-0.5" />
                <span>{businessInfo.addressNotes}</span>
              </div>

              <div className="flex items-center gap-3 text-xs text-neutral-400">
                <Clock className="w-4 h-4 text-[#E51920] flex-shrink-0" />
                <span>{businessInfo.availability}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Transparent Pending Client Data Notice */}
        <div className="py-6 border-b border-neutral-900 bg-neutral-950/40 rounded-xl px-4 my-6">
          <div className="flex items-start gap-2.5 text-xs text-neutral-400">
            <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-semibold text-neutral-300">
                Dados cadastrais identificados para preenchimento posterior pelo proprietário:
              </p>
              <p>• <strong>CNPJ:</strong> {businessInfo.pendingInfo.cnpj}</p>
              <p>• <strong>Endereço da Base Operacional:</strong> {businessInfo.pendingInfo.enderecoBase}</p>
              <p>• <strong>E-mail de Contato:</strong> {businessInfo.pendingInfo.email}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {currentYear} Guincho Barbaroti — Ribeirão Preto e Região. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1.5 text-neutral-400">
            <span>Desenvolvido com foco em alta conversão e carregamento rápido.</span>
          </p>
        </div>

      </div>
    </footer>
  );
}

