import React from 'react';
import { Sparkles, ArrowRight, MapPin, Dumbbell, ShieldCheck } from 'lucide-react';

interface FinalCTAProps {
  onOpenTrial: (gymId?: 'el-pino' | 'sevilla-este') => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenTrial }) => {
  return (
    <section className="py-20 relative bg-[#051121] overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-cyan-900/30 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-br from-[#0c2c54] via-[#09203d] to-[#051528] border-2 border-cyan-400/40 p-8 sm:p-14 text-center shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_40px_rgba(0,210,255,0.2)]">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>El momento de empezar es hoy</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white font-heading tracking-wide mb-4">
            ¿Listo para Superar tus Límites?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
            Elige tu gimnasio en Sevilla y ven a disfrutar de <strong className="text-white">2 clases de prueba gratuitas</strong> guiadas por nuestros entrenadores certificados.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-10">
            <button
              type="button"
              onClick={() => onOpenTrial('el-pino')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#00d2ff] hover:bg-cyan-300 text-[#061325] font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-cyan-500/30 flex items-center justify-center gap-2 transition-all hover:scale-105"
            >
              <Dumbbell className="w-4 h-4" />
              <span>Probar en El Pino</span>
            </button>

            <button
              type="button"
              onClick={() => onOpenTrial('sevilla-este')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-[#061325] font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-cyan-400/30 flex items-center justify-center gap-2 transition-all hover:scale-105"
            >
              <MapPin className="w-4 h-4" />
              <span>Probar en Sevilla Este</span>
            </button>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Sin coste de inscripción inicial</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Sin compromiso de permanencia</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Atención 100% personalizada</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
