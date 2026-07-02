/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FFF8ED',
          100: '#FEEFD0',
          200: '#FDD9A0',
          300: '#FBBD65',
          400: '#F9A038',
          500: '#F8931F',
          600: '#E07A0A',
          700: '#B95F0B',
          800: '#934B10',
          900: '#783E11',
        },
        navy: {
          50: '#EFF5FD',
          100: '#D9E8FB',
          200: '#B4D1F7',
          300: '#7CAFED',
          400: '#3E84DF',
          500: '#1A6CC8',
          600: '#0E4C92',
          700: '#0A3870',
          800: '#082E5D',
          900: '#06244A',
        },
        cream: {
          50: '#FDFAF5',
          100: '#FAF4E8',
          200: '#F3E6CE',
          300: '#E9D2AB',
          400: '#DCB87E',
          500: '#CFA060',
        },
      },
      fontFamily: {
        arabic: ['"Noto Naskh Arabic"', 'serif'],
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'grain-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F8931F' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
