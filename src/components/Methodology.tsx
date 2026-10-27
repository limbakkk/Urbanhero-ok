import React from 'react';
import { Activity, ShieldCheck, Users, Award, CheckCircle2 } from 'lucide-react';
import { METHODOLOGY_PILLARS } from '../data/gymData';

export const Methodology: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Activity':
        return <Activity className="w-6 h-6 text-[#00d2ff]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#00d2ff]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#00d2ff]" />;
      case 'Award':
        return <Award className="w-6 h-6 text-[#00d2ff]" />;
      default:
        return <Activity className="w-6 h-6 text-[#00d2ff]" />;
    }
  };

  return (
    <section id="metodologia" className="py-20 relative bg-[#061325]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-[0.25em] text-[#00d2ff] uppercase block">
            Filosofía de Entrenamiento Compartida
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading tracking-wide">
            Nuestra Metodología
          </h2>
          <p className="text-base text-slate-300">
            En Urban Hero no creemos en rutinas masificadas ni en improvisar. Ambos centros comparten un método riguroso fundamentado en la biomecánica, la técnica depurada y el cuidado de cada deportista.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {METHODOLOGY_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-gradient-to-b from-[#0a2342] to-[#07192f] border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                  {getIcon(pillar.iconName)}
                </div>
                <h3 className="text-xl font-bold text-white font-heading uppercase tracking-wide mb-1 group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h3>
                <span className="text-xs font-semibold text-cyan-400 block mb-3">
                  {pillar.subtitle}
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-[11px] text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Aplicado en El Pino y Sevilla Este</span>
              </div>
            </div>
          ))}
        </div>

        {/* Structure of a Class Bar */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#091f3a] border border-cyan-500/20">
          <h3 className="text-center text-lg sm:text-xl font-bold text-white uppercase font-heading tracking-wider mb-6">
            Estructura de una Sesión en Urban Hero
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-xl bg-black/25 border border-white/5">
              <span className="text-2xl font-black text-cyan-400 font-heading block">01</span>
              <span className="text-xs font-bold text-white uppercase block mt-1">Warm-Up Específico</span>
              <p className="text-[11px] text-slate-400 mt-1">Activación articular, core y preparación neuromuscular sin prisa.</p>
            </div>
            <div className="p-4 rounded-xl bg-black/25 border border-white/5">
              <span className="text-2xl font-black text-cyan-400 font-heading block">02</span>
              <span className="text-xs font-bold text-white uppercase block mt-1">Técnica / Fuerza</span>
              <p className="text-[11px] text-slate-400 mt-1">Progresión guiada de movimientos, posturas o levantamientos con feedback en vivo.</p>
            </div>
            <div className="p-4 rounded-xl bg-black/25 border border-white/5">
              <span className="text-2xl font-black text-cyan-400 font-heading block">03</span>
              <span className="text-xs font-bold text-white uppercase block mt-1">Workout del Día</span>
              <p className="text-[11px] text-slate-400 mt-1">Acondicionamiento metabólico con intensidad adaptada a cada rango físico.</p>
            </div>
            <div className="p-4 rounded-xl bg-black/25 border border-white/5">
              <span className="text-2xl font-black text-cyan-400 font-heading block">04</span>
              <span className="text-xs font-bold text-white uppercase block mt-1">Cool Down & Feedback</span>
              <p className="text-[11px] text-slate-400 mt-1">Vuelta a la calma, movilidad compensatoria y análisis de sensaciones con el coach.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
