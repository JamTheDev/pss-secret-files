/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#835883",
        'secondary': "#B67A9E"
      },
      fontFamily: {
        copal: ["Copal", "sans-serif"],
        montserrat: ['Montserrat', "sans-serif"]
      },
    },
  },
  plugins: [],
}
