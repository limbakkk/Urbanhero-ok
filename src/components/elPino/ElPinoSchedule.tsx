import React, { useState } from 'react';
import { Calendar, Clock, User, Filter, AlertCircle, Dumbbell } from 'lucide-react';
import { EL_PINO_SCHEDULE, DaySchedule, ClassSession } from '../../data/elPinoData';

export const ElPinoSchedule: React.FC = () => {
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(0);
  const [selectedDisciplineFilter, setSelectedDisciplineFilter] = useState<string>('Todas');

  const currentDay = EL_PINO_SCHEDULE[selectedDayIndex];

  const filterOptions = ['Todas', 'CrossTraining', 'Halterofilia', 'Gymnastics', 'Hybrid', 'Open Box', 'CrossKids', 'Team WOD'];

  const filteredSessions = currentDay.sessions.filter((session: ClassSession) => {
    if (selectedDisciplineFilter === 'Todas') return true;
    return session.category.toLowerCase().includes(selectedDisciplineFilter.toLowerCase());
  });

  return (
    <section id="horarios" className="py-20 relative bg-[#07162c] border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-bold tracking-[0.25em] text-[#00d2ff] uppercase block">
            Planificación y Horarios del Box
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading tracking-wide">
            Horarios Semanales Urban Hero El Pino
          </h2>
          <p className="text-base text-slate-300">
            Apertura ininterrumpida desde las <strong>07:00 AM</strong>. Clases dirigidas cada hora y zona Open Box climatizada disponible para compaginar el entrenamiento con tu jornada laboral.
          </p>
        </div>

        {/* Day Selector Tabs (Monday to Saturday) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {EL_PINO_SCHEDULE.map((day: DaySchedule, idx: number) => {
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
                    Team WOD
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Discipline Quick Filter */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-8">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Filtrar:
          </span>
          {filterOptions.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setSelectedDisciplineFilter(opt)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                selectedDisciplineFilter === opt
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
              {filteredSessions.length} sesión(es) encontrada(s)
            </span>
          </div>

          <div className="divide-y divide-white/10">
            {filteredSessions.length > 0 ? (
              filteredSessions.map((session: ClassSession, idx: number) => (
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
                      Reserva en WodBuster
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-slate-400 text-xs">
                No hay sesiones de "{selectedDisciplineFilter}" programadas para {currentDay.dayName}.
              </div>
            )}
          </div>
        </div>

        {/* Schedule Opening Hours Summary Note */}
        <div className="mt-8 max-w-4xl mx-auto p-4 rounded-xl bg-black/30 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block font-semibold">Resumen de Apertura Semanal de El Pino:</strong>
              <p className="text-[11px] text-slate-400">
                Lunes y Miércoles: 7:00h – 22:00h • Martes y Jueves: 7:00h – 15:00h y 17:00h – 22:00h • Viernes: 7:00h – 15:00h y 17:00h – 21:00h • Sábados: 10:00h – 12:30h • Domingos cerrado.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
