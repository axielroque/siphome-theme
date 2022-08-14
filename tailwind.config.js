module.exports = {
  content: [
    './static/**/*.{css,js}',
    "./views/**/*.{html,js,css,twig}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}