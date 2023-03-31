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
        main2:'#1b8bb3',
      },
    },
    container: {
      center: true,
    },
    fontFamily: {
      Shabnam: ['Shabnam_FD', 'sans-serif'],
      Shabnam_B: ['Shabnam_Bold_FD', 'sans-serif'],
    },
  },
  plugins: [require("daisyui")],
}
