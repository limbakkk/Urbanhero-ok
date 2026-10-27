import React, { useState } from 'react';
import { Sparkles, MessageSquare, Phone, CheckCircle, ExternalLink, Dumbbell, MapPin, AlertCircle } from 'lucide-react';
import { GYMS } from '../data/gymData';

interface JoinTrialSectionProps {
  selectedGymId?: 'el-pino' | 'sevilla-este';
}

export const JoinTrialSection: React.FC<JoinTrialSectionProps> = ({ selectedGymId = 'el-pino' }) => {
  const [gymId, setGymId] = useState<'el-pino' | 'sevilla-este'>(selectedGymId);
  const [fullName, setFullName] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('principiante');
  const [interest, setInterest] = useState('CrossTraining');

  // Keep synced if prop changes
  React.useEffect(() => {
    if (selectedGymId) {
      setGymId(selectedGymId);
      if (selectedGymId === 'sevilla-este') {
        setInterest('Entrenamiento Funcional');
      } else {
        setInterest('CrossTraining');
      }
    }
  }, [selectedGymId]);

  const selectedGym = GYMS.find((g) => g.id === gymId) || GYMS[0];

  // Prepares the verified direct WhatsApp URL
  const composeWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `¡Hola Urban Hero Training Center! Me gustaría solicitar mis 2 clases de prueba gratuitas para el centro ${selectedGym.name}.\n\n` +
      `• Nombre: ${fullName.trim() || 'Interesado/a'}\n` +
      `• Nivel: ${experienceLevel}\n` +
      `• Interés: ${interest}\n\n` +
      `¿Qué días y horarios tenéis disponibles para coordinar mi primera sesión? ¡Gracias!`
    );
    return `https://wa.me/34623069966?text=${text}`;
  };

  return (
    <section id="unete" className="py-20 relative bg-[#061325]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card */}
        <div className="rounded-3xl bg-gradient-to-br from-[#0c284b] via-[#091f3a] to-[#041121] border-2 border-cyan-400/40 p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          
          {/* Background Glow */}
          <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Column: Promotion Info */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/50 text-[#00d2ff] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Oferta de Bienvenida Oficial</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading tracking-wide leading-tight">
                Únete a Urban Hero: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-cyan-300">
                  Prueba 2 Clases Gratis
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Queremos que sientas la energía de la comunidad, conozcas a nuestros entrenadores y compruebes en primera persona cómo adaptamos cada ejercicio antes de tomar cualquier decisión.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200">
                    <strong>100% Sin Compromiso:</strong> No se requiere tarjeta de crédito ni permanencia alguna.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200">
                    <strong>Atención Directa:</strong> Coordinación de tu primera sesión mano a mano con el equipo de coaches.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200">
                    <strong>Válido para El Pino o Sevilla Este:</strong> Elige la disciplina y ubicación que mejor se ajuste a tu rutina.
                  </span>
                </div>
              </div>

              {/* Direct Verification Notice */}
              <div className="p-4 rounded-xl bg-black/30 border border-white/10 text-xs text-slate-400 space-y-1">
                <div className="flex items-center gap-2 text-slate-200 font-semibold">
                  <AlertCircle className="w-4 h-4 text-cyan-400" />
                  <span>Proceso de Reserva Oficial</span>
                </div>
                <p>
                  Para garantizar que tu plaza queda reservada con aforo controlado real, la gestión se realiza directamente con el equipo a través del canal oficial de WhatsApp o en la plataforma de gestión de cada box.
                </p>
              </div>

            </div>

            {/* Right Column: Interactive Booking Coordinator */}
            <div className="lg:col-span-6 bg-[#06152a] p-6 sm:p-8 rounded-2xl border border-cyan-500/30 shadow-xl space-y-5">
              
              <div className="border-b border-white/10 pb-4">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                  Paso 1 de 2
                </span>
                <h3 className="text-lg font-bold text-white uppercase font-heading tracking-wide">
                  Configura tu Pase de Prueba
                </h3>
              </div>

              {/* Select Gym */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Selecciona el Gimnasio:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setGymId('el-pino');
                      setInterest('CrossTraining');
                    }}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      gymId === 'el-pino'
                        ? 'bg-cyan-500/20 border-cyan-400 text-white'
                        : 'bg-black/20 border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    <span className="font-bold text-xs block">El Pino</span>
                    <span className="text-[10px] text-cyan-300 block">CrossTraining & Halterofilia</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setGymId('sevilla-este');
                      setInterest('Entrenamiento Funcional');
                    }}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      gymId === 'sevilla-este'
                        ? 'bg-cyan-500/20 border-cyan-400 text-white'
                        : 'bg-black/20 border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    <span className="font-bold text-xs block">Sevilla Este</span>
                    <span className="text-[10px] text-cyan-300 block">Funcional & Hotel Vértice</span>
                  </button>
                </div>
              </div>

              {/* Athlete Name */}
              <div>
                <label htmlFor="athlete-name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Tu Nombre y Apellidos (opcional):
                </label>
                <input
                  id="athlete-name"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Ej: Laura Martínez"
                  className="w-full px-4 py-2.5 rounded-xl bg-black/30 border border-white/15 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              {/* Experience Level */}
              <div>
                <label htmlFor="athlete-level" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Nivel de Experiencia:
                </label>
                <select
                  id="athlete-level"
                  value={experienceLevel}
                  onChange={(e) => setExperienceLevel(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/30 border border-white/15 text-white text-xs focus:outline-none focus:border-cyan-400"
                >
                  <option value="Principiante (Desde cero o tras tiempo inactivo)">
                    Principiante (Inicio desde cero o tras tiempo sin entrenar)
                  </option>
                  <option value="Intermedio (Entreno regularmente en gimnasio)">
                    Intermedio (Hago deporte habitual)
                  </option>
                  <option value="Avanzado (Experiencia previa en CrossFit/CrossTraining)">
                    Avanzado (He practicado CrossTraining o levantamientos)
                  </option>
                </select>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-2">
                <a
                  href={composeWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.01]"
                >
                  <MessageSquare className="w-4 h-4 fill-black" />
                  <span>Solicitar por WhatsApp (+34 623 06 99 66)</span>
                </a>

                <div className="flex items-center justify-between pt-2 text-[11px] text-slate-400">
                  <span>¿Prefieres registrarte en su web?</span>
                  <a
                    href={selectedGym.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 font-semibold underline flex items-center gap-1"
                  >
                    <span>Ir a web de {selectedGym.shortName}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
