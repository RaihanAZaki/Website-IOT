/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.js",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {
      colors: {
        'PrimaryColor': '#3a5a40',
        'DarkPurple': '#081A51',
        'LightWhite': 'rgba(255, 255, 255, 0.18)',
        'SecondaryColor': '#a3b18a',
      },
       
    },
  },
  plugins: [],

}

