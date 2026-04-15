# Checklist de entrega — 15 puntos

Ejecuta **todos** los puntos antes de marcar el proyecto como entregado al cliente. Sin excepciones.

## Dominio y seguridad
- [ ] Dominio del cliente apunta correctamente al proyecto de Cloudflare Pages
- [ ] `https://` funciona (candadito verde). SSL activo sin warnings
- [ ] Redirect de `http://` → `https://` configurado
- [ ] `www.ejemplo.com` y `ejemplo.com` ambos funcionan (o redirect al preferido)

## Velocidad
- [ ] [PageSpeed Insights](https://pagespeed.web.dev) — score **>90** en mobile
- [ ] Tiempo de carga **<2 segundos** en 4G móvil
- [ ] Todas las imágenes optimizadas (WebP o JPG <200 KB cada una)
- [ ] `loading="lazy"` en imágenes fuera del viewport inicial

## Responsive
- [ ] Se ve bien en iPhone (probar en Safari)
- [ ] Se ve bien en Android (probar en Chrome)
- [ ] Se ve bien en tablet (iPad vertical y horizontal)
- [ ] Se ve bien en desktop 1920px y 1366px
- [ ] Sin scroll horizontal en ninguna resolución

## Funcionalidad
- [ ] Botón flotante de WhatsApp abre chat con el número correcto del cliente
- [ ] Mensaje pre-llenado en WhatsApp tiene sentido para el negocio
- [ ] Todos los botones/CTAs funcionan (Hero, Contacto, navegación)
- [ ] Formulario de contacto envía correctamente al correo del cliente (prueba real)
- [ ] Google Maps muestra la ubicación correcta
- [ ] Links de redes sociales abren los perfiles del cliente en pestaña nueva
- [ ] Links internos (anchors #servicios, #contacto, etc.) hacen scroll suave

## SEO y compartir
- [ ] Título de la pestaña correcto (`<title>`)
- [ ] Meta descripción definida (menos de 160 caracteres)
- [ ] Imagen OG/Twitter Card correcta (probar en [metatags.io](https://metatags.io))
- [ ] `canonical` URL correcta
- [ ] Favicon visible en pestaña
- [ ] Compartir en WhatsApp muestra preview bonito (imagen, título, descripción)

## Google Business
- [ ] Perfil de Google Business creado (o reclamado si ya existía)
- [ ] Dirección verificada (postal enviada si es nuevo)
- [ ] Horarios cargados
- [ ] Link a la página web añadido
- [ ] 3-5 fotos subidas (logo + locales + producto/servicio)
- [ ] Categoría principal y secundarias correctas

## Analytics
- [ ] Google Analytics 4 instalado (verificar en Realtime que registra)
- [ ] Evento de click en WhatsApp configurado (opcional pero recomendado)
- [ ] Cliente tiene acceso al panel de GA4 (darle de alta con su correo)

## Entrega al cliente
- [ ] Correo/WhatsApp con:
  - URL del sitio
  - Acceso a Google Business
  - Acceso a Google Analytics
  - Explicación breve de "qué es la mensualidad"
  - Recordatorio del segundo 50% de pago
- [ ] Factura o recibo enviado
- [ ] Recordatorio automático configurado para cobro mensual (el día 1 de cada mes)

## Post-entrega (día 2-3)
- [ ] Pedirle al cliente que revise y te diga si hay que ajustar algo
- [ ] Pedirle screenshot de cuando comparte la página con alguien por WhatsApp
- [ ] Pedir testimonio breve si quedó contento (para usar en tu portafolio)
