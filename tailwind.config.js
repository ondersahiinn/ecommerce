module.exports = {
  purge: ['./pages/**/*.tsx', './src/**/*.tsx'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    // Responsive kırılma noktaları
    screens: {
      sm: '576px',
      // => @media (min-width: 576px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '992px',
      // => @media (min-width: 992px) { ... }

      xl: '1200px',
      // => @media (min-width: 1200px) { ... }

      '2xl': '1400px',
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      colors: {
        // Örnek renkler
        primary: {
          base: '#ff6000',
          darken: '#cf4f00',
          lighten: '#ff8438',
          blue: '#6c84fa',
        },
        secondary: {
          black: '#0a0a0a',
          darkGray: '#484848',
          lightDarkGray: '#7B7B7B',
          extraLightGray: '#ccc',
          extraExtraLightGray: '#EEEEEE',
          lightestGray: '#eff3f4',
          buttonGray: '#919191',
          borderColor: '#e5e5e5',
        },
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
