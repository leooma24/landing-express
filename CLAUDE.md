# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Monorepo of landing pages for local Mexican businesses. One factory (`landing-base`) + a handful of live demos + per-client instantiations, all sharing the same architecture. Product is sold as "Landing Express": $1,500 MXN setup + $249 MXN/mo.

## Stack

- **Astro 4** static site generator, TypeScript strict
- **Tailwind CSS 3** with CSS variables for theming
- **Formspree** for contact forms (50 free/month)
- **Hosted on DigitalOcean droplet** (`tu-app.co`, 206.189.203.228) via Apache + Let's Encrypt. README still says "Cloudflare Pages" but actual practice moved to the droplet — see Deploy section.

## Layout

```
landing-express/
├── landing-base/         Factory. Copy from here for new clients.
├── demo-dentista/        Live demo, dental clinic shape.
├── demo-restaurante/     Live demo, restaurant shape.
├── portafolio/           tu-app.co — the owner's own site. DIFFERENT config shape.
├── cliente-*/            Per-client instantiations (cliente-supertortas, cliente-dentalempresarial…).
└── docs/                 Brief, checklist, deploy process (aspirational in places).
```

Each project is an independent Astro app with its own `node_modules`. Commands must run from inside the project folder, not the repo root.

## Commands (run inside each project folder)

```bash
npm install              # First time only
npm run dev              # http://localhost:4321 (Astro picks next free port if busy)
npm run build            # Static output to dist/
npm run preview          # Preview the build
```

There are no tests. Verify UI changes by running `npm run dev` and opening the browser.

## Architecture: the config-driven pattern

The whole product is built around one rule: **one client = one edited `src/config.ts`**. Components read from `business` (a typed `BusinessConfig` object); nothing is hardcoded.

Portafolio is the exception — it exports `site` with a flat, different shape. Don't try to unify them.

### Sections and variants

Sections aren't rendered by `index.astro` directly. Instead:

1. `config.ts` declares `estructura.orden: SeccionId[]` (which sections appear, in what order) and `estructura.variantes` (which variant each section uses).
2. [src/pages/index.astro](landing-base/src/pages/index.astro) maps over `estructura.orden` and delegates to [SeccionRenderer.astro](landing-base/src/components/SeccionRenderer.astro).
3. `SeccionRenderer` looks up `sections/{Seccion}/{Variante}.astro` in its import map and renders it.

**Adding a new variant** (e.g. a new hero style):
1. Create `src/sections/Hero/HeroThing.astro` in **all 4 base projects** (landing-base + demo-dentista + demo-restaurante + portafolio doesn't use hero variants, so 3 there). Mirror across existing `cliente-*` too if you want them to pick it up without recopying.
2. Import + register in the `map` inside `SeccionRenderer.astro` for each of those projects.
3. Extend `VariantePorSeccion` type in `config.ts` for each of those projects.

Currently registered hero variants: `editorial`, `split`, `corporativo`, `clinico`. Servicios: `lista`, `cards`, `dos-columnas`. Other sections (nosotros, galeria, ubicacion, contacto, menu, tratamientos, testimonios) have one variant each.

### Theming tokens

Colors in `config.ts` are stored as `"R G B"` triplets (e.g. `"1 82 101"`). [Layout.astro](landing-base/src/layouts/Layout.astro) injects them as CSS vars, and [tailwind.config.mjs](landing-base/tailwind.config.mjs) exposes them as `rgb(var(--color-primario) / <alpha-value>)` so `bg-primario/10` etc. work. Eight tokens total: primario, secundario, acento, texto, fondo, superficie, tenue, linea.

Other style levers in config: `densidad` (compacto/normal/amplio), `bordes` (rectos/suaves/redondeados), `tratoImagen` (ninguno/grayscale/contraste/calido), `fuentes.display` + `fuentes.body` loaded from Google Fonts at build time.

### Optional config fields — the mirror rule

New features must be **optional** in `BusinessConfig` so existing projects keep working without edits. The `config.ts` interface is copy-pasted into each project (no shared types package), so **any interface change must be mirrored across landing-base + both demos + every `cliente-*`**. Default behavior must match what existed before — use `flag !== false` or `flag === true` patterns depending on opt-in vs opt-out.

Current optional hero-related fields (all gated, all safe to omit): `topBar`, `logoTipo: 'texto' | 'imagen'`, `heroEyebrow`, `heroTitulo`, `heroTelefonoCta`, `trustStrip[]`, `Servicio.imagen`, `animaciones.entrada`.

### Motion

Animations respect OS `prefers-reduced-motion` (handled in [global.css](landing-base/src/styles/global.css)). If animations "don't work" in one browser, check OS reduce-motion before touching code — that's bitten us before.

## New client flow

```bash
cp -r landing-base cliente-<nombre>
cd cliente-<nombre>
# edit package.json: name → "cliente-<nombre>"
# edit src/config.ts (entire identity: colors, fonts, content, variants)
# drop photos into public/
npm install
npm run dev
```

Reference docs (slightly out of date on the Cloudflare Pages step, otherwise accurate): [docs/proceso-deploy.md](docs/proceso-deploy.md), [docs/brief-cliente.md](docs/brief-cliente.md), [docs/checklist-entrega.md](docs/checklist-entrega.md).

## Deploy (production)

**Target:** DigitalOcean droplet `root@tu-app.co` (206.189.203.228). Ubuntu 20.04 + Apache 2.4 + certbot + Node 20 are pre-installed. One repo clone at `/var/www/landing-express/` holds all subprojects; each client subfolder has its own built `dist/`.

**Subdomain convention:** `<clientshort>.tu-app.co`. DNS A record in GoDaddy on the `tu-app.co` zone pointing to the droplet IP. Existing: docfacil, lavadofacil, organizador, rentafacil, services, todo, torneodefutbolpro.com, and clients like dentalempresarial.

**Flow for a new client deploy:**

1. Locally: `npm run build` to verify the build works, then `git push origin main` (commits land on the monorepo's main).
2. SSH: `ssh root@tu-app.co`
3. On the server:
   ```bash
   cd /var/www/landing-express && git pull
   cd cliente-<nombre> && npm install && npm run build
   cat > /etc/apache2/sites-available/<subdomain>.tu-app.co.conf <<EOF
   <VirtualHost *:80>
       ServerName <subdomain>.tu-app.co
       DocumentRoot /var/www/landing-express/cliente-<nombre>/dist
       <Directory /var/www/landing-express/cliente-<nombre>/dist>
           Options -Indexes +FollowSymLinks
           AllowOverride All
           Require all granted
       </Directory>
       ErrorLog \${APACHE_LOG_DIR}/<subdomain>-error.log
       CustomLog \${APACHE_LOG_DIR}/<subdomain>-access.log combined
   </VirtualHost>
   EOF
   a2ensite <subdomain>.tu-app.co.conf
   apache2ctl configtest
   systemctl reload apache2
   # Wait for DNS (dig +short <subdomain>.tu-app.co must return the droplet IP), then:
   certbot --apache -d <subdomain>.tu-app.co --non-interactive --agree-tos -m leooma24@gmail.com --redirect
   ```

**Flow for an update to an existing client:** push to main, SSH, `git pull`, `npm run build` in that subfolder. Apache serves static `dist/` — no reload needed unless vhost changed.

## Gotchas

- **Harness guardrails.** The Claude Code harness in auto mode blocks `git push origin main` and `ssh root@tu-app.co ...` by default as production-safety rails. Permission rules for `Bash(git push *)` and `Bash(ssh *)` in `~/.claude/settings.json` unblock them. Without those, either run the commands manually or switch out of auto mode so the UI prompt appears.
- **CRLF warnings on Windows.** `git add` prints `LF will be replaced by CRLF`. Harmless — `.astro` files get converted on checkout, source control stays LF.
- **Formspree + form IDs.** `formspreeId` in config is the form slug; placeholder IDs won't deliver mail. Create the form at formspree.io and paste its ID before considering a client live.
- **Mirror rule is load-bearing.** If you add a field to `BusinessConfig` in one project and forget to mirror it, TypeScript won't complain in the *other* projects (separate config files, separate type definitions). It'll only break when something tries to read the missing field. Always grep-check across all 4 base projects before committing an interface change.
