import React, { useState } from 'react';
import { Dumbbell, Shield, Check, Flame, ChevronRight, Sparkles } from 'lucide-react';
import { EL_PINO_DISCIPLINES, ElPinoDiscipline } from '../../data/elPinoData';

interface ElPinoDisciplinesProps {
  onOpenTrial: () => void;
}

export const ElPinoDisciplines: React.FC<ElPinoDisciplinesProps> = ({ onOpenTrial }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Todas');

  const categories = ['Todas', 'Alta Intensidad', 'Fuerza Técnica', 'Destreza', 'Libre', 'Infantil'];

  const filtered = activeCategory === 'Todas'
    ? EL_PINO_DISCIPLINES
    : EL_PINO_DISCIPLINES.filter((d) => d.category === activeCategory);

  return (
    <section id="disciplinas" className="py-20 relative bg-[#061427]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-bold tracking-[0.25em] text-[#00d2ff] uppercase block">
            Actividades y Disciplinas Oficiales
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading tracking-wide">
            Disciplinas en Urban Hero El Pino
          </h2>
          <p className="text-base text-slate-300">
            Una programación deportiva completa y estructurada para cubrir fuerza, levantamientos olímpicos, gimnásticos de anillas, capacidad metabólica y entrenamiento libre.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-[#00d2ff] text-[#061325] shadow-lg shadow-cyan-500/25 scale-105'
                  : 'bg-[#0a2342] text-slate-300 hover:text-white hover:bg-[#0f2f58] border border-cyan-500/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Disciplines Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item: ElPinoDiscipline) => (
            <div
              key={item.id}
              className="rounded-2xl overflow-hidden bg-gradient-to-b from-[#09213d] to-[#06172d] border border-cyan-500/25 hover:border-cyan-400/60 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-cyan-950/50"
            >
              <div>
                {/* Visual Header */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09213d] via-transparent to-black/40" />

                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-cyan-500 text-[#061325] shadow-md">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-black text-white uppercase font-heading tracking-wide group-hover:text-cyan-300 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs font-semibold text-cyan-400 mt-0.5 leading-snug">
                      {item.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-1.5 pt-2 border-t border-white/10">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Beneficios Clave:
                    </span>
                    {item.benefits.map((b, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  {/* Level & Equipment */}
                  <div className="pt-2 text-[11px] text-slate-400 space-y-1">
                    <div>
                      <strong className="text-white font-semibold">Nivel requerido:</strong> {item.levelReq}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={onOpenTrial}
                  className="w-full py-2.5 px-3 rounded-xl bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/40 text-xs font-bold uppercase tracking-wider text-cyan-300 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Probar clase gratis</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
