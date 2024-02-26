/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      poppins: [ 'Poppins','sans-serif'],
      oswald: ['Oswald', 'sans-serif'],
      protestGuerilla: ['Protest Guerrilla', 'sans-serif']
    },
    extend: {
      colors: {
        'primary-bg':'#000',
        'secondary-bg':'#131717',
        'secondary-variant-bg':'#4c4f4e',
        'primary-color':'#32f0dc',
        'primary-text':'#fff',
        'secondary-text':'#c6c8c7'
        }
    },
  },
  plugins: [],
}
