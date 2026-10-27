export interface SevillaEsteDiscipline {
  id: string;
  name: string;
  subtitle: string;
  category: 'Metabólico' | 'Fuerza & Tono' | 'Salud Postural' | 'Grupos Reducidos';
  description: string;
  benefits: string[];
  equipment: string[];
  targetAudience: string;
  imageUrl: string;
}

export interface SevillaEsteCoach {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  experience: string;
  quote: string;
  imageUrl: string;
}

export interface SevillaEstePricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  highlighted?: boolean;
  badge?: string;
  description: string;
  features: string[];
  wodbusterUrl: string;
}

export interface SevillaEsteSession {
  time: string;
  discipline: string;
  coach: string;
  category: string;
  badgeColor?: string;
}

export interface SevillaEsteDaySchedule {
  dayName: string;
  dayShort: string;
  sessions: SevillaEsteSession[];
}

export const SEVILLA_ESTE_DISCIPLINES: SevillaEsteDiscipline[] = [
  {
    id: 'entrenamiento-funcional',
    name: 'Entrenamiento Funcional Adaptado',
    subtitle: 'Movimientos multiarticulares aplicados a tu vida diaria',
    category: 'Grupos Reducidos',
    description:
      'Sesiones completas donde trabajamos patrones fundamentales de movimiento: empujes, tracciones, bisagras de cadera, sentadillas y rotaciones. Cada ejercicio se escala a tu rango de movilidad actual para progresar sin riesgo de sobrecarga.',
    benefits: ['Fuerza funcional aplicable a tu día a día', 'Equilibrio muscular y corrección postural', 'Agilidad, coordinación y resistencia global'],
    equipment: ['Kettlebells de peso gradual', 'Bandas de resistencia y elásticos', 'Mancuernas hexagonales', 'Cajones blandos de salto'],
    targetAudience: 'Apto para cualquier persona, desde quien retoma el ejercicio hasta personas activas que buscan entrenar con técnica impecable.',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'hiit-metabolico',
    name: 'HIIT & Acondicionamiento Metabólico',
    subtitle: 'Quema calórica eficiente y resistencia cardiovascular sin impacto articular nocivo',
    category: 'Metabólico',
    description:
      'Circuitos dinámicos por intervalos de trabajo y descanso controlado. Empleamos ergómetros y ejercicios cardiovasculares de bajo impacto articular que aceleran tu metabolismo basal y mejoran tu capacidad aeróbica en solo 50 minutos.',
    benefits: ['Máxima eficiencia en gasto calórico', 'Mejora del consumo máximo de oxígeno (VO2 máx)', 'Cero impacto dañino para rodillas y lumbares'],
    equipment: ['Remos Concept2', 'Airbikes', 'SkiErg', 'Slam balls y combas de velocidad'],
    targetAudience: 'Ideal si dispones de tiempo limitado y deseas quemar grasa, tonificar y ganar resistencia cardiovascular.',
    imageUrl: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'fuerza-tonificacion',
    name: 'Fuerza y Tonificación Guiada',
    subtitle: 'Fortalecimiento muscular progresivo sin la intimidación de barras pesadas',
    category: 'Fuerza & Tono',
    description:
      'Enfocado en desarrollar masa muscular magra, densidad ósea y firmeza corporal. Los entrenadores pautan series, repeticiones y descansos ajustados para que progreses en cargas a tu ritmo, en un entorno seguro y sin prisas.',
    benefits: ['Tonificación y definición muscular visible', 'Aumento de la tasa metabólica en reposo', 'Protección de articulaciones y ligamentos'],
    equipment: ['Mancuernas calibradas', 'Poleas regulables', 'Balones medicinales', 'Bancos ergonómicos'],
    targetAudience: 'Para quienes desean ganar firmeza y fuerza real sintiéndose guiados en cada repetición por un entrenador profesional.',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'espalda-sana-movilidad',
    name: 'Movilidad, Core & Espalda Sana',
    subtitle: 'Descompresión articular, activación del cinturón abdominal y alivio postural',
    category: 'Salud Postural',
    description:
      'Diseñado específicamente para contrarrestar los efectos del sedentarismo laboral y las malas posturas frente a pantallas. Trabajamos la estabilidad de la columna lumbar, la apertura torácica y la movilidad de cadera y hombros.',
    benefits: ['Alivio de tensiones lumbares y cervicales', 'Fortalecimiento profundo del transverso abdominal', 'Mayor libertad de movimiento articular'],
    equipment: ['Foam rollers y pelotas miofasciales', 'Bandas elásticas de tracción', 'Esterillas de alta densidad', 'Picas ligeras'],
    targetAudience: 'Recomendado para trabajadores de oficina, personas con rigidez postural o quienes buscan complementar su rutina de fuerza.',
    imageUrl: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'small-group-circuits',
    name: 'Circuito Funcional en Grupos Reducidos',
    subtitle: 'La motivación del entrenamiento colectivo con atención personalizada',
    category: 'Grupos Reducidos',
    description:
      'El formato distintivo de Sevilla Este: estaciones de trabajo rotativas en grupos de máximo 10 a 12 participantes. El coach supervisa la ejecución técnica individual mientras el grupo comparte la motivación y el ritmo de la sesión.',
    benefits: ['Supervisión técnica cercana en cada estación', 'Ambiente motivador sin presiones externas', 'Variabilidad constante en cada clase'],
    equipment: ['Circuito mixto de estaciones funcionales', 'Cronómetro visible sincronizado', 'Equipamiento ergonómico completo'],
    targetAudience: 'Personas que buscan divertirse entrenando, desconectar de la rutina y pertenecer a una comunidad cercana en Sevilla Este.',
    imageUrl: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80',
  },
];

export const SEVILLA_ESTE_COACHES: SevillaEsteCoach[] = [
  {
    id: 'dani',
    name: 'Dani',
    role: 'Head Coach & Especialista en Readaptación',
    specialty: 'Biomecánica, Corrección Postural y Entrenamiento Funcional',
    bio: 'Graduado en Ciencias de la Actividad Física y del Deporte con especialización en salud y readaptación física. Con más de 6 años de trayectoria, Dani destaca por su trato pedagógico y su precisión para ajustar cualquier ejercicio según molestias o lesiones previas.',
    experience: '6+ años liderando programas de ejercicio físico para la salud en Sevilla',
    quote: 'El entrenamiento inteligente es aquel que te hace sentir más ágil y con energía en tu día a día, sin dolor articular.',
    imageUrl: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'elena',
    name: 'Elena',
    role: 'Coach de Acondicionamiento Físico & HIIT',
    specialty: 'Metabolismo, Motivación en Grupos y Control Cardiovascular',
    bio: 'Técnica Superior en Animación de Actividades Físicas y Deportivas con certificación en entrenamiento en intervalos de alta intensidad. Elena aporta dinamismo contagioso a cada sesión, guiando el esfuerzo colectivo para que cada alumno trabaje en su frecuencia cardíaca óptima.',
    experience: '5 años guiando grupos reducidos y programas de tonificación',
    quote: 'No se trata de terminar exhausto, sino de estimular el cuerpo de manera equilibrada para que evolucione cada semana.',
    imageUrl: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'marcos',
    name: 'Marcos',
    role: 'Coach de Fuerza & Movilidad Funcional',
    specialty: 'Fortalecimiento Progresivo, Core y Movilidad de Espalda',
    bio: 'Especialista titulado en fuerza aplicada a la salud y control motor. Marcos acompaña a cada atleta desde sus primeras repeticiones, asegurando que las ganancias de fuerza se traduzcan en una mejor calidad de vida y estabilidad articular.',
    experience: 'Especialista en entrenamiento de fuerza y salud articular',
    quote: 'La consistencia en la técnica correcta siempre vence al exceso de carga. La fuerza es salud.',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80',
  },
];

export const SEVILLA_ESTE_PRICING: SevillaEstePricingPlan[] = [
  {
    id: 'ilimitada',
    name: 'Tarifa Ilimitada Mensual',
    price: '65,00 €',
    period: 'por mes',
    highlighted: true,
    badge: 'Máxima Frecuencia',
    description: 'Acceso total a todas las clases dirigidas de entrenamiento funcional, HIIT y movilidad de lunes a sábado.',
    features: [
      'Clases funcionales ilimitadas por semana',
      'Acceso a sesiones de HIIT, Fuerza y Espalda Sana',
      'Circuito Funcional de los sábados incluido',
      'Gestión de reservas desde la app oficial WodBuster',
      'Sin permanencia obligatoria ni cuota de matrícula oculta',
    ],
    wodbusterUrl: 'https://urbanhero.wodbuster.com',
  },
  {
    id: '3-dias',
    name: 'Plan 3 Días / Semana',
    price: '55,00 €',
    period: 'por mes',
    badge: 'Más Recomendado',
    description: 'El equilibrio óptimo entre estimulación muscular, recuperación y constancia semanal.',
    features: [
      'Hasta 12 a 14 clases mensuales programadas',
      'Flexibilidad para elegir tus días y horarios en WodBuster',
      'Acceso a todas las disciplinas funcionales del centro',
      'Seguimiento cercano de progresiones con los coaches',
    ],
    wodbusterUrl: 'https://urbanhero.wodbuster.com',
  },
  {
    id: '2-dias',
    name: 'Plan 2 Días / Semana',
    price: '50,00 €',
    period: 'por mes',
    description: 'La opción ideal para iniciarse, retomar el ejercicio físico o complementar con pádel, running u otros deportes.',
    features: [
      'Hasta 8 a 9 sesiones mensuales guiadas',
      'Mismo trato personalizado y grupos reducidos',
      'Reserva flexible a través de la app',
      'Cancelación o cambio de turno con hasta 2h de antelación',
    ],
    wodbusterUrl: 'https://urbanhero.wodbuster.com',
  },
  {
    id: '4-dias',
    name: 'Plan 4 Días / Semana',
    price: '60,00 €',
    period: 'por mes',
    description: 'Diseñado para atletas constantes que desean un acondicionamiento físico continuado de lunes a viernes.',
    features: [
      'Hasta 16 a 18 clases mensuales guiadas',
      'Combinación libre de HIIT, fuerza funcional y movilidad',
      'Reserva de plaza garantizada mediante cupos cerrados',
      'Atención técnica continua',
    ],
    wodbusterUrl: 'https://urbanhero.wodbuster.com',
  },
];

export const SEVILLA_ESTE_BONOS = [
  { name: 'Drop In (Clase Suelta)', price: '10,00 €', validity: 'Día de uso', desc: 'Acceso a una sesión individual para probar el centro o visitas puntuales' },
  { name: 'Bono 5 Clases', price: '35,00 €', validity: 'Caducidad 6 meses', desc: '7,00 € por clase con total libertad para reservar los días que mejor te convengan' },
  { name: 'Bono 10 Clases', price: '60,00 €', validity: 'Caducidad 6 meses', desc: '6,00 € por clase para compaginar el entrenamiento con turnos o viajes laborales' },
];

export const SEVILLA_ESTE_SCHEDULE: SevillaEsteDaySchedule[] = [
  {
    dayName: 'Lunes',
    dayShort: 'LUN',
    sessions: [
      { time: '07:15 - 08:05', discipline: 'Acondicionamiento Funcional Early', coach: 'Dani', category: 'Funcional', badgeColor: 'bg-cyan-500/20 text-cyan-300' },
      { time: '08:15 - 09:05', discipline: 'HIIT & Movilidad', coach: 'Elena', category: 'Metabólico', badgeColor: 'bg-emerald-500/20 text-emerald-300' },
      { time: '09:30 - 10:20', discipline: 'Fuerza & Tonificación', coach: 'Dani', category: 'Fuerza', badgeColor: 'bg-blue-500/20 text-blue-300' },
      { time: '10:30 - 11:20', discipline: 'Espalda Sana & Core', coach: 'Marcos', category: 'Salud', badgeColor: 'bg-purple-500/20 text-purple-300' },
      { time: '14:00 - 14:50', discipline: 'Funcional Midday Express', coach: 'Elena', category: 'Funcional', badgeColor: 'bg-cyan-500/20 text-cyan-300' },
      { time: '17:30 - 18:20', discipline: 'Circuito Funcional en Grupos', coach: 'Dani', category: 'Funcional', badgeColor: 'bg-cyan-500/20 text-cyan-300' },
      { time: '18:30 - 19:20', discipline: 'HIIT Metabólico', coach: 'Elena', category: 'Metabólico', badgeColor: 'bg-emerald-500/20 text-emerald-300' },
      { time: '19:30 - 20:20', discipline: 'Fuerza & Tonificación Guiada', coach: 'Marcos', category: 'Fuerza', badgeColor: 'bg-blue-500/20 text-blue-300' },
      { time: '20:30 - 21:20', discipline: 'Funcional & Movilidad Articular', coach: 'Marcos', category: 'Salud', badgeColor: 'bg-purple-500/20 text-purple-300' },
    ],
  },
  {
    dayName: 'Martes',
    dayShort: 'MAR',
    sessions: [
      { time: '07:15 - 08:05', discipline: 'HIIT & Activación Funcional', coach: 'Elena', category: 'Metabólico', badgeColor: 'bg-emerald-500/20 text-emerald-300' },
      { time: '08:15 - 09:05', discipline: 'Fuerza y Tonificación', coach: 'Dani', category: 'Fuerza', badgeColor: 'bg-blue-500/20 text-blue-300' },
      { time: '09:30 - 10:20', discipline: 'Espalda Sana & Readaptación', coach: 'Marcos', category: 'Salud', badgeColor: 'bg-purple-500/20 text-purple-300' },
      { time: '14:00 - 14:50', discipline: 'Entrenamiento Funcional', coach: 'Dani', category: 'Funcional', badgeColor: 'bg-cyan-500/20 text-cyan-300' },
      { time: '17:30 - 18:20', discipline: 'Fuerza Funcional Guiada', coach: 'Marcos', category: 'Fuerza', badgeColor: 'bg-blue-500/20 text-blue-300' },
      { time: '18:30 - 19:20', discipline: 'Circuito Funcional Reducido', coach: 'Dani', category: 'Funcional', badgeColor: 'bg-cyan-500/20 text-cyan-300' },
      { time: '19:30 - 20:20', discipline: 'HIIT & Quema Calórica', coach: 'Elena', category: 'Metabólico', badgeColor: 'bg-emerald-500/20 text-emerald-300' },
      { time: '20:30 - 21:20', discipline: 'Core, Glúteo & Estiramientos', coach: 'Elena', category: 'Salud', badgeColor: 'bg-purple-500/20 text-purple-300' },
    ],
  },
  {
    dayName: 'Miércoles',
    dayShort: 'MIÉ',
    sessions: [
      { time: '07:15 - 08:05', discipline: 'Acondicionamiento Funcional', coach: 'Dani', category: 'Funcional', badgeColor: 'bg-cyan-500/20 text-cyan-300' },
      { time: '08:15 - 09:05', discipline: 'Fuerza & Resistencia', coach: 'Marcos', category: 'Fuerza', badgeColor: 'bg-blue-500/20 text-blue-300' },
      { time: '09:30 - 10:20', discipline: 'HIIT Metabólico', coach: 'Elena', category: 'Metabólico', badgeColor: 'bg-emerald-500/20 text-emerald-300' },
      { time: '10:30 - 11:20', discipline: 'Espalda Sana & Postura', coach: 'Dani', category: 'Salud', badgeColor: 'bg-purple-500/20 text-purple-300' },
      { time: '14:00 - 14:50', discipline: 'Funcional Midday Express', coach: 'Elena', category: 'Funcional', badgeColor: 'bg-cyan-500/20 text-cyan-300' },
      { time: '17:30 - 18:20', discipline: 'Circuito Funcional por Estaciones', coach: 'Dani', category: 'Funcional', badgeColor: 'bg-cyan-500/20 text-cyan-300' },
      { time: '18:30 - 19:20', discipline: 'HIIT & Movilidad Dinámica', coach: 'Elena', category: 'Metabólico', badgeColor: 'bg-emerald-500/20 text-emerald-300' },
      { time: '19:30 - 20:20', discipline: 'Fuerza & Tonificación', coach: 'Marcos', category: 'Fuerza', badgeColor: 'bg-blue-500/20 text-blue-300' },
      { time: '20:30 - 21:20', discipline: 'Movilidad & Descompresión Articular', coach: 'Marcos', category: 'Salud', badgeColor: 'bg-purple-500/20 text-purple-300' },
    ],
  },
  {
    dayName: 'Jueves',
    dayShort: 'JUE',
    sessions: [
      { time: '07:15 - 08:05', discipline: 'HIIT & Acondicionamiento', coach: 'Elena', category: 'Metabólico', badgeColor: 'bg-emerald-500/20 text-emerald-300' },
      { time: '08:15 - 09:05', discipline: 'Fuerza y Tonificación', coach: 'Marcos', category: 'Fuerza', badgeColor: 'bg-blue-500/20 text-blue-300' },
      { time: '09:30 - 10:20', discipline: 'Movilidad & Espalda Sana', coach: 'Dani', category: 'Salud', badgeColor: 'bg-purple-500/20 text-purple-300' },
      { time: '14:00 - 14:50', discipline: 'Funcional Midday', coach: 'Dani', category: 'Funcional', badgeColor: 'bg-cyan-500/20 text-cyan-300' },
      { time: '17:30 - 18:20', discipline: 'Fuerza Funcional', coach: 'Marcos', category: 'Fuerza', badgeColor: 'bg-blue-500/20 text-blue-300' },
      { time: '18:30 - 19:20', discipline: 'Circuito en Grupos Reducidos', coach: 'Dani', category: 'Funcional', badgeColor: 'bg-cyan-500/20 text-cyan-300' },
      { time: '19:30 - 20:20', discipline: 'HIIT Metabólico', coach: 'Elena', category: 'Metabólico', badgeColor: 'bg-emerald-500/20 text-emerald-300' },
      { time: '20:30 - 21:20', discipline: 'Core & Vuelta a la Calma', coach: 'Elena', category: 'Salud', badgeColor: 'bg-purple-500/20 text-purple-300' },
    ],
  },
  {
    dayName: 'Viernes',
    dayShort: 'VIE',
    sessions: [
      { time: '07:15 - 08:05', discipline: 'Acondicionamiento Funcional', coach: 'Dani', category: 'Funcional', badgeColor: 'bg-cyan-500/20 text-cyan-300' },
      { time: '08:15 - 09:05', discipline: 'Fuerza & Tonificación', coach: 'Marcos', category: 'Fuerza', badgeColor: 'bg-blue-500/20 text-blue-300' },
      { time: '09:30 - 10:20', discipline: 'HIIT & Movilidad', coach: 'Elena', category: 'Metabólico', badgeColor: 'bg-emerald-500/20 text-emerald-300' },
      { time: '14:00 - 14:50', discipline: 'Funcional Express', coach: 'Dani', category: 'Funcional', badgeColor: 'bg-cyan-500/20 text-cyan-300' },
      { time: '17:30 - 18:20', discipline: 'Circuito Funcional de Fin de Semana', coach: 'Elena', category: 'Funcional', badgeColor: 'bg-cyan-500/20 text-cyan-300' },
      { time: '18:30 - 19:20', discipline: 'Fuerza & Core', coach: 'Marcos', category: 'Fuerza', badgeColor: 'bg-blue-500/20 text-blue-300' },
      { time: '19:30 - 20:20', discipline: 'Movilidad & Estiramientos Asistidos', coach: 'Dani', category: 'Salud', badgeColor: 'bg-purple-500/20 text-purple-300' },
    ],
  },
  {
    dayName: 'Sábado',
    dayShort: 'SÁB',
    sessions: [
      { time: '10:00 - 11:15', discipline: 'Circuito Funcional en Equipo', coach: 'Equipo de Coaches', category: 'Funcional', badgeColor: 'bg-amber-400 text-black font-bold' },
      { time: '11:30 - 12:30', discipline: 'Sesión Guiada de Movilidad & Core', coach: 'Equipo de Coaches', category: 'Salud', badgeColor: 'bg-purple-500/20 text-purple-300' },
    ],
  },
];

export const SEVILLA_ESTE_GALLERY = [
  {
    id: 'se-gal-1',
    title: 'Sala Funcional Climatizada en Hotel Vértice',
    category: 'Instalaciones',
    url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80',
    caption: 'Espacio acondicionado y equipado para circuitos de entrenamiento funcional.',
  },
  {
    id: 'se-gal-2',
    title: 'Supervisión en Grupos Reducidos',
    category: 'Entrenamiento',
    url: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1000&q=80',
    caption: 'Máximo 10-12 alumnos por sesión para garantizar corrección postural permanente.',
  },
  {
    id: 'se-gal-3',
    title: 'Zona de Ergómetros e Intervalos HIIT',
    category: 'Material',
    url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80',
    caption: 'Remos Concept2, Airbikes y cuerdas funcionales para estímulos de bajo impacto.',
  },
  {
    id: 'se-gal-4',
    title: 'Material de Fuerza Calibrado y Seguro',
    category: 'Material',
    url: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=80',
    caption: 'Mancuernas de uretano, kettlebells, cajones acolchados y bandas de resistencia.',
  },
  {
    id: 'se-gal-5',
    title: 'Espacio Cómodo y Vestuarios de Hotel',
    category: 'Instalaciones',
    url: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80',
    caption: 'Duchas individuales climatizadas, taquillas seguras y fácil aparcamiento.',
  },
  {
    id: 'se-gal-6',
    title: 'Comunidad Cercana y Motivadora',
    category: 'Comunidad',
    url: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1000&q=80',
    caption: 'Entrena con personas que comparten tus metas de salud y vitalidad en Sevilla Este.',
  },
];

export const SEVILLA_ESTE_FAQS = [
  {
    question: '¿En qué se diferencia Urban Hero Sevilla Este de Urban Hero El Pino?',
    answer:
      'Urban Hero Sevilla Este está 100% orientado al entrenamiento funcional, la salud postural, la tonificación y la quema calórica en grupos reducidos (10-12 personas), sin el requerimiento ni la presión de levantamientos pesados de halterofilia con barra olímpica. Urban Hero El Pino es nuestro box de CrossTraining y alta competición homologado.',
  },
  {
    question: 'No he hecho ejercicio en años o tengo dolor de espalda, ¿puedo apuntarme?',
    answer:
      'Sí, precisamente ese es el propósito de Sevilla Este. Antes de tu primera sesión realizamos un breve cuestionario de movilidad y estado articular. Todos los movimientos se gradúan y los entrenadores ofrecen variantes terapéuticas y adaptadas.',
  },
  {
    question: '¿Dónde está ubicado el centro y cómo se accede?',
    answer:
      'Estamos ubicados dentro de las instalaciones del Hotel Vértice Sevilla (Avenida de la Aeronáutica s/n, 41020 Sevilla Este). Contamos con vestuarios de primer nivel y zonas de fácil aparcamiento gratuito en las inmediaciones.',
  },
  {
    question: '¿Cómo funciona la promoción de 2 clases de prueba gratuitas?',
    answer:
      'Es totalmente gratuita y sin ningún compromiso de permanencia. Puedes solicitar tu invitación por WhatsApp (+34 623 06 99 66) o a través del software oficial WodBuster. Te asignaremos una clase introductoria supervisada.',
  },
  {
    question: '¿Cómo se reservan y cancelan las clases semanales?',
    answer:
      'A través de la aplicación oficial WodBuster. Puedes reservar tu franja preferida en tiempo real y cancelar o cambiar de turno con hasta 2 horas de antelación sin consumir tu crédito de sesión.',
  },
  {
    question: '¿Qué equipamiento necesito llevar para mi primer entrenamiento?',
    answer:
      'Ropa deportiva cómoda y transpirable, calzado deportivo para entrenamiento indoor, una toalla pequeña de mano y tu botella de agua reutilizable. El centro dispone de fuentes de agua y vestuarios con duchas.',
  },
];
