import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Instagram,
  Heart,
  MessageCircle,
  ExternalLink,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Info,
  ChevronDown,
  Sparkles,
  ShieldAlert,
  Dumbbell,
} from 'lucide-react';
import { INSTAGRAM_POSTS } from '../data/gymData';
import { InstagramPost } from '../types';

export const InstagramFeed: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'el-pino' | 'sevilla-este'>('all');
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isDevNoteOpen, setIsDevNoteOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

  // Live Instagram API integration state
  const [livePosts, setLivePosts] = useState<InstagramPost[]>([]);
  const [isLiveLoading, setIsLiveLoading] = useState(false);
  const [integrationStatus, setIntegrationStatus] = useState<'attempting' | 'fallback' | 'connected'>('attempting');
  const [integrationDetails, setIntegrationDetails] = useState<string>('');

  const carouselRef = useRef<HTMLDivElement>(null);

  // Attempt genuine Instagram integration (Meta Graph API / oEmbed)
  useEffect(() => {
    let isMounted = true;
    const attemptInstagramIntegration = async () => {
      setIsLiveLoading(true);

      // Check for authorized Meta/Instagram Graph API tokens in environment
      const elPinoToken = (import.meta as any).env?.VITE_INSTAGRAM_TOKEN_EL_PINO;
      const sevillaEsteToken = (import.meta as any).env?.VITE_INSTAGRAM_TOKEN_SEVILLA_ESTE;

      if (!elPinoToken && !sevillaEsteToken) {
        if (isMounted) {
          setIntegrationStatus('fallback');
          setIntegrationDetails(
            'No se encontraron credenciales autorizadas en el entorno. La API oficial de Instagram (Meta Graph API) requiere registrar una App en Meta for Developers, solicitar permisos instagram_basic y generar un Long-Lived Access Token vinculado a las cuentas profesionales de @urbanheroelpino y @urbanherosevillaeste.'
          );
          setIsLiveLoading(false);
        }
        return;
      }

      // If token exists, attempt authenticated retrieval
      try {
        const token = elPinoToken || sevillaEsteToken;
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${token}`
        );

        if (!response.ok) {
          throw new Error(`Error HTTP ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        if (data && Array.isArray(data.data) && data.data.length > 0 && isMounted) {
          const formatted: InstagramPost[] = data.data.slice(0, 8).map((item: any, idx: number) => ({
            id: item.id || `live-${idx}`,
            account: elPinoToken ? 'El Pino' : 'Sevilla Este',
            handle: elPinoToken ? '@urbanheroelpino' : '@urbanherosevillaeste',
            imageUrl: item.media_url || item.thumbnail_url || INSTAGRAM_POSTS[0].imageUrl,
            caption: item.caption || 'Publicación en directo de Urban Hero',
            postUrl: item.permalink || 'https://www.instagram.com/urbanheroelpino/',
            likes: 0,
            comments: 0,
            date: new Date(item.timestamp).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' }),
            tag: elPinoToken ? 'CrossTraining & Halterofilia' : 'Entrenamiento Funcional',
            isPlaceholder: false,
          }));
          setLivePosts(formatted);
          setIntegrationStatus('connected');
        } else if (isMounted) {
          setIntegrationStatus('fallback');
          setIntegrationDetails('Respuesta vacía o permisos insuficientes en el token de Instagram Graph API.');
        }
      } catch (err: any) {
        if (isMounted) {
          setIntegrationStatus('fallback');
          setIntegrationDetails(
            `Fallo en la llamada a Instagram Graph API: ${err?.message || 'Error de conexión / CORS'}. Se mantiene el fallback de ejemplos visuales.`
          );
        }
      } finally {
        if (isMounted) setIsLiveLoading(false);
      }
    };

    attemptInstagramIntegration();
    return () => {
      isMounted = false;
    };
  }, []);

  // Determine active posts list
  const activePostsSource = livePosts.length > 0 ? livePosts : INSTAGRAM_POSTS;

  // Filter posts by gym
  const filteredPosts = activePostsSource.filter((post) => {
    if (selectedFilter === 'el-pino') return post.account === 'El Pino';
    if (selectedFilter === 'sevilla-este') return post.account === 'Sevilla Este';
    return true;
  });

  // Check scroll position to update navigation button states & indicators
  const updateScrollState = useCallback(() => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // Approximate active card index
    const cardWidth = clientWidth > 768 ? 340 + 20 : clientWidth * 0.82 + 16;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveSlideIndex(Math.min(Math.max(index, 0), filteredPosts.length - 1));
  }, [filteredPosts.length]);

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
  }, [updateScrollState, filteredPosts]);

  // Desktop navigation click handlers
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
    const cardWidth = el.clientWidth > 768 ? 340 + 20 : el.clientWidth * 0.82 + 16;
    el.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth',
    });
  };

  // Mouse Drag to Scroll handlers for desktop users
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
    const walk = (x - startX) * 1.5; // Drag sensitivity
    carouselRef.current.scrollLeft = scrollLeftPos - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <section id="instagram" className="py-20 relative bg-[#061325] overflow-hidden isolate">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/25 text-pink-400 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Instagram className="w-3.5 h-3.5" />
              <span>Comunidad en Redes</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading tracking-wide">
              Instagram Oficial
            </h2>
            
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Sigue el día a día, los WODs de equipo, la técnica en levantamientos y el ambiente deportivo real de nuestros dos gimnasios en Sevilla.
            </p>
          </div>

          {/* Direct Profile Follow Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://www.instagram.com/urbanheroelpino/"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#833ab4]/20 via-[#fd1d1d]/20 to-[#fcb045]/20 hover:from-[#833ab4]/30 hover:via-[#fd1d1d]/30 hover:to-[#fcb045]/30 border border-pink-500/30 hover:border-pink-400 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-lg hover:shadow-pink-500/15"
              title="Abrir perfil oficial de Urban Hero El Pino"
            >
              <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 flex items-center justify-center p-0.5">
                <Instagram className="w-3 h-3 text-white" />
              </div>
              <div className="flex flex-col text-left leading-none">
                <span className="text-[10px] text-cyan-300 font-semibold uppercase">El Pino</span>
                <span className="font-bold text-white group-hover:text-pink-300 transition-colors">@urbanheroelpino</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://www.instagram.com/urbanherosevillaeste/"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#833ab4]/20 via-[#fd1d1d]/20 to-[#fcb045]/20 hover:from-[#833ab4]/30 hover:via-[#fd1d1d]/30 hover:to-[#fcb045]/30 border border-pink-500/30 hover:border-pink-400 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-lg hover:shadow-pink-500/15"
              title="Abrir perfil oficial de Urban Hero Sevilla Este"
            >
              <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 flex items-center justify-center p-0.5">
                <Instagram className="w-3 h-3 text-white" />
              </div>
              <div className="flex flex-col text-left leading-none">
                <span className="text-[10px] text-cyan-300 font-semibold uppercase">Sevilla Este</span>
                <span className="font-bold text-white group-hover:text-pink-300 transition-colors">@urbanherosevillaeste</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Carousel Toolbar: Sede Filter Tabs + Desktop Navigation Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          {/* Gym Filter Buttons */}
          <div className="inline-flex p-1 rounded-xl bg-[#091f3a] border border-cyan-500/20 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setSelectedFilter('all')}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                selectedFilter === 'all'
                  ? 'bg-cyan-500 text-[#061325] font-black shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Todos los centros ({activePostsSource.length})
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter('el-pino')}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                selectedFilter === 'el-pino'
                  ? 'bg-[#00d2ff] text-[#061325] font-black shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              El Pino
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter('sevilla-este')}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                selectedFilter === 'sevilla-este'
                  ? 'bg-cyan-400 text-[#061325] font-black shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Sevilla Este
            </button>
          </div>

          {/* Desktop Navigation Buttons */}
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <span className="hidden sm:inline text-xs text-slate-400">
              Desliza o usa los controles
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                aria-label="Publicaciones anteriores de Instagram"
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
                aria-label="Siguientes publicaciones de Instagram"
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
          className={`flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 pt-1 no-scrollbar select-none ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{ WebkitOverflowScrolling: 'touch' }}
          role="region"
          aria-label="Carrusel de publicaciones de Instagram de Urban Hero"
        >
          {filteredPosts.map((post) => {
            const isElPino = post.account === 'El Pino';
            const gymColorBadge = isElPino
              ? 'bg-[#00d2ff]/15 text-[#00d2ff] border-cyan-400/30'
              : 'bg-cyan-400/15 text-cyan-300 border-cyan-400/30';

            return (
              <article
                key={post.id}
                className="w-[82vw] sm:w-[320px] md:w-[340px] shrink-0 snap-start rounded-2xl overflow-hidden bg-[#091f3a] border border-cyan-500/20 hover:border-pink-500/50 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-pink-500/10 group"
              >
                {/* Post Top Gym Header */}
                <div className="p-3.5 bg-[#0a2342] border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs shrink-0 ${
                        isElPino
                          ? 'bg-[#00d2ff] text-[#061325]'
                          : 'bg-cyan-400 text-[#061325]'
                      }`}
                    >
                      <Dumbbell className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-white text-xs leading-none">
                          {post.account}
                        </span>
                        <span
                          className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full border ${gymColorBadge} leading-none`}
                        >
                          {isElPino ? 'CrossTraining' : 'Funcional'}
                        </span>
                      </div>
                      <a
                        href={post.postUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] text-slate-400 hover:text-pink-300 transition-colors block mt-0.5"
                      >
                        {post.handle}
                      </a>
                    </div>
                  </div>

                  <a
                    href={post.postUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-pink-400 hover:bg-white/5 transition-colors"
                    title={`Ver en Instagram (${post.handle})`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Card Media with Hover Details */}
                <div className="relative aspect-square w-full overflow-hidden bg-black/40">
                  <img
                    src={post.imageUrl}
                    alt={post.caption}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                  />

                  {/* Visual Hover Sheen & Stats */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                    <div className="flex items-center gap-5 font-bold text-xs">
                      <div className="flex items-center gap-1.5">
                        <Heart className="w-4 h-4 fill-pink-500 text-pink-500" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MessageCircle className="w-4 h-4 fill-white text-white" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>

                  {/* Discipline / Theme Chip */}
                  {post.tag && (
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-black/75 text-cyan-200 backdrop-blur-md border border-white/15 shadow-sm">
                        {post.tag}
                      </span>
                    </div>
                  )}

                  {/* Visual Preview Badge for Placeholders */}
                  {post.isPlaceholder && (
                    <div className="absolute top-3 right-3 pointer-events-none">
                      <span className="px-2 py-0.5 rounded text-[9px] font-semibold bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                        Ejemplo visual
                      </span>
                    </div>
                  )}
                </div>

                {/* Caption Body */}
                <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-slate-200 line-clamp-3 leading-relaxed">
                    {post.caption}
                  </p>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-white/10">
                    <span>{post.date}</span>
                    <a
                      href={post.postUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-400 hover:text-pink-300 font-semibold group-hover:underline flex items-center gap-1"
                    >
                      <span>Ver publicación</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Slide Indicator Dots (Mobile & Tablet) */}
        <div className="flex items-center justify-center gap-1.5 mt-4">
          {filteredPosts.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToIndex(idx)}
              aria-label={`Ir a publicación ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                activeSlideIndex === idx
                  ? 'w-6 bg-cyan-400'
                  : 'w-1.5 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Integration Status & Internal Developer Note */}
        <div className="mt-8 max-w-3xl mx-auto">
          <div className="rounded-2xl bg-[#091f3a]/80 border border-cyan-500/20 overflow-hidden text-xs text-slate-300">
            {/* Toggle header */}
            <button
              type="button"
              onClick={() => setIsDevNoteOpen(!isDevNoteOpen)}
              className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-2 text-cyan-300 font-medium">
                <Info className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>
                  {integrationStatus === 'connected'
                    ? 'Conexión activa con Instagram Graph API'
                    : 'Nota de Integración: Modo de diseño y previsualización de carrusel'}
                </span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                  isDevNoteOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Expandable note details */}
            {isDevNoteOpen && (
              <div className="p-4 pt-1 border-t border-white/10 space-y-3 bg-[#07192f] text-slate-300 leading-relaxed animate-in fade-in duration-200">
                <p>
                  <strong className="text-white font-semibold">Estado de la integración: </strong>
                  {integrationStatus === 'connected' ? (
                    <span className="text-emerald-400 font-semibold">Feed en tiempo real conectado.</span>
                  ) : (
                    <span className="text-amber-300">
                      Previsualización visual con publicaciones de ejemplo representativas.
                    </span>
                  )}
                </p>

                <p className="text-slate-400">
                  {integrationDetails ||
                    'Las publicaciones mostradas funcionan como placeholders visuales para evaluar el comportamiento táctil del carrusel, la responsividad y la maquetación de marca sin alterar el rendimiento ni exponer credenciales.'}
                </p>

                <div className="p-3 rounded-xl bg-black/40 border border-white/10 space-y-1.5">
                  <span className="text-[11px] font-bold text-white uppercase tracking-wider block">
                    Pasos necesarios para sincronización en tiempo real:
                  </span>
                  <ul className="list-disc list-inside text-[11px] text-slate-400 space-y-1">
                    <li>Crear una App en <strong className="text-slate-300">Meta for Developers</strong> con el caso de uso <strong className="text-slate-300">Instagram Graph API</strong>.</li>
                    <li>Vincular las cuentas profesionales de Instagram (<strong className="text-slate-300">@urbanheroelpino</strong> y <strong className="text-slate-300">@urbanherosevillaeste</strong>) a una página de Facebook asociada.</li>
                    <li>Solicitar permisos <code className="text-cyan-300 bg-white/10 px-1 py-0.5 rounded">instagram_basic</code> y generar tokens de acceso de larga duración (Long-Lived Access Tokens).</li>
                    <li>Configurar los tokens en variables seguras del servidor (ej. <code className="text-cyan-300 bg-white/10 px-1 py-0.5 rounded">VITE_INSTAGRAM_TOKEN_EL_PINO</code> y <code className="text-cyan-300 bg-white/10 px-1 py-0.5 rounded">VITE_INSTAGRAM_TOKEN_SEVILLA_ESTE</code>).</li>
                  </ul>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-[11px]">
                  <span className="text-slate-400">Canales oficiales activos:</span>
                  <div className="flex gap-3">
                    <a
                      href="https://www.instagram.com/urbanheroelpino/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-300 hover:text-white underline inline-flex items-center gap-1"
                    >
                      <span>Abrir @urbanheroelpino</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href="https://www.instagram.com/urbanherosevillaeste/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-300 hover:text-white underline inline-flex items-center gap-1"
                    >
                      <span>Abrir @urbanherosevillaeste</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
