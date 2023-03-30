/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx}",
      
    ],
    theme: {
      fontSize: {
        'sm': '0.875rem',
        'base': '1em',
        'lg': '1.25em',
        'xl': '1.5rem'
      },
      height: {
        button: '45px' 
      },
      extend: {},
    },
    plugins: [],
  }
  