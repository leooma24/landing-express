# Carpeta /public — Imágenes del cliente

Reemplaza estos archivos por los del cliente. Los nombres deben coincidir con los definidos en `src/config.ts`.

## Requeridos

| Archivo | Tamaño recomendado | Formato | Uso |
|---|---|---|---|
| `logo.svg` | 200×60 px | SVG / PNG | Logo en header |
| `favicon.svg` | 64×64 px | SVG | Pestaña del navegador |
| `hero.jpg` | 1200×900 px | JPG / WebP | Imagen principal del hero |
| `sobre-nosotros.jpg` | 1200×900 px | JPG / WebP | Imagen de la sección "Sobre nosotros" |
| `og-image.jpg` | 1200×630 px | JPG / PNG | Preview al compartir en redes |
| `galeria-1.jpg` … `galeria-6.jpg` | 800×800 px | JPG / WebP | Cuadrícula de galería (mínimo 6 fotos) |

## Tips de optimización

- Convertir JPGs a WebP con [squoosh.app](https://squoosh.app) — ahorra 40-70% del peso.
- Mantener imágenes bajo 200 KB c/u para cargar en <2s.
- Fotos de personas o producto > fotos de stock genéricas.

## Placeholders rápidos para desarrollo

Si quieres ver el sitio funcionando antes de tener imágenes reales, puedes:
1. Descargar libres de [Unsplash](https://unsplash.com) o [Pexels](https://pexels.com).
2. O usar temporalmente `https://picsum.photos/1200/900` en los `src` de `config.ts`.
