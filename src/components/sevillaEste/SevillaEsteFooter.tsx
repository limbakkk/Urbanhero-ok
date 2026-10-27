import React from 'react';
import { MapPin, Phone, Instagram, ExternalLink, ArrowLeft, ArrowUpRight } from 'lucide-react';
import { LegalModalType } from '../LegalModals';

interface SevillaEsteFooterProps {
  onNavigateHome: () => void;
  onNavigateToElPino?: () => void;
  onOpenLegal: (type: LegalModalType) => void;
  onOpenCookieSettings: () => void;
  onOpenTrial: () => void;
}

export const SevillaEsteFooter: React.FC<SevillaEsteFooterProps> = ({
  onNavigateHome,
  onNavigateToElPino,
  onOpenLegal,
  onOpenCookieSettings,
  onOpenTrial,
}) => {
  return (
    <footer className="bg-[#030c18] border-t border-cyan-500/20 text-slate-300 relative overflow-hidden">
      
      {/* Top Banner */}
      <div className="border-b border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            
            {/* Col 1: Brand & Logo */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-16 rounded-lg overflow-hidden p-0.5 bg-gradient-to-br from-[#00d2ff] via-[#1a3e68] to-[#061325] shadow-lg shadow-cyan-500/20 shrink-0 flex items-center justify-center">
                  <img
                    src="/assets/aistudio/file_00000000795c8246879a8de59dd2cd7c_cc6cda2f.png"
                    alt="Logo oficial Urban Hero Sevilla Este"
                    className="w-full h-full object-contain object-center rounded-sm"
                  />
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.25em] text-cyan-400 uppercase font-semibold block leading-none">
                    Entrenamiento Funcional
                  </span>
                  <span className="text-2xl font-black tracking-wider text-white uppercase font-heading">
                    Urban Hero Sevilla Este
                  </span>
                  <span className="text-[10px] text-slate-400 block tracking-widest uppercase">
                    Hotel Vértice • Sevilla
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Centro enfocado al entrenamiento funcional, HIIT y salud postural en grupos reducidos de Urban Hero Training Center en Sevilla Este.
              </p>

              <div className="pt-1">
                <button
                  type="button"
                  onClick={onNavigateHome}
                  className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-bold uppercase tracking-wider group"
                >
                  <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                  <span>Volver a Sede Central Urban Hero</span>
                </button>
              </div>
            </div>

            {/* Col 2: Navigation Links */}
            <div className="space-y-3">
              <h4 className="text-sm font-black text-white font-heading uppercase tracking-wide">
                Navegación Sevilla Este
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li><a href="#disciplinas" className="hover:text-cyan-400 transition-colors">Disciplinas Funcionales</a></li>
                <li><a href="#horarios" className="hover:text-cyan-400 transition-colors">Horarios Semanales</a></li>
                <li><a href="#coaches" className="hover:text-cyan-400 transition-colors">Equipo de Coaches</a></li>
                <li><a href="#tarifas" className="hover:text-cyan-400 transition-colors">Tarifas y Bonos</a></li>
                <li><a href="#galeria" className="hover:text-cyan-400 transition-colors">Galería e Instalaciones</a></li>
                <li><a href="#contacto" className="hover:text-cyan-400 transition-colors">Ubicación y Cómo Llegar</a></li>
                <li><a href="#faq" className="hover:text-cyan-400 transition-colors">Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Col 3: Sede Hermana El Pino & WodBuster */}
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-black text-white font-heading uppercase tracking-wide mb-2">
                  Nuestros Gimnasios
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-black/30 border border-white/5">
                    <span className="font-bold text-white block">Urban Hero Sevilla Este (Esta sede)</span>
                    <span className="text-[11px] text-cyan-300">Hotel Vértice • Entrenamiento Funcional</span>
                  </div>

                  {onNavigateToElPino ? (
                    <button
                      type="button"
                      onClick={onNavigateToElPino}
                      className="w-full p-2.5 rounded-lg bg-black/20 hover:bg-black/40 border border-white/5 flex items-center justify-between group transition-colors text-left"
                    >
                      <div>
                        <span className="font-bold text-slate-200 group-hover:text-cyan-300 block">Urban Hero El Pino</span>
                        <span className="text-[11px] text-slate-400">Polígono El Pino • Box de CrossTraining</span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-cyan-400 shrink-0" />
                    </button>
                  ) : (
                    <a
                      href="/urban-hero-el-pino"
                      className="p-2.5 rounded-lg bg-black/20 hover:bg-black/40 border border-white/5 flex items-center justify-between group transition-colors block"
                    >
                      <div>
                        <span className="font-bold text-slate-200 group-hover:text-cyan-300 block">Urban Hero El Pino</span>
                        <span className="text-[11px] text-slate-400">Polígono El Pino • Box de CrossTraining</span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-cyan-400 shrink-0" />
                    </a>
                  )}
                </div>
              </div>

              <div>
                <span className="text-xs text-slate-400 block mb-1">Plataforma de Reservas:</span>
                <a
                  href="https://urbanhero.wodbuster.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-cyan-400 hover:text-cyan-300 underline font-semibold flex items-center gap-1"
                >
                  <span>Acceso Socios WodBuster</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Col 4: Contact & Social */}
            <div className="space-y-3">
              <h4 className="text-sm font-black text-white font-heading uppercase tracking-wide">
                Contacto Directo
              </h4>
              <p className="text-xs text-slate-400 flex items-start gap-1.5 leading-relaxed">
                <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                <span>Hotel Vértice, Av. de la Aeronáutica s/n, 41020 Sevilla</span>
              </p>
              <p className="text-xs text-slate-300 flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <a href="https://wa.me/34623069966" className="font-mono text-cyan-300 hover:underline">
                  +34 623 06 99 66
                </a>
              </p>
              <div className="pt-1">
                <a
                  href="https://www.instagram.com/urbanherosevillaeste/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-pink-400 hover:text-pink-300"
                >
                  <Instagram className="w-4 h-4" />
                  <span>@urbanherosevillaeste</span>
                </a>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenTrial}
                  className="w-full py-2 px-3 rounded-lg bg-[#00d2ff] hover:bg-cyan-300 text-[#061325] font-black text-xs uppercase tracking-wider transition-colors"
                >
                  Solicitar 2 Clases Gratis
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className="py-6 bg-[#02070f] text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p>
              © {new Date().getFullYear()} Urban Hero Sevilla Este • Urban Hero Training Center. Sevilla, España.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-slate-400">
            <button
              onClick={() => onOpenLegal('aviso-legal')}
              className="hover:text-cyan-300 transition-colors focus:outline-none"
            >
              Aviso Legal
            </button>
            <span className="text-slate-700">•</span>
            <button
              onClick={() => onOpenLegal('privacidad')}
              className="hover:text-cyan-300 transition-colors focus:outline-none"
            >
              Política de Privacidad
            </button>
            <span className="text-slate-700">•</span>
            <button
              onClick={() => onOpenLegal('cookies')}
              className="hover:text-cyan-300 transition-colors focus:outline-none"
            >
              Política de Cookies
            </button>
            <span className="text-slate-700">•</span>
            <button
              onClick={onOpenCookieSettings}
              className="hover:text-cyan-300 transition-colors text-cyan-400 underline font-medium focus:outline-none"
            >
              Preferencias de Cookies
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
};
