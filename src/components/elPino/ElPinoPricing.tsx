import React from 'react';
import { Check, Sparkles, ExternalLink, ShieldCheck, AlertCircle, ArrowRight } from 'lucide-react';
import { EL_PINO_PRICING, EL_PINO_BONOS, PricingPlan } from '../../data/elPinoData';

interface ElPinoPricingProps {
  onOpenTrial: () => void;
}

export const ElPinoPricing: React.FC<ElPinoPricingProps> = ({ onOpenTrial }) => {
  return (
    <section id="tarifas" className="py-20 relative bg-[#07162b] border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-[0.25em] text-[#00d2ff] uppercase block">
            Planes y Membresías
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading tracking-wide">
            Tarifas Urban Hero El Pino
          </h2>
          <p className="text-base text-slate-300">
            Precios transparentes y sin sorpresas. Elige entre tarifa plana ilimitada para entrenar a diario o bonos flexibles por sesiones con 6 meses de caducidad.
          </p>
        </div>

        {/* 3 Main Membership Cards (Ilimitada Mes, Trimestral, Semestral) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-14">
          {EL_PINO_PRICING.slice(0, 3).map((plan: PricingPlan) => {
            const isHighlighted = plan.highlighted;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isHighlighted
                    ? 'bg-gradient-to-b from-[#0d3159] to-[#071b33] border-2 border-[#00d2ff] shadow-2xl shadow-cyan-950/60 md:scale-105 z-10'
                    : 'bg-[#091f3a] border border-cyan-500/20 hover:border-cyan-400/40'
                }`}
              >
                {/* Highlight Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2">
                    <span className="px-3.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-[#00d2ff] text-[#061325] shadow-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3 fill-[#061325]" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase font-heading tracking-wide mb-2">
                    {plan.name}
                  </h3>
                  
                  <div className="my-4 flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-black text-white font-heading">
                      {plan.price}
                    </span>
                    <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                      / {plan.period}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-white/10">
                    <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block">
                      Qué incluye:
                    </span>
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 space-y-2">
                  <button
                    type="button"
                    onClick={onOpenTrial}
                    className={`w-full py-3.5 px-4 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                      isHighlighted
                        ? 'bg-[#00d2ff] hover:bg-cyan-300 text-[#061325] shadow-lg shadow-cyan-500/30'
                        : 'bg-white/10 hover:bg-white/15 text-white'
                    }`}
                  >
                    <span>Probar 2 Clases Gratis Primero</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="https://urbanhero.wodbuster.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center block text-[11px] text-cyan-400 hover:text-cyan-300 underline font-medium pt-1"
                  >
                    Contratar en plataforma WodBuster
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary Plans & Class Packs (Quincenal, CrossKids, Bonos) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Bonos de Clases Sueltas */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#091f3a] border border-cyan-500/20 space-y-5">
            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                Flexibilidad Total
              </span>
              <h3 className="text-2xl font-black text-white uppercase font-heading tracking-wide">
                Bonos por Sesiones (Caducidad 6 Meses)
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Para deportistas con turnos de trabajo o estancias temporales que quieren entrenar sin compromiso mensual.
              </p>
            </div>

            <div className="space-y-3">
              {EL_PINO_BONOS.map((bono, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-black/25 border border-white/5 flex items-center justify-between gap-4"
                >
                  <div>
                    <span className="font-bold text-white text-sm block">{bono.name}</span>
                    <span className="text-[11px] text-slate-400">{bono.desc}</span>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xl font-black text-cyan-300 font-heading block">
                      {bono.price}
                    </span>
                    <span className="text-[10px] text-slate-500 uppercase">{bono.validity}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Opciones Especiales: Quincenal & CrossKids */}
          <div className="space-y-4">
            {EL_PINO_PRICING.slice(3).map((plan: PricingPlan) => (
              <div
                key={plan.id}
                className="p-6 rounded-2xl bg-[#091f3a] border border-cyan-500/20 flex flex-col justify-between"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                      {plan.badge || 'Modalidad Específica'}
                    </span>
                    <h4 className="text-xl font-black text-white uppercase font-heading">
                      {plan.name}
                    </h4>
                  </div>
                  <span className="text-2xl font-black text-white font-heading">
                    {plan.price}
                  </span>
                </div>
                <p className="text-xs text-slate-300 mb-4">{plan.description}</p>
                <div className="flex flex-wrap gap-2 text-xs text-slate-400">
                  {plan.features.map((f, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-black/30 border border-white/5 text-[11px] text-slate-200">
                      ✓ {f}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Verification and Review Notice */}
        <div className="p-4 sm:p-5 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 flex items-start gap-3 text-xs text-slate-300 max-w-4xl mx-auto">
          <AlertCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="text-white block font-semibold">
              Información de Tarifas y Condiciones Oficiales:
            </strong>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Las tarifas reflejadas corresponden a las modalidades oficiales de Urban Hero El Pino gestionadas a través del software oficial de altas <strong>WodBuster</strong>. Te recomendamos confirmar la disponibilidad de plazas o solicitar tus <strong>2 clases de prueba gratuitas</strong> antes de realizar el alta definitiva.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
