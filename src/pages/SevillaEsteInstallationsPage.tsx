import React from 'react';
import { Sparkles } from 'lucide-react';
import { SevillaEsteHeader } from '../components/sevillaEste/SevillaEsteHeader';
import { GalleryCarousel } from '../components/GalleryCarousel';
import { SevillaEsteFooter } from '../components/sevillaEste/SevillaEsteFooter';
import { LegalModalType } from '../components/LegalModals';
import { SEVILLA_ESTE_GALLERY } from '../data/sevillaEsteData';

interface SevillaEsteInstallationsPageProps {
  onNavigateHome: () => void;
  onNavigateToGymHome: () => void;
  onNavigateToElPino?: () => void;
  onOpenLegal: (type: LegalModalType) => void;
  onOpenCookieSettings: () => void;
  onOpenTrial: () => void;
}

export const SevillaEsteInstallationsPage: React.FC<SevillaEsteInstallationsPageProps> = ({
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
        activeSection="instalaciones"
        onNavigateHome={onNavigateHome}
        onNavigateToGymHome={onNavigateToGymHome}
        onNavigateToElPino={onNavigateToElPino}
        onOpenTrial={onOpenTrial}
      />

      <main className="flex-1 pt-28 sm:pt-32 md:pt-36">
        {/* Clean Hero Header */}
        <section className="py-12 sm:py-16 relative overflow-hidden bg-gradient-to-b from-[#091f3a] via-[#061528] to-[#061427]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,210,255,0.12),transparent_55%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white font-heading tracking-tight leading-tight">
                Instalaciones y Espacios <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] via-cyan-300 to-white">
                  Urban Hero Sevilla Este
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Ubicado dentro del prestigioso Hotel Vértice Sevilla. Espacio totalmente climatizado, vestuarios impecables de hotel y equipamiento funcional de primer nivel para entrenar con total confort.
              </p>
            </div>
          </div>
        </section>

        {/* Standardized Horizontal Carousel with Lightbox */}
        <GalleryCarousel
          items={SEVILLA_ESTE_GALLERY}
          title="Galería de Instalaciones en Hotel Vértice"
          subtitle="Comodidad y Calidad"
          description="Desliza horizontalmente para ver las diferentes zonas o haz clic sobre cualquier fotografía para ampliarla."
          isStandalonePage={true}
        />

        {/* Facility Highlights */}
        <section className="py-16 bg-[#07172c] border-t border-cyan-500/15">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <h2 className="text-2xl sm:text-4xl font-black uppercase text-white font-heading">
                Confort y Equipamiento Funcional
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mt-2">
                Un entorno seguro y acogedor para tu entrenamiento diario.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#09223e] border border-cyan-500/20 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-black">
                  01
                </div>
                <h3 className="text-lg font-bold text-white uppercase font-heading">
                  Climatización y Ventilación
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Temperatura constante los 365 días del año y renovación de aire para un entreno confortable en cualquier estación.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#09223e] border border-cyan-500/20 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-black">
                  02
                </div>
                <h3 className="text-lg font-bold text-white uppercase font-heading">
                  Vestuarios Premium
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Duchas individuales con agua caliente constante, taquillas de seguridad y la calidad hotelera de Grupo Vértice.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#09223e] border border-cyan-500/20 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-black">
                  03
                </div>
                <h3 className="text-lg font-bold text-white uppercase font-heading">
                  Aparcamiento Sencillo
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Zonas de estacionamiento público en los alrededores del hotel y paradas de autobús urbano en la misma avenida.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Action Callout */}
        <section className="py-16 bg-[#040e1b] border-t border-cyan-500/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-2xl sm:text-4xl font-black uppercase text-white font-heading">
              Ven a conocer el centro en persona
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
              Reserva tus 2 clases de prueba gratuitas y descubre el confort de entrenar en el Hotel Vértice Sevilla Este.
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
