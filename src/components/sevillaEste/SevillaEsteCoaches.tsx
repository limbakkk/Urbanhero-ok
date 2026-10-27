import React, { useRef, useState, useEffect, useCallback } from 'react';
import { CheckCircle, Quote, ChevronLeft, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';
import { SEVILLA_ESTE_COACHES, SevillaEsteCoach } from '../../data/sevillaEsteData';

interface SevillaEsteCoachesProps {
  onNavigateToCoachesPage?: () => void;
  isStandalonePage?: boolean;
}

export const SevillaEsteCoaches: React.FC<SevillaEsteCoachesProps> = ({
  onNavigateToCoachesPage,
  isStandalonePage = false,
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

  const updateScrollState = useCallback(() => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const cardWidth = clientWidth > 768 ? 320 + 20 : clientWidth * 0.82 + 16;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(index, 0), SEVILLA_ESTE_COACHES.length - 1));
  }, []);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);
    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const el = carouselRef.current;
    const scrollAmount = el.clientWidth > 768 ? 340 : el.clientWidth * 0.85;
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;
    const el = carouselRef.current;
    const cardWidth = el.clientWidth > 768 ? 320 + 20 : el.clientWidth * 0.82 + 16;
    el.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth',
    });
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeftPos(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeftPos - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <section id="coaches" className="py-20 relative bg-[#061427] border-t border-cyan-500/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/10 border border-cyan-400/30 text-[#00d2ff]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Profesionales Titulados</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading tracking-wide">
              Equipo Técnico de Sevilla Este
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Especialistas en Ciencias de la Actividad Física, readaptación y acondicionamiento saludable. Entrenadores que supervisan cada movimiento y adaptan el ejercicio a tu cuerpo.
            </p>
          </div>

          {/* Desktop Carousel Controls & View Page Link */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
            {!isStandalonePage && onNavigateToCoachesPage && (
              <button
                type="button"
                onClick={onNavigateToCoachesPage}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-400 hover:text-white transition-colors mr-2 group"
              >
                <span>Conoce a fondo el equipo</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            )}

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                aria-label="Coach anterior"
                className={`p-2.5 rounded-xl border transition-all ${
                  canScrollLeft
                    ? 'border-cyan-400/50 bg-[#0a2342] text-cyan-300 hover:bg-[#00d2ff] hover:text-[#061325] hover:border-[#00d2ff] shadow-md shadow-cyan-500/10 active:scale-95'
                    : 'border-white/5 bg-white/[0.02] text-slate-600 cursor-not-allowed opacity-50'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                aria-label="Siguiente coach"
                className={`p-2.5 rounded-xl border transition-all ${
                  canScrollRight
                    ? 'border-cyan-400/50 bg-[#0a2342] text-cyan-300 hover:bg-[#00d2ff] hover:text-[#061325] hover:border-[#00d2ff] shadow-md shadow-cyan-500/10 active:scale-95'
                    : 'border-white/5 bg-white/[0.02] text-slate-600 cursor-not-allowed opacity-50'
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Visual Swipe / Drag Hint */}
        <div className="flex items-center justify-between pb-3">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Desliza para conocer a todos los entrenadores</span>
          </div>
          <div className="text-[11px] font-semibold text-slate-400">
            {activeIndex + 1} de {SEVILLA_ESTE_COACHES.length}
          </div>
        </div>

        {/* Horizontal Carousel Track with Snap and Next-Card Preview */}
        <div
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className={`flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 pt-2 select-none no-scrollbar cursor-grab ${
            isDragging ? 'cursor-grabbing select-none' : ''
          }`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {SEVILLA_ESTE_COACHES.map((coach: SevillaEsteCoach, idx: number) => {
            const isCardActive = idx === activeIndex;
            return (
              <div
                key={coach.id}
                className={`w-[84vw] sm:w-[320px] md:w-[340px] shrink-0 snap-start rounded-2xl overflow-hidden bg-gradient-to-b from-[#09203d] to-[#06162a] border transition-all duration-300 flex flex-col justify-between group shadow-xl ${
                  isCardActive ? 'border-cyan-400/70 shadow-cyan-950/60' : 'border-cyan-500/25 hover:border-cyan-400/60'
                }`}
              >
                <div>
                  {/* Photo with Overlay */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <img
                      src={coach.imageUrl}
                      alt={`Coach ${coach.name} de Urban Hero Sevilla Este`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09203d] via-transparent to-black/20" />

                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-2xl font-black text-white uppercase font-heading tracking-wide">
                        {coach.name}
                      </h3>
                      <span className="text-xs font-bold text-cyan-300 block">
                        {coach.role}
                      </span>
                    </div>
                  </div>

                  {/* Bio & Details */}
                  <div className="p-5 space-y-3">
                    <div className="p-2.5 rounded-lg bg-black/30 border border-white/5 text-[11px] text-cyan-300">
                      <strong className="text-white block font-semibold">Especialidad:</strong>
                      <span>{coach.specialty}</span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {coach.bio}
                    </p>

                    <div className="pt-1 text-[11px] text-slate-400 flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{coach.experience}</span>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="p-5 pt-0">
                  <blockquote className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/20 text-[11px] text-slate-300 italic relative">
                    <Quote className="w-3.5 h-3.5 text-cyan-400/60 inline mr-1" />
                    "{coach.quote}"
                  </blockquote>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 pt-2">
          {SEVILLA_ESTE_COACHES.map((coach, idx) => (
            <button
              key={coach.id}
              type="button"
              onClick={() => scrollToIndex(idx)}
              aria-label={`Ir a coach ${coach.name}`}
              className={`h-2 transition-all duration-300 rounded-full ${
                activeIndex === idx
                  ? 'w-8 bg-[#00d2ff] shadow-sm shadow-cyan-400'
                  : 'w-2 bg-slate-700 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
