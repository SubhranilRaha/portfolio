/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
    fontFamily: {
      rob: ["Inconsolata", "monospace"],
      mono: ["Archivo Black", "sans-serif"],
    },
  },
  plugins: [require('tailwind-scrollbar'),],
  variants: {
    scrollbar: ['rounded']
}
}
