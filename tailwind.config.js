module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 9s linear infinite",
        "move-forward": "move-forward 10s linear infinite",
        "move-reverse": "move-reverse 10s linear infinite",
      },
      scale: {
        30: "0.3",
      },
    },
    minHeight: {
      12: "3rem",
    },
  },
  variants: {
    extend: {
      scale: ["group-hover"],
    },
  },
  plugins: [],
};
