export interface ElPinoDiscipline {
  id: string;
  name: string;
  subtitle: string;
  category: 'Alta Intensidad' | 'Fuerza Técnica' | 'Destreza' | 'Libre' | 'Infantil';
  description: string;
  benefits: string[];
  equipment: string[];
  levelReq: string;
  imageUrl: string;
}

export interface ElPinoCoach {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  experience: string;
  quote: string;
  imageUrl: string;
}

export interface PricingPlan {
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

export interface ClassSession {
  time: string;
  discipline: string;
  coach: string;
  category: string;
  badgeColor?: string;
}

export interface DaySchedule {
  dayName: string;
  dayShort: string;
  sessions: ClassSession[];
}

export const EL_PINO_DISCIPLINES: ElPinoDiscipline[] = [
  {
    id: 'crosstraining',
    name: 'CrossTraining',
    subtitle: 'El corazón del box: fuerza funcional y capacidad metabólica',
    category: 'Alta Intensidad',
    description:
      'Entrenamientos diarios en constante variación ejecutados a alta intensidad relativa. Combina levantamientos de fuerza, ejercicios gimnásticos y acondicionamiento cardiovascular (WOD) adaptado a cada participante.',
    benefits: ['Aumento de resistencia cardiovascular', 'Ganancia de fuerza y potencia', 'Quema de grasa y masa muscular magra'],
    equipment: ['Barras olímpicas', 'Kettlebells', 'Remo Concept2 / Bike / Skierg', 'Cajones pliométricos'],
    levelReq: 'Todos los niveles (los entrenadores escalan cargas y repeticiones)',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'halterofilia',
    name: 'Halterofilia (Weightlifting)',
    subtitle: 'Técnica de arrancada (Snatch) y dos tiempos (Clean & Jerk)',
    category: 'Fuerza Técnica',
    description:
      'Clases dedicadas exclusivamente a desglosar y perfeccionar la biomecánica de los levantamientos olímpicos. Trabajo de velocidad bajo la barra, movilidad de tobillo y cadera, y mejora de marcas personales (PR).',
    benefits: ['Potencia explosiva neuromuscular', 'Mejora de la postura y fuerza de core', 'Dominio técnico seguro'],
    equipment: ['Barras y discos bumpers homologados', 'Técnica de PVC', 'Magnesio y plataformas'],
    levelReq: 'Desde iniciación hasta avanzados en competición',
    imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'gymnastics',
    name: 'Gymnastics',
    subtitle: 'Control corporal, anillas, barra y pino',
    category: 'Destreza',
    description:
      'Sesiones específicas para aprender y dominar la gimnasia deportiva aplicada: pull-ups (estrictos y kipping), toes to bar, muscle-ups en anillas y barra, y estabilidad en pino (handstand push-ups y walk).',
    benefits: ['Fuerza de agarre y tracción', 'Conciencia espacial y equilibrio', 'Salud articular en hombros y muñecas'],
    equipment: ['Estructura de anillas', 'Barras fijas', 'Gomas de asistencia', 'Colchonetas'],
    levelReq: 'Adaptado desde el primer intento con bandas elásticas',
    imageUrl: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'hybrid',
    name: 'Hybrid Training',
    subtitle: 'Resistencia pura, carrera y fuerza funcional',
    category: 'Alta Intensidad',
    description:
      'Disciplina inspirada en las competiciones híbridas más exigentes. Combina tramos de carrera, ritmos en ergómetros y ejercicios de tracción/empuje con cargas moderadas para construir un motor aeróbico inagotable.',
    benefits: ['Capacidad pulmonar y consumo máximo de oxígeno', 'Resistencia muscular prolongada', 'Puesta a punto para eventos de resistencia'],
    equipment: ['Skierg', 'Airbike', 'Sled (Trineo)', 'Mancuernas y chalecos lastrados'],
    levelReq: 'Apto para corredores y atletas que buscan fondo físico',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'openbox',
    name: 'Open Box Climatizado',
    subtitle: 'Tu propio espacio y ritmo en nave acondicionada',
    category: 'Libre',
    description:
      'Zona reservada y completamente climatizada para entrenar libremente tu propia programación, practicar destrezas pendientes o realizar estiramientos y accesorios con todo el material del box disponible.',
    benefits: ['Flexibilidad horaria total', 'Temperatura regulada en Sevilla todo el año', 'Material de alta competición a tu disposición'],
    equipment: ['Acceso a todo el material del box', 'Zona de racks', 'Pistas de tartán'],
    levelReq: 'Requiere conocer las normas de seguridad del box',
    imageUrl: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'teamwod',
    name: 'Team WOD',
    subtitle: 'Comunidad, compañerismo y estrategia los sábados',
    category: 'Alta Intensidad',
    description:
      'El entrenamiento estrella del fin de semana. Sesiones por parejas o tríos donde se reparte el volumen, se coordinan las transiciones y se vive la máxima motivación colectiva de Urban Hero El Pino.',
    benefits: ['Motivación comunitaria', 'Estrategia de pacing y reparto de esfuerzo', 'Diversión y camaradería pura'],
    equipment: ['Equipamiento sincronizado', 'Worm / Trineos compartidos', 'Mancuernas'],
    levelReq: 'Abierto a todos los atletas con ganas de darlo todo en equipo',
    imageUrl: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'crosskids',
    name: 'CrossKids',
    subtitle: 'Desarrollo psicomotriz y hábitos saludables para los más jóvenes',
    category: 'Infantil',
    description:
      'Programa diseñado para niños y adolescentes con un enfoque pedagógico, lúdico y formativo. Fomenta la coordinación, la agilidad, el compañerismo y el amor por la actividad física en un entorno seguro.',
    benefits: ['Coordinación motora y agilidad', 'Prevención del sedentarismo', 'Valores de disciplina y respeto mutuo'],
    equipment: ['Material adaptado y ligero', 'Cajones blandos de espuma', 'Juegos dinámicos'],
    levelReq: 'Infantil y Juvenil (grupos por edades)',
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
  },
];

export const EL_PINO_COACHES: ElPinoCoach[] = [
  {
    id: 'sara',
    name: 'Sara',
    role: 'Head Coach & Especialista CrossTraining',
    specialty: 'Biomecánica, Corrección Postural y Programación',
    bio: 'Referente técnico en Urban Hero El Pino. Sara destaca por su exhaustivo ojo clínico en la ejecución de los movimientos y su capacidad para adaptar cada ejercicio según las características anatómicas de cada atleta.',
    experience: 'Más de 7 años entrenando atletas en Sevilla',
    quote: 'La técnica no es negociable; la velocidad y el peso llegan de forma natural cuando el cuerpo se mueve correctamente.',
    imageUrl: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'angel',
    name: 'Ángel',
    role: 'Coach de Halterofilia & Fuerza',
    specialty: 'Levantamientos Olímpicos y Fuerza Explosiva',
    bio: 'Apasionado de la barra olímpica y el detalle milimétrico. Ángel guía las sesiones de arrancada y cargada con paciencia pedagógica, transmitiendo la confianza que se necesita para levantar seguro y con fluidez.',
    experience: 'Especialista titulado en fuerza y levantamientos olímpicos',
    quote: 'El respeto a la barra se demuestra en la paciencia que pones en cada calentamiento.',
    imageUrl: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'jony',
    name: 'Jony',
    role: 'Coach CrossTraining & Hybrid',
    specialty: 'Acondicionamiento Metabólico y Team WODs',
    bio: 'Energía pura en cada clase. Jony sabe cómo sacar la mejor versión de cada miembro del box, manteniendo siempre un ambiente motivador donde ningún atleta se siente rezagado.',
    experience: 'Entrenador certificado en deportes de alta intensidad',
    quote: 'Cuando sientas que no puedes más, mira a tu compañero: entrenamos juntos y cruzamos la meta juntos.',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'lucia',
    name: 'Lucía',
    role: 'Coach Gymnastics & Movilidad',
    specialty: 'Gimnásticos, Anillas y Readaptación Funcional',
    bio: 'Especialista en control del propio peso corporal y movilidad articular. Lucía desmitifica movimientos avanzados como el muscle-up o el handstand walk, construyendo progresiones sólidas desde la base.',
    experience: 'Graduada en Ciencias de la Actividad Física y del Deporte',
    quote: 'Dominar tu propio cuerpo en el espacio es la habilidad física más gratificante que existe.',
    imageUrl: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=600&q=80',
  },
];

export const EL_PINO_PRICING: PricingPlan[] = [
  {
    id: 'ilimitada-mes',
    name: 'Tarifa Ilimitada Mensual',
    price: '70,00 €',
    period: 'por mes',
    highlighted: true,
    badge: 'La más elegida',
    description: 'Acceso total a todas las clases dirigidas y zona Open Box climatizada sin límites semanales.',
    features: [
      'Clases ilimitadas de CrossTraining',
      'Acceso a sesiones de Halterofilia y Gymnastics',
      'Team WOD de los sábados incluido',
      'Open Box climatizado en horario libre',
      'Reserva mediante la app oficial WodBuster',
      'Sin cuota de matrícula oculta',
    ],
    wodbusterUrl: 'https://urbanhero.wodbuster.com',
  },
  {
    id: 'trimestral',
    name: 'Ilimitada Trimestral',
    price: '201,60 €',
    period: 'cada 3 meses (ahorro del 4%)',
    description: 'Compromiso a medio plazo con descuento directo para atletas que buscan constancia asegurada.',
    features: [
      'Equivalente a 67,20 €/mes',
      'Todos los beneficios de la Tarifa Ilimitada',
      'CrossTraining, Halterofilia, Gymnastics y Open Box',
      'Reserva prioritaria en WodBuster',
      'Seguimiento mensual con coaches',
    ],
    wodbusterUrl: 'https://urbanhero.wodbuster.com',
  },
  {
    id: 'semestral',
    name: 'Ilimitada Semestral',
    price: '386,40 €',
    period: 'cada 6 meses (ahorro del 8%)',
    description: 'La mejor relación calidad-precio para deportistas comprometidos con su transformación física.',
    features: [
      'Equivalente a 64,40 €/mes',
      'Acceso integral ininterrumpido 6 meses',
      'Todas las disciplinas y Open Box',
      'Descuentos en eventos y equipamiento oficial',
      'Evaluación técnica biomecánica periódica',
    ],
    wodbusterUrl: 'https://urbanhero.wodbuster.com',
  },
  {
    id: 'quincenal',
    name: 'Ilimitada Quincenal',
    price: '40,00 €',
    period: 'por 15 días',
    description: 'Máxima flexibilidad para estancias temporales, turnos de trabajo o periodos de prueba intensivos.',
    features: [
      '15 días naturales de acceso ilimitado',
      'Acceso a todas las clases dirigidas',
      'Open Box climatizado',
      'Ideal si viajas o tienes horarios variables',
    ],
    wodbusterUrl: 'https://urbanhero.wodbuster.com',
  },
  {
    id: 'crosskids',
    name: 'CrossKids Mensual',
    price: '35,00 €',
    period: 'por mes',
    badge: 'Infantil / Juvenil',
    description: 'Entrenamiento formativo y psicomotriz para niños y jóvenes con metodología supervisada.',
    features: [
      'Clases semanales adaptadas por edad',
      'Educadores deportivos titulados',
      'Foco en coordinación, fuerza lúdica y agilidad',
      'Drop-in suelto disponible por 6,00 €',
    ],
    wodbusterUrl: 'https://urbanhero.wodbuster.com',
  },
];

export const EL_PINO_BONOS = [
  { name: 'Drop In (Clase Suelta)', price: '10,00 €', validity: 'Día de uso', desc: 'Prueba una sesión única o entrena de paso por Sevilla' },
  { name: 'Bono 3 Clases', price: '25,00 €', validity: 'Caducidad 6 meses', desc: '8,33 € por clase para entrenamientos puntuales' },
  { name: 'Bono 5 Clases', price: '35,00 €', validity: 'Caducidad 6 meses', desc: '7,00 € por clase con total flexibilidad de calendario' },
  { name: 'Bono 10 Clases', price: '65,00 €', validity: 'Caducidad 6 meses', desc: '6,50 € por clase para complementar tu deporte habitual' },
];

export const EL_PINO_SCHEDULE: DaySchedule[] = [
  {
    dayName: 'Lunes',
    dayShort: 'LUN',
    sessions: [
      { time: '07:00 - 08:00', discipline: 'CrossTraining', coach: 'Sara', category: 'CrossTraining', badgeColor: 'bg-cyan-500/20 text-cyan-300' },
      { time: '08:00 - 09:00', discipline: 'Open Box Climatizado', coach: 'Libre', category: 'Open Box', badgeColor: 'bg-slate-700/50 text-slate-300' },
      { time: '09:30 - 10:30', discipline: 'CrossTraining', coach: 'Jony', category: 'CrossTraining', badgeColor: 'bg-cyan-500/20 text-cyan-300' },
      { time: '11:00 - 13:00', discipline: 'Open Box Climatizado', coach: 'Libre', category: 'Open Box', badgeColor: 'bg-slate-700/50 text-slate-300' },
      { time: '13:30 - 14:30', discipline: 'CrossTraining Midday', coach: 'Sara', category: 'CrossTraining', badgeColor: 'bg-cyan-500/20 text-cyan-300' },
      { time: '17:00 - 18:00', discipline: 'CrossKids', coach: 'Lucía', category: 'CrossKids', badgeColor: 'bg-amber-500/20 text-amber-300' },
      { time: '18:00 - 19:00', discipline: 'Halterofilia', coach: 'Ángel', category: 'Halterofilia', badgeColor: 'bg-indigo-500/20 text-indigo-300' },
      { time: '19:00 - 20:00', discipline: 'CrossTraining', coach: 'Jony', category: 'CrossTraining', badgeColor: 'bg-cyan-500/20 text-cyan-300' },
      { time: '20:00 - 21:00', discipline: 'CrossTraining', coach: 'Sara', category: 'CrossTraining', badgeColor: 'bg-cyan-500/20 text-cyan-300' },
      { time: '21:00 - 22:00', discipline: 'Hybrid / Open Box', coach: 'Jony', category: 'Hybrid', badgeColor: 'bg-emerald-500/20 text-emerald-300' },
    ],
  },
  {
    dayName: 'Martes',
    dayShort: 'MAR',
    sessions: [
      { time: '07:00 - 08:00', discipline: 'CrossTraining', coach: 'Jony', category: 'CrossTraining', badgeColor: 'bg-cyan-500/20 text-cyan-300' },
      { time: '09:30 - 10:30', discipline: 'Gymnastics Skill', coach: 'Lucía', category: 'Gymnastics', badgeColor: 'bg-purple-500/20 text-purple-300' },
      { time: '10:30 - 12:00', discipline: 'Open Box Climatizado', coach: 'Libre', category: 'Open Box', badgeColor: 'bg-slate-700/50 text-slate-300' },
      { time: '13:30 - 14:30', discipline: 'CrossTraining', coach: 'Sara', category: 'CrossTraining', badgeColor: 'bg-cyan-500/20 text-cyan-300' },
      { time: '17:00 - 18:00', discipline: 'CrossTraining', coach: 'Ángel', category: 'CrossTraining', badgeColor: 'bg-cyan-500/20 text-cyan-300' },
      { time: '18:00 - 19:00', discipline: 'Gymnastics & Anillas', coach: 'Lucía', category: 'Gymnastics', badgeColor: 'bg-purple-500/20 text-purple-300' },
      { time: '19:00 - 20:00', discipline: 'CrossTraining', coach: 'Sara', category: 'CrossTraining', badgeColor: 'bg-cyan-500/20 text-cyan-300' },
      { time: '20:00 - 21:00', discipline: 'Halterofilia Técnica', coach: 'Ángel', category: 'Halterofilia', badgeColor: 'bg-indigo-500/20 text-indigo-300' },
      { time: '21:00 - 22:00', discipline: 'Open Box Climatizado', coach: 'Libre', category: 'Open Box', badgeColor: 'bg-slate-700/50 text-slate-300' },
    ],
  },
  {
    dayName: 'Miércoles',
    dayShort: 'MIÉ',
    sessions: [
      { time: '07:00 - 08:00', discipline: 'CrossTraining', coach: 'Sara', category: 'CrossTraining', badgeColor: 'bg-cyan-500/20 text-cyan-300' },
      { time: '09:30 - 10:30', discipline: 'CrossTraining', coach: 'Jony', category: 'CrossTraining', badgeColor: 'bg-cyan-500/20 text-cyan-300' },
      { time: '11:00 - 13:00', discipline: 'Open Box Climatizado', coach: 'Libre', category: 'Open Box', badgeColor: 'bg-slate-700/50 text-slate-300' },
      { time: '13:30 - 14:30', discipline: 'CrossTraining Midday', coach: 'Sara', category: 'CrossTraining', badgeColor: 'bg-cyan-500/20 text-cyan-300' },
      { time: '17:00 - 18:00', discipline: 'CrossKids', coach: 'Lucía', category: 'CrossKids', badgeColor: 'bg-amber-500/20 text-amber-300' },
      { time: '18:00 - 19:00', discipline: 'Halterofilia Snatch', coach: 'Ángel', category: 'Halterofilia', badgeColor: 'bg-indigo-500/20 text-indigo-300' },
      { time: '19:00 - 20:00', discipline: 'CrossTraining', coach: 'Jony', category: 'CrossTraining', badgeColor: 'bg-cyan-500/20 text-cyan-300' },
      { time: '20:00 - 21:00', discipline: 'CrossTraining', coach: 'Sara', category: 'CrossTraining', badgeColor: 'bg-cyan-500/20 text-cyan-300' },
      { time: '21:00 - 22:00', discipline: 'Hybrid Endurance', coach: 'Jony', category: 'Hybrid', badgeColor: 'bg-emerald-500/20 text-emerald-300' },
    ],
  },
  {
    dayName: 'Jueves',
    dayShort: 'JUE',
    sessions: [
      { time: '07:00 - 08:00', discipline: 'CrossTraining', coach: 'Jony', category: 'CrossTraining', badgeColor: 'bg-cyan-500/20 text-cyan-300' },
      { time: '09:30 - 10:30', discipline: 'Gymnastics & Core', coach: 'Lucía', category: 'Gymnastics', badgeColor: 'bg-purple-500/20 text-purple-300' },
      { time: '11:00 - 13:00', discipline: 'Open Box Climatizado', coach: 'Libre', category: 'Open Box', badgeColor: 'bg-slate-700/50 text-slate-300' },
      { time: '13:30 - 14:30', discipline: 'CrossTraining', coach: 'Sara', category: 'CrossTraining', badgeColor: 'bg-cyan-500/20 text-cyan-300' },
      { time: '17:00 - 18:00', discipline: 'CrossTraining', coach: 'Ángel', category: 'CrossTraining', badgeColor: 'bg-cyan-500/20 text-cyan-300' },
      { time: '18:00 - 19:00', discipline: 'Gymnastics Avanzado', coach: 'Lucía', category: 'Gymnastics', badgeColor: 'bg-purple-500/20 text-purple-300' },
      { time: '19:00 - 20:00', discipline: 'CrossTraining', coach: 'Sara', category: 'CrossTraining', badgeColor: 'bg-cyan-500/20 text-cyan-300' },
      { time: '20:00 - 21:00', discipline: 'Halterofilia Clean & Jerk', coach: 'Ángel', category: 'Halterofilia', badgeColor: 'bg-indigo-500/20 text-indigo-300' },
      { time: '21:00 - 22:00', discipline: 'Open Box Climatizado', coach: 'Libre', category: 'Open Box', badgeColor: 'bg-slate-700/50 text-slate-300' },
    ],
  },
  {
    dayName: 'Viernes',
    dayShort: 'VIE',
    sessions: [
      { time: '07:00 - 08:00', discipline: 'CrossTraining', coach: 'Sara', category: 'CrossTraining', badgeColor: 'bg-cyan-500/20 text-cyan-300' },
      { time: '09:30 - 10:30', discipline: 'CrossTraining', coach: 'Jony', category: 'CrossTraining', badgeColor: 'bg-cyan-500/20 text-cyan-300' },
      { time: '11:00 - 13:00', discipline: 'Open Box Climatizado', coach: 'Libre', category: 'Open Box', badgeColor: 'bg-slate-700/50 text-slate-300' },
      { time: '13:30 - 14:30', discipline: 'Friday Benchmark WOD', coach: 'Sara', category: 'CrossTraining', badgeColor: 'bg-cyan-500/20 text-cyan-300' },
      { time: '17:00 - 18:00', discipline: 'Halterofilia Libre Asistida', coach: 'Ángel', category: 'Halterofilia', badgeColor: 'bg-indigo-500/20 text-indigo-300' },
      { time: '18:00 - 19:00', discipline: 'CrossTraining', coach: 'Jony', category: 'CrossTraining', badgeColor: 'bg-cyan-500/20 text-cyan-300' },
      { time: '19:00 - 20:00', discipline: 'CrossTraining', coach: 'Sara', category: 'CrossTraining', badgeColor: 'bg-cyan-500/20 text-cyan-300' },
      { time: '20:00 - 21:00', discipline: 'Open Box & Estiramientos', coach: 'Libre', category: 'Open Box', badgeColor: 'bg-slate-700/50 text-slate-300' },
    ],
  },
  {
    dayName: 'Sábado',
    dayShort: 'SÁB',
    sessions: [
      { time: '10:00 - 11:30', discipline: 'Team WOD de Sábado', coach: 'Todos los Coaches', category: 'Team WOD', badgeColor: 'bg-amber-400 text-black font-bold' },
      { time: '11:30 - 12:30', discipline: 'Open Box Fin de Semana', coach: 'Libre', category: 'Open Box', badgeColor: 'bg-slate-700/50 text-slate-300' },
    ],
  },
];

export const EL_PINO_GALLERY = [
  {
    id: 'gal-1',
    title: 'Zona de Levantamientos y Barras Olímpicas',
    category: 'Material',
    url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80',
    caption: 'Barras y bumpers homologados para CrossTraining y Halterofilia en nave amplia.',
  },
  {
    id: 'gal-2',
    title: 'Estructura Central de Gimnásticos y Dominadas',
    category: 'Instalaciones',
    url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80',
    caption: 'Jaula de competición con espacio para anillas, pull-ups y muscle-ups.',
  },
  {
    id: 'gal-3',
    title: 'Comunidad en Plena Acción en Team WOD',
    category: 'Comunidad',
    url: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1000&q=80',
    caption: 'El compañerismo y la motivación de los sábados en Urban Hero El Pino.',
  },
  {
    id: 'gal-4',
    title: 'Zona Open Box Climatizada',
    category: 'Instalaciones',
    url: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80',
    caption: 'Espacio con aire acondicionado para entrenar a tu propio ritmo.',
  },
  {
    id: 'gal-5',
    title: 'Técnica de Arrancada y Movilidad',
    category: 'Entrenamiento',
    url: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=80',
    caption: 'Supervisión individualizada por coaches titulados.',
  },
  {
    id: 'gal-6',
    title: 'Fuerza Funcional y Resistencia Hybrid',
    category: 'Entrenamiento',
    url: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=1000&q=80',
    caption: 'Ergómetros Concept2 y material específico para Hybrid Training.',
  },
];

export const EL_PINO_FAQS = [
  {
    question: '¿Dónde está exactamente situado Urban Hero El Pino?',
    answer:
      'Nos encontramos en la C/ Pino Doncel, 10, en el Polígono Industrial El Pino (41016 Sevilla). Disponemos de acceso rápido desde la SE-30 / A-92 y amplio aparcamiento cómodo justo frente a las instalaciones.',
  },
  {
    question: '¿Cómo funciona la promoción de 2 clases de prueba gratuitas en El Pino?',
    answer:
      'Puedes solicitar tu pase de 2 clases gratis directamente mediante nuestro WhatsApp oficial (+34 623 06 99 66) o a través de la plataforma oficial WodBuster. Uno de nuestros entrenadores te asignará horario y te guiará personalmente.',
  },
  {
    question: 'No tengo experiencia previa en CrossFit o levantamientos con barra, ¿puedo empezar?',
    answer:
      'Totalmente. El 70% de nuestros atletas actuales comenzaron sin haber tocado una barra olímpica antes. En cada clase, el coach adapta las cargas, enseña las posiciones desde barra vacía o pica de PVC y prioriza tu seguridad biomecánica.',
  },
  {
    question: '¿Qué incluye la tarifa ilimitada de 70 € / mes?',
    answer:
      'Incluye acceso ilimitado a todas las clases del box: CrossTraining, Halterofilia, Gymnastics, Team WOD de los sábados, Hybrid y la zona Open Box Climatizada en los horarios de apertura, gestionando tus reservas desde la app WodBuster.',
  },
  {
    question: '¿Qué es el Open Box Climatizado y cómo se utiliza?',
    answer:
      'Es un área reservada dentro del box con aire acondicionado que te permite entrenar tu programación personalizada, calentar o estirar sin interferir con las clases dirigidas. Solo necesitas reservar tu plaza en WodBuster para controlar el aforo.',
  },
  {
    question: '¿Cómo funciona el programa CrossKids?',
    answer:
      'Es nuestro programa adaptado para niños y jóvenes, centrado en coordinación, velocidad, juegos en equipo y patrones básicos de movimiento. Se imparte los lunes y miércoles por la tarde.',
  },
];
