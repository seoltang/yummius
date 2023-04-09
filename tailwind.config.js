const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("@tailwindcss/forms")],
  theme: {
    colors: {
      transparent: colors.transparent,
      white: colors.white,
      gray: colors.stone,
      tomato: "#e56353",
      coral: "#ffaaa0",
      peach: "#ffcdc7",
      "dark-tomato": "#cc5949",
      yellow: "#fcd462",
      "light-yellow": "#ffe597",
      "dark-yellow": "#f5b505",
      green: "#44c4a1",
      success: "#1A7D36",
    },

    fontFamily: {
      title: "PyeongChangPeace-Bold",
    },

    transitionProperty: {
      box: "margin, padding, border, height",
    },

    animation: {
      gradient: "gradient 1s linear reverse infinite",
    },

    keyframes: {
      gradient: {
        "0%": { backgroundPosition: "0%" },
        "25%": { backgroundPosition: "50%" },
        "50%": { backgroundPosition: "100%" },
        "75%": { backgroundPosition: "150%" },
        "100%": { backgroundPosition: "200%" },
      },
    },
  },
};
