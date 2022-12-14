/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "backgroundColor": {
        "header-bg": '#F6F6F6',
        "lang": "#DCE6FF",
        "accent": "#7296EC",
        "f6f6f6": "#F6F6F6"
      },
      "colors": {
        "price-cl": '#2959CE',
        "cl-555": '#555555',
        "lang-disable": "#A6A6A6",
        "link": "#7F7F7F",
      },
      "maxWidth": {
        "275": "275px",
        "394": "394px",
        "1050": "1050px",
        "404": "404px",
        "797": "797px"
      },
      "width": {
        "275": "275px",
        "696": "696px"
      },
      "minHeight": {
        "180": "180px"
      }
    },
  },
  plugins: [],
}