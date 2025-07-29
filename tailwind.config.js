/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
    extend: {
      colors: {
        hadopelagic: 'var(--color-hadopelagic-water)',
        olive: 'var(--color-obscure-olive)',
        silk: 'var(--color-bleached-silk)',
        scarabaeus: 'var(--color-scarabaeus-sacer)',
        blackwash: 'var(--color-black-wash)',
      },
    },
  },
  plugins: [],
}