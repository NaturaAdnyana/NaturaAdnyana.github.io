module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "2xs": ["0.5rem", "1rem"],
        "10xl": ["10rem", "1"],
      },
      height: {
        "1/7": "14.28571428571429%",
        "screen-1.5": "150vh",
        "screen-2": "200vh",
      },
      padding: {
        0.5: "0.15rem",
        0.75: "0.175rem",
      },
    },
  },
  plugins: [],
};
