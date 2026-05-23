/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        switzer: ['Switzer', 'sans-serif'],
        instrument: ['"Instrument Serif"', 'serif'],
      },
      colors: {
        defaultBlack: '#050816',
        defaultWhite: '#ffffff',
        defaultBlue: '#1362F8',
        lighterBlue: '#3B82FF',
        darkerBlue: '#082C7A',
        defaultGrey: '#4A4A4A',
        primaryDisabled: '#c4c4c4',
        primaryBg: '#070B15',
      },
    },
  },
  plugins: [],
}
