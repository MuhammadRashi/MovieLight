/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: 'rgb(13, 12, 12)',
        secondary:'rgb(141, 135, 135)'
      }
    },
    
  },
  // colorVariantsTest: (theme) => ({
  //   'blue': 'bg-blue-600 hover:bg-blue-100',
  //   'red': 'bg-red-600 hover:bg-red-100',
  //   'lbColor':'text-gray-500 hover:text-gray-300'
  // }),
  // variants:{
  //   extends:{
  //     colorVariantsTest:['myColor']

  //   }

  // },
  plugins: [],
}