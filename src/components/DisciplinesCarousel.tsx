import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Dumbbell, ChevronLeft, ChevronRight, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

export interface DisciplineItem {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  description: string;
  benefits: string[];
  imageUrl: string;
}

interface DisciplinesCarouselProps {
  disciplines: DisciplineItem[];
  title?: string;
  subtitle?: string;
  description?: string;
  badge?: string;
  onViewAll?: () => void;
  viewAllUrl?: string;
  onOpenTrial?: () => void;
}

export const DisciplinesCarousel: React.FC<DisciplinesCarouselProps> = ({
  disciplines,
  title = 'Disciplinas Oficiales',
  subtitle = 'Programación Deportiva',
  description = 'Descubre las disciplinas diseñadas para optimizar fuerza, técnica y resistencia.',
  badge,
  onViewAll,
  viewAllUrl,
  onOpenTrial,
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

    const cardWidth = clientWidth > 768 ? 350 + 20 : clientWidth * 0.84 + 16;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(index, 0), disciplines.length - 1));
  }, [disciplines.length]);

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
    const scrollAmount = el.clientWidth > 768 ? 370 : el.clientWidth * 0.85;
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;
    const el = carouselRef.current;
    const cardWidth = el.clientWidth > 768 ? 350 + 20 : el.clientWidth * 0.84 + 16;
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
    <section id="disciplinas-carousel" className="py-16 sm:py-20 relative bg-[#061427] border-t border-cyan-500/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/10 border border-cyan-400/30 text-[#00d2ff]">
              <Dumbbell className="w-3.5 h-3.5" />
              <span>{badge || subtitle}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading tracking-wide">
              {title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Desktop Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
            {onViewAll ? (
              <button
                type="button"
                onClick={onViewAll}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-400 hover:text-white transition-colors mr-2 group"
              >
                <span>Ver catálogo completo ({disciplines.length})</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            ) : viewAllUrl ? (
              <a
                href={viewAllUrl}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-400 hover:text-white transition-colors mr-2 group"
              >
                <span>Ver catálogo completo ({disciplines.length})</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            ) : null}

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                aria-label="Disciplina anterior"
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
                aria-label="Siguiente disciplina"
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
            <span>Desliza para ver todas las disciplinas</span>
          </div>
          <div className="text-[11px] font-semibold text-slate-400">
            {activeIndex + 1} de {disciplines.length}
          </div>
        </div>

        {/* Horizontal Carousel Track */}
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
          {disciplines.map((item, idx) => {
            const isCardActive = idx === activeIndex;
            return (
              <div
                key={item.id}
                className={`w-[84vw] sm:w-[340px] md:w-[370px] shrink-0 snap-start rounded-2xl overflow-hidden bg-gradient-to-b from-[#09213d] to-[#06172d] border transition-all duration-300 flex flex-col justify-between group shadow-xl ${
                  isCardActive ? 'border-cyan-400/70 shadow-cyan-950/60' : 'border-cyan-500/25 hover:border-cyan-400/60'
                }`}
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09213d] via-transparent to-black/30" />
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-cyan-300 border border-cyan-500/30">
                      {item.category}
                    </div>
                    <div className="absolute bottom-3 left-4 right-4">
                      <h3 className="text-2xl font-black text-white uppercase font-heading">
                        {item.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="space-y-1.5 pt-1">
                      {item.benefits.slice(0, 2).map((b, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] text-cyan-300">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  {onViewAll ? (
                    <button
                      type="button"
                      onClick={onViewAll}
                      className="w-full py-2.5 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/20 text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Ver detalles y horarios</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : viewAllUrl ? (
                    <a
                      href={viewAllUrl}
                      className="w-full py-2.5 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/20 text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Ver detalles y horarios</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 pt-2">
          {disciplines.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToIndex(idx)}
              aria-label={`Ver disciplina ${item.name}`}
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
