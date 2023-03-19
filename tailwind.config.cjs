/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
    },
    colors: {
      'primario': '#ff6347',
      'secundario': '#e53935',
      'mute': '#919191',
      'calmo': '#0e6994',
      'blanco': '#f2f2f2',
      'negro': '#292929',
      'verde': '#059933',
    },
    extend: {},
  },
  plugins: [],
};
