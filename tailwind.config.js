module.exports = {
  content: [
    "./components/**/*.{js,vue}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.js",
    "./nuxt.config.js",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
    },
    colors: {
      'black': '#000000',
      'white': '#ffffff',
      'purple': '#1c0c32',
      'pink': '#ce1cd3',
      'orange': '#f28314'
    },
    extend: {},
  },
  plugins: [],
}
