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
      padding: '15px',
      screens: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
        '2xl': '1140px',
      },
    },
    fontFamily: {
      Shabnam: ['Shabnam_FD', 'sans-serif'],
      Shabnam_B: ['Shabnam_Bold_FD', 'sans-serif'],
    },
  },
  plugins: [require("daisyui")],
}
