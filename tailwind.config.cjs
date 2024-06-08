module.exports = {
  content: ['./src/**/*.{html,js,ts,vue}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#001219',
        'dark-cyan': '#005F73',
        'cyan': '#0A9396',
        'light-cyan': '#94D2BD',
        'light-yellow': '#E9D8A6',
        'yellow': '#EE9B00',
        'orange': '#CA6702',
        'dark-orange': '#BB3E03',
        'red': '#AE2012',
        'dark-red': '#9B2226',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      boxShadow: {
        light: '0 2px 8px rgba(255, 255, 255, 0.1)',
        medium: '0 4px 12px rgba(255, 255, 255, 0.2)',
        dark: '0 8px 20px rgba(255, 255, 255, 0.4)',
      },
    },
  },
  plugins: [],
};
