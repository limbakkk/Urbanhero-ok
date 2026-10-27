import React from 'react';
import { ExternalLink, Check, MapPin, Dumbbell, ArrowUpRight, Sparkles, Users, Award, Shield } from 'lucide-react';
import { GYMS } from '../data/gymData';
import { GymInfo } from '../types';

interface GymCardsProps {
  onSelectGymForTrial: (gymId: 'el-pino' | 'sevilla-este') => void;
  onNavigateToElPino?: () => void;
  onNavigateToSevillaEste?: () => void;
}

export const GymCards: React.FC<GymCardsProps> = ({
  onSelectGymForTrial,
  onNavigateToElPino,
  onNavigateToSevillaEste,
}) => {
  return (
    <section id="gimnasios" className="py-20 relative bg-[#07162c]/60 border-y border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="text-xs font-bold tracking-[0.25em] text-[#00d2ff] uppercase block">
            Nuestros Centros
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading tracking-wide">
            Dos Espacios Especializados en Sevilla
          </h2>
          <p className="text-base text-slate-300">
            Cada sede cuenta con su propia identidad, metodología adaptada y equipo técnico cualificado. Elige el enfoque que mejor responda a tu objetivo de entrenamiento.
          </p>
        </div>

        {/* 2 Gym Cards Grid - Useful, distinct, zero redundant marketing copy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {GYMS.map((gym: GymInfo) => {
            const isElPino = gym.id === 'el-pino';
            const navigateHandler = isElPino ? onNavigateToElPino : onNavigateToSevillaEste;

            return (
              <div
                key={gym.id}
                role="button"
                tabIndex={0}
                onClick={() => {
                  if (navigateHandler) {
                    navigateHandler();
                  } else {
                    window.location.href = isElPino ? '/urban-hero-el-pino' : '/urban-hero-sevilla-este';
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    if (navigateHandler) {
                      navigateHandler();
                    } else {
                      window.location.href = isElPino ? '/urban-hero-el-pino' : '/urban-hero-sevilla-este';
                    }
                  }
                }}
                className={`group relative rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                  isElPino
                    ? 'bg-gradient-to-b from-[#0b2545] to-[#051427] border-2 border-[#00d2ff]/40 hover:border-[#00d2ff] shadow-2xl shadow-cyan-950/50 hover:shadow-cyan-500/20'
                    : 'bg-gradient-to-b from-[#0a273e] to-[#041221] border-2 border-cyan-400/30 hover:border-cyan-400 shadow-2xl shadow-blue-950/50 hover:shadow-cyan-500/20'
                }`}
                aria-label={`Ver web completa de ${gym.name}`}
              >
                {/* Visual Header Image */}
                <div className="relative h-60 sm:h-64 w-full overflow-hidden">
                  <img
                    src={gym.heroImage}
                    alt={gym.name}
                    className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.1] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b2545] via-[#0b2545]/40 to-transparent" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                    <span
                      className={`px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-lg backdrop-blur-md ${
                        isElPino
                          ? 'bg-[#00d2ff] text-[#061325]'
                          : 'bg-cyan-400 text-[#061325]'
                      }`}
                    >
                      {gym.badge}
                    </span>

                    <a
                      href={gym.mapUrl || gym.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-black/70 hover:bg-black/90 text-slate-200 hover:text-white backdrop-blur-md border border-white/20 flex items-center gap-1 transition-colors"
                      title="Ver mapa de ubicación"
                    >
                      <MapPin className="w-3 h-3 text-cyan-400 shrink-0" />
                      <span>Cómo llegar</span>
                    </a>
                  </div>

                  {/* Location Title Over Image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl sm:text-3xl font-black text-white font-heading uppercase tracking-wide drop-shadow-md">
                      {gym.name}
                    </h3>
                    <p className="text-cyan-300 text-xs sm:text-sm font-medium flex items-center gap-1.5 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{gym.address}</span>
                    </p>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  
                  {/* Location-Specific Description */}
                  <div>
                    <h4 className="text-sm font-bold text-cyan-300 uppercase tracking-wider mb-2">
                      Enfoque del centro
                    </h4>
                    <p className="text-sm text-slate-200 leading-relaxed">
                      {gym.description}
                    </p>
                  </div>

                  {/* Differentiator & Coaching Team */}
                  <div className="p-4 rounded-xl bg-white/[0.04] border border-cyan-500/20 space-y-2">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span className="text-xs font-bold uppercase tracking-wider text-white">
                        {isElPino ? 'Diferenciador Técnico' : 'Supervisión Continua'}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-normal">
                      {isElPino
                        ? 'Box homologado para CrossTraining, Halterofilia con tarima, Gymnastics, Hybrid y zona Open Box climatizada.'
                        : 'Entrenamiento funcional adaptado a cada persona en Hotel Vértice. Apto para cualquier nivel físico sin sobrecargas articulares.'}
                    </p>
                    {gym.coachingSummary && (
                      <p className="text-xs text-cyan-300/90 font-medium pt-1 border-t border-white/10">
                        {gym.coachingSummary}
                      </p>
                    )}
                  </div>

                  {/* Relevant Training Disciplines */}
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Disciplinas destacadas
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {gym.disciplines.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#113158]/80 text-cyan-200 border border-cyan-500/30"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Membership & Pricing Preview */}
                  {gym.priceSummary && (
                    <div className="text-xs text-slate-300 border-t border-white/10 pt-3 flex items-start gap-2">
                      <Shield className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white font-semibold">Tarifas oficiales: </strong>
                        <span>{gym.priceSummary}</span>
                      </div>
                    </div>
                  )}

                  {/* Actions: Direct Web Navigation & Trial CTA */}
                  <div className="space-y-3 pt-2">
                    {/* Primary Link to Dedicated Gym Website */}
                    {navigateHandler ? (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigateHandler();
                        }}
                        className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#00d2ff] to-[#0ea5e9] hover:from-cyan-300 hover:to-[#00d2ff] text-[#061325] font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.01]"
                      >
                        <span>Ver Web Completa de {gym.shortName}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <a
                        href={gym.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-full py-3.5 px-4 rounded-xl bg-[#00d2ff] hover:bg-cyan-300 text-[#061325] font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.01]"
                      >
                        <span>Ver Web Oficial de {gym.shortName}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}

                    {/* Secondary Action: Book 2 Free Trial Classes */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectGymForTrial(gym.id);
                      }}
                      className="w-full py-2.5 px-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Reservar 2 Clases Gratis en {gym.shortName}</span>
                    </button>

                    {/* External Website Reference Link */}
                    <div className="text-center pt-1">
                      <a
                        href={gym.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-[11px] text-slate-400 hover:text-cyan-300 inline-flex items-center gap-1 transition-colors"
                      >
                        <span>Web Externa Oficial ({gym.externalUrl.replace('https://', '')})</span>
                        <ExternalLink className="w-3 h-3 text-cyan-400" />
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Note clarifying detail availability */}
        <div className="mt-8 text-center text-xs text-slate-400 max-w-2xl mx-auto">
          <p>
            * Los horarios de cada sesión, reservas en tiempo real y normativas de acceso completas están disponibles en las secciones específicas de cada centro.
          </p>
        </div>

      </div>
    </section>
  );
};
