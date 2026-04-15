# Landing Express

Producto de landing pages para negocios locales en México. **$1,500 MXN pago único + $249 MXN/mes**.

## Estructura

```
landing-express/
├── landing-base/         ← Plantilla reutilizable (la "fábrica")
├── demo-dentista/        ← Demo viva: Clínica Dental Sonríe Más
├── demo-restaurante/     ← Demo viva: Mariscos El Malecón
├── portafolio/           ← Sitio propio tu-app.co (venta)
└── docs/                 ← Brief, checklist, proceso de deploy
```

## Cómo correr cada proyecto

```bash
# Entra a la carpeta que quieras
cd landing-base            # o demo-dentista / demo-restaurante / portafolio

# Si es primera vez en esa carpeta
npm install

# Servidor de desarrollo
npm run dev                # abre http://localhost:4321

# Build de producción (static HTML)
npm run build              # sale en dist/

# Preview del build
npm run preview
```

## Cómo producir un cliente nuevo

1. `cp -r landing-base cliente-nombre`
2. `cd cliente-nombre && npm install`
3. Editar `src/config.ts` (único archivo que cambias por cliente)
4. Subir fotos a `public/`
5. `npm run dev` para revisar
6. `npm run build` y deploy a Cloudflare Pages

Ver [docs/proceso-deploy.md](./docs/proceso-deploy.md) para el paso a paso completo.

## Stack

- **Astro 4** — static site generator
- **Tailwind CSS 3** — estilos
- **TypeScript** — tipado estricto
- **Cloudflare Pages** — hosting gratis
- **Formspree** — formularios (50 envíos/mes gratis)

## Dominio y deploys

| Pieza | URL |
|---|---|
| Portafolio | `https://tu-app.co` |
| Demo dentista | `https://dentista.tu-app.co` |
| Demo restaurante | `https://restaurante.tu-app.co` |
| Cliente | `https://sudominio.com.mx` (el cliente paga el dominio) |

## Documentos

- [brief-cliente.md](./docs/brief-cliente.md) — mensaje de 10 preguntas para WhatsApp
- [checklist-entrega.md](./docs/checklist-entrega.md) — 15 puntos de QA
- [proceso-deploy.md](./docs/proceso-deploy.md) — paso a paso completo

## Precios (referencia interna)

| Paquete | Setup | Mensual |
|---|---|---|
| **Landing Express** (este producto) | $1,500 MXN | $249 MXN |
| Profesional (multipágina, más features) | $3,500 MXN | $499 MXN |
| Premium (IA, chatbot, reservas) | $6,500 MXN | $899 MXN |
