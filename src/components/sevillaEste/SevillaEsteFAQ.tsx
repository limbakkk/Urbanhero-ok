import React, { useState } from 'react';
import { ChevronDown, MessageSquare } from 'lucide-react';
import { SEVILLA_ESTE_FAQS } from '../../data/sevillaEsteData';

export const SevillaEsteFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 relative bg-[#061427] border-t border-cyan-500/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <span className="text-xs font-bold tracking-[0.25em] text-[#00d2ff] uppercase block">
            Preguntas Frecuentes
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading tracking-wide">
            Dudas sobre Urban Hero Sevilla Este
          </h2>
          <p className="text-sm text-slate-300">
            Todo sobre los grupos reducidos, el acceso a Hotel Vértice y tus 2 clases de prueba gratuitas.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {SEVILLA_ESTE_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden bg-[#091f3a] border border-cyan-500/20 transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-cyan-500 text-[#061325]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-black/30 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              ¿Tienes una lesión previa o duda médica?
            </span>
            <p className="text-xs text-slate-400">
              Consulta con nuestros entrenadores de Sevilla Este antes de acudir.
            </p>
          </div>
          <a
            href="https://wa.me/34623069966?text=Hola,%20tengo%20una%20duda%20sobre%20las%20clases%20en%20Sevilla%20Este"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 transition-transform hover:scale-105 shrink-0"
          >
            <MessageSquare className="w-4 h-4 fill-black" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
