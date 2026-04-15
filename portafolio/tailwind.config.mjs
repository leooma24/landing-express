/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0a0a0a',
          900: '#0a0a0a',
          800: '#141414',
          700: '#1f1f1f',
          600: '#2a2a2a',
          500: '#404040',
          400: '#737373',
          300: '#a3a3a3',
          200: '#d4d4d4',
        },
        bone: {
          DEFAULT: '#fafaf7',
          50: '#fefefd',
          100: '#fafaf7',
          200: '#f0ede4',
          300: '#e5e0d2',
        },
        coral: {
          DEFAULT: '#ff4d1f',
          50: '#fff1ec',
          100: '#ffe0d4',
          400: '#ff6b42',
          500: '#ff4d1f',
          600: '#e63d11',
          700: '#bf2f0a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Inter Tight"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'ultra-tight': '-0.05em',
      },
      fontSize: {
        'display-sm': ['clamp(2rem, 3.5vw, 2.75rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display': ['clamp(2.5rem, 4.5vw, 3.75rem)', { lineHeight: '1.02', letterSpacing: '-0.035em' }],
        'display-xl': ['clamp(2.75rem, 5.5vw, 4.75rem)', { lineHeight: '0.98', letterSpacing: '-0.04em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
