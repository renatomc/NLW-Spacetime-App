/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        title: 'Roboto_700Bold',
        body: 'Roboto_400Regular',
        alt: 'BaiJamjuree_700Bold',
      },
      colors: {
        gray: {
          50: '#eaeaea',
          100: '#bebebf',
          200: '#9e9ea8',
          300: '#727275',
          400: '#56565a',
          500: '#3c3c31',
          600: '#28282d',
          700: '#1f1f23',
          800: '#18181b',
          900: '#121215',
        },
        purple: {
          50: '#f3eefc',
          100: '#d8cbf7',
          200: '#c6b2f3',
          300: '#ab8eee',
          400: '#9b79ea',
          500: '#8257e5',
          600: '#764fd8',
          700: '#5c3ea3',
          800: '#48387e',
          900: '#372568',
        },
        green: {
          50: '#e6fbef',
          100: '#b1f1ce',
          200: '#8cebb6',
          300: '#57e295',
          400: '#36dc81',
          500: '#84d361',
          600: '#84c858',
          700: '#839645',
          800: '#027453',
          900: '#025929',
        },
      },
    },
  },
  plugins: [],
}
