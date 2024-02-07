/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { custom: ['"Pacifico"', "cursive"] }
    },
  },
  plugins: [],
};
// fontFamily is tailwind convention. 'custom' can be any text and is applied like so: className='font-custom'
// the imported font must be embraced by 'single' and "double" quotes '"like this"'
