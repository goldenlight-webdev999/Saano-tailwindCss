/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      screens: {
        'xxs': '320px',
        // => @media (min-width: 320px) { ... }

        'xs': '390px',
        // => @media (min-width: 390px) { ... }

        'sm': '576px',
        // => @media (min-width: 575px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '992px',
        // => @media (min-width: 992px) { ... } 

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1366px',
        // => @media (min-width: 1440px) { ... }

        '3xl': '1600px',
        // => @media (min-width: 1600px) { ... }
        '4xl': '1920px',
        // => @media (min-width: 1920px) { ... }
      },
      backgroundImage: {
        'bg-clr': 'radial-gradient(70.71% 70.71% at 50% 50%, #50E5FA 0%, #352E85 61.00%, #2E0068 100%)',
        'card-bg': ' linear-gradient(136deg, rgba(80, 229, 250, 0.20) 0%, rgba(46, 0, 104, 0.15) 100%)',
        'menu-bg': 'linear-gradient(#50e5fa, #2e0068)',
      },
      dropShadow: {

      },
      boxShadow: {

      },
      fontFamily: {
        "plus-jakarta": 'Plus Jakarta Sans',
        "inter": 'Inter',
      },
      fontSize: {

      },
      colors: {
        "pink-1000": "#50E5FA",
        'black-1000': '#0E021E',
        'blue-1000': '#2e0068',
        'gray-1000': '#F3F1F4',
        'black-1100': '#222',
        'd-black': '#0E021E',
        'sky-blue': '#50E5FA',
        'purple': '#2e0068',
        'white': '#fff',
        'dd-black': '#191A1C',
        'bg-cards': '#f3f1f4',
        'dark-purple': '#2e0068',
        'ftr-btn': 'rgba(255, 255, 255, 0.05)',
        'nav-clr': '#222',
        'light-gray': 'rgba(14, 2, 30, .1)',
        'gray-1300': 'rgba(21, 6, 2, .15)',
        'gray-1200': '#ddd',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}