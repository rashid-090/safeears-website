/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
            'xs':'250px',
            'sm': '376px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl' : '1536px'},
       
   extend: {
     colors:{
       'main': 'rgb(248, 177, 51)',
     },
     fontFamily: {
      light:['poppins-light', 'sans-serif'],
      regular:['poppins-regular', 'sans-serif'],
      medium:['poppins-medium', 'sans-serif'],
      semibold:['poppins-semibold', 'sans-serif'],
      bold:['poppins-bold', 'sans-serif'],
      riche:['riche-regular', 'sans-serif'],
     },
   },
  
 },
  plugins: [],
}