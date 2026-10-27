import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ExternalLink, Dumbbell, Shield, Sparkles } from 'lucide-react';
import { GYMS } from '../data/gymData';

interface HeaderProps {
  onOpenTrial: (gymId?: 'el-pino' | 'sevilla-este') => void;
  onNavigateToElPino?: () => void;
  onNavigateToSevillaEste?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenTrial,
  onNavigateToElPino,
  onNavigateToSevillaEste,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [gymsDropdownOpen, setGymsDropdownOpen] = useState(false);

  const dropdownContainerRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  const handleToggleGymsDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setGymsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      // Keep header visible when near top or when mobile menu / gym selector is open
      if (mobileMenuOpen || gymsDropdownOpen || currentScrollY < 80) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      const diff = currentScrollY - lastScrollY.current;
      // 12px hysteresis threshold to avoid micro-jitter
      if (Math.abs(diff) > 12) {
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
  }, [mobileMenuOpen, gymsDropdownOpen]);

  // Click-outside and Escape key handling for the click-only gym selector
  useEffect(() => {
    if (!gymsDropdownOpen) return;

    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as Node | null;
      if (!target) return;
      if (
        dropdownContainerRef.current &&
        dropdownContainerRef.current.contains(target)
      ) {
        return;
      }
      setGymsDropdownOpen(false);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setGymsDropdownOpen(false);
      }
    };

    // Defer attaching so the click that opened the panel never triggers this listener
    const timer = setTimeout(() => {
      document.addEventListener('click', handleDocumentClick);
    }, 20);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleDocumentClick);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [gymsDropdownOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none w-full max-w-full overflow-visible ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled
          ? 'bg-[#061325]/95 backdrop-blur-md border-b border-cyan-500/20 shadow-2xl shadow-black/50 py-2.5 sm:py-3'
          : 'bg-gradient-to-b from-[#061325]/90 via-[#061325]/60 to-transparent py-3 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-1.5 sm:gap-4">
          {/* Logo & Brand Identity: Standalone Transparent Symbol + Unified Brand Identity */}
          <a
            href="#"
            className="flex items-center gap-2 sm:gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[#00d2ff] rounded-lg p-0.5 sm:p-1"
            aria-label="Urban Hero Training Center - Inicio"
          >
            <div className="relative w-9 sm:w-11 h-9 sm:h-11 group-hover:scale-105 transition-transform flex items-center justify-center shrink-0">
              <img
                src="/assets/aistudio/urban_hero_symbol_transparent.png"
                alt="Logo Urban Hero Training Center"
                className="w-full h-full object-contain drop-shadow-[0_2px_10px_rgba(0,210,255,0.4)]"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] text-cyan-400 uppercase font-semibold leading-tight">
                Training Center
              </span>
              <span className="text-lg sm:text-2xl font-black tracking-wider text-white uppercase font-heading leading-none group-hover:text-cyan-300 transition-colors">
                Urban Hero
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium" aria-label="Navegación principal">
            <a
              href="#"
              className="text-slate-200 hover:text-[#00d2ff] transition-colors py-1 hover:border-b-2 hover:border-[#00d2ff]"
            >
              Inicio
            </a>

            {/* Stable Click-Only Gym Selector */}
            <div
              ref={dropdownContainerRef}
              className="relative py-1"
            >
              <button
                type="button"
                id="gyms-dropdown-trigger"
                onClick={handleToggleGymsDropdown}
                className={`flex items-center gap-1.5 transition-colors py-1 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 rounded-md px-2 cursor-pointer font-medium ${
                  gymsDropdownOpen
                    ? 'text-[#00d2ff] bg-cyan-500/10'
                    : 'text-slate-200 hover:text-[#00d2ff]'
                }`}
                aria-expanded={gymsDropdownOpen}
                aria-haspopup="dialog"
                aria-controls="gyms-selector-panel"
              >
                <span>Nuestros Gimnasios</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    gymsDropdownOpen ? 'rotate-180 text-cyan-400' : ''
                  }`}
                />
              </button>

              {/* Stable Dropdown Panel: Click-to-toggle only, zero hover interference */}
              {gymsDropdownOpen && (
                <div
                  id="gyms-selector-panel"
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-full left-0 mt-2 w-84 z-[100] shadow-2xl pointer-events-auto select-none"
                  role="dialog"
                  aria-label="Seleccionar centro Urban Hero"
                >
                  <div className="bg-[#091e38] border border-cyan-500/40 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.85)] p-3 backdrop-blur-xl relative z-50">
                    <div className="px-3 py-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider border-b border-white/10 mb-2">
                      Selecciona tu centro en Sevilla
                    </div>

                    <div className="space-y-2">
                      {GYMS.map((gym) => {
                        const isElPino = gym.id === 'el-pino';
                        const targetPath = isElPino ? '/urban-hero-el-pino' : '/urban-hero-sevilla-este';

                        const handleSelectGym = (e: React.MouseEvent) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setGymsDropdownOpen(false);

                          if (isElPino && onNavigateToElPino) {
                            onNavigateToElPino();
                          } else if (!isElPino && onNavigateToSevillaEste) {
                            onNavigateToSevillaEste();
                          } else {
                            try {
                              window.history.pushState({}, '', targetPath);
                              window.dispatchEvent(new PopStateEvent('popstate'));
                            } catch {
                              window.location.href = targetPath;
                            }
                          }
                        };

                        return (
                          <a
                            key={gym.id}
                            href={targetPath}
                            id={`gym-option-${gym.id}`}
                            onClick={handleSelectGym}
                            onMouseDown={(e) => e.stopPropagation()}
                            className="w-full flex items-start gap-3 p-3 rounded-xl bg-white/[0.04] hover:bg-cyan-500/20 hover:border-cyan-400/70 transition-all group/item border border-white/10 text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400 relative z-30 pointer-events-auto block"
                            role="menuitem"
                          >
                            <div className="w-8 h-8 rounded-lg bg-cyan-500/15 flex items-center justify-center text-cyan-400 group-hover/item:bg-cyan-500 group-hover/item:text-[#061325] transition-colors mt-0.5 shrink-0">
                              <Dumbbell className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-1">
                                <span className="font-bold text-white text-sm group-hover/item:text-cyan-300">
                                  {gym.name}
                                </span>
                                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover/item:text-cyan-400 shrink-0" />
                              </div>
                              <span className="text-[11px] text-cyan-400 block font-medium mt-0.5">
                                {gym.badge}
                              </span>
                              <span className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                                {gym.address}
                              </span>
                            </div>
                          </a>
                        );
                      })}
                    </div>

                    <div className="mt-2.5 pt-2 border-t border-white/10 text-center">
                      <a
                        href="#gimnasios"
                        onClick={(e) => {
                          e.stopPropagation();
                          setGymsDropdownOpen(false);
                        }}
                        className="text-xs text-slate-300 hover:text-cyan-300 underline font-medium block py-1 cursor-pointer"
                      >
                        Comparar ambos centros
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a
              href="#metodologia"
              className="text-slate-200 hover:text-[#00d2ff] transition-colors py-1 hover:border-b-2 hover:border-[#00d2ff]"
            >
              Metodología
            </a>

            <a
              href="#valores"
              className="text-slate-200 hover:text-[#00d2ff] transition-colors py-1 hover:border-b-2 hover:border-[#00d2ff]"
            >
              Valores
            </a>

            <a
              href="#noticias"
              className="text-slate-200 hover:text-[#00d2ff] transition-colors py-1 hover:border-b-2 hover:border-[#00d2ff]"
            >
              Noticias
            </a>

            <a
              href="#faq"
              className="text-slate-200 hover:text-[#00d2ff] transition-colors py-1 hover:border-b-2 hover:border-[#00d2ff]"
            >
              FAQ
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onOpenTrial()}
              className="relative group overflow-hidden px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#00d2ff] to-[#0ea5e9] text-[#061325] font-bold text-sm uppercase tracking-wider shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="w-4 h-4 fill-[#061325]" />
                <span>2 Clases Gratis</span>
              </span>
              <div className="absolute inset-0 bg-white/30 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
            </button>
          </div>

          {/* Mobile Actions: Trial Button & Menu Toggle */}
          <div className="lg:hidden flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              onClick={() => onOpenTrial()}
              className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-md bg-[#00d2ff] text-[#061325] text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-md shrink-0"
            >
              2 Clases Gratis
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400 shrink-0"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú móvil'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#061325]/98 border-b border-cyan-500/20 px-4 pt-3 pb-6 space-y-3 backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <div className="space-y-1 border-b border-white/10 pb-3">
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/5 hover:text-cyan-400"
            >
              Inicio
            </a>
            <a
              href="#metodologia"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-white/5 hover:text-cyan-400"
            >
              Nuestra Metodología
            </a>
            <a
              href="#valores"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-white/5 hover:text-cyan-400"
            >
              Nuestros Valores
            </a>
            <a
              href="#noticias"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-white/5 hover:text-cyan-400"
            >
              Noticias
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-white/5 hover:text-cyan-400"
            >
              Preguntas Frecuentes
            </a>
          </div>

          {/* Direct Gym Sites in Mobile Drawer */}
          <div className="pt-2">
            <span className="block px-3 text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">
              Visitar Webs de Gimnasios
            </span>
            <div className="space-y-2">
              {GYMS.map((gym) => {
                const isElPino = gym.id === 'el-pino';
                return (
                  <div
                    key={gym.id}
                    className="p-3 rounded-xl bg-[#0a223f] border border-cyan-500/20 text-white flex items-center justify-between"
                  >
                    <div>
                      {isElPino && onNavigateToElPino ? (
                        <button
                          type="button"
                          onClick={() => {
                            setMobileMenuOpen(false);
                            onNavigateToElPino();
                          }}
                          className="font-bold text-sm block text-left text-cyan-300 hover:underline"
                        >
                          {gym.name} (Web Dedicada)
                        </button>
                      ) : gym.id === 'sevilla-este' && onNavigateToSevillaEste ? (
                        <button
                          type="button"
                          onClick={() => {
                            setMobileMenuOpen(false);
                            onNavigateToSevillaEste();
                          }}
                          className="font-bold text-sm block text-left text-cyan-300 hover:underline"
                        >
                          {gym.name} (Web Dedicada)
                        </button>
                      ) : (
                        <a
                          href={gym.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-sm block"
                        >
                          {gym.name}
                        </a>
                      )}
                      <span className="text-xs text-slate-300">{gym.badge}</span>
                    </div>
                    <a
                      href={gym.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-cyan-400 hover:text-white"
                      title="Web externa"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
