/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#60a5fa',
        secondary: '#64748b',
        dark: '#0f172a',
      },
      // keyframes: {
      //   fadeInUp: {
      //     '0%': {
      //       opacity: '0',
      //       transform: 'translateY(30px)',
      //     },
      //     '100%': {
      //       opacity: '1',
      //       transform: 'translateY(0)',
      //     },
      //     animation: {
      //       'fade-in': 'fadeInUp 1s easy-out both',
      //     },
      //   },
      // },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

