import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: false })],
  site: 'https://tu-app.co',
  compressHTML: true,
  build: { inlineStylesheets: 'auto' },
});
