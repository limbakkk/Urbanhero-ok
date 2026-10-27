import React from 'react';
import { Sparkles, Activity, ShieldCheck, Users, Award, Target, CheckCircle2 } from 'lucide-react';
import { ElPinoHeader } from '../components/elPino/ElPinoHeader';
import { MethodologyCarousel } from '../components/MethodologyCarousel';
import { ValuesCarousel } from '../components/ValuesCarousel';
import { ElPinoFooter } from '../components/elPino/ElPinoFooter';
import { LegalModalType } from '../components/LegalModals';

interface ElPinoMethodologyPageProps {
  onNavigateHome: () => void;
  onNavigateToGymHome: () => void;
  onNavigateToSevillaEste?: () => void;
  onOpenLegal: (type: LegalModalType) => void;
  onOpenCookieSettings: () => void;
  onOpenTrial: () => void;
}

export const ElPinoMethodologyPage: React.FC<ElPinoMethodologyPageProps> = ({
  onNavigateHome,
  onNavigateToGymHome,
  onNavigateToSevillaEste,
  onOpenLegal,
  onOpenCookieSettings,
  onOpenTrial,
}) => {
  return (
    <div className="min-h-screen bg-[#061325] text-slate-100 flex flex-col font-sans selection:bg-[#00d2ff] selection:text-[#061325]">
      <ElPinoHeader
        activeSection="metodologia"
        onNavigateHome={onNavigateHome}
        onNavigateToGymHome={onNavigateToGymHome}
        onNavigateToSevillaEste={onNavigateToSevillaEste}
        onOpenTrial={onOpenTrial}
      />

      <main className="flex-1 pt-28 sm:pt-32 md:pt-36">
        {/* Clean Hero Header without breadcrumbs */}
        <section className="py-12 sm:py-16 relative overflow-hidden bg-gradient-to-b from-[#091f3a] via-[#061528] to-[#061427]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,210,255,0.12),transparent_55%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white font-heading tracking-tight leading-tight">
                Metodología y Valores en <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] via-cyan-300 to-white">
                  Urban Hero El Pino
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                No creemos en el esfuerzo sin dirección ni en el agotamiento sin técnica. Descubre los 4 pilares fundamentales que rigen cada sesión de CrossTraining y los valores de comunidad que nos definen.
              </p>
            </div>
          </div>
        </section>

        {/* Training Methodology Horizontal Carousel */}
        <MethodologyCarousel gymContext="el-pino" />

        {/* Scaling & Progression Principles */}
        <section className="py-16 bg-[#07172c] border-t border-cyan-500/15">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold tracking-[0.25em] text-[#00d2ff] uppercase block">
                Adaptación Personalizada
              </span>
              <h2 className="text-2xl sm:text-4xl font-black uppercase text-white font-heading mt-1">
                Cómo Adaptamos Cada Movimiento a Ti
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mt-2">
                En Urban Hero El Pino, la intensidad es relativa. Un principiante y un atleta avanzado realizan el mismo estímulo metabólico adaptando cargas, rangos de movimiento y variantes técnicas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#09223e] border border-cyan-500/20 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-black">
                  01
                </div>
                <h3 className="text-lg font-bold text-white uppercase font-heading">
                  Evaluación Inicial de Movilidad
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Antes de cargar peso, verificamos tus rangos de dorsiflexión de tobillo, extensión torácica y estabilidad escapular.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#09223e] border border-cyan-500/20 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-black">
                  02
                </div>
                <h3 className="text-lg font-bold text-white uppercase font-heading">
                  Escalado Progresivo Seguro
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Sustituimos anillas por bandas elásticas o cargas olímpicas por mancuernas para asentar el patrón motor sin sobrecargar tendones.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#09223e] border border-cyan-500/20 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-black">
                  03
                </div>
                <h3 className="text-lg font-bold text-white uppercase font-heading">
                  Feedback y Métricas Reales
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Registramos tus marcas y progresos a través de Wodbuster para que compruebes objetivamente tu incremento de fuerza y potencia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Horizontal Carousel */}
        <ValuesCarousel />

        {/* Action Callout */}
        <section className="py-16 bg-[#040e1b] border-t border-cyan-500/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-2xl sm:text-4xl font-black uppercase text-white font-heading">
              Experimenta nuestra metodología en directo
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
              Reserva tus 2 clases gratis de prueba y entrena con el asesoramiento directo de nuestros entrenadores en el Polígono El Pino.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenTrial}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#00d2ff] via-[#0284c7] to-[#0369a1] text-white font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-cyan-500/25 hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 fill-white" />
                <span>Solicitar 2 Clases Gratis</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      <ElPinoFooter
        onNavigateHome={onNavigateHome}
        onNavigateToSevillaEste={onNavigateToSevillaEste}
        onOpenLegal={onOpenLegal}
        onOpenCookieSettings={onOpenCookieSettings}
        onOpenTrial={onOpenTrial}
      />
    </div>
  );
};
