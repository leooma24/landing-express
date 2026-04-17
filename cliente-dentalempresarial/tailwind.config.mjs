/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primario: 'rgb(var(--color-primario) / <alpha-value>)',
        secundario: 'rgb(var(--color-secundario) / <alpha-value>)',
        acento: 'rgb(var(--color-acento) / <alpha-value>)',
        texto: 'rgb(var(--color-texto) / <alpha-value>)',
        fondo: 'rgb(var(--color-fondo) / <alpha-value>)',
        superficie: 'rgb(var(--color-superficie) / <alpha-value>)',
        tenue: 'rgb(var(--color-tenue) / <alpha-value>)',
        linea: 'rgb(var(--color-linea) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-sm': ['clamp(1.875rem, 3vw, 2.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['clamp(2.25rem, 4vw, 3.5rem)', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'display-xl': ['clamp(2.75rem, 5vw, 4.5rem)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
