import React from 'react';
import { Heart, Target, Shield, TrendingUp, Sparkles, Trophy } from 'lucide-react';
import { BRAND_VALUES } from '../data/gymData';

export const Values: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Heart className="w-5 h-5 text-cyan-400" />;
      case 1:
        return <Target className="w-5 h-5 text-cyan-400" />;
      case 2:
        return <Shield className="w-5 h-5 text-cyan-400" />;
      case 3:
        return <TrendingUp className="w-5 h-5 text-cyan-400" />;
      case 4:
        return <Trophy className="w-5 h-5 text-cyan-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="valores" className="py-20 relative bg-[#07172e] border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-[0.25em] text-[#00d2ff] uppercase block">
            El ADN de Urban Hero
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading tracking-wide">
            Nuestros Valores
          </h2>
          <p className="text-base text-slate-300">
            Más que dos centros de entrenamiento físico en Sevilla, somos una comunidad guiada por principios firmes de respeto, esfuerzo y superación honesta.
          </p>
        </div>

        {/* 5 Values Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BRAND_VALUES.map((val, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 rounded-2xl bg-[#09203d] border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 group flex flex-col justify-between ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 group-hover:scale-110 transition-transform">
                    {getIcon(idx)}
                  </div>
                  <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30">
                    {val.highlight}
                  </span>
                </div>

                <h3 className="text-xl font-black text-white font-heading uppercase tracking-wide mb-2 group-hover:text-cyan-300 transition-colors">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {val.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-cyan-400 font-semibold uppercase tracking-wider">
                <span>Espíritu Urban Hero</span>
              </div>
            </div>
          ))}
        </div>

        {/* Community Banner Quote */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-[#061830] via-[#0d2a4f] to-[#061830] border border-cyan-500/30 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase font-bold tracking-[0.3em] text-cyan-400">
              Cultura de Box
            </span>
            <blockquote className="text-lg sm:text-2xl font-black text-white font-heading uppercase tracking-wide leading-snug">
              "Aquí no importa con cuántos kilos empiezas, sino la honestidad con la que dejas tu esfuerzo en cada entreno."
            </blockquote>
            <p className="text-xs text-slate-400 font-medium">
              — Equipo de Entrenadores de Urban Hero Training Center Sevilla
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
