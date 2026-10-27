import { GymInfo, NewsItem, InstagramPost, FAQItem } from '../types';

export const GYMS: GymInfo[] = [
  {
    id: 'el-pino',
    name: 'Urban Hero El Pino',
    shortName: 'El Pino',
    badge: 'CrossTraining & Halterofilia',
    tagline: 'Centro de CrossTraining y entrenamiento funcional de alto rendimiento',
    description:
      'Centro de CrossTraining y fitness funcional de alto rendimiento en Sevilla. Box homologado con estructura de competición, barras olímpicas, zona Open Box climatizada y programación técnica adaptada por niveles.',
    address: 'C. Pino Doncel, 10, Polígono Industrial El Pino, 41016 Sevilla',
    city: 'Sevilla',
    postalCode: '41016',
    externalUrl: 'https://urbanherotrainingcenter.com/urban-hero-el-pino/',
    mapUrl: 'https://maps.google.com/?q=Calle+Pino+Doncel+10+41016+Sevilla',
    coachingTeam: ['Sara', 'Ángel', 'Jony', 'Lucía'],
    coachingSummary: 'Equipo técnico oficial: Sara, Ángel, Jony y Lucía',
    priceSummary: 'Cuotas desde 50 €/mes (2 días/sem), 55 € (3 días), 60 € (4 días), 70 € (ilimitada). CrossKids 35 €/mes. Packs desde 10 €.',
    instagramUrl: 'https://www.instagram.com/urbanheroelpino/',
    instagramHandle: '@urbanheroelpino',
    phone: '+34623069966',
    phoneFormatted: '+34 623 06 99 66',
    disciplines: [
      'CrossTraining',
      'Hybrid',
      'Gymnastics',
      'Weightlifting',
      'Open Box',
      'Team WOD',
      'CrossKids (6–11 años)',
    ],
    keyFeatures: [
      'Nave amplia con estructura de competición y barras olímpicas homologadas',
      'Zona Open Box con aire acondicionado para entrenar a tu propio ritmo',
      'Programación técnica escalable desde nivel iniciación hasta avanzado',
      'Clases específicas de CrossKids para niños de 6 a 11 años',
      'Fácil aparcamiento en el Polígono Industrial El Pino',
    ],
    targetAudience:
      'Ideal si buscas dominar la técnica de halterofilia, movimientos gimnásticos, Hybrid y la intensidad del CrossTraining en equipo.',
    heroImage:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    colorAccent: '#00d2ff',
  },
  {
    id: 'sevilla-este',
    name: 'Urban Hero Sevilla Este',
    shortName: 'Sevilla Este',
    badge: 'Entrenamiento Funcional Adaptado',
    tagline: 'Entrenamiento funcional adaptado a tu condición física, salud y objetivos',
    description:
      'Ubicado en el Hotel Vértice, este centro se especializa en entrenamiento funcional adaptado a diferentes niveles, metas y movilidad. Sesiones en grupos reducidos para ganar fuerza, agilidad y vitalidad de forma segura.',
    address: 'Hotel Vértice, Avenida de la Aeronáutica, 5, 1.º 6, 41020 Sevilla',
    city: 'Sevilla',
    postalCode: '41020',
    externalUrl: 'https://urbanherotrainingcenter.com/urban-hero-sevilla-este/',
    mapUrl: 'https://maps.google.com/?q=Hotel+Vertice+Sevilla+Avenida+de+la+Aeronautica+41020+Sevilla',
    coachingTeam: ['Aurelio'],
    coachingSummary: 'Coach oficial: Aurelio',
    priceSummary: 'Cuotas desde 50 €/mes (2 días/sem), 55 € (3 días), 60 € (4 días), 65 € (5 días/sem). Packs desde 10 €.',
    instagramUrl: 'https://www.instagram.com/urbanherosevillaeste/',
    instagramHandle: '@urbanherosevillaeste',
    phone: '+34623069966',
    phoneFormatted: '+34 623 06 99 66',
    disciplines: [
      'Entrenamiento Funcional Adaptado',
      'HIIT & Movilidad Articular',
      'Fuerza y Tonificación',
      'Acondicionamiento Metabólico',
      'Prevención de Lesiones',
      'Grupos Reducidos',
    ],
    keyFeatures: [
      'Ubicación privilegiada en Hotel Vértice con vestuarios de primer nivel',
      'Ejercicios adaptados al 100% a tu condición física, rango articular y metas',
      'Supervisión personalizada continua por el coach Aurelio',
      'Ambiente motivador sin la presión de levantamientos pesados con barra',
    ],
    targetAudience:
      'Perfecto si quieres entrenar de forma eficiente, ganar fuerza y tonificación, mejorar tu movilidad diaria y sentirte acompañado con técnica segura.',
    heroImage:
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    colorAccent: '#22b3db',
  },
];

export const METHODOLOGY_PILLARS = [
  {
    title: 'Evaluación y Adaptación Individual',
    subtitle: 'Nadie se queda atrás ni entrena a ciegas',
    description:
      'Cada cuerpo es único. Nuestros entrenadores analizan tu rango de movilidad, historial lesional y nivel previo para modular la carga y la complejidad técnica en cada sesión.',
    iconName: 'Activity',
  },
  {
    title: 'Técnica Antes Que Carga',
    subtitle: 'Mecánica limpia, seguridad total',
    description:
      'Priorizamos la calidad del movimiento sobre los kilos levantados. La progresión segura garantiza resultados duraderos y previene molestias articulares o sobrecargas.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Plazas Limitadas por Clase',
    subtitle: 'Atención cercana en cada repetición',
    description:
      'Nuestras sesiones tienen un número cerrado de plazas para que los coaches puedan corregir tu postura, animarte y acompañarte de principio a fin.',
    iconName: 'Users',
  },
  {
    title: 'Entrenadores Titulados',
    subtitle: 'Profesionales del deporte con vocación real',
    description:
      'Todo nuestro equipo cuenta con certificaciones reconocidas y formación continua en biomecánica, entrenamiento de fuerza y metodología funcional.',
    iconName: 'Award',
  },
];

export const BRAND_VALUES = [
  {
    title: 'Comunidad Real',
    description:
      'En Urban Hero nadie entrena en solitario. Compartimos el sudor, celebramos los logros del compañero y construimos un ambiente donde el respeto y la camaradería marcan cada día.',
    highlight: 'El apoyo de tu box',
  },
  {
    title: 'Compromiso y Disciplina',
    description:
      'Nos comprometemos con tus metas tanto como tú. Te ayudamos a sostener el hábito semana a semana con una programación estructurada y metas alcanzables.',
    highlight: 'Constancia visible',
  },
  {
    title: 'Profesionalidad y Rigor',
    description:
      'No dejamos nada al azar. Cada sesión tiene un calentamiento específico, bloque de fuerza o destreza técnica, metcon principal y vuelta a la calma guiada.',
    highlight: 'Ciencia del entrenamiento',
  },
  {
    title: 'Mejora Continua',
    description:
      'Actualizamos nuestras instalaciones, material y metodologías constantemente para ofrecer la mejor experiencia deportiva de Sevilla.',
    highlight: 'Evolución constante',
  },
  {
    title: 'Entrenamiento Responsable',
    description:
      'Fomentamos la salud a largo plazo. Enseñar a descansar, escuchar las señales de tu cuerpo y disfrutar del proceso es tan vital como entrenar duro.',
    highlight: 'Longevidad deportiva',
  },
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'news-open-box-pino',
    title: 'Zona Open Box Climatizada en Urban Hero El Pino',
    date: '14 Octubre 2026',
    category: 'Instalaciones',
    summary:
      'El box de El Pino optimiza su zona de entrenamiento libre con climatización integral para mantener el máximo rendimiento físico durante todas las estaciones del año.',
    locationTag: 'El Pino',
    readTime: '2 min',
    imageUrl:
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'news-iniciacion-este',
    title: 'Nuevos grupos de acondicionamiento funcional en Sevilla Este',
    date: '28 Septiembre 2026',
    category: 'Entrenamiento',
    summary:
      'Ampliamos los horarios guiados de tarde en el Hotel Vértice para aquellos que inician su actividad deportiva tras el parón veraniego con atención 1 a 1 en técnica.',
    locationTag: 'Sevilla Este',
    readTime: '3 min',
    imageUrl:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'news-prueba-gratuita',
    title: 'Campaña "2 Clases de Prueba Gratis": descubre tu centro en Sevilla',
    date: '05 Septiembre 2026',
    category: 'Comunidad',
    summary:
      'Para facilitar la elección entre CrossTraining y Entrenamiento Funcional, todos los nuevos miembros pueden probar ambos enfoques sin ningún compromiso.',
    locationTag: 'Ambos Centros',
    readTime: '2 min',
    imageUrl:
      'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80',
  },
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-1',
    account: 'El Pino',
    handle: '@urbanheroelpino',
    imageUrl:
      'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=600&q=80',
    caption:
      'Barbell cycling en el Team WOD de los sábados. La energía de la comunidad no se negocia. 💪⚡️ #UrbanHero #CrossTraining #Sevilla #ElPino',
    postUrl: 'https://www.instagram.com/urbanheroelpino/',
    likes: 248,
    comments: 32,
    date: 'Hace 2 días',
    tag: 'CrossTraining & Halterofilia',
    isPlaceholder: true,
  },
  {
    id: 'ig-2',
    account: 'Sevilla Este',
    handle: '@urbanherosevillaeste',
    imageUrl:
      'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=600&q=80',
    caption:
      'Trabajo de core y kettlebells en Sevilla Este. Progresión milimétrica, salud y fuerza funcional para tu día a día. 🌿🎯 #SevillaEste #EntrenamientoFuncional',
    postUrl: 'https://www.instagram.com/urbanherosevillaeste/',
    likes: 194,
    comments: 21,
    date: 'Hace 3 días',
    tag: 'Entrenamiento Funcional Adaptado',
    isPlaceholder: true,
  },
  {
    id: 'ig-3',
    account: 'El Pino',
    handle: '@urbanheroelpino',
    imageUrl:
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=80',
    caption:
      'Técnica de snatch y movilidad de hombro. La base sólida antes de subir kilos. 🏋️‍♂️ ¿Te vienes a probar? Enlace en bio para tus 2 clases gratis.',
    postUrl: 'https://www.instagram.com/urbanheroelpino/',
    likes: 312,
    comments: 45,
    date: 'Hace 5 días',
    tag: 'Halterofilia & Técnica',
    isPlaceholder: true,
  },
  {
    id: 'ig-4',
    account: 'Sevilla Este',
    handle: '@urbanherosevillaeste',
    imageUrl:
      'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?auto=format&fit=crop&w=600&q=80',
    caption:
      'Risas, esfuerzo y superación en el grupo de las 19:30h en Hotel Vértice. ¡Orgullo de equipo! 🧡🔥 #UrbanHeroCommunity #FitnessSevilla',
    postUrl: 'https://www.instagram.com/urbanherosevillaeste/',
    likes: 215,
    comments: 29,
    date: 'Hace 1 semana',
    tag: 'Grupos Reducidos',
    isPlaceholder: true,
  },
  {
    id: 'ig-5',
    account: 'El Pino',
    handle: '@urbanheroelpino',
    imageUrl:
      'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80',
    caption:
      'Gimnásticos de alto nivel en la estructura principal. Dominando el balanceo y control corporal estricto. 🤸‍♂️⚡️ #Gymnastics #UrbanHeroElPino',
    postUrl: 'https://www.instagram.com/urbanheroelpino/',
    likes: 289,
    comments: 38,
    date: 'Hace 1 semana',
    tag: 'Gymnastics & Open Box',
    isPlaceholder: true,
  },
  {
    id: 'ig-6',
    account: 'Sevilla Este',
    handle: '@urbanherosevillaeste',
    imageUrl:
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80',
    caption:
      'Circuitos de resistencia muscular y reeducación postural. Entrenar sin dolor es posible con la guía adecuada en Hotel Vértice. 🛡️✨ #SaludSevilla',
    postUrl: 'https://www.instagram.com/urbanherosevillaeste/',
    likes: 182,
    comments: 24,
    date: 'Hace 2 semanas',
    tag: 'Movilidad & Salud Postural',
    isPlaceholder: true,
  },
];

export const FAQ_LIST: FAQItem[] = [
  {
    question: '¿En qué se diferencian Urban Hero El Pino y Urban Hero Sevilla Este?',
    answer:
      'Urban Hero El Pino está enfocado a CrossTraining, Halterofilia, gimnásticos de competición y Open Box con barras olímpicas y rack. Urban Hero Sevilla Este (en Hotel Vértice) está centrado en entrenamiento funcional, salud postural, acondicionamiento físico metabólico y grupos reducidos para todos los niveles sin necesidad de experiencia técnica previa.',
    category: 'ubicacion',
  },
  {
    question: '¿Cómo funciona la promoción de 2 clases de prueba gratuitas?',
    answer:
      'La promoción es 100% gratuita y sin compromiso. Puedes solicitar tu pase a través de WhatsApp o del formulario web seleccionando el centro que mejor te convenga. Un entrenador coordinará contigo el día y hora para explicarte la metodología antes de la sesión.',
    category: 'clases',
  },
  {
    question: '¿Necesito estar en buena forma o tener experiencia para empezar?',
    answer:
      'Rotundamente no. En ambos centros adaptamos todas las cargas y movimientos. En Sevilla Este la curva de entrada es sumamente suave y guiada, mientras que en El Pino disponemos de sesiones escaladas para principiantes donde se aprende la técnica desde cero.',
    category: 'general',
  },
  {
    question: '¿Cómo reservo las clases una vez inscrito?',
    answer:
      'Los atletas registrados gestionan sus reservas de plazas y consultan el WOD o sesión diaria a través de la aplicación oficial (WodBuster), garantizando siempre un aforo controlado y sin aglomeraciones.',
    category: 'general',
  },
  {
    question: '¿Dónde están ubicados exactamente los dos centros?',
    answer:
      'Urban Hero El Pino se encuentra en C. Pino Doncel, 10 (Polígono Industrial El Pino, 41016 Sevilla). Urban Hero Sevilla Este se ubica en Hotel Vértice (Avenida de la Aeronáutica, 5, 1.º 6, 41020 Sevilla). Ambos disponen de fácil acceso y transporte.',
    category: 'ubicacion',
  },
  {
    question: '¿Cuál es el canal oficial de contacto directo?',
    answer:
      'Puedes contactar con el equipo central de Urban Hero a través del teléfono y WhatsApp oficial (+34 623 06 99 66) o por mensaje directo en sus perfiles de Instagram @urbanheroelpino y @urbanherosevillaeste.',
    category: 'general',
  },
];
