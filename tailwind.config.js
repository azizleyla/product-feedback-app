module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '2rem',
          xl: '3rem',
          '2xl': '4rem',
        },
      },
      flex: {
        '2': '2 2 0%'
      }

    },
  },
  plugins: [],
}
