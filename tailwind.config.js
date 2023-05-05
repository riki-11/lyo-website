/** @type {import('tailwindcss').Config} */

const LYO_DARK_GREEN = "#145D40";
const LYO_GREEN = "#018E42";
const LYO_LIGHT_GREEN = '#86DBA7';
const LYO_CREAM = "#EDEAD0";
const LYO_SALMON = "#D57A66";
const LYO_RED = "#C8553D";
const LYO_BLUE = "#00677C";
const LYO_LAVENDER = "#706993";
const LYO_NAVY = "#121619";

module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
            './src/components/**/*.{js,ts,jsx,tsx,mdx}',
            './src/app/**/*.{js,ts,jsx,tsx,mdx}',],
  theme: {
    extend: {
      colors: {
        "lyo-darkgreen": LYO_DARK_GREEN,
        "lyo-green": LYO_GREEN,
        "lyo-lightgreen": LYO_LIGHT_GREEN,
        "lyo-cream": LYO_CREAM,
        "lyo-salmon": LYO_SALMON,
        "lyo-red": LYO_RED,
        "lyo-blue": LYO_BLUE,
        "lyo-lavender": LYO_LAVENDER,
        "lyo-navy": LYO_NAVY
      },
      fontFamily : {
        title: ['Roboto Slab'],
        body: ['Abel']  
      }, 
    },
  },
  plugins: [],
}

