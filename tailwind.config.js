/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
      colors: {
        'purple': '#9D70FF',
        'lightpurple': '#D6C2FE',
        'orange': '#FD4505',
        'lightorange': '#FDC6B3',
        'lightblack': '#212121',
        'lightwhite': '#F4F4F4',
        'black': '#000000',
        'white': '#ffffff',
        'grey': '#757575',
        'lightgrey': '#D4D4D4',
        'transparent': 'transparent',
      },
      fontFamily: {
        halyard: ['halyard-display-variable', 'sans-serif',],
        itc: ['itc-avant-garde-gothic-pro', 'sans-serif',]
      },
      fontSize: {
      'xs':'0.75rem', //12px Xsmall | M-Small//
      'sm':'0.875rem', //14px Small | M-Body//
      'base':'1rem', //16px Body | M-H4//
      'lg':'1.25rem', //20px H6 | M-H3//
      'xl':'1.5rem', //24px H5 | M-H2// 
      '2xl':'2rem', //32px H4 | M-H1//
      '3xl':'2.5rem', //40px H3//
      '4xl':'3rem', //48px H2//
      '5xl':'4rem', //64px H1//
      '6xl':'5rem', //80px H1//
      '7xl':'6rem', //96px H1//
      '8xl':'7rem', //112px H1//
      'giant':'8rem', //128px PAGE TITLE//
       },
      boxShadow: {
        '1': '0px 4px 4px rgba(0, 0, 0, 0.25);',
        'none': '0px 0px 0px rgba(0, 0, 0, 0);',
        'nav': ' -2px 4px 20px 2px rgba(0, 0, 0, 0.25)',
      },
      extend: {
        borderRadius: {
    'default': '2rem',
    'simple': '1rem',
    }
    }
  },
  plugins: [],
};
