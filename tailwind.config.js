module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '10vh': '10vh',
        '12vh': '12vh',
      },
      colors: {
        primary: '#0F172A',
        secondary: '#1E293B',
        accent: '#3F926B',
        danger: '#FC1500',
      },
    },
  },
  plugins: [],
}