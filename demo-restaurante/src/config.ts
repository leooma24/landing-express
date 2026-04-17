/**
 * CONFIG.TS - Demo: Mariscos El Malecón (Los Mochis, Sinaloa)
 * Dirección: Playfair + Lora + tonos cálidos + HERO SPLIT + sección MENÚ + TESTIMONIOS
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
  nombre: 'Mariscos El Malecón',
  tagline: 'Sabor del mar · Los Mochis',
  descripcionCorta:
    'Los mariscos más frescos de Sinaloa, directo del Golfo a tu mesa. Ambiente familiar, porciones generosas, recetas de la abuela.',
  whatsapp: '526684567890',
  whatsappMensaje: 'Hola, quisiera hacer un pedido o reservar mesa.',
  telefono: '+52 668 456 7890',
  email: 'pedidos@mariscoselmalecon.mx',
  direccion: {
    calle: 'Av. Gabriel Leyva Solano #789, Col. Centro',
    ciudad: 'Los Mochis',
    estado: 'Sinaloa',
    codigoPostal: '81223',
    mapaEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8!2d-109.001!3d25.795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQ3JzQyLjAiTiAxMDnCsDAwJzAzLjYiVw!5e0!3m2!1ses!2smx!4v1700000000000',
  },
  horarios: [
    { dia: 'Lunes', apertura: '11:00', cierre: '21:00' },
    { dia: 'Martes', apertura: '11:00', cierre: '21:00' },
    { dia: 'Miércoles', apertura: '11:00', cierre: '21:00' },
    { dia: 'Jueves', apertura: '11:00', cierre: '21:00' },
    { dia: 'Viernes', apertura: '11:00', cierre: '22:00' },
    { dia: 'Sábado', apertura: '11:00', cierre: '22:00' },
    { dia: 'Domingo', apertura: '11:00', cierre: '20:00' },
  ],
  colores: {
    primario: '180 83 9',
    secundario: '120 53 15',
    acento: '245 158 11',
    texto: '41 25 14',
    fondo: '252 243 230',
    superficie: '247 232 207',
    tenue: '120 83 47',
    linea: '214 193 160',
  },
  fuentes: {
    display: {
      nombre: 'Playfair Display',
      query: 'Playfair+Display:ital,wght@0,600;0,700;0,800;0,900;1,600;1,700',
      familia: '"Playfair Display", Georgia, serif',
    },
    body: {
      nombre: 'Lora',
      query: 'Lora:ital,wght@0,400;0,500;0,600;1,400;1,500',
      familia: '"Lora", Georgia, serif',
    },
  },
  densidad: 'amplio',
  bordes: 'rectos',
  tratoImagen: 'calido',
  mostrarNumeros: true,
  animaciones: {
    entrada: true,
  },
  estructura: {
    orden: ['hero', 'menu', 'nosotros', 'galeria', 'testimonios', 'ubicacion', 'contacto'],
    variantes: {
      hero: 'split',
      nosotros: 'editorial',
      galeria: 'masonry',
      ubicacion: 'editorial',
      contacto: 'editorial',
      menu: 'carta',
      testimonios: 'grid',
    },
  },
  logo: '/logo.svg',
  heroImagen: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&q=80',
  heroCtaTexto: 'Ordena por WhatsApp',
  servicios: [],
  sobreNosotros: {
    titulo: 'Tradición familiar desde 2008',
    texto:
      'Don Ramiro abrió El Malecón con una idea simple: servir los mariscos como se hacían en su casa, con producto del día y recetas que pasan de generación en generación. Hoy, con su hijo en la cocina y su hija al frente del comedor, seguimos siendo el mismo negocio familiar que conoció Los Mochis hace más de 15 años. Nos surtimos directo con pescadores del puerto de Topolobampo.',
    imagen: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
    estadisticas: [
      { etiqueta: 'Años', valor: '15+' },
      { etiqueta: 'Platillos', valor: '40+' },
      { etiqueta: 'Calificación', valor: '4.8★' },
    ],
  },
  galeria: [
    { src: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80', alt: 'Aguachile de camarón' },
    { src: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=800&q=80', alt: 'Tacos de pescado' },
    { src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80', alt: 'Pescado zarandeado' },
    { src: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=800&q=80', alt: 'Ceviche mixto' },
    { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80', alt: 'Ambiente del restaurante' },
    { src: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80', alt: 'Coctel de camarón' },
  ],
  menu: {
    titulo: 'Nuestra carta',
    descripcion: 'Mariscos frescos del Golfo, recetas de casa. Todos los días pescado del día.',
    categorias: [
      {
        nombre: 'Entradas y Cocteles',
        items: [
          { nombre: 'Aguachile verde', descripcion: 'Camarón crudo en limón, chile serrano, cilantro, pepino y aguacate.', precio: '$185', destacado: true },
          { nombre: 'Aguachile negro', descripcion: 'Camarón crudo en salsa de chile habanero negro, cebolla morada y limón.', precio: '$195' },
          { nombre: 'Coctel de camarón grande', descripcion: 'Camarón cocido en salsa mexicana con aguacate, cebolla y cilantro.', precio: '$165' },
          { nombre: 'Ceviche mixto', descripcion: 'Pescado, camarón y callo picados en limón con verduras frescas.', precio: '$175' },
          { nombre: 'Tostada de atún sellado', descripcion: 'Atún sellado estilo asiático con soya, aguacate y cebollín.', precio: '$95' },
        ],
      },
      {
        nombre: 'Platillos Principales',
        items: [
          { nombre: 'Pescado Zarandeado', descripcion: 'Pescado entero a la brasa con salsa roja de la casa. Para compartir.', precio: '$420', destacado: true },
          { nombre: 'Filete Culichi', descripcion: 'Filete de pescado bañado en salsa Culichi cremosa con chile poblano.', precio: '$245' },
          { nombre: 'Camarones a la Diabla', descripcion: 'Camarones gigantes en salsa de chile guajillo y árbol. Pica.', precio: '$265' },
          { nombre: 'Molcajete Marinero', descripcion: 'Camarón, pulpo, pescado, callo y verduras en molcajete caliente. Para 2.', precio: '$520', destacado: true },
          { nombre: 'Marlín al gusto', descripcion: 'Ahumado, al mojo de ajo o empanizado. Acompañado de arroz y ensalada.', precio: '$215' },
          { nombre: 'Jaiba rellena gratinada', descripcion: 'Jaiba rellena de mariscos con queso gratinado al horno.', precio: '$235' },
        ],
      },
      {
        nombre: 'Tacos de la Casa',
        items: [
          { nombre: 'Tacos Gobernador (3 pzas)', descripcion: 'Tortilla de harina con camarón, queso y pimientos. Especialidad.', precio: '$175', destacado: true },
          { nombre: 'Tacos de pescado estilo Ensenada (3 pzas)', descripcion: 'Pescado capeado con repollo, crema y salsa.', precio: '$145' },
          { nombre: 'Tacos de marlín ahumado (3 pzas)', descripcion: 'Marlín guisado con chile, tomate y cebolla.', precio: '$135' },
        ],
      },
      {
        nombre: 'Bebidas',
        items: [
          { nombre: 'Michelada El Malecón', descripcion: 'Con clamato, camarón y aderezo de la casa.', precio: '$85' },
          { nombre: 'Cerveza nacional', descripcion: 'Pacífico, Tecate, Corona, Victoria.', precio: '$45' },
          { nombre: 'Agua fresca del día', descripcion: 'Jamaica, horchata, tamarindo.', precio: '$35' },
          { nombre: 'Coco helado con limón y chile', descripcion: 'Clásico del puerto, directo del coco.', precio: '$55' },
        ],
      },
    ],
  },
  testimonios: {
    titulo: 'Clientes que vuelven cada fin de semana',
    descripcion: 'Somos un negocio familiar, y así nos sentimos: como familia.',
    lista: [
      {
        nombre: 'Roberto Medina',
        tratamiento: 'Cliente desde 2012',
        texto: 'El aguachile negro es lo mejor que he probado en Los Mochis. Vengo cada sábado con mi familia, el trato siempre es como en casa.',
        estrellas: 5,
      },
      {
        nombre: 'Paola Rivera',
        tratamiento: 'Cliente frecuente',
        texto: 'Pedí a domicilio una cena para 8 personas y llegó perfecta, caliente, completa. El molcajete marinero es una experiencia.',
        estrellas: 5,
      },
      {
        nombre: 'Gerardo Apodaca',
        tratamiento: 'Local habitual',
        texto: 'Llevo 10 años viniendo. Nunca han bajado la calidad del producto. Don Ramiro te atiende personalmente si está en el local.',
        estrellas: 5,
      },
    ],
  },
  redes: {
    facebook: 'https://facebook.com/mariscoselmalecon',
    instagram: 'https://instagram.com/mariscoselmalecon.mx',
    tiktok: 'https://tiktok.com/@mariscoselmalecon',
  },
  formspreeId: 'demo-restaurante',
  seo: {
    titulo: 'Mariscos El Malecón | Restaurante de mariscos en Los Mochis',
    descripcion:
      'Los mariscos más frescos de Los Mochis. Aguachiles, tacos de pescado, camarones, ceviches. Servicio a domicilio. Reserva por WhatsApp.',
    ogImagen: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&q=80',
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
