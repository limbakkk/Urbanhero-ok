import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Camera, ZoomIn, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export interface GalleryImageItem {
  id: string;
  url: string;
  title: string;
  category: string;
  caption: string;
}

interface GalleryCarouselProps {
  items: GalleryImageItem[];
  title?: string;
  subtitle?: string;
  description?: string;
  badge?: string;
  onViewAll?: () => void;
  viewAllText?: string;
  isStandalonePage?: boolean;
}

export const GalleryCarousel: React.FC<GalleryCarouselProps> = ({
  items,
  title = 'Instalaciones y Espacios',
  subtitle = 'Nuestras Instalaciones',
  description = 'Descubre las zonas de entrenamiento, el equipamiento de alta gama y los espacios diseñados para tu rendimiento.',
  badge,
  onViewAll,
  viewAllText = 'Ver todas las instalaciones',
  isStandalonePage = false,
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const updateScrollState = useCallback(() => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const cardWidth = clientWidth > 768 ? 360 + 20 : clientWidth * 0.84 + 16;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(index, 0), items.length - 1));
  }, [items.length]);

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
    const cardWidth = el.clientWidth > 768 ? 360 + 20 : el.clientWidth * 0.84 + 16;
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

  const openLightbox = (idx: number) => {
    if (!isDragging) {
      setLightboxIndex(idx);
    }
  };

  const closeLightbox = () => setLightboxIndex(null);

  const prevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + items.length) % items.length);
    }
  };

  const nextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % items.length);
    }
  };

  return (
    <section id="instalaciones" className="py-16 sm:py-20 relative bg-[#061427] border-t border-cyan-500/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/10 border border-cyan-400/30 text-[#00d2ff]">
              <Camera className="w-3.5 h-3.5" />
              <span>{badge || subtitle}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading tracking-wide">
              {title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Desktop Carousel Controls */}
          <div className="flex items-center gap-3 shrink-0">
            {!isStandalonePage && onViewAll && (
              <button
                type="button"
                onClick={onViewAll}
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-400 hover:text-white transition-colors mr-2"
              >
                <span>{viewAllText}</span>
              </button>
            )}

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                aria-label="Imagen anterior"
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
                aria-label="Siguiente imagen"
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
            <span>Desliza para ver fotos de las instalaciones</span>
          </div>
          <div className="text-[11px] font-semibold text-slate-400">
            {activeIndex + 1} de {items.length}
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
          {items.map((item, idx) => {
            const isCardActive = idx === activeIndex;
            return (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className={`w-[84vw] sm:w-[350px] md:w-[380px] shrink-0 snap-start rounded-2xl overflow-hidden bg-[#091f3a] border transition-all duration-300 relative shadow-xl cursor-pointer group ${
                  isCardActive ? 'border-cyan-400/70 shadow-cyan-950/60' : 'border-cyan-500/25 hover:border-cyan-400/60'
                }`}
              >
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />

                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/60 text-cyan-300 backdrop-blur-md border border-white/10">
                      {item.category}
                    </span>
                  </div>

                  {/* Zoom Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-11 h-11 rounded-full bg-[#00d2ff] text-[#061325] flex items-center justify-center shadow-lg shadow-cyan-500/40">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Caption & Title */}
                  <div className="absolute bottom-3 left-4 right-4 space-y-1">
                    <h3 className="text-base sm:text-lg font-black text-white uppercase font-heading leading-tight group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-2">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 pt-2">
          {items.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToIndex(idx)}
              aria-label={`Ver imagen ${item.title}`}
              className={`h-2 transition-all duration-300 rounded-full ${
                activeIndex === idx
                  ? 'w-8 bg-[#00d2ff] shadow-sm shadow-cyan-400'
                  : 'w-2 bg-slate-700 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-in fade-in duration-200"
            role="dialog"
            aria-modal="true"
          >
            <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
              
              {/* Close Button */}
              <button
                type="button"
                onClick={closeLightbox}
                className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white focus:outline-none"
                aria-label="Cerrar vista ampliada"
              >
                <X className="w-7 h-7" />
              </button>

              {/* Prev / Next Buttons */}
              <button
                type="button"
                onClick={prevLightbox}
                className="absolute left-2 sm:-left-14 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-colors"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                type="button"
                onClick={nextLightbox}
                className="absolute right-2 sm:-right-14 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-colors"
                aria-label="Siguiente imagen"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Lightbox Image */}
              <div className="w-full max-h-[75vh] overflow-hidden rounded-2xl border border-cyan-500/30 bg-[#061325]">
                <img
                  src={items[lightboxIndex].url}
                  alt={items[lightboxIndex].title}
                  className="w-full h-full max-h-[75vh] object-contain mx-auto"
                />
              </div>

              {/* Lightbox Caption */}
              <div className="w-full mt-4 text-center space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  {items[lightboxIndex].category} • {lightboxIndex + 1} de {items.length}
                </span>
                <h4 className="text-xl font-black text-white font-heading">
                  {items[lightboxIndex].title}
                </h4>
                <p className="text-sm text-slate-300 max-w-2xl mx-auto">
                  {items[lightboxIndex].caption}
                </p>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
