/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./pages/**/*.tsx', './src/**/*.tsx'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    // Responsive kırılma noktaları
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    // Temanın genel font büyüklükleri
    fontSize: {
      sm: '0.813rem',
      md: '1rem',
    },
    extend: {
      colors: {
        // Örnek renkler
        primary: {
          base: '#1C9BEF',
          darken: '#188CD8',
          lighten: 'hsl(203, 89%, 96%)',
        },
        secondary: {
          black: '#14171A',
          darkGray: '#657786',
          lightGray: '#AAB8C2',
          extraLightGray: '#E7E7E8',
          lightestGray: '#eff3f4',
          hoverGray: '#F7F7F7',
          trendsColor: '#f7f9f9',
        },
      },
      boxShadow: {
        sm: '0 2px 4px 0 rgb(0 0 0 / 20%)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
