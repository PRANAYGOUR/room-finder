module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7C3AED',
        purple: {
          600: '#7C3AED',
          700: '#6D28D9',
          900: '#2b1156'
        },
        accent: '#06B6D4',
        background: '#0b1020',
        surface: '#0f1724'
      }
    }
  },
  plugins: [],
}
