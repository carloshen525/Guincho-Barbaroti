import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { faqs, businessInfo } from '../data/content';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="duvidas" className="py-20 lg:py-24 bg-[#0a0c10] text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#E51920]" />
            <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#E51920] uppercase font-['Montserrat',sans-serif]">
              DÚVIDAS FREQUENTES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black font-['Montserrat',sans-serif] tracking-tight text-white uppercase leading-tight">
            Perguntas Frequentes
          </h2>

          <p className="mt-3 text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
            Tire suas dúvidas sobre o socorro de guincho 24 horas em Ribeirão Preto e região.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-neutral-800 bg-[#12151d] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold font-['Montserrat',sans-serif] text-neutral-100 flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#E51920] flex-shrink-0" />
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-neutral-800/80 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#E51920] text-white' : 'text-neutral-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-sm sm:text-base text-neutral-300 leading-relaxed border-t border-neutral-800/60 mt-1">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="mt-12 p-6 rounded-2xl bg-neutral-900 border border-neutral-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-white text-base">Ainda com alguma dúvida?</h4>
            <p className="text-xs text-neutral-400 mt-0.5">
              Nossa equipe está disponível 24 horas no WhatsApp e telefone para te atender.
            </p>
          </div>
          <a
            href={businessInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold rounded-xl text-sm transition-all shadow-md active:scale-95 flex-shrink-0"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>Tirar Dúvida no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}

