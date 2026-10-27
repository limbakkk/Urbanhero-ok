import React, { useState, useEffect } from 'react';
import { Cookie, Settings, Check, X, ShieldCheck } from 'lucide-react';
import { CookiePreferences } from '../types';
import { safeGetItem, safeSetItem } from '../utils/safeStorage';

interface CookieBannerProps {
  onOpenLegal: (type: 'cookies' | 'privacidad') => void;
  isSettingsOpenDirectly?: boolean;
  onCloseSettingsDirectly?: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({
  onOpenLegal,
  isSettingsOpenDirectly = false,
  onCloseSettingsDirectly,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isConfiguring, setIsConfiguring] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Always true and locked
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const saved = safeGetItem('uh_cookie_consent');
    if (!saved) {
      // Show banner after brief delay
      const timer = setTimeout(() => setIsVisible(true), 800);
      return () => clearTimeout(timer);
    } else {
      try {
        const parsed = JSON.parse(saved);
        setPreferences(parsed);
      } catch {
        setIsVisible(true);
      }
    }
  }, []);

  useEffect(() => {
    if (isSettingsOpenDirectly) {
      setIsVisible(true);
      setIsConfiguring(true);
    }
  }, [isSettingsOpenDirectly]);

  const saveConsent = (prefs: CookiePreferences) => {
    safeSetItem('uh_cookie_consent', JSON.stringify(prefs));
    setPreferences(prefs);
    setIsVisible(false);
    setIsConfiguring(false);
    if (onCloseSettingsDirectly) onCloseSettingsDirectly();
  };

  const handleAcceptAll = () => {
    saveConsent({
      essential: true,
      analytics: true,
      marketing: true,
    });
  };

  const handleRejectNonEssential = () => {
    saveConsent({
      essential: true,
      analytics: false,
      marketing: false,
    });
  };

  const handleSaveCustom = () => {
    saveConsent(preferences);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-[#061427]/98 border-t-2 border-cyan-500/40 shadow-2xl backdrop-blur-xl animate-in slide-in-from-bottom duration-300"
      role="region"
      aria-label="Consentimiento de Cookies"
    >
      <div className="max-w-7xl mx-auto">
        {!isConfiguring ? (
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                <Cookie className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  Configuración de Privacidad y Cookies
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
                  En Urban Hero Training Center utilizamos cookies técnicas esenciales para garantizar el funcionamiento del sitio web, y cookies analíticas y de contenido multimedia con tu consentimiento. Las cookies no esenciales están desactivadas por defecto conforme a la normativa española (LSSI-CE) y europea (RGPD). Consulta nuestra{' '}
                  <button
                    onClick={() => onOpenLegal('cookies')}
                    className="text-cyan-400 hover:text-cyan-300 underline font-semibold"
                  >
                    Política de Cookies
                  </button>{' '}
                  y{' '}
                  <button
                    onClick={() => onOpenLegal('privacidad')}
                    className="text-cyan-400 hover:text-cyan-300 underline font-semibold"
                  >
                    Política de Privacidad
                  </button>.
                </p>
              </div>
            </div>

            {/* Equal Accessible Actions: Accept, Reject, Configure */}
            <div className="flex flex-wrap items-center justify-end gap-2.5 w-full lg:w-auto shrink-0">
              <button
                type="button"
                onClick={handleRejectNonEssential}
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Rechazar no esenciales
              </button>

              <button
                type="button"
                onClick={() => setIsConfiguring(true)}
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-[#0f2d52] hover:bg-[#163e70] border border-cyan-500/30 text-cyan-300 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
              >
                <Settings className="w-3.5 h-3.5" />
                <span>Configurar</span>
              </button>

              <button
                type="button"
                onClick={handleAcceptAll}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00d2ff] to-[#0ea5e9] text-[#061325] font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/25 hover:scale-105 active:scale-95 transition-all"
              >
                Aceptar todas
              </button>
            </div>
          </div>
        ) : (
          /* Detailed Configuration View */
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-cyan-400" />
                <h4 className="text-base font-bold text-white uppercase tracking-wider font-heading">
                  Gestión de Preferencias de Cookies
                </h4>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsConfiguring(false);
                  if (onCloseSettingsDirectly) onCloseSettingsDirectly();
                }}
                className="text-slate-400 hover:text-white p-1"
                aria-label="Volver"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              {/* Essential */}
              <div className="p-4 rounded-xl bg-black/30 border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white uppercase">Técnicas / Necesarias</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                    Siempre Activas
                  </span>
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Garantizan la navegación segura, el equilibrio de carga y el guardado de tus preferencias de privacidad.
                </p>
              </div>

              {/* Analytics */}
              <div className="p-4 rounded-xl bg-black/30 border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white uppercase">Analíticas</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) =>
                        setPreferences({ ...preferences, analytics: e.target.checked })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-cyan-500"></div>
                  </label>
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Nos ayudan a entender de forma anónima qué secciones son más útiles para mejorar la velocidad y estructura.
                </p>
              </div>

              {/* Marketing & Social */}
              <div className="p-4 rounded-xl bg-black/30 border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white uppercase">Marketing & Redes</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) =>
                        setPreferences({ ...preferences, marketing: e.target.checked })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-cyan-500"></div>
                  </label>
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Permiten la integración de contenidos de Instagram y la medición de campañas oficiales en redes.
                </p>
              </div>
            </div>

            {/* Config actions */}
            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={handleRejectNonEssential}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold uppercase tracking-wider"
              >
                Solo Necesarias
              </button>
              <button
                type="button"
                onClick={handleSaveCustom}
                className="px-5 py-2 rounded-xl bg-[#00d2ff] hover:bg-cyan-300 text-[#061325] text-xs font-black uppercase tracking-wider shadow-md"
              >
                Guardar Preferencias
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
