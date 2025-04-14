//const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  safelist: [
    'md:col-span-2', // <-- add this
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
     verydarkdesaturatedblue:'hsl(237, 23%, 32%)', 
      veryDarkBlackBlue:'hsl(240, 10%, 16%)',
      transparent:'transparent',
    },
      fontFamily: {
        'Ubuntu': ['Ubuntu', 'sans'],
        'overpass': ['Overpass','sans-serif'],
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

