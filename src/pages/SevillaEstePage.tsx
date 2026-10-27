import React from 'react';
import { SevillaEsteHeader } from '../components/sevillaEste/SevillaEsteHeader';
import { SevillaEsteHero } from '../components/sevillaEste/SevillaEsteHero';
import { SevillaEsteAbout } from '../components/sevillaEste/SevillaEsteAbout';
import { DisciplinesCarousel } from '../components/DisciplinesCarousel';
import { MethodologyCarousel } from '../components/MethodologyCarousel';
import { SevillaEsteCoaches } from '../components/sevillaEste/SevillaEsteCoaches';
import { GalleryCarousel } from '../components/GalleryCarousel';
import { SevillaEsteTrialBooking } from '../components/sevillaEste/SevillaEsteTrialBooking';
import { SisterGymCrossLink } from '../components/SisterGymCrossLink';
import { SevillaEsteFooter } from '../components/sevillaEste/SevillaEsteFooter';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { LegalModalType } from '../components/LegalModals';
import { SEVILLA_ESTE_DISCIPLINES, SEVILLA_ESTE_GALLERY } from '../data/sevillaEsteData';
import { Calendar, CreditCard, MapPin, HelpCircle, ArrowRight, Sparkles } from 'lucide-react';

interface SevillaEstePageProps {
  onNavigateHome: () => void;
  onNavigateToElPino?: () => void;
  onNavigateToDisciplines: () => void;
  onNavigateToMethodology: () => void;
  onNavigateToSchedule: () => void;
  onNavigateToCoaches: () => void;
  onNavigateToPricing: () => void;
  onNavigateToInstallations: () => void;
  onNavigateToContact: () => void;
  onNavigateToFAQ: () => void;
  onOpenLegal: (type: LegalModalType) => void;
  onOpenCookieSettings: () => void;
}

export const SevillaEstePage: React.FC<SevillaEstePageProps> = ({
  onNavigateHome,
  onNavigateToElPino,
  onNavigateToDisciplines,
  onNavigateToMethodology,
  onNavigateToSchedule,
  onNavigateToCoaches,
  onNavigateToPricing,
  onNavigateToInstallations,
  onNavigateToContact,
  onNavigateToFAQ,
  onOpenLegal,
  onOpenCookieSettings,
}) => {
  const scrollToTrial = () => {
    const el = document.getElementById('clases-gratis');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#061325] text-slate-100 flex flex-col font-sans selection:bg-[#00d2ff] selection:text-[#061325]">
      {/* Header with Navigation to All Dedicated Section Pages */}
      <SevillaEsteHeader
        activeSection="inicio"
        onNavigateHome={onNavigateHome}
        onNavigateToGymHome={onNavigateHome}
        onNavigateToElPino={onNavigateToElPino}
        onNavigateToDisciplines={onNavigateToDisciplines}
        onNavigateToMethodology={onNavigateToMethodology}
        onNavigateToSchedule={onNavigateToSchedule}
        onNavigateToCoaches={onNavigateToCoaches}
        onNavigateToPricing={onNavigateToPricing}
        onNavigateToInstallations={onNavigateToInstallations}
        onNavigateToContact={onNavigateToContact}
        onNavigateToFAQ={onNavigateToFAQ}
        onOpenTrial={scrollToTrial}
      />

      <main className="flex-1">
        {/* A. Hero Section */}
        <ErrorBoundary fallbackTitle="Hero Sevilla Este">
          <SevillaEsteHero onOpenTrial={scrollToTrial} />
        </ErrorBoundary>

        {/* B. About Sevilla Este (Essential Differentiators) */}
        <ErrorBoundary fallbackTitle="Sobre Sevilla Este">
          <SevillaEsteAbout />
        </ErrorBoundary>

        {/* C. Disciplines Horizontal Carousel */}
        <ErrorBoundary fallbackTitle="Disciplinas Oficiales">
          <DisciplinesCarousel
            disciplines={SEVILLA_ESTE_DISCIPLINES}
            title="Disciplinas en Sevilla Este"
            subtitle="Entrenamiento Funcional"
            description="Actividades enfocadas a tonificar, ganar fuerza y cuidar tu espalda en las instalaciones del Hotel Vértice."
            badge="Salud & Bienestar"
            onViewAll={onNavigateToDisciplines}
            viewAllUrl="/urban-hero-sevilla-este/disciplinas"
            onOpenTrial={scrollToTrial}
          />
        </ErrorBoundary>

        {/* D. Methodology Horizontal Carousel */}
        <ErrorBoundary fallbackTitle="Metodología de Entrenamiento">
          <div className="relative">
            <MethodologyCarousel gymContext="sevilla-este" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 flex justify-center">
              <button
                type="button"
                onClick={onNavigateToMethodology}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#09223e] border border-cyan-400/40 text-cyan-300 hover:text-white hover:bg-cyan-500/20 text-xs font-bold uppercase tracking-wider transition-all group shadow-md"
              >
                <span>Conoce a fondo nuestra metodología y valores</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#00d2ff]" />
              </button>
            </div>
          </div>
        </ErrorBoundary>

        {/* E. Coaching Staff Horizontal Carousel */}
        <ErrorBoundary fallbackTitle="Equipo de Coaches">
          <SevillaEsteCoaches onNavigateToCoachesPage={onNavigateToCoaches} />
        </ErrorBoundary>

        {/* F. Installations & Facilities Horizontal Carousel */}
        <ErrorBoundary fallbackTitle="Instalaciones y Galería">
          <GalleryCarousel
            items={SEVILLA_ESTE_GALLERY}
            title="Instalaciones en Hotel Vértice"
            subtitle="Confort y Calidad"
            description="Entrena en un espacio climatizado, con vestuarios de primer nivel y fácil estacionamiento en Sevilla Este."
            onViewAll={onNavigateToInstallations}
            viewAllText="Ver detalles de las instalaciones"
          />
        </ErrorBoundary>

        {/* G. Concise Quick-Access Sections Hub (Horarios, Tarifas, Ubicación, FAQ) */}
        <section className="py-16 bg-[#07162b] border-t border-cyan-500/15">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
              <span className="text-xs font-bold tracking-[0.25em] text-[#00d2ff] uppercase block">
                Información Esencial
              </span>
              <h2 className="text-2xl sm:text-4xl font-black uppercase text-white font-heading">
                Todo lo que necesitas saber
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Accede directamente a la información completa de horarios, tarifas, localización y resolución de dudas en Sevilla Este.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Horarios Card */}
              <button
                type="button"
                onClick={onNavigateToSchedule}
                className="p-6 rounded-2xl bg-[#09203d] hover:bg-[#0c2a52] border border-cyan-500/20 hover:border-cyan-400/60 transition-all text-left flex flex-col justify-between group shadow-lg"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center group-hover:bg-[#00d2ff] group-hover:text-[#061325] transition-colors">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-black text-white uppercase font-heading group-hover:text-cyan-300 transition-colors">
                    Horarios de Clases
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Turnos de mañana, mediodía y tarde de lunes a sábado en el Hotel Vértice.
                  </p>
                </div>
                <div className="pt-4 flex items-center gap-1.5 text-xs font-bold text-cyan-400 uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  <span>Ver horarios completos</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>

              {/* Tarifas Card */}
              <button
                type="button"
                onClick={onNavigateToPricing}
                className="p-6 rounded-2xl bg-[#09203d] hover:bg-[#0c2a52] border border-cyan-500/20 hover:border-cyan-400/60 transition-all text-left flex flex-col justify-between group shadow-lg"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center group-hover:bg-[#00d2ff] group-hover:text-[#061325] transition-colors">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-black text-white uppercase font-heading group-hover:text-cyan-300 transition-colors">
                    Tarifas y Bonos
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Membresías ilimitadas o planes de 2 y 3 días/semana adaptados a tus objetivos.
                  </p>
                </div>
                <div className="pt-4 flex items-center gap-1.5 text-xs font-bold text-cyan-400 uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  <span>Consultar precios</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>

              {/* Ubicación y Contacto Card */}
              <button
                type="button"
                onClick={onNavigateToContact}
                className="p-6 rounded-2xl bg-[#09203d] hover:bg-[#0c2a52] border border-cyan-500/20 hover:border-cyan-400/60 transition-all text-left flex flex-col justify-between group shadow-lg"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center group-hover:bg-[#00d2ff] group-hover:text-[#061325] transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-black text-white uppercase font-heading group-hover:text-cyan-300 transition-colors">
                    Dónde Estamos
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Hotel Vértice Sevilla (Av. Aeronáutica). Fácil acceso en coche o autobús.
                  </p>
                </div>
                <div className="pt-4 flex items-center gap-1.5 text-xs font-bold text-cyan-400 uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  <span>Cómo llegar y mapa</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>

              {/* FAQ Card */}
              <button
                type="button"
                onClick={onNavigateToFAQ}
                className="p-6 rounded-2xl bg-[#09203d] hover:bg-[#0c2a52] border border-cyan-500/20 hover:border-cyan-400/60 transition-all text-left flex flex-col justify-between group shadow-lg"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center group-hover:bg-[#00d2ff] group-hover:text-[#061325] transition-colors">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-black text-white uppercase font-heading group-hover:text-cyan-300 transition-colors">
                    Dudas Frecuentes
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Preguntas respondidas sobre intensidad, lesiones previas y reserva de plazas.
                  </p>
                </div>
                <div className="pt-4 flex items-center gap-1.5 text-xs font-bold text-cyan-400 uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  <span>Ver preguntas frecuentes</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* H. Sister Gym Cross Link */}
        <ErrorBoundary fallbackTitle="Otra Sede Urban Hero">
          <SisterGymCrossLink
            currentGym="sevilla-este"
            onNavigateToOtherGym={onNavigateToElPino}
          />
        </ErrorBoundary>

        {/* I. Free Trial Booking Section */}
        <ErrorBoundary fallbackTitle="2 Clases de Prueba Gratis">
          <SevillaEsteTrialBooking />
        </ErrorBoundary>
      </main>

      {/* Footer */}
      <SevillaEsteFooter
        onNavigateHome={onNavigateHome}
        onNavigateToElPino={onNavigateToElPino}
        onOpenLegal={onOpenLegal}
        onOpenCookieSettings={onOpenCookieSettings}
        onOpenTrial={scrollToTrial}
      />
    </div>
  );
};
