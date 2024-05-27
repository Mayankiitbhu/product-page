/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        kumbh : ['Kumbh Sans', 'Arial']
      },
      borderRadius: {
        'large': '12px',
      }
    },
  },
  plugins: [],
}

