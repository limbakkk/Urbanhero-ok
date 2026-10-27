import React, { useState, useRef } from 'react';
import { Sparkles, MapPin, Dumbbell, ChevronRight } from 'lucide-react';

interface ElPinoHeroProps {
  onOpenTrial: () => void;
}

export const ElPinoHero: React.FC<ElPinoHeroProps> = ({ onOpenTrial }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotation({
      x: -(y / (rect.height / 2)) * 12,
      y: (x / (rect.width / 2)) * 14,
    });
  };

  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center justify-center pt-28 md:pt-36 pb-16 overflow-hidden isolate">
      {/* Background with gym imagery & gradients */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80"
          alt="Instalaciones de CrossTraining Urban Hero El Pino"
          className="w-full h-full object-cover object-center filter brightness-[0.32] contrast-[1.2] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061325] via-[#061325]/85 to-[#061325]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/25 via-transparent to-[#061325]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Direct value proposition */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Title */}
            <div>
              <span className="text-xs sm:text-sm font-black tracking-[0.3em] text-cyan-400 uppercase block mb-1">
                Training Center Sevilla
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-[0.95] font-heading">
                URBAN HERO <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] via-[#38bdf8] to-white drop-shadow-[0_4px_16px_rgba(0,210,255,0.4)]">
                  EL PINO
                </span>
              </h1>
            </div>

            {/* Subtitle statement */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Box de alto rendimiento en Sevilla enfocado a <strong>CrossTraining, Halterofilia técnica y Hybrid</strong>. Estructura de barras olímpicas homologadas, plataforma de levantamiento y zona Open Box con aire acondicionado.
            </p>

            {/* Key verified highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-left">
              <div className="p-3.5 rounded-xl bg-white/[0.04] border border-cyan-500/20 backdrop-blur-sm">
                <span className="text-xs font-bold text-white uppercase block">Nave Homologada</span>
                <span className="text-[11px] text-slate-400">Barras IWF, jaula de anillas y pistas de trineo</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.04] border border-cyan-500/20 backdrop-blur-sm">
                <span className="text-xs font-bold text-white uppercase block">App WodBuster</span>
                <span className="text-[11px] text-slate-400">Reserva de plaza con aforo limitado por sesión</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.04] border border-cyan-500/20 backdrop-blur-sm">
                <span className="text-xs font-bold text-white uppercase block">Desde 70 € / Mes</span>
                <span className="text-[11px] text-slate-400">Tarifa plana ilimitada sin permanencia</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <button
                type="button"
                onClick={onOpenTrial}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#00d2ff] via-[#0284c7] to-[#0369a1] text-white font-black text-sm uppercase tracking-wider shadow-xl shadow-cyan-500/25 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 fill-white" />
                <span>SOLICITAR 2 CLASES DE PRUEBA GRATIS</span>
              </button>

              <a
                href="#horarios"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#0a2342]/90 hover:bg-[#0e315d] border border-cyan-400/40 text-cyan-300 font-bold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <span>Consultar Horarios</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: 3D Logo Presentation */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => {
                setIsHovering(false);
                setRotation({ x: 0, y: 0 });
              }}
              className="relative perspective-1000 cursor-pointer w-full max-w-sm sm:max-w-md lg:max-w-[420px]"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/30 via-blue-600/20 to-transparent rounded-3xl blur-2xl opacity-75 -z-10 animate-pulse-cyan" />

              <div
                style={{
                  transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                  transition: isHovering ? 'transform 0.05s ease-out' : 'transform 0.6s ease-out',
                }}
                className="transform-style-3d bg-gradient-to-b from-[#0e2c52] via-[#081d36] to-[#040f1d] border-2 border-cyan-400/50 rounded-3xl p-2.5 sm:p-3.5 lg:p-4 shadow-2xl relative overflow-hidden backdrop-blur-xl"
              >
                <div className="relative mx-auto rounded-2xl overflow-hidden border-2 border-cyan-400/60 shadow-2xl bg-[#06172d] flex items-center justify-center p-1.5 sm:p-2 min-h-[320px] sm:min-h-[390px] lg:min-h-[470px]">
                  <img
                    src="/assets/aistudio/file_00000000795c8246879a8de59dd2cd7c_cc6cda2f.png"
                    alt="Emblema oficial Urban Hero El Pino"
                    className="w-full h-full max-h-[330px] sm:max-h-[400px] lg:max-h-[480px] object-contain select-none pointer-events-none drop-shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/30 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
