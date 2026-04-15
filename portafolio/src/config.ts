export const site = {
  marca: 'tu-app.co',
  slogan: 'Páginas web para negocios que sí traen clientes',
  ciudad: 'Los Mochis',
  fundador: 'Omar Lerma',
  fundadorCompleto: 'Omar Alonso Lerma Orduño',
  whatsapp: '526682493398',
  whatsappMensaje: 'Hola Omar, me interesa una página para mi negocio.',
  email: 'hola@tu-app.co',
  formspreeId: 'portafolio',
  animaciones: {
    entrada: true,
  },
  seo: {
    titulo: 'tu-app.co | Páginas web para negocios en Los Mochis',
    descripcion:
      'Landing pages profesionales para negocios locales. Desde $1,500 MXN, entregadas en 3-5 días. Dominio, hosting y WhatsApp incluidos.',
    ogImagen: '/og-image.jpg',
  },
};

export const customTier = {
  nombre: 'Proyectos a medida',
  precioDesde: 25000,
  tiempoEntrega: '4-12 semanas',
  descripcionLarga: 'Cuando una landing no alcanza: SaaS, dashboards, sistemas de reservas, CRMs internos, integraciones con APIs. Diseño y código a medida del problema.',
  cotizacionTexto: 'Cotización personalizada según alcance',
};

export const paquete = {
  nombre: 'Landing Express',
  precioSetup: 1500,
  precioMensual: 249,
  tiempoEntrega: '3-5 días',
  features: [
    'Página web de 1 sola pantalla, responsive',
    'Dominio .com o .com.mx el primer año',
    'Hosting rápido y seguro incluido',
    'Botón de WhatsApp directo a tu celular',
    'Google Maps con tu ubicación',
    'Galería de hasta 8 fotos',
    'Formulario de contacto a tu correo/WhatsApp',
    'Perfil de Google Business configurado',
    'Certificado SSL (candadito verde)',
    'Optimizada para cargar en <2 segundos',
    '2 rondas de cambios incluidas',
    'Entrega en 3-5 días',
  ],
  mensualidadIncluye: [
    'Mantenimiento y respaldos',
    '1 actualización al mes',
    'Soporte por WhatsApp',
    'Reporte mensual de visitas',
  ],
};

export interface Proyecto {
  slug: string;
  negocio: string;
  rubro: string;
  url: string;
  /** Si existe, usa screenshot real en vez del color gradient placeholder */
  imagen?: string;
  preview?: string;
  color: string;
  /** 'landing' = landing page demo; 'producto' = SaaS / app real */
  tipo: 'landing' | 'producto';
}

export const demos: Proyecto[] = [
  {
    slug: 'docfacil',
    negocio: 'DocFácil',
    rubro: 'Software médico',
    url: 'https://docfacil.tu-app.co',
    imagen: '/proyectos/docfacil.png',
    color: 'from-emerald-600 to-indigo-600',
    tipo: 'producto',
  },
  {
    slug: 'dentista',
    negocio: 'Clínica Dental Sonríe Más',
    rubro: 'Dentista',
    url: 'https://dentista.tu-app.co',
    imagen: '/proyectos/dentista.png',
    color: 'from-sky-500 to-cyan-600',
    tipo: 'landing',
  },
  {
    slug: 'restaurante',
    negocio: 'Mariscos El Malecón',
    rubro: 'Restaurante',
    url: 'https://restaurante.tu-app.co',
    imagen: '/proyectos/restaurante.png',
    color: 'from-blue-800 to-amber-500',
    tipo: 'landing',
  },
];

export const proceso = [
  {
    paso: 1,
    titulo: 'Cuéntanos de tu negocio',
    descripcion: 'Te mandamos 10 preguntas por WhatsApp. Las contestas en 10 minutos.',
    icono: '💬',
  },
  {
    paso: 2,
    titulo: 'Diseñamos tu página',
    descripcion: 'En 48 horas tienes una primera versión lista para revisar.',
    icono: '🎨',
  },
  {
    paso: 3,
    titulo: 'Ajustamos lo que falte',
    descripcion: '2 rondas de cambios incluidas. Hasta que quede como tú quieres.',
    icono: '✏️',
  },
  {
    paso: 4,
    titulo: 'Publicamos y listo',
    descripcion: 'Entregamos con dominio, WhatsApp, Google Maps. Al día siguiente tu negocio está en Google.',
    icono: '🚀',
  },
];

export const faqs = [
  {
    pregunta: 'Ya tengo Facebook e Instagram, ¿para qué quiero página web?',
    respuesta:
      'Facebook e Instagram son excelentes, y la página web no los reemplaza — los complementa. La diferencia es que cuando alguien te busca en Google escribiendo "[tu negocio] en Los Mochis", si no tienes página, aparece tu competencia. La página web es para que la gente te encuentre cuando te busca, no para reemplazar tus redes.',
  },
  {
    pregunta: '¿Por qué pago mensualidad? ¿No puede ser de una vez?',
    respuesta:
      'El pago único ($1,500) es por hacer tu página. La mensualidad ($249) es para mantenerla viva: hosting, dominio, que no se caiga, hacerle cambios cuando los necesites. Si no hay mensualidad, la página se apagaría al año. Piénsalo como la renta de tu local, pero del local digital.',
  },
  {
    pregunta: 'Está caro, en internet me la hacen por $50 USD',
    respuesta:
      'Claro, y si con eso te sirve, adelante. La diferencia es que estoy aquí en Los Mochis, me escribes por WhatsApp y te respondo el mismo día, te hago cambios cada mes, y me encargo de que aparezcas en Google. El de internet se desaparece el día que entrega — aquí estamos todo el año.',
  },
  {
    pregunta: '¿En cuánto tiempo queda lista?',
    respuesta:
      'Entre 3 y 5 días hábiles desde que recibo toda tu información (contenido y fotos). Si nos mandas todo un lunes, el viernes o sábado ya estás en Google.',
  },
  {
    pregunta: '¿Puedo cancelar cuando quiera?',
    respuesta:
      'Sí, sin penalizaciones ni contratos de permanencia. Cancelas el mes que quieras; el sitio queda dado de baja al final del periodo pagado.',
  },
];
