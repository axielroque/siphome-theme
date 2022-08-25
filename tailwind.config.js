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
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}