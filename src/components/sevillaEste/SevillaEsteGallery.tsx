import React, { useState } from 'react';
import { Camera, X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { SEVILLA_ESTE_GALLERY } from '../../data/sevillaEsteData';

export const SevillaEsteGallery: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setActiveImageIndex(index);
  const closeLightbox = () => setActiveImageIndex(null);

  const prevImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + SEVILLA_ESTE_GALLERY.length) % SEVILLA_ESTE_GALLERY.length);
    }
  };

  const nextImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % SEVILLA_ESTE_GALLERY.length);
    }
  };

  return (
    <section id="galeria" className="py-20 relative bg-[#061427]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5" />
            <span>Nuestras Instalaciones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading tracking-wide">
            Galería Urban Hero Sevilla Este
          </h2>
          <p className="text-base text-slate-300">
            Espacio funcional en Hotel Vértice: sala climatizada, ergómetros, equipamiento ergonómico y ambiente en grupos reducidos.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SEVILLA_ESTE_GALLERY.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-[#091f3a] border border-cyan-500/20 hover:border-cyan-400/60 transition-all duration-300 relative shadow-lg"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/60 text-cyan-300 backdrop-blur-md border border-white/10">
                    {item.category}
                  </span>
                </div>

                {/* Hover zoom icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 rounded-full bg-[#00d2ff] text-[#061325] flex items-center justify-center shadow-lg">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>

                {/* Caption bar */}
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-base font-bold text-white leading-snug group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeImageIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
            role="dialog"
            aria-modal="true"
          >
            <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
              
              {/* Close Button */}
              <button
                type="button"
                onClick={closeLightbox}
                className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white"
                aria-label="Cerrar vista ampliada"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Prev / Next Controls */}
              <button
                type="button"
                onClick={prevImage}
                className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/80"
                aria-label="Anterior imagen"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                type="button"
                onClick={nextImage}
                className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/80"
                aria-label="Siguiente imagen"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Frame */}
              <div className="rounded-2xl overflow-hidden border border-cyan-500/30 max-h-[75vh]">
                <img
                  src={SEVILLA_ESTE_GALLERY[activeImageIndex].url}
                  alt={SEVILLA_ESTE_GALLERY[activeImageIndex].title}
                  className="w-full h-auto object-contain max-h-[75vh]"
                />
              </div>

              {/* Description */}
              <div className="mt-4 text-center">
                <h4 className="text-lg font-bold text-white uppercase font-heading">
                  {SEVILLA_ESTE_GALLERY[activeImageIndex].title}
                </h4>
                <p className="text-xs text-slate-300">
                  {SEVILLA_ESTE_GALLERY[activeImageIndex].caption}
                </p>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
