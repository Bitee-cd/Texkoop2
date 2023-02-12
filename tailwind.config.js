/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: ["jit"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pri: "#2F7DFF",
        pri_dark: "#2C4E86",
        sec: "#DD8626",
        ter: "#D9D9D9",
      },
      fontFamily: {
        Helvetica: ["Helvetica", "sans-serif"],
        Aharoni: ["Aharoni", "sans-serif"],
      },
      animation: {
        slide: "slide 20s infinite linear",
        slide2: "slide2 20s infinite linear",
        slide3: "slide3 20s infinite linear",
      },

      keyframes: {
        /* top trending */
        slide: {
          "0%": {
            transform: "translate(0, 0px)",
          },

          "50%": {
            transform: "translate(-650px, 0px)",
          },

          "100%": {
            transform: "translate(0, 0px)",
          },
        },
        slide2: {
          "0%": {
            transform: "translate(0, 0px)",
          },

          "50%": {
            transform: "translate(-250px, 0px)",
          },

          "100%": {
            transform: "translate(0, 0px)",
          },
        },
      },
      screens: {},
    },
  },
  plugins: [],
};
