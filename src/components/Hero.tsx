import React, { useState, useRef, useEffect } from 'react';
import { ArrowDown, Sparkles, MapPin, CheckCircle, ChevronRight, Play, Volume2, VolumeX } from 'lucide-react';

interface HeroProps {
  onOpenTrial: (gymId?: 'el-pino' | 'sevilla-este') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrial }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // 3D Parallax Tilt Effect on Mouse Move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Moderate rotation angles (-12 to 12 degrees)
    setRotation({
      x: -(y / (rect.height / 2)) * 12,
      y: (x / (rect.width / 2)) * 14,
    });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotation({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const [videoError, setVideoError] = useState(false);

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-16 overflow-hidden isolate">
      {/* Optimized Background Video Container (Zero CLS, responsive ratio) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        {!videoError && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            onError={() => setVideoError(true)}
            poster="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1920&q=80"
            className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-[1.15] scale-105 transition-transform duration-1000"
          >
            {/* High reliability royalty-free athletic gym b-roll video */}
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-athlete-training-with-a-battle-rope-in-the-gym-42795-large.mp4"
              type="video/mp4"
            />
          </video>
        )}

        {/* Ambient Gradient Overlays for optimal readability and depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#061325] via-[#061325]/75 to-[#061325]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-[#061325]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Message & Action */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Top Badges */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/10 border border-cyan-400/40 text-[#00d2ff] backdrop-blur-md shadow-sm">
                <MapPin className="w-3.5 h-3.5" />
                Sevilla: El Pino & Sevilla Este
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 border border-white/20 text-white backdrop-blur-md">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                2 Clases de Prueba Gratis
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-[0.95]">
              Fuerza, Técnica y <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] via-[#38bdf8] to-white drop-shadow-[0_4px_16px_rgba(0,210,255,0.4)]">
                Comunidad Real
              </span>
            </h1>

            {/* Brand Statement */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Urban Hero Training Center es la marca matriz que une dos de los espacios de entrenamiento más dinámicos de Sevilla: 
              <strong className="text-white font-semibold"> Urban Hero El Pino</strong> (CrossTraining, Halterofilia y Open Box) y 
              <strong className="text-white font-semibold"> Urban Hero Sevilla Este</strong> (Entrenamiento Funcional y acondicionamiento adaptado). 
              Entrenamiento profesional, plazas limitadas y seguimiento cercano.
            </p>

            {/* Key Quality Pillars Preview */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-left">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-sm">
                <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="text-xs text-slate-200 font-medium leading-tight">
                  Entrenadores titulados y corrección individual
                </span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-sm">
                <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="text-xs text-slate-200 font-medium leading-tight">
                  2 Centros especializados según tu objetivo
                </span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-sm">
                <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="text-xs text-slate-200 font-medium leading-tight">
                  Prueba 2 clases sin ningún compromiso
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#gimnasios"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#00d2ff] via-[#0284c7] to-[#0369a1] text-white font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
              >
                <span>Descubre los 2 Gimnasios</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                type="button"
                onClick={() => onOpenTrial()}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#0a2342]/90 hover:bg-[#0e315d] border border-cyan-400/40 text-cyan-300 font-bold text-sm uppercase tracking-wider hover:border-cyan-300 transition-all flex items-center justify-center gap-2 group shadow-lg"
              >
                <Sparkles className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
                <span>Reservar 2 Clases Gratis</span>
              </button>
            </div>
          </div>

          {/* Right Column: Original 3D Logo Masterpiece Display */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative perspective-1000 cursor-pointer w-full max-w-sm sm:max-w-md lg:max-w-[440px]"
            >
              {/* Outer 3D Halo Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/30 via-[#1a3e68]/40 to-blue-600/20 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000 -z-10 animate-pulse-cyan" />

              {/* 3D Extruded Container */}
              <div
                style={{
                  transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                  transition: isHovering ? 'transform 0.05s ease-out' : 'transform 0.6s ease-out',
                }}
                className="transform-style-3d bg-gradient-to-b from-[#0e2c52] via-[#081d36] to-[#040f1d] border-2 border-cyan-400/50 rounded-3xl p-2.5 sm:p-3.5 lg:p-4 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_50px_rgba(0,210,255,0.35)] relative overflow-hidden backdrop-blur-xl"
              >
                {/* Dynamic Specular Sheen Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none animate-sheen" />

                {/* Authoritative Full Logo with 3D Depth, Lettering & Proportional Fit */}
                <div
                  className="relative mx-auto rounded-2xl overflow-hidden border-2 border-cyan-400/60 shadow-[0_15px_35px_rgba(0,0,0,0.8),inset_0_1px_3px_rgba(255,255,255,0.4)] transform-style-3d group bg-[#06172d] flex items-center justify-center p-1.5 sm:p-2 min-h-[320px] sm:min-h-[390px] lg:min-h-[470px]"
                  style={{ transform: 'translateZ(50px)' }}
                >
                  <img
                    src="/assets/aistudio/file_00000000795c8246879a8de59dd2cd7c_cc6cda2f.png"
                    alt="Emblema y logotipo completo Urban Hero Training Center"
                    className="w-full h-full max-h-[330px] sm:max-h-[400px] lg:max-h-[480px] object-contain select-none pointer-events-none drop-shadow-2xl"
                  />

                  {/* Glassmorphic Light Reflections */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/30 pointer-events-none" />
                </div>

                {/* 3D Bottom Floating Badge */}
                <div
                  className="mt-5 pt-3 border-t border-cyan-500/20 flex items-center justify-between text-xs text-slate-300 transform-style-3d"
                  style={{ transform: 'translateZ(25px)' }}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    <span className="font-semibold text-white">Marca Oficial</span>
                  </div>
                  <span className="text-cyan-400 font-medium">Sevilla • España</span>
                </div>
              </div>

              {/* Interactive Helper Hint (hidden on mobile) */}
              <div className="text-center mt-3 hidden sm:block">
                <span className="text-[11px] text-slate-400 tracking-wider uppercase font-medium">
                  {isHovering ? 'Efecto de profundidad 3D interactivo' : 'Pasa el cursor para ver el relieve 3D'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 text-center flex flex-col items-center justify-center">
          <a
            href="#gimnasios"
            className="inline-flex flex-col items-center text-xs uppercase tracking-widest text-slate-400 hover:text-cyan-400 transition-colors group"
          >
            <span className="mb-1 text-[10px] font-semibold">Explora los centros</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-cyan-400" />
          </a>
        </div>
      </div>
    </section>
  );
};
