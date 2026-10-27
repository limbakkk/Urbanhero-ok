import React from 'react';
import { MapPin, Phone, Instagram, ExternalLink, Dumbbell, Shield, Cookie, Lock, Sparkles, Heart } from 'lucide-react';
import { GYMS } from '../data/gymData';
import { LegalModalType } from './LegalModals';

interface FooterProps {
  onOpenLegal: (type: LegalModalType) => void;
  onOpenCookieSettings: () => void;
  onOpenTrial: (gymId?: 'el-pino' | 'sevilla-este') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal, onOpenCookieSettings, onOpenTrial }) => {
  return (
    <footer className="bg-[#030d1a] border-t border-cyan-500/20 text-slate-300 relative overflow-hidden">
      
      {/* Top Brand Strip */}
      <div className="border-b border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            
            {/* Column 1: Brand & 3D Logo Identity */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-16 rounded-lg overflow-hidden p-0.5 bg-gradient-to-br from-[#00d2ff] via-[#1a3e68] to-[#061325] shadow-lg shadow-cyan-500/20 shrink-0 flex items-center justify-center">
                  <img
                    src="/assets/aistudio/file_00000000795c8246879a8de59dd2cd7c_cc6cda2f.png"
                    alt="Logo oficial Urban Hero Training Center"
                    className="w-full h-full object-contain object-center rounded-sm"
                  />
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.25em] text-cyan-400 uppercase font-semibold block leading-none">
                    Training Center
                  </span>
                  <span className="text-2xl font-black tracking-wider text-white uppercase font-heading">
                    Urban Hero
                  </span>
                  <span className="text-[10px] text-slate-400 block tracking-widest uppercase">
                    Sevilla • España
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                La marca matriz que conecta y lidera la comunidad de CrossTraining, Halterofilia y Entrenamiento Funcional en Sevilla a través de sus dos centros especializados.
              </p>

              {/* Direct WhatsApp Contact */}
              <div className="pt-2 flex items-center gap-2 text-xs text-white">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Atención central / WhatsApp:</span>
                <a
                  href="https://wa.me/34623069966"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-cyan-400 hover:text-cyan-300 underline"
                >
                  +34 623 06 99 66
                </a>
              </div>
            </div>

            {/* Column 2: Urban Hero El Pino */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Dumbbell className="w-4 h-4 text-cyan-400" />
                <h4 className="text-sm font-black text-white font-heading uppercase tracking-wide">
                  Urban Hero El Pino
                </h4>
              </div>
              <span className="text-[11px] font-bold text-cyan-400 block uppercase">
                CrossTraining & Halterofilia
              </span>
              <p className="text-xs text-slate-400 flex items-start gap-1.5 leading-relaxed">
                <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                <span>Polígono Industrial El Pino, C/ Pino Doncel, 10, 41016 Sevilla</span>
              </p>
              <div className="space-y-1.5 pt-1 text-xs">
                <a
                  href="https://urbanherotrainingcenter.com/urban-hero-el-pino/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 group"
                >
                  <span>Sitio Web Oficial de El Pino</span>
                  <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a
                  href="https://www.instagram.com/urbanheroelpino/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-pink-400 flex items-center gap-1"
                >
                  <Instagram className="w-3 h-3 text-pink-400" />
                  <span>@urbanheroelpino</span>
                </a>
              </div>
            </div>

            {/* Column 3: Urban Hero Sevilla Este */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Dumbbell className="w-4 h-4 text-cyan-400" />
                <h4 className="text-sm font-black text-white font-heading uppercase tracking-wide">
                  Urban Hero Sevilla Este
                </h4>
              </div>
              <span className="text-[11px] font-bold text-cyan-400 block uppercase">
                Entrenamiento Funcional
              </span>
              <p className="text-xs text-slate-400 flex items-start gap-1.5 leading-relaxed">
                <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                <span>Hotel Vértice, Avenida de la Aeronáutica, 5, 1.º 6, 41020 Sevilla</span>
              </p>
              <div className="space-y-1.5 pt-1 text-xs">
                <a
                  href="https://urbanherotrainingcenter.com/urban-hero-sevilla-este/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 group"
                >
                  <span>Sitio Web Oficial de Sevilla Este</span>
                  <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a
                  href="https://www.instagram.com/urbanherosevillaeste/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-pink-400 flex items-center gap-1"
                >
                  <Instagram className="w-3 h-3 text-pink-400" />
                  <span>@urbanherosevillaeste</span>
                </a>
              </div>
            </div>

            {/* Column 4: Quick Navigation & Trial */}
            <div className="space-y-3">
              <h4 className="text-sm font-black text-white font-heading uppercase tracking-wide">
                Navegación
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">Inicio</a>
                </li>
                <li>
                  <a href="#gimnasios" className="hover:text-cyan-400 transition-colors">Nuestros Gimnasios</a>
                </li>
                <li>
                  <a href="#metodologia" className="hover:text-cyan-400 transition-colors">Metodología</a>
                </li>
                <li>
                  <a href="#valores" className="hover:text-cyan-400 transition-colors">Valores</a>
                </li>
                <li>
                  <a href="#noticias" className="hover:text-cyan-400 transition-colors">Noticias</a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-cyan-400 transition-colors">Preguntas Frecuentes</a>
                </li>
              </ul>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onOpenTrial()}
                  className="px-3 py-1.5 rounded-lg bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 hover:bg-cyan-500 hover:text-black font-bold text-[11px] uppercase tracking-wider transition-all"
                >
                  Pase 2 Clases Gratis
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Legal & Compliance Bottom Bar */}
      <div className="py-6 bg-[#020811] text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="text-center md:text-left">
            <p>
              © {new Date().getFullYear()} Urban Hero Training Center. Todos los derechos reservados. Sevilla, España.
            </p>
          </div>

          {/* Legal Pages Links */}
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
