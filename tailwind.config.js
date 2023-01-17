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
      screens: {},
    },
  },
  plugins: [],
};
