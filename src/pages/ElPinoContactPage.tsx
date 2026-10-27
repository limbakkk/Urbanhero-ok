import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, Navigation, ExternalLink, Sparkles } from 'lucide-react';
import { ElPinoHeader } from '../components/elPino/ElPinoHeader';
import { ElPinoLocationContact } from '../components/elPino/ElPinoLocationContact';
import { ElPinoFooter } from '../components/elPino/ElPinoFooter';
import { LegalModalType } from '../components/LegalModals';

interface ElPinoContactPageProps {
  onNavigateHome: () => void;
  onNavigateToGymHome: () => void;
  onNavigateToSevillaEste?: () => void;
  onOpenLegal: (type: LegalModalType) => void;
  onOpenCookieSettings: () => void;
  onOpenTrial: () => void;
}

export const ElPinoContactPage: React.FC<ElPinoContactPageProps> = ({
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
        activeSection="contacto"
        onNavigateHome={onNavigateHome}
        onNavigateToGymHome={onNavigateToGymHome}
        onNavigateToSevillaEste={onNavigateToSevillaEste}
        onOpenTrial={onOpenTrial}
      />

      <main className="flex-1 pt-28 sm:pt-32 md:pt-36">
        {/* Clean Hero Header */}
        <section className="py-12 sm:py-16 relative overflow-hidden bg-gradient-to-b from-[#091f3a] via-[#061528] to-[#061427]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,210,255,0.12),transparent_55%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white font-heading tracking-tight leading-tight">
                Ubicación y Contacto <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] via-cyan-300 to-white">
                  Urban Hero El Pino
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Encuéntranos en el Polígono Industrial El Pino de Sevilla. Fácil aparcamiento gratuito en la misma puerta, conexiones directas con la SE-30 y líneas de autobús urbano.
              </p>
            </div>
          </div>
        </section>

        {/* Full Location & Contact Component */}
        <ElPinoLocationContact />

        {/* Action Callout */}
        <section className="py-16 bg-[#040e1b] border-t border-cyan-500/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-2xl sm:text-4xl font-black uppercase text-white font-heading">
              ¿Quieres venir a entrenar hoy?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
              Contáctanos por WhatsApp o reserva directamente tus 2 clases de prueba gratuitas.
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
