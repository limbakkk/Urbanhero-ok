import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { NEWS_ITEMS } from '../data/gymData';
import { NewsItem } from '../types';

export const LatestNews: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  return (
    <section id="noticias" className="py-20 relative bg-[#07172e] border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-[0.25em] text-[#00d2ff] uppercase block">
              Actualidad y Comunidad
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading tracking-wide">
              Últimas Noticias
            </h2>
            <p className="text-sm text-slate-300 max-w-xl">
              Novedades, mejoras en instalaciones y actualizaciones de las programaciones deportivas de nuestros dos centros en Sevilla.
            </p>
          </div>

          <div className="text-xs text-slate-400">
            <span>Mostrando las {NEWS_ITEMS.length} publicaciones más recientes</span>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEWS_ITEMS.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl overflow-hidden bg-[#09203d] border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Thumbnail Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/70 text-cyan-300 backdrop-blur-md border border-white/10">
                      {item.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-cyan-500 text-[#061325]">
                      {item.locationTag}
                    </span>
                  </div>
                </div>

                {/* Article Info */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      {item.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white leading-snug group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>
                </div>
              </div>

              {/* Read More Trigger */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => setSelectedNews(item)}
                  className="w-full py-2.5 px-3 rounded-lg bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/30 text-xs font-semibold text-cyan-300 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Leer comunicado completo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Modal for Reading Full News Item */}
        {selectedNews && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
            role="dialog"
            aria-modal="true"
          >
            <div className="bg-[#0a2342] border border-cyan-500/30 rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-4 shadow-2xl relative">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                    {selectedNews.locationTag} • {selectedNews.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {selectedNews.title}
                  </h3>
                  <span className="text-xs text-slate-400 block mt-1">
                    Publicado el {selectedNews.date}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedNews(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
                  aria-label="Cerrar noticia"
                >
                  ✕
                </button>
              </div>

              <div className="rounded-xl overflow-hidden h-44 w-full">
                <img
                  src={selectedNews.imageUrl}
                  alt={selectedNews.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-sm text-slate-200 leading-relaxed">
                {selectedNews.summary}
              </p>
              
              <div className="pt-2 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setSelectedNews(null)}
                  className="px-5 py-2 rounded-lg bg-[#00d2ff] text-[#061325] font-bold text-xs uppercase tracking-wider"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
