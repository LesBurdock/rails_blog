const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    colors:{
      textRed : 'hsl(356, 100%, 66%)',
      white: 'white',
      veryLightRed: 'hsl(355, 100%, 74%)',
      veryDarkBlue: 'hsl(208, 49%, 24%)',
      White : 'hsl(0, 0%, 100%)',
     grayishBlue: 'hsl(240, 2%, 79%)',
     VeryDarkGrayishBlue: 'hsl(207, 13%, 34%)',
     Verydarkdesaturatedblue: 'hsl(237, 23%, 32%)', 
      VeryDarkBlackBlue:'hsl(240, 10%, 16%)',
      transparent: 'transparent',
    },
    extend: { 
      fontFamily: {
        'Ubuntu': ['Ubuntu', 'sans'],
        'overpass': ['Overpass','sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ]
}

