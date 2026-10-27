import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { GymCards } from './components/GymCards';
import { Methodology } from './components/Methodology';
import { Values } from './components/Values';
import { ComparisonMatrix } from './components/ComparisonMatrix';
import { TimerChallenge } from './components/TimerChallenge';
import { JoinTrialSection } from './components/JoinTrialSection';
import { LatestNews } from './components/LatestNews';
import { InstagramFeed } from './components/InstagramFeed';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { LegalModals, LegalModalType } from './components/LegalModals';
import { CookieBanner } from './components/CookieBanner';
import { ErrorBoundary } from './components/ErrorBoundary';

// El Pino Pages
import { ElPinoPage } from './pages/ElPinoPage';
import { ElPinoDisciplinesPage } from './pages/ElPinoDisciplinesPage';
import { ElPinoMethodologyPage } from './pages/ElPinoMethodologyPage';
import { ElPinoSchedulePage } from './pages/ElPinoSchedulePage';
import { ElPinoCoachesPage } from './pages/ElPinoCoachesPage';
import { ElPinoPricingPage } from './pages/ElPinoPricingPage';
import { ElPinoInstallationsPage } from './pages/ElPinoInstallationsPage';
import { ElPinoContactPage } from './pages/ElPinoContactPage';
import { ElPinoFAQPage } from './pages/ElPinoFAQPage';

// Sevilla Este Pages
import { SevillaEstePage } from './pages/SevillaEstePage';
import { SevillaEsteDisciplinesPage } from './pages/SevillaEsteDisciplinesPage';
import { SevillaEsteMethodologyPage } from './pages/SevillaEsteMethodologyPage';
import { SevillaEsteSchedulePage } from './pages/SevillaEsteSchedulePage';
import { SevillaEsteCoachesPage } from './pages/SevillaEsteCoachesPage';
import { SevillaEstePricingPage } from './pages/SevillaEstePricingPage';
import { SevillaEsteInstallationsPage } from './pages/SevillaEsteInstallationsPage';
import { SevillaEsteContactPage } from './pages/SevillaEsteContactPage';
import { SevillaEsteFAQPage } from './pages/SevillaEsteFAQPage';

export default function App() {
  const [activeLegalModal, setActiveLegalModal] = useState<LegalModalType>(null);
  const [isCookieSettingsOpen, setIsCookieSettingsOpen] = useState<boolean>(false);
  const [selectedTrialGym, setSelectedTrialGym] = useState<'el-pino' | 'sevilla-este'>('el-pino');

  // Client-side route matching supporting dedicated gym pages & sub-routes
  const parseCurrentPath = (): string => {
    if (typeof window === 'undefined') return '/';
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();

    // El Pino Sub-Routes
    if (path.includes('urban-hero-el-pino/disciplinas') || hash.includes('urban-hero-el-pino/disciplinas')) {
      return '/urban-hero-el-pino/disciplinas';
    }
    if (path.includes('urban-hero-el-pino/metodologia') || hash.includes('urban-hero-el-pino/metodologia')) {
      return '/urban-hero-el-pino/metodologia';
    }
    if (path.includes('urban-hero-el-pino/horarios') || hash.includes('urban-hero-el-pino/horarios')) {
      return '/urban-hero-el-pino/horarios';
    }
    if (path.includes('urban-hero-el-pino/coaches') || hash.includes('urban-hero-el-pino/coaches')) {
      return '/urban-hero-el-pino/coaches';
    }
    if (path.includes('urban-hero-el-pino/tarifas') || hash.includes('urban-hero-el-pino/tarifas')) {
      return '/urban-hero-el-pino/tarifas';
    }
    if (path.includes('urban-hero-el-pino/instalaciones') || hash.includes('urban-hero-el-pino/instalaciones')) {
      return '/urban-hero-el-pino/instalaciones';
    }
    if (path.includes('urban-hero-el-pino/contacto') || hash.includes('urban-hero-el-pino/contacto')) {
      return '/urban-hero-el-pino/contacto';
    }
    if (path.includes('urban-hero-el-pino/faq') || hash.includes('urban-hero-el-pino/faq')) {
      return '/urban-hero-el-pino/faq';
    }
    if (path.includes('urban-hero-el-pino') || hash.includes('urban-hero-el-pino')) {
      return '/urban-hero-el-pino';
    }

    // Sevilla Este Sub-Routes
    if (path.includes('urban-hero-sevilla-este/disciplinas') || hash.includes('urban-hero-sevilla-este/disciplinas')) {
      return '/urban-hero-sevilla-este/disciplinas';
    }
    if (path.includes('urban-hero-sevilla-este/metodologia') || hash.includes('urban-hero-sevilla-este/metodologia')) {
      return '/urban-hero-sevilla-este/metodologia';
    }
    if (path.includes('urban-hero-sevilla-este/horarios') || hash.includes('urban-hero-sevilla-este/horarios')) {
      return '/urban-hero-sevilla-este/horarios';
    }
    if (path.includes('urban-hero-sevilla-este/coaches') || hash.includes('urban-hero-sevilla-este/coaches')) {
      return '/urban-hero-sevilla-este/coaches';
    }
    if (path.includes('urban-hero-sevilla-este/tarifas') || hash.includes('urban-hero-sevilla-este/tarifas')) {
      return '/urban-hero-sevilla-este/tarifas';
    }
    if (path.includes('urban-hero-sevilla-este/instalaciones') || hash.includes('urban-hero-sevilla-este/instalaciones')) {
      return '/urban-hero-sevilla-este/instalaciones';
    }
    if (path.includes('urban-hero-sevilla-este/contacto') || hash.includes('urban-hero-sevilla-este/contacto')) {
      return '/urban-hero-sevilla-este/contacto';
    }
    if (path.includes('urban-hero-sevilla-este/faq') || hash.includes('urban-hero-sevilla-este/faq')) {
      return '/urban-hero-sevilla-este/faq';
    }
    if (path.includes('urban-hero-sevilla-este') || hash.includes('urban-hero-sevilla-este')) {
      return '/urban-hero-sevilla-este';
    }

    return '/';
  };

  const [currentRoute, setCurrentRoute] = useState<string>(parseCurrentPath);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(parseCurrentPath());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    if (typeof window !== 'undefined') {
      try {
        window.history.pushState({}, '', path);
      } catch {
        window.location.hash = path.replace('/', '');
      }
      setCurrentRoute(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Intercept internal route anchor clicks
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (!href) return;

      // Ignore external protocols
      if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:')) {
        return;
      }

      // Check for internal gym routes
      const matchedRoutes = [
        '/urban-hero-el-pino/disciplinas',
        '/urban-hero-el-pino/metodologia',
        '/urban-hero-el-pino/horarios',
        '/urban-hero-el-pino/coaches',
        '/urban-hero-el-pino/tarifas',
        '/urban-hero-el-pino/instalaciones',
        '/urban-hero-el-pino/contacto',
        '/urban-hero-el-pino/faq',
        '/urban-hero-el-pino',
        '/urban-hero-sevilla-este/disciplinas',
        '/urban-hero-sevilla-este/metodologia',
        '/urban-hero-sevilla-este/horarios',
        '/urban-hero-sevilla-este/coaches',
        '/urban-hero-sevilla-este/tarifas',
        '/urban-hero-sevilla-este/instalaciones',
        '/urban-hero-sevilla-este/contacto',
        '/urban-hero-sevilla-este/faq',
        '/urban-hero-sevilla-este',
      ];

      for (const route of matchedRoutes) {
        if (href.startsWith(route)) {
          e.preventDefault();
          const hashIdx = href.indexOf('#');
          if (hashIdx !== -1) {
            const pathPart = href.substring(0, hashIdx);
            const anchorId = href.substring(hashIdx + 1);
            if (pathPart === currentRoute) {
              const el = document.getElementById(anchorId);
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            } else {
              navigateTo(pathPart);
              setTimeout(() => {
                const el = document.getElementById(anchorId);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 150);
            }
          } else {
            navigateTo(route);
          }
          return;
        }
      }

      // Root home navigation
      if (href === '/') {
        e.preventDefault();
        navigateTo('/');
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [currentRoute]);

  // Dynamic SEO title sync
  useEffect(() => {
    if (typeof document !== 'undefined') {
      switch (currentRoute) {
        // El Pino Routes
        case '/urban-hero-el-pino/disciplinas':
          document.title = 'Disciplinas Oficiales | Urban Hero El Pino Sevilla';
          break;
        case '/urban-hero-el-pino/metodologia':
          document.title = 'Metodología y Valores | Urban Hero El Pino Sevilla';
          break;
        case '/urban-hero-el-pino/horarios':
          document.title = 'Horarios Semanales | Urban Hero El Pino Sevilla';
          break;
        case '/urban-hero-el-pino/coaches':
          document.title = 'Equipo de Coaches | Urban Hero El Pino Sevilla';
          break;
        case '/urban-hero-el-pino/tarifas':
          document.title = 'Tarifas y Membresías | Urban Hero El Pino Sevilla';
          break;
        case '/urban-hero-el-pino/instalaciones':
          document.title = 'Instalaciones y Galería | Urban Hero El Pino Sevilla';
          break;
        case '/urban-hero-el-pino/contacto':
          document.title = 'Dónde Estamos y Contacto | Urban Hero El Pino Sevilla';
          break;
        case '/urban-hero-el-pino/faq':
          document.title = 'Preguntas Frecuentes | Urban Hero El Pino Sevilla';
          break;
        case '/urban-hero-el-pino':
          document.title = 'Urban Hero El Pino | Box de CrossTraining, Halterofilia y Open Box en Sevilla';
          break;

        // Sevilla Este Routes
        case '/urban-hero-sevilla-este/disciplinas':
          document.title = 'Disciplinas Funcionales | Urban Hero Sevilla Este';
          break;
        case '/urban-hero-sevilla-este/metodologia':
          document.title = 'Metodología y Valores | Urban Hero Sevilla Este';
          break;
        case '/urban-hero-sevilla-este/horarios':
          document.title = 'Horarios Semanales | Urban Hero Sevilla Este';
          break;
        case '/urban-hero-sevilla-este/coaches':
          document.title = 'Equipo de Coaches | Urban Hero Sevilla Este';
          break;
        case '/urban-hero-sevilla-este/tarifas':
          document.title = 'Tarifas y Bonos | Urban Hero Sevilla Este';
          break;
        case '/urban-hero-sevilla-este/instalaciones':
          document.title = 'Instalaciones en Hotel Vértice | Urban Hero Sevilla Este';
          break;
        case '/urban-hero-sevilla-este/contacto':
          document.title = 'Dónde Estamos y Contacto | Urban Hero Sevilla Este';
          break;
        case '/urban-hero-sevilla-este/faq':
          document.title = 'Preguntas Frecuentes | Urban Hero Sevilla Este';
          break;
        case '/urban-hero-sevilla-este':
          document.title = 'Urban Hero Sevilla Este | Entrenamiento Funcional y Salud en Hotel Vértice Sevilla';
          break;

        default:
          document.title = 'Urban Hero Training Center | CrossTraining y Entrenamiento Funcional en Sevilla';
      }
    }
  }, [currentRoute]);

  const scrollToTrialSection = (gymId?: 'el-pino' | 'sevilla-este') => {
    if (gymId) {
      setSelectedTrialGym(gymId);
    }
    const element = document.getElementById('unete');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToGymTrial = () => {
    const el = document.getElementById('clases-gratis');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigateTo(currentRoute.startsWith('/urban-hero-el-pino') ? '/urban-hero-el-pino#clases-gratis' : '/urban-hero-sevilla-este#clases-gratis');
    }
  };

  const renderSharedModals = () => (
    <>
      <LegalModals
        currentModal={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
        onOpenCookieSettings={() => setIsCookieSettingsOpen(true)}
      />
      <CookieBanner
        onOpenLegal={(type) => setActiveLegalModal(type)}
        isSettingsOpenDirectly={isCookieSettingsOpen}
        onCloseSettingsDirectly={() => setIsCookieSettingsOpen(false)}
      />
    </>
  );

  // ==========================================
  // 1. EL PINO DEDICATED SECTION PAGES & HOME
  // ==========================================

  if (currentRoute === '/urban-hero-el-pino/disciplinas') {
    return (
      <>
        <ErrorBoundary fallbackTitle="Disciplinas Urban Hero El Pino">
          <ElPinoDisciplinesPage
            onNavigateHome={() => navigateTo('/')}
            onNavigateToGymHome={() => navigateTo('/urban-hero-el-pino')}
            onNavigateToSevillaEste={() => navigateTo('/urban-hero-sevilla-este')}
            onOpenLegal={(type) => setActiveLegalModal(type)}
            onOpenCookieSettings={() => setIsCookieSettingsOpen(true)}
            onOpenTrial={scrollToGymTrial}
          />
        </ErrorBoundary>
        {renderSharedModals()}
      </>
    );
  }

  if (currentRoute === '/urban-hero-el-pino/metodologia') {
    return (
      <>
        <ErrorBoundary fallbackTitle="Metodología Urban Hero El Pino">
          <ElPinoMethodologyPage
            onNavigateHome={() => navigateTo('/')}
            onNavigateToGymHome={() => navigateTo('/urban-hero-el-pino')}
            onNavigateToSevillaEste={() => navigateTo('/urban-hero-sevilla-este')}
            onOpenLegal={(type) => setActiveLegalModal(type)}
            onOpenCookieSettings={() => setIsCookieSettingsOpen(true)}
            onOpenTrial={scrollToGymTrial}
          />
        </ErrorBoundary>
        {renderSharedModals()}
      </>
    );
  }

  if (currentRoute === '/urban-hero-el-pino/horarios') {
    return (
      <>
        <ErrorBoundary fallbackTitle="Horarios Urban Hero El Pino">
          <ElPinoSchedulePage
            onNavigateHome={() => navigateTo('/')}
            onNavigateToGymHome={() => navigateTo('/urban-hero-el-pino')}
            onNavigateToSevillaEste={() => navigateTo('/urban-hero-sevilla-este')}
            onOpenLegal={(type) => setActiveLegalModal(type)}
            onOpenCookieSettings={() => setIsCookieSettingsOpen(true)}
            onOpenTrial={scrollToGymTrial}
          />
        </ErrorBoundary>
        {renderSharedModals()}
      </>
    );
  }

  if (currentRoute === '/urban-hero-el-pino/coaches') {
    return (
      <>
        <ErrorBoundary fallbackTitle="Coaches Urban Hero El Pino">
          <ElPinoCoachesPage
            onNavigateHome={() => navigateTo('/')}
            onNavigateToGymHome={() => navigateTo('/urban-hero-el-pino')}
            onNavigateToSevillaEste={() => navigateTo('/urban-hero-sevilla-este')}
            onOpenLegal={(type) => setActiveLegalModal(type)}
            onOpenCookieSettings={() => setIsCookieSettingsOpen(true)}
            onOpenTrial={scrollToGymTrial}
          />
        </ErrorBoundary>
        {renderSharedModals()}
      </>
    );
  }

  if (currentRoute === '/urban-hero-el-pino/tarifas') {
    return (
      <>
        <ErrorBoundary fallbackTitle="Tarifas Urban Hero El Pino">
          <ElPinoPricingPage
            onNavigateHome={() => navigateTo('/')}
            onNavigateToGymHome={() => navigateTo('/urban-hero-el-pino')}
            onNavigateToSevillaEste={() => navigateTo('/urban-hero-sevilla-este')}
            onOpenLegal={(type) => setActiveLegalModal(type)}
            onOpenCookieSettings={() => setIsCookieSettingsOpen(true)}
            onOpenTrial={scrollToGymTrial}
          />
        </ErrorBoundary>
        {renderSharedModals()}
      </>
    );
  }

  if (currentRoute === '/urban-hero-el-pino/instalaciones') {
    return (
      <>
        <ErrorBoundary fallbackTitle="Instalaciones Urban Hero El Pino">
          <ElPinoInstallationsPage
            onNavigateHome={() => navigateTo('/')}
            onNavigateToGymHome={() => navigateTo('/urban-hero-el-pino')}
            onNavigateToSevillaEste={() => navigateTo('/urban-hero-sevilla-este')}
            onOpenLegal={(type) => setActiveLegalModal(type)}
            onOpenCookieSettings={() => setIsCookieSettingsOpen(true)}
            onOpenTrial={scrollToGymTrial}
          />
        </ErrorBoundary>
        {renderSharedModals()}
      </>
    );
  }

  if (currentRoute === '/urban-hero-el-pino/contacto') {
    return (
      <>
        <ErrorBoundary fallbackTitle="Contacto Urban Hero El Pino">
          <ElPinoContactPage
            onNavigateHome={() => navigateTo('/')}
            onNavigateToGymHome={() => navigateTo('/urban-hero-el-pino')}
            onNavigateToSevillaEste={() => navigateTo('/urban-hero-sevilla-este')}
            onOpenLegal={(type) => setActiveLegalModal(type)}
            onOpenCookieSettings={() => setIsCookieSettingsOpen(true)}
            onOpenTrial={scrollToGymTrial}
          />
        </ErrorBoundary>
        {renderSharedModals()}
      </>
    );
  }

  if (currentRoute === '/urban-hero-el-pino/faq') {
    return (
      <>
        <ErrorBoundary fallbackTitle="FAQ Urban Hero El Pino">
          <ElPinoFAQPage
            onNavigateHome={() => navigateTo('/')}
            onNavigateToGymHome={() => navigateTo('/urban-hero-el-pino')}
            onNavigateToSevillaEste={() => navigateTo('/urban-hero-sevilla-este')}
            onOpenLegal={(type) => setActiveLegalModal(type)}
            onOpenCookieSettings={() => setIsCookieSettingsOpen(true)}
            onOpenTrial={scrollToGymTrial}
          />
        </ErrorBoundary>
        {renderSharedModals()}
      </>
    );
  }

  if (currentRoute === '/urban-hero-el-pino') {
    return (
      <>
        <ErrorBoundary fallbackTitle="Web Oficial Urban Hero El Pino">
          <ElPinoPage
            onNavigateHome={() => navigateTo('/')}
            onNavigateToSevillaEste={() => navigateTo('/urban-hero-sevilla-este')}
            onNavigateToDisciplines={() => navigateTo('/urban-hero-el-pino/disciplinas')}
            onNavigateToMethodology={() => navigateTo('/urban-hero-el-pino/metodologia')}
            onNavigateToSchedule={() => navigateTo('/urban-hero-el-pino/horarios')}
            onNavigateToCoaches={() => navigateTo('/urban-hero-el-pino/coaches')}
            onNavigateToPricing={() => navigateTo('/urban-hero-el-pino/tarifas')}
            onNavigateToInstallations={() => navigateTo('/urban-hero-el-pino/instalaciones')}
            onNavigateToContact={() => navigateTo('/urban-hero-el-pino/contacto')}
            onNavigateToFAQ={() => navigateTo('/urban-hero-el-pino/faq')}
            onOpenLegal={(type) => setActiveLegalModal(type)}
            onOpenCookieSettings={() => setIsCookieSettingsOpen(true)}
          />
        </ErrorBoundary>
        {renderSharedModals()}
      </>
    );
  }

  // ===============================================
  // 2. SEVILLA ESTE DEDICATED SECTION PAGES & HOME
  // ===============================================

  if (currentRoute === '/urban-hero-sevilla-este/disciplinas') {
    return (
      <>
        <ErrorBoundary fallbackTitle="Disciplinas Urban Hero Sevilla Este">
          <SevillaEsteDisciplinesPage
            onNavigateHome={() => navigateTo('/')}
            onNavigateToGymHome={() => navigateTo('/urban-hero-sevilla-este')}
            onNavigateToElPino={() => navigateTo('/urban-hero-el-pino')}
            onOpenLegal={(type) => setActiveLegalModal(type)}
            onOpenCookieSettings={() => setIsCookieSettingsOpen(true)}
            onOpenTrial={scrollToGymTrial}
          />
        </ErrorBoundary>
        {renderSharedModals()}
      </>
    );
  }

  if (currentRoute === '/urban-hero-sevilla-este/metodologia') {
    return (
      <>
        <ErrorBoundary fallbackTitle="Metodología Urban Hero Sevilla Este">
          <SevillaEsteMethodologyPage
            onNavigateHome={() => navigateTo('/')}
            onNavigateToGymHome={() => navigateTo('/urban-hero-sevilla-este')}
            onNavigateToElPino={() => navigateTo('/urban-hero-el-pino')}
            onOpenLegal={(type) => setActiveLegalModal(type)}
            onOpenCookieSettings={() => setIsCookieSettingsOpen(true)}
            onOpenTrial={scrollToGymTrial}
          />
        </ErrorBoundary>
        {renderSharedModals()}
      </>
    );
  }

  if (currentRoute === '/urban-hero-sevilla-este/horarios') {
    return (
      <>
        <ErrorBoundary fallbackTitle="Horarios Urban Hero Sevilla Este">
          <SevillaEsteSchedulePage
            onNavigateHome={() => navigateTo('/')}
            onNavigateToGymHome={() => navigateTo('/urban-hero-sevilla-este')}
            onNavigateToElPino={() => navigateTo('/urban-hero-el-pino')}
            onOpenLegal={(type) => setActiveLegalModal(type)}
            onOpenCookieSettings={() => setIsCookieSettingsOpen(true)}
            onOpenTrial={scrollToGymTrial}
          />
        </ErrorBoundary>
        {renderSharedModals()}
      </>
    );
  }

  if (currentRoute === '/urban-hero-sevilla-este/coaches') {
    return (
      <>
        <ErrorBoundary fallbackTitle="Coaches Urban Hero Sevilla Este">
          <SevillaEsteCoachesPage
            onNavigateHome={() => navigateTo('/')}
            onNavigateToGymHome={() => navigateTo('/urban-hero-sevilla-este')}
            onNavigateToElPino={() => navigateTo('/urban-hero-el-pino')}
            onOpenLegal={(type) => setActiveLegalModal(type)}
            onOpenCookieSettings={() => setIsCookieSettingsOpen(true)}
            onOpenTrial={scrollToGymTrial}
          />
        </ErrorBoundary>
        {renderSharedModals()}
      </>
    );
  }

  if (currentRoute === '/urban-hero-sevilla-este/tarifas') {
    return (
      <>
        <ErrorBoundary fallbackTitle="Tarifas Urban Hero Sevilla Este">
          <SevillaEstePricingPage
            onNavigateHome={() => navigateTo('/')}
            onNavigateToGymHome={() => navigateTo('/urban-hero-sevilla-este')}
            onNavigateToElPino={() => navigateTo('/urban-hero-el-pino')}
            onOpenLegal={(type) => setActiveLegalModal(type)}
            onOpenCookieSettings={() => setIsCookieSettingsOpen(true)}
            onOpenTrial={scrollToGymTrial}
          />
        </ErrorBoundary>
        {renderSharedModals()}
      </>
    );
  }

  if (currentRoute === '/urban-hero-sevilla-este/instalaciones') {
    return (
      <>
        <ErrorBoundary fallbackTitle="Instalaciones Urban Hero Sevilla Este">
          <SevillaEsteInstallationsPage
            onNavigateHome={() => navigateTo('/')}
            onNavigateToGymHome={() => navigateTo('/urban-hero-sevilla-este')}
            onNavigateToElPino={() => navigateTo('/urban-hero-el-pino')}
            onOpenLegal={(type) => setActiveLegalModal(type)}
            onOpenCookieSettings={() => setIsCookieSettingsOpen(true)}
            onOpenTrial={scrollToGymTrial}
          />
        </ErrorBoundary>
        {renderSharedModals()}
      </>
    );
  }

  if (currentRoute === '/urban-hero-sevilla-este/contacto') {
    return (
      <>
        <ErrorBoundary fallbackTitle="Contacto Urban Hero Sevilla Este">
          <SevillaEsteContactPage
            onNavigateHome={() => navigateTo('/')}
            onNavigateToGymHome={() => navigateTo('/urban-hero-sevilla-este')}
            onNavigateToElPino={() => navigateTo('/urban-hero-el-pino')}
            onOpenLegal={(type) => setActiveLegalModal(type)}
            onOpenCookieSettings={() => setIsCookieSettingsOpen(true)}
            onOpenTrial={scrollToGymTrial}
          />
        </ErrorBoundary>
        {renderSharedModals()}
      </>
    );
  }

  if (currentRoute === '/urban-hero-sevilla-este/faq') {
    return (
      <>
        <ErrorBoundary fallbackTitle="FAQ Urban Hero Sevilla Este">
          <SevillaEsteFAQPage
            onNavigateHome={() => navigateTo('/')}
            onNavigateToGymHome={() => navigateTo('/urban-hero-sevilla-este')}
            onNavigateToElPino={() => navigateTo('/urban-hero-el-pino')}
            onOpenLegal={(type) => setActiveLegalModal(type)}
            onOpenCookieSettings={() => setIsCookieSettingsOpen(true)}
            onOpenTrial={scrollToGymTrial}
          />
        </ErrorBoundary>
        {renderSharedModals()}
      </>
    );
  }

  if (currentRoute === '/urban-hero-sevilla-este') {
    return (
      <>
        <ErrorBoundary fallbackTitle="Web Oficial Urban Hero Sevilla Este">
          <SevillaEstePage
            onNavigateHome={() => navigateTo('/')}
            onNavigateToElPino={() => navigateTo('/urban-hero-el-pino')}
            onNavigateToDisciplines={() => navigateTo('/urban-hero-sevilla-este/disciplinas')}
            onNavigateToMethodology={() => navigateTo('/urban-hero-sevilla-este/metodologia')}
            onNavigateToSchedule={() => navigateTo('/urban-hero-sevilla-este/horarios')}
            onNavigateToCoaches={() => navigateTo('/urban-hero-sevilla-este/coaches')}
            onNavigateToPricing={() => navigateTo('/urban-hero-sevilla-este/tarifas')}
            onNavigateToInstallations={() => navigateTo('/urban-hero-sevilla-este/instalaciones')}
            onNavigateToContact={() => navigateTo('/urban-hero-sevilla-este/contacto')}
            onNavigateToFAQ={() => navigateTo('/urban-hero-sevilla-este/faq')}
            onOpenLegal={(type) => setActiveLegalModal(type)}
            onOpenCookieSettings={() => setIsCookieSettingsOpen(true)}
          />
        </ErrorBoundary>
        {renderSharedModals()}
      </>
    );
  }

  // ====================================================
  // 3. CORPORATE LANDING PAGE (Completely Preserved)
  // ====================================================
  return (
    <div className="min-h-screen bg-[#061325] text-slate-100 flex flex-col font-sans selection:bg-[#00d2ff] selection:text-[#061325]">
      {/* 1. Header & Navigation with 3D Identity */}
      <Header
        onOpenTrial={scrollToTrialSection}
        onNavigateToElPino={() => navigateTo('/urban-hero-el-pino')}
        onNavigateToSevillaEste={() => navigateTo('/urban-hero-sevilla-este')}
      />

      <main className="flex-1">
        {/* A. Hero Section with Background Video & 3D Extruded Logo */}
        <ErrorBoundary fallbackTitle="Hero Urban Hero">
          <Hero onOpenTrial={scrollToTrialSection} />
        </ErrorBoundary>

        {/* B. Choose Your Gym: El Pino & Sevilla Este Premium Cards */}
        <ErrorBoundary fallbackTitle="Nuestros Gimnasios en Sevilla">
          <GymCards
            onSelectGymForTrial={scrollToTrialSection}
            onNavigateToElPino={() => navigateTo('/urban-hero-el-pino')}
            onNavigateToSevillaEste={() => navigateTo('/urban-hero-sevilla-este')}
          />
        </ErrorBoundary>

        {/* C. Our Methodology: Philosophy, Technique, Individual Scaling */}
        <ErrorBoundary fallbackTitle="Nuestra Metodología">
          <Methodology />
        </ErrorBoundary>

        {/* D. Our Values: Community, Commitment, Professionalism, Continuous Improvement */}
        <ErrorBoundary fallbackTitle="Nuestros Valores">
          <Values />
        </ErrorBoundary>

        {/* E. What Makes Our Gyms Different: Comparison Matrix & Interactive Finder */}
        <ErrorBoundary fallbackTitle="Comparativa de Centros">
          <ComparisonMatrix onSelectGymForTrial={scrollToTrialSection} />
        </ErrorBoundary>

        {/* High-Precision Athletic Timer & Target Reaction Challenge */}
        <ErrorBoundary fallbackTitle="Precision Athletic Timer">
          <TimerChallenge />
        </ErrorBoundary>

        {/* F. Join Urban Hero: 2 Free Trial Classes & Verified Booking */}
        <ErrorBoundary fallbackTitle="Reserva de 2 Clases Gratis">
          <JoinTrialSection selectedGymId={selectedTrialGym} />
        </ErrorBoundary>

        {/* G. Latest News */}
        <ErrorBoundary fallbackTitle="Últimas Noticias">
          <LatestNews />
        </ErrorBoundary>

        {/* H. Instagram Feed: Real posts linking to @urbanheroelpino & @urbanherosevillaeste */}
        <ErrorBoundary fallbackTitle="Comunidad Instagram">
          <InstagramFeed />
        </ErrorBoundary>

        {/* I. FAQ */}
        <ErrorBoundary fallbackTitle="Preguntas Frecuentes">
          <FAQ />
        </ErrorBoundary>

        {/* J. Final CTA */}
        <ErrorBoundary fallbackTitle="Comienza tu entrenamiento">
          <FinalCTA onOpenTrial={scrollToTrialSection} />
        </ErrorBoundary>
      </main>

      {/* K. Footer */}
      <Footer
        onOpenLegal={(type) => setActiveLegalModal(type)}
        onOpenCookieSettings={() => setIsCookieSettingsOpen(true)}
        onOpenTrial={scrollToTrialSection}
      />

      {/* Legal & Privacy Compliance Modals */}
      <LegalModals
        currentModal={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
        onOpenCookieSettings={() => setIsCookieSettingsOpen(true)}
      />

      {/* LSSI-CE & GDPR Cookie Consent Banner */}
      <CookieBanner
        onOpenLegal={(type) => setActiveLegalModal(type)}
        isSettingsOpenDirectly={isCookieSettingsOpen}
        onCloseSettingsDirectly={() => setIsCookieSettingsOpen(false)}
      />
    </div>
  );
}
