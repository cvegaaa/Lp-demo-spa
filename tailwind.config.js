/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Verde salvia — primario del sector spa
        sage: {
          50: '#f4f6f1',
          100: '#e6ebe0',
          200: '#cdd7c1',
          300: '#a9bba0',
          400: '#7e9571',
          500: '#5d7853',
          600: '#485f42',
          700: '#3a4d37',
          800: '#31402e',
          900: '#2a3527',
        },
        // Arena cálida — neutros del sector
        sand: {
          50: '#fbf8f3',
          100: '#f5efe3',
          200: '#e9dcc4',
          300: '#dcc6a1',
          400: '#c9a87d',
          500: '#bb8f63',
          600: '#a97953',
          700: '#8c6146',
          800: '#73503c',
          900: '#5f4332',
        },
        // Crema claro — fondo principal
        cream: {
          50: '#fdfcf8',
          100: '#faf7ef',
          200: '#f4eee0',
        },
        // Terracota arcilloso — acento
        clay: {
          50: '#fbf2ee',
          100: '#f5e0d6',
          200: '#e9c2b0',
          300: '#db9f87',
          400: '#cd7d62',
          500: '#bd6450',
          600: '#a85144',
          700: '#8c413b',
          800: '#733936',
          900: '#5f322f',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
