import React from 'react';
import { ExternalLink, Dumbbell, Activity, ChevronRight, MapPin } from 'lucide-react';

interface SisterGymCrossLinkProps {
  currentGym: 'el-pino' | 'sevilla-este';
  onNavigateToOtherGym?: () => void;
}

export const SisterGymCrossLink: React.FC<SisterGymCrossLinkProps> = ({
  currentGym,
  onNavigateToOtherGym,
}) => {
  const isElPino = currentGym === 'el-pino';

  const otherGymName = isElPino ? 'Urban Hero Sevilla Este' : 'Urban Hero El Pino';
  const otherGymTitle = isElPino
    ? '¿Buscas Entrenamiento Funcional y Salud Postural?'
    : '¿Buscas CrossTraining, Halterofilia Oficial y Open Box?';
  const otherGymDesc = isElPino
    ? 'En nuestra sede de Sevilla Este (Hotel Vértice) entrenamos en grupos reducidos de 10 a 12 plazas con supervisión cercana, acondicionamiento metabólico y sin las exigencias técnicas de la barra olímpica pesada.'
    : 'En nuestra sede de El Pino disponemos de nave homologada, estructura de anillas, tarimas de levantamiento IWF, programación para competición y zona Open Box climatizada.';
  const otherGymAddress = isElPino
    ? 'Hotel Vértice • Av. de la Aeronáutica, 5'
    : 'Polígono Industrial El Pino • C/ Pino Doncel, 10';
  const otherGymBadge = isElPino
    ? 'Entrenamiento Funcional & Salud'
    : 'Box Oficial de CrossTraining';
  const fallbackUrl = isElPino ? '/urban-hero-sevilla-este' : '/urban-hero-el-pino';

  return (
    <section className="py-12 sm:py-16 lg:py-24 mb-6 sm:mb-8 lg:mb-24 relative bg-[#051121] border-y border-cyan-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#0a2342] via-[#07192f] to-[#040e1b] border-2 border-cyan-500/30 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            {/* Left Content */}
            <div className="space-y-4 max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                {isElPino ? <Activity className="w-3.5 h-3.5" /> : <Dumbbell className="w-3.5 h-3.5" />}
                <span>Nuestra Otra Sede en Sevilla • {otherGymBadge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-white font-heading tracking-wide leading-snug">
                {otherGymTitle}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {otherGymDesc}
              </p>

              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-cyan-400 font-medium pt-1">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{otherGymAddress}</span>
              </div>
            </div>

            {/* Right Action */}
            <div className="shrink-0 w-full sm:w-auto text-center">
              {onNavigateToOtherGym ? (
                <button
                  type="button"
                  onClick={onNavigateToOtherGym}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#00d2ff] via-[#0284c7] to-[#0369a1] hover:from-cyan-300 hover:to-[#0284c7] text-[#061325] font-black text-sm uppercase tracking-wider shadow-xl shadow-cyan-500/25 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Conoce {otherGymName}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              ) : (
                <a
                  href={fallbackUrl}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#00d2ff] via-[#0284c7] to-[#0369a1] hover:from-cyan-300 hover:to-[#0284c7] text-[#061325] font-black text-sm uppercase tracking-wider shadow-xl shadow-cyan-500/25 hover:scale-105 active:scale-95 transition-all inline-flex items-center justify-center gap-2 group"
                >
                  <span>Conoce {otherGymName}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              )}
              <span className="block text-[11px] text-slate-400 mt-2 font-medium">
                Perteneciente a la red oficial Urban Hero Training Center
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
