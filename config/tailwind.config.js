//const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  safelist: [
    'md:col-span-2', 'space-y-6', 'space-y-2', 'space-x-4' // <-- add this
  ],
  theme: {
    extend:{
    colors:{
      textRed:'hsl(356, 100%, 66%)',
      veryLightRed:'hsl(355, 100%, 74%)',
      veryDarkBlue:'hsl(208, 49%, 24%)',
      white:'hsl(0, 0%, 100%)',
     grayishBlue:'hsl(240, 2%, 79%)',
     veryDarkGrayishBlue:'hsl(207, 13%, 34%)',
     veryDarkGrayBlue:'hsl(237, 17%, 21%)',
     verydarkdesaturatedblue:'hsl(237, 23%, 32%)', 
      veryDarkBlackBlue:'hsl(240, 10%, 16%)',
      transparent:'transparent',
    },
           fontFamily: {
        overpass: ['Overpass', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      fontWeight: {
        light: 300,   // Overpass Light
        normal: 400,  // Ubuntu Regular
        medium: 500,  // Ubuntu Medium
        semibold: 600, // Overpass SemiBold
        bold: 700,    // Ubuntu Bold
      },
      fontSize: {
        base: ['16px', { lineHeight: '1.5' }], // default body size
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ]
}

