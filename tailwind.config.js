/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'black':'#000000',
      'gray-dark':'#343340',
      'gray-light': '#D9D9D9',
      'gray-text':'#A8A8A8',
      'orange':'#EECCBB'
      
    },
    extend: {fontFamily: {
      worldwide: ["WorldwideHeadline", "cursive"],
      blooming: ["Blooming Elegant Sans", "cursive"],
      poppins: ["Poppins", ...defaultTheme.fontFamily.sans]
    },},

    screens: {
			xl: { max: "1279px" },
			// => @media (max-width: 1279px) { ... }

			lg: { max: "1023px" },
			// => @media (max-width: 1023px) { ... }

			md: { max: "767px" },
			// => @media (max-width: 767px) { ... }

			sm: { max: "639px" },
			// => @media (max-width: 639px) { ... }
		},
  },
  plugins: [],
}
