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
  tagline: '¿Ya te arreglaste los dientes? · Los Mochis',
  descripcionCorta:
    'Odontología integral en el corazón de Los Mochis. Más de 10 especialistas certificados, tecnología digital y precios accesibles. Atendemos a toda la familia — desde limpieza infantil hasta implantes y ortodoncia.',
  whatsapp: '526688224372',
  whatsappMensaje: 'Hola, vi su sitio y quiero agendar una cita en Dental Empresarial.',
  telefono: '+52 668 812 4614',
  email: 'dentalempresarial@hotmail.com',
  direccion: {
    calle: 'Calle Ignacio Allende #655 Sur',
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
    orden: ['hero', 'servicios', 'tratamientos', 'nosotros', 'testimonios', 'ubicacion', 'contacto'],
    variantes: {
      hero: 'corporativo',
      servicios: 'cards',
      nosotros: 'editorial',
      ubicacion: 'editorial',
      contacto: 'editorial',
      tratamientos: 'lista',
      testimonios: 'grid',
    },
  },
  logo: '/logo-dental.png',
  logoTipo: 'imagen',
  heroImagen: '/interior-02.jpg',
  heroCtaTexto: 'Agendar por WhatsApp',
  topBar: true,
  heroEyebrow: 'Promociones mensuales · Pregunta por WhatsApp',
  heroTitulo: 'Odontología integral para toda la familia en Los Mochis',
  heroTelefonoCta: 'Llamar 668 812 4614',
  trustStrip: [
    { valor: '10+', titulo: 'Especialistas certificados', icono: 'especialistas' },
    { valor: '7', titulo: 'Especialidades dentales', icono: 'verificado' },
    { valor: '15+', titulo: 'Años en Los Mochis', icono: 'anos' },
    { valor: 'FONACOT · Coppel', titulo: 'Financiamiento disponible', icono: 'pagos' },
  ],
  servicios: [
    {
      titulo: 'Ortodoncia y Ortopedia Maxilar',
      descripcion:
        'Brackets metálicos, estéticos y alineadores invisibles. Corrección de mordida para niños y adultos, con seguimiento mensual.',
      imagen: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80',
    },
    {
      titulo: 'Estética Dental y Rehabilitación',
      descripcion:
        'Blanqueamiento, carillas, coronas, puentes e implantes. Diseño de sonrisa con resultados naturales y duraderos.',
      imagen: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80',
    },
    {
      titulo: 'Odontopediatría',
      descripcion:
        'Atención dental especializada para niños en un ambiente amigable. Limpiezas, flúor y prevención desde temprana edad.',
      imagen: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80',
    },
    {
      titulo: 'Endodoncia',
      descripcion:
        'Tratamiento de conductos con técnicas modernas para conservar tu diente natural. Sin dolor y en pocas sesiones.',
      imagen: 'https://images.unsplash.com/photo-1643297654416-05795d62e39c?w=800&q=80',
    },
    {
      titulo: 'Periodoncia',
      descripcion:
        'Tratamiento integral de encías: profilaxis profunda, control de sarro y manejo de enfermedad periodontal.',
    },
    {
      titulo: 'Cirugía Maxilofacial',
      descripcion:
        'Extracciones complejas, cirugía de terceros molares e intervenciones maxilofaciales con radiología digital de apoyo.',
    },
  ],
  sobreNosotros: {
    titulo: 'Más de 10 especialistas para toda la familia',
    texto:
      'Dental Empresarial es una clínica de odontología integral ubicada en el centro de Los Mochis. Contamos con un equipo de más de 10 dentistas certificados —con cédula profesional verificada— especializados en endodoncia, ortodoncia, odontopediatría, periodoncia, estética y cirugía maxilofacial. Nuestro compromiso es brindar atención de calidad a precios accesibles, con promociones mensuales, financiamiento FONACOT y Coppel, y múltiples formas de pago incluyendo tarjeta, transferencia, OXXO, SPEI, Mercado Pago, Samsung Pay y Apple Pay.',
    imagen: '/interior-01.jpg',
    estadisticas: [
      { etiqueta: 'Especialistas', valor: '10+' },
      { etiqueta: 'Especialidades', valor: '7' },
      { etiqueta: 'Años en Los Mochis', valor: '15+' },
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
      'Atendemos a toda la familia con las principales especialidades odontológicas. Consulta el precio de tu tratamiento por WhatsApp — manejamos promociones mensuales y financiamiento FONACOT y Coppel.',
    lista: [
      {
        nombre: 'Limpieza Dental con Flúor',
        descripcion: 'Profilaxis profesional, pulido y aplicación de flúor. Parte de nuestra promoción de primer contacto.',
        desde: 'Consultar',
        duracion: '45 min',
        incluye: ['Diagnóstico visual', 'Remoción de sarro', 'Pulido dental', 'Aplicación de flúor'],
      },
      {
        nombre: 'Blanqueamiento Dental',
        descripcion: 'Blanqueamiento en consultorio para recuperar el tono natural de tu sonrisa en una sola sesión.',
        desde: 'Consultar',
        duracion: '60 min',
        incluye: ['Protector gingival', 'Sesión en consultorio', 'Kit de mantenimiento', 'Revisión de seguimiento'],
      },
      {
        nombre: 'Ortodoncia — Brackets',
        descripcion: 'Brackets metálicos o estéticos con ajustes mensuales. Corrección completa de mordida y alineación.',
        desde: 'Consultar',
        duracion: '18-24 meses',
        incluye: ['Estudio radiográfico', 'Instalación', 'Ajustes mensuales', 'Retenedores finales'],
      },
      {
        nombre: 'Ortodoncia Invisible',
        descripcion: 'Alineadores transparentes removibles — estética premium sin brackets visibles.',
        desde: 'Consultar',
        duracion: '12-18 meses',
        incluye: ['Escaneo 3D intraoral', 'Set completo de alineadores', 'Revisiones mensuales', 'Retenedores finales'],
      },
      {
        nombre: 'Endodoncia',
        descripcion: 'Tratamiento de conductos para conservar tu diente natural. Una a dos sesiones sin dolor.',
        desde: 'Consultar',
        duracion: '60-90 min',
        incluye: ['Diagnóstico radiográfico', 'Anestesia', 'Obturación de conductos', 'Radiografía final'],
      },
      {
        nombre: 'Coronas, Puentes e Implantes',
        descripcion: 'Rehabilitación completa: implantes de titanio, coronas de porcelana y puentes fijos.',
        desde: 'Consultar',
        duracion: '3-6 meses',
        incluye: ['Evaluación integral', 'Cirugía (si aplica)', 'Corona o puente', 'Revisiones de control'],
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
    titulo: 'Dental Empresarial | Dentista en Los Mochis, Sinaloa',
    descripcion:
      'Clínica dental en Los Mochis: ortodoncia, endodoncia, odontopediatría, estética dental e implantes. Más de 10 especialistas. Agenda tu cita por WhatsApp.',
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
