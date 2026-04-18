/**
 * CONFIG.TS - Cliente: Dra. Fátima Tejeda — Ortodoncista (Los Mochis, Sinaloa)
 * Rediseño basado en drafatimatejeda.com aplicando skill landing-design.
 *
 * Decisiones de diseño:
 *   · Marca personal femenina premium → palette warm cream + deep teal + coral
 *   · Tipografía editorial → Fraunces (serif w/ opsz) + Inter
 *   · Densidad amplia, bordes suaves → "luxury tax" en whitespace
 *   · Imagen ninguno → fotos reales de la doctora se preservan tal cual
 *   · Hero corporativo con eyebrow + doble CTA + trust strip
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
  nombre: 'Dra. Fátima Tejeda',
  tagline: 'Ortodoncia con propósito en Los Mochis',
  descripcionCorta:
    'Especialista certificada por la Asociación Mexicana de Ortodoncia. Acompaño a niñas, niños, adolescentes y adultos en el camino hacia una sonrisa funcional, alineada y propia — con la tecnología y la calidez que tu tratamiento merece.',
  whatsapp: '526681640897',
  whatsappMensaje:
    'Hola Dra. Tejeda, vi su sitio web y me gustaría agendar una valoración de ortodoncia.',
  telefono: '+52 668 812 9508',
  email: 'dratejedaortodoncia@gmail.com',
  direccion: {
    calle: 'Álvaro Obregón #1431, Jardines del Sol',
    ciudad: 'Los Mochis',
    estado: 'Sinaloa',
    codigoPostal: '81245',
    mapaEmbed:
      'https://www.google.com/maps?q=Alvaro+Obregon+1431,+Jardines+del+Sol,+Los+Mochis,+Sinaloa&output=embed',
  },
  horarios: [
    { dia: 'Lunes', apertura: '09:00', cierre: '20:00' },
    { dia: 'Martes', apertura: '09:00', cierre: '20:00' },
    { dia: 'Miércoles', apertura: '09:00', cierre: '20:00' },
    { dia: 'Jueves', apertura: '09:00', cierre: '20:00' },
    { dia: 'Viernes', apertura: '09:00', cierre: '20:00' },
    { dia: 'Sábado', apertura: '09:00', cierre: '13:00' },
    { dia: 'Domingo', apertura: '', cierre: '', cerrado: true },
  ],
  colores: {
    // Paleta Friendly Family Ortho — bright teal + coral
    primario: '14 165 233',     // sky-500 bright teal — CTAs, eyebrow, links
    secundario: '7 89 133',      // sky-800 deep teal — hero overlay base
    acento: '255 122 89',        // warm coral — CTA hover, accent dots, badges
    texto: '15 23 42',           // slate-900 deep ink
    fondo: '255 255 255',        // pure white
    superficie: '240 249 255',   // sky-50 soft tint
    tenue: '100 116 139',        // slate-500 body secondary
    linea: '226 232 240',        // slate-200 light line
  },
  fuentes: {
    display: {
      nombre: 'Outfit',
      query: 'Outfit:wght@500;600;700;800',
      familia: '"Outfit", system-ui, sans-serif',
    },
    body: {
      nombre: 'Inter',
      query: 'Inter:wght@400;500;600;700',
      familia: '"Inter", system-ui, sans-serif',
    },
  },
  densidad: 'normal',
  bordes: 'redondeados',
  tratoImagen: 'ninguno',
  mostrarNumeros: true,
  animaciones: {
    entrada: true,
  },
  estructura: {
    orden: ['hero', 'porQueElegirnos', 'servicios', 'nosotros', 'tratamientos', 'faq', 'ctaFinal', 'ubicacion', 'contacto'],
    variantes: {
      hero: 'amable',
      porQueElegirnos: 'cards',
      servicios: 'image-cards',
      nosotros: 'editorial',
      tratamientos: 'lista',
      faq: 'accordion',
      ctaFinal: 'banner',
      ubicacion: 'editorial',
      contacto: 'editorial',
    },
  },
  logo: '/logo-dra-fatima.png',
  logoTipo: 'imagen',
  tipoNegocio: 'Dentist',
  heroImagen: '/dra-fatima-01.jpg',
  heroCtaTexto: 'Agendar valoración',
  topBar: true,
  heroEyebrow: 'Especialista certificada · Asociación Mexicana de Ortodoncia',
  heroTitulo: 'Tu sonrisa, alineada con precisión y cuidado de especialista',
  heroTelefonoCta: 'Llamar 668 812 9508',
  trustStrip: [
    { valor: '2', titulo: 'Cédulas profesionales (UAS y UAG)', icono: 'especialistas' },
    { valor: 'AMO', titulo: 'Certificada nacionalmente', icono: 'verificado' },
    { valor: 'Digital', titulo: 'Diagnóstico con tecnología de punta', icono: 'rating' },
    { valor: '15+', titulo: 'Formas de pago aceptadas', icono: 'pagos' },
  ],
  servicios: [
    {
      titulo: 'Brackets metálicos',
      descripcion:
        'La opción clásica perfeccionada. Eficiencia comprobada y el mejor costo-beneficio para tratamientos largos o complejos, con seguimiento mensual personalizado.',
      imagen: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80',
    },
    {
      titulo: 'Brackets transparentes',
      descripcion:
        'Los mismos resultados que los metálicos, pero discretos. Pensados para profesionistas y adolescentes que quieren transformar su sonrisa sin que se note el proceso.',
      imagen: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80',
    },
    {
      titulo: 'Invisalign',
      descripcion:
        'Alineadores transparentes hechos a tu medida con escaneo digital. Te los puedes quitar para comer y cepillarte; nadie sabrá que estás en tratamiento.',
      imagen: 'https://images.unsplash.com/photo-1643297654416-05795d62e39c?w=800&q=80',
    },
    {
      titulo: 'Ortopedia dentofacial',
      descripcion:
        'Para niños y adolescentes en crecimiento. Guiamos el desarrollo de la mandíbula y los maxilares para evitar tratamientos más largos en la edad adulta.',
      imagen: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80',
    },
    {
      titulo: 'Diagnóstico ortodóncico integral',
      descripcion:
        'Antes de cualquier tratamiento, un análisis completo: radiografías digitales, fotografías clínicas y plan personalizado. Sabrás exactamente qué esperar.',
      imagen: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80',
    },
    {
      titulo: 'Retención y seguimiento',
      descripcion:
        'Tu sonrisa nueva merece quedarse así. Diseñamos retenedores personalizados y te acompañamos durante el proceso de estabilización.',
      imagen: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80',
    },
  ],
  sobreNosotros: {
    titulo: 'Soy Fátima. Y tu sonrisa me importa.',
    texto:
      'Estudié Cirujano Dentista en la Universidad Autónoma de Sinaloa y la Especialidad en Ortodoncia en la Universidad Autónoma de Guadalajara. Estoy certificada por la Asociación Mexicana de Ortodoncia, lo que significa que mantengo formación continua y respondo a estándares nacionales. Pero más allá de las credenciales, creo en una ortodoncia hecha con tiempo: explico cada paso, escucho tus dudas y diseño tu plan en torno a tu vida — no al revés. En mi consultorio en Jardines del Sol vas a encontrar tecnología digital de diagnóstico, un espacio amplio y cómodo, estacionamiento propio con rampa de acceso, y todas las facilidades de pago para que el costo no sea el motivo por el que pospones tu sonrisa.',
    imagen: '/dra-fatima-02.jpg',
    estadisticas: [
      { etiqueta: 'Especialidad certificada', valor: 'Ortodoncia' },
      { etiqueta: 'Universidades formadoras', valor: 'UAS · UAG' },
      { etiqueta: 'Tecnología', valor: 'Digital' },
    ],
  },
  galeria: [],
  tratamientos: {
    titulo: 'Tratamientos',
    descripcion:
      'Cada plan se diseña en consulta tras un diagnóstico completo. Los rangos sirven como referencia; el plan final lo construimos juntas en tu valoración inicial.',
    lista: [
      {
        nombre: 'Valoración inicial',
        descripcion:
          'La primera consulta donde revisamos tu caso, tomamos fotografías clínicas y te explicamos las opciones disponibles. Sin compromiso.',
        desde: 'Consultar',
        duracion: '45 min',
        incluye: [
          'Evaluación clínica completa',
          'Fotografías de diagnóstico',
          'Plan de tratamiento personalizado',
          'Cotización con formas de pago',
        ],
      },
      {
        nombre: 'Brackets metálicos',
        descripcion:
          'Tratamiento integral con brackets de acero, ajustes mensuales, radiografías de control y retenedores finales.',
        desde: 'Consultar',
        duracion: '18-24 meses',
        incluye: [
          'Diseño del plan de movimiento',
          'Instalación completa',
          'Ajustes mensuales',
          'Retenedores al finalizar',
        ],
      },
      {
        nombre: 'Brackets transparentes',
        descripcion:
          'La misma técnica probada con brackets de cerámica que se mimetizan con el color natural del diente.',
        desde: 'Consultar',
        duracion: '18-24 meses',
        incluye: [
          'Brackets de cerámica',
          'Ajustes mensuales',
          'Radiografías de seguimiento',
          'Retenedores personalizados',
        ],
      },
      {
        nombre: 'Invisalign',
        descripcion:
          'Alineadores transparentes con escaneo intraoral 3D. Tratamiento más cómodo y prácticamente invisible.',
        desde: 'Consultar',
        duracion: 'Variable según caso',
        incluye: [
          'Escaneo intraoral 3D',
          'Simulación digital del resultado',
          'Juego completo de alineadores',
          'Revisiones periódicas',
        ],
      },
      {
        nombre: 'Ortopedia dentofacial infantil',
        descripcion:
          'Aparatos removibles o fijos para guiar el crecimiento óseo en niños y adolescentes.',
        desde: 'Consultar',
        duracion: '12-18 meses',
        incluye: [
          'Análisis cefalométrico',
          'Aparato personalizado',
          'Seguimiento mensual',
          'Reporte de avance para padres',
        ],
      },
    ],
  },
  manifiesto: {
    eyebrow: 'Filosofía de consultorio',
    texto:
      'La ortodoncia se hace con tiempo. Tiempo para escuchar, para explicar, y para diseñar el plan que tu sonrisa — no la prisa — necesita.',
    atribucion: 'Dra. Fátima R. Tejeda',
  },
  porQueElegirnos: {
    titulo: 'Lo que hace diferente venir aquí',
    descripcion:
      'Más de una década de experiencia, certificación nacional y un trato pensado para que tu tratamiento sea cómodo de principio a fin.',
    items: [
      {
        titulo: 'Especialista certificada',
        descripcion:
          'Cédula de Cirujano Dentista (UAS) y Especialidad en Ortodoncia (UAG). Certificada por la Asociación Mexicana de Ortodoncia.',
        icono: 'verificado',
      },
      {
        titulo: 'Tecnología digital',
        descripcion:
          'Diagnóstico con radiografía digital, fotografía intraoral y simulación 3D para Invisalign. Ves tu plan antes de empezar.',
        icono: 'tecnologia',
      },
      {
        titulo: 'Tiempo para escucharte',
        descripcion:
          'Cada consulta se diseña con calma: explicamos cada paso, resolvemos dudas y respetamos tu ritmo. Nada de prisas.',
        icono: 'corazon',
      },
      {
        titulo: '15+ formas de pago',
        descripcion:
          'Aceptamos efectivo, tarjetas, FONACOT, Coppel Pay, OXXO, SPEI, transferencia, Mercado Pago, Apple Pay y más. Pregunta por nuestros planes.',
        icono: 'pagos',
      },
    ],
  },
  faq: {
    titulo: 'Lo que más nos preguntan',
    descripcion: 'Si tu pregunta no aparece, mándame un mensaje por WhatsApp y te respondo directamente.',
    items: [
      {
        pregunta: '¿Cuánto cuesta un tratamiento de ortodoncia?',
        respuesta:
          'El costo varía según el tipo de tratamiento (brackets metálicos, transparentes o Invisalign) y la complejidad de tu caso. Después de tu valoración inicial te entregamos una cotización personalizada con todas las formas de pago disponibles, incluyendo planes a meses con FONACOT y Coppel.',
      },
      {
        pregunta: '¿La primera valoración tiene costo?',
        respuesta:
          'La primera consulta incluye revisión clínica, fotografías de diagnóstico y plan de tratamiento personalizado. Confirma el costo actualizado por WhatsApp al agendar — frecuentemente tenemos promociones mensuales.',
      },
      {
        pregunta: '¿A qué edad debo llevar a mi hijo a su primera consulta?',
        respuesta:
          'La Asociación Americana de Ortodoncia recomienda la primera valoración a los 7 años. A esa edad podemos detectar problemas de mordida o crecimiento óseo y prevenir tratamientos más largos en la adolescencia con ortopedia dentofacial.',
      },
      {
        pregunta: '¿Cuánto tiempo dura un tratamiento de brackets?',
        respuesta:
          'Entre 18 y 24 meses en la mayoría de los casos, con ajustes mensuales. Algunos casos sencillos terminan antes; los más complejos pueden requerir un poco más. En tu valoración te damos un estimado real para tu caso.',
      },
      {
        pregunta: '¿Aceptan FONACOT y Coppel Pay?',
        respuesta:
          'Sí. Aceptamos FONACOT, Coppel Pay, todas las tarjetas (Visa, Mastercard, Amex), efectivo, transferencia, depósito, OXXO, SPEI, Mercado Pago, Apple Pay, Samsung Pay y más. Te ayudamos a elegir el plan que mejor te acomode.',
      },
      {
        pregunta: '¿Cuál es la diferencia entre brackets metálicos, transparentes e Invisalign?',
        respuesta:
          'Los metálicos son la opción tradicional, eficiente y económica. Los transparentes son cerámicos del color del diente — discretos pero con la misma técnica. Invisalign son alineadores removibles, prácticamente invisibles, ideales si no quieres que se note tu tratamiento.',
      },
    ],
  },
  ctaFinal: {
    titulo: 'Tu sonrisa empieza con una valoración',
    descripcion:
      'Agenda hoy mismo. Resolvemos todas tus dudas, te explicamos las opciones y diseñamos el plan que mejor se adapte a ti — sin presión.',
    ctaTexto: 'Agendar por WhatsApp',
  },
  redes: {
    facebook: 'https://www.facebook.com/OrtodonciaDoctoraFatimaTejeda',
    instagram: 'https://www.instagram.com/dra.fatimatejeda',
  },
  formspreeId: 'cliente-fatimatejeda',
  seo: {
    titulo: 'Dra. Fátima Tejeda | Ortodoncista Certificada en Los Mochis',
    descripcion:
      'Especialista en ortodoncia certificada por la AMO. Brackets metálicos, transparentes, Invisalign y ortopedia dentofacial en Los Mochis, Sinaloa. Agenda tu valoración.',
    ogImagen: '/dra-fatima-01.jpg',
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
