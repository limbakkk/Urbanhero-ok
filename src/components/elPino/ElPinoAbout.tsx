import React from 'react';
import { Dumbbell, Snowflake, Users, Award, Clock, Layers, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ElPinoAbout: React.FC = () => {
  return (
    <section id="sobre-el-pino" className="py-20 relative bg-[#07162b] border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="max-w-3xl mb-14 space-y-3">
          <span className="text-xs font-bold tracking-[0.25em] text-[#00d2ff] uppercase block">
            Instalaciones & Protocolo de Entrenamiento
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading tracking-wide">
            Estructura Técnica del Box
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Nave de entrenamiento diáfana en el Polígono Industrial El Pino distribuida en cinco áreas operativas específicas para optimizar el rendimiento y la seguridad del atleta.
          </p>
        </div>

        {/* 4 Technical Zones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="p-5 rounded-2xl bg-[#091f3a] border border-cyan-500/20 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
              <Dumbbell className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white uppercase font-heading">
              1. Levantamiento & Barras
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Suelo de caucho virgen de alto grosor absorbedor de impactos, barras olímpicas homologadas IWF (15kg y 20kg), discos bumpers de alta densidad y plataformas de madera para Halterofilia.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#091f3a] border border-cyan-500/20 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white uppercase font-heading">
              2. Rig Central Gimnástico
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Estructura de jaula de competición con anillas de madera suspendidas, barras de tracción a diferentes alturas, cuerdas de trepa de 5 metros y calle para pino y zancadas con lastre.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#091f3a] border border-cyan-500/20 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
              <Snowflake className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white uppercase font-heading">
              3. Open Box Climatizado
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Área delimitada con climatización mediante splits industriales para amortiguar el calor sevillano. Racks propios, barras, bancos y mancuernas para entrenar programación libre.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#091f3a] border border-cyan-500/20 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white uppercase font-heading">
              4. Ergómetros & Conditioning
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Batería de remos Concept2, Airbikes Echo y SkiErg sincronizados con los cronómetros murales del box para entrenamientos Hybrid y metcons de resistencia sin impacto articular.
            </p>
          </div>
        </div>

        {/* Training Session Structure Timeline */}
        <div className="p-6 sm:p-8 rounded-3xl bg-black/40 border border-cyan-500/30">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                Estructura de Clase Oficial
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase font-heading">
                ¿Cómo se desarrollan los 60 minutos de cada sesión?
              </h3>
            </div>
            <span className="text-xs text-slate-400">
              Aforo limitado • 1 coach por grupo • Corrección técnica constante
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2 border-l-2 border-cyan-500 pl-4">
              <span className="text-xs font-mono font-bold text-cyan-400 block">Min 00 - 12</span>
              <h4 className="text-sm font-bold text-white uppercase font-heading">1. Warm-Up Específico</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Movilidad articular dinámica, elevación de temperatura muscular y activación de cadenas posturales según los patrones del día.
              </p>
            </div>

            <div className="space-y-2 border-l-2 border-blue-500 pl-4">
              <span className="text-xs font-mono font-bold text-blue-400 block">Min 12 - 32</span>
              <h4 className="text-sm font-bold text-white uppercase font-heading">2. Técnica / Fuerza (Skill)</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Trabajo con barra olímpica o gimnásticos: desglose biomecánico del levantamiento, aproximación por series y búsqueda de carga óptima.
              </p>
            </div>

            <div className="space-y-2 border-l-2 border-amber-500 pl-4">
              <span className="text-xs font-mono font-bold text-amber-400 block">Min 32 - 52</span>
              <h4 className="text-sm font-bold text-white uppercase font-heading">3. WOD (Metcon Principal)</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Entrenamiento del día en formato AMRAP, For Time o EMOM. Intensidad regulada y versión escalada asignada a cada atleta.
              </p>
            </div>

            <div className="space-y-2 border-l-2 border-emerald-500 pl-4">
              <span className="text-xs font-mono font-bold text-emerald-400 block">Min 52 - 60</span>
              <h4 className="text-sm font-bold text-white uppercase font-heading">4. Vuelta a la Calma</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Descompresión lumbar, estiramientos de cadenas acortadas y registro de marcas y resultados en la app WodBuster.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
