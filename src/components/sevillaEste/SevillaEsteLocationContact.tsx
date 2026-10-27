import React from 'react';
import { MapPin, Phone, Instagram, Clock, Navigation, ExternalLink, MessageSquare, Car, Bus } from 'lucide-react';

export const SevillaEsteLocationContact: React.FC = () => {
  return (
    <section id="contacto" className="py-20 relative bg-[#07162b] border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-[0.25em] text-[#00d2ff] uppercase block">
            Localización y Acceso
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading tracking-wide">
            Dónde Estamos y Contacto
          </h2>
          <p className="text-base text-slate-300">
            Situados en el Hotel Vértice Sevilla, con conexiones directas en autobús TUSSAM, acceso inmediato desde SE-30 / A-4 y fácil aparcamiento exterior.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-[#091f3a] border border-cyan-500/25 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white uppercase font-heading">
                    Dirección del Centro
                  </h3>
                  <span className="text-xs text-cyan-300 font-semibold">Hotel Vértice Sevilla Este</span>
                </div>
              </div>
              <p className="text-sm text-slate-200 pl-1">
                Avenida de la Aeronáutica s/n <br />
                41020 Sevilla, España
              </p>
              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Hotel+Vertice+Sevilla+Avenida+de+la+Aeronautica+41020+Sevilla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Abrir en Google Maps</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>

            {/* Public Transport & Parking */}
            <div className="p-6 rounded-2xl bg-[#091f3a] border border-cyan-500/25 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white uppercase font-heading">
                    Aparcamiento & Transporte
                  </h3>
                  <span className="text-xs text-slate-400">Fácil acceso en Sevilla Este</span>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Zonas de aparcamiento exterior gratuito alrededor del Hotel Vértice. Paradas de autobús TUSSAM (Líneas 22, 27 y B4) a menos de 2 minutos caminando.
              </p>
            </div>

            {/* Direct Phone & WhatsApp */}
            <div className="p-6 rounded-2xl bg-[#091f3a] border border-cyan-500/25 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white uppercase font-heading">
                    Teléfono & WhatsApp
                  </h3>
                  <span className="text-xs text-slate-400">Atención directa de entrenadores</span>
                </div>
              </div>
              <p className="text-sm font-mono font-bold text-white pl-1">
                +34 623 06 99 66
              </p>
              <div className="pt-2">
                <a
                  href="https://wa.me/34623069966?text=Hola,%20contacto%20desde%20la%20web%20de%20Urban%20Hero%20Sevilla%20Este"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-black" />
                  <span>Chatear por WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Instagram Profile */}
            <div className="p-6 rounded-2xl bg-[#091f3a] border border-cyan-500/25 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-400">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white uppercase font-heading">
                    Instagram Sevilla Este
                  </h3>
                  <span className="text-xs text-pink-400 font-semibold">@urbanherosevillaeste</span>
                </div>
              </div>
              <p className="text-xs text-slate-300">
                Entrenamientos diarios, tips de movilidad y ambiente de grupos en Hotel Vértice.
              </p>
              <div className="pt-1">
                <a
                  href="https://www.instagram.com/urbanherosevillaeste/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-pink-500/20 hover:bg-pink-500/30 text-pink-300 border border-pink-500/40 text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Visitar @urbanherosevillaeste</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Map Preview & Detailed Timetable Box */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Map Frame Card */}
            <div className="rounded-3xl overflow-hidden border-2 border-cyan-500/30 bg-[#091f3a] shadow-xl">
              <div className="p-4 bg-[#0c274b] border-b border-cyan-500/30 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-bold text-white uppercase font-heading tracking-wide">
                    Ubicación en Hotel Vértice Sevilla
                  </span>
                </div>
                <a
                  href="https://maps.google.com/?q=Hotel+Vertice+Sevilla+Avenida+de+la+Aeronautica+41020+Sevilla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-cyan-400 hover:text-cyan-300 underline font-semibold flex items-center gap-1"
                >
                  <span>Cómo llegar</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map embed / preview representation */}
              <div className="relative h-80 w-full bg-slate-900 overflow-hidden">
                <iframe
                  title="Mapa Urban Hero Sevilla Este"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.2)' }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=Hotel%20Vertice%20Sevilla,%20Avenida%20de%20la%20Aeronautica,%2041020%20Sevilla&t=&z=15&ie=UTF8&iwloc=&output=embed"
                />
              </div>

              <div className="p-5 bg-[#07192f] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300 border-t border-white/5">
                <span>Av. de la Aeronáutica s/n • Hotel Vértice, 41020 Sevilla</span>
                <span className="text-cyan-300 font-semibold">Salida rápida hacia SE-30 y A-4</span>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="p-6 rounded-3xl bg-[#091f3a] border border-cyan-500/25 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase font-heading">
                  Horario Completo de Clases
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-black/25 border border-white/5 space-y-1">
                  <span className="font-bold text-cyan-300 uppercase block">Turno Mañanas (L-V)</span>
                  <p className="text-slate-300 font-mono">07:15h – 11:20h (Clases cada 50 min)</p>
                </div>

                <div className="p-3 rounded-xl bg-black/25 border border-white/5 space-y-1">
                  <span className="font-bold text-cyan-300 uppercase block">Turno Mediodía (L-V)</span>
                  <p className="text-slate-300 font-mono">14:00h – 14:50h (Express Funcional)</p>
                </div>

                <div className="p-3 rounded-xl bg-black/25 border border-white/5 space-y-1">
                  <span className="font-bold text-cyan-300 uppercase block">Turno Tardes (L-V)</span>
                  <p className="text-slate-300 font-mono">17:30h – 21:20h (Grupos Reducidos)</p>
                </div>

                <div className="p-3 rounded-xl bg-black/25 border border-white/5 space-y-1">
                  <span className="font-bold text-amber-300 uppercase block">Sábados</span>
                  <p className="text-slate-300 font-mono">10:00h – 12:30h (Domingos cerrado)</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
