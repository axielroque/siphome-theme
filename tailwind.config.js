module.exports = {
  content: [
    './static/**/*.{css,js}',
    "./views/**/*.{html,js,css,twig}"
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '960px',
        md: '1024px',
        lg: '1140ppx',
        xl: '1320px',
        '2xl': '1600px',
      },
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#fff',
        solidBlack: '#262B35',
        blue: '#1C57C9',
        green: '#1ECE7A',
        gray: '#606C84',
        'slate': {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
        },
        'tahiti': {
          light: '#67e8f9',
          DEFAULT: '#06b6d4',
          dark: '#0e7490',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}