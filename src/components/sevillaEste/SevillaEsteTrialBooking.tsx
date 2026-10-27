import React, { useState } from 'react';
import { Sparkles, MessageSquare, ExternalLink, CheckCircle, AlertCircle } from 'lucide-react';

export const SevillaEsteTrialBooking: React.FC = () => {
  const [athleteName, setAthleteName] = useState('');
  const [preferredDiscipline, setPreferredDiscipline] = useState('Entrenamiento Funcional');
  const [goal, setGoal] = useState('Salud y Acondicionamiento');

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `¡Hola Urban Hero Sevilla Este! Me gustaría solicitar mis 2 clases de prueba gratuitas en el centro de Hotel Vértice (Av. de la Aeronáutica s/n).\n\n` +
      `• Nombre: ${athleteName.trim() || 'Interesado/a'}\n` +
      `• Actividad que deseo probar: ${preferredDiscipline}\n` +
      `• Objetivo principal: ${goal}\n\n` +
      `¿Qué horarios tenéis disponibles esta semana para coordinar mi primera sesión? ¡Muchas gracias!`
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
                <span>Pase Gratuito de Bienvenida</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading tracking-wide leading-tight">
                Reserva Tus 2 Clases de Prueba Gratis <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-cyan-300">
                  En Urban Hero Sevilla Este
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Prueba dos sesiones completas en grupos reducidos en Hotel Vértice. Conoce al entrenador, experimenta el ritmo de la clase y comprueba cómo adaptamos cada ejercicio a tus posibilidades físicas.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200">
                    <strong>Dos Clases Completas:</strong> Entrena guiado por nuestros profesionales en grupos de máximo 10 a 12 personas.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200">
                    <strong>100% Sin Compromiso:</strong> Sin permanencia, sin matrícula oculta ni necesidad de facilitar datos bancarios.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200">
                    <strong>Instalaciones Confortables:</strong> Sala climatizada en Hotel Vértice con vestuarios y duchas de hotel.
                  </span>
                </div>
              </div>

              {/* Notice */}
              <div className="p-4 rounded-xl bg-black/30 border border-white/10 text-xs text-slate-400 space-y-1">
                <div className="flex items-center gap-2 text-slate-200 font-semibold">
                  <AlertCircle className="w-4 h-4 text-cyan-400" />
                  <span>Reserva Directa por WhatsApp Oficial</span>
                </div>
                <p>
                  Para coordinar tu día y franja ideal con aforo garantizado, escríbenos directamente por WhatsApp al <strong>+34 623 06 99 66</strong> o regístrate en la plataforma <strong>WodBuster</strong>.
                </p>
              </div>
            </div>

            {/* Right Column: Pre-configuration Card */}
            <div className="lg:col-span-6 bg-[#071a30] p-6 sm:p-8 rounded-2xl border border-cyan-500/30 shadow-xl space-y-5">
              
              <div className="border-b border-white/10 pb-4">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                  Pase Gratuito Sevilla Este
                </span>
                <h3 className="text-xl font-bold text-white uppercase font-heading tracking-wide">
                  Configura tu Solicitud de Prueba
                </h3>
              </div>

              {/* Athlete Name */}
              <div>
                <label htmlFor="sevillaeste-name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Tu Nombre (opcional):
                </label>
                <input
                  id="sevillaeste-name"
                  type="text"
                  value={athleteName}
                  onChange={(e) => setAthleteName(e.target.value)}
                  placeholder="Ej: Laura Gómez"
                  className="w-full px-4 py-2.5 rounded-xl bg-black/30 border border-white/15 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              {/* Discipline Selection */}
              <div>
                <label htmlFor="sevillaeste-discipline" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  ¿Qué actividad te gustaría probar primero?
                </label>
                <select
                  id="sevillaeste-discipline"
                  value={preferredDiscipline}
                  onChange={(e) => setPreferredDiscipline(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/30 border border-white/15 text-white text-xs focus:outline-none focus:border-cyan-400"
                >
                  <option value="Entrenamiento Funcional">Entrenamiento Funcional Adaptado</option>
                  <option value="HIIT & Acondicionamiento Metabólico">HIIT & Acondicionamiento Metabólico</option>
                  <option value="Fuerza y Tonificación Guiada">Fuerza y Tonificación Guiada</option>
                  <option value="Movilidad, Core & Espalda Sana">Movilidad, Core & Espalda Sana</option>
                  <option value="Circuito Funcional en Grupos Reducidos">Circuito Funcional en Grupos Reducidos</option>
                </select>
              </div>

              {/* Goal */}
              <div>
                <label htmlFor="sevillaeste-goal" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Tu objetivo prioritario:
                </label>
                <select
                  id="sevillaeste-goal"
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/30 border border-white/15 text-white text-xs focus:outline-none focus:border-cyan-400"
                >
                  <option value="Salud y Acondicionamiento">Mejorar salud general y vitalidad</option>
                  <option value="Perder grasa y tonificar">Quema de grasa y definición corporal</option>
                  <option value="Alivio de espalda y postura">Aliviar dolores de espalda y corregir postura</option>
                  <option value="Ganar fuerza funcional">Ganar fuerza muscular sin lesiones</option>
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
                  <span>Pedir 2 Clases por WhatsApp (+34 623 06 99 66)</span>
                </a>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span>¿Prefieres darte de alta en WodBuster?</span>
                  <a
                    href="https://urbanhero.wodbuster.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 font-bold underline flex items-center gap-1"
                  >
                    <span>Ir a WodBuster Sevilla Este</span>
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
