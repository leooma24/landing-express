/**
 * CONFIG.TS - Fuente única de verdad.
 * Un cliente = un config.ts único.
 *
 * Arquitectura Opción C:
 *   - estructura.orden: qué secciones aparecen y en qué orden
 *   - estructura.variantes: qué layout usa cada sección
 *   - secciones específicas por rubro (menu, tratamientos, testimonios, equipo…)
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
  nombre: 'Tu Negocio Local',
  tagline: 'La mejor opción en Los Mochis',
  descripcionCorta:
    'Más de 10 años brindando servicio de calidad a familias del norte de Sinaloa. Atención personal, precios justos.',
  whatsapp: '526681234567',
  whatsappMensaje: 'Hola, vi su página y me interesa más información.',
  telefono: '+52 668 123 4567',
  email: 'contacto@tunegocio.com',
  direccion: {
    calle: 'Av. Álvaro Obregón #123',
    ciudad: 'Los Mochis',
    estado: 'Sinaloa',
    codigoPostal: '81200',
    mapaEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.2!2d-108.9975!3d25.7933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQ3JzM2LjAiTiAxMDjCsDU5JzUxLjAiVw!5e0!3m2!1ses!2smx!4v1700000000000',
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
    primario: '37 99 235',
    secundario: '30 64 175',
    acento: '251 191 36',
    texto: '23 23 23',
    fondo: '250 250 249',
    superficie: '245 245 244',
    tenue: '120 113 108',
    linea: '231 229 228',
  },
  fuentes: {
    display: {
      nombre: 'Fraunces',
      query: 'Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700;9..144,800',
      familia: '"Fraunces", Georgia, serif',
    },
    body: {
      nombre: 'Inter',
      query: 'Inter:wght@400;500;600;700',
      familia: '"Inter", system-ui, sans-serif',
    },
  },
  densidad: 'normal',
  bordes: 'rectos',
  tratoImagen: 'ninguno',
  mostrarNumeros: true,
  animaciones: {
    entrada: true,
  },
  estructura: {
    orden: ['hero', 'servicios', 'nosotros', 'galeria', 'ubicacion', 'contacto'],
    variantes: {
      hero: 'editorial',
      servicios: 'lista',
      nosotros: 'editorial',
      galeria: 'masonry',
      ubicacion: 'editorial',
      contacto: 'editorial',
    },
  },
  logo: '/logo.svg',
  heroImagen: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80',
  heroCtaTexto: 'Contáctanos por WhatsApp',
  servicios: [
    { titulo: 'Servicio Uno', descripcion: 'Breve descripción del servicio principal que ofreces a tus clientes.' },
    { titulo: 'Servicio Dos', descripcion: 'Otra cosa que haces muy bien y por la que la gente viene contigo.' },
    { titulo: 'Servicio Tres', descripcion: 'Tu servicio estrella, el que más te diferencia de la competencia.' },
    { titulo: 'Servicio Cuatro', descripcion: 'Otro servicio complementario que ofreces a tus clientes más exigentes.' },
  ],
  sobreNosotros: {
    titulo: 'Sobre Nosotros',
    texto:
      'Somos un negocio local con más de 10 años de experiencia atendiendo a familias de Los Mochis y el norte de Sinaloa. Lo que nos distingue es la atención personal, precios justos, y el compromiso de que cada cliente salga satisfecho. Aquí no eres un número, eres un vecino.',
    imagen: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80',
    estadisticas: [
      { etiqueta: 'Años', valor: '10+' },
      { etiqueta: 'Clientes', valor: '500+' },
      { etiqueta: 'Calificación', valor: '4.9★' },
    ],
  },
  galeria: [
    { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80', alt: 'Espacio de trabajo' },
    { src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80', alt: 'Detalle del negocio' },
    { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80', alt: 'Equipo profesional' },
    { src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80', alt: 'Instalaciones' },
    { src: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=800&q=80', alt: 'Ambiente' },
    { src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80', alt: 'Atención personalizada' },
  ],
  redes: {
    facebook: 'https://facebook.com/tunegocio',
    instagram: 'https://instagram.com/tunegocio',
  },
  formspreeId: 'xxxxxxxx',
  seo: {
    titulo: 'Tu Negocio Local | Los Mochis, Sinaloa',
    descripcion:
      'Atención personalizada y servicio de calidad en Los Mochis. Conócenos, visítanos o contáctanos por WhatsApp.',
    ogImagen: '/og-image.jpg',
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
