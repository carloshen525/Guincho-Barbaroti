import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import Logo from './Logo';
import WhatsAppIcon from './WhatsAppIcon';
import { businessInfo, navLinks } from '../data/content';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link detection
      const sections = ['inicio', 'servicos', 'atendimento', 'sobre', 'diferenciais', 'duvidas', 'contato'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0b0d11]/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-neutral-800/80 py-2.5 sm:py-3' 
          : 'bg-[#0b0d11] border-b border-neutral-800/50 py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <a href="#inicio" className="group focus:outline-none focus:ring-2 focus:ring-red-500 rounded-lg p-1">
            <Logo />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative px-3.5 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                    isActive 
                      ? 'text-white font-semibold' 
                      : 'text-neutral-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#E51920] rounded-full shadow-[0_0_8px_#E51920]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Header CTAs (Desktop) */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Ligar Agora Button */}
            <a
              href={businessInfo.phoneCallUrl}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#E51920] hover:bg-[#c91218] active:scale-95 text-white font-bold text-xs sm:text-sm rounded-lg transition-all shadow-md shadow-red-950/40 hover:shadow-red-700/30 group"
              title="Ligar agora para o Guincho"
            >
              <Phone className="w-4 h-4 fill-white transition-transform group-hover:rotate-12" />
              <span>Ligar Agora</span>
            </a>

            {/* WhatsApp Button */}
            <a
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#22C55E] hover:bg-[#16A34A] active:scale-95 text-white font-bold text-xs sm:text-sm rounded-lg transition-all shadow-md shadow-emerald-950/40 hover:shadow-emerald-700/30 group"
              title="Chamar no WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 text-white transition-transform group-hover:scale-110" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={businessInfo.phoneCallUrl}
              className="p-2 bg-[#E51920] text-white rounded-lg active:scale-95 shadow-sm"
              aria-label="Ligar agora"
            >
              <Phone className="w-4 h-4 fill-white" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-lg focus:outline-none"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0c0e12] border-b border-neutral-800 px-4 pt-3 pb-6 animate-fadeIn">
          <nav className="flex flex-col space-y-2 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-800/80 font-medium text-base transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-neutral-800">
            <a
              href={businessInfo.phoneCallUrl}
              className="flex items-center justify-center gap-2 py-3 bg-[#E51920] active:bg-[#c91218] text-white font-bold text-sm rounded-lg shadow-sm"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Ligar Agora</span>
            </a>
            <a
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 bg-[#22C55E] active:bg-[#16A34A] text-white font-bold text-sm rounded-lg shadow-sm"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

