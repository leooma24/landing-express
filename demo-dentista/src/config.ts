/**
 * CONFIG.TS - Demo: Clínica Dental Sonríe Más (Los Mochis, Sinaloa)
 * Dirección: DM Serif Display + sky blue + bordes suaves + servicios en CARDS + sección TRATAMIENTOS + TESTIMONIOS
 */

export interface Servicio {
  titulo: string;
  descripcion: string;
  precio?: string;
}

export interface Horario {
  dia: string;
  apertura: string;
  cierre: string;
  cerrado?: boolean;
}

export interface Fuente {
  nombre: string;
  query: string;
  familia: string;
}

export interface ItemMenu {
  nombre: string;
  descripcion?: string;
  precio: string;
  destacado?: boolean;
}

export interface CategoriaMenu {
  nombre: string;
  items: ItemMenu[];
}

export interface Tratamiento {
  nombre: string;
  descripcion: string;
  desde: string;
  duracion?: string;
  incluye?: string[];
}

export interface Testimonio {
  nombre: string;
  texto: string;
  tratamiento?: string;
  foto?: string;
  estrellas?: number;
}

export type SeccionId =
  | 'hero'
  | 'servicios'
  | 'nosotros'
  | 'galeria'
  | 'ubicacion'
  | 'contacto'
  | 'menu'
  | 'tratamientos'
  | 'testimonios';

export type VariantePorSeccion = {
  hero?: 'editorial' | 'split';
  servicios?: 'lista' | 'cards' | 'dos-columnas';
  nosotros?: 'editorial';
  galeria?: 'masonry';
  ubicacion?: 'editorial';
  contacto?: 'editorial';
  menu?: 'carta';
  tratamientos?: 'lista';
  testimonios?: 'grid';
};

export interface Estructura {
  orden: SeccionId[];
  variantes: VariantePorSeccion;
}

export interface BusinessConfig {
  nombre: string;
  tagline: string;
  descripcionCorta: string;
  whatsapp: string;
  whatsappMensaje: string;
  telefono: string;
  email: string;
  direccion: {
    calle: string;
    ciudad: string;
    estado: string;
    codigoPostal: string;
    mapaEmbed: string;
  };
  horarios: Horario[];
  colores: {
    primario: string;
    secundario: string;
    acento: string;
    texto: string;
    fondo: string;
    superficie: string;
    tenue: string;
    linea: string;
  };
  fuentes: { display: Fuente; body: Fuente };
  densidad: 'compacto' | 'normal' | 'amplio';
  bordes: 'rectos' | 'suaves' | 'redondeados';
  tratoImagen: 'ninguno' | 'grayscale' | 'contraste' | 'calido';
  mostrarNumeros: boolean;
  animaciones?: {
    entrada: boolean;
  };
  estructura: Estructura;
  logo: string;
  heroImagen: string;
  heroCtaTexto: string;
  servicios: Servicio[];
  sobreNosotros: {
    titulo: string;
    texto: string;
    imagen: string;
    estadisticas?: { etiqueta: string; valor: string }[];
  };
  galeria: { src: string; alt: string }[];
  menu?: {
    titulo: string;
    descripcion?: string;
    categorias: CategoriaMenu[];
  };
  tratamientos?: {
    titulo: string;
    descripcion?: string;
    lista: Tratamiento[];
  };
  testimonios?: {
    titulo: string;
    descripcion?: string;
    lista: Testimonio[];
  };
  redes: {
    facebook?: string;
    instagram?: string;
    tiktok?: string;
    youtube?: string;
  };
  formspreeId: string;
  analyticsId?: string;
  seo: {
    titulo: string;
    descripcion: string;
    ogImagen: string;
  };
}

export const business: BusinessConfig = {
  nombre: 'Clínica Dental Sonríe Más',
  tagline: 'Odontología de confianza · Los Mochis',
  descripcionCorta:
    'Más de 12 años cuidando la sonrisa de familias del norte de Sinaloa. Tecnología moderna, trato cálido, planes de pago accesibles.',
  whatsapp: '526681112233',
  whatsappMensaje: 'Hola, quiero agendar una consulta en Sonríe Más.',
  telefono: '+52 668 111 2233',
  email: 'citas@sonriemas.mx',
  direccion: {
    calle: 'Blvd. Antonio Rosales #450, Plaza Centro',
    ciudad: 'Los Mochis',
    estado: 'Sinaloa',
    codigoPostal: '81200',
    mapaEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.5!2d-108.994!3d25.7923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQ3JzMyLjMiTiAxMDjCsDU5JzM4LjQiVw!5e0!3m2!1ses!2smx!4v1700000000000',
  },
  horarios: [
    { dia: 'Lunes', apertura: '09:00', cierre: '19:00' },
    { dia: 'Martes', apertura: '09:00', cierre: '19:00' },
    { dia: 'Miércoles', apertura: '09:00', cierre: '19:00' },
    { dia: 'Jueves', apertura: '09:00', cierre: '19:00' },
    { dia: 'Viernes', apertura: '09:00', cierre: '19:00' },
    { dia: 'Sábado', apertura: '09:00', cierre: '14:00' },
    { dia: 'Domingo', apertura: '', cierre: '', cerrado: true },
  ],
  colores: {
    primario: '14 165 233',
    secundario: '3 105 161',
    acento: '250 204 21',
    texto: '15 23 42',
    fondo: '248 250 252',
    superficie: '241 245 249',
    tenue: '100 116 139',
    linea: '226 232 240',
  },
  fuentes: {
    display: {
      nombre: 'DM Serif Display',
      query: 'DM+Serif+Display:ital@0;1',
      familia: '"DM Serif Display", Georgia, serif',
    },
    body: {
      nombre: 'Inter',
      query: 'Inter:wght@400;500;600;700',
      familia: '"Inter", system-ui, sans-serif',
    },
  },
  densidad: 'normal',
  bordes: 'suaves',
  tratoImagen: 'ninguno',
  mostrarNumeros: true,
  animaciones: {
    entrada: true,
  },
  estructura: {
    orden: ['hero', 'servicios', 'tratamientos', 'nosotros', 'testimonios', 'ubicacion', 'contacto'],
    variantes: {
      hero: 'editorial',
      servicios: 'cards',
      nosotros: 'editorial',
      ubicacion: 'editorial',
      contacto: 'editorial',
      tratamientos: 'lista',
      testimonios: 'grid',
    },
  },
  logo: '/logo.svg',
  heroImagen: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=80',
  heroCtaTexto: 'Agendar cita por WhatsApp',
  servicios: [
    { titulo: 'Odontología General', descripcion: 'Limpieza, revisión y diagnóstico completo. El paso cero para mantener tu sonrisa saludable.' },
    { titulo: 'Ortodoncia', descripcion: 'Brackets metálicos, estéticos o alineadores invisibles. Planes de pago hasta 24 meses sin intereses.' },
    { titulo: 'Estética Dental', descripcion: 'Blanqueamiento, carillas de porcelana, diseño de sonrisa. Resultados naturales y duraderos.' },
    { titulo: 'Endodoncia', descripcion: 'Tratamiento de conductos con microscopio. Conserva tu diente natural, sin dolor.' },
    { titulo: 'Implantología', descripcion: 'Implantes de titanio con coronas de porcelana. Recupera función y estética para toda la vida.' },
    { titulo: 'Odontopediatría', descripcion: 'Atención especializada para niños en un ambiente amigable para que no le teman al dentista.' },
  ],
  sobreNosotros: {
    titulo: 'Más de 12 años cuidando su sonrisa',
    texto:
      'La Dra. María Fernanda López fundó Sonríe Más en 2012 con una misión: que la odontología de calidad sea accesible para toda familia mochitense. Nuestro consultorio cuenta con equipo de última generación, protocolos estrictos de esterilización, y un equipo humano que trata a cada paciente como familia. Contamos con planes de pago sin intereses y aceptamos la mayoría de los seguros dentales.',
    imagen: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80',
    estadisticas: [
      { etiqueta: 'Años', valor: '12+' },
      { etiqueta: 'Pacientes', valor: '4,500+' },
      { etiqueta: 'Calificación', valor: '4.9★' },
    ],
  },
  galeria: [
    { src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80', alt: 'Consultorio dental moderno' },
    { src: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80', alt: 'Tecnología dental de punta' },
    { src: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80', alt: 'Atención especializada' },
    { src: 'https://images.unsplash.com/photo-1643297654416-05795d62e39c?w=800&q=80', alt: 'Instrumental esterilizado' },
    { src: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80', alt: 'Paciente satisfecha' },
    { src: 'https://images.unsplash.com/photo-1601049676869-702ea24cfd58?w=800&q=80', alt: 'Sala de espera cómoda' },
  ],
  tratamientos: {
    titulo: 'Tratamientos y precios',
    descripcion: 'Transparencia desde el primer momento. Precios "desde" para que planees sin sorpresas.',
    lista: [
      {
        nombre: 'Limpieza Dental',
        descripcion: 'Profilaxis profesional con ultrasonido, pulido y aplicación de flúor.',
        desde: '$650',
        duracion: '45 min',
        incluye: ['Diagnóstico visual', 'Remoción de sarro', 'Pulido y flúor', 'Recomendaciones de higiene'],
      },
      {
        nombre: 'Blanqueamiento LED',
        descripcion: 'Blanqueamiento en consultorio con tecnología LED. Hasta 8 tonos más claro en una sesión.',
        desde: '$3,500',
        duracion: '60 min',
        incluye: ['Protector gingival', '2 sesiones LED', 'Kit de mantenimiento', 'Revisión a los 7 días'],
      },
      {
        nombre: 'Ortodoncia — Brackets metálicos',
        descripcion: 'Corrección completa de mordida y alineación dental con seguimiento mensual.',
        desde: '$14,900',
        duracion: '18-24 meses',
        incluye: ['Estudio radiográfico', 'Instalación', 'Ajustes mensuales', 'Retenedores finales'],
      },
      {
        nombre: 'Ortodoncia Invisible',
        descripcion: 'Alineadores transparentes removibles. Estética premium sin brackets visibles.',
        desde: '$28,500',
        duracion: '12-18 meses',
        incluye: ['Escaneo 3D intraoral', 'Set completo de alineadores', 'Revisiones mensuales', 'Retenedores'],
      },
      {
        nombre: 'Endodoncia (por conducto)',
        descripcion: 'Tratamiento de conductos con microscopio. Sin dolor, una a dos sesiones.',
        desde: '$1,800',
        duracion: '60-90 min',
        incluye: ['Diagnóstico', 'Anestesia', 'Obturación', 'Radiografía final'],
      },
      {
        nombre: 'Implante Dental',
        descripcion: 'Implante de titanio + corona de porcelana. Reemplaza piezas perdidas de forma permanente.',
        desde: '$22,000',
        duracion: '3-6 meses (2-3 citas)',
        incluye: ['Implante + pilar', 'Corona de porcelana', 'Cirugía', 'Revisiones postquirúrgicas'],
      },
    ],
  },
  testimonios: {
    titulo: 'Lo que dicen nuestros pacientes',
    descripcion: 'Más de 4,500 familias confían en nosotros. Esto es lo que nos cuentan.',
    lista: [
      {
        nombre: 'Ana Sofía Gastélum',
        tratamiento: 'Ortodoncia invisible',
        texto: 'Me trataron increíble desde el primer día. La Dra. explica todo con paciencia y el consultorio se siente como un spa, no un dentista. Mis alineadores llegaron en 2 semanas.',
        estrellas: 5,
      },
      {
        nombre: 'Luis Enrique Peraza',
        tratamiento: 'Implantes dentales',
        texto: 'Perdí un diente hace años y siempre me dio miedo el implante. Aquí me explicaron cada paso, sin presión. Hoy mastico como antes y nadie nota que es implante.',
        estrellas: 5,
      },
      {
        nombre: 'Marta Elena Salazar',
        tratamiento: 'Limpieza y blanqueamiento',
        texto: 'Llevo 3 años viniendo cada 6 meses. El equipo es puntual, amable, y los precios son justos. Mi familia entera es paciente aquí.',
        estrellas: 5,
      },
    ],
  },
  redes: {
    facebook: 'https://facebook.com/sonriemaslosmochis',
    instagram: 'https://instagram.com/sonriemas.mx',
  },
  formspreeId: 'demo-dentista',
  seo: {
    titulo: 'Clínica Dental Sonríe Más | Dentista en Los Mochis, Sinaloa',
    descripcion:
      'Odontología integral en Los Mochis: limpieza, ortodoncia, blanqueamiento, implantes. Agenda tu cita por WhatsApp. Planes de pago disponibles.',
    ogImagen: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=80',
  },
};

export const densidadTokens = {
  compacto: { sectionPadY: '4rem', sectionPadYMd: '5rem', gap: '2rem', leading: '1.5' },
  normal: { sectionPadY: '6rem', sectionPadYMd: '8rem', gap: '2.5rem', leading: '1.6' },
  amplio: { sectionPadY: '7rem', sectionPadYMd: '10rem', gap: '3.5rem', leading: '1.7' },
};

export const bordesTokens = {
  rectos: { sm: '0', md: '0', lg: '0', full: '9999px' },
  suaves: { sm: '4px', md: '8px', lg: '12px', full: '9999px' },
  redondeados: { sm: '8px', md: '16px', lg: '24px', full: '9999px' },
};

export const imagenFiltros = {
  ninguno: 'none',
  grayscale: 'grayscale(15%) contrast(1.02)',
  contraste: 'contrast(1.1) saturate(1.05)',
  calido: 'sepia(8%) saturate(1.1) brightness(1.02)',
};
