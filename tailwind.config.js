
/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
// import plugin from "tailwindcss/plugin";

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        
        n: {
          1: "#FFFFFF",
          2: "#1A1A1A",
          3: "#000000",
          btnGrey:'#CCCCCC',
          textGrey:"#878787"
          
         
        },
      },
      

      fontFamily:      {
    inter: "Inter, sans-serif",
  
  
 
   
     },
      letterSpacing: {
        tagline: ".15em",
      },
      spacing: {
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem",
      },
      opacity: {
        15: ".15",
      },
      transitionDuration: {
        DEFAULT: "0.5",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      borderWidth: {
        DEFAULT: "0.0625rem",
      },
      
    },
  },
  plugins: [
   
  ],
};
