import React from 'react';
import { ElPinoHeader } from '../components/elPino/ElPinoHeader';
import { ElPinoHero } from '../components/elPino/ElPinoHero';
import { ElPinoAbout } from '../components/elPino/ElPinoAbout';
import { DisciplinesCarousel } from '../components/DisciplinesCarousel';
import { MethodologyCarousel } from '../components/MethodologyCarousel';
import { ElPinoCoaches } from '../components/elPino/ElPinoCoaches';
import { GalleryCarousel } from '../components/GalleryCarousel';
import { ElPinoTrialBooking } from '../components/elPino/ElPinoTrialBooking';
import { SisterGymCrossLink } from '../components/SisterGymCrossLink';
import { ElPinoFooter } from '../components/elPino/ElPinoFooter';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { LegalModalType } from '../components/LegalModals';
import { EL_PINO_DISCIPLINES, EL_PINO_GALLERY } from '../data/elPinoData';
import { Calendar, CreditCard, MapPin, HelpCircle, ArrowRight, Sparkles } from 'lucide-react';

interface ElPinoPageProps {
  onNavigateHome: () => void;
  onNavigateToSevillaEste?: () => void;
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

export const ElPinoPage: React.FC<ElPinoPageProps> = ({
  onNavigateHome,
  onNavigateToSevillaEste,
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
      <ElPinoHeader
        activeSection="inicio"
        onNavigateHome={onNavigateHome}
        onNavigateToGymHome={onNavigateHome}
        onNavigateToSevillaEste={onNavigateToSevillaEste}
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
        <ErrorBoundary fallbackTitle="Hero El Pino">
          <ElPinoHero onOpenTrial={scrollToTrial} />
        </ErrorBoundary>

        {/* B. About El Pino (Essential Differentiators) */}
        <ErrorBoundary fallbackTitle="Sobre El Pino">
          <ElPinoAbout />
        </ErrorBoundary>

        {/* C. Disciplines Horizontal Carousel */}
        <ErrorBoundary fallbackTitle="Disciplinas Oficiales">
          <DisciplinesCarousel
            disciplines={EL_PINO_DISCIPLINES}
            title="Disciplinas en El Pino"
            subtitle="Programación Deportiva"
            description="Entrenamientos diarios en constante variación ejecutados a alta intensidad relativa y adaptados a cada atleta."
            badge="CrossTraining & Halterofilia"
            onViewAll={onNavigateToDisciplines}
            viewAllUrl="/urban-hero-el-pino/disciplinas"
            onOpenTrial={scrollToTrial}
          />
        </ErrorBoundary>

        {/* D. Methodology Horizontal Carousel */}
        <ErrorBoundary fallbackTitle="Metodología de Entrenamiento">
          <div className="relative">
            <MethodologyCarousel gymContext="el-pino" />
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
          <ElPinoCoaches onNavigateToCoachesPage={onNavigateToCoaches} />
        </ErrorBoundary>

        {/* F. Installations & Facilities Horizontal Carousel */}
        <ErrorBoundary fallbackTitle="Instalaciones y Galería">
          <GalleryCarousel
            items={EL_PINO_GALLERY}
            title="Instalaciones Urban Hero El Pino"
            subtitle="Nave Principal & Open Box"
            description="Explora las zonas de entrenamiento, el equipamiento de competición y los espacios acondicionados en el Polígono El Pino."
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
                Accede directamente a la información completa de horarios, tarifas, localización y resolución de dudas.
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
                    Apertura desde las 07:00 AM. Clases guiadas cada hora y Open Box disponible.
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
                    Tarifas planas ilimitadas o bonos flexibles por sesiones sin permanencia.
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
                    Polígono Industrial El Pino. Fácil aparcamiento gratuito y accesos desde SE-30.
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
                    ¿Qué ropa traer? ¿Cómo se usa WodBuster? Preguntas resueltas para nuevos atletas.
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
            currentGym="el-pino"
            onNavigateToOtherGym={onNavigateToSevillaEste}
          />
        </ErrorBoundary>

        {/* I. Free Trial Booking Section */}
        <ErrorBoundary fallbackTitle="2 Clases de Prueba Gratis">
          <ElPinoTrialBooking />
        </ErrorBoundary>
      </main>

      {/* Footer */}
      <ElPinoFooter
        onNavigateHome={onNavigateHome}
        onNavigateToSevillaEste={onNavigateToSevillaEste}
        onOpenLegal={onOpenLegal}
        onOpenCookieSettings={onOpenCookieSettings}
        onOpenTrial={scrollToTrial}
      />
    </div>
  );
};
