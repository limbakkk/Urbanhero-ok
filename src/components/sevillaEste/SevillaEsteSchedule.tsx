import React, { useState } from 'react';
import { Calendar, Clock, User, Filter, AlertCircle } from 'lucide-react';
import { SEVILLA_ESTE_SCHEDULE, SevillaEsteDaySchedule, SevillaEsteSession } from '../../data/sevillaEsteData';

export const SevillaEsteSchedule: React.FC = () => {
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(0);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('Todas');

  const currentDay = SEVILLA_ESTE_SCHEDULE[selectedDayIndex];

  const filterOptions = ['Todas', 'Funcional', 'Metabólico', 'Fuerza', 'Salud'];

  const filteredSessions = currentDay.sessions.filter((session: SevillaEsteSession) => {
    if (selectedCategoryFilter === 'Todas') return true;
    return session.category.toLowerCase().includes(selectedCategoryFilter.toLowerCase());
  });

  return (
    <section id="horarios" className="py-20 relative bg-[#07162c] border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-bold tracking-[0.25em] text-[#00d2ff] uppercase block">
            Planificación y Horarios
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading tracking-wide">
            Horarios Urban Hero Sevilla Este
          </h2>
          <p className="text-base text-slate-300">
            Franjas de mañana desde las <strong>07:15 AM</strong>, mediodía express y tarde/noche hasta las 21:20h. Clases con aforo limitado reservables desde la app WodBuster.
          </p>
        </div>

        {/* Day Selector Tabs (Monday to Saturday) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {SEVILLA_ESTE_SCHEDULE.map((day: SevillaEsteDaySchedule, idx: number) => {
            const isSelected = selectedDayIndex === idx;

            return (
              <button
                key={day.dayName}
                type="button"
                onClick={() => setSelectedDayIndex(idx)}
                className={`px-4 sm:px-6 py-3 rounded-xl font-heading text-lg sm:text-xl uppercase tracking-wider transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#00d2ff] text-[#061325] font-black shadow-lg shadow-cyan-500/30 scale-105'
                    : 'bg-[#0a2342] text-slate-300 hover:text-white hover:bg-[#0f2d52] border border-cyan-500/20'
                }`}
              >
                <span>{day.dayName}</span>
                {day.dayName === 'Sábado' && (
                  <span className="px-1.5 py-0.2 rounded bg-amber-400 text-black text-[10px] font-bold">
                    Especial
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Category Quick Filter */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-8">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Filtrar enfoque:
          </span>
          {filterOptions.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setSelectedCategoryFilter(opt)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                selectedCategoryFilter === opt
                  ? 'bg-cyan-500/20 border border-cyan-400 text-cyan-300'
                  : 'bg-black/20 text-slate-400 hover:text-slate-200 border border-transparent'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Schedule Display Table / Grid */}
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden bg-[#091f3a] border border-cyan-500/25 shadow-xl">
          <div className="p-4 bg-[#0c284b] border-b border-cyan-500/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-cyan-400" />
              <span className="font-bold text-white uppercase text-sm font-heading tracking-wide">
                Sesiones programadas para {currentDay.dayName}
              </span>
            </div>
            <span className="text-xs text-slate-400">
              {filteredSessions.length} sesión(es)
            </span>
          </div>

          <div className="divide-y divide-white/10">
            {filteredSessions.length > 0 ? (
              filteredSessions.map((session: SevillaEsteSession, idx: number) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-white/[0.02] transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-28 flex items-center gap-1.5 font-mono text-sm font-bold text-white shrink-0">
                      <Clock className="w-4 h-4 text-cyan-400" />
                      <span>{session.time}</span>
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-base text-white font-heading uppercase tracking-wide">
                          {session.discipline}
                        </span>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${session.badgeColor || 'bg-cyan-500/20 text-cyan-300'}`}>
                          {session.category}
                        </span>
                      </div>
                      <span className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                        <User className="w-3 h-3 text-slate-500" /> Coach: <strong className="text-slate-300">{session.coach}</strong>
                      </span>
                    </div>
                  </div>

                  <div className="sm:text-right shrink-0">
                    <span className="text-[11px] text-cyan-300 font-semibold px-2.5 py-1 rounded bg-black/30 border border-white/5 inline-block">
                      10-12 plazas • WodBuster
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-slate-400 text-xs">
                No hay sesiones de "{selectedCategoryFilter}" programadas para {currentDay.dayName}.
              </div>
            )}
          </div>
        </div>

        {/* Schedule Opening Hours Summary Note */}
        <div className="mt-8 max-w-4xl mx-auto p-4 rounded-xl bg-black/30 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block font-semibold">Resumen de Apertura en Hotel Vértice:</strong>
              <p className="text-[11px] text-slate-400">
                Lunes a Viernes: 07:15h a 11:20h, 14:00h a 14:50h y 17:30h a 21:20h • Sábados: 10:00h a 12:30h • Domingos cerrado.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
