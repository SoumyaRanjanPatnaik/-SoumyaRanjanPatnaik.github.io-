module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 9s linear infinite",
        "move-forward": "move-forward 10s 1s linear infinite",
        "fade-in": "fade-in 500ms linear",
        "fade-out": "fade-out 500ms linear",
      },
      scale: {
        30: "0.3",
      },
    },
    minHeight: {
      12: "3rem",
      "4/5": "80%",
      screen: "100vh",
      "5/6": "88%",
    },
  },
  variants: {
    extend: {
      scale: ["group-hover"],
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
