import React from 'react';
import { Check, Sparkles, AlertCircle, ArrowRight } from 'lucide-react';
import { SEVILLA_ESTE_PRICING, SEVILLA_ESTE_BONOS, SevillaEstePricingPlan } from '../../data/sevillaEsteData';

interface SevillaEstePricingProps {
  onOpenTrial: () => void;
}

export const SevillaEstePricing: React.FC<SevillaEstePricingProps> = ({ onOpenTrial }) => {
  return (
    <section id="tarifas" className="py-20 relative bg-[#07162b] border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-[0.25em] text-[#00d2ff] uppercase block">
            Planes y Membresías
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading tracking-wide">
            Tarifas Urban Hero Sevilla Este
          </h2>
          <p className="text-base text-slate-300">
            Cuotas adaptadas a tus días de asistencia semanal en Hotel Vértice. Sin matrícula oculta ni permanencia obligatoria.
          </p>
        </div>

        {/* 4 Main Membership Plans */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-14">
          {SEVILLA_ESTE_PRICING.map((plan: SevillaEstePricingPlan) => {
            const isHighlighted = plan.highlighted;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 relative ${
                  isHighlighted
                    ? 'bg-gradient-to-b from-[#0d3159] to-[#071b33] border-2 border-[#00d2ff] shadow-2xl shadow-cyan-950/60 lg:scale-105 z-10'
                    : 'bg-[#091f3a] border border-cyan-500/20 hover:border-cyan-400/40'
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#00d2ff] text-[#061325] shadow-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3 fill-[#061325]" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-lg font-black text-white uppercase font-heading tracking-wide mb-1">
                    {plan.name}
                  </h3>
                  
                  <div className="my-3 flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-black text-white font-heading">
                      {plan.price}
                    </span>
                    <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                      / {plan.period}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {plan.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-white/10">
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 space-y-2">
                  <button
                    type="button"
                    onClick={onOpenTrial}
                    className={`w-full py-3 px-3 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all ${
                      isHighlighted
                        ? 'bg-[#00d2ff] hover:bg-cyan-300 text-[#061325] shadow-lg shadow-cyan-500/30'
                        : 'bg-white/10 hover:bg-white/15 text-white'
                    }`}
                  >
                    <span>Probar 2 Clases Gratis</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href="https://urbanhero.wodbuster.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center block text-[11px] text-cyan-400 hover:text-cyan-300 underline font-medium pt-1"
                  >
                    Alta en WodBuster Sevilla Este
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bonos de Sesiones Sueltas */}
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#091f3a] border border-cyan-500/20 space-y-5 mb-12">
          <div className="text-center sm:text-left">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
              Sin Cuota Mensual
            </span>
            <h3 className="text-2xl font-black text-white uppercase font-heading tracking-wide">
              Bonos por Sesiones (Caducidad 6 Meses)
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Para personas con turnos rotativos o desplazamientos que desean entrenar a su ritmo con reserva en WodBuster.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {SEVILLA_ESTE_BONOS.map((bono, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-black/25 border border-white/5 flex flex-col justify-between"
              >
                <div>
                  <span className="font-bold text-white text-sm block mb-1">{bono.name}</span>
                  <span className="text-[11px] text-slate-400 leading-snug block mb-3">{bono.desc}</span>
                </div>
                <div className="pt-2 border-t border-white/5 flex items-baseline justify-between">
                  <span className="text-xl font-black text-cyan-300 font-heading">
                    {bono.price}
                  </span>
                  <span className="text-[10px] text-slate-500 uppercase">{bono.validity}</span>
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
              Gestión Oficial de Reservas en Sevilla Este:
            </strong>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Las plazas para los grupos reducidos se reservan de forma individual a través de la app oficial <strong>WodBuster</strong>. Puedes solicitar tus <strong>2 clases de prueba gratuitas</strong> antes de realizar el alta definitiva.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
