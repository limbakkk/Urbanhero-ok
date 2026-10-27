import React from 'react';
import { Sparkles, Activity, ShieldCheck, Heart, Target } from 'lucide-react';
import { SevillaEsteHeader } from '../components/sevillaEste/SevillaEsteHeader';
import { MethodologyCarousel } from '../components/MethodologyCarousel';
import { ValuesCarousel } from '../components/ValuesCarousel';
import { SevillaEsteFooter } from '../components/sevillaEste/SevillaEsteFooter';
import { LegalModalType } from '../components/LegalModals';

interface SevillaEsteMethodologyPageProps {
  onNavigateHome: () => void;
  onNavigateToGymHome: () => void;
  onNavigateToElPino?: () => void;
  onOpenLegal: (type: LegalModalType) => void;
  onOpenCookieSettings: () => void;
  onOpenTrial: () => void;
}

export const SevillaEsteMethodologyPage: React.FC<SevillaEsteMethodologyPageProps> = ({
  onNavigateHome,
  onNavigateToGymHome,
  onNavigateToElPino,
  onOpenLegal,
  onOpenCookieSettings,
  onOpenTrial,
}) => {
  return (
    <div className="min-h-screen bg-[#061325] text-slate-100 flex flex-col font-sans selection:bg-[#00d2ff] selection:text-[#061325]">
      <SevillaEsteHeader
        activeSection="metodologia"
        onNavigateHome={onNavigateHome}
        onNavigateToGymHome={onNavigateToGymHome}
        onNavigateToElPino={onNavigateToElPino}
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
                  Urban Hero Sevilla Este
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                En nuestro centro en el Hotel Vértice apostamos por una actividad física inteligente: entrenamientos funcionales estructurados para mejorar tu postura, aumentar tu energía y prevenir molestias articulares.
              </p>
            </div>
          </div>
        </section>

        {/* Training Methodology Horizontal Carousel */}
        <MethodologyCarousel gymContext="sevilla-este" />

        {/* Functional Progression Principles */}
        <section className="py-16 bg-[#07172c] border-t border-cyan-500/15">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold tracking-[0.25em] text-[#00d2ff] uppercase block">
                Enfoque de Salud Integral
              </span>
              <h2 className="text-2xl sm:text-4xl font-black uppercase text-white font-heading mt-1">
                Entrenamiento Seguro y Saludable
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mt-2">
                Priorizamos la calidad del movimiento sobre la carga. Cada sesión está pensada para que salgas con energía renovada, sin dolor articular ni sensación de agotamiento destructivo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#09223e] border border-cyan-500/20 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-black">
                  01
                </div>
                <h3 className="text-lg font-bold text-white uppercase font-heading">
                  Control y Postura
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Activación de la faja abdominal profunda y estabilización de la pelvis para corregir compensaciones del trabajo sedentario.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#09223e] border border-cyan-500/20 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-black">
                  02
                </div>
                <h3 className="text-lg font-bold text-white uppercase font-heading">
                  Progresión Continua
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Incremento paulatino de estímulos según tu ritmo de recuperación biológica y tu nivel diario de energía.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#09223e] border border-cyan-500/20 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-black">
                  03
                </div>
                <h3 className="text-lg font-bold text-white uppercase font-heading">
                  Bienestar y Adherencia
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Un ambiente positivo donde cada entreno es un momento para desconectar de la rutina y disfrutar del movimiento consciente.
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
              Ven a probar nuestra metodología
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
              Reserva tus 2 clases sin ningún compromiso en nuestras instalaciones del Hotel Vértice Sevilla Este.
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

      <SevillaEsteFooter
        onNavigateHome={onNavigateHome}
        onNavigateToElPino={onNavigateToElPino}
        onOpenLegal={onOpenLegal}
        onOpenCookieSettings={onOpenCookieSettings}
        onOpenTrial={onOpenTrial}
      />
    </div>
  );
};
