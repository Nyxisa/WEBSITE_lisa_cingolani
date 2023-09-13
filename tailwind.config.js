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
      },
      fontFamily: {
        komet: ['komet', 'sans-serif',],
        itc: ['itc-avant-garde-gothic-pro', 'sans-serif',]
      },
      fontSize: {
      'sm':'0.875rem', //14px//
      'base':'1rem', //16px//
      'lg':'1.25rem', //20px//
      'xl':'1.5rem', //24px// 
      '2xl':'2rem', //32px//
      '3xl':'2.5rem', //40px//
      '4xl':'3rem', //48px//
      '5xl':'4rem', //64px//
       },
      boxShadow: {
        '1': '0px 4px 4px rgba(0, 0, 0, 0.25);',
      },
      extend: {
      gridTemplateColumns: {
        principal: 'repeat(12, minmax(0, 64px))'
      }
    }
  },
  plugins: [],
};
