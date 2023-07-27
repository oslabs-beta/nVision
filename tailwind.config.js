/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'base': '#adadeb',
      },
    },
  },
  darkMode: 'class',
  plugins: [require("daisyui")],
}

