/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f1f5fb',
          100: '#dde7f5',
          200: '#b9cdea',
          300: '#8aa9d9',
          400: '#5a80c2',
          500: '#3a5fa5',
          600: '#2c4a85',
          700: '#233b6a',
          800: '#1b2d52',
          900: '#12203d',
          950: '#0b1429',
        },
        gold: {
          50: '#fff9eb',
          100: '#ffefc6',
          200: '#fedf8a',
          300: '#fdca4d',
          400: '#fbb524',
          500: '#f59a0b',
          600: '#d97506',
          700: '#b45309',
        },
        paper: '#faf8f4',
      },
      fontFamily: {
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(18,32,61,0.06), 0 8px 24px rgba(18,32,61,0.06)',
      },
    },
  },
  plugins: [],
}
