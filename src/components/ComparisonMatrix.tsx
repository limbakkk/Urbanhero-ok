import React, { useState } from 'react';
import { Check, X, Sparkles, MapPin, Dumbbell, Activity, ArrowRight, HelpCircle } from 'lucide-react';
import { GYMS } from '../data/gymData';

interface ComparisonMatrixProps {
  onSelectGymForTrial: (gymId: 'el-pino' | 'sevilla-este') => void;
}

export const ComparisonMatrix: React.FC<ComparisonMatrixProps> = ({ onSelectGymForTrial }) => {
  // Interactive Recommender State
  const [selectedGoal, setSelectedGoal] = useState<'cross' | 'functional' | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<'beginner' | 'intermediate' | null>(null);

  const getRecommendation = () => {
    if (!selectedGoal) return null;
    if (selectedGoal === 'cross') return GYMS[0]; // El Pino
    if (selectedGoal === 'functional') return GYMS[1]; // Sevilla Este
    return GYMS[0];
  };

  const recommendedGym = getRecommendation();

  return (
    <section className="py-20 relative bg-[#061427]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-[0.25em] text-[#00d2ff] uppercase block">
            Elige con Claridad
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading tracking-wide">
            ¿Qué Hace Diferente a Cada Centro?
          </h2>
          <p className="text-base text-slate-300">
            Dos gimnasios diseñados con propósitos complementarios. Compara sus puntos fuertes para saber exactamente a cuál dirigirte sin confusiones.
          </p>
        </div>

        {/* Side-by-Side Comparison Matrix */}
        <div className="overflow-x-auto pb-4">
          <table className="w-full text-left border-collapse min-w-[650px] bg-[#091f3a] rounded-2xl overflow-hidden border border-cyan-500/20 shadow-xl">
            <thead>
              <tr className="border-b border-cyan-500/30 bg-[#0c284b]">
                <th className="p-4 sm:p-5 text-sm font-bold text-slate-300 uppercase tracking-wider w-1/3">
                  Criterio
                </th>
                <th className="p-4 sm:p-5 text-base sm:text-lg font-black text-[#00d2ff] font-heading uppercase tracking-wide w-1/3">
                  Urban Hero El Pino
                </th>
                <th className="p-4 sm:p-5 text-base sm:text-lg font-black text-cyan-200 font-heading uppercase tracking-wide w-1/3">
                  Urban Hero Sevilla Este
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-xs sm:text-sm">
              <tr>
                <td className="p-4 font-semibold text-slate-300">Enfoque Primario</td>
                <td className="p-4 text-white font-bold text-cyan-300">
                  CrossTraining, Halterofilia & Alta Intensidad
                </td>
                <td className="p-4 text-white font-bold text-cyan-200">
                  Entrenamiento Funcional, Salud & Movilidad
                </td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-slate-300">Material & Equipamiento</td>
                <td className="p-4 text-slate-200">
                  Barras olímpicas, jaula de competición, cajones, bumpers y Open Box climatizado.
                </td>
                <td className="p-4 text-slate-200">
                  Kettlebells, mancuernas, bandas elásticas, slam balls y equipamiento funcional dinámico.
                </td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-slate-300">Disciplinas Clave</td>
                <td className="p-4 text-slate-200">
                  WODs oficiales, Halterofilia técnica, Gymnastics, Hybrid, Team WOD, CrossKids.
                </td>
                <td className="p-4 text-slate-200">
                  HIIT funcional, core, reeducación postural, circuitos de fuerza en grupos reducidos.
                </td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-slate-300">Zona Open Box Libre</td>
                <td className="p-4 text-slate-200">
                  <span className="inline-flex items-center gap-1.5 text-cyan-300 font-semibold">
                    <Check className="w-4 h-4 text-cyan-400" /> Sí (Amplia y climatizada)
                  </span>
                </td>
                <td className="p-4 text-slate-200">
                  <span className="text-slate-300">
                    Prioridad a clases guiadas con supervisión 100% activa
                  </span>
                </td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-slate-300">Nivel de Entrada Requerido</td>
                <td className="p-4 text-slate-200">
                  Cualquier nivel (con clases de iniciación y técnica obligatoria para principiantes).
                </td>
                <td className="p-4 text-slate-200">
                  Apto desde cero. Ideal para personas que quieren ponerse en forma de manera progresiva.
                </td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-slate-300">Ubicación en Sevilla</td>
                <td className="p-4 text-slate-200">
                  C. Pino Doncel, 10 (Polígono Industrial El Pino, 41016 Sevilla).
                </td>
                <td className="p-4 text-slate-200">
                  Hotel Vértice (Avenida de la Aeronáutica, 5, 1.º 6, 41020 Sevilla).
                </td>
              </tr>
              <tr className="bg-[#0b2444]">
                <td className="p-4 font-semibold text-slate-300">Acción Recomendada</td>
                <td className="p-4">
                  <button
                    onClick={() => onSelectGymForTrial('el-pino')}
                    className="px-3.5 py-2 rounded-lg bg-[#00d2ff] hover:bg-cyan-300 text-[#061325] font-black text-xs uppercase tracking-wider transition-colors"
                  >
                    Probar en El Pino
                  </button>
                </td>
                <td className="p-4">
                  <button
                    onClick={() => onSelectGymForTrial('sevilla-este')}
                    className="px-3.5 py-2 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-[#061325] font-black text-xs uppercase tracking-wider transition-colors"
                  >
                    Probar en Sevilla Este
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Interactive Center Recommender Tool */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0c274b] to-[#07182f] border-2 border-cyan-500/30">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase font-heading tracking-wide">
                Asistente Rápido: ¿Cuál es mi Centro Ideal?
              </h3>
              <p className="text-xs text-slate-300">
                Responde en 2 clics para orientarte de forma precisa:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Step 1: Goal */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase text-cyan-400 block tracking-wider">
                1. ¿Qué tipo de entrenamiento buscas?
              </span>
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => setSelectedGoal('cross')}
                  className={`w-full p-3.5 rounded-xl border text-left text-xs font-semibold flex items-center justify-between transition-all ${
                    selectedGoal === 'cross'
                      ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-md'
                      : 'bg-black/20 border-white/10 text-slate-300 hover:border-white/30'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Dumbbell className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>CrossTraining, levantamientos con barra, gimnásticos y Open Box</span>
                  </div>
                  {selectedGoal === 'cross' && <Check className="w-4 h-4 text-cyan-400" />}
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedGoal('functional')}
                  className={`w-full p-3.5 rounded-xl border text-left text-xs font-semibold flex items-center justify-between transition-all ${
                    selectedGoal === 'functional'
                      ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-md'
                      : 'bg-black/20 border-white/10 text-slate-300 hover:border-white/30'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Activity className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Acondicionamiento funcional, ganar tono, perder grasa y movilidad guiada</span>
                  </div>
                  {selectedGoal === 'functional' && <Check className="w-4 h-4 text-cyan-400" />}
                </button>
              </div>
            </div>

            {/* Recommendation Result Card */}
            <div className="flex flex-col justify-center p-5 rounded-2xl bg-[#07192f] border border-cyan-500/30">
              {recommendedGym ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                      Tu Centro Recomendado:
                    </span>
                  </div>
                  <h4 className="text-2xl font-black text-white font-heading uppercase">
                    {recommendedGym.name}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {recommendedGym.targetAudience}
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => onSelectGymForTrial(recommendedGym.id)}
                      className="px-4 py-2.5 rounded-lg bg-[#00d2ff] hover:bg-cyan-300 text-[#061325] font-extrabold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                    >
                      <span>Reservar 2 Clases Gratis en {recommendedGym.shortName}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <a
                      href={recommendedGym.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold text-xs flex items-center gap-1.5 transition-colors"
                    >
                      <span>Ver su web oficial</span>
                    </a>
                  </div>
                </div>
              ) : (
                <div className="text-center py-6 text-slate-400 space-y-2">
                  <HelpCircle className="w-8 h-8 text-cyan-400/50 mx-auto" />
                  <p className="text-xs">
                    Haz clic en la opción 1 para ver al instante qué centro encaja con tu estilo deportivo.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
