import React from 'react';
import { ShieldCheck, Users, Activity, HeartPulse, Building2, CheckCircle2 } from 'lucide-react';

export const SevillaEsteAbout: React.FC = () => {
  return (
    <section id="sobre-sevilla-este" className="py-20 relative bg-[#07162b] border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="max-w-3xl mb-14 space-y-3">
          <span className="text-xs font-bold tracking-[0.25em] text-[#00d2ff] uppercase block">
            Metodología & Entorno en Hotel Vértice
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading tracking-wide">
            Entrenamiento Adaptado a tu Salud Real
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Situado en el <strong>Hotel Vértice Sevilla Este</strong>, este centro nació para ofrecer un espacio de acondicionamiento físico cercano, eficaz y seguro, sin la exigencia técnica de las barras de halterofilia ni la intimidación de un box masivo.
          </p>
        </div>

        {/* 4 Pillars of Sevilla Este */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="p-5 rounded-2xl bg-[#091f3a] border border-cyan-500/20 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white uppercase font-heading">
              1. Grupos de 10 a 12 Personas
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Cupos cerrados en cada clase. El entrenador conoce tu historial motriz, revisa tu alineación en cada serie y te corrige al instante.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#091f3a] border border-cyan-500/20 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white uppercase font-heading">
              2. Salud Articular & Espalda
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Ejercicios diseñados para fortalecer el core profundo, descomprimir la columna y aliviar las molestias posturales derivadas de la jornada laboral.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#091f3a] border border-cyan-500/20 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
              <HeartPulse className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white uppercase font-heading">
              3. HIIT Sin Impacto Nocivo
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Intervalos metabólicos con remos Concept2 y Airbikes que aceleran el consumo calórico y la resistencia cardiovascular sin castigar rodillas ni meniscos.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#091f3a] border border-cyan-500/20 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white uppercase font-heading">
              4. Entorno Hotel Vértice
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Ubicación accesible en Avda. de la Aeronáutica con climatización permanente, vestuarios y duchas de hotel confortables y facilidad de aparcamiento exterior.
            </p>
          </div>
        </div>

        {/* 50-Min Session Structure */}
        <div className="p-6 sm:p-8 rounded-3xl bg-black/40 border border-cyan-500/30">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                Sesión Tipo en Sevilla Este
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase font-heading">
                ¿Cómo se estructuran los 50 minutos de entrenamiento?
              </h3>
            </div>
            <span className="text-xs text-slate-400">
              Máxima eficiencia • Cero tiempos muertos • Monitorización continua
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="space-y-2 border-l-2 border-cyan-500 pl-4">
              <span className="text-xs font-mono font-bold text-cyan-400 block">Minutos 00 - 10</span>
              <h4 className="text-sm font-bold text-white uppercase font-heading">1. Activación Postural & Core</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Ejercicios específicos de movilidad torácica, estabilización lumbar y activación de glúteo para preparar las articulaciones.
              </p>
            </div>

            <div className="space-y-2 border-l-2 border-blue-500 pl-4">
              <span className="text-xs font-mono font-bold text-blue-400 block">Minutos 10 - 40</span>
              <h4 className="text-sm font-bold text-white uppercase font-heading">2. Circuito Funcional Guiado</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Estaciones rotativas combinando tonificación con mancuernas/kettlebells y ráfagas metabólicas en ergómetros con descansos pautados.
              </p>
            </div>

            <div className="space-y-2 border-l-2 border-emerald-500 pl-4">
              <span className="text-xs font-mono font-bold text-emerald-400 block">Minutos 40 - 50</span>
              <h4 className="text-sm font-bold text-white uppercase font-heading">3. Descompresión & Movilidad</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Trabajo con foam roller, estiramientos de cadenas miofasciales acortadas y control respiratorio para salir con vitalidad renovada.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
