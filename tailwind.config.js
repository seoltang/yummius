module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("@tailwindcss/forms")],
  theme: {
    colors: {
      tomato: "#e56353",
    },

    fontFamily: {
      title: "PyeongChangPeace-Bold",
    },
  },
};
