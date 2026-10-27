import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Activity, ShieldCheck, Users, Award, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { METHODOLOGY_PILLARS } from '../data/gymData';

interface MethodologyCarouselProps {
  gymContext?: 'el-pino' | 'sevilla-este';
}

export const MethodologyCarousel: React.FC<MethodologyCarouselProps> = ({ gymContext }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Activity':
        return <Activity className="w-5 h-5 text-[#00d2ff]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#00d2ff]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#00d2ff]" />;
      case 'Award':
        return <Award className="w-5 h-5 text-[#00d2ff]" />;
      default:
        return <Activity className="w-5 h-5 text-[#00d2ff]" />;
    }
  };

  const updateScrollState = useCallback(() => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const cardWidth = clientWidth > 768 ? 360 + 24 : clientWidth * 0.82 + 16;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(index, 0), METHODOLOGY_PILLARS.length - 1));
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
    const scrollAmount = el.clientWidth > 768 ? 380 : el.clientWidth * 0.85;
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;
    const el = carouselRef.current;
    const cardWidth = el.clientWidth > 768 ? 360 + 24 : el.clientWidth * 0.82 + 16;
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
    <section id="metodologia" className="py-20 relative bg-[#061325] border-t border-cyan-500/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Desktop Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold tracking-[0.25em] text-[#00d2ff] uppercase block">
              Filosofía de Entrenamiento Compartida
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading tracking-wide">
              Nuestra Metodología
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              En Urban Hero no creemos en rutinas masificadas ni en improvisar. Ambos centros comparten un método riguroso fundamentado en la biomecánica, la técnica depurada y el cuidado de cada deportista.
            </p>
          </div>

          {/* Desktop Controls */}
          <div className="flex items-center gap-3 self-end md:self-auto shrink-0">
            <span className="hidden sm:inline text-xs text-slate-400">
              Desliza para ver más
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                aria-label="Metodología anterior"
                className={`p-2.5 rounded-xl border transition-all ${
                  canScrollLeft
                    ? 'bg-[#091f3a] hover:bg-[#113158] border-cyan-500/40 text-cyan-300 hover:scale-105 active:scale-95 shadow-md shadow-cyan-950/40 cursor-pointer'
                    : 'bg-black/20 border-white/5 text-slate-600 cursor-not-allowed opacity-50'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                aria-label="Siguiente metodología"
                className={`p-2.5 rounded-xl border transition-all ${
                  canScrollRight
                    ? 'bg-[#091f3a] hover:bg-[#113158] border-cyan-500/40 text-cyan-300 hover:scale-105 active:scale-95 shadow-md shadow-cyan-950/40 cursor-pointer'
                    : 'bg-black/20 border-white/5 text-slate-600 cursor-not-allowed opacity-50'
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Carousel Track */}
        <div
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className={`flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 pt-1 no-scrollbar select-none ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{ WebkitOverflowScrolling: 'touch' }}
          role="region"
          aria-label="Carrusel de metodología de entrenamiento"
        >
          {METHODOLOGY_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="w-[82vw] sm:w-[320px] md:w-[360px] shrink-0 snap-start p-6 rounded-2xl bg-gradient-to-b from-[#0a2342] to-[#07192f] border border-cyan-500/25 hover:border-cyan-400/50 transition-all duration-300 group flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                    {getIcon(pillar.iconName)}
                  </div>
                  <span className="text-2xl font-black text-cyan-400/40 font-heading">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white font-heading uppercase tracking-wide mb-1 group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h3>
                <span className="text-xs font-semibold text-cyan-400 block mb-3">
                  {pillar.subtitle}
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-[11px] text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>
                  {gymContext === 'el-pino'
                    ? 'Aplicado en El Pino con estructura oficial'
                    : gymContext === 'sevilla-este'
                    ? 'Aplicado en Sevilla Este en grupos reducidos'
                    : 'Aplicado en El Pino y Sevilla Este'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {METHODOLOGY_PILLARS.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToIndex(idx)}
              aria-label={`Ir a tarjeta de metodología ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                activeIndex === idx
                  ? 'w-6 bg-cyan-400'
                  : 'w-1.5 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
