import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Heart, Target, Shield, TrendingUp, Trophy, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { BRAND_VALUES } from '../data/gymData';

export const ValuesCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Heart className="w-5 h-5 text-cyan-400" />;
      case 1:
        return <Target className="w-5 h-5 text-cyan-400" />;
      case 2:
        return <Shield className="w-5 h-5 text-cyan-400" />;
      case 3:
        return <TrendingUp className="w-5 h-5 text-cyan-400" />;
      case 4:
        return <Trophy className="w-5 h-5 text-cyan-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  const updateScrollState = useCallback(() => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const cardWidth = clientWidth > 768 ? 340 + 24 : clientWidth * 0.82 + 16;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(index, 0), BRAND_VALUES.length - 1));
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
    const scrollAmount = el.clientWidth > 768 ? 360 : el.clientWidth * 0.85;
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;
    const el = carouselRef.current;
    const cardWidth = el.clientWidth > 768 ? 340 + 24 : el.clientWidth * 0.82 + 16;
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
    <section id="valores" className="py-20 relative bg-[#07172e] border-t border-cyan-500/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold tracking-[0.25em] text-[#00d2ff] uppercase block">
              El ADN de Urban Hero
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading tracking-wide">
              Nuestros Valores
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Más que dos centros de entrenamiento físico en Sevilla, somos una comunidad guiada por principios firmes de respeto, esfuerzo y superación honesta.
            </p>
          </div>

          {/* Desktop Controls */}
          <div className="flex items-center gap-3 self-end md:self-auto shrink-0">
            <span className="hidden sm:inline text-xs text-slate-400">
              Desliza para explorar
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                aria-label="Valor anterior"
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
                aria-label="Siguiente valor"
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
          aria-label="Carrusel de valores de Urban Hero"
        >
          {BRAND_VALUES.map((val, idx) => (
            <div
              key={idx}
              className="w-[82vw] sm:w-[320px] md:w-[340px] shrink-0 snap-start p-6 sm:p-7 rounded-2xl bg-[#09203d] border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 group flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 group-hover:scale-110 transition-transform">
                    {getIcon(idx)}
                  </div>
                  <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30">
                    {val.highlight}
                  </span>
                </div>

                <h3 className="text-xl font-black text-white font-heading uppercase tracking-wide mb-2 group-hover:text-cyan-300 transition-colors">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {val.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-cyan-400 font-semibold uppercase tracking-wider">
                <span>Espíritu Urban Hero</span>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {BRAND_VALUES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToIndex(idx)}
              aria-label={`Ir a tarjeta de valor ${idx + 1}`}
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
