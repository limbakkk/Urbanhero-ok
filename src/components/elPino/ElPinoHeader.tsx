import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  ArrowLeft,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

export type GymSectionId =
  | 'inicio'
  | 'disciplinas'
  | 'metodologia'
  | 'valores'
  | 'horarios'
  | 'coaches'
  | 'tarifas'
  | 'instalaciones'
  | 'contacto'
  | 'faq'
  | 'clase-gratis';

interface ElPinoHeaderProps {
  activeSection?: GymSectionId;
  onNavigateHome: () => void;
  onNavigateToGymHome?: () => void;
  onNavigateToSevillaEste?: () => void;
  onNavigateToDisciplines?: () => void;
  onNavigateToMethodology?: () => void;
  onNavigateToSchedule?: () => void;
  onNavigateToCoaches?: () => void;
  onNavigateToPricing?: () => void;
  onNavigateToInstallations?: () => void;
  onNavigateToContact?: () => void;
  onNavigateToFAQ?: () => void;
  onOpenTrial: () => void;
}

export const ElPinoHeader: React.FC<ElPinoHeaderProps> = (props) => {
  const {
    activeSection,
    onNavigateHome,
    onNavigateToGymHome,
    onNavigateToSevillaEste,
    onNavigateToDisciplines,
    onNavigateToMethodology,
    onNavigateToSchedule,
    onNavigateToCoaches,
    onNavigateToPricing,
    onNavigateToInstallations,
    onNavigateToContact,
    onNavigateToFAQ,
    onOpenTrial,
  } = props;

  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  // Dynamic active section detection with fallback to URL path & hash
  const getDetectedSection = (): GymSectionId => {
    if (activeSection) return activeSection;
    if (typeof window !== 'undefined') {
      const p = window.location.pathname.toLowerCase();
      const h = window.location.hash.toLowerCase();
      if (h.includes('valores')) return 'valores';
      if (h.includes('clases-gratis') || h.includes('trial')) return 'clase-gratis';
      if (p.includes('/disciplinas')) return 'disciplinas';
      if (p.includes('/metodologia')) return 'metodologia';
      if (p.includes('/horarios')) return 'horarios';
      if (p.includes('/coaches')) return 'coaches';
      if (p.includes('/tarifas')) return 'tarifas';
      if (p.includes('/instalaciones')) return 'instalaciones';
      if (p.includes('/contacto')) return 'contacto';
      if (p.includes('/faq')) return 'faq';
      if (p.includes('urban-hero-el-pino')) return 'inicio';
    }
    return 'inicio';
  };

  const [currentSection, setCurrentSection] = useState<GymSectionId>(getDetectedSection);

  useEffect(() => {
    setCurrentSection(getDetectedSection());
    const handlePopState = () => {
      setCurrentSection(getDetectedSection());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [activeSection]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      // Keep header visible when near top or when mobile menu is open
      if (mobileMenuOpen || currentScrollY < 80) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      const diff = currentScrollY - lastScrollY.current;
      // 14px hysteresis prevents flickering on minor scroll movements
      if (Math.abs(diff) > 14) {
        if (diff > 0 && currentScrollY > 120) {
          setIsVisible(false);
        } else if (diff < -10) {
          setIsVisible(true);
        }
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavClick = (targetId: GymSectionId, fn?: () => void, fallbackPath?: string) => {
    setMobileMenuOpen(false);
    setCurrentSection(targetId);

    if (fn) {
      fn();
    } else if (fallbackPath && typeof window !== 'undefined') {
      try {
        window.history.pushState({}, '', fallbackPath);
        window.dispatchEvent(new PopStateEvent('popstate'));
      } catch {
        window.location.href = fallbackPath;
      }
    }
  };

  const renderNavLink = (
    id: GymSectionId,
    label: string,
    fn?: () => void,
    fallbackPath?: string
  ) => {
    const isCurrentActive = currentSection === id;
    return (
      <button
        key={id}
        type="button"
        onClick={() => handleNavClick(id, fn, fallbackPath)}
        className={`relative px-2 xl:px-2.5 py-1 xl:py-1.5 text-xs xl:text-[13px] uppercase tracking-wider font-extrabold transition-all whitespace-nowrap cursor-pointer rounded-lg ${
          isCurrentActive
            ? 'text-[#00d2ff] bg-cyan-500/15 border-b-2 border-[#00d2ff] shadow-[0_2px_8px_rgba(0,210,255,0.25)]'
            : 'text-slate-300 hover:text-white hover:text-[#00d2ff] hover:bg-white/5 border-b-2 border-transparent'
        }`}
        aria-current={isCurrentActive ? 'page' : undefined}
      >
        <span className="flex items-center gap-1.5">
          {isCurrentActive && (
            <span className="w-2 h-2 rounded-full bg-[#00d2ff] shadow-[0_0_8px_#00d2ff] shrink-0" />
          )}
          <span>{label}</span>
        </span>
      </button>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none w-full max-w-full overflow-visible ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled
          ? 'bg-[#061325]/95 backdrop-blur-md border-b border-cyan-500/25 shadow-2xl py-2.5 sm:py-3 lg:py-3.5'
          : 'bg-gradient-to-b from-[#061325]/98 via-[#061325]/92 to-[#061325]/85 border-b border-cyan-500/20 py-3 sm:py-4 lg:py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between gap-1.5 sm:gap-2.5 lg:gap-3 relative">
          
          {/* LEFT: Logo & Brand Block */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 z-20">
            {/* Brand Block */}
            <button
              type="button"
              onClick={() => handleNavClick('inicio', onNavigateToGymHome || onNavigateHome, '/urban-hero-el-pino')}
              className="flex items-center gap-2 sm:gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[#00d2ff] rounded-xl p-0.5 text-left cursor-pointer shrink-0"
              aria-label="Ir a portada de Urban Hero El Pino"
            >
              <div className="relative w-11 sm:w-12 lg:w-13 h-11 sm:h-12 lg:h-13 group-hover:scale-105 transition-transform flex items-center justify-center shrink-0">
                <img
                  src="/assets/aistudio/urban_hero_symbol_transparent.png"
                  alt="Logo Urban Hero El Pino"
                  className="w-full h-full object-contain drop-shadow-[0_2px_10px_rgba(0,210,255,0.45)]"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-[9px] sm:text-[10px] lg:text-[11px] tracking-[0.22em] text-cyan-400 uppercase font-black leading-tight">
                  Box CrossTraining
                </span>
                <span className="text-lg sm:text-xl lg:text-2xl font-black tracking-wider text-white uppercase font-heading leading-tight group-hover:text-cyan-300 transition-colors">
                  Urban Hero
                </span>
              </div>
            </button>
          </div>

          {/* CENTER: UNIFIED TWO-ROW NAVIGATION BAR (Centered on the exact central axis, slightly shifted downward) */}
          <div className="hidden lg:flex flex-col items-center justify-center gap-1 xl:gap-1.5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mt-1 z-10 pointer-events-auto">
            
            {/* ROW 1: 5 Evenly Distributed Primary Sections */}
            <nav className="flex items-center justify-center gap-1.5 xl:gap-2 flex-nowrap" aria-label="Navegación principal fila 1">
              {renderNavLink('inicio', 'Inicio', onNavigateToGymHome || onNavigateHome, '/urban-hero-el-pino')}
              {renderNavLink('disciplinas', 'Disciplinas', onNavigateToDisciplines, '/urban-hero-el-pino/disciplinas')}
              {renderNavLink('metodologia', 'Metodología', onNavigateToMethodology, '/urban-hero-el-pino/metodologia')}
              {renderNavLink('valores', 'Valores', () => {
                if (typeof window !== 'undefined') {
                  const el = document.getElementById('valores');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    handleNavClick('valores', onNavigateToMethodology, '/urban-hero-el-pino/metodologia#valores');
                  }
                }
              }, '/urban-hero-el-pino/metodologia#valores')}
              {renderNavLink('horarios', 'Horarios', onNavigateToSchedule, '/urban-hero-el-pino/horarios')}
            </nav>

            {/* ROW 2: 5 Evenly Distributed Primary Sections (Directly Beneath Row 1 Along the Same Axis) */}
            <nav className="flex items-center justify-center gap-1.5 xl:gap-2 flex-nowrap" aria-label="Navegación principal fila 2">
              {renderNavLink('coaches', 'Coaches', onNavigateToCoaches, '/urban-hero-el-pino/coaches')}
              {renderNavLink('tarifas', 'Tarifas', onNavigateToPricing, '/urban-hero-el-pino/tarifas')}
              {renderNavLink('instalaciones', 'Instalaciones', onNavigateToInstallations, '/urban-hero-el-pino/instalaciones')}
              {renderNavLink('contacto', 'Contacto', onNavigateToContact, '/urban-hero-el-pino/contacto')}
              {renderNavLink('faq', 'FAQ', onNavigateToFAQ, '/urban-hero-el-pino/faq')}
            </nav>

          </div>

          {/* RIGHT: Stacked 2 Clases Gratis CTA (moved inwards) + Stacked Location Cards (moved outwards) + Mobile Controls */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 z-20">
            {/* Stacked Free-Trial CTA Button: 2 Clases / Gratis */}
            <button
              type="button"
              id="elpino-header-trial-cta"
              onClick={onOpenTrial}
              className="relative group overflow-hidden px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-gradient-to-r from-[#00d2ff] to-[#0ea5e9] text-[#061325] shadow-lg shadow-cyan-500/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 shrink-0 cursor-pointer text-center leading-none"
              title="Reservar 2 Clases Gratis"
            >
              <Sparkles className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-[#061325] shrink-0" />
              <span className="flex flex-col items-center justify-center font-black uppercase text-[10.5px] sm:text-[11.5px] tracking-wider leading-[1.08]">
                <span>2 Clases</span>
                <span className="tracking-widest">Gratis</span>
              </span>
            </button>

            {/* Stacked Location Cards (Desktop) */}
            <div className="hidden lg:flex flex-col gap-1.5 w-32 xl:w-36 shrink-0">
              {/* Sede Central Card (Top) */}
              <button
                type="button"
                onClick={onNavigateHome}
                className="w-full flex items-center justify-between px-2.5 xl:px-3 py-1 rounded-lg bg-white/5 hover:bg-cyan-500/15 text-cyan-300 border border-cyan-500/25 text-[11px] xl:text-xs font-bold gap-1.5 transition-colors cursor-pointer"
                title="Volver a la portada general de Urban Hero"
              >
                <span className="whitespace-nowrap">Sede Central</span>
                <ArrowLeft className="w-3 h-3 text-cyan-400 shrink-0" />
              </button>

              {/* Sevilla Este Card (Underneath) */}
              {onNavigateToSevillaEste ? (
                <button
                  type="button"
                  onClick={onNavigateToSevillaEste}
                  className="w-full flex items-center justify-between px-2.5 xl:px-3 py-1 rounded-lg bg-white/5 hover:bg-cyan-500/15 text-cyan-300 border border-cyan-500/25 text-[11px] xl:text-xs font-bold gap-1.5 transition-colors cursor-pointer"
                  title="Visitar sede de Sevilla Este"
                >
                  <span className="whitespace-nowrap">Sevilla Este</span>
                  <ExternalLink className="w-3 h-3 text-cyan-400 shrink-0" />
                </button>
              ) : (
                <a
                  href="/urban-hero-sevilla-este"
                  className="w-full flex items-center justify-between px-2.5 xl:px-3 py-1 rounded-lg bg-white/5 hover:bg-cyan-500/15 text-cyan-300 border border-cyan-500/25 text-[11px] xl:text-xs font-bold gap-1.5 transition-colors cursor-pointer"
                  title="Visitar sede de Sevilla Este"
                >
                  <span className="whitespace-nowrap">Sevilla Este</span>
                  <ExternalLink className="w-3 h-3 text-cyan-400 shrink-0" />
                </a>
              )}
            </div>

            {/* Mobile Controls & Three-Dot Menu Indicator */}
            <button
              type="button"
              id="elpino-mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 sm:p-2.5 rounded-xl text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400 shrink-0 cursor-pointer flex items-center gap-1.5"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-cyan-300" />
              ) : (
                <div className="flex items-center gap-1">
                  <Menu className="w-5 h-5 text-cyan-400" />
                  <span className="flex flex-col gap-0.5 justify-center py-0.5" aria-hidden="true">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  </span>
                </div>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer with Blue Active Highlighting */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#061427]/98 border-b border-cyan-500/25 px-4 pt-3 pb-6 space-y-2.5 backdrop-blur-xl animate-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto">
          
          <div className="space-y-1.5 border-b border-white/10 pb-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateHome();
              }}
              className="w-full text-left px-3.5 py-2.5 rounded-lg text-sm sm:text-base font-bold text-cyan-300 hover:bg-white/5 flex items-center gap-2 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Volver a Sede Central Urban Hero</span>
            </button>

            {[
              { id: 'inicio', label: 'Inicio', fn: onNavigateToGymHome || onNavigateHome, path: '/urban-hero-el-pino' },
              { id: 'disciplinas', label: 'Disciplinas', fn: onNavigateToDisciplines, path: '/urban-hero-el-pino/disciplinas' },
              { id: 'metodologia', label: 'Metodología', fn: onNavigateToMethodology, path: '/urban-hero-el-pino/metodologia' },
              {
                id: 'valores',
                label: 'Valores',
                fn: () => {
                  if (typeof window !== 'undefined') {
                    const el = document.getElementById('valores');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    } else if (onNavigateToMethodology) {
                      onNavigateToMethodology();
                    }
                  }
                },
                path: '/urban-hero-el-pino/metodologia#valores',
              },
              { id: 'horarios', label: 'Horarios', fn: onNavigateToSchedule, path: '/urban-hero-el-pino/horarios' },
              { id: 'coaches', label: 'Equipo de Coaches', fn: onNavigateToCoaches, path: '/urban-hero-el-pino/coaches' },
              { id: 'tarifas', label: 'Tarifas y Bonos', fn: onNavigateToPricing, path: '/urban-hero-el-pino/tarifas' },
              { id: 'instalaciones', label: 'Instalaciones y Galería', fn: onNavigateToInstallations, path: '/urban-hero-el-pino/instalaciones' },
              { id: 'contacto', label: 'Ubicación y Contacto', fn: onNavigateToContact, path: '/urban-hero-el-pino/contacto' },
              { id: 'faq', label: 'Preguntas Frecuentes (FAQ)', fn: onNavigateToFAQ, path: '/urban-hero-el-pino/faq' },
            ].map((sec) => {
              const isCurrentActive = currentSection === sec.id;
              return (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => handleNavClick(sec.id as GymSectionId, sec.fn, sec.path)}
                  className={`w-full text-left flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm sm:text-base transition-all cursor-pointer ${
                    isCurrentActive
                      ? 'text-[#00d2ff] bg-cyan-500/15 font-bold border-l-4 border-[#00d2ff]'
                      : 'text-slate-200 hover:bg-white/5 hover:text-white font-medium border-l-4 border-transparent'
                  }`}
                  aria-current={isCurrentActive ? 'page' : undefined}
                >
                  <span>{sec.label}</span>
                  {isCurrentActive && (
                    <span className="flex items-center gap-1.5 text-[11px] font-black uppercase text-[#00d2ff] bg-cyan-400/20 px-2 py-0.5 rounded-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00d2ff] shadow-[0_0_6px_#00d2ff]"></span>
                      <span>Activo</span>
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Quick Sister Gym Switch in Mobile Drawer */}
          <div className="pt-2">
            {onNavigateToSevillaEste ? (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateToSevillaEste();
                }}
                className="w-full flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-cyan-500/10 border border-cyan-500/25 text-left cursor-pointer"
              >
                <div>
                  <span className="text-xs font-semibold text-slate-400 block">Cambiar de sede:</span>
                  <span className="text-sm sm:text-base font-bold text-white">Urban Hero Sevilla Este</span>
                  <span className="text-xs text-cyan-400 block">Hotel Vértice</span>
                </div>
                <ExternalLink className="w-4 h-4 text-cyan-400" />
              </button>
            ) : (
              <a
                href="/urban-hero-sevilla-este"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-cyan-500/10 border border-cyan-500/25 text-left cursor-pointer"
              >
                <div>
                  <span className="text-xs font-semibold text-slate-400 block">Cambiar de sede:</span>
                  <span className="text-sm sm:text-base font-bold text-white">Urban Hero Sevilla Este</span>
                  <span className="text-xs text-cyan-400 block">Hotel Vértice</span>
                </div>
                <ExternalLink className="w-4 h-4 text-cyan-400" />
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
