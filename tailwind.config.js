/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'md': {'max': '767px'},
      'lg': {'min': '1024px'},
      
    },
    extend: {
      colors: {
        'primary-text': '#1D1F52',
      },
    },
  },
  plugins: [],
}