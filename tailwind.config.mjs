/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#010E71',
          light: '#0A1A8C',
          dark: '#000842',
        },
        brandblue: {
          DEFAULT: '#0698F8',
          hover: '#0480D4',
          soft: '#E6F4FE',
          // AA-compliant text/link tones on white (≥4.5:1). Keep DEFAULT for fills/icons.
          text: '#0369A1',
          'text-hover': '#075985',
        },
        silver: {
          DEFAULT: '#C5C4C3',
          light: '#E1E1DF',
        },
        offwhite: '#F7F7F6',
        charcoal: '#1C1C1E',
        graytext: '#5A5A5F',
        gold: '#D4A54A',
        success: '#1F9D55',
      },
      fontFamily: {
        heading: ['Sora', 'Sora Fallback', 'system-ui', 'sans-serif'],
        body: ['Inter', 'Inter Fallback', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.25rem, 5vw, 3.75rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'h2': ['clamp(1.75rem, 3.5vw, 2.625rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'h3': ['clamp(1.375rem, 2vw, 1.75rem)', { lineHeight: '1.25' }],
        'body-lg': ['clamp(1rem, 1.2vw, 1.125rem)', { lineHeight: '1.7' }],
        'eyebrow': ['0.8125rem', { lineHeight: '1.2', letterSpacing: '0.12em' }],
      },
      maxWidth: {
        content: '80rem',
      },
      boxShadow: {
        card: '0 1px 3px rgba(1,14,113,0.06), 0 1px 2px rgba(1,14,113,0.04)',
        'card-hover': '0 12px 32px rgba(1,14,113,0.12)',
        cta: '0 8px 24px rgba(6,152,248,0.28)',
      },
      borderRadius: {
        card: '0.875rem',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
};
