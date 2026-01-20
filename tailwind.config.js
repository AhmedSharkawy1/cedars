/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e', // Standard Green
          600: '#16a34a',
          700: '#15803d', // Cedars Green (Logo Match)
          800: '#166534',
          900: '#14532d',
        },
        secondary: {
          500: '#ca8a04', // Gold accent
        },
        neutral: {
          850: '#1f2937',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        arabic: ['Noto Kufi Arabic', 'sans-serif'],
      }
    }
  },
  plugins: [],
}