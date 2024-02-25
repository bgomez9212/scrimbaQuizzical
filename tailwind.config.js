/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        karla: ["Karla"],
        inter: ["Inter"],
      },
    },
    colors: {
      blue: "#293264",
      lightblue: "#4D5B9E",
      selected: "#D6DBF5",
      white: "#F5F7FB",
      correct: "#94D7A2",
      incorrect: "#F8BCBC",
    },
  },
  plugins: [],
};
