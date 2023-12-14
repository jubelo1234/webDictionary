/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/App.jsx",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'darkBg': '#050505',
        'darkText': '#fff',
        'darkPur': 'rgb(164, 69, 237)',
        'grey': '#a3a3a3',
        'lightText': '#050505',
        'input': '#dddddd',
        'input2': "#2d2d2d"
      },
      fontFamily: {
        sanse: ["Inter", "sans-serif"],
        serife: ["lora", "serif"],
        monoe: ["Inconsolata", "monospace"],
      },
    },
  },
  plugins: [],
}

