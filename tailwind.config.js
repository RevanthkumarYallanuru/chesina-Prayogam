/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgPrime:"#1111116B",
        borColor:" #9C9C9C3B",
        smallcolor:"#E7E7E799",
        liear:"linear-gradient(90deg, #EFEFEF 0%, #898989 100%)",
        col1:"#EFEFEF",
        col2:"#898989",
        colorY:"#535353"
      }
    },
  },
  plugins: [],
}