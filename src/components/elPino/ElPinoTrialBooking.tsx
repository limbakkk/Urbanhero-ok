import React, { useState } from 'react';
import { Sparkles, MessageSquare, ExternalLink, CheckCircle, AlertCircle, Dumbbell, Calendar, Clock } from 'lucide-react';

export const ElPinoTrialBooking: React.FC = () => {
  const [athleteName, setAthleteName] = useState('');
  const [preferredDiscipline, setPreferredDiscipline] = useState('CrossTraining');
  const [experience, setExperience] = useState('Principiante');

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `¡Hola Urban Hero El Pino! Me gustaría solicitar mis 2 clases de prueba gratuitas en el box de C/ Pino Doncel, 10.\n\n` +
      `• Nombre: ${athleteName.trim() || 'Interesado/a'}\n` +
      `• Disciplina que deseo probar: ${preferredDiscipline}\n` +
      `• Nivel: ${experience}\n\n` +
      `¿Qué horarios tenéis disponibles esta semana para coordinar mi primera clase? ¡Muchas gracias!`
    );
    return `https://wa.me/34623069966?text=${text}`;
  };

  return (
    <section id="clases-gratis" className="py-20 relative bg-[#061427]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-gradient-to-br from-[#0c2e56] via-[#09213d] to-[#041323] border-2 border-[#00d2ff]/40 p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Column: Promotion Info */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Promoción Oficial de Bienvenida</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading tracking-wide leading-tight">
                Reserva Tus 2 Clases de Prueba Gratis <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-cyan-300">
                  En Urban Hero El Pino
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Ven a pisar el box, conocer al equipo de coaches y experimentar la adrenalina de una sesión real de CrossTraining, Halterofilia o Gymnastics antes de tomar cualquier decisión.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200">
                    <strong>Dos Clases Completas:</strong> Disfruta de 2 entrenamientos guiados por nuestros entrenadores con corrección biomecánica.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200">
                    <strong>100% Sin Compromiso:</strong> No te pediremos tarjeta bancaria ni compromiso de permanencia.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200">
                    <strong>Material Homologado y Zona Climatizada:</strong> Entrena con el mejor equipamiento oficial en el Polígono El Pino.
                  </span>
                </div>
              </div>

              {/* Direct Booking Notice */}
              <div className="p-4 rounded-xl bg-black/30 border border-white/10 text-xs text-slate-400 space-y-1">
                <div className="flex items-center gap-2 text-slate-200 font-semibold">
                  <AlertCircle className="w-4 h-4 text-cyan-400" />
                  <span>Plataformas Oficiales Verificadas</span>
                </div>
                <p>
                  Las plazas se reservan y confirman en vivo a través del canal oficial de WhatsApp del box o en el software de gestión <strong>WodBuster</strong> para mantener el aforo legal y controlado.
                </p>
              </div>
            </div>

            {/* Right Column: Pre-configuration Card */}
            <div className="lg:col-span-6 bg-[#071a30] p-6 sm:p-8 rounded-2xl border border-cyan-500/30 shadow-xl space-y-5">
              
              <div className="border-b border-white/10 pb-4">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                  Pase Gratuito El Pino
                </span>
                <h3 className="text-xl font-bold text-white uppercase font-heading tracking-wide">
                  Configura tu Solicitud de Prueba
                </h3>
              </div>

              {/* Athlete Name */}
              <div>
                <label htmlFor="elpino-name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Tu Nombre (opcional):
                </label>
                <input
                  id="elpino-name"
                  type="text"
                  value={athleteName}
                  onChange={(e) => setAthleteName(e.target.value)}
                  placeholder="Ej: Marcos Sánchez"
                  className="w-full px-4 py-2.5 rounded-xl bg-black/30 border border-white/15 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              {/* Discipline Selection */}
              <div>
                <label htmlFor="elpino-discipline" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  ¿Qué disciplina te gustaría probar primero?
                </label>
                <select
                  id="elpino-discipline"
                  value={preferredDiscipline}
                  onChange={(e) => setPreferredDiscipline(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/30 border border-white/15 text-white text-xs focus:outline-none focus:border-cyan-400"
                >
                  <option value="CrossTraining">CrossTraining (WOD diario completo)</option>
                  <option value="Halterofilia">Halterofilia (Técnica de levantamientos)</option>
                  <option value="Gymnastics">Gymnastics (Anillas, barra y pino)</option>
                  <option value="Hybrid">Hybrid Training (Resistencia y fuerza)</option>
                  <option value="Team WOD">Team WOD de Sábado (Entrenamiento en parejas)</option>
                  <option value="CrossKids">CrossKids (Infantil / Juvenil)</option>
                </select>
              </div>

              {/* Experience */}
              <div>
                <label htmlFor="elpino-exp" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Tu nivel deportivo:
                </label>
                <select
                  id="elpino-exp"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/30 border border-white/15 text-white text-xs focus:outline-none focus:border-cyan-400"
                >
                  <option value="Principiante">Principiante (Empiezo desde cero)</option>
                  <option value="Intermedio">Intermedio (Hago deporte o gimnasio)</option>
                  <option value="Avanzado">Avanzado (He practicado CrossFit/CrossTraining)</option>
                </select>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 space-y-3">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.01]"
                >
                  <MessageSquare className="w-4 h-4 fill-black" />
                  <span>Pedir 2 Clases por WhatsApp Oficial (+34 623 06 99 66)</span>
                </a>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span>¿Prefieres registrarte en WodBuster?</span>
                  <a
                    href="https://urbanhero.wodbuster.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 font-bold underline flex items-center gap-1"
                  >
                    <span>Ir a WodBuster El Pino</span>
                    <ExternalLink className="w-3.5 h-3.5" />
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
