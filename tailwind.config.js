/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A84C',
          light: '#D4AF6A',
          dark: '#A8863A',
          muted: 'rgba(201,168,76,0.15)',
        },
        forest: {
          DEFAULT: '#1B3A2D',
          dark: '#122B1E',
          deeper: '#0D2318',
          darkest: '#070F0B',
          light: '#234B3A',
        },
        cream: {
          DEFAULT: '#F5F0E8',
          dark: '#E8DEC8',
        },
      },
      fontFamily: {
        serif: ['"Roboto"', '"DM Sans"', 'serif'],
        sans: ['"DM Sans"', '"Roboto"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
