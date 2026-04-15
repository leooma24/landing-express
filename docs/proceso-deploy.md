# Proceso de deploy — del brief al sitio en vivo

Guía paso a paso para producir un cliente nuevo. Tiempo objetivo: **2-3 horas efectivas**.

---

## Paso 0 — Antes de empezar

- Tener el brief completo del cliente (ver `brief-cliente.md`)
- Tener las fotos (mínimo 6-8, optimizadas si es posible)
- Tener el 50% de anticipo cobrado
- Tener a la mano el nombre del dominio acordado

---

## Paso 1 — Clonar plantilla (5 min)

```bash
cd C:\laragon\www\landing-express
cp -r landing-base cliente-[nombrecorto]
cd cliente-[nombrecorto]
# Actualizar "name" en package.json a "cliente-nombrecorto"
npm install
```

El nombre corto: todo minúsculas, sin espacios, sin acentos. Ej: `sonriemas`, `malecon`, `taco-juan`.

---

## Paso 2 — Llenar config.ts con Claude (15-20 min)

Copia el brief del cliente y pásalo a Claude con este prompt:

> Toma esta información de un negocio en [ciudad], México y genera el archivo `src/config.ts` completo para la plantilla Landing Express. Instrucciones:
>
> - Tono: profesional-cercano, español mexicano natural (no neutro acartonado).
> - El tagline debe ser corto (máximo 8 palabras) y vendedor.
> - Descripciones de servicios: 1-2 líneas cada una, beneficio claro, sin palabrería.
> - Sección "Sobre nosotros": 3-4 líneas con historia/diferenciador. Honesto, no exagerar.
> - Elige paleta de colores coherente con el rubro si el cliente no especificó. Formato: `"R G B"` (ej. "14 165 233"). Respétala en primario/secundario/acento.
> - SEO: título de 50-60 caracteres, descripción 140-155 caracteres, siempre incluyendo ciudad.
> - whatsappMensaje: algo natural tipo "Hola, vi su página y me interesa..."
> - Usa emojis apropiados para los iconos de servicios.
>
> Aquí está la información:
> [PEGAR BRIEF]

Claude te devuelve el archivo listo. Cópialo a `src/config.ts`. Revisa que:
- Los colores tengan buen contraste (negro sobre claro, blanco sobre oscuro).
- El número de WhatsApp esté en formato internacional sin `+` ni guiones: `526681234567`.
- El `mapaEmbed` tenga el link correcto de Google Maps (lo sacas con "Compartir → Incorporar mapa").

---

## Paso 3 — Fotos del cliente (20-30 min)

1. Copiar las fotos del cliente a `public/`.
2. Renombrarlas según lo que espera `config.ts`:
   - `hero.jpg` → foto principal
   - `sobre-nosotros.jpg` → foto del dueño o local
   - `galeria-1.jpg` a `galeria-6.jpg` (o más)
   - `og-image.jpg` → versión 1200×630 para compartir
   - `logo.svg` o `logo.png`
3. Optimizar cada imagen con [squoosh.app](https://squoosh.app). Meta: <200 KB cada una.
4. Correr `npm run dev` y revisar que todo se vea bien. Iterar.

---

## Paso 4 — Revisión local y con el cliente (15 min)

```bash
npm run dev
# abrir http://localhost:4321
```

Probar:
- Móvil (DevTools → responsive, iPhone 14 Pro).
- Desktop.
- Todos los botones.
- Que el WhatsApp abra con el número correcto.

Mandar screenshot o video al cliente por WhatsApp. Si tiene cambios → aplicarlos. Si no → siguiente paso.

---

## Paso 5 — Deploy a Cloudflare Pages (20 min)

### 5.1 — Subir a un repo de GitHub
```bash
git init
git add .
git commit -m "Initial commit - [Cliente]"
gh repo create cliente-[nombrecorto] --private --source=. --push
```

### 5.2 — Crear proyecto en Cloudflare Pages
1. Entrar a [dash.cloudflare.com](https://dash.cloudflare.com) → Workers & Pages → Create
2. Connect to Git → elegir el repo recién creado
3. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output: `dist`
4. Deploy. Espera ~2 min.

### 5.3 — Conectar dominio del cliente
1. En Cloudflare, elegir "Add a domain" para el proyecto
2. Si el dominio está registrado en Cloudflare → automático
3. Si está en otro registrador (GoDaddy, NameCheap) → apuntar nameservers a Cloudflare, o usar CNAME al `pages.dev` temporal
4. Esperar a que SSL se active (5-30 min)

---

## Paso 6 — Configurar Google Business (15-20 min)

1. [business.google.com](https://business.google.com) → "Administrar ahora"
2. Buscar el negocio del cliente. Si no existe, crearlo.
3. Llenar:
   - Nombre, categoría, dirección, zona de servicio
   - Teléfono y página web (**la URL que acabamos de publicar**)
   - Horarios
   - Descripción del negocio (reusar la del config.ts)
4. Subir 3-5 fotos.
5. Verificación por postal (si es primera vez — el código llega en 5-14 días).
6. Pedirle al cliente que confirme cuando reciba el código.

---

## Paso 7 — Analytics y formspree (10 min)

### GA4
1. [analytics.google.com](https://analytics.google.com) → crear propiedad para el cliente
2. Copiar el Measurement ID (`G-XXXXXXXXXX`)
3. Pegarlo en `config.ts` como `analyticsId`
4. Re-deploy (git push automático)
5. Verificar en Realtime que llegan visitas

### Formspree
1. [formspree.io](https://formspree.io) → New form → nombre: "Contacto — [Cliente]"
2. Correo receptor: el del cliente
3. Copiar el form ID (`xxxxxxxx`)
4. Pegarlo en `config.ts` como `formspreeId`
5. Re-deploy

---

## Paso 8 — Checklist final de entrega

Ir a [checklist-entrega.md](./checklist-entrega.md) y ejecutar los 15 puntos. **No marcar como entregado hasta que todos los checks pasen.**

---

## Paso 9 — Entrega al cliente

Mensaje tipo:

> ¡Listo [Nombre]! Su página ya está en vivo en **[https://...]**
>
> Ya está conectada a Google Maps y a su WhatsApp (haga la prueba). En un par de días empezará a aparecer cuando la gente lo busque en Google.
>
> Le mandé invitación por correo para que pueda ver las estadísticas de visitas.
>
> Quedo pendiente del pago restante ($750) y del cobro mensual que arrancaría el [fecha]. Cualquier cambio que necesite, me escribe aquí. ¡Gracias por la confianza!

---

## Paso 10 — Seguimiento (día 3, día 30)

- **Día 3:** "Hola [Nombre], ¿ya probó la página? ¿Algún ajuste?"
- **Día 15:** Mandar primer reporte simple de visitas (aunque sean pocas).
- **Día 30:** Cobrar la primera mensualidad + hacerle 1 actualización proactiva aunque no la haya pedido (ej. "le actualicé las fotos de galería con más calidad").

Este seguimiento es lo que convierte clientes en clientes de por vida.
