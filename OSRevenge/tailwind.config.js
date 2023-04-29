/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'monospace'],
      },
      fontWeight: {
        semibold: '400',
        bold: '500',
        extrabold: '600',
      }
    },
  },
  plugins: [],
}

