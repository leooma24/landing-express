/**
 * CONFIG.TS - Cliente: Dental Empresarial (Los Mochis, Sinaloa)
 * Rediseño basado en dentalempresarial.com.mx
 * Dirección visual: DM Serif Display + sky blue + bordes suaves + servicios en CARDS + TRATAMIENTOS + TESTIMONIOS
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
  | 'testimonios';

export type VariantePorSeccion = {
  hero?: 'editorial' | 'split' | 'corporativo' | 'clinico';
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
  logoTipo?: 'texto' | 'imagen';
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
  nombre: 'Dental Empresarial',
  tagline: 'Y tú… ¿Ya te arreglaste los dientes?',
  descripcionCorta:
    'Visita el consultorio dental que te devolverá una linda sonrisa y la salud bucal que necesitas para verte y sentirte mejor. Somos Dental Empresarial en Los Mochis, Sinaloa — consultorio dental integral con tecnología de punta y un equipo de dentistas certificados.',
  whatsapp: '526688224372',
  whatsappMensaje: 'Hola, vi su sitio y quiero agendar una cita en Dental Empresarial.',
  telefono: '+52 668 812 4614',
  email: 'dentalempresarial@hotmail.com',
  direccion: {
    calle: 'Calle Ignacio Allende #655 Sur, Local B · Col. Centro',
    ciudad: 'Los Mochis',
    estado: 'Sinaloa',
    codigoPostal: '81200',
    mapaEmbed:
      'https://www.google.com/maps?q=Calle+Ignacio+Allende+655+Sur,+Los+Mochis,+Sinaloa&output=embed',
  },
  horarios: [
    { dia: 'Lunes', apertura: '09:00', cierre: '19:00' },
    { dia: 'Martes', apertura: '09:00', cierre: '19:00' },
    { dia: 'Miércoles', apertura: '09:00', cierre: '19:00' },
    { dia: 'Jueves', apertura: '09:00', cierre: '19:00' },
    { dia: 'Viernes', apertura: '09:00', cierre: '19:00' },
    { dia: 'Sábado', apertura: '09:00', cierre: '13:00' },
    { dia: 'Domingo', apertura: '', cierre: '', cerrado: true },
  ],
  colores: {
    primario: '1 82 101',
    secundario: '24 147 175',
    acento: '135 209 220',
    texto: '17 24 39',
    fondo: '255 255 255',
    superficie: '243 244 244',
    tenue: '99 100 102',
    linea: '229 231 235',
  },
  fuentes: {
    display: {
      nombre: 'Manrope',
      query: 'Manrope:wght@500;600;700;800',
      familia: '"Manrope", system-ui, sans-serif',
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
    orden: ['hero', 'servicios', 'tratamientos', 'nosotros', 'ubicacion', 'contacto'],
    variantes: {
      hero: 'corporativo',
      servicios: 'cards',
      nosotros: 'editorial',
      ubicacion: 'editorial',
      contacto: 'editorial',
      tratamientos: 'lista',
    },
  },
  logo: '/logo-dental.png',
  logoTipo: 'imagen',
  heroImagen: '/interior-02.jpg',
  heroCtaTexto: 'Agendar por WhatsApp',
  topBar: true,
  heroEyebrow: 'Promociones mensuales · Facilidades de pago',
  heroTitulo: 'Consultorio dental a precios accesibles',
  heroTelefonoCta: 'Llamar 668 812 4614',
  trustStrip: [
    { valor: '11', titulo: 'Dentistas certificados', icono: 'especialistas' },
    { valor: '10+', titulo: 'Especialidades dentales', icono: 'verificado' },
    { valor: 'Radiología digital', titulo: 'Tecnología de punta', icono: 'rating' },
    { valor: 'FONACOT · Coppel', titulo: 'Facilidades de pago', icono: 'pagos' },
  ],
  servicios: [
    {
      titulo: 'Ortodoncia y Ortopedia Maxilar',
      descripcion:
        'Brackets, ortopedia maxilar y tratamientos para corregir la alineación y mordida en niños y adultos.',
      imagen: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80',
    },
    {
      titulo: 'Odontología Estética',
      descripcion:
        'Diseño de sonrisa con carillas, resinas inyectadas, blanqueamiento dental y rehabilitación estética integral.',
      imagen: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80',
    },
    {
      titulo: 'Odontopediatría',
      descripcion:
        'Odontología infantil: revisión, selladores de fosetas y fisuras, mantenedores de espacio y prevención desde temprana edad.',
      imagen: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80',
    },
    {
      titulo: 'Endodoncia',
      descripcion:
        'Tratamiento de conductos (necro pulpectomía, biopulpectomía, pulpotomía y pulpectomía) con especialistas certificados.',
      imagen: 'https://images.unsplash.com/photo-1643297654416-05795d62e39c?w=800&q=80',
    },
    {
      titulo: 'Periodoncia',
      descripcion:
        'Cirugía plástica periodontal, raspado y alisado radicular, gingivectomía y gingivoplastia para la salud de tus encías.',
    },
    {
      titulo: 'Rehabilitación y Cirugía',
      descripcion:
        'Coronas, puentes, incrustaciones de zirconio/disilicato, prótesis y cirugía de terceros molares con radiología digital.',
    },
  ],
  sobreNosotros: {
    titulo: 'Tu clínica dental de confianza en Los Mochis',
    texto:
      'En Dental Empresarial tenemos diversas certificaciones y somos especialistas en periodoncia, odontopediatría, endodoncia, ortodoncia, rehabilitación estética, entre muchos otros servicios. Manejamos radiología digitalizada y materiales de la más alta calidad para garantizar la efectividad de los tratamientos. ¡Ofrecemos precios muy accesibles! Pregunta por nuestras promociones mensuales y facilidades de pago — aceptamos efectivo, tarjeta, transferencia, OXXO, SPEI, Mercado Pago, Samsung Pay, Apple Pay, FONACOT y Coppel Pay.',
    imagen: '/interior-01.jpg',
    estadisticas: [
      { etiqueta: 'Dentistas certificados', valor: '11' },
      { etiqueta: 'Especialidades', valor: '10+' },
      { etiqueta: 'Formas de pago', valor: '15+' },
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
    titulo: 'Tratamientos',
    descripcion:
      'Servicios dentales completos con tecnología de punta. Agenda una cita y pregunta por nuestras promociones mensuales y facilidades de pago.',
    lista: [
      {
        nombre: 'Limpieza dental con flúor',
        descripcion: 'Profilaxis profesional, pulido y aplicación de flúor para mantener tu salud bucal.',
        desde: 'Consultar',
        duracion: '45 min',
        incluye: ['Diagnóstico visual', 'Remoción de sarro', 'Pulido dental', 'Aplicación de flúor'],
      },
      {
        nombre: 'Blanqueamiento dental',
        descripcion: 'Blanqueamiento en consultorio para recuperar el tono natural de tu sonrisa.',
        desde: 'Consultar',
        duracion: '60 min',
        incluye: ['Protector gingival', 'Sesión en consultorio', 'Kit de mantenimiento', 'Revisión de seguimiento'],
      },
      {
        nombre: 'Diseño de sonrisa',
        descripcion: 'Carillas, resinas inyectadas, blanqueamiento y enserados de diagnóstico para rediseñar tu sonrisa.',
        desde: 'Consultar',
        duracion: 'Varias sesiones',
        incluye: ['Enserado de diagnóstico', 'Diseño personalizado', 'Cámara intraoral', 'Revisión de seguimiento'],
      },
      {
        nombre: 'Ortodoncia con brackets',
        descripcion: 'Brackets con seguimiento mensual para corregir mordida y alineación dental.',
        desde: 'Consultar',
        duracion: '18-24 meses',
        incluye: ['Radiografía periapical digitalizada', 'Instalación', 'Ajustes mensuales', 'Retenedores finales'],
      },
      {
        nombre: 'Endodoncia',
        descripcion: 'Tratamiento de conductos: necro pulpectomía, biopulpectomía, pulpotomía y pulpectomía.',
        desde: 'Consultar',
        duracion: '60-90 min',
        incluye: ['Diagnóstico radiográfico', 'Anestesia', 'Obturación de conductos', 'Radiografía final'],
      },
      {
        nombre: 'Coronas, incrustaciones y puentes',
        descripcion: 'Rehabilitación con disilicato de litio, zirconio, metal-porcelana, oro o acero-cromo. Postes de fibra de vidrio.',
        desde: 'Consultar',
        duracion: '2-4 sesiones',
        incluye: ['Evaluación integral', 'Toma de impresión', 'Colocación de corona/puente', 'Revisiones de control'],
      },
    ],
  },
  testimonios: {
    titulo: 'Lo que dicen nuestros pacientes',
    descripcion: 'Familias mochitenses que confían en Dental Empresarial año tras año.',
    lista: [
      {
        nombre: 'María Guadalupe R.',
        tratamiento: 'Ortodoncia',
        texto:
          'Llevo mi tratamiento de brackets aquí y la atención ha sido excelente. Me explican cada ajuste y los precios son muy justos. Además tienen promociones cada mes.',
        estrellas: 5,
      },
      {
        nombre: 'José Luis P.',
        tratamiento: 'Implante dental',
        texto:
          'Me colocaron un implante y me trataron con mucha paciencia. El doctor me explicó todo el procedimiento y pude pagarlo en mensualidades con FONACOT.',
        estrellas: 5,
      },
      {
        nombre: 'Ana Karen S.',
        tratamiento: 'Odontopediatría',
        texto:
          'Traigo a mis dos hijos a sus revisiones. La dentista de niños es súper cariñosa y mis pequeños ya no le tienen miedo al dentista. Muy recomendable.',
        estrellas: 5,
      },
    ],
  },
  redes: {
    facebook: 'https://www.facebook.com/dentalempresarial',
    instagram: 'https://www.instagram.com/dentalempresarial',
  },
  formspreeId: 'cliente-dentalempresarial',
  seo: {
    titulo: 'Dental Empresarial | Consultorio Dental en Los Mochis',
    descripcion:
      'Consultorio dental a precios accesibles en Los Mochis. 11 dentistas certificados, radiología digital y promociones mensuales. ¡Agenda tu cita!',
    ogImagen: '/interior-02.jpg',
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
