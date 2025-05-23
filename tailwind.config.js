/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-purple': {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        'lime-green': {
          50: '#f7fee7',
          100: '#ecfccb',
          200: '#d9f99d',
          300: '#bef264',
          400: '#a3e635',
          500: '#84cc16',
          600: '#65a30d',
          700: '#4d7c0f',
          800: '#365314',
          900: '#1a2e05',
        },
        'neon': {
          'green': '#39ff14',
          'purple': '#bf00ff',
          'blue': '#00ffff',
          'pink': '#ff1493',
        }
      },
      boxShadow: {
        'neon-green': '0 0 5px #39ff14, 0 0 10px #39ff14, 0 0 15px #39ff14',
        'neon-purple': '0 0 5px #bf00ff, 0 0 10px #bf00ff, 0 0 15px #bf00ff',
        'neon-blue': '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff',
      }
    },
  },
  plugins: [],
}