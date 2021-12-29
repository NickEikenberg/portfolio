module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        icon: {
          js: '#EFD81D',
          react: '#61DBFB',
          tailwind: '#06B6D4',
          html: '#DC4C24',
          css: '#254ADD',
          node: '#5DAC46',
          mongodb: '#4BAB3D',
          django: '#44B78B',
        },
        main: {
          purple: '#C7D0F9',
          yellow: '#F9F0C7',
          red: '#F9D7C7',
        },
      },
      fontFamily: {
        josefin: ['Josefin Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
