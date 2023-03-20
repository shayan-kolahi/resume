/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#23b4e7',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [require("daisyui")],
}
