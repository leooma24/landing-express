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
  imagen?: string;
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
  | 'testimonios'
  | 'manifiesto'
  | 'porQueElegirnos'
  | 'faq'
  | 'ctaFinal';

export type VariantePorSeccion = {
  hero?: 'editorial' | 'split' | 'corporativo' | 'clinico' | 'magazine' | 'boutique' | 'amable';
  servicios?: 'lista' | 'cards' | 'dos-columnas' | 'bento' | 'image-cards';
  nosotros?: 'editorial';
  galeria?: 'masonry';
  ubicacion?: 'editorial';
  contacto?: 'editorial';
  menu?: 'carta';
  tratamientos?: 'lista';
  testimonios?: 'grid' | 'carousel';
  manifiesto?: 'editorial';
  porQueElegirnos?: 'cards';
  faq?: 'accordion';
  ctaFinal?: 'banner';
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
  logoTipo?: 'texto' | 'imagen';
  tipoNegocio?: 'LocalBusiness' | 'Dentist' | 'MedicalBusiness' | 'Restaurant' | 'Store' | 'BeautySalon' | 'HealthAndBeautyBusiness' | 'AutomotiveBusiness' | string;
  heroImagen: string;
  heroCtaTexto: string;
  topBar?: boolean;
  heroEyebrow?: string;
  heroTitulo?: string;
  heroTelefonoCta?: string;
  trustStrip?: {
    titulo: string;
    valor?: string;
    icono?: 'rating' | 'especialistas' | 'anos' | 'pagos' | 'verificado';
  }[];
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
  manifiesto?: {
    eyebrow?: string;
    texto: string;
    atribucion?: string;
  };
  porQueElegirnos?: {
    titulo?: string;
    descripcion?: string;
    items: {
      titulo: string;
      descripcion: string;
      icono?: 'corazon' | 'tecnologia' | 'verificado' | 'pagos' | 'tiempo' | 'sonrisa' | 'familia' | 'estrella';
    }[];
  };
  faq?: {
    titulo?: string;
    descripcion?: string;
    items: {
      pregunta: string;
      respuesta: string;
    }[];
  };
  ctaFinal?: {
    titulo?: string;
    descripcion?: string;
    ctaTexto?: string;
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
  nombre: 'Super Tortas La Michoacana',
  tagline: 'Las mejores tortas de Los Mochis',
  descripcionCorta:
    'Tortas hechas al momento, pan crujiente y relleno generoso. Una tradición familiar en Los Mochis desde hace más de 10 años.',
  whatsapp: '526681010743',
  whatsappMensaje: 'Hola, me gustaría hacer un pedido.',
  telefono: '+52 668 101 0743',
  email: 'contacto@supertortaslamichoacana.mx',
  direccion: {
    calle: 'Los Mochis, Sinaloa',
    ciudad: 'Los Mochis',
    estado: 'Sinaloa',
    codigoPostal: '81200',
    mapaEmbed:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3671.5!2d-108.98427881!3d25.81708376!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQ5JzAxLjUiTiAxMDjCsDU5JzAzLjQiVw!5e0!3m2!1ses!2smx!4v1700000000000',
  },
  horarios: [
    { dia: 'Lunes', apertura: '11:00', cierre: '19:00' },
    { dia: 'Martes', apertura: '11:00', cierre: '19:00' },
    { dia: 'Miércoles', apertura: '11:00', cierre: '19:00' },
    { dia: 'Jueves', apertura: '11:00', cierre: '19:00' },
    { dia: 'Viernes', apertura: '11:00', cierre: '19:00' },
    { dia: 'Sábado', apertura: '11:00', cierre: '19:00' },
    { dia: 'Domingo', apertura: '11:00', cierre: '19:00' },
  ],
  colores: {
    primario: '220 38 38',
    secundario: '120 53 15',
    acento: '234 179 8',
    texto: '41 25 14',
    fondo: '254 247 237',
    superficie: '253 237 209',
    tenue: '146 102 66',
    linea: '231 214 186',
  },
  fuentes: {
    display: {
      nombre: 'Fraunces',
      query: 'Fraunces:opsz,wght@9..144,600;9..144,700;9..144,800;9..144,900',
      familia: '"Fraunces", Georgia, serif',
    },
    body: {
      nombre: 'Inter',
      query: 'Inter:wght@400;500;600;700',
      familia: '"Inter", system-ui, sans-serif',
    },
  },
  densidad: 'normal',
  bordes: 'suaves',
  tratoImagen: 'calido',
  mostrarNumeros: true,
  animaciones: {
    entrada: true,
  },
  estructura: {
    orden: ['hero', 'menu', 'nosotros', 'galeria', 'ubicacion', 'contacto'],
    variantes: {
      hero: 'split',
      nosotros: 'editorial',
      galeria: 'masonry',
      ubicacion: 'editorial',
      contacto: 'editorial',
      menu: 'carta',
    },
  },
  logo: '/logo.svg',
  heroImagen: 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=1200&q=80',
  heroCtaTexto: 'Pide por WhatsApp',
  servicios: [],
  sobreNosotros: {
    titulo: 'Más de 10 años sirviendo tortas',
    texto:
      'La Michoacana abrió con una idea simple: hacer tortas grandes, generosas y bien servidas, como las de antes. Pan del día, ingredientes frescos, el sazón casero que ha hecho que los clientes regresen una y otra vez. Atendemos en Los Mochis, cerca del centro, y nos conocen por el nombre.',
    imagen: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=1200&q=80',
    estadisticas: [
      { etiqueta: 'Años', valor: '10+' },
      { etiqueta: 'Tortas al día', valor: '200+' },
      { etiqueta: 'Calificación', valor: '4.8★' },
    ],
  },
  galeria: [
    { src: 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=800&q=80', alt: 'Torta especial recién preparada' },
    { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80', alt: 'Torta con relleno generoso' },
    { src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80', alt: 'Papas francesas sazonadas' },
    { src: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80', alt: 'Pan del día' },
    { src: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=800&q=80', alt: 'Agua fresca de jamaica' },
    { src: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80', alt: 'Mostrador listo' },
  ],
  menu: {
    titulo: 'Nuestras tortas',
    descripcion: 'Pan del día, relleno generoso, servidas al momento. Todo lo hacemos aquí.',
    categorias: [
      {
        nombre: 'Tortas',
        items: [
          { nombre: 'Especial', descripcion: 'La favorita de la casa. Jamón, queso, pierna, huevo, aguacate y todo lo bueno.', precio: '$85', destacado: true },
          { nombre: 'Combinada', descripcion: 'Jamón y pierna con queso derretido, aguacate, jitomate y mayonesa.', precio: '$75' },
          { nombre: 'Jamón y Queso', descripcion: 'La clásica de siempre. Jamón de pierna, queso manchego y lo de costumbre.', precio: '$55' },
        ],
      },
      {
        nombre: 'Para acompañar',
        items: [
          { nombre: 'Papas Francesas', descripcion: 'Recién hechas, crujientes por fuera y suaves por dentro.', precio: '$45' },
          { nombre: 'Papas Sazonadas', descripcion: 'Con el sazón de la casa, un toque especial.', precio: '$50' },
          { nombre: 'Té Negro', descripcion: 'Frío, bien dulce como debe ser.', precio: '$25' },
          { nombre: 'Agua de Jamaica', descripcion: 'Natural, fresca del día.', precio: '$25' },
        ],
      },
    ],
  },
  redes: {},
  formspreeId: 'cliente-supertortas',
  seo: {
    titulo: 'Super Tortas La Michoacana | Tortas en Los Mochis, Sinaloa',
    descripcion:
      'Las mejores tortas de Los Mochis: Especial, Combinada, Jamón y Queso. Papas sazonadas, aguas frescas. Pide por WhatsApp al 668 101 0743.',
    ogImagen: 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=1200&q=80',
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
