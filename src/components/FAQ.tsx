import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageSquare, Instagram } from 'lucide-react';
import { FAQ_LIST } from '../data/gymData';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative bg-[#07162b] border-t border-cyan-500/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <span className="text-xs font-bold tracking-[0.25em] text-[#00d2ff] uppercase block">
            Dudas Frecuentes
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading tracking-wide">
            Preguntas Frecuentes
          </h2>
          <p className="text-sm text-slate-300">
            Todo lo que necesitas saber antes de tu primera sesión de prueba en Urban Hero Sevilla.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_LIST.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden bg-[#091f3a] border border-cyan-500/20 transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
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

        {/* Dedicated Link to Existing Instagram Section */}
        <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#833ab4]/10 via-[#fd1d1d]/10 to-[#fcb045]/10 border border-pink-500/25 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 shrink-0">
              <Instagram className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-white uppercase tracking-wider block">
                Comunidad y Publicaciones Oficiales
              </span>
              <p className="text-xs text-slate-300">
                Descubre el ambiente diario, entrenamientos y novedades en nuestro carrusel de Instagram.
              </p>
            </div>
          </div>
          <a
            href="#instagram"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-95 text-white font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-pink-500/20 transition-transform hover:scale-105 shrink-0"
          >
            <Instagram className="w-4 h-4" />
            <span>Ver Publicaciones en Instagram</span>
          </a>
        </div>

        {/* Contact Help Strip */}
        <div className="mt-6 p-6 rounded-2xl bg-black/30 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              ¿Tienes otra duda específica?
            </span>
            <p className="text-xs text-slate-400">
              Escríbenos directamente y te responderá uno de nuestros entrenadores en Sevilla.
            </p>
          </div>
          <a
            href="https://wa.me/34623069966?text=Hola,%20tengo%20una%20duda%20sobre%20Urban%20Hero%20Training%20Center"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 transition-transform hover:scale-105 shrink-0"
          >
            <MessageSquare className="w-4 h-4 fill-black" />
            <span>Hablar por WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
