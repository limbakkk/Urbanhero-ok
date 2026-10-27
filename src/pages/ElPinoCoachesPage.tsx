import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { ElPinoHeader } from '../components/elPino/ElPinoHeader';
import { ElPinoCoaches } from '../components/elPino/ElPinoCoaches';
import { ElPinoFooter } from '../components/elPino/ElPinoFooter';
import { LegalModalType } from '../components/LegalModals';
import { EL_PINO_COACHES, ElPinoCoach } from '../data/elPinoData';

interface ElPinoCoachesPageProps {
  onNavigateHome: () => void;
  onNavigateToGymHome: () => void;
  onNavigateToSevillaEste?: () => void;
  onOpenLegal: (type: LegalModalType) => void;
  onOpenCookieSettings: () => void;
  onOpenTrial: () => void;
}

export const ElPinoCoachesPage: React.FC<ElPinoCoachesPageProps> = ({
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
        activeSection="coaches"
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
                Entrenadores de <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] via-cyan-300 to-white">
                  Urban Hero El Pino
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Conoce en profundidad a los profesionales que te guiarán en cada clase: sus certificaciones internacionales, áreas de especialización biomecánica y su filosofía de acompañamiento diario.
              </p>
            </div>
          </div>
        </section>

        {/* Horizontal Coaches Carousel */}
        <ElPinoCoaches isStandalonePage={true} />

        {/* Detailed Coaching Profiles Grid */}
        <section className="py-16 bg-[#07172c] border-t border-cyan-500/15">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <h2 className="text-2xl sm:text-4xl font-black uppercase text-white font-heading">
                Perfil Detallado de Cada Coach
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mt-2">
                Experiencia, titulación reglada y enfoque metodológico de nuestros entrenadores en El Pino.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {EL_PINO_COACHES.map((coach: ElPinoCoach) => (
                <div
                  key={coach.id}
                  className="rounded-2xl p-6 sm:p-8 bg-[#09223e] border border-cyan-500/25 flex flex-col sm:flex-row gap-6 shadow-xl"
                >
                  <div className="w-full sm:w-44 h-52 sm:h-auto rounded-xl overflow-hidden shrink-0 relative">
                    <img
                      src={coach.imageUrl}
                      alt={coach.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>

                  <div className="flex-1 space-y-3">
                    <div>
                      <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                        {coach.role}
                      </span>
                      <h3 className="text-2xl font-black text-white uppercase font-heading">
                        {coach.name}
                      </h3>
                    </div>

                    <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 text-xs text-cyan-300">
                      <strong className="text-white block font-semibold">Especialidad:</strong>
                      {coach.specialty}
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {coach.bio}
                    </p>

                    <div className="flex items-center gap-1.5 text-xs text-slate-400 pt-1">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{coach.experience}</span>
                    </div>

                    <blockquote className="p-3 rounded-lg bg-cyan-950/40 border border-cyan-500/20 text-xs text-slate-300 italic">
                      "{coach.quote}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Action Callout */}
        <section className="py-16 bg-[#040e1b] border-t border-cyan-500/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-2xl sm:text-4xl font-black uppercase text-white font-heading">
              Ven a entrenar con nuestro equipo
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
              Disfruta de 2 clases de prueba gratuitas y comprueba en persona cómo corrigen tu técnica y adaptan cada serie a tu capacidad.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenTrial}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#00d2ff] via-[#0284c7] to-[#0369a1] text-white font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-cyan-500/25 hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 fill-white" />
                <span>Reservar 2 Clases de Prueba Gratis</span>
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
