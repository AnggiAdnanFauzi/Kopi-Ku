/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0f1f15',
          green: '#1b4d3e',
          light: '#f5f5f5',
          accent: '#c8a97e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Quicksand"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

