import React from 'react';
import { X, Shield, Lock, Cookie, AlertCircle } from 'lucide-react';

export type LegalModalType = 'aviso-legal' | 'privacidad' | 'cookies' | null;

interface LegalModalsProps {
  currentModal: LegalModalType;
  onClose: () => void;
  onOpenCookieSettings: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({ currentModal, onClose, onOpenCookieSettings }) => {
  if (!currentModal) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#091f3a] border-2 border-cyan-500/30 rounded-2xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between bg-[#0c274b]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
              {currentModal === 'aviso-legal' && <Shield className="w-5 h-5" />}
              {currentModal === 'privacidad' && <Lock className="w-5 h-5" />}
              {currentModal === 'cookies' && <Cookie className="w-5 h-5" />}
            </div>
            <div>
              <h2 className="text-xl font-bold text-white uppercase font-heading tracking-wide">
                {currentModal === 'aviso-legal' && 'Aviso Legal (LSSI-CE)'}
                {currentModal === 'privacidad' && 'Política de Privacidad (RGPD / GDPR)'}
                {currentModal === 'cookies' && 'Política de Cookies (Directiva ePrivacy)'}
              </h2>
              <span className="text-xs text-slate-400">Urban Hero Training Center • Sevilla</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Cerrar modal legal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
          
          {/* Missing business info disclaimer as required by prompt */}
          <div className="p-4 rounded-xl bg-cyan-950/50 border border-cyan-500/30 text-cyan-200 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="block text-white font-semibold">
                Nota de Transparencia y Cumplimiento Normativo (España / UE):
              </strong>
              <p className="text-[11px] text-slate-300">
                Los datos identificativos societarios oficiales (NIF/CIF, denominación social exacta y registro mercantil) están pendientes de aportación final por parte de la entidad titular antes del lanzamiento a producción comercial. La información física de contacto, teléfono y ubicaciones reflejadas corresponden a los centros operativos en Sevilla.
              </p>
            </div>
          </div>

          {currentModal === 'aviso-legal' && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-white uppercase font-heading">1. Identidad del Titular</h3>
              <p>
                En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE):
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Marca comercial:</strong> Urban Hero Training Center</li>
                <li><strong>Centros operativos:</strong> Urban Hero El Pino (Polígono Industrial El Pino, C/ Pino Doncel, 10, 41016 Sevilla) y Urban Hero Sevilla Este (Hotel Vértice, Av. de la Aeronáutica s/n, 41020 Sevilla).</li>
                <li><strong>Contacto telefónico / WhatsApp:</strong> +34 623 06 99 66</li>
                <li><strong>CIF / Razón Social:</strong> [Pendiente de cumplimentación por la empresa titular]</li>
                <li><strong>Sitio Web Oficial:</strong> https://urbanherotrainingcenter.com/</li>
              </ul>

              <h3 className="text-base font-bold text-white uppercase font-heading">2. Propiedad Intelectual e Industrial</h3>
              <p>
                Todos los contenidos, diseños, logotipo original Urban Hero Training Center, imagotipos, grafismos, fotografías, estructura y código fuente son titularidad de Urban Hero Training Center o disponen de las preceptivas licencias para su uso. Queda prohibida su reproducción o distribución sin autorización previa.
              </p>

              <h3 className="text-base font-bold text-white uppercase font-heading">3. Enlaces a Terceros y Webs de los Gimnasios</h3>
              <p>
                Este portal corporativo enlaza directamente a los sitios web específicos de cada gimnasio (Urban Hero El Pino y Urban Hero Sevilla Este) y perfiles en redes sociales (Instagram). Urban Hero declina cualquier responsabilidad por contenidos de sitios externos fuera de su control.
              </p>
            </div>
          )}

          {currentModal === 'privacidad' && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-white uppercase font-heading">1. Responsable del Tratamiento</h3>
              <p>
                Urban Hero Training Center trata los datos personales recabados conforme al Reglamento (UE) 2016/679 General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).
              </p>

              <h3 className="text-base font-bold text-white uppercase font-heading">2. Finalidad del Tratamiento</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Gestión de solicitudes de información y citas para las 2 clases de prueba gratuitas.</li>
                <li>Coordinación de niveles y asesoramiento técnico con el equipo de entrenadores.</li>
                <li>Atención al usuario por canales de mensajería autorizados (WhatsApp, teléfono).</li>
              </ul>

              <h3 className="text-base font-bold text-white uppercase font-heading">3. Base Legal y Conservación</h3>
              <p>
                La base jurídica es el consentimiento expreso otorgado por el usuario al solicitar información o comunicarse voluntariamente. Los datos no se cederán a terceros ajenos a la prestación del servicio de entrenamiento deportivo salvo obligación legal.
              </p>

              <h3 className="text-base font-bold text-white uppercase font-heading">4. Derechos del Interesado (ARCO+)</h3>
              <p>
                Puedes ejercer tus derechos de acceso, rectificación, supresión, limitación del tratamiento, oposición y portabilidad enviando un mensaje directo a los canales oficiales de contacto de Urban Hero en Sevilla (+34 623 06 99 66).
              </p>
            </div>
          )}

          {currentModal === 'cookies' && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-white uppercase font-heading">1. ¿Qué son las Cookies?</h3>
              <p>
                Las cookies son pequeños archivos que se almacenan en tu dispositivo para recordar tus preferencias y ofrecer una navegación segura y fluida.
              </p>

              <h3 className="text-base font-bold text-white uppercase font-heading">2. Tipos de Cookies que Utilizamos</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Cookies Técnicas / Esenciales (Necesarias):</strong> Imprescindibles para el funcionamiento de la web, seguridad contra ataques CSRF y recordar tu consentimiento de cookies. No se pueden desactivar.
                </li>
                <li>
                  <strong>Cookies Analíticas (Opcionales):</strong> Permiten medir de forma anónima y agregada el tráfico de visitas para mejorar la usabilidad del sitio. Permanecen inactivas hasta tu consentimiento explícito.
                </li>
                <li>
                  <strong>Cookies de Marketing y Redes Sociales (Opcionales):</strong> Utilizadas para la integración de contenidos externos de Instagram y medición de campañas publicitarias. Permanecen inactivas sin consentimiento.
                </li>
              </ul>

              <h3 className="text-base font-bold text-white uppercase font-heading">3. Configuración y Revocación</h3>
              <p>
                Puedes cambiar tus preferencias de cookies en cualquier momento pulsando en el botón siguiente:
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenCookieSettings();
                  }}
                  className="px-4 py-2 rounded-lg bg-cyan-500 text-[#061325] font-bold text-xs uppercase tracking-wider hover:bg-cyan-400"
                >
                  Configurar mis Preferencias de Cookies
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Footer Close Button */}
        <div className="p-4 sm:p-5 border-t border-white/10 bg-[#061427] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#00d2ff] hover:bg-cyan-300 text-[#061325] font-bold text-xs uppercase tracking-wider transition-colors"
          >
            Entendido / Cerrar
          </button>
        </div>

      </div>
    </div>
  );
};
